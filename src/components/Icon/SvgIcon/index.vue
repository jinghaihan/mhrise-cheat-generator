<script lang="ts">
import { defineComponent, inject } from 'vue'

export default defineComponent({
  name: 'SvgIcon',
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {
      prefixCls: `${inject('PREFIX_CLS')}-svg-icon`,
    }
  },
})
</script>

<template>
  <svg :class="prefixCls" aria-hidden="true">
    <use :xlink:href="`#${type}`" />
  </svg>
</template>

<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-svg-icon';

  .@{prefix-cls} {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
