import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const pages = [
    { url: '/', changefreq: 'daily', priority: '1.0' },
    { url: '/en/', changefreq: 'daily', priority: '0.9' },
    { url: '/submit/', changefreq: 'monthly', priority: '0.5' },
    { url: '/en/submit/', changefreq: 'monthly', priority: '0.5' },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url>
    <loc>${site}${p.url}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
