<script lang="ts">
import type { QuestRewardMultiplerFormState } from './constant'
import { defineComponent, ref } from 'vue'
import { useCheat } from '@/composables/useCheat'
import { FUNCTIONAL_QUEST_REWARD_MULTIPLE_TYPE } from '@/constants/database'
import { parseSelectOptions } from '@/utils'

export default defineComponent({
  name: 'QuestRewardMultiplerForm',
  setup() {
    const FUNCTIONAL_QUEST_REWARD_MULTIPLE_TYPE_OPTIONS = parseSelectOptions(
      FUNCTIONAL_QUEST_REWARD_MULTIPLE_TYPE,
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
  <a-card title="任务报酬倍率" size="small">
    <template #extra>
      <a-button type="primary" size="small" @click="onSubmit">
        添加
      </a-button>
    </template>
    <a-form :model="formState">
      <a-form-item label="任务报酬倍率">
        <a-select
          v-model:value="formState.multiple"
          placeholder="任务报酬倍率"
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
