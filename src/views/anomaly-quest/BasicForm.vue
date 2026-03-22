<script lang="ts">
import type { BasicFormState } from './constant'
import { cloneDeep } from 'lodash-es'
import { computed, defineComponent, ref } from 'vue'
import { useReactiveI18n } from '@/composables/useReactiveI18n'
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
import { ENUM_I18N_PREFIX } from '@/constants/i18n'
import { getEnumLabel, isEmpty, parseSelectOptions } from '@/utils'

export default defineComponent({
  name: 'BasicForm',
  emits: ['add', 'clear'],
  setup(_, { emit }) {
    const ANOMALY_QUEST_TYPE_OPTIONS = useReactiveI18n(() =>
      parseSelectOptions(ANOMALY_QUEST_TYPE, false, {
        i18nPrefix: ENUM_I18N_PREFIX.anomalyQuestType,
      }),
    )
    const ANOMALY_QUEST_HUNT_OPTIONS = useReactiveI18n(() =>
      parseSelectOptions(ANOMALY_QUEST_HUNT, false, {
        i18nPrefix: ENUM_I18N_PREFIX.anomalyQuestHunt,
      }),
    )
    const ANOMALY_QUEST_MONSTER_MAJOR_OPTIONS = useReactiveI18n(() =>
      Object.keys(ANOMALY_QUEST_MONSTER_MAJOR).map((name) => {
        const code = ANOMALY_QUEST_MONSTER_MAJOR[name].code
        return {
          label: getEnumLabel(ENUM_I18N_PREFIX.anomalyQuestMonster, code, name),
          value: code,
          sourceKey: name,
          sourceLabel: name,
        }
      }),
    )
    const ANOMALY_QUEST_MONSTER_OPTIONS = useReactiveI18n(() =>
      parseSelectOptions(ANOMALY_QUEST_MONSTER, false, {
        i18nPrefix: ENUM_I18N_PREFIX.anomalyQuestMonster,
      }),
    )
    const ANOMALY_QUEST_LOCATION_OPTIONS = useReactiveI18n(() =>
      parseSelectOptions(ANOMALY_QUEST_LOCATION, false, {
        i18nPrefix: ENUM_I18N_PREFIX.anomalyQuestLocation,
      }),
    )
    const ANOMALY_QUEST_TIMELIMIT_OPTIONS = useReactiveI18n(() =>
      parseSelectOptions(ANOMALY_QUEST_TIMELIMIT, false, {
        i18nPrefix: ENUM_I18N_PREFIX.anomalyQuestTimelimit,
      }),
    )
    const ANOMALY_QUEST_FAIL_OPTIONS = useReactiveI18n(() =>
      parseSelectOptions(ANOMALY_QUEST_FAIL, false, {
        i18nPrefix: ENUM_I18N_PREFIX.anomalyQuestFail,
      }),
    )
    const ANOMALY_QUEST_PLAYERQTY_OPTIONS = useReactiveI18n(() =>
      parseSelectOptions(ANOMALY_QUEST_PLAYERQTY, false, {
        i18nPrefix: ENUM_I18N_PREFIX.anomalyQuestPlayerQty,
      }),
    )
    const ANOMALY_QUEST_TIMEZONE_OPTIONS = useReactiveI18n(() =>
      parseSelectOptions(ANOMALY_QUEST_TIMEZONE, false, {
        i18nPrefix: ENUM_I18N_PREFIX.anomalyQuestTimezone,
      }),
    )
    const ANOMALY_QUEST_SP_OPTIONS = useReactiveI18n(() =>
      parseSelectOptions(ANOMALY_QUEST_SP, false, {
        i18nPrefix: ENUM_I18N_PREFIX.anomalyQuestSp,
      }),
    )

    const formState = ref({
      index: 9999,
      questIndex: 200,
      level: 300,
    } as BasicFormState)

    const reset = () => {
      formState.value.type = ANOMALY_QUEST_TYPE_OPTIONS.value.find(item => item.value === '0001')
      formState.value.hunt = ANOMALY_QUEST_HUNT_OPTIONS.value.find(item => item.value === '0001')
      formState.value.location = ANOMALY_QUEST_LOCATION_OPTIONS.value.find(item => item.value === '000A')
      formState.value.timelimit = ANOMALY_QUEST_TIMELIMIT_OPTIONS.value.find(item => item.value === '0019')
      formState.value.fail = ANOMALY_QUEST_FAIL_OPTIONS.value.find(item => item.value === '0005')
      formState.value.playerQty = ANOMALY_QUEST_PLAYERQTY_OPTIONS.value.find(item => item.value === '0004')
      formState.value.timezone = ANOMALY_QUEST_TIMEZONE_OPTIONS.value.find(item => item.value === '0001')
      formState.value.sp = ANOMALY_QUEST_SP_OPTIONS.value.find(item => item.value === '00010000')

      for (let i = 0; i < 5; i++) {
        if (i) {
          formState.value[`monster${i + 1}`] = ANOMALY_QUEST_MONSTER_OPTIONS.value.find(
            item => item.value === '0000,000B',
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
        <a-form-item :label="$t('ui.anomalyQuest.index')">
          <a-input-number
            v-model:value="formState.index"
            :placeholder="$t('ui.anomalyQuest.index')"
            :precision="0"
            :min="1"
            :max="9999"
            allow-clear
          />
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item :label="$t('ui.anomalyQuest.questIndex')">
          <a-input-number
            v-model:value="formState.questIndex"
            :placeholder="$t('ui.anomalyQuest.questIndex')"
            :precision="0"
            :min="1"
            :max="200"
            allow-clear
          />
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item :label="$t('ui.anomalyQuest.specialInvestigation')">
          <a-select
            v-model:value="formState.sp"
            :placeholder="$t('ui.anomalyQuest.specialInvestigation')"
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
        <a-form-item :label="$t('ui.anomalyQuest.level')">
          <a-input-number
            v-model:value="formState.level"
            :placeholder="$t('ui.anomalyQuest.level')"
            :precision="0"
            :min="1"
            :max="300"
            allow-clear
          />
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item :label="$t('ui.anomalyQuest.questType')">
          <a-select
            v-model:value="formState.type"
            :placeholder="$t('ui.anomalyQuest.questType')"
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
        <a-form-item :label="$t('ui.anomalyQuest.huntCount')">
          <a-select
            v-model:value="formState.hunt"
            :placeholder="$t('ui.anomalyQuest.huntCount')"
            :options="ANOMALY_QUEST_HUNT_OPTIONS"
            option-filter-prop="label"
            show-search
            label-in-value
            allow-clear
            :style="{ 'width': '90px', 'min-width': 'auto' }"
          />
        </a-form-item>
      </a-col>
      <a-col v-for="index in 5" :key="`monster${index}`" :span="24">
        <a-form-item
          :label="
            index === 5
              ? $t('ui.anomalyQuest.intruderMonster')
              : $t('ui.anomalyQuest.monsterWithIndex', { index })
          "
        >
          <a-select
            v-model:value="formState[`monster${index}`]"
            :placeholder="
              index === 5
                ? $t('ui.anomalyQuest.intruderMonster')
                : $t('ui.anomalyQuest.monsterWithIndex', { index })
            "
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
        <a-form-item :label="$t('ui.anomalyQuest.location')">
          <a-select
            v-model:value="formState.location"
            :placeholder="$t('ui.anomalyQuest.location')"
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
        <a-form-item :label="$t('ui.anomalyQuest.timeLimit')">
          <a-select
            v-model:value="formState.timelimit"
            :placeholder="$t('ui.anomalyQuest.timeLimit')"
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
        <a-form-item :label="$t('ui.anomalyQuest.failCondition')">
          <a-select
            v-model:value="formState.fail"
            :placeholder="$t('ui.anomalyQuest.failCondition')"
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
        <a-form-item :label="$t('ui.anomalyQuest.playerCount')">
          <a-select
            v-model:value="formState.playerQty"
            :placeholder="$t('ui.anomalyQuest.playerCount')"
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
        <a-form-item :label="$t('ui.anomalyQuest.timezone')">
          <a-select
            v-model:value="formState.timezone"
            :placeholder="$t('ui.anomalyQuest.timezone')"
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
          {{ $t('ui.common.add') }}
        </a-button>
        <a-popconfirm
          :title="$t('ui.common.confirmClear')"
          :ok-text="$t('ui.common.yes')"
          :cancel-text="$t('ui.common.no')"
          @confirm="onClear"
        >
          <a-button danger>
            {{ $t('ui.common.clear') }}
          </a-button>
        </a-popconfirm>
      </a-space>
    </a-form-item>
  </a-form>
</template>
