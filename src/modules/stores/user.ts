import { defineStore } from 'pinia'
import {
  USER_CART_STORE_KEY,
  USER_COMPACT_MODE_STORE_KEY,
  USER_THEME_STORE_KEY,
  USER_VERSION_STORE_KEY,
} from '@/constants/storeSettings'

export const useUserStore = defineStore('user', {
  state: (): {
    theme: 'light' | 'dark'
    compact: boolean
    version: string
    carts: CheatConfig[]
  } => {
    return {
      theme: localStorage.getItem(USER_THEME_STORE_KEY)
        ? (localStorage.getItem(USER_THEME_STORE_KEY) as 'light' | 'dark')
        : 'light',
      compact: localStorage.getItem(USER_COMPACT_MODE_STORE_KEY)
        ? localStorage.getItem(USER_COMPACT_MODE_STORE_KEY) === 'true'
        : false,
      version: localStorage.getItem(USER_VERSION_STORE_KEY) || '',
      carts: localStorage.getItem(USER_CART_STORE_KEY)
        ? JSON.parse(localStorage.getItem(USER_CART_STORE_KEY) as string)
        : [],
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
        if (!this.carts.find(i => i.code === item.code)) {
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
