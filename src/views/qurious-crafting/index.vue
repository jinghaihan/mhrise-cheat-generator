<script lang="ts">
import type { ColumnData } from './constant'
import { defineComponent, inject, ref } from 'vue'
import { HorizontalLayout } from '@/components/TableLayout'
import { useCheat } from '@/composables/useCheat'
import { useReactiveI18n } from '@/composables/useReactiveI18n'

import { getTableScrollX } from '@/utils'
import BasicForm from './BasicForm.vue'
import { getColumns } from './constant'

export default defineComponent({
  name: 'QuriousCrafting',
  components: { HorizontalLayout, BasicForm },
  setup() {
    const { genCheat } = useCheat()
    const data = ref([] as ColumnData[])
    const columns = useReactiveI18n(getColumns)

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
          {{ $t('ui.common.addToCart') }}
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
                :title="$t('ui.common.confirmDelete')"
                :ok-text="$t('ui.common.yes')"
                :cancel-text="$t('ui.common.no')"
                @confirm="data = data.filter((item) => item.box !== record.box)"
              >
                <a-button type="text" danger>
                  {{ $t('ui.common.delete') }}
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
