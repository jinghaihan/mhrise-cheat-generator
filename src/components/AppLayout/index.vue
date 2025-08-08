<script lang="ts">
import { defineComponent, inject } from 'vue'
import SideBar from './SideBar/index.vue'

export default defineComponent({
  name: 'AppLayout',
  components: { SideBar },
  provide() {
    return {
      SCROLL_CONTAINER: `${inject('PREFIX_CLS')}-app-layout-content`,
    }
  },
  setup() {
    return {
      prefixCls: `${inject('PREFIX_CLS')}-app-layout`,
    }
  },
})
</script>

<template>
  <a-layout :class="prefixCls">
    <a-layout-sider :class="`${prefixCls}-sider`" theme="light" :width="60">
      <SideBar />
    </a-layout-sider>
    <a-layout-content :id="`${prefixCls}-content`" :class="`${prefixCls}-content`">
      <RouterView>
        <template #default="{ Component, route }">
          <transition name="fade-slide" mode="out-in" appear>
            <component :is="Component" :key="route.name" />
          </transition>
        </template>
      </RouterView>
    </a-layout-content>
  </a-layout>
</template>

<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-app-layout';

  .@{prefix-cls} {
    height: 100%;
    width: 100%;

    &-content {
      padding: 12px;
      overflow: hidden;
      overflow-y: auto;
    }
  }
</style>
