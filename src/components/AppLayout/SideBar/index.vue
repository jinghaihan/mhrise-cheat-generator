<script lang="ts">
import { defineComponent, inject } from 'vue'
import BottomBar from './BottomBar.vue'
import TopBar from './TopBar.vue'

export default defineComponent({
  name: 'SideBar',
  components: { TopBar, BottomBar },
  setup() {
    return {
      prefixCls: `${inject('PREFIX_CLS')}-app-layout-side-bar`,
    }
  },
})
</script>

<template>
  <div :class="prefixCls">
    <div class="top-bar">
      <TopBar />
    </div>
    <div class="bottom-bar">
      <BottomBar />
    </div>
  </div>
</template>

<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-app-layout-side-bar';

  .@{prefix-cls} {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .top-bar,
    .bottom-bar {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
  }
</style>
