import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

// Use the actual Vercel compiler, not a hand-written source-pattern emulator.
// Point to @vercel/routing-utils, or the routing-utils chunk in the installed CLI.
const compilerPath = process.env.VERCEL_ROUTING_UTILS_MODULE;
assert.ok(compilerPath, 'Set VERCEL_ROUTING_UTILS_MODULE to the installed Vercel routing compiler module');
const compilerModule = await import(pathToFileURL(compilerPath).href);
const compiler = compilerModule.getTransformedRoutes
  ? compilerModule
  : compilerModule.require_dist?.();
assert.equal(typeof compiler?.getTransformedRoutes, 'function', 'Module must expose the official getTransformedRoutes compiler');

const config = JSON.parse(await readFile(new URL('../vercel.json', import.meta.url), 'utf8'));
const { routes, error } = compiler.getTransformedRoutes(config);
assert.equal(error, null);
const hostRoutes = routes.filter((route) => route.has?.some((condition) => condition.type === 'host'));
assert.equal(hostRoutes.length, 1);
const redirect = hostRoutes[0];
assert.deepEqual(redirect.has, [{ type: 'host', value: 'www.studiokutzu.com' }]);
assert.equal(redirect.status, 308);
const compiled = new RegExp(redirect.src);

const sitemap = await readFile(new URL('../dist/sitemap.xml', import.meta.url), 'utf8');
const publishedPaths = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => new URL(match[1]).pathname);
assert.ok(publishedPaths.length > 0, 'Run npm run build first');
const paths = [...new Set([
  ...publishedPaths,
  ...publishedPaths.filter((pathname) => pathname !== '/').map((pathname) => pathname.slice(0, -1)),
  '/sitemap.xml', '/robots.txt', '/logo.svg', '/portfolio/ddec-64.png', '/_astro/example.webp',
])];

for (const pathname of paths) {
  assert.ok(compiled.test(pathname), `Host redirect misses ${pathname}`);
  const location = pathname.replace(compiled, redirect.headers.Location);
  const destination = new URL(location);
  assert.equal(destination.origin, 'https://studiokutzu.com');
  assert.equal(destination.pathname, pathname, `Host redirect changes path ${pathname}`);
  assert.equal(destination.search, '', 'Destination must not override request query parameters');
  assert.ok(!destination.pathname.startsWith('//'), `Duplicate root slash for ${pathname}`);
}

// Reproduce the production defect using the same compiler: the old wildcard
// misses both the root slash and normalized page paths ending in a slash.
const oldConfig = structuredClone(config);
oldConfig.redirects[0].source = '/:path*';
oldConfig.redirects[0].destination = 'https://studiokutzu.com/:path*';
const oldRoute = compiler.getTransformedRoutes(oldConfig).routes.find((route) => route.has);
assert.equal(new RegExp(oldRoute.src).test('/'), false);
assert.equal(new RegExp(oldRoute.src).test('/services/identite-visuelle/'), false);

console.log(`Vercel compiler regression passed: ${paths.length} paths, root, slash variants and assets; compiled pattern ${redirect.src}.`);
console.log('This checks compiled matching and destination preservation. HTTP/HTTPS behavior and query forwarding still require deployed HTTP checks.');
