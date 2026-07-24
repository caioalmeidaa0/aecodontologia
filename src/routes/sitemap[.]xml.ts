import { createAPIFileRoute } from '@tanstack/react-start/api'

const BASE_URL = ""

export const Route = createAPIFileRoute('/sitemap.xml')({
  GET: async () => {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${BASE_URL}/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>
</urlset>`;
    return new Response(xml, {
      headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
    });
  },
})
