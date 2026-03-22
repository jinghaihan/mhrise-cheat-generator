<script lang="ts">
import type { QuestMonsterSizeFormState } from './constant'
import { defineComponent, ref } from 'vue'
import { useCheat } from '@/composables/useCheat'
import { useReactiveI18n } from '@/composables/useReactiveI18n'
import { FUNCTIONAL_QUEST_MONSTER_SIZE } from '@/constants/database'
import { ENUM_I18N_PREFIX } from '@/constants/i18n'
import { parseSelectOptions } from '@/utils'

export default defineComponent({
  name: 'QuestMonsterSizeForm',
  setup() {
    const FUNCTIONAL_QUEST_MONSTER_SIZE_OPTIONS = useReactiveI18n(() =>
      parseSelectOptions(FUNCTIONAL_QUEST_MONSTER_SIZE, false, {
        i18nPrefix: ENUM_I18N_PREFIX.functionalQuestMonsterSize,
      }),
    )

    const formState = ref({
      slot: null,
      multiple: [],
    } as QuestMonsterSizeFormState)

    const { genCheat } = useCheat()
    const onSubmit = () => {
      if (formState.value.multiple && formState.value.multiple.length) {
        formState.value.multiple.forEach((item) => {
          genCheat('QUEST_MONSTER_SIZE', { slot: formState.value.slot, multiple: item })
        })
        formState.value.multiple = []
      }
    }

    return {
      FUNCTIONAL_QUEST_MONSTER_SIZE_OPTIONS,
      formState,
      onSubmit,
    }
  },
})
</script>

<template>
  <a-card :title="$t('ui.functional.questMonsterSize')" size="small">
    <template #extra>
      <a-button type="primary" size="small" @click="onSubmit">
        {{ $t('ui.common.add') }}
      </a-button>
    </template>
    <a-form :model="formState">
      <a-form-item :label="$t('ui.common.slotNo')">
        <a-input-number
          v-model:value="formState.slot"
          :placeholder="$t('ui.common.slotNo')"
          :precision="0"
          :min="1"
          :max="3"
          allow-clear
          :style="{ width: '100%' }"
        />
      </a-form-item>
      <a-form-item :label="$t('ui.functional.sizeMultiplier')">
        <a-select
          v-model:value="formState.multiple"
          :placeholder="$t('ui.functional.sizeMultiplier')"
          :options="FUNCTIONAL_QUEST_MONSTER_SIZE_OPTIONS"
          option-filter-prop="label"
          show-search
          label-in-value
          allow-clear
          mode="multiple"
        />
      </a-form-item>
    </a-form>
  </a-card>
</template>
