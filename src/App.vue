<script lang="ts">
import { theme as themeAlgorithm } from 'ant-design-vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import { computed, defineComponent, toRefs } from 'vue'
import AppLayout from '@/components/AppLayout/index.vue'
import { PREFIX_CLS, PRIMARY_COLOR } from '@/constants/projectSettings'
import { useUserStore } from '@/modules/store'

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
    const { theme, compact } = toRefs(userStore)

    return {
      locale: zhCN,
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
    :locale="locale"
    :theme="{
      algorithm,
      token: { colorPrimary: PRIMARY_COLOR },
    }"
  >
    <AppLayout />
  </a-config-provider>
</template>
