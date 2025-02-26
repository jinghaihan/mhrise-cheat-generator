import type { Pinia } from 'pinia'
import type { App } from 'vue'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

let pinia: Pinia

export function install(app: App) {
  pinia = createPinia()
  pinia.use(
    createPersistedState({
      key: storeKey => `${storeKey}-store`,
      storage: localStorage,
    }),
  )
  app.use(pinia)
}

export function resetAllStores() {
  if (!pinia)
    return

  const allStores = (pinia as any)._s
  for (const [_key, store] of allStores)
    store.$reset?.()
}
