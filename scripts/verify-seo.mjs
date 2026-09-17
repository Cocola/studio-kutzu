import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import { parse } from 'parse5';

// Run after `npm run build`. An optional baseline checks that EU copy is preserved:
// npm run test:seo -- --baseline=/absolute/path/to/previous/dist
const args = process.argv.slice(2);
const dist = path.resolve(args.find(arg => arg.startsWith('--dist='))?.slice(7) ?? 'dist');
const baselineArg = args.find(arg => arg.startsWith('--baseline='))?.slice(11);
const baseline = baselineArg ? path.resolve(baselineArg) : undefined;
const origin = 'https://studiokutzu.com';
const failures = [];
let checkedLinks = 0;
let checkedAssets = 0;
let checkedEuPages = 0;

function check(condition, message) {
  if (!condition) failures.push(message);
}

async function filesWithin(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const lists = await Promise.all(entries.map(entry => entry.isDirectory()
    ? filesWithin(path.join(dir, entry.name))
    : [path.join(dir, entry.name)]));
  return lists.flat();
}

function nodes(root) {
  return [root, ...(root.childNodes ?? []).flatMap(nodes)];
}

function attr(node, name) {
  return node.attrs?.find(item => item.name === name)?.value;
}

function text(node) {
  if (['script', 'style', 'noscript'].includes(node.tagName)) return '';
  return node.nodeName === '#text' ? node.value : (node.childNodes ?? []).map(text).join(' ');
}

function normalize(value) {
  return value.replace(/\s+/g, ' ').trim();
}

function pageInfo(html, pathname) {
  const tree = parse(html);
  const all = nodes(tree);
  const links = all.filter(node => node.tagName === 'link');
  const canonical = links.filter(node => attr(node, 'rel') === 'canonical');
  const alternates = links.filter(node => attr(node, 'rel') === 'alternate' && attr(node, 'hreflang'));
  const meta = name => all.find(node => node.tagName === 'meta' && attr(node, 'name') === name);
  return {
    pathname, all, canonical, alternates,
    title: normalize(text(all.find(node => node.tagName === 'title') ?? {})),
    description: attr(meta('description') ?? {}, 'content') ?? '',
    lang: attr(all.find(node => node.tagName === 'html') ?? {}, 'lang'),
    main: all.find(node => node.tagName === 'main'),
    ids: new Set(all.map(node => attr(node, 'id')).filter(Boolean)),
  };
}

function flattenedJson(value) {
  if (Array.isArray(value)) return value.flatMap(flattenedJson);
  if (!value || typeof value !== 'object') return [];
  return [value, ...Object.values(value).flatMap(flattenedJson)];
}

const files = await filesWithin(dist);
const availableFiles = new Set(files.map(file => path.relative(dist, file).split(path.sep).join('/')));
const htmlFiles = files.filter(file => file.endsWith('.html'));
const pages = new Map();
for (const file of htmlFiles) {
  const relative = path.relative(dist, file).split(path.sep).join('/');
  const pathname = `/${relative.replace(/index\.html$/, '')}`;
  pages.set(pathname, pageInfo(await fs.readFile(file, 'utf8'), pathname));
}
check(pages.size === 54, `Expected 54 published pages, found ${pages.size}. Update this expectation when intentionally adding routes.`);
check([...pages.keys()].filter(key => key.startsWith('/eu/')).length === 27, 'Expected 27 Basque pages.');

const sitemapTree = parse(await fs.readFile(path.join(dist, 'sitemap.xml'), 'utf8'));
const sitemapNodes = nodes(sitemapTree);
const sitemapUrls = sitemapNodes.filter(node => node.tagName === 'loc').map(node => normalize(text(node)));
check(sitemapUrls.length === pages.size, `Sitemap contains ${sitemapUrls.length} URLs for ${pages.size} pages.`);
check(new Set(sitemapUrls).size === sitemapUrls.length, 'Sitemap contains duplicate URLs.');
for (const url of sitemapUrls) {
  let parsed;
  try { parsed = new URL(url); } catch { check(false, `Invalid sitemap URL: ${url}`); continue; }
  check(parsed.origin === origin && parsed.pathname.endsWith('/') && !parsed.search && !parsed.hash, `Noncanonical sitemap URL: ${url}`);
  check(pages.has(parsed.pathname), `Sitemap points to missing page: ${url}`);
}

const titles = new Map();
const descriptions = new Map();
const businessDescriptions = new Map();
for (const page of pages.values()) {
  const prefix = page.pathname;
  const expectedUrl = `${origin}${prefix}`;
  check(prefix.endsWith('/'), `${prefix}: page route is missing its final slash.`);
  check(sitemapUrls.includes(expectedUrl), `${prefix}: missing from sitemap.`);
  check(page.canonical.length === 1 && attr(page.canonical[0], 'href') === expectedUrl, `${prefix}: canonical must point to itself exactly once.`);
  const expectedLocale = prefix.startsWith('/eu/') ? 'eu' : 'fr';
  check(page.lang === expectedLocale, `${prefix}: HTML language should be ${expectedLocale}.`);
  check(Boolean(page.main), `${prefix}: no main content landmark.`);
  check(page.all.filter(node => node.tagName === 'h1').length === 1, `${prefix}: expected exactly one h1.`);
  check(page.title.length > 0, `${prefix}: empty title.`);
  check(page.description.length > 0, `${prefix}: empty meta description.`);
  check(!titles.has(page.title), `${prefix}: title duplicated with ${titles.get(page.title)}.`);
  check(!descriptions.has(page.description), `${prefix}: description duplicated with ${descriptions.get(page.description)}.`);
  titles.set(page.title, prefix);
  descriptions.set(page.description, prefix);
  const robots = page.all.find(node => node.tagName === 'meta' && attr(node, 'name') === 'robots');
  check(!/(?:^|[\s,])(noindex|none)(?:$|[\s,])/i.test(attr(robots ?? {}, 'content') ?? ''), `${prefix}: unexpectedly noindex.`);
  const ogUrl = page.all.find(node => node.tagName === 'meta' && attr(node, 'property') === 'og:url');
  check(attr(ogUrl ?? {}, 'content') === expectedUrl, `${prefix}: og:url differs from canonical.`);

  const frPath = expectedLocale === 'eu' ? prefix.slice(3) : prefix;
  const expectedAlternates = { fr: frPath, eu: `/eu${frPath}`, 'x-default': frPath };
  check(page.alternates.length === 3, `${prefix}: expected fr, eu and x-default alternates.`);
  for (const [locale, alternatePath] of Object.entries(expectedAlternates)) {
    const matches = page.alternates.filter(node => attr(node, 'hreflang') === locale);
    check(matches.length === 1 && attr(matches[0], 'href') === `${origin}${alternatePath}`, `${prefix}: incorrect ${locale} alternate.`);
    const target = pages.get(alternatePath);
    check(Boolean(target), `${prefix}: ${locale} alternate is missing.`);
    if (target) {
      check(target.alternates.some(node => attr(node, 'hreflang') === expectedLocale && attr(node, 'href') === expectedUrl), `${prefix}: ${locale} alternate is not reciprocal.`);
    }
  }

  for (const node of page.all) {
    if (node.tagName === 'a') {
      const href = attr(node, 'href');
      if (!href || /^(mailto:|tel:|javascript:|data:)/i.test(href)) continue;
      let url;
      try { url = new URL(href, expectedUrl); } catch { check(false, `${prefix}: invalid link ${href}`); continue; }
      if (!['studiokutzu.com', 'www.studiokutzu.com'].includes(url.hostname)) continue;
      checkedLinks++;
      check(url.origin === origin, `${prefix}: internal link uses noncanonical host/protocol: ${href}`);
      const target = pages.get(url.pathname);
      const isAsset = availableFiles.has(decodeURIComponent(url.pathname.slice(1)));
      check(Boolean(target) || isAsset, `${prefix}: broken or noncanonical internal link ${href}`);
      if (target && url.hash) {
        check(target.ids.has(decodeURIComponent(url.hash.slice(1))), `${prefix}: missing anchor target ${href}`);
      }
    }
    const sources = [];
    if (['img', 'script', 'source', 'video', 'audio'].includes(node.tagName) && attr(node, 'src')) sources.push(attr(node, 'src'));
    if (['img', 'source'].includes(node.tagName) && attr(node, 'srcset')) {
      sources.push(...attr(node, 'srcset').split(',').map(value => value.trim().split(/\s+/)[0]));
    }
    if (node.tagName === 'link' && ['stylesheet', 'icon', 'apple-touch-icon', 'preload', 'modulepreload', 'manifest'].includes(attr(node, 'rel'))) sources.push(attr(node, 'href'));
    for (const source of sources.filter(Boolean)) {
      if (/^(data:|blob:)/i.test(source)) continue;
      const url = new URL(source, expectedUrl);
      if (url.origin !== origin) continue;
      checkedAssets++;
      check(availableFiles.has(decodeURIComponent(url.pathname.slice(1))), `${prefix}: missing asset ${source}`);
    }
  }

  const jsonNodes = page.all.filter(node => node.tagName === 'script' && attr(node, 'type') === 'application/ld+json');
  const schema = [];
  for (const node of jsonNodes) {
    try { schema.push(...flattenedJson(JSON.parse((node.childNodes ?? []).map(child => child.value ?? '').join('')))); }
    catch (error) { check(false, `${prefix}: invalid JSON-LD: ${error.message}`); }
  }
  const business = schema.find(item => item['@type'] === 'ProfessionalService');
  check(Boolean(business), `${prefix}: ProfessionalService schema missing.`);
  if (business) {
    check(business['@id'] === `${origin}/#business`, `${prefix}: unstable business @id.`);
    check(business.url === `${origin}/`, `${prefix}: business URL must point to homepage.`);
    check(typeof business.description === 'string' && business.description.length > 0, `${prefix}: business description missing.`);
    const previous = businessDescriptions.get(expectedLocale);
    check(previous === undefined || previous === business.description, `${prefix}: business description changes with the page.`);
    businessDescriptions.set(expectedLocale, business.description);
  }
  const serviceSchemas = schema.filter(item => item['@type'] === 'Service');
  if (/^\/(?:eu\/)?services\/[^/]+\/$/.test(prefix)) {
    check(serviceSchemas.length === 1, `${prefix}: expected one Service schema.`);
  }
  for (const service of serviceSchemas) {
    check(service.url === expectedUrl, `${prefix}: Service URL differs from canonical.`);
    check(service.provider?.['@id'] === `${origin}/#business`, `${prefix}: Service provider must reference the stable business @id.`);
  }

  if (baseline && expectedLocale === 'eu') {
    const previousFile = path.join(baseline, prefix, 'index.html');
    const previous = pageInfo(await fs.readFile(previousFile, 'utf8'), prefix);
    check(previous.title === page.title, `${prefix}: Basque title changed.`);
    check(previous.description === page.description, `${prefix}: Basque meta description changed.`);
    const currentCopy = normalize(text(page.main ?? {}));
    const previousCopy = nodes(previous.main ?? {}).filter(node => ['p', 'h1', 'h2', 'h3', 'li'].includes(node.tagName));
    for (const node of previousCopy) {
      const fragment = normalize(text(node));
      if (fragment) check(currentCopy.includes(fragment), `${prefix}: Basque copy removed or changed: ${fragment.slice(0, 100)}`);
    }
    checkedEuPages++;
  }
}

if (failures.length) {
  console.error(`SEO checks failed (${failures.length}):\n${failures.map(message => `- ${message}`).join('\n')}`);
  process.exitCode = 1;
} else {
  assert.equal(pages.size, sitemapUrls.length);
  console.log(`SEO checks passed: ${pages.size} pages, ${sitemapUrls.length} sitemap URLs, ${checkedLinks} internal links, ${checkedAssets} asset references, reciprocal hreflang and valid JSON-LD.`);
  if (baseline) console.log(`Basque copy preserved across ${checkedEuPages} pages against ${baseline}.`);
  else console.log('Basque baseline comparison not requested; pass --baseline=/path/to/previous/dist to verify copy preservation.');
  console.log('This static check does not prove deployed redirects, browser behavior, Google indexing or field performance.');
}
