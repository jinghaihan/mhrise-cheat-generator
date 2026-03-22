<script lang="ts">
import type { BasicFormState } from './constant'
import { defineComponent, ref } from 'vue'
import { useCheat } from '@/composables/useCheat'
import {
  GUILD_CARD_ANOMALY_RANK_EXP,
  GUILD_CARD_HUNTER_RANK_EXP,
  GUILD_CARD_MASTER_RANK_EXP,
} from '@/constants/database'
import { parseSelectOptions } from '@/utils'

export default defineComponent({
  name: 'BasicForm',
  setup() {
    const toRankOptions = (data: Record<string, string>) => {
      return parseSelectOptions(
        Object.entries(data).map(([key, value]) => ({ key, value, label: key })),
      )
    }

    const GUILD_CARD_HUNTER_RANK_EXP_OPTIONS = toRankOptions(GUILD_CARD_HUNTER_RANK_EXP)
    const GUILD_CARD_MASTER_RANK_EXP_OPTIONS = toRankOptions(GUILD_CARD_MASTER_RANK_EXP)
    const GUILD_CARD_ANOMALY_RANK_EXP_OPTIONS = toRankOptions(GUILD_CARD_ANOMALY_RANK_EXP)

    const formState = ref<BasicFormState>({
      hunterRank: null,
      masterRank: null,
      anomalyRank: null,
      zenny: null,
      overallZenny: null,
      kamura: null,
      playDuration: null,
      like: null,
    })

    const { genCheat } = useCheat()
    const onSubmit = () => {
      if (formState.value.hunterRank) {
        genCheat('HUNTER_RANK', formState.value)
      }
      if (formState.value.masterRank) {
        genCheat('MASTER_RANK', formState.value)
      }
      if (formState.value.anomalyRank) {
        genCheat('ANOMALY_RANK', formState.value)
      }
      if (formState.value.zenny && formState.value.overallZenny) {
        genCheat('ZENNY', formState.value)
      }
      if (formState.value.kamura) {
        genCheat('KAMURA_POINT', formState.value)
      }
      if (formState.value.playDuration) {
        genCheat('PLAY_DURATION', formState.value)
      }
      if (formState.value.like) {
        genCheat('PLAYER_LIKE_QTY', formState.value)
      }
    }

    return {
      formState,
      GUILD_CARD_HUNTER_RANK_EXP_OPTIONS,
      GUILD_CARD_MASTER_RANK_EXP_OPTIONS,
      GUILD_CARD_ANOMALY_RANK_EXP_OPTIONS,
      onSubmit,
    }
  },
})
</script>

<template>
  <a-card :title="$t('ui.guildCard.basicInfo')" size="small">
    <a-form :model="formState" layout="vertical">
      <a-form-item :label="$t('ui.guildCard.zenny')">
        <a-input-group compact>
          <a-input-number
            v-model:value="formState.zenny"
            :placeholder="$t('ui.guildCard.zenny')"
            :precision="0"
            :min="1"
            :max="99999999"
            allow-clear
            :style="{ width: '45%' }"
          />
          <a-input-number
            v-model:value="formState.overallZenny"
            :placeholder="$t('ui.guildCard.totalZenny')"
            :precision="0"
            :min="1"
            allow-clear
            :style="{ width: '55%' }"
          />
        </a-input-group>
      </a-form-item>
      <a-form-item :label="$t('ui.guildCard.kamuraPoint')">
        <a-input-number
          v-model:value="formState.kamura"
          :placeholder="$t('ui.guildCard.kamuraPoint')"
          :precision="0"
          :min="1"
          :max="99999999"
          allow-clear
          :style="{ width: '100%' }"
        />
      </a-form-item>
      <a-form-item :label="$t('ui.guildCard.playDuration')">
        <a-input-number
          v-model:value="formState.playDuration"
          :placeholder="$t('ui.guildCard.playDuration')"
          :precision="0"
          :min="0"
          allow-clear
          :style="{ width: '100%' }"
          :addon-after="$t('ui.guildCard.hour')"
        />
      </a-form-item>
      <a-form-item :label="$t('ui.guildCard.likes')">
        <a-input-number
          v-model:value="formState.like"
          :placeholder="$t('ui.guildCard.likes')"
          :precision="0"
          :min="0"
          allow-clear
          :style="{ width: '100%' }"
        />
      </a-form-item>
      <a-form-item :label="$t('ui.guildCard.hunterRank')">
        <a-select
          v-model:value="formState.hunterRank"
          :placeholder="$t('ui.guildCard.hunterRank')"
          :options="GUILD_CARD_HUNTER_RANK_EXP_OPTIONS"
          option-filter-prop="label"
          show-search
          label-in-value
          allow-clear
        />
      </a-form-item>
      <a-form-item :label="$t('ui.guildCard.masterRank')">
        <a-select
          v-model:value="formState.masterRank"
          :placeholder="$t('ui.guildCard.masterRank')"
          :options="GUILD_CARD_MASTER_RANK_EXP_OPTIONS"
          option-filter-prop="label"
          show-search
          label-in-value
          allow-clear
        />
      </a-form-item>
      <a-form-item :label="$t('ui.guildCard.anomalyRank')">
        <a-select
          v-model:value="formState.anomalyRank"
          :placeholder="$t('ui.guildCard.anomalyRank')"
          :options="GUILD_CARD_ANOMALY_RANK_EXP_OPTIONS"
          option-filter-prop="label"
          show-search
          label-in-value
          allow-clear
        />
      </a-form-item>
    </a-form>
  </a-card>
</template>
