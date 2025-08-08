<script lang="ts">
import type { OverallItemFormState } from './constant'
import { defineComponent, ref } from 'vue'
import { useCheat } from '@/composables/useCheat'
import { ITEM_TYPE } from '@/constants/database'
import { useUserStore } from '@/modules/store'
import { downloadCheat } from '@/utils'

export default defineComponent({
  name: 'OverallItemForm',
  setup() {
    const userStore = useUserStore()
    const { genCheat } = useCheat()

    const formRef = ref()
    const formState = ref({
      count: 9500,
    } as OverallItemFormState)

    const onSubmit = async () => {
      try {
        const state = await formRef.value.validate()
        const itemIds = Object.keys(ITEM_TYPE)

        const groupSizeCount = 15
        const fileSizeCount = 25

        const groupMap = {} as Record<string, string>
        const fileMap = {} as Record<string, string>

        itemIds.forEach((id, index) => {
          const groupIndex = Math.floor(index / groupSizeCount) + 1
          if (!groupMap[groupIndex]) {
            groupMap[groupIndex] = ''
          }

          groupMap[groupIndex] += genCheat(
            'ITEM',
            {
              box: index + 1,
              item: {
                value: id,
                label: ITEM_TYPE[id],
              },
              count: state.count,
            },
            false,
          )?.code

          if ((index + 1) % groupSizeCount === 0 || index === itemIds.length - 1) {
            const end = index + 1
            const start = end - groupSizeCount + 1
            groupMap[
              groupIndex
            ] = `\n[Box.${start}-${end} x${state.count}]\n${groupMap[groupIndex]}`
          }
        })

        Object.keys(groupMap).forEach((group, index) => {
          const file = Math.floor(index / fileSizeCount) + 1
          if (!fileMap[file]) {
            fileMap[file] = ''
          }
          fileMap[file] += groupMap[group]
        })

        const codes = [] as string[]
        Object.keys(fileMap).forEach((file) => {
          codes.push(fileMap[file])
        })
        downloadCheat(userStore.version, codes)
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
