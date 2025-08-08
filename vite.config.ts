import path from 'node:path'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'
import { createSvgIconsPlugin as ViteSvgIcons } from 'vite-plugin-svg-icons'

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
    ViteSvgIcons({
      iconDirs: [path.resolve(__dirname, 'src/assets/svg')],
      symbolId: 'svg-[name]',
    }),
  ],
})
