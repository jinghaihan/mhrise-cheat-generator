<script setup lang="ts">
import { computed, inject } from 'vue'
import { ICONS } from './icons'

const props = defineProps<{
  type: string
}>()

const prefixCls = `${inject('PREFIX_CLS')}-icon`
const iconComponent = computed(() => ICONS[props.type as keyof typeof ICONS])
</script>

<template>
  <div :class="prefixCls">
    <component :is="iconComponent" v-if="iconComponent" aria-hidden="true" />
  </div>
</template>
