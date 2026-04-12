import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.join(__dirname, '..', 'public', 'portfolio');

const sites = [
  { name: 'arnaga', url: 'https://www.arnaga.com' },
  { name: 'arima', url: 'https://www.arima-agencements.com' },
  { name: 'hortzkina', url: 'https://www.hortzkina.fr' },
  { name: 'elkarbat', url: 'https://www.elkarbat.eus' },
  { name: 'goicoetchea', url: 'https://poterie-goicoechea.com' },
  { name: 'hatsa', url: 'https://www.hatsa-sport.com' },
  { name: 'fep-cfdt', url: 'https://www.fepcfdtbbl.fr' },
];

// Common cookie banner selectors and text patterns
const cookieSelectors = [
  // Buttons by text content (most common)
  'text=/accepter/i',
  'text=/accept all/i',
  'text=/tout accepter/i',
  'text=/j\'accepte/i',
  'text=/autoriser/i',
  'text=/OK/i',
  'text=/got it/i',
  'text=/agree/i',
  'text=/continuer/i',
  'text=/fermer/i',
  // Common class/id patterns
  '[id*="cookie"] button',
  '[class*="cookie"] button',
  '[id*="consent"] button',
  '[class*="consent"] button',
  '[id*="rgpd"] button',
  '[class*="rgpd"] button',
  '[id*="gdpr"] button',
  '[class*="gdpr"] button',
  '#tarteaucitronPersonalize2',
  '#tarteaucitronAllAllowed',
  '.cc-accept',
  '.cc-dismiss',
  '#onetrust-accept-btn-handler',
  '.cky-btn-accept',
  '[data-testid="cookie-accept"]',
  'button[aria-label*="cookie"]',
  'button[aria-label*="accepter"]',
  // Axeptio (common in French sites)
  '#axeptio_btn_acceptAll',
  '[class*="axeptio"] button',
];

async function dismissCookies(page) {
  // Wait for cookie banners to appear (they often load with a delay)
  await page.waitForTimeout(4000);

  for (const selector of cookieSelectors) {
    try {
      const el = page.locator(selector).first();
      if (await el.isVisible({ timeout: 300 })) {
        await el.click();
        console.log(`  ✓ Cookie banner dismissed with: ${selector}`);
        await page.waitForTimeout(1000);
        return true;
      }
    } catch {
      // selector not found, try next
    }
  }

  // Also try clicking any visible button inside common cookie containers
  const containers = ['[id*="cookie"]', '[class*="cookie"]', '[id*="consent"]', '[class*="consent"]', '[id*="tarteaucitron"]', '[class*="tarteaucitron"]'];
  for (const container of containers) {
    try {
      const buttons = page.locator(`${container} button, ${container} a`);
      const count = await buttons.count();
      for (let i = 0; i < count; i++) {
        const btn = buttons.nth(i);
        const text = (await btn.textContent())?.toLowerCase() || '';
        if (text.includes('accept') || text.includes('autoriser') || text.includes('ok') || text.includes('tout') || text.includes('agree')) {
          if (await btn.isVisible({ timeout: 300 })) {
            await btn.click();
            console.log(`  ✓ Cookie banner dismissed via container button: "${text.trim()}"`);
            await page.waitForTimeout(1000);
            return true;
          }
        }
      }
    } catch {
      // continue
    }
  }

  console.log('  ⚠ No cookie banner found');
  return false;
}

async function captureSite(browser, site) {
  console.log(`\n📸 Capturing ${site.name} (${site.url})...`);

  // Desktop capture (1440x900)
  const desktopCtx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });
  const desktopPage = await desktopCtx.newPage();
  try {
    await desktopPage.goto(site.url, { waitUntil: 'networkidle', timeout: 45000 });
    // Extra wait for lazy-loaded content / animations
    await desktopPage.waitForTimeout(3000);
    await dismissCookies(desktopPage);
    // Wait for cookie banner to fully disappear + any animations
    await desktopPage.waitForTimeout(3000);
    const desktopPath = path.join(outputDir, `${site.name}-desktop.jpg`);
    await desktopPage.screenshot({ path: desktopPath, type: 'jpeg', quality: 90 });
    console.log(`  ✅ Desktop saved: ${site.name}-desktop.jpg`);
  } catch (err) {
    console.error(`  ❌ Desktop failed: ${err.message}`);
  }
  await desktopCtx.close();

  // Mobile capture (390x844, iPhone-like)
  const mobileCtx = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
    isMobile: true,
  });
  const mobilePage = await mobileCtx.newPage();
  try {
    await mobilePage.goto(site.url, { waitUntil: 'networkidle', timeout: 45000 });
    await mobilePage.waitForTimeout(3000);
    await dismissCookies(mobilePage);
    await mobilePage.waitForTimeout(3000);
    const mobilePath = path.join(outputDir, `${site.name}-mobile.jpg`);
    await mobilePage.screenshot({ path: mobilePath, type: 'jpeg', quality: 90 });
    console.log(`  ✅ Mobile saved: ${site.name}-mobile.jpg`);
  } catch (err) {
    console.error(`  ❌ Mobile failed: ${err.message}`);
  }
  await mobileCtx.close();
}

async function main() {
  console.log('🚀 Starting captures of reference sites...\n');
  const browser = await chromium.launch({ headless: true });

  for (const site of sites) {
    await captureSite(browser, site);
  }

  await browser.close();
  console.log('\n✅ All captures done!');
}

main().catch(console.error);
