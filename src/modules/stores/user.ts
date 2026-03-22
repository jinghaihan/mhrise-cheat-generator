import type { Version } from '@/constants/database'
import type { AppLocale } from '@/constants/i18n'
import { defineStore } from 'pinia'
import { DEFAULT_VERSION, isVersion } from '@/constants/database'
import {
  USER_CART_STORE_KEY,
  USER_COMPACT_MODE_STORE_KEY,
  USER_LOCALE_STORE_KEY,
  USER_THEME_STORE_KEY,
  USER_VERSION_STORE_KEY,
} from '@/constants/settings'
import { normalizeLocale } from '@/modules/i18n'

export const useUserStore = defineStore('user', {
  state: (): {
    theme: 'light' | 'dark'
    compact: boolean
    version: Version
    carts: CheatConfig[]
    locale: AppLocale
  } => {
    const localVersion = localStorage.getItem(USER_VERSION_STORE_KEY)
    return {
      theme: localStorage.getItem(USER_THEME_STORE_KEY)
        ? (localStorage.getItem(USER_THEME_STORE_KEY) as 'light' | 'dark')
        : 'light',
      compact: localStorage.getItem(USER_COMPACT_MODE_STORE_KEY)
        ? localStorage.getItem(USER_COMPACT_MODE_STORE_KEY) === 'true'
        : false,
      version: isVersion(localVersion) ? localVersion : DEFAULT_VERSION,
      carts: localStorage.getItem(USER_CART_STORE_KEY)
        ? JSON.parse(localStorage.getItem(USER_CART_STORE_KEY) as string)
        : [],
      locale: normalizeLocale(localStorage.getItem(USER_LOCALE_STORE_KEY) || undefined),
    }
  },
  actions: {
    addCart(data: CheatConfig | CheatConfig[]) {
      const value = Array.isArray(data) ? data : [data]
      value.forEach((item) => {
        if (!this.inCart(item)) {
          this.carts.push(item)
        }
      })
      this.updateCartStore()
    },
    removeCart(data: CheatConfig | CheatConfig[]) {
      const value = Array.isArray(data) ? data : [data]
      value.forEach((item) => {
        this.carts = this.carts.filter(i => i.code !== item.code)
      })
      this.updateCartStore()
    },
    inCart(data: CheatConfig | CheatConfig[]): boolean {
      if (!data.length) {
        return false
      }
      const value = Array.isArray(data) ? data : [data]
      for (const item of value) {
        if (!this.carts.some(i => i.code === item.code)) {
          return false
        }
      }
      return true
    },
    clearCart() {
      this.carts = []
      this.updateCartStore()
    },
    updateCartStore() {
      localStorage.setItem(USER_CART_STORE_KEY, JSON.stringify(this.carts))
    },

    updateVersionStore() {
      localStorage.setItem(USER_VERSION_STORE_KEY, this.version)
    },

    updateLocaleStore(locale: string) {
      this.locale = normalizeLocale(locale)
      localStorage.setItem(USER_LOCALE_STORE_KEY, this.locale)
    },

    changeTheme() {
      if (this.theme === 'light') {
        this.theme = 'dark'
      }
      else {
        this.theme = 'light'
      }
      localStorage.setItem(USER_THEME_STORE_KEY, this.theme)
    },

    changeCompactMode() {
      this.compact = !this.compact
      localStorage.setItem(USER_COMPACT_MODE_STORE_KEY, this.compact.toString())
    },
  },
})
