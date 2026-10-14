import type { APIRoute } from 'astro';
import { withBase } from '@/utils/url';

/** Built from the configured site so the sitemap link follows the domain and base path. */
export const GET: APIRoute = ({ site }) =>
  new Response(
    `User-agent: *\nAllow: /\n\nSitemap: ${new URL(withBase('sitemap-index.xml'), site).href}\n`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
