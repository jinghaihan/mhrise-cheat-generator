<script lang="ts">
import type { QuestMonsterSizeFormState } from './constant'
import { defineComponent, ref } from 'vue'
import { useCheat } from '@/composables/useCheat'
import { FUNCTIONAL_QUEST_MONSTER_SIZE } from '@/constants/database'
import { parseSelectOptions } from '@/utils'

export default defineComponent({
  name: 'QuestMonsterSizeForm',
  setup() {
    const FUNCTIONAL_QUEST_MONSTER_SIZE_OPTIONS = parseSelectOptions(
      FUNCTIONAL_QUEST_MONSTER_SIZE,
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
  <a-card title="任务怪物体型" size="small">
    <template #extra>
      <a-button type="primary" size="small" @click="onSubmit">
        添加
      </a-button>
    </template>
    <a-form :model="formState">
      <a-form-item label="栏位.No">
        <a-input-number
          v-model:value="formState.slot"
          placeholder="栏位.No"
          :precision="0"
          :min="1"
          :max="3"
          allow-clear
          :style="{ width: '100%' }"
        />
      </a-form-item>
      <a-form-item label="体型倍率">
        <a-select
          v-model:value="formState.multiple"
          placeholder="体型倍率"
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
