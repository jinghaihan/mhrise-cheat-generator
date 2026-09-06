import type { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/item',
    name: 'item',
    component: () => import('@/views/item/index.vue'),
    meta: {
      titleKey: 'ui.route.item',
      icon: 'item',
    },
  },
  {
    path: '/talisman',
    name: 'talisman',
    component: () => import('@/views/talisman/index.vue'),
    meta: {
      titleKey: 'ui.route.talisman',
      icon: 'talisman',
    },
  },
  {
    path: '/qurious-crafting',
    name: 'qurious-crafting',
    component: () => import('@/views/qurious-crafting/index.vue'),
    meta: {
      titleKey: 'ui.route.quriousCrafting',
      icon: 'quriousCrafting',
    },
  },
  {
    path: '/anomaly-quest',
    name: 'anomaly-quest',
    component: () => import('@/views/anomaly-quest/index.vue'),
    meta: {
      titleKey: 'ui.route.anomalyQuest',
      icon: 'anomalyQuest',
    },
  },
  {
    path: '/buddy',
    name: 'buddy',
    component: () => import('@/views/buddy/index.vue'),
    meta: {
      titleKey: 'ui.route.buddy',
      icon: 'buddy',
    },
  },
  {
    path: '/guild-card',
    name: 'guild-card',
    component: () => import('@/views/guild-card/index.vue'),
    meta: {
      titleKey: 'ui.route.guildCard',
      icon: 'guildCard',
    },
  },
  {
    path: '/functional-list',
    name: 'functional-list',
    component: () => import('@/views/functional-list/index.vue'),
    meta: {
      titleKey: 'ui.route.functionalList',
      icon: 'functionalList',
    },
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/item',
  },
]
