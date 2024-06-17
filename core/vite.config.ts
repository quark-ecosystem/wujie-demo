import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import * as path from 'path';

const pkg = require('./package.json');

const ENV = process.env.VUE_APP_ENV || 'dev';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  build: {
    outDir: path.join(__dirname, `/dist`),
    sourcemap: true,
    rollupOptions: {
      external: [],
    },
  },
  server: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }
});
