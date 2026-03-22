<script lang="ts">
import type { ArenaRecordFormState } from './constant'
import { cloneDeep } from 'lodash-es'
import { computed, defineComponent, ref } from 'vue'
import { useCheat } from '@/composables/useCheat'
import { useReactiveI18n } from '@/composables/useReactiveI18n'
import { GUILD_CARD_ARENA_QUEST, GUILD_CARD_ARENA_TYPE } from '@/constants/database'
import { ENUM_I18N_PREFIX } from '@/constants/i18n'
import { parseSelectOptions } from '@/utils'

export default defineComponent({
  name: 'ArenaRecordForm',
  setup() {
    const GUILD_CARD_ARENA_TYPE_OPTIONS = useReactiveI18n(() =>
      parseSelectOptions(GUILD_CARD_ARENA_TYPE, false, {
        i18nPrefix: ENUM_I18N_PREFIX.guildCardArenaType,
      }),
    )
    const GUILD_CARD_ARENA_QUEST_OPTIONS = useReactiveI18n(() =>
      parseSelectOptions(GUILD_CARD_ARENA_QUEST, false, {
        i18nPrefix: ENUM_I18N_PREFIX.guildCardArenaQuest,
      }),
    )

    const formState = ref({
      type: null,
      quest: null,
      slot: null,
    } as ArenaRecordFormState)
    const data = ref([] as ArenaRecordFormState[])

    const reset = () => {
      formState.value.type = GUILD_CARD_ARENA_TYPE_OPTIONS.value.find(item => item.value === '88')
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
        if (formState.value.type?.value === '88') {
          return GUILD_CARD_ARENA_QUEST_OPTIONS.value.filter(
            item => Number.parseInt(item.value, 16) < 0x50,
          )
        }
        return GUILD_CARD_ARENA_QUEST_OPTIONS.value
      }),
      onSubmit,
      onAdd,
      onDelete,
    }
  },
})
</script>

<template>
  <a-card :title="$t('ui.guildCard.arenaRecordRemove')" size="small">
    <template #extra>
      <a-button type="primary" size="small" @click="onAdd">
        {{ $t('ui.common.add') }}
      </a-button>
    </template>
    <a-form :model="formState" layout="vertical">
      <a-form-item :label="$t('ui.guildCard.questLevel')">
        <a-select
          v-model:value="formState.type"
          :placeholder="$t('ui.guildCard.questLevel')"
          :options="GUILD_CARD_ARENA_TYPE_OPTIONS"
          option-filter-prop="label"
          show-search
          label-in-value
          allow-clear
        />
      </a-form-item>
      <a-form-item :label="$t('ui.guildCard.arenaQuest')">
        <a-select
          v-model:value="formState.quest"
          :placeholder="$t('ui.guildCard.arenaQuest')"
          :options="COMPUTED_GUILD_CARD_ARENA_QUEST_OPTIONS"
          option-filter-prop="label"
          show-search
          label-in-value
          allow-clear
        />
      </a-form-item>
      <a-form-item :label="$t('ui.guildCard.recordSlotNo')">
        <a-input-number
          v-model:value="formState.slot"
          :placeholder="$t('ui.guildCard.recordSlotNo')"
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
          <p>{{ $t('ui.guildCard.questLevel') }}: {{ tag.type?.label }}</p>
          <p>{{ $t('ui.guildCard.arenaQuest') }}: {{ tag.quest?.label }}</p>
          <p>{{ $t('ui.guildCard.recordSlotNo') }}: {{ tag.slot }}</p>
        </template>
        <a-tag
          :color="tag.type?.value === '88' ? 'purple' : 'blue'"
          closable
          @close="onDelete(index)"
        >
          {{ tag.quest?.label }}_Slot.{{ tag.slot }}
        </a-tag>
      </a-tooltip>
    </a-space>
  </a-card>
</template>
