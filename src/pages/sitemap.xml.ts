import pages from '../data/pages.json';
import { url } from '../lib/paths.js';
export function GET({ site }) {
  const entries = pages.map(page => '<url><loc>' + new URL(url(page.path), site).href + '</loc></url>').join('');
  return new Response('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + entries + '</urlset>', { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
