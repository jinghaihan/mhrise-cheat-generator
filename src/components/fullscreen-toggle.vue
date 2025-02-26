<script lang="ts" setup>
const { isFullscreen, toggle } = useFullscreen()
</script>

<template>
  <Tooltip :title="$t('widget.fullscreen-toggle')">
    <Button
      flex items-center justify-center
      type="text"
      size="large"
      @click="toggle"
    >
      <template #icon>
        <div :class="isFullscreen ? 'i-radix-icons-exit-full-screen' : 'i-radix-icons-enter-full-screen'" />
      </template>
    </Button>
  </Tooltip>
</template>
