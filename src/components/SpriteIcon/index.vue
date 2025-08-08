<script lang="ts">
import { defineComponent, inject } from 'vue'

export default defineComponent({
  name: 'SpriteIcon',
  props: {
    height: {
      type: Number,
      required: false,
      default: 64,
    },
    width: {
      type: Number,
      required: false,
      default: 64,
    },
    images: {
      type: String,
      required: true,
    },
    column: {
      type: Number,
      required: false,
      default: 0,
    },
    row: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  setup(props) {
    return {
      prefixCls: `${inject('PREFIX_CLS')}-sprite-icon`,
      spriteIconStyle: {
        height: `${props.height}px`,
        width: `${props.width}px`,
        backgroundImage: `url(${props.images})`,
        backgroundPosition: `${props.column * props.width}px -${props.row * props.height}px`,
      },
    }
  },
})
</script>

<template>
  <div :class="prefixCls" :style="spriteIconStyle" />
</template>

<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-sprite-icon';

  .@{prefix-cls} {
    background-size: auto;
    display: block;
    background-repeat: no-repeat;
    overflow: hidden;
    margin: auto;
  }
</style>
