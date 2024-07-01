import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcssImport from 'postcss-import';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  css: {
    postcss: {
      plugins: [
        postcssImport(),
        autoprefixer(),
      ],
    },
  },
  define: {
    'process.env': {},
  },
});
