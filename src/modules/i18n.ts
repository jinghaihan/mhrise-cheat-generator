import type { App } from 'vue'
import type { AppLocale } from '@/constants/i18n'
import { createI18n } from 'vue-i18n'
import { SUPPORTED_LOCALES } from '@/constants/i18n'
import zh from '../../locales/zh.json'

type LocaleMessages = Record<string, string>

const LOCALE_LOADERS: Record<AppLocale, () => Promise<LocaleMessages>> = {
  'zh': async () => zh,
  'zh-Hant': async () => (await import('../../locales/zh-Hant.json')).default,
  'en': async () => (await import('../../locales/en.json')).default,
  'ja': async () => (await import('../../locales/ja.json')).default,
  'ko': async () => (await import('../../locales/ko.json')).default,
}

const loadedLocales = new Set<AppLocale>(['zh'])
const loadingLocales = new Map<AppLocale, Promise<void>>()
let localeRequestId = 0

const INITIAL_MESSAGES: Record<AppLocale, LocaleMessages> = {
  'zh': zh,
  'zh-Hant': {},
  'en': {},
  'ja': {},
  'ko': {},
}

export function normalizeLocale(locale?: string): AppLocale {
  if (locale && SUPPORTED_LOCALES.includes(locale as AppLocale)) {
    return locale as AppLocale
  }
  return 'zh'
}

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'zh',
  fallbackLocale: 'zh',
  flatJson: true,
  messages: INITIAL_MESSAGES,
})

async function loadLocaleMessages(locale: AppLocale) {
  if (loadedLocales.has(locale)) {
    return
  }

  const loadingTask = loadingLocales.get(locale)
  if (loadingTask) {
    await loadingTask
    return
  }

  const task = (async () => {
    const messages = await LOCALE_LOADERS[locale]()
    i18n.global.setLocaleMessage(locale, messages)
    loadedLocales.add(locale)
  })()
  loadingLocales.set(locale, task)

  try {
    await task
  }
  finally {
    loadingLocales.delete(locale)
  }
}

export async function setAppLocale(locale?: string) {
  const nextLocale = normalizeLocale(locale)
  const requestId = ++localeRequestId
  await loadLocaleMessages(nextLocale)
  if (requestId === localeRequestId) {
    i18n.global.locale.value = nextLocale
  }
}

export function t(key: string, params?: Record<string, any>) {
  return i18n.global.t(key, params || {})
}

export function install(app: App) {
  app.use(i18n)
}
