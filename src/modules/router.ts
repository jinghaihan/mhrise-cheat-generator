import type { App } from 'vue'
import { useHead } from '@unhead/vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

export function install(app: App) {
  const router = createRouter({
    history: createWebHistory(),
    routes,
    strict: true,
  })

  app.use(router)

  router.beforeEach(async (to, from, next) => {
    useHead({
      title: to.meta?.title ? `MHRISE - ${to.meta.title}` : `MHRISE CHEAT GENERATOR`,
      meta: [
        {
          name: 'description',
          content: 'Cheat generator for Monster Hunter Rise: Sunbreak (Switch)',
        },
      ],
    })
    next()
  })
}
