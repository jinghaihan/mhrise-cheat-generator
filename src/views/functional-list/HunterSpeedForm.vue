<script lang="ts">
import type { HunterSpeedFormState } from './constant'
import { defineComponent, ref } from 'vue'
import { useCheat } from '@/composables/useCheat'
import { useReactiveI18n } from '@/composables/useReactiveI18n'
import { FUNCTIONAL_HUNTER_SPEED_MULTIPLE_TYPE } from '@/constants/database'
import { ENUM_I18N_PREFIX } from '@/constants/i18n'
import { parseSelectOptions } from '@/utils'

export default defineComponent({
  name: 'HunterSpeedForm',
  setup() {
    const FUNCTIONAL_HUNTER_SPEED_MULTIPLE_TYPE_OPTIONS = useReactiveI18n(() =>
      parseSelectOptions(FUNCTIONAL_HUNTER_SPEED_MULTIPLE_TYPE, {
        i18nPrefix: ENUM_I18N_PREFIX.functionalHunterSpeed,
      }),
    )

    const formState = ref<HunterSpeedFormState>({
      multiple: [],
    })

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
  <a-card :title="$t('ui.functional.hunterSpeed')" size="small">
    <template #extra>
      <a-button type="primary" size="small" @click="onSubmit">
        {{ $t('ui.common.add') }}
      </a-button>
    </template>
    <a-form :model="formState">
      <a-form-item :label="$t('ui.functional.hunterSpeed')">
        <a-select
          v-model:value="formState.multiple"
          :placeholder="$t('ui.functional.hunterSpeed')"
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
