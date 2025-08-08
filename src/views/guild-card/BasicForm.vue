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
    const GUILD_CARD_HUNTER_RANK_EXP_OPTIONS = parseSelectOptions(GUILD_CARD_HUNTER_RANK_EXP)
    const GUILD_CARD_MASTER_RANK_EXP_OPTIONS = parseSelectOptions(GUILD_CARD_MASTER_RANK_EXP)
    const GUILD_CARD_ANOMALY_RANK_EXP_OPTIONS = parseSelectOptions(GUILD_CARD_ANOMALY_RANK_EXP)

    const formState = ref({
      hunterRank: null,
      masterRank: null,
      anomalyRank: null,
      zenny: null,
      overallZenny: null,
      kamura: null,
      playDuration: null,
      like: null,
    } as BasicFormState)

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
  <a-card title="基本信息" size="small">
    <a-form :model="formState" layout="vertical">
      <a-form-item label="金钱">
        <a-input-group compact>
          <a-input-number
            v-model:value="formState.zenny"
            placeholder="金钱"
            :precision="0"
            :min="1"
            :max="99999999"
            allow-clear
            :style="{ width: '45%' }"
          />
          <a-input-number
            v-model:value="formState.overallZenny"
            placeholder="总金钱"
            :precision="0"
            :min="1"
            allow-clear
            :style="{ width: '55%' }"
          />
        </a-input-group>
      </a-form-item>
      <a-form-item label="炎火点数">
        <a-input-number
          v-model:value="formState.kamura"
          placeholder="炎火点数"
          :precision="0"
          :min="1"
          :max="99999999"
          allow-clear
          :style="{ width: '100%' }"
        />
      </a-form-item>
      <a-form-item label="总游戏时间">
        <a-input-number
          v-model:value="formState.playDuration"
          placeholder="总游戏时间"
          :precision="0"
          :min="0"
          allow-clear
          :style="{ width: '100%' }"
          addon-after="小时"
        />
      </a-form-item>
      <a-form-item label="获赞次数">
        <a-input-number
          v-model:value="formState.like"
          placeholder="获赞次数"
          :precision="0"
          :min="0"
          allow-clear
          :style="{ width: '100%' }"
        />
      </a-form-item>
      <a-form-item label="猎人等级">
        <a-select
          v-model:value="formState.hunterRank"
          placeholder="猎人等级"
          :options="GUILD_CARD_HUNTER_RANK_EXP_OPTIONS"
          option-filter-prop="label"
          show-search
          label-in-value
          allow-clear
        />
      </a-form-item>
      <a-form-item label="大师等级">
        <a-select
          v-model:value="formState.masterRank"
          placeholder="大师等级"
          :options="GUILD_CARD_MASTER_RANK_EXP_OPTIONS"
          option-filter-prop="label"
          show-search
          label-in-value
          allow-clear
        />
      </a-form-item>
      <a-form-item label="怪异研究等级">
        <a-select
          v-model:value="formState.anomalyRank"
          placeholder="怪异研究等级"
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
