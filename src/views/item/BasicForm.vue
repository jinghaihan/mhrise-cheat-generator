<script lang="ts">
import type { BasicFormState } from './constant'
import { cloneDeep } from 'lodash-es'
import { computed, defineComponent, ref } from 'vue'
import { useReactiveI18n } from '@/composables/useReactiveI18n'
import { ITEM_TYPE } from '@/constants/database'
import { ENUM_I18N_PREFIX } from '@/constants/i18n'
import { isEmpty, parseSelectOptions } from '@/utils'

export default defineComponent({
  name: 'BasicForm',
  emits: ['add', 'clear'],
  setup(_, { emit }) {
    const ITEM_TYPE_OPTIONS = useReactiveI18n(() =>
      parseSelectOptions(ITEM_TYPE, {
        i18nPrefix: ENUM_I18N_PREFIX.itemType,
      }),
    )

    const formState = ref<BasicFormState>({
      box: 1,
      item: null,
      count: 9500,
    })

    const reset = () => {
      formState.value.item = null
      formState.value.count = 9500
    }
    reset()

    const onAdd = () => {
      emit('add', cloneDeep(formState.value))
      formState.value.box += 1
      reset()
    }
    const onClear = () => {
      emit('clear')
      formState.value.box = 1
      reset()
    }

    return {
      formState,
      ITEM_TYPE_OPTIONS,
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
  <a-form :model="formState" layout="inline">
    <a-form-item :label="$t('ui.item.boxNo')">
      <a-input-number
        v-model:value="formState.box"
        :placeholder="$t('ui.item.boxNo')"
        :precision="0"
        :min="1"
        allow-clear
      />
    </a-form-item>

    <a-form-item :label="$t('ui.item.item')">
      <a-select
        v-model:value="formState.item"
        :placeholder="$t('ui.item.item')"
        :options="ITEM_TYPE_OPTIONS"
        option-filter-prop="label"
        show-search
        label-in-value
        allow-clear
      />
    </a-form-item>

    <a-form-item :label="$t('ui.common.count')">
      <a-input-number
        v-model:value="formState.count"
        :placeholder="$t('ui.common.count')"
        :precision="0"
        :min="0"
        :max="9999"
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
