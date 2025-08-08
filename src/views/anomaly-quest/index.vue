<script lang="ts">
import type { ColumnData } from './constant'
import { defineComponent, inject, ref } from 'vue'
import { HorizontalLayout } from '@/components/TableLayout'
import { useCheat } from '@/composables/useCheat'

import { ANOMALY_QUEST_MONSTER_MAJOR } from '@/constants/database'
import { getTableScrollX } from '@/utils'

import BasicForm from './BasicForm.vue'
import { AnomalyQuest, columns, CUSTOM_ANOMALY_QUESTS } from './constant'

export default defineComponent({
  name: 'AnomalyQuest',
  components: { HorizontalLayout, BasicForm },
  setup() {
    const { genCheat } = useCheat()
    const data = ref([] as ColumnData[])

    const onSubmit = () => {
      if (data.value.length) {
        data.value.forEach((row: ColumnData) => {
          genCheat('ANOMALY_QUEST', row)
        })
      }
    }

    const getAnomalyQuestList = (addCustomAnomalyQuest: boolean) => {
      const rows = [] as ColumnData[]
      let index = 0
      Object.keys(ANOMALY_QUEST_MONSTER_MAJOR).forEach((monster) => {
        ANOMALY_QUEST_MONSTER_MAJOR[monster].location.forEach((location) => {
          rows.push(
            new AnomalyQuest({
              index: 9999 - index,
              questIndex: 200 - index,
              location,
              monster1: monster,
            }) as ColumnData,
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
          加入购物车
        </a-button>
        <a-popconfirm
          ok-text="Yes"
          cancel-text="No"
          @confirm="getAnomalyQuestList(true)"
          @cancel="getAnomalyQuestList(false)"
        >
          <template #title>
            <p>该操作将会清除当前列表</p>
            <p>是否同时添加精选任务？</p>
          </template>
          <a-button> 获取单怪任务 </a-button>
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
                <a-tag v-if="record[`monster${index}`].label !== '无'" color="blue">
                  {{ record[`monster${index}`].label }}
                </a-tag>
              </template>
            </template>

            <template v-if="column.key === 'action'">
              <a-popconfirm
                title="确定删除吗?"
                ok-text="Yes"
                cancel-text="No"
                @confirm="data = data.filter((item) => item.index !== record.index)"
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
  @prefix-cls: ~'@{namespace}-anomaly-quest';

  .@{prefix-cls} {
    height: 100%;
    width: 100%;
  }
</style>
