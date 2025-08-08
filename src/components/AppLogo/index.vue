<script lang="ts">
import { defineComponent, inject } from 'vue'

export default defineComponent({
  name: 'AppLogo',
  setup() {
    return {
      prefixCls: `${inject('PREFIX_CLS')}-app-logo`,
    }
  },
})
</script>

<template>
  <div :class="prefixCls">
    <Icon type="svg-logo" />
  </div>
</template>

<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-app-logo';

  .@{prefix-cls} {
    width: 100%;
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    color: @primary-color;
  }
</style>
