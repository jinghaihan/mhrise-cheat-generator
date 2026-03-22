<script lang="ts">
import type { ColumnData } from './constant'
import { defineComponent, inject, ref } from 'vue'
import { HorizontalLayout } from '@/components/TableLayout'
import { useCheat } from '@/composables/useCheat'
import { useReactiveI18n } from '@/composables/useReactiveI18n'

import { ANOMALY_QUEST_MONSTER_MAJOR } from '@/constants/database'
import { getTableScrollX } from '@/utils'

import BasicForm from './BasicForm.vue'
import { AnomalyQuest, CUSTOM_ANOMALY_QUESTS, getColumns } from './constant'

export default defineComponent({
  name: 'AnomalyQuest',
  components: { HorizontalLayout, BasicForm },
  setup() {
    const { genCheat } = useCheat()
    const data = ref<ColumnData[]>([])
    const columns = useReactiveI18n(getColumns)

    const onSubmit = () => {
      if (data.value.length) {
        data.value.forEach((row: ColumnData) => {
          genCheat('ANOMALY_QUEST', row)
        })
      }
    }

    const getAnomalyQuestList = (addCustomAnomalyQuest: boolean) => {
      const rows: ColumnData[] = []
      let index = 0
      ANOMALY_QUEST_MONSTER_MAJOR.forEach((monster) => {
        monster.locations.forEach((location) => {
          rows.push(
            new AnomalyQuest({
              index: 9999 - index,
              questIndex: 200 - index,
              location,
              monster1: monster.code,
            }),
          )
          index++
        })
      })

      if (addCustomAnomalyQuest) {
        CUSTOM_ANOMALY_QUESTS.forEach((quest) => {
          rows.push(
            new AnomalyQuest({
              index: 9999 - index,
              questIndex: 200 - index,
              ...quest,
            }),
          )
          index++
        })
      }

      data.value = rows
    }

    return {
      prefixCls: `${inject('PREFIX_CLS')}-anomaly-quest`,
      columns,
      data,
      onSubmit,
      getTableScrollX,
      getAnomalyQuestList,
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
        <a-popconfirm
          :ok-text="$t('ui.common.yes')"
          :cancel-text="$t('ui.common.no')"
          @confirm="getAnomalyQuestList(true)"
          @cancel="getAnomalyQuestList(false)"
        >
          <template #title>
            <p>{{ $t('ui.anomalyQuest.clearListTip') }}</p>
            <p>{{ $t('ui.anomalyQuest.addSelectedQuestTip') }}</p>
          </template>
          <a-button> {{ $t('ui.anomalyQuest.singleMonsterQuest') }} </a-button>
        </a-popconfirm>
      </template>

      <template #table>
        <a-table
          :columns="columns"
          :data-source="data"
          row-key="index"
          :pagination="false"
          size="small"
          :scroll="{ x: getTableScrollX(columns), y: `calc(100vh - 142px)` }"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.dataIndex === 'monster'">
              <template v-for="index in 4" :key="`${record.box}_${index}`">
                <a-tag v-if="record[`monster${index}`].value !== '0000,000B'" color="blue">
                  {{ record[`monster${index}`].label }}
                </a-tag>
              </template>
            </template>

            <template v-if="column.key === 'action'">
              <a-popconfirm
                :title="$t('ui.common.confirmDelete')"
                :ok-text="$t('ui.common.yes')"
                :cancel-text="$t('ui.common.no')"
                @confirm="data = data.filter((item) => item.index !== record.index)"
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
  @prefix-cls: ~'@{namespace}-anomaly-quest';

  .@{prefix-cls} {
    height: 100%;
    width: 100%;
  }
</style>
