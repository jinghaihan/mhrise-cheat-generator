<script lang="ts" setup>
import type { MenuProps } from 'ant-design-vue'
import { $t } from '@/modules/i18n'

const router = useRouter()
const selectedKeys = computed(() => [router.currentRoute.value.path])

const items: MenuProps['items'] = [
  {
    label: $t('page.item'),
    key: '/item',
    icon: 'i-lucide-backpack',
  },
  {
    label: $t('page.talisman'),
    key: '/talisman',
    icon: 'i-lucide-test-tube-diagonal',
  },
  {
    label: $t('page.qurious-crafting'),
    key: '/qurious-crafting',
    icon: 'i-lucide-flame',
  },
  {
    label: $t('page.anomaly-quest'),
    key: '/anomaly-quest',
    icon: 'i-lucide-search',
  },
  {
    label: $t('page.buddy'),
    key: '/buddy',
    icon: 'i-lucide-bell',
  },
  {
    label: $t('page.guild-card'),
    key: '/guild-card',
    icon: 'i-lucide-id-card',
  },
  {
    label: $t('page.functional'),
    key: '/functional',
    icon: 'i-lucide-square-function',
  },
].map((item) => {
  return {
    ...item,
    icon: h('i', { class: item.icon }),
    title: item.label,
  }
})

const onMenuClick: MenuProps['onClick'] = ({ key }) => {
  router.push(key as string)
}
</script>

<template>
  <Menu
    mode="inline"
    :items="items"
    :selected-keys="selectedKeys"
    class="!border-none"
    @click="onMenuClick"
  />
</template>
