<script lang="ts" setup>
definePage({
  name: 'not-found',
  meta: {
    redirect: DEFAULT_HOME_PATH,
    keepAlive: true,
  },
})
</script>

<template>
  <div flex-center size-full>
    {{ $t('page.not-found') }}
  </div>
</template>
