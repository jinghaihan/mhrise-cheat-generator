<script lang="ts">
import type { BasicFormState } from './constant'
import { cloneDeep } from 'lodash-es'
import { computed, defineComponent, ref } from 'vue'
import { ITEM_TYPE } from '@/constants/database'
import { isEmpty, parseSelectOptions } from '@/utils'

export default defineComponent({
  name: 'BasicForm',
  emits: ['add', 'clear'],
  setup(_, { emit }) {
    const ITEM_TYPE_OPTIONS = parseSelectOptions(ITEM_TYPE, true)

    const formState = ref({
      box: 1,
    } as BasicFormState)

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
    <a-form-item label="道具箱.No">
      <a-input-number
        v-model:value="formState.box"
        placeholder="道具箱.No"
        :precision="0"
        :min="1"
        allow-clear
      />
    </a-form-item>

    <a-form-item label="道具">
      <a-select
        v-model:value="formState.item"
        placeholder="道具"
        :options="ITEM_TYPE_OPTIONS"
        option-filter-prop="label"
        show-search
        label-in-value
        allow-clear
      />
    </a-form-item>

    <a-form-item label="数量">
      <a-input-number
        v-model:value="formState.count"
        placeholder="数量"
        :precision="0"
        :min="0"
        :max="9999"
        allow-clear
      />
    </a-form-item>

    <a-form-item>
      <a-button type="primary" ghost :disabled="ADD_BTN_DISABLED" @click="onAdd">
        添加
      </a-button>
    </a-form-item>

    <a-form-item>
      <a-popconfirm title="确定清空吗?" ok-text="Yes" cancel-text="No" @confirm="onClear">
        <a-button danger>
          清空
        </a-button>
      </a-popconfirm>
    </a-form-item>
  </a-form>
</template>
