import { resolve } from 'path';
import { defineConfig } from 'vite'

export default defineConfig({
  root: resolve(__dirname, 'src'),
  publicDir: resolve(__dirname, 'public'),
  build: {
    outDir: resolve(__dirname, 'dist'),
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        menu: resolve(__dirname, 'src/pages/Menu/index.html'),
        gallery: resolve(__dirname, 'src/pages/Gallery/index.html'),
        location: resolve(__dirname, 'src/pages/Location/index.html'),
        aboutUs: resolve(__dirname, 'src/pages/AboutUs/index.html'),
      },
    },
  },
  server: {
    port: 3000,
  },
});
