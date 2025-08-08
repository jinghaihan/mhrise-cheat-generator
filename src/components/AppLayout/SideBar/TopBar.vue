<script lang="ts">
import type { RouteRecordRaw } from 'vue-router'
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import AppLogo from '@/components/AppLogo/index.vue'

import { routes } from '@/modules/routes'

export default defineComponent({
  name: 'SiderTopBar',
  components: { AppLogo },
  setup() {
    const router = useRouter()
    const getIsActive = (route: RouteRecordRaw) => {
      return router.currentRoute.value.name === route.name
    }
    const changeRoute = (path: string) => {
      router.push({ path })
    }
    return {
      routes: routes.filter(route => route.name),

      getIsActive,
      changeRoute,
    }
  },
})
</script>

<template>
  <AppLogo />

  <Action
    v-for="route in routes"
    :key="route.name"
    :title="route.meta?.title"
    placement="right"
    :icon="route.meta?.icon"
    :active="getIsActive(route)"
    @click="changeRoute(route.path)"
  />
</template>
