// Sitemap sa generuje pri zostavení z katalógu testov – nový ročník sa doň dostane automaticky.
import type { APIRoute } from 'astro';
import { testsCatalog } from '../data/testsCatalog';
import { SITE_URL } from '../lib/site';

export const GET: APIRoute = () => {
  const today = new Date().toISOString().slice(0, 10);
  const urls = [
    { loc: `${SITE_URL}/`, changefreq: 'weekly', priority: '1.0' },
    ...testsCatalog
      .filter((t) => t.status === 'ready')
      .map((t) => ({ loc: `${SITE_URL}/test/${t.slug}/`, changefreq: 'monthly', priority: '0.9' }))
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
