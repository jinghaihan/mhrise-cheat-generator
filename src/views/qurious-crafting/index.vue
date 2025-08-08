<script lang="ts">
import type { ColumnData } from './constant'
import { defineComponent, inject, ref } from 'vue'
import { HorizontalLayout } from '@/components/TableLayout'
import { useCheat } from '@/composables/useCheat'

import { getTableScrollX } from '@/utils'
import BasicForm from './BasicForm.vue'
import { columns } from './constant'

export default defineComponent({
  name: 'QuriousCrafting',
  components: { HorizontalLayout, BasicForm },
  setup() {
    const { genCheat } = useCheat()
    const data = ref([] as ColumnData[])

    const onSubmit = () => {
      if (data.value.length) {
        data.value.forEach((row: ColumnData) => {
          genCheat('QURIOUS_CRAFTING', row)
        })
      }
    }

    return {
      prefixCls: `${inject('PREFIX_CLS')}-qurious-crafting`,
      columns,
      data,
      onSubmit,
      getTableScrollX,
    }
  },
})
</script>

<template>
  <div :class="prefixCls">
    <HorizontalLayout>
      <template #config>
        <BasicForm @add="(value) => data.push(value)" @clear="data = []" />
      </template>

      <template #operation>
        <a-button type="primary" :disabled="!data.length" @click="onSubmit">
          加入购物车
        </a-button>
      </template>

      <template #table>
        <a-table
          :columns="columns"
          :data-source="data"
          row-key="box"
          :pagination="false"
          size="small"
          :scroll="{ x: getTableScrollX(columns), y: `calc(100vh - 142px)` }"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.dataIndex === 'skill'">
              <template v-for="index in 7" :key="`${record.box}_${index}`">
                <a-tag color="blue">
                  {{ record[`skill${index}`].label }}
                </a-tag>
              </template>
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
    </HorizontalLayout>
  </div>
</template>

<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-qurious-crafting';

  .@{prefix-cls} {
    height: 100%;
    width: 100%;
  }
</style>
