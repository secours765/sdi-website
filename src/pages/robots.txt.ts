import { url } from '../lib/paths.js';
import config from '../data/site.json';
export function GET({ site }) {
  return new Response('User-agent: *\n' + (config.draft ? 'Disallow: /\n' : 'Allow: /\nSitemap: ' + new URL(url('sitemap.xml'), site).href + '\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
