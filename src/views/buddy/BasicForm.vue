<script lang="ts">
import type { BasicFormState } from './constant'
import { cloneDeep } from 'lodash-es'
import { computed, defineComponent, ref } from 'vue'
import { BUDDY_LEVEL, BUDDY_TYPE } from '@/constants/database'
import { isEmpty, parseSelectOptions } from '@/utils'

export default defineComponent({
  name: 'BasicForm',
  emits: ['add', 'clear'],
  setup(_, { emit }) {
    const BUDDY_TYPE_OPTIONS = parseSelectOptions(BUDDY_TYPE)
    const BUDDY_LEVEL_OPTIONS = parseSelectOptions(BUDDY_LEVEL)

    const formState = ref({
      box: 1,
      type: BUDDY_TYPE_OPTIONS.find(item => item.label === '艾露猫'),
      level: BUDDY_LEVEL_OPTIONS.find(item => item.label === '49'),
    } as BasicFormState)

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
    <a-form-item label="类型">
      <a-select
        v-model:value="formState.type"
        placeholder="类型"
        :options="BUDDY_TYPE_OPTIONS"
        option-filter-prop="label"
        show-search
        label-in-value
        allow-clear
      />
    </a-form-item>

    <a-form-item label="栏位.No">
      <a-input-number
        v-model:value="formState.box"
        placeholder="栏位.No"
        :precision="0"
        :min="1"
        allow-clear
      />
    </a-form-item>

    <a-form-item label="等级">
      <a-select
        v-model:value="formState.level"
        placeholder="等级"
        :options="BUDDY_LEVEL_OPTIONS"
        option-filter-prop="label"
        show-search
        label-in-value
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
