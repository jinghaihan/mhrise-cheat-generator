<script lang="ts">
import { defineComponent, inject } from 'vue'
import logo from '@/assets/svg/logo.svg'

export default defineComponent({
  name: 'AppLogo',
  setup() {
    return {
      prefixCls: `${inject('PREFIX_CLS')}-app-logo`,
      logo,
    }
  },
})
</script>

<template>
  <div
    :class="prefixCls"
    :style="{ '--logo-url': `url(${logo})` }"
    aria-hidden="true"
  />
</template>

<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-app-logo';

  .@{prefix-cls} {
    width: 100%;
    margin-top: 8px;
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    color: @primary-color;
    background-color: currentColor;
    mask: var(--logo-url) center / contain no-repeat;
    -webkit-mask: var(--logo-url) center / contain no-repeat;
  }
</style>
