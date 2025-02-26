<script lang="ts" setup>
import { theme } from 'ant-design-vue'

const collapsed = ref<boolean>(true)

const algorithm = computed(() => {
  return isDark.value
    ? [theme.darkAlgorithm, theme.compactAlgorithm]
    : [theme.defaultAlgorithm, theme.compactAlgorithm]
})
</script>

<template>
  <ConfigProvider
    :theme="{
      algorithm,
      token: {
        colorPrimary: '#5d5d99',
      },
    }"
  >
    <Layout size-full>
      <LayoutSider
        v-model:collapsed="collapsed"
        theme="light"
        :collapsed-width="55"
        shadow-md
        class="py-4"
      >
        <div class="h-full flex flex-col justify-between">
          <div>
            <div class="mb-4 flex items-center justify-center">
              <Logo size-10 text-primary />
            </div>
            <AppMenu />
          </div>
          <div class="flex flex-col items-center gap-2">
            <FullscreenToggle />
            <DarkToggle />
          </div>
        </div>
      </LayoutSider>
      <LayoutContent>
        <slot />
      </LayoutContent>
    </Layout>
  </ConfigProvider>
</template>

<style scoped>
  :deep(.ant-menu-inline-collapsed) {
    .ant-menu-item {
      padding-inline: calc(50% - 12px);
      height: 45px;
      line-height: 45px;
    }
  }
</style>
