<script lang="ts">
import type { QuestCompleteFormState } from './constant'
import { defineComponent, ref } from 'vue'
import { useCheat } from '@/composables/useCheat'
import { GUILD_CARD_QUEST_TYPE } from '@/constants/database'
import { isEmpty, parseSelectOptions } from '@/utils'

export default defineComponent({
  name: 'QuestComplateForm',
  setup() {
    const GUILD_CARD_QUEST_TYPE_OPTIONS = parseSelectOptions(GUILD_CARD_QUEST_TYPE, true)

    const formState = ref({} as QuestCompleteFormState)

    const { genCheat } = useCheat()
    const onSubmit = () => {
      Object.keys(formState.value).forEach((key) => {
        if (!isEmpty(formState.value[key])) {
          genCheat('QUEST_COMPLETE_QTY', {
            name: GUILD_CARD_QUEST_TYPE[key],
            type: key,
            count: formState.value[key],
          })
        }
      })
    }

    return {
      formState,
      GUILD_CARD_QUEST_TYPE_OPTIONS,
      onSubmit,
    }
  },
})
</script>

<template>
  <a-card title="任务完成次数" size="small">
    <a-form :model="formState">
      <a-row :gutter="24">
        <a-col v-for="item in GUILD_CARD_QUEST_TYPE_OPTIONS" :key="item.value" :span="8">
          <a-form-item :label="item.label">
            <a-input-number
              v-model:value="formState[item.value]"
              placeholder="任务完成次数"
              :precision="0"
              :min="1"
              allow-clear
              :style="{ width: '100%' }"
            />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </a-card>
</template>
