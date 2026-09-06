import type { Component } from 'vue'
import Bell from '~icons/lucide/bell'
import Calculator from '~icons/lucide/calculator'
import CircleCheck from '~icons/lucide/circle-check'
import CircleQuestionMark from '~icons/lucide/circle-question-mark'
import CircleX from '~icons/lucide/circle-x'
import Contact from '~icons/lucide/contact'
import FilePenLine from '~icons/lucide/file-pen-line'
import FlaskConical from '~icons/lucide/flask-conical'
import Github from '~icons/lucide/github'
import List from '~icons/lucide/list'
import Minimize from '~icons/lucide/minimize'
import Monitor from '~icons/lucide/monitor'
import Moon from '~icons/lucide/moon'
import Settings from '~icons/lucide/settings'
import ShoppingCart from '~icons/lucide/shopping-cart'
import Store from '~icons/lucide/store'
import Sun from '~icons/lucide/sun'

export const ICONS = {
  anomalyQuest: Monitor,
  buddy: Bell,
  cart: ShoppingCart,
  checked: CircleCheck,
  close: CircleX,
  compact: Minimize,
  edit: FilePenLine,
  functionalList: List,
  github: Github,
  guildCard: Contact,
  help: CircleQuestionMark,
  item: Store,
  lightTheme: Sun,
  darkTheme: Moon,
  quriousCrafting: Calculator,
  settings: Settings,
  talisman: FlaskConical,
} satisfies Record<string, Component>

export type IconName = keyof typeof ICONS
