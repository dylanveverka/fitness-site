import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://fitness.dveverka.com',
  integrations: [sitemap()],
});
