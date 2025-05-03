import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//import vueJsx from '@vitejs/plugin-vue-jsx'
//import vueDevTools from 'vite-plugin-vue-devtools'
//import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    //vueJsx(),
    //vueDevTools(),
    //tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'FadgramVue',
      fileName: (format) => `fadgram-vue.${format}.js`,
    },
    rollupOptions: {
      external: ['vue', 'fadgram-ui'],
      output: {
        globals: {
          vue: 'Vue',
          'fadgram-ui': 'FadgramUi',
        },
        exports: 'named',
      },
    },
  },
})
