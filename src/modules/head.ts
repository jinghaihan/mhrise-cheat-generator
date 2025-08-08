import type { App } from 'vue'
import { createHead } from '@unhead/vue/client'

export function install(app: App) {
  const head = createHead()
  app.use(head)
}
