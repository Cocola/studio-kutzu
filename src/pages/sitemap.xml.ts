import type { APIRoute } from 'astro';
import { LOCALES, DEFAULT_LOCALE, HTML_LANG } from '../i18n/config';
import { localePath } from '../i18n/utils';
import { portfolio, services } from '../data/site';

const pages = [
  '/', '/services', '/realisations', '/a-propos', '/contact',
  ...services.map((service) => `/services/${service.slug}`),
  ...portfolio.map((project) => `/realisations/${project.slug}`),
];

const site = 'https://studiokutzu.com';

export const GET: APIRoute = () => {
  const urlEntries = pages.flatMap((page) =>
    LOCALES.map((loc) => {
      const localizedUrl = `${site}${localePath(page, loc)}`;
      const alternates = LOCALES.map(
        (alt) => `      <xhtml:link rel="alternate" hreflang="${HTML_LANG[alt]}" href="${site}${localePath(page, alt)}" />`
      ).join('\n');
      const xDefault = `      <xhtml:link rel="alternate" hreflang="x-default" href="${site}${localePath(page, DEFAULT_LOCALE)}" />`;
      return `  <url>
    <loc>${localizedUrl}</loc>
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
