<script lang="ts">
import { defineComponent, ref, toRefs } from 'vue'
import { BUILD_ID } from '@/constants/database'
import { useUserStore } from '@/modules/store'
import { downloadCheat } from '@/utils'

export default defineComponent({
  name: 'SiderBottomBar',
  setup() {
    const BUILD_ID_OPTIONS = Object.keys(BUILD_ID).map((ver) => {
      return {
        label: ver,
        value: ver,
      }
    })
    const drawerVisible = ref(false)
    const userStore = useUserStore()
    const { theme, version, carts } = toRefs(userStore)
    version.value = version.value || BUILD_ID_OPTIONS[0].value

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
      title="购物车"
      placement="right"
      icon="ShoppingCartOutlined"
      @click="
        () => {
          drawerVisible = true
        }
      "
    />
  </a-badge>

  <a-badge dot :offset="[-8, 8]">
    <a-popover title="游戏版本" :trigger="['click']" placement="right">
      <Action icon="SettingOutlined" />
      <template #content>
        <a-select
          v-model:value="version"
          placeholder="游戏版本"
          :options="BUILD_ID_OPTIONS"
          :disabled="carts.length"
          @change="userStore.updateVersionStore"
        />
      </template>
    </a-popover>
  </a-badge>

  <Action
    :title="theme === 'light' ? '暗色主题' : '亮色主题'"
    placement="right"
    :icon="theme === 'light' ? 'svg-moon' : 'svg-sun'"
    @click="userStore.changeTheme"
  />

  <Action
    title="紧凑模式"
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
    :title="`购物车[${version}]`"
    :body-style="{
      padding: 0,
    }"
  >
    <template #extra>
      <a-space>
        <a-button type="primary" ghost :disabled="!carts.length" size="small" @click="onDownload">
          下载
        </a-button>
        <a-popconfirm
          placement="leftTop"
          title="确定清空吗?"
          ok-text="Yes"
          cancel-text="No"
          @confirm="onClear"
        >
          <a-button danger size="small">
            清空
          </a-button>
        </a-popconfirm>
      </a-space>
    </template>

    <a-collapse :bordered="false" accordion>
      <a-collapse-panel v-for="item in carts" :key="item.code" :header="item.title">
        <pre>{{ item.code }}</pre>
        <template #extra>
          <a-popconfirm
            title="确定删除吗?"
            ok-text="Yes"
            cancel-text="No"
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
