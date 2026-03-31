import type { APIRoute } from 'astro';

const pages = [
  { url: '/', priority: 1.0, changefreq: 'weekly' },
  { url: '/services', priority: 0.9, changefreq: 'monthly' },
  { url: '/realisations', priority: 0.9, changefreq: 'weekly' },
  { url: '/a-propos', priority: 0.7, changefreq: 'monthly' },
  { url: '/contact', priority: 0.8, changefreq: 'monthly' },
];

const site = 'https://studiokutzu.com';

export const GET: APIRoute = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url>
    <loc>${site}${p.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
