import type { App } from 'vue'
import _App from './App.vue'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import '@/assets/main.css'

async function bootstrap() {
  const app: App = createApp(_App)

  const modules = import.meta.glob<{ install: (app: App) => void }>('./modules/*.ts', { eager: true })
  await Promise.all(
    Object.values(modules).map(async i => await i.install?.(app)),
  )

  app.mount('#app')
}

bootstrap()
