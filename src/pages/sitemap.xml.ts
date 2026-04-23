import type { APIRoute } from 'astro';
import { LOCALES, DEFAULT_LOCALE, HTML_LANG } from '../i18n/config';
import { localePath } from '../i18n/utils';

const pages = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/services', priority: 0.9, changefreq: 'monthly' },
  { path: '/realisations', priority: 0.9, changefreq: 'weekly' },
  { path: '/a-propos', priority: 0.7, changefreq: 'monthly' },
  { path: '/contact', priority: 0.8, changefreq: 'monthly' },
];

const site = 'https://studiokutzu.com';

export const GET: APIRoute = () => {
  const today = new Date().toISOString().split('T')[0];

  const urlEntries = pages.flatMap((page) =>
    LOCALES.map((loc) => {
      const localizedUrl = `${site}${localePath(page.path, loc)}`;
      const alternates = LOCALES.map(
        (alt) => `      <xhtml:link rel="alternate" hreflang="${HTML_LANG[alt]}" href="${site}${localePath(page.path, alt)}" />`
      ).join('\n');
      const xDefault = `      <xhtml:link rel="alternate" hreflang="x-default" href="${site}${localePath(page.path, DEFAULT_LOCALE)}" />`;
      return `  <url>
    <loc>${localizedUrl}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
${alternates}
${xDefault}
  </url>`;
    })
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries.join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
