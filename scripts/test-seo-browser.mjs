import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';

// Dedicated, ephemeral test browser. Never connects to a user's browser/profile.
const baseURL = process.env.BASE_URL ?? 'http://127.0.0.1:4323';
const evidenceDir = process.env.EVIDENCE_DIR ?? '/tmp/kutzu-seo-evidence';
const origin = new URL(baseURL).origin;
assert(['127.0.0.1', 'localhost', '[::1]'].includes(new URL(baseURL).hostname), 'Only a local test server is allowed');
await mkdir(evidenceDir, { recursive: true });
const browser = await chromium.launch({ headless: true });
const results = [];
const blockedExternal = [];
const mockedRequests = [];
const mobile = { width: 390, height: 844 };

async function context(options = {}, mock = null, blockScripts = false) {
  const ctx = await browser.newContext({ baseURL, viewport: mobile, serviceWorkers: 'block', ...options });
  await ctx.route('**/*', async (route) => {
    const request = route.request();
    const url = new URL(request.url());
    if (url.origin === origin) {
      if (blockScripts && request.resourceType() === 'script') return route.abort('failed');
      return route.continue();
    }
    // This is the only external endpoint simulated; nothing leaves the machine.
    if (url.href === 'https://api.web3forms.com/submit' && request.method() === 'POST' && mock) {
      mockedRequests.push({ method: request.method(), endpoint: url.href });
      const answer = mock();
      if (answer.abort) return route.abort('failed');
      return route.fulfill({ status: answer.status ?? 200, contentType: 'application/json', body: answer.body });
    }
    blockedExternal.push({ method: request.method(), url: url.origin + url.pathname });
    return route.abort('blockedbyclient');
  });
  return ctx;
}

async function readable(page) {
  await page.waitForFunction(() => new URL(document.querySelector('link[rel="canonical"]').href).pathname === location.pathname);
  await page.locator('main h1').waitFor({ state: 'visible' });
  const state = await page.evaluate(() => {
    const heading = document.querySelector('main h1');
    let readable = Boolean(heading?.textContent.trim());
    for (let element = heading; element; element = element.parentElement) {
      const style = getComputedStyle(element);
      if (style.display === 'none' || style.visibility === 'hidden' || Number(style.opacity) === 0) readable = false;
    }
    return {
      readable,
      overflow: document.documentElement.scrollWidth - window.innerWidth,
      loader: Boolean(document.querySelector('#page-loader, #transition-overlay')),
    };
  });
  assert.equal(state.readable, true, `Content hidden at ${page.url()}`);
  assert.ok(state.overflow <= 1, `Horizontal overflow (${state.overflow}px) at ${page.url()}`);
  assert.equal(state.loader, false);
  assert.ok(await page.locator('main a[href*="/contact/"]').count() > 0 || new URL(page.url()).pathname.endsWith('/contact/'));
}

async function settle(page) {
  await page.evaluate(async () => {
    await document.fonts.ready;
    await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    const animations = document.getAnimations().filter((animation) => {
      const endTime = animation.effect?.getComputedTiming().endTime;
      return Number.isFinite(endTime) && animation.playState === 'running';
    });
    await Promise.all(animations.map((animation) => animation.finished.catch(() => {})));
    await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  });
}

async function capture(page, filename, fullPage = true, scriptsEnabled = true) {
  if (scriptsEnabled) await settle(page);
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
  if (scriptsEnabled) await settle(page);
  await page.screenshot({ path: path.join(evidenceDir, filename), fullPage });
}

async function navigate(page, pathname) {
  const response = await page.goto(pathname, { waitUntil: 'networkidle' });
  assert.equal(response.status(), 200, pathname);
  await readable(page);
}

async function test(name, run) {
  const started = Date.now();
  try {
    await run();
    results.push({ name, status: 'passed', durationMs: Date.now() - started });
    console.log(`PASS ${name}`);
  } catch (error) {
    results.push({ name, status: 'failed', error: error.stack ?? String(error), durationMs: Date.now() - started });
    console.error(`FAIL ${name}: ${error.message}`);
  }
}

try {
  await test('Mobile: accueil → identité visuelle → Hortzkina → contact, menu et FR/EU', async () => {
    const ctx = await context();
    try {
      const page = await ctx.newPage();
      const errors = [];
      page.on('pageerror', (error) => errors.push(error.message));
      await navigate(page, '/');
      await capture(page, 'seo-home-mobile.png');
      await page.locator('#mobile-menu-btn').click();
      await page.waitForFunction(() => document.querySelector('#mobile-menu-btn').getAttribute('aria-expanded') === 'true');
      assert.equal(await page.locator('#mobile-menu').evaluate((menu) => menu.inert), false);
      await page.keyboard.press('Escape');
      assert.equal(await page.locator('#mobile-menu-btn').getAttribute('aria-expanded'), 'false');
      assert.equal(await page.locator('#mobile-menu').evaluate((menu) => menu.inert), true);
      await page.locator('#mobile-menu-btn').click();
      await page.locator('#mobile-menu-close').click();
      assert.equal(await page.locator('#mobile-menu-btn').getAttribute('aria-expanded'), 'false');
      await page.locator('main a[href="/services/identite-visuelle/"]').first().click();
      await page.waitForURL('**/services/identite-visuelle/');
      await readable(page);
      await capture(page, 'seo-identity-mobile.png');
      await page.locator('main a[href="/realisations/hortzkina/"]').click();
      await page.waitForURL('**/realisations/hortzkina/');
      await readable(page);
      await capture(page, 'seo-hortzkina-mobile.png');
      await page.locator('main a[href="/contact/"]').first().click();
      await page.waitForURL('**/contact/');
      await readable(page);
      await page.locator('#mobile-menu-btn').click();
      await page.locator('#mobile-menu a[hreflang="eu"]').click();
      await page.waitForURL('**/eu/contact/');
      await readable(page);
      assert.equal(await page.locator('html').getAttribute('lang'), 'eu');
      await page.locator('#mobile-menu-btn').click();
      await page.locator('#mobile-menu a[hreflang="fr"]').click();
      await page.waitForURL(`${baseURL}/contact/`);
      await readable(page);
      assert.equal(await page.locator('html').getAttribute('lang'), 'fr');
      assert.deepEqual(errors, []);
    } finally { await ctx.close(); }
  });

  await test('Sans JavaScript : quatre pages FR/EU lisibles, navigation et contact utilisables', async () => {
    const ctx = await context({ javaScriptEnabled: false });
    try {
      const page = await ctx.newPage();
      for (const locale of ['', '/eu']) {
        for (const suffix of ['/', '/services/identite-visuelle/', '/realisations/hortzkina/', '/contact/']) {
          await navigate(page, `${locale}${suffix}`);
          assert.ok(await page.locator('header noscript a').count() > 0);
          const overlap = await page.evaluate(() => {
            const header = document.querySelector('#site-header');
            const firstContent = document.querySelector('main a, main h1');
            return getComputedStyle(header).position === 'fixed'
              ? header.getBoundingClientRect().bottom - firstContent.getBoundingClientRect().top
              : 0;
          });
          assert.ok(overlap <= 0, `No-JS header covers first content by ${overlap}px at ${page.url()}`);
          if (suffix === '/contact/') {
            assert.equal(await page.locator('#contact-form').isVisible(), false);
            assert.equal(await page.locator('noscript a[href^="mailto:"]').isVisible(), true);
            assert.equal(await page.locator('noscript a[href^="tel:"]').isVisible(), true);
          }
        }
      }
      await navigate(page, '/');
      await capture(page, 'seo-home-nojs-mobile.png', true, false);
    } finally { await ctx.close(); }
  });

  await test('Mouvement réduit : contenu FR/EU lisible et défilement animé désactivé', async () => {
    const ctx = await context({ reducedMotion: 'reduce' });
    try {
      const page = await ctx.newPage();
      for (const pathname of ['/', '/eu/', '/services/identite-visuelle/', '/eu/services/identite-visuelle/']) {
        await navigate(page, pathname);
        assert.equal(await page.evaluate(() => matchMedia('(prefers-reduced-motion: reduce)').matches), true);
        assert.equal(await page.locator('html').evaluate((html) => html.classList.contains('lenis')), false);
      }
    } finally { await ctx.close(); }
  });

  await test('Chargement JavaScript bloqué : contenu et liens FR/EU restent lisibles', async () => {
    const ctx = await context({}, null, true);
    try {
      const page = await ctx.newPage();
      for (const pathname of ['/', '/eu/']) await navigate(page, pathname);
    } finally { await ctx.close(); }
  });

  await test('Stockage refusé : aucune dépendance pour afficher le contenu FR/EU', async () => {
    const ctx = await context();
    try {
      await ctx.addInitScript(() => {
        for (const property of ['localStorage', 'sessionStorage']) {
          Object.defineProperty(window, property, { get() { throw new DOMException('Storage blocked for test', 'SecurityError'); } });
        }
      });
      const page = await ctx.newPage();
      const errors = [];
      page.on('pageerror', (error) => errors.push(error.message));
      for (const pathname of ['/', '/eu/']) await navigate(page, pathname);
      assert.deepEqual(errors, []);
    } finally { await ctx.close(); }
  });

  const outcomes = [
    ['succès confirmé', { body: '{"success":true}' }, true],
    ['HTTP 200 avec refus applicatif', { body: '{"success":false}' }, false],
    ['HTTP 500', { status: 500, body: '{"success":false}' }, false],
    ['échec réseau', { abort: true }, false],
    ['JSON invalide', { body: 'invalid JSON' }, false],
  ];
  for (const [name, response, success] of outcomes) {
    await test(`Formulaire mocké : ${name}${success ? '' : ', conservation et nouvel essai'}`, async () => {
      let currentResponse = response;
      let count = 0;
      const ctx = await context({}, () => { count++; return currentResponse; });
      try {
        const page = await ctx.newPage();
        await navigate(page, '/contact/');
        await page.locator('#name').fill('Recette locale Studio Kutzu');
        await page.locator('#email').fill('seo-test@example.invalid');
        await page.locator('#subject').selectOption('identite-visuelle');
        await page.locator('#message').fill('Message de recette entièrement intercepté, aucun envoi réel.');
        await page.locator('#contact-form button[type="submit"]').click();
        await page.locator(success ? '#form-success' : '#form-error').waitFor({ state: 'visible' });
        assert.equal(count, 1);
        if (success) {
          assert.equal(await page.locator('#contact-form').isVisible(), false);
        } else {
          assert.equal(await page.locator('#form-success').isVisible(), false);
          assert.equal(await page.locator('#name').inputValue(), 'Recette locale Studio Kutzu');
          assert.equal(await page.locator('#email').inputValue(), 'seo-test@example.invalid');
          assert.equal(await page.locator('#subject').inputValue(), 'identite-visuelle');
          assert.equal(await page.locator('#message').inputValue(), 'Message de recette entièrement intercepté, aucun envoi réel.');
          assert.equal(await page.locator('#contact-form button[type="submit"]').isEnabled(), true);
          currentResponse = { body: '{"success":true}' };
          await page.locator('#contact-form button[type="submit"]').click();
          await page.locator('#form-success').waitFor({ state: 'visible' });
          assert.equal(count, 2);
          assert.equal(await page.locator('#form-error').isVisible(), false);
        }
      } finally { await ctx.close(); }
    });
  }

  await test('Ordinateur : accueil, service, réalisation et contact sans débordement', async () => {
    const ctx = await context({ viewport: { width: 1440, height: 1000 } });
    try {
      const page = await ctx.newPage();
      for (const pathname of ['/', '/services/identite-visuelle/', '/realisations/hortzkina/', '/contact/']) {
        await navigate(page, pathname);
        if (pathname === '/services/identite-visuelle/') await capture(page, 'seo-identity-desktop-viewport.png', false);
      }
      await navigate(page, '/');
      await capture(page, 'seo-home-desktop.png');
    } finally { await ctx.close(); }
  });

  await test('Captures mobiles directes après chargement des polices et fin des animations', async () => {
    const ctx = await context();
    try {
      const page = await ctx.newPage();
      await navigate(page, '/services/identite-visuelle/');
      await capture(page, 'seo-identity-mobile-viewport.png', false);
      await capture(page, 'seo-identity-mobile-direct.png');
      await navigate(page, '/realisations/hortzkina/');
      await capture(page, 'seo-hortzkina-mobile-viewport.png', false);
      await capture(page, 'seo-hortzkina-mobile-direct.png');
    } finally { await ctx.close(); }
  });
} finally {
  await browser.close();
  await writeFile(path.join(evidenceDir, 'browser-tests.json'), JSON.stringify({
    testedAt: new Date().toISOString(), baseURL, results, mockedRequests, blockedExternal,
    note: 'Isolated Playwright browser; every external request blocked or fulfilled locally. No production requests or form submissions.',
  }, null, 2));
}

console.log(`${results.filter((result) => result.status === 'passed').length}/${results.length} scenarios passed. ${mockedRequests.length} simulated form requests.`);
if (results.some((result) => result.status === 'failed')) process.exitCode = 1;
