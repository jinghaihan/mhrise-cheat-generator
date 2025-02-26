<script lang="ts" setup>
useUnhead()
const { include, resolveRouteComponent } = useRouteKeepAlive()
</script>

<template>
  <AppLayout>
    <RouterView v-slot="{ Component, route }">
      <Transition :name="preference.pageTransition" appear mode="out-in">
        <KeepAlive :include="include">
          <component :is="resolveRouteComponent(Component)" :key="route.fullPath" />
        </KeepAlive>
      </Transition>
    </RouterView>
  </AppLayout>
</template>
