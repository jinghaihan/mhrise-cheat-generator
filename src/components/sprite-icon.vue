<script lang="ts" setup>
const props = withDefaults(defineProps<{
  height?: number
  width?: number
  image: string
  column?: number
  row?: number
}>(), {
  height: 64,
  width: 64,
  column: 0,
  row: 0,
})

const spriteIconStyle = computed(() => {
  return {
    height: `${props.height}px`,
    width: `${props.width}px`,
    backgroundImage: `url(${props.image})`,
    backgroundPosition: `${props.column * props.width}px -${props.row * props.height}px`,
  }
})
</script>

<template>
  <div
    class="m-auto block overflow-hidden bg-auto bg-no-repeat"
    :style="spriteIconStyle"
  />
</template>
