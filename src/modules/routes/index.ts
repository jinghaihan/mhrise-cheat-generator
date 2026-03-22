import type { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/item',
    name: 'item',
    component: () => import('@/views/item/index.vue'),
    meta: {
      titleKey: 'ui.route.item',
      icon: 'ShopOutlined',
    },
  },
  {
    path: '/talisman',
    name: 'talisman',
    component: () => import('@/views/talisman/index.vue'),
    meta: {
      titleKey: 'ui.route.talisman',
      icon: 'ExperimentOutlined',
    },
  },
  {
    path: '/qurious-crafting',
    name: 'qurious-crafting',
    component: () => import('@/views/qurious-crafting/index.vue'),
    meta: {
      titleKey: 'ui.route.quriousCrafting',
      icon: 'CalculatorOutlined',
    },
  },
  {
    path: '/anomaly-quest',
    name: 'anomaly-quest',
    component: () => import('@/views/anomaly-quest/index.vue'),
    meta: {
      titleKey: 'ui.route.anomalyQuest',
      icon: 'MonitorOutlined',
    },
  },
  {
    path: '/buddy',
    name: 'buddy',
    component: () => import('@/views/buddy/index.vue'),
    meta: {
      titleKey: 'ui.route.buddy',
      icon: 'BellOutlined',
    },
  },
  {
    path: '/guild-card',
    name: 'guild-card',
    component: () => import('@/views/guild-card/index.vue'),
    meta: {
      titleKey: 'ui.route.guildCard',
      icon: 'IdcardOutlined',
    },
  },
  {
    path: '/functional-list',
    name: 'functional-list',
    component: () => import('@/views/functional-list/index.vue'),
    meta: {
      titleKey: 'ui.route.functionalList',
      icon: 'FunctionOutlined',
    },
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/item',
  },
]
