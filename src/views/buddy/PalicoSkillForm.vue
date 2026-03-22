<script lang="ts">
import { cloneDeep } from 'lodash-es'
import { computed, defineComponent, getCurrentInstance, ref } from 'vue'
import { useReactiveI18n } from '@/composables/useReactiveI18n'
import { BUDDY_SKILL_PALICO } from '@/constants/database'
import { ENUM_I18N_PREFIX } from '@/constants/i18n'
import { isEmpty, parseSelectOptions } from '@/utils'

export default defineComponent({
  name: 'PalicoSkillForm',
  props: {
    update: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const BUDDY_SKILL_PALICO_OPTIONS = useReactiveI18n(() =>
      parseSelectOptions(BUDDY_SKILL_PALICO, true, {
        i18nPrefix: ENUM_I18N_PREFIX.buddyPalicoSkill,
      }),
    )

    const formState = ref({
      skill1: null,
      skill2: null,
      skill3: null,
      skill4: null,
      skill5: null,
    } as Record<string, any>)

    const onSave = () => {
      props.update(cloneDeep(formState.value))
    }

    return {
      formState,
      BUDDY_SKILL_PALICO_OPTIONS,
      SAVE_BTN_DISABLED: computed(() => {
        for (const key in formState.value) {
          if (isEmpty(formState.value[key])) {
            return true
          }
        }
        return false
      }),
      onSave,
      forceUpdate: getCurrentInstance()?.proxy?.$forceUpdate,
    }
  },
})
</script>

<template>
  <a-form :model="formState" hide-required-mark :style="{ width: '300px' }">
    <a-form-item
      v-for="index in 5"
      :key="`skill${index}`"
      :label="$t('ui.common.skillWithIndex', { index })"
      :name="`skill${index}`"
      :rules="[{ required: true }]"
    >
      <a-select
        v-model:value="formState[`skill${index}`]"
        :placeholder="$t('ui.common.skill')"
        :options="BUDDY_SKILL_PALICO_OPTIONS"
        option-filter-prop="label"
        show-search
        label-in-value
        allow-clear
        @change="forceUpdate"
      />
    </a-form-item>

    <a-form-item :wrapper-col="{ offset: 20 }">
      <a-button type="primary" ghost :disabled="SAVE_BTN_DISABLED" size="small" @click="onSave">
        {{ $t('ui.common.save') }}
      </a-button>
    </a-form-item>
  </a-form>
</template>
