import { defineConfig } from 'astro/config';
const site = process.env.SDI_SITE || 'https://secours765.github.io';
const base = '/' + (process.env.SDI_BASE || '').replace(/^\/+|\/+$/g, '') + '/';
if (!/^https?:\/\//.test(site) || new URL(site).pathname !== '/') throw new Error('SDI_SITE muss eine vollständige Origin ohne Unterpfad sein.');
export default defineConfig({ site, output: 'static', base: base === '//' ? '/' : base, trailingSlash: 'always', devToolbar: { enabled: false } });
