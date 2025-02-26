import type { App } from 'vue'
import { createHead } from '@unhead/vue'

export const head = createHead()

export function install(app: App) {
  app.use(head)
}
