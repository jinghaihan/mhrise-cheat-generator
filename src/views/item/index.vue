<script lang="ts">
import type { ColumnData } from './constant'
import { defineComponent, inject, ref } from 'vue'
import { VerticalLayout } from '@/components/TableLayout'

import { useCheat } from '@/composables/useCheat'
import BasicForm from './BasicForm.vue'
import { columns } from './constant'
import ItemQuanityForm from './ItemQuanityForm.vue'
import OverallItemForm from './OverallItemForm.vue'

export default defineComponent({
  name: 'Item',
  components: { VerticalLayout, BasicForm, ItemQuanityForm, OverallItemForm },
  setup() {
    const { genCheat } = useCheat()
    const data = ref([] as ColumnData[])

    const onSubmit = () => {
      if (data.value.length) {
        data.value.forEach((row: ColumnData) => {
          genCheat('ITEM', row)
        })
      }
    }

    return {
      prefixCls: `${inject('PREFIX_CLS')}-item`,
      columns,
      data,
      onSubmit,
    }
  },
})
</script>

<template>
  <div :class="prefixCls">
    <VerticalLayout>
      <template #config>
        <BasicForm @add="(value) => data.push(value)" @clear="data = []" />
      </template>

      <template #operation>
        <a-button type="primary" :disabled="!data.length" @click="onSubmit">
          加入购物车
        </a-button>

        <a-popover title="道具批量修改" placement="bottom" :trigger="['click']">
          <a-button> 道具数量批量修改 </a-button>
          <template #content>
            <ItemQuanityForm />
          </template>
        </a-popover>
        <a-popover title="获取全部道具" placement="bottom" :trigger="['click']">
          <a-button> 获取全部道具 </a-button>
          <template #content>
            <OverallItemForm />
          </template>
        </a-popover>
      </template>

      <template #table>
        <a-table
          :columns="columns"
          :data-source="data"
          row-key="id"
          :pagination="false"
          size="small"
          :scroll="{ y: `calc(100vh - 240px)` }"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.dataIndex === 'item'">
              <a-tag color="blue">
                {{ record.item.label }}
              </a-tag>
            </template>

            <template v-if="column.key === 'action'">
              <a-popconfirm
                title="确定删除吗?"
                ok-text="Yes"
                cancel-text="No"
                @confirm="data = data.filter((item) => item.box !== record.box)"
              >
                <a-button type="text" danger>
                  删除
                </a-button>
              </a-popconfirm>
            </template>
          </template>
        </a-table>
      </template>
    </VerticalLayout>
  </div>
</template>

<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-item';

  .@{prefix-cls} {
    height: 100%;
    width: 100%;
  }
</style>
