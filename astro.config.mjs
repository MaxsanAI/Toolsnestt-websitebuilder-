import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server', // Omogućava API rute, Webhookove i Magic Link
  adapter: cloudflare({
    runtime: {
      mode: 'complete',
      type: 'pages'
    }
  }),
  integrations: [tailwind()],
  site: 'https://websitebuilder.toolsnestt.com'
});
