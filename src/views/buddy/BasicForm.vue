<script lang="ts">
import type { BasicFormState } from './constant'
import { cloneDeep } from 'lodash-es'
import { computed, defineComponent, ref } from 'vue'
import { useReactiveI18n } from '@/composables/useReactiveI18n'
import { BUDDY_LEVEL, BUDDY_TYPE } from '@/constants/database'
import { ENUM_I18N_PREFIX } from '@/constants/i18n'
import { isEmpty, parseSelectOptions } from '@/utils'

export default defineComponent({
  name: 'BasicForm',
  emits: ['add', 'clear'],
  setup(_, { emit }) {
    const BUDDY_TYPE_OPTIONS = useReactiveI18n(() =>
      parseSelectOptions(BUDDY_TYPE, {
        i18nPrefix: ENUM_I18N_PREFIX.buddyType,
      }),
    )
    const BUDDY_LEVEL_OPTIONS = useReactiveI18n(() =>
      parseSelectOptions(BUDDY_LEVEL),
    )

    const formState = ref<BasicFormState>({
      box: 1,
      type: BUDDY_TYPE_OPTIONS.value.find(item => item.value === 'PALICO'),
      level: BUDDY_LEVEL_OPTIONS.value.find(item => item.value === '059C30'),
    })

    const onAdd = () => {
      emit('add', cloneDeep(formState.value))
    }
    const onClear = () => {
      emit('clear')
    }

    return {
      formState,
      BUDDY_TYPE_OPTIONS,
      BUDDY_LEVEL_OPTIONS,
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
  <a-form layout="inline" :model="formState">
    <a-form-item :label="$t('ui.common.type')">
      <a-select
        v-model:value="formState.type"
        :placeholder="$t('ui.common.type')"
        :options="BUDDY_TYPE_OPTIONS"
        option-filter-prop="label"
        show-search
        label-in-value
        allow-clear
      />
    </a-form-item>

    <a-form-item :label="$t('ui.common.slotNo')">
      <a-input-number
        v-model:value="formState.box"
        :placeholder="$t('ui.common.slotNo')"
        :precision="0"
        :min="1"
        allow-clear
      />
    </a-form-item>

    <a-form-item :label="$t('ui.common.level')">
      <a-select
        v-model:value="formState.level"
        :placeholder="$t('ui.common.level')"
        :options="BUDDY_LEVEL_OPTIONS"
        option-filter-prop="label"
        show-search
        label-in-value
        allow-clear
      />
    </a-form-item>

    <a-form-item>
      <a-button type="primary" ghost :disabled="ADD_BTN_DISABLED" @click="onAdd">
        {{ $t('ui.common.add') }}
      </a-button>
    </a-form-item>

    <a-form-item>
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
    </a-form-item>
  </a-form>
</template>
