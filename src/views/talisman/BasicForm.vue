<script lang="ts">
import type { BasicFormState } from './constant'
import { cloneDeep } from 'lodash-es'
import { computed, defineComponent, ref } from 'vue'
import { useReactiveI18n } from '@/composables/useReactiveI18n'
import { TALISMAN_SKILL, TALISMAN_SLOT, TALISMAN_TYPE } from '@/constants/database'
import { ENUM_I18N_PREFIX } from '@/constants/i18n'
import { isEmpty, parseSelectOptions } from '@/utils'

export default defineComponent({
  name: 'BasicForm',
  emits: ['add', 'clear'],
  setup(_, { emit }) {
    const TALISMAN_SKILL_GRADE_BY_ID = TALISMAN_SKILL.reduce<Record<string, string>>((result, skill) => {
      if (skill.grade) {
        result[skill.id] = skill.grade
      }
      return result
    }, {})

    const TALISMAN_TYPE_OPTIONS = useReactiveI18n(() =>
      parseSelectOptions(TALISMAN_TYPE, {
        i18nPrefix: ENUM_I18N_PREFIX.talismanType,
      }),
    )
    const TALISMAN_SKILL_OPTIONS = useReactiveI18n(() =>
      parseSelectOptions(TALISMAN_SKILL.map(skill => ({
        key: skill.id,
        value: skill.id,
      })), {
        i18nPrefix: ENUM_I18N_PREFIX.talismanSkill,
      }).map((option) => {
        const grade = TALISMAN_SKILL_GRADE_BY_ID[option.value]
        return {
          ...option,
          label: grade ? `${grade}. ${option.label}` : option.label,
        }
      }),
    )
    const TALISMAN_SLOT_OPTIONS = useReactiveI18n(() =>
      parseSelectOptions(TALISMAN_SLOT, {
        i18nPrefix: ENUM_I18N_PREFIX.talismanSlot,
      }),
    )

    const formState = ref<BasicFormState>({
      box: 201,
      type: null,
      skill1: null,
      level1: 0,
      skill2: null,
      level2: 0,
      slot: null,
    })

    const reset = () => {
      formState.value.type = TALISMAN_TYPE_OPTIONS.value.find(item => item.value === '11')
      formState.value.skill1 = null
      formState.value.level1 = 0
      formState.value.skill2 = null
      formState.value.level2 = 0
      const defaultSlot = TALISMAN_SLOT.find(item => item.key === '4-1-1')
      formState.value.slot = TALISMAN_SLOT_OPTIONS.value.find(
        item => item.value === defaultSlot?.value,
      )
    }
    reset()

    const onAdd = () => {
      emit('add', cloneDeep(formState.value))
      formState.value.box += 1
      reset()
    }
    const onClear = () => {
      emit('clear')
      formState.value.box = 201
      reset()
    }

    return {
      formState,
      TALISMAN_TYPE_OPTIONS,
      TALISMAN_SKILL_OPTIONS,
      TALISMAN_SLOT_OPTIONS,
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
  <a-form :model="formState" :style="{ width: '300px' }" :colon="false" label-align="left">
    <a-form-item :label="$t('ui.common.equipmentBoxNo')">
      <a-input-number
        v-model:value="formState.box"
        :placeholder="$t('ui.common.equipmentBoxNo')"
        :precision="0"
        :min="1"
        allow-clear
      />
    </a-form-item>

    <a-form-item :label="$t('ui.common.type')">
      <a-select
        v-model:value="formState.type"
        :placeholder="$t('ui.common.type')"
        :options="TALISMAN_TYPE_OPTIONS"
        option-filter-prop="label"
        show-search
        label-in-value
        allow-clear
      />
    </a-form-item>

    <a-form-item :label="$t('ui.common.skillWithIndex', { index: 1 })">
      <a-input-group compact>
        <a-select
          v-model:value="formState.skill1"
          :placeholder="$t('ui.common.skillWithIndex', { index: 1 })"
          :options="TALISMAN_SKILL_OPTIONS"
          option-filter-prop="label"
          show-search
          label-in-value
          allow-clear
          :style="{ width: '80%' }"
        />
        <a-input-number
          v-model:value="formState.level1"
          placeholder="Lv."
          :precision="0"
          :min="0"
          :max="5"
          allow-clear
          :style="{ width: '20%' }"
        />
      </a-input-group>
    </a-form-item>

    <a-form-item :label="$t('ui.common.skillWithIndex', { index: 2 })">
      <a-input-group compact>
        <a-select
          v-model:value="formState.skill2"
          :placeholder="$t('ui.common.skillWithIndex', { index: 2 })"
          :options="TALISMAN_SKILL_OPTIONS"
          option-filter-prop="label"
          show-search
          label-in-value
          allow-clear
          :style="{ width: '80%' }"
        />
        <a-input-number
          v-model:value="formState.level2"
          placeholder="Lv."
          :precision="0"
          :min="0"
          :max="5"
          allow-clear
          :style="{ width: '20%' }"
        />
      </a-input-group>
    </a-form-item>

    <a-form-item :label="$t('ui.common.slot')">
      <a-select
        v-model:value="formState.slot"
        :placeholder="$t('ui.common.slot')"
        :options="TALISMAN_SLOT_OPTIONS"
        option-filter-prop="label"
        show-search
        label-in-value
        allow-clear
      />
    </a-form-item>

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
