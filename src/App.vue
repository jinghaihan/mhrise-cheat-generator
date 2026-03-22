<script lang="ts">
import { theme as themeAlgorithm } from 'ant-design-vue'
import { computed, defineComponent, ref, toRefs, watch, watchEffect } from 'vue'
import AppLayout from '@/components/AppLayout/index.vue'
import { PREFIX_CLS, PRIMARY_COLOR } from '@/constants/settings'
import { setAppLocale } from '@/modules/i18n'
import { useUserStore } from '@/modules/store'

const antdLocaleLoaders = {
  'zh': () => import('ant-design-vue/es/locale/zh_CN'),
  'zh-Hant': () => import('ant-design-vue/es/locale/zh_TW'),
  'en': () => import('ant-design-vue/es/locale/en_US'),
  'ja': () => import('ant-design-vue/es/locale/ja_JP'),
  'ko': () => import('ant-design-vue/es/locale/ko_KR'),
} as const

export default defineComponent({
  name: 'App',
  components: { AppLayout },
  provide() {
    return {
      PREFIX_CLS,
      PRIMARY_COLOR,
    }
  },
  setup() {
    const userStore = useUserStore()
    const { theme, compact, locale } = toRefs(userStore)
    const antdLocale = ref()
    let localeRequestId = 0

    watchEffect(() => {
      void setAppLocale(locale.value)
    })

    watch(
      locale,
      async (nextLocale) => {
        const requestId = ++localeRequestId
        const loader = antdLocaleLoaders[nextLocale] || antdLocaleLoaders.zh
        const module = await loader()
        if (requestId === localeRequestId) {
          antdLocale.value = module.default
        }
      },
      { immediate: true },
    )

    return {
      antdLocale,
      algorithm: computed(() => {
        const algorithm = [
          theme.value === 'light'
            ? themeAlgorithm.defaultAlgorithm
            : themeAlgorithm.darkAlgorithm,
        ]
        if (compact.value) {
          algorithm.push(themeAlgorithm.compactAlgorithm)
        }

        return algorithm
      }),
      PREFIX_CLS,
      PRIMARY_COLOR,
    }
  },
})
</script>

<template>
  <a-config-provider
    :prefix-cls="PREFIX_CLS"
    :locale="antdLocale"
    :form="{ colon: false }"
    :theme="{
      algorithm,
      token: { colorPrimary: PRIMARY_COLOR },
    }"
  >
    <AppLayout />
  </a-config-provider>
</template>
