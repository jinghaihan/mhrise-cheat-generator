<script lang="ts">
import type { BasicFormState } from './constant'
import { cloneDeep } from 'lodash-es'
import { computed, defineComponent, ref } from 'vue'
import { TALISMAN_SKILL, TALISMAN_SLOT, TALISMAN_TYPE } from '@/constants/database'
import { isEmpty, parseSelectOptions } from '@/utils'

export default defineComponent({
  name: 'BasicForm',
  emits: ['add', 'clear'],
  setup(_, { emit }) {
    const TALISMAN_TYPE_OPTIONS = parseSelectOptions(TALISMAN_TYPE, true)
    const TALISMAN_SKILL_OPTIONS = parseSelectOptions(TALISMAN_SKILL, true)
    const TALISMAN_SLOT_OPTIONS = parseSelectOptions(TALISMAN_SLOT)

    const formState = ref({
      box: 201,
    } as BasicFormState)

    const reset = () => {
      formState.value.type = TALISMAN_TYPE_OPTIONS.find(item => item.label === '圣贤护石')
      formState.value.skill1 = null
      formState.value.level1 = 0
      formState.value.skill2 = null
      formState.value.level2 = 0
      formState.value.slot = TALISMAN_SLOT_OPTIONS.find(item => item.label === '4-1-1')
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
      TALISMAN_TYPE_OPTIONS,
      TALISMAN_SKILL_OPTIONS,
      TALISMAN_SLOT_OPTIONS,
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
        :options="TALISMAN_TYPE_OPTIONS"
        option-filter-prop="label"
        show-search
        label-in-value
        allow-clear
      />
    </a-form-item>

    <a-form-item label="技能1">
      <a-input-group compact>
        <a-select
          v-model:value="formState.skill1"
          placeholder="技能1"
          :options="TALISMAN_SKILL_OPTIONS"
          option-filter-prop="label"
          show-search
          label-in-value
          allow-clear
          :style="{ width: '80%' }"
        />
        <a-input-number
          v-model:value="formState.level1"
          placeholder="Lv."
          :precision="0"
          :min="0"
          :max="5"
          allow-clear
          :style="{ width: '20%' }"
        />
      </a-input-group>
    </a-form-item>

    <a-form-item label="技能2">
      <a-input-group compact>
        <a-select
          v-model:value="formState.skill2"
          placeholder="技能2"
          :options="TALISMAN_SKILL_OPTIONS"
          option-filter-prop="label"
          show-search
          label-in-value
          allow-clear
          :style="{ width: '80%' }"
        />
        <a-input-number
          v-model:value="formState.level2"
          placeholder="Lv."
          :precision="0"
          :min="0"
          :max="5"
          allow-clear
          :style="{ width: '20%' }"
        />
      </a-input-group>
    </a-form-item>

    <a-form-item label="插槽">
      <a-select
        v-model:value="formState.slot"
        placeholder="插槽"
        :options="TALISMAN_SLOT_OPTIONS"
        option-filter-prop="label"
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
