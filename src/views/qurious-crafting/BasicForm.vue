<script lang="ts">
import type { BasicFormState } from './constant'
import { cloneDeep } from 'lodash-es'
import { computed, defineComponent, ref } from 'vue'
import { QURIOUS_CRAFTING_SKILL, QURIOUS_CRAFTING_TYPE } from '@/constants/database'
import { isEmpty, parseSelectOptions } from '@/utils'

export default defineComponent({
  name: 'BasicForm',
  emits: ['add', 'clear'],
  setup(_, { emit }) {
    const QURIOUS_CRAFTING_TYPE_OPTIONS = parseSelectOptions(QURIOUS_CRAFTING_TYPE)

    const formState = ref({
      box: 201,
    } as BasicFormState)

    const reset = () => {
      for (let i = 0; i < 7; i++) {
        formState.value[`skill${i + 1}`] = null
      }
      formState.value.type = QURIOUS_CRAFTING_TYPE_OPTIONS.find(
        item => item.label === '怪异强化',
      )
    }
    reset()

    const onAdd = () => {
      emit('add', cloneDeep(formState.value))
      formState.value.box += 1
      reset()
    }
    const onClear = () => {
      emit('clear')
      formState.value.box = 201
      reset()
    }

    return {
      formState,
      QURIOUS_CRAFTING_TYPE_OPTIONS,
      QURIOUS_CRAFTING_SKILL_OPTIONS: QURIOUS_CRAFTING_SKILL,
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
  <a-form :model="formState" :style="{ width: '300px' }">
    <a-form-item label="装备箱.No">
      <a-input-number
        v-model:value="formState.box"
        placeholder="装备箱.No"
        :precision="0"
        :min="1"
        allow-clear
      />
    </a-form-item>

    <a-form-item label="类型">
      <a-select
        v-model:value="formState.type"
        placeholder="类型"
        :options="QURIOUS_CRAFTING_TYPE_OPTIONS"
        option-filter-prop="label"
        show-search
        label-in-value
        allow-clear
      />
    </a-form-item>

    <a-form-item v-for="index in 7" :key="`技能${index}`" :label="`技能${index}`">
      <a-tree-select
        v-model:value="formState[`skill${index}`]"
        placeholder="技能"
        :tree-data="QURIOUS_CRAFTING_SKILL_OPTIONS"
        tree-node-filter-prop="label"
        show-search
        label-in-value
        allow-clear
      />
    </a-form-item>

    <a-form-item>
      <a-space>
        <a-button type="primary" ghost :disabled="ADD_BTN_DISABLED" @click="onAdd">
          添加
        </a-button>
        <a-popconfirm title="确定清空吗?" ok-text="Yes" cancel-text="No" @confirm="onClear">
          <a-button danger>
            清空
          </a-button>
        </a-popconfirm>
      </a-space>
    </a-form-item>
  </a-form>
</template>
