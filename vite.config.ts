import path from 'node:path'
import VueI18n from '@intlify/unplugin-vue-i18n/vite'
import Vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'
import { LodashAutoImports, UnheadAutoImports, VueRouterAutoImports } from './auto-imports'

export default defineConfig({
  server: {
    host: true,
    port: 3000,
  },

  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },

  plugins: [
    // https://github.com/posva/unplugin-vue-router
    VueRouter({
      dts: 'src/typings/typed-router.d.ts',
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-i18n',
        '@vueuse/core',
        VueRouterAutoImports,
        UnheadAutoImports,
        LodashAutoImports(),
        {
          'vue-router/auto': ['useLink'],
        },
      ],
      dts: 'src/typings/auto-imports.d.ts',
      dirs: [
        'src/composables',
        'src/constants',
        'src/stores',
        'src/utils',
      ],
      vueTemplate: true,
    }),

    // https://github.com/ant fu/unplugin-vue-components
    Components({
      deep: false,
      dts: 'src/typings/components.d.ts',
      resolvers: [
        AntDesignVueResolver({
          prefix: '',
          importStyle: 'css-in-js',
        }),
      ],
    }),

    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    Unocss(),

    // https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      fullInstall: true,
      include: [path.resolve(__dirname, 'i18n/**')],
    }),

    // https://github.com/vitejs/vite-plugin-vue
    Vue(),
  ],
})
