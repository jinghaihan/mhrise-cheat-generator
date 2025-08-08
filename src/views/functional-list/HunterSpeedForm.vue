<script lang="ts">
import type { HunterSpeedFormState } from './constant'
import { defineComponent, ref } from 'vue'
import { useCheat } from '@/composables/useCheat'
import { FUNCTIONAL_HUNTER_SPEED_MULTIPLE_TYPE } from '@/constants/database'
import { parseSelectOptions } from '@/utils'

export default defineComponent({
  name: 'HunterSpeedForm',
  setup() {
    const FUNCTIONAL_HUNTER_SPEED_MULTIPLE_TYPE_OPTIONS = parseSelectOptions(
      FUNCTIONAL_HUNTER_SPEED_MULTIPLE_TYPE,
    )

    const formState = ref({
      multiple: [],
    } as HunterSpeedFormState)

    const { genCheat } = useCheat()
    const onSubmit = () => {
      if (formState.value.multiple && formState.value.multiple.length) {
        formState.value.multiple.forEach((item) => {
          genCheat('HUNTER_SPEED', { multiple: item })
        })
        formState.value.multiple = []
      }
    }

    return {
      formState,
      FUNCTIONAL_HUNTER_SPEED_MULTIPLE_TYPE_OPTIONS,
      onSubmit,
    }
  },
})
</script>

<template>
  <a-card title="猎人速率" size="small">
    <template #extra>
      <a-button type="primary" size="small" @click="onSubmit">
        添加
      </a-button>
    </template>
    <a-form :model="formState">
      <a-form-item label="猎人速率">
        <a-select
          v-model:value="formState.multiple"
          placeholder="猎人速率"
          :options="FUNCTIONAL_HUNTER_SPEED_MULTIPLE_TYPE_OPTIONS"
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
