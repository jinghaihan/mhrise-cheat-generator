import type { App } from 'vue'
import { createPinia } from 'pinia'

export * from './stores'

export function install(app: App) {
  const store = createPinia()

  app.use(store)
}
