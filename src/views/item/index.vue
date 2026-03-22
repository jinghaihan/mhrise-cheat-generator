<script lang="ts">
import type { ColumnData } from './constant'
import { defineComponent, inject, ref } from 'vue'
import { VerticalLayout } from '@/components/TableLayout'

import { useCheat } from '@/composables/useCheat'
import { useReactiveI18n } from '@/composables/useReactiveI18n'
import BasicForm from './BasicForm.vue'
import { getColumns } from './constant'
import ItemQuanityForm from './ItemQuanityForm.vue'
import OverallItemForm from './OverallItemForm.vue'

export default defineComponent({
  name: 'Item',
  components: { VerticalLayout, BasicForm, ItemQuanityForm, OverallItemForm },
  setup() {
    const { genCheat } = useCheat()
    const data = ref([] as ColumnData[])
    const columns = useReactiveI18n(getColumns)

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
          {{ $t('ui.common.addToCart') }}
        </a-button>

        <a-popover :title="$t('ui.item.batchEdit')" placement="bottom" :trigger="['click']">
          <a-button> {{ $t('ui.item.batchEditButton') }} </a-button>
          <template #content>
            <ItemQuanityForm />
          </template>
        </a-popover>
        <a-popover :title="$t('ui.item.allItems')" placement="bottom" :trigger="['click']">
          <a-button> {{ $t('ui.item.allItemsButton') }} </a-button>
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
