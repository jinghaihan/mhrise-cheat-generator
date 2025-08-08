<script lang="ts">
import { computed, defineComponent, inject } from 'vue'
import SvgIcon from './SvgIcon/index.vue'

export default defineComponent({
  name: 'Icon',
  components: {
    SvgIcon,
  },
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    return {
      prefixCls: `${inject('PREFIX_CLS')}-icon`,
      componentType: computed(() => {
        return props.type.startsWith('svg-') ? 'SvgIcon' : props.type
      }),
    }
  },
})
</script>

<template>
  <div :class="prefixCls">
    <Component :is="componentType" :type="type" />
  </div>
</template>
