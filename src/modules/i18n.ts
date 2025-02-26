import type { App } from 'vue'
import type { Locale } from 'vue-i18n'
import dayjs from 'dayjs'
import { createI18n } from 'vue-i18n'

export type SupportedLanguageType = 'en' | 'zh-CN' | 'zh-TW' | 'ja'

export const SUPPORTED_LANGUAGE_OPTIONS: { label: string, value: SupportedLanguageType }[] = [
  { label: '简体中文', value: 'zh-CN' },
  { label: '繁體中文', value: 'zh-TW' },
  { label: 'English', value: 'en' },
  { label: '日本語', value: 'ja' },
]

const i18n = createI18n({
  legacy: false,
  locale: '',
  messages: {},
  fallbackLocale: 'zh-CN',
})
export const $t = i18n.global.t

const localesMap: Record<Locale, () => Promise<{ default: Record<string, string> }>>
 = Object.fromEntries(
   Object.entries(import.meta.glob('../../i18n/*.json')).map(
     ([path, loadLocale]) => [path.match(/([\w-]*)\.json$/)?.[1], loadLocale],
   ),
 )

export const availableLocales = Object.keys(localesMap)

const loadedLanguages: string[] = []

function setI18nLanguage(lang: Locale) {
  i18n.global.locale.value = lang
  if (typeof document !== 'undefined')
    document.querySelector('html')?.setAttribute('lang', lang)
  return lang
}

export async function loadLanguageAsync(lang: string): Promise<Locale> {
  await loadThirdPartyLocales(lang)
  return await loadLocale(lang)
}

async function loadThirdPartyLocales(lang: Locale) {
  await Promise.all([
    loadDayjsLocale(lang),
  ])
}

async function loadDayjsLocale(lang: Locale) {
  let locale
  switch (lang) {
    case 'en':
      locale = await import('dayjs/locale/en')
      break
    case 'zh-CN':
      locale = await import('dayjs/locale/zh-cn')
      break
    default:
      locale = await import('dayjs/locale/en')
      break
  }
  dayjs.locale(locale)
}

async function loadLocale(lang: Locale): Promise<Locale> {
  // If the same language
  if (i18n.global.locale.value === lang)
    return setI18nLanguage(lang)

  // If the language was already loaded
  if (loadedLanguages.includes(lang))
    return setI18nLanguage(lang)

  // If the language hasn't been loaded yet
  const messages = await localesMap[lang]()
  i18n.global.setLocaleMessage(lang, messages.default)
  loadedLanguages.push(lang)
  return setI18nLanguage(lang)
}

export async function install(app: App) {
  app.use(i18n)
  await loadLanguageAsync(lang.value ?? 'en')
}
