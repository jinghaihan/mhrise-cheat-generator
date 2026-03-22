<script lang="ts">
import type { TreeSelectProps } from 'ant-design-vue'
import type { BasicFormState } from './constant'
import { cloneDeep } from 'lodash-es'
import { computed, defineComponent, ref } from 'vue'
import { useReactiveI18n } from '@/composables/useReactiveI18n'
import {
  QURIOUS_CRAFTING_ATTRIBUTE_VALUE_TO_KEY,
  QURIOUS_CRAFTING_SKILL,
  QURIOUS_CRAFTING_TYPE,
} from '@/constants/database'
import { ENUM_I18N_PREFIX } from '@/constants/i18n'
import { getEnumLabel, isEmpty, parseSelectOptions } from '@/utils'

export default defineComponent({
  name: 'BasicForm',
  emits: ['add', 'clear'],
  setup(_, { emit }) {
    const QURIOUS_CRAFTING_TYPE_OPTIONS = useReactiveI18n(() =>
      parseSelectOptions(QURIOUS_CRAFTING_TYPE, false, {
        i18nPrefix: ENUM_I18N_PREFIX.quriousCraftingType,
      }),
    )
    const QURIOUS_CRAFTING_SKILL_OPTIONS = useReactiveI18n(() => {
      const formatSkillLabel = (node: any, fallback: string) => {
        if (node.sharedSkillKey) {
          const skillName = getEnumLabel('skill', String(node.sharedSkillKey), fallback)
          if (node.skillDelta === 1) {
            return `【C${node.skillCost}】${skillName} +1`
          }
          if (node.skillDelta === -1) {
            return `${skillName} -1`
          }
          return skillName
        }

        const attributeKey = QURIOUS_CRAFTING_ATTRIBUTE_VALUE_TO_KEY[String(node.value)]
        const i18nId = attributeKey || String(node.value)
        return getEnumLabel(ENUM_I18N_PREFIX.quriousCraftingSkill, i18nId, fallback)
      }

      const translateTree = (data: any[]): TreeSelectProps['treeData'] => {
        return data
          .filter(Boolean)
          .map((node) => {
            return {
              ...node,
              label: formatSkillLabel(node, String(node.label || '')),
              children: Array.isArray(node.children) ? translateTree(node.children) : undefined,
            }
          })
      }

      return translateTree(QURIOUS_CRAFTING_SKILL as any[])
    })

    const formState = ref({
      box: 201,
    } as BasicFormState)

    const reset = () => {
      for (let i = 0; i < 7; i++) {
        formState.value[`skill${i + 1}`] = null
      }
      formState.value.type = QURIOUS_CRAFTING_TYPE_OPTIONS.value[0]
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
      QURIOUS_CRAFTING_SKILL_OPTIONS,
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
    <a-form-item :label="$t('ui.common.equipmentBoxNo')">
      <a-input-number
        v-model:value="formState.box"
        :placeholder="$t('ui.common.equipmentBoxNo')"
        :precision="0"
        :min="1"
        allow-clear
      />
    </a-form-item>

    <a-form-item :label="$t('ui.common.type')">
      <a-select
        v-model:value="formState.type"
        :placeholder="$t('ui.common.type')"
        :options="QURIOUS_CRAFTING_TYPE_OPTIONS"
        option-filter-prop="label"
        show-search
        label-in-value
        allow-clear
      />
    </a-form-item>

    <a-form-item
      v-for="index in 7"
      :key="`skill${index}`"
      :label="$t('ui.common.skillWithIndex', { index })"
    >
      <a-tree-select
        v-model:value="formState[`skill${index}`]"
        :placeholder="$t('ui.common.skill')"
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
          {{ $t('ui.common.add') }}
        </a-button>
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
      </a-space>
    </a-form-item>
  </a-form>
</template>
