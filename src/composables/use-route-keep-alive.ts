import type { VNode } from 'vue'

export function useRouteKeepAlive() {
  const router = useRouter()

  const include = computed(() =>
    router.getRoutes()
      .filter(route => route.meta?.keepalive)
      .map(route => route.name as string),
  )

  function resolveRouteComponent(component: VNode) {
    const routeName = router.currentRoute.value.name
    if (!component || !routeName)
      return component

    const componentName = (component.type as any).name
    if (componentName || componentName === routeName) {
      return component
    }

    (component.type as any).name = routeName
    return component
  }

  return {
    include,
    resolveRouteComponent,
  }
}
