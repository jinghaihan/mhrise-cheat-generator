<template>
  <Tooltip :title="$t('widget.dark-toggle')">
    <Button
      flex items-center justify-center
      type="text"
      size="large"
      @click="toggleDark"
    >
      <template #icon>
        <div :class="isDark ? 'i-radix-icons-moon' : 'i-radix-icons-sun'" />
      </template>
    </Button>
  </Tooltip>
</template>

<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}
::view-transition-old(root) {
  z-index: 1;
}
::view-transition-new(root) {
  z-index: 2147483646;
}
.dark::view-transition-old(root) {
  z-index: 2147483646;
}
.dark::view-transition-new(root) {
  z-index: 1;
}
</style>
