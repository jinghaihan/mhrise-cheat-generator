<script lang="ts">
import type { QuestRewardMultiplerFormState } from './constant'
import { defineComponent, ref } from 'vue'
import { useCheat } from '@/composables/useCheat'
import { useReactiveI18n } from '@/composables/useReactiveI18n'
import { FUNCTIONAL_QUEST_REWARD_MULTIPLE_TYPE } from '@/constants/database'
import { ENUM_I18N_PREFIX } from '@/constants/i18n'
import { parseSelectOptions } from '@/utils'

export default defineComponent({
  name: 'QuestRewardMultiplerForm',
  setup() {
    const FUNCTIONAL_QUEST_REWARD_MULTIPLE_TYPE_OPTIONS = useReactiveI18n(() =>
      parseSelectOptions(FUNCTIONAL_QUEST_REWARD_MULTIPLE_TYPE, false, {
        i18nPrefix: ENUM_I18N_PREFIX.functionalQuestReward,
      }),
    )

    const formState = ref({
      multiple: [],
    } as QuestRewardMultiplerFormState)

    const { genCheat } = useCheat()
    const onSubmit = () => {
      if (formState.value.multiple && formState.value.multiple.length) {
        formState.value.multiple.forEach((item) => {
          genCheat('QUEST_REWARD_MULTIPLER', { multiple: item })
        })
        formState.value.multiple = []
      }
    }

    return {
      formState,
      FUNCTIONAL_QUEST_REWARD_MULTIPLE_TYPE_OPTIONS,
      onSubmit,
    }
  },
})
</script>

<template>
  <a-card :title="$t('ui.functional.questRewardMultiplier')" size="small">
    <template #extra>
      <a-button type="primary" size="small" @click="onSubmit">
        {{ $t('ui.common.add') }}
      </a-button>
    </template>
    <a-form :model="formState">
      <a-form-item :label="$t('ui.functional.questRewardMultiplier')">
        <a-select
          v-model:value="formState.multiple"
          :placeholder="$t('ui.functional.questRewardMultiplier')"
          :options="FUNCTIONAL_QUEST_REWARD_MULTIPLE_TYPE_OPTIONS"
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
