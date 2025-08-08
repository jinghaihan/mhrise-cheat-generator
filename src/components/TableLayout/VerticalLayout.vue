<script lang="ts">
import { defineComponent, inject } from 'vue'

export default defineComponent({
  name: 'VerticalTableLayout',
  setup() {
    return {
      prefixCls: `${inject('PREFIX_CLS')}-vertical-table-layout`,
    }
  },
})
</script>

<template>
  <a-space :class="prefixCls" direction="vertical">
    <a-card>
      <slot name="config" />
    </a-card>

    <a-card>
      <a-space direction="vertical">
        <a-space>
          <slot name="operation" />
        </a-space>
        <slot name="table" />
      </a-space>
    </a-card>
  </a-space>
</template>

<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-vertical-table-layout';

  .@{prefix-cls} {
    height: 100%;
    width: 100%;
  }
</style>
