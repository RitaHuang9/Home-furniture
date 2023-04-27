import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// import VitePluginHtml from 'vite-plugin-html';



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // VitePluginHtml({
    //   inject: {
    //     injectData: {
    //       preload: {
    //         include: 'initial',
    //         test: /\.vue$|\.js$/
    //       }
    //     }
    //   }
    // })
  ],
  base: '/Home-furniture/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
