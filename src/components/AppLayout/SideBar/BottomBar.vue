<script lang="ts">
import { computed, defineComponent, ref, toRefs } from 'vue'
import { useI18n } from 'vue-i18n'
import { VERSIONS } from '@/constants/database'
import { LOCALE_LABEL, SUPPORTED_LOCALES } from '@/constants/i18n'
import { useUserStore } from '@/modules/store'
import { downloadCheat } from '@/utils'

export default defineComponent({
  name: 'SiderBottomBar',
  setup() {
    const { t } = useI18n()
    const BUILD_ID_OPTIONS = VERSIONS.map((ver) => {
      return {
        label: ver,
        value: ver,
      }
    })
    const drawerVisible = ref(false)
    const userStore = useUserStore()
    const { theme, version, carts, locale } = toRefs(userStore)
    const LOCALE_OPTIONS = computed(() => {
      return SUPPORTED_LOCALES.map((item) => {
        return {
          label: LOCALE_LABEL[item],
          value: item,
        }
      })
    })

    const onDelete = (item: { title: string, code: string }) => {
      userStore.removeCart(item)
    }
    const onClear = () => {
      userStore.clearCart()
    }
    const onDownload = () => {
      downloadCheat(
        version.value,
        carts.value
          .map((item: { title: string, code: string }) => {
            return `${item.title}\n${item.code}`
          })
          .join('\n'),
      )
    }
    const toGithub = () => {
      window.open('https://github.com/jinghaihan/mhrise-cheat-generator')
    }

    return {
      userStore,
      BUILD_ID_OPTIONS,
      theme,
      version,
      carts,
      locale,
      LOCALE_OPTIONS,
      t,
      drawerVisible,
      onDelete,
      onClear,
      onDownload,
      toGithub,
    }
  },
})
</script>

<template>
  <a-badge :count="carts.length" :show-zero="true" :offset="[-8, 8]">
    <Action
      :title="$t('ui.sidebar.cart')"
      placement="right"
      icon="ShoppingCartOutlined"
      @click="
        () => {
          drawerVisible = true
        }
      "
    />
  </a-badge>

  <a-popover :title="$t('ui.sidebar.setting')" :trigger="['click']" placement="right">
    <Action icon="SettingOutlined" />
    <template #content>
      <a-space direction="vertical" :size="8">
        <a-select
          v-model:value="version"
          :placeholder="$t('ui.sidebar.gameVersion')"
          :options="BUILD_ID_OPTIONS"
          :disabled="carts.length"
          @change="userStore.updateVersionStore"
        />
        <a-select
          v-model:value="locale"
          :placeholder="$t('ui.sidebar.locale')"
          :options="LOCALE_OPTIONS"
          @change="userStore.updateLocaleStore"
        />
      </a-space>
    </template>
  </a-popover>

  <Action
    :title="theme === 'light' ? $t('ui.sidebar.darkTheme') : $t('ui.sidebar.lightTheme')"
    placement="right"
    :icon="theme === 'light' ? 'svg-moon' : 'svg-sun'"
    @click="userStore.changeTheme"
  />

  <Action
    :title="$t('ui.sidebar.compactMode')"
    placement="right"
    icon="CompressOutlined"
    @click="userStore.changeCompactMode"
  />

  <Action
    title="Github"
    placement="right"
    icon="GithubOutlined"
    @click="() => toGithub()"
  />

  <a-drawer
    v-model:open="drawerVisible"
    :title="$t('ui.sidebar.cartWithVersion', { version })"
    :body-style="{
      padding: 0,
    }"
  >
    <template #extra>
      <a-space>
        <a-button type="primary" ghost :disabled="!carts.length" size="small" @click="onDownload">
          {{ $t('ui.common.download') }}
        </a-button>
        <a-popconfirm
          placement="leftTop"
          :title="$t('ui.common.confirmClear')"
          :ok-text="$t('ui.common.yes')"
          :cancel-text="$t('ui.common.no')"
          @confirm="onClear"
        >
          <a-button danger size="small">
            {{ $t('ui.common.clear') }}
          </a-button>
        </a-popconfirm>
      </a-space>
    </template>

    <a-collapse :bordered="false" accordion>
      <a-collapse-panel v-for="item in carts" :key="item.code" :header="item.title">
        <pre>{{ item.code }}</pre>
        <template #extra>
          <a-popconfirm
            :title="$t('ui.common.confirmDelete')"
            :ok-text="$t('ui.common.yes')"
            :cancel-text="$t('ui.common.no')"
            placement="left"
            @confirm="onDelete(item)"
          >
            <Icon type="CloseCircleFilled" @click="(e: MouseEvent) => e.stopPropagation()" />
          </a-popconfirm>
        </template>
      </a-collapse-panel>
    </a-collapse>

    <a-empty v-show="!carts.length" />
  </a-drawer>
</template>
