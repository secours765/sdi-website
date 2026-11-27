import { defineConfig } from 'astro/config';
export default defineConfig({ output: 'static', base: process.env.SDI_BASE || '/', trailingSlash: 'always', devToolbar: { enabled: false } });
