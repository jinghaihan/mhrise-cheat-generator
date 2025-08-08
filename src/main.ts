import type { App } from 'vue'
import { createApp } from 'vue'
import root from './App.vue'
import './assets/styles'
import 'virtual:svg-icons-register'

function setup() {
  const app = createApp(root)

  Object.values(import.meta.glob<{ install: (app: App) => void }>('./modules/*.ts', { eager: true }))
    .forEach(i => i.install?.(app))

  app.mount('#app')
}

setup()
