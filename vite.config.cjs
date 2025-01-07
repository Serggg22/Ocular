const { defineConfig } = require('vite');
const { resolve } = require('path');
const VitePluginPrerender = require('vite-plugin-prerender');

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'public/index.html'),
        foto1: resolve(__dirname, 'public/foto1.html'),
        foto2: resolve(__dirname, 'public/foto2.html'),
      },
    },
  },
  plugins: [
    VitePluginPrerender({
      staticDir: resolve(__dirname, 'public'),
      routes: ['/', '/foto1', '/foto2'],
    }),
  ],
});

export default {
  build: {
    rollupOptions: {
      input: 'src/main.js',
    },
  },
};