<script lang="ts">
import type { ArenaRecordFormState } from './constant'
import { cloneDeep } from 'lodash-es'
import { computed, defineComponent, ref } from 'vue'
import { useCheat } from '@/composables/useCheat'
import { GUILD_CARD_ARENA_QUEST, GUILD_CARD_ARENA_TYPE } from '@/constants/database'
import { parseSelectOptions } from '@/utils'

export default defineComponent({
  name: 'ArenaRecordForm',
  setup() {
    const GUILD_CARD_ARENA_TYPE_OPTIONS = parseSelectOptions(GUILD_CARD_ARENA_TYPE)
    const GUILD_CARD_ARENA_QUEST_OPTIONS = parseSelectOptions(GUILD_CARD_ARENA_QUEST)

    const formState = ref({
      type: null,
      quest: null,
      slot: null,
    } as ArenaRecordFormState)
    const data = ref([] as ArenaRecordFormState[])

    const reset = () => {
      formState.value.type = GUILD_CARD_ARENA_TYPE_OPTIONS.find(
        item => item.label === '大师等级',
      )
      formState.value.quest = null
      formState.value.slot = null
    }
    reset()

    const { genCheat } = useCheat()
    const onSubmit = () => {
      data.value.forEach((value) => {
        genCheat('ARENA_RECORD_REMOVE', value)
      })
    }

    const onAdd = () => {
      data.value.push(cloneDeep(formState.value))
      reset()
    }

    const onDelete = (index: number) => {
      data.value.splice(index, 1)
    }

    return {
      data,
      formState,
      GUILD_CARD_ARENA_TYPE_OPTIONS,
      COMPUTED_GUILD_CARD_ARENA_QUEST_OPTIONS: computed(() => {
        if (formState.value.type?.label === '大师等级') {
          return GUILD_CARD_ARENA_QUEST_OPTIONS.filter(item => !item.label.includes('挑战任务'))
        }
        return GUILD_CARD_ARENA_QUEST_OPTIONS
      }),
      onSubmit,
      onAdd,
      onDelete,
    }
  },
})
</script>

<template>
  <a-card title="斗技大会记录消除" size="small">
    <template #extra>
      <a-button type="primary" size="small" @click="onAdd">
        添加
      </a-button>
    </template>
    <a-form :model="formState" layout="vertical">
      <a-form-item label="任务等级">
        <a-select
          v-model:value="formState.type"
          placeholder="任务等级"
          :options="GUILD_CARD_ARENA_TYPE_OPTIONS"
          option-filter-prop="label"
          show-search
          label-in-value
          allow-clear
        />
      </a-form-item>
      <a-form-item label="斗技任务">
        <a-select
          v-model:value="formState.quest"
          placeholder="斗技任务"
          :options="COMPUTED_GUILD_CARD_ARENA_QUEST_OPTIONS"
          option-filter-prop="label"
          show-search
          label-in-value
          allow-clear
        />
      </a-form-item>
      <a-form-item label="记录栏位.No">
        <a-input-number
          v-model:value="formState.slot"
          placeholder="记录栏位.No"
          :precision="0"
          :min="1"
          :max="5"
          allow-clear
          :style="{ width: '100%' }"
        />
      </a-form-item>
    </a-form>

    <a-empty v-show="!data.length" />
    <a-space wrap>
      <a-tooltip v-for="(tag, index) in data" :key="`${tag.type}_${tag.quest}_${tag.slot}`">
        <template #title>
          <p>任务等级：{{ tag.type?.label }}</p>
          <p>斗技任务：{{ tag.quest?.label }}</p>
          <p>记录栏位.No：{{ tag.slot }}</p>
        </template>
        <a-tag
          :color="tag.type?.label === '大师等级' ? 'purple' : 'blue'"
          closable
          @close="onDelete(index)"
        >
          {{ tag.quest?.label }}_Slot.{{ tag.slot }}
        </a-tag>
      </a-tooltip>
    </a-space>
  </a-card>
</template>
