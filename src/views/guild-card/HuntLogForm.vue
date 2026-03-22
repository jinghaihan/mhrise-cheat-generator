<script lang="ts">
import type { LabelInValueType } from 'ant-design-vue/es/vc-select/Select'
import type { HuntLogFormState } from './constant'
import { defineComponent, ref } from 'vue'
import { useCheat } from '@/composables/useCheat'
import { useReactiveI18n } from '@/composables/useReactiveI18n'
import { GUILD_CARD_MONSTER } from '@/constants/database'
import { ENUM_I18N_PREFIX } from '@/constants/i18n'
import { getEnumLabel, isEmpty } from '@/utils'

const MONSTER_LOG_TYPE = {
  hunt: '0138',
  anomaly: '0140',
  capture: '0150',
  smallest: '0158',
  largest: '0160',
}

const CAPTURE_DISABLED_TYPES = new Set(['elderDragon', 'apex'])
const ANOMALY_DISABLED_TYPES = new Set(['elderDragon', 'apex', 'special'])

export default defineComponent({
  name: 'HuntLogForm',
  setup() {
    const { genCheat } = useCheat()
    const MONSTER_BY_ID = Object.keys(GUILD_CARD_MONSTER).reduce((result, name) => {
      result[GUILD_CARD_MONSTER[name].id] = {
        ...GUILD_CARD_MONSTER[name],
        name,
      }
      return result
    }, {} as Record<string, { id: string, name: string, type: string, smallest?: string, largest?: string }>)

    const formState = ref({
      overall: {
        hunt: null,
        capture: null,
      },
    } as HuntLogFormState)

    const GUILD_CARD_MONSTER_OPTIONS = useReactiveI18n(() =>
      Object.values(MONSTER_BY_ID).map((monster) => {
        return {
          label: getEnumLabel(ENUM_I18N_PREFIX.guildCardMonster, monster.id, monster.name),
          value: monster.id,
        }
      }),
    )

    const images = {} as Record<string, string>
    Object.values(MONSTER_BY_ID).forEach((monster) => {
      images[monster.id] = new URL(`../../assets/images/monster/${monster.id}.png`, import.meta.url).href
      formState.value[monster.id] = {}
    })

    const getSmallestMonsterData = (params: { monster: { label: string, value: string } }) => {
      return {
        ...params,
        type: {
          label: getEnumLabel('ui.guildCard', 'smallestSize', '最小尺寸'),
          value: MONSTER_LOG_TYPE.smallest,
        },
        size: MONSTER_BY_ID[params.monster.value].smallest as string,
      }
    }
    const getLargestMonsterData = (params: { monster: { label: string, value: string } }) => {
      return {
        ...params,
        type: {
          label: getEnumLabel('ui.guildCard', 'largestSize', '最大尺寸'),
          value: MONSTER_LOG_TYPE.largest,
        },
        size: MONSTER_BY_ID[params.monster.value].largest as string,
      }
    }

    const onSubmit = () => {
      if (!isEmpty(formState.value.overall.hunt) && !isEmpty(formState.value.overall.capture)) {
        genCheat('OVERALL_HUNT_RECORD', formState.value.overall)
      }
      Object.keys(formState.value)
        .filter(key => key !== 'overall')
        .forEach((monster) => {
          const params = {
            monster: {
              label: getEnumLabel(
                ENUM_I18N_PREFIX.guildCardMonster,
                monster,
                MONSTER_BY_ID[monster]?.name || monster,
              ),
              value: monster,
            },
          }
          if (!isEmpty(formState.value[monster].hunt)) {
            genCheat('HUNT_RECORD', {
              ...params,
              count: formState.value[monster].hunt,
              type: {
                label: getEnumLabel('ui.guildCard', 'huntCount', '狩猎数'),
                value: MONSTER_LOG_TYPE.hunt,
              },
            })
          }
          if (!isEmpty(formState.value[monster].capture)) {
            genCheat('HUNT_RECORD', {
              ...params,
              count: formState.value[monster].capture,
              type: {
                label: getEnumLabel('ui.guildCard', 'captureCount', '捕获数'),
                value: MONSTER_LOG_TYPE.capture,
              },
            })
          }
          if (!isEmpty(formState.value[monster].anomaly)) {
            genCheat('HUNT_RECORD', {
              ...params,
              count: formState.value[monster].anomaly,
              type: {
                label: getEnumLabel('ui.guildCard', 'anomalyHuntCount', '怪异讨伐数'),
                value: MONSTER_LOG_TYPE.anomaly,
              },
            })
          }
          if (formState.value[monster].smallest) {
            genCheat('MONSTER_CROWN_SIZE', getSmallestMonsterData(params))
          }
          if (formState.value[monster].largest) {
            genCheat('MONSTER_CROWN_SIZE', getLargestMonsterData(params))
          }
        })
    }

    const onCrown = () => {
      Object.values(MONSTER_BY_ID).forEach((monster) => {
        if (monster.smallest && monster.largest) {
          const params = {
            monster: {
              label: getEnumLabel(ENUM_I18N_PREFIX.guildCardMonster, monster.id, monster.name),
              value: monster.id,
            },
          }
          genCheat('MONSTER_CROWN_SIZE', getSmallestMonsterData(params))
          genCheat('MONSTER_CROWN_SIZE', getLargestMonsterData(params))
        }
      })
    }

    return {
      GUILD_CARD_MONSTER_OPTIONS,
      images,
      formState,
      onSubmit,
      onCrown,
      IS_CAPTURE_DISABLED: (monster: LabelInValueType) => {
        if (CAPTURE_DISABLED_TYPES.has(MONSTER_BY_ID[monster.value].type)) {
          return true
        }
        return false
      },
      IS_ANOMALY_DISABLED: (monster: LabelInValueType) => {
        if (ANOMALY_DISABLED_TYPES.has(MONSTER_BY_ID[monster.value].type)) {
          return true
        }
        return false
      },
      IS_SMALLEST_DISABLED: (monster: LabelInValueType) => {
        if (!MONSTER_BY_ID[monster.value].smallest) {
          return true
        }
        return false
      },
      IS_LARGEST_DISABLED: (monster: LabelInValueType) => {
        if (!MONSTER_BY_ID[monster.value].largest) {
          return true
        }
        return false
      },
    }
  },
})
</script>

<template>
  <a-card :title="$t('ui.guildCard.huntLog')" size="small">
    <template #extra>
      <a-space>
        <a-form :model="formState" layout="inline">
          <a-form-item>
            <template #label>
              {{ $t('ui.guildCard.totalHuntAndCapture') }}
              <a-tooltip :title="$t('ui.guildCard.totalHuntFormula')">
                <Icon class="tip-icon" type="QuestionCircleOutlined" />
              </a-tooltip>
            </template>
            <a-input-group compact>
              <a-input-number
                v-model:value="formState.overall.hunt"
                :placeholder="$t('ui.guildCard.totalHuntCount')"
                :precision="0"
                :min="0"
                allow-clear
                :style="{ width: '50%' }"
              />
              <a-input-number
                v-model:value="formState.overall.capture"
                :placeholder="$t('ui.guildCard.totalCaptureCount')"
                :precision="0"
                :min="0"
                allow-clear
                :style="{ width: '50%' }"
              />
            </a-input-group>
          </a-form-item>
        </a-form>

        <a-button type="primary" size="small" @click="onCrown">
          {{ $t('ui.guildCard.allGoldCrowns') }}
        </a-button>
      </a-space>
    </template>

    <a-space :size="[8, 8]" wrap>
      <a-popover
        v-for="monster in GUILD_CARD_MONSTER_OPTIONS"
        :key="monster.value"
        :title="monster.label"
        placement="top"
        :trigger="['click']"
      >
        <a-card class="monster-card" hoverable>
          <template #cover>
            <img :src="images[monster.value]" :alt="monster.label">
          </template>
        </a-card>

        <template #content>
          <a-form :model="formState[monster.value]" :style="{ width: '300px' }">
            <a-row :gutter="24">
              <a-col :span="24">
                <a-form-item>
                  <template #label>
                    {{ $t('ui.guildCard.huntAndCapture') }}
                    <a-tooltip :title="$t('ui.guildCard.huntFormula')">
                      <Icon class="tip-icon" type="QuestionCircleOutlined" />
                    </a-tooltip>
                  </template>
                  <a-input-group compact>
                    <a-input-number
                      v-model:value="formState[monster.value].hunt"
                      :placeholder="$t('ui.guildCard.huntCount')"
                      :precision="0"
                      :min="0"
                      allow-clear
                      :style="{ width: '50%' }"
                    />
                    <a-input-number
                      v-model:value="formState[monster.value].capture"
                      :placeholder="$t('ui.guildCard.captureCount')"
                      :precision="0"
                      :min="0"
                      allow-clear
                      :style="{ width: '50%' }"
                      :disabled="IS_CAPTURE_DISABLED(monster)"
                    />
                  </a-input-group>
                </a-form-item>
              </a-col>
              <a-col :span="24">
                <a-form-item :label="$t('ui.guildCard.anomalyHuntCount')">
                  <a-input-number
                    v-model:value="formState[monster.value].anomaly"
                    :placeholder="$t('ui.guildCard.anomalyHuntCount')"
                    :precision="0"
                    :min="0"
                    allow-clear
                    :style="{ width: '100%' }"
                    :disabled="IS_ANOMALY_DISABLED(monster)"
                  />
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item :label="$t('ui.guildCard.smallestSize')">
                  <a-checkbox
                    v-model:checked="formState[monster.value].smallest"
                    :disabled="IS_SMALLEST_DISABLED(monster)"
                  />
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item :label="$t('ui.guildCard.largestSize')">
                  <a-checkbox
                    v-model:checked="formState[monster.value].largest"
                    :disabled="IS_LARGEST_DISABLED(monster)"
                  />
                </a-form-item>
              </a-col>
            </a-row>
          </a-form>
        </template>
      </a-popover>
    </a-space>
  </a-card>
</template>

<style lang="less" scoped>
  .tip-icon {
    color: @primary-color;
    margin-left: 0.3em;
  }
  @media screen and (max-width: 1600px) {
    .monster-card {
      width: 64px;
    }
  }
  @media screen and (min-width: 1600px) {
    .monster-card {
      width: 100px;
    }
  }
</style>
