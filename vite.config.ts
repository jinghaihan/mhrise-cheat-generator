import path from 'node:path'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import Icons from 'unplugin-icons/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: true,
    port: 1602,
  },

  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },

  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `@import "@/assets/styles/css/var.less";`,
      },
    },
  },

  plugins: [
    Vue(),
    VueJsx(),
    Icons({ compiler: 'vue3' }),
  ],
})
