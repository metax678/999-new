import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'file',   // generates /about.html not /about/index.html
  },
});
