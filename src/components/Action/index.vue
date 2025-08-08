<script lang="ts">
import { computed, defineComponent, inject } from 'vue'

export default defineComponent({
  name: 'Action',
  props: {
    title: {
      type: String,
      required: false,
      default: '',
    },
    placement: {
      type: String,
      required: false,
      default: 'bottom',
    },
    icon: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      required: false,
      default: false,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    size: {
      type: Object,
      required: false,
      default: () => {
        return {
          width: 45,
          height: 45,
        }
      },
    },
  },
  emits: ['click'],
  setup(props, { emit }) {
    const prefixCls = `${inject('PREFIX_CLS')}-action`

    const className = computed(() => {
      return props.active ? `${prefixCls} active` : prefixCls
    })
    const onClick = (e: MouseEvent) => {
      e.cancelBubble = true
      e.preventDefault()

      if (!props.disabled) {
        emit('click', e)
      }
    }

    return {
      prefixCls,
      className,
      onClick,
    }
  },
})
</script>

<template>
  <a-config-provider
    :theme="{
      token: { borderRadius: 0 },
    }"
  >
    <a-tooltip :title="title" :placement="placement">
      <a-button
        :class="className"
        type="text"
        :style="{ height: `${size.height}px`, width: `${size.width}px` }"
        :disabled="disabled"
        @click="onClick"
      >
        <Icon :type="icon" />
      </a-button>
    </a-tooltip>
  </a-config-provider>
</template>

<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-action';

  .@{prefix-cls} {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border-radius: 8px;
  }

  .@{prefix-cls}.active {
    color: @primary-color;
    background-color: @selection-color;
  }
</style>
