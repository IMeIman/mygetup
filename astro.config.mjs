import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://imeiman.github.io',
  base: '/newgetup',
  integrations: [tailwind()]
});