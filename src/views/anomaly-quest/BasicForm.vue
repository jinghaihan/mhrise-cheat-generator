<script lang="ts">
import type { BasicFormState } from './constant'
import { cloneDeep } from 'lodash-es'
import { computed, defineComponent, ref } from 'vue'
import {
  ANOMALY_QUEST_FAIL,
  ANOMALY_QUEST_HUNT,
  ANOMALY_QUEST_LOCATION,
  ANOMALY_QUEST_MONSTER,
  ANOMALY_QUEST_MONSTER_MAJOR,
  ANOMALY_QUEST_PLAYERQTY,
  ANOMALY_QUEST_SP,
  ANOMALY_QUEST_TIMELIMIT,
  ANOMALY_QUEST_TIMEZONE,
  ANOMALY_QUEST_TYPE,
} from '@/constants/database'
import { isEmpty, parseSelectOptions } from '@/utils'

export default defineComponent({
  name: 'BasicForm',
  emits: ['add', 'clear'],
  setup(_, { emit }) {
    const ANOMALY_QUEST_TYPE_OPTIONS = parseSelectOptions(ANOMALY_QUEST_TYPE)
    const ANOMALY_QUEST_HUNT_OPTIONS = parseSelectOptions(ANOMALY_QUEST_HUNT)
    const ANOMALY_QUEST_MONSTER_MAJOR_OPTIONS = Object.keys(ANOMALY_QUEST_MONSTER_MAJOR).map(
      (label) => {
        return {
          label,
          value: ANOMALY_QUEST_MONSTER_MAJOR[label].code,
        }
      },
    )
    const ANOMALY_QUEST_MONSTER_OPTIONS = parseSelectOptions(ANOMALY_QUEST_MONSTER)
    const ANOMALY_QUEST_LOCATION_OPTIONS = parseSelectOptions(ANOMALY_QUEST_LOCATION)
    const ANOMALY_QUEST_TIMELIMIT_OPTIONS = parseSelectOptions(ANOMALY_QUEST_TIMELIMIT)
    const ANOMALY_QUEST_FAIL_OPTIONS = parseSelectOptions(ANOMALY_QUEST_FAIL)
    const ANOMALY_QUEST_PLAYERQTY_OPTIONS = parseSelectOptions(ANOMALY_QUEST_PLAYERQTY)
    const ANOMALY_QUEST_TIMEZONE_OPTIONS = parseSelectOptions(ANOMALY_QUEST_TIMEZONE)
    const ANOMALY_QUEST_SP_OPTIONS = parseSelectOptions(ANOMALY_QUEST_SP)

    const formState = ref({
      index: 9999,
      questIndex: 200,
      level: 300,
    } as BasicFormState)

    const reset = () => {
      formState.value.type = ANOMALY_QUEST_TYPE_OPTIONS.find(item => item.label === '狩猎')
      formState.value.hunt = ANOMALY_QUEST_HUNT_OPTIONS.find(item => item.label === '1头')
      formState.value.location = ANOMALY_QUEST_LOCATION_OPTIONS.find(
        item => item.label === '斗技场',
      )
      formState.value.timelimit = ANOMALY_QUEST_TIMELIMIT_OPTIONS.find(
        item => item.label === '25分',
      )
      formState.value.fail = ANOMALY_QUEST_FAIL_OPTIONS.find(item => item.label === '5次力尽')
      formState.value.playerQty = ANOMALY_QUEST_PLAYERQTY_OPTIONS.find(
        item => item.label === '4人',
      )
      formState.value.timezone = ANOMALY_QUEST_TIMEZONE_OPTIONS.find(
        item => item.label === '昼',
      )
      formState.value.sp = ANOMALY_QUEST_SP_OPTIONS.find(item => item.label === '否')

      for (let i = 0; i < 5; i++) {
        if (i) {
          formState.value[`monster${i + 1}`] = ANOMALY_QUEST_MONSTER_OPTIONS.find(
            item => item.label === '无',
          )
        }
        else {
          formState.value[`monster${i + 1}`] = null
        }
      }
    }
    reset()

    const onAdd = () => {
      emit('add', cloneDeep(formState.value))
      formState.value.index -= 1
      formState.value.questIndex -= 1
      reset()
    }
    const onClear = () => {
      emit('clear')
      formState.value.index = 9999
      formState.value.questIndex = 200
      reset()
    }

    return {
      formState,
      ANOMALY_QUEST_TYPE_OPTIONS,
      ANOMALY_QUEST_HUNT_OPTIONS,
      ANOMALY_QUEST_MONSTER_MAJOR_OPTIONS,
      ANOMALY_QUEST_MONSTER_OPTIONS,
      ANOMALY_QUEST_LOCATION_OPTIONS,
      ANOMALY_QUEST_TIMELIMIT_OPTIONS,
      ANOMALY_QUEST_FAIL_OPTIONS,
      ANOMALY_QUEST_PLAYERQTY_OPTIONS,
      ANOMALY_QUEST_TIMEZONE_OPTIONS,
      ANOMALY_QUEST_SP_OPTIONS,
      ADD_BTN_DISABLED: computed(() => {
        for (const key in formState.value) {
          if (isEmpty(formState.value[key])) {
            return true
          }
        }
        return false
      }),
      onAdd,
      onClear,
    }
  },
})
</script>

<template>
  <a-form :model="formState" :style="{ width: '340px' }">
    <a-row :gutter="24">
      <a-col :span="12">
        <a-form-item label="入手索引">
          <a-input-number
            v-model:value="formState.index"
            placeholder="入手索引"
            :precision="0"
            :min="1"
            :max="9999"
            allow-clear
          />
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item label="任务索引">
          <a-input-number
            v-model:value="formState.questIndex"
            placeholder="任务索引"
            :precision="0"
            :min="1"
            :max="200"
            allow-clear
          />
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item label="特别探究化">
          <a-select
            v-model:value="formState.sp"
            placeholder="特别探究化"
            :options="ANOMALY_QUEST_SP_OPTIONS"
            option-filter-prop="label"
            show-search
            label-in-value
            allow-clear
            :style="{ 'width': '90px', 'min-width': 'auto' }"
          />
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item label="任务等级">
          <a-input-number
            v-model:value="formState.level"
            placeholder="任务等级"
            :precision="0"
            :min="1"
            :max="300"
            allow-clear
          />
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item label="任务类别">
          <a-select
            v-model:value="formState.type"
            placeholder="任务类别"
            :options="ANOMALY_QUEST_TYPE_OPTIONS"
            option-filter-prop="label"
            show-search
            label-in-value
            allow-clear
            :style="{ 'width': '90px', 'min-width': 'auto' }"
          />
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item label="讨伐数目">
          <a-select
            v-model:value="formState.hunt"
            placeholder="讨伐数目"
            :options="ANOMALY_QUEST_HUNT_OPTIONS"
            option-filter-prop="label"
            show-search
            label-in-value
            allow-clear
            :style="{ 'width': '90px', 'min-width': 'auto' }"
          />
        </a-form-item>
      </a-col>
      <a-col v-for="index in 5" :key="`怪物${index}`" :span="24">
        <a-form-item :label="index === 5 ? '乱入怪物' : `怪物${index}`">
          <a-select
            v-model:value="formState[`monster${index}`]"
            :placeholder="index === 5 ? '乱入怪物' : `怪物${index}`"
            :options="
              index === 1 ? ANOMALY_QUEST_MONSTER_MAJOR_OPTIONS : ANOMALY_QUEST_MONSTER_OPTIONS
            "
            option-filter-prop="label"
            show-search
            label-in-value
            allow-clear
          />
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item label="目的地">
          <a-select
            v-model:value="formState.location"
            placeholder="目的地"
            :options="ANOMALY_QUEST_LOCATION_OPTIONS"
            option-filter-prop="label"
            show-search
            label-in-value
            allow-clear
            :style="{ 'width': '90px', 'min-width': 'auto' }"
          />
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item label="限制时间">
          <a-select
            v-model:value="formState.timelimit"
            placeholder="限制时间"
            :options="ANOMALY_QUEST_TIMELIMIT_OPTIONS"
            option-filter-prop="label"
            show-search
            label-in-value
            allow-clear
            :style="{ 'width': '90px', 'min-width': 'auto' }"
          />
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item label="失败条件">
          <a-select
            v-model:value="formState.fail"
            placeholder="失败条件"
            :options="ANOMALY_QUEST_FAIL_OPTIONS"
            option-filter-prop="label"
            show-search
            label-in-value
            allow-clear
            :style="{ 'width': '100px', 'min-width': 'auto' }"
          />
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item label="参加人数">
          <a-select
            v-model:value="formState.playerQty"
            placeholder="参加人数"
            :options="ANOMALY_QUEST_PLAYERQTY_OPTIONS"
            option-filter-prop="label"
            show-search
            label-in-value
            allow-clear
            :style="{ 'width': '90px', 'min-width': 'auto' }"
          />
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item label="时间段">
          <a-select
            v-model:value="formState.timezone"
            placeholder="时间段"
            :options="ANOMALY_QUEST_TIMEZONE_OPTIONS"
            option-filter-prop="label"
            show-search
            label-in-value
            allow-clear
            :style="{ 'width': '90px', 'min-width': 'auto' }"
          />
        </a-form-item>
      </a-col>
    </a-row>

    <a-form-item>
      <a-space>
        <a-button type="primary" ghost :disabled="ADD_BTN_DISABLED" @click="onAdd">
          添加
        </a-button>
        <a-popconfirm title="确定清空吗?" ok-text="Yes" cancel-text="No" @confirm="onClear">
          <a-button danger>
            清空
          </a-button>
        </a-popconfirm>
      </a-space>
    </a-form-item>
  </a-form>
</template>
