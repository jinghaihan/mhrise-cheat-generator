<script lang="ts">
import type { QuestCompleteFormState } from './constant'
import { defineComponent, ref } from 'vue'
import { useCheat } from '@/composables/useCheat'
import { useReactiveI18n } from '@/composables/useReactiveI18n'
import { GUILD_CARD_QUEST_TYPE } from '@/constants/database'
import { ENUM_I18N_PREFIX } from '@/constants/i18n'
import { isEmpty, parseSelectOptions } from '@/utils'

export default defineComponent({
  name: 'QuestComplateForm',
  setup() {
    const GUILD_CARD_QUEST_TYPE_OPTIONS = useReactiveI18n(() =>
      parseSelectOptions(GUILD_CARD_QUEST_TYPE, {
        i18nPrefix: ENUM_I18N_PREFIX.guildCardQuestType,
      }),
    )

    const formState = ref<QuestCompleteFormState>({})

    const { genCheat } = useCheat()
    const onSubmit = () => {
      Object.keys(formState.value).forEach((key) => {
        if (!isEmpty(formState.value[key])) {
          const option = GUILD_CARD_QUEST_TYPE_OPTIONS.value.find(item => item.value === key)
          genCheat('QUEST_COMPLETE_QTY', {
            name: option?.label || key,
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
  <a-card :title="$t('ui.guildCard.questCompleteCount')" size="small">
    <a-form :model="formState">
      <a-row :gutter="24">
        <a-col v-for="item in GUILD_CARD_QUEST_TYPE_OPTIONS" :key="item.value" :span="8">
          <a-form-item :label="item.label">
            <a-input-number
              v-model:value="formState[item.value]"
              :placeholder="$t('ui.guildCard.questCompleteCount')"
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
