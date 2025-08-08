<script lang="ts">
import type { ItemQuanityFormState } from './constant'
import { defineComponent, ref } from 'vue'
import { useCheat } from '@/composables/useCheat'
import { ITEM_TYPE } from '@/constants/database'

export default defineComponent({
  name: 'ItemQuanityForm',
  setup() {
    const { genCheat } = useCheat()

    const formRef = ref()
    const formState = ref({
      start: 1,
      end: Object.keys(ITEM_TYPE).length + 1,
      count: 9500,
    } as ItemQuanityFormState)

    const onSubmit = async () => {
      try {
        const state = await formRef.value.validate()
        genCheat('ITEM_QTY', state)
      }
      catch {}
    }

    return {
      formRef,
      formState,
      onSubmit,
    }
  },
})
</script>

<template>
  <a-form ref="formRef" :model="formState" hide-required-mark :style="{ width: '300px' }">
    <a-form-item label="开始编号" name="start" :rules="[{ required: true }]">
      <a-input-number
        v-model:value="formState.start"
        placeholder="开始编号"
        :precision="0"
        :min="1"
        allow-clear
        :style="{ width: '100%' }"
      />
    </a-form-item>
    <a-form-item label="结束编号" name="end" :rules="[{ required: true }]">
      <a-input-number
        v-model:value="formState.end"
        placeholder="结束编号"
        :precision="0"
        :min="1"
        allow-clear
        :style="{ width: '100%' }"
      />
    </a-form-item>
    <a-form-item label="数量" name="count" :rules="[{ required: true }]">
      <a-input-number
        v-model:value="formState.count"
        placeholder="数量"
        :precision="0"
        :min="0"
        :max="9999"
        allow-clear
        :style="{ width: '100%' }"
      />
    </a-form-item>
    <a-form-item :wrapper-col="{ offset: 20 }">
      <a-button type="primary" ghost size="small" @click="onSubmit">
        确定
      </a-button>
    </a-form-item>
  </a-form>
</template>
