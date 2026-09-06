import type { Component } from 'vue'
import Anvil from '~icons/lucide/anvil'
import CircleCheck from '~icons/lucide/circle-check'
import CircleQuestionMark from '~icons/lucide/circle-question-mark'
import CircleX from '~icons/lucide/circle-x'
import ClipboardList from '~icons/lucide/clipboard-list'
import FilePenLine from '~icons/lucide/file-pen-line'
import Gem from '~icons/lucide/gem'
import Github from '~icons/lucide/github'
import IdCard from '~icons/lucide/id-card'
import ListChecks from '~icons/lucide/list-checks'
import Minimize from '~icons/lucide/minimize'
import Moon from '~icons/lucide/moon'
import Package from '~icons/lucide/package'
import PawPrint from '~icons/lucide/paw-print'
import Settings from '~icons/lucide/settings'
import ShoppingCart from '~icons/lucide/shopping-cart'
import Sun from '~icons/lucide/sun'

export const ICONS = {
  anomalyQuest: ClipboardList,
  buddy: PawPrint,
  cart: ShoppingCart,
  checked: CircleCheck,
  close: CircleX,
  compact: Minimize,
  edit: FilePenLine,
  functionalList: ListChecks,
  github: Github,
  guildCard: IdCard,
  help: CircleQuestionMark,
  item: Package,
  lightTheme: Sun,
  darkTheme: Moon,
  quriousCrafting: Anvil,
  settings: Settings,
  talisman: Gem,
} satisfies Record<string, Component>

export type IconName = keyof typeof ICONS
