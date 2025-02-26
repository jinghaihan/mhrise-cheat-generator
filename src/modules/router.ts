import type { App } from 'vue'
import NProgress from 'nprogress'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

export function install(app: App) {
  const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior: (to, _from, savedPosition) => {
      if (savedPosition) {
        return savedPosition
      }
      return to.hash ? { behavior: 'smooth', el: to.hash } : { left: 0, top: 0 }
    },
  })

  router.beforeEach((to, from) => {
    if (to.meta.redirect) {
      return {
        path: to.meta.redirect,
        replace: true,
      }
    }

    if (to.path !== from.path)
      NProgress.start()
  })

  router.afterEach(() => {
    NProgress.done()
  })

  app.use(router)
}
