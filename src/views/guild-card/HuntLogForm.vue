<script lang="ts">
import type { LabelInValueType } from 'ant-design-vue/es/vc-select/Select'
import type { HuntLogFormState } from './constant'
import { defineComponent, ref } from 'vue'
import { useCheat } from '@/composables/useCheat'
import { GUILD_CARD_MONSTER, GUILD_CARD_MONSTER_LOG_TYPE } from '@/constants/database'
import { isEmpty } from '@/utils'

export default defineComponent({
  name: 'HuntLogForm',
  setup() {
    const { genCheat } = useCheat()

    const formState = ref({
      overall: {
        hunt: null,
        capture: null,
      },
    } as HuntLogFormState)

    const GUILD_CARD_MONSTER_OPTIONS = Object.keys(GUILD_CARD_MONSTER).map((name) => {
      return {
        label: name,
        value: GUILD_CARD_MONSTER[name].id,
      }
    })

    const images = {} as Record<string, string>
    GUILD_CARD_MONSTER_OPTIONS.forEach((monster) => {
      images[monster.value] = new URL(`../../assets/images/monster/${monster.value}.png`, import.meta.url).href
      formState.value[monster.value] = {
        monsterName: monster.label,
      }
    })

    const getSmallestMonsterData = (params: { monster: { label: string, value: string } }) => {
      return {
        ...params,
        type: {
          label: '最小尺寸',
          value: GUILD_CARD_MONSTER_LOG_TYPE['最小尺寸'],
        },
        size: GUILD_CARD_MONSTER[params.monster.label].smallest as string,
      }
    }
    const getLargestMonsterData = (params: { monster: { label: string, value: string } }) => {
      return {
        ...params,
        type: {
          label: '最大尺寸',
          value: GUILD_CARD_MONSTER_LOG_TYPE['最大尺寸'],
        },
        size: GUILD_CARD_MONSTER[params.monster.label].largest as string,
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
              label: formState.value[monster].monsterName,
              value: monster,
            },
          }
          if (!isEmpty(formState.value[monster].hunt)) {
            genCheat('HUNT_RECORD', {
              ...params,
              count: formState.value[monster].hunt,
              type: {
                label: '狩猎数',
                value: GUILD_CARD_MONSTER_LOG_TYPE['狩猎数'],
              },
            })
          }
          if (!isEmpty(formState.value[monster].capture)) {
            genCheat('HUNT_RECORD', {
              ...params,
              count: formState.value[monster].capture,
              type: {
                label: '捕获数',
                value: GUILD_CARD_MONSTER_LOG_TYPE['捕获数'],
              },
            })
          }
          if (!isEmpty(formState.value[monster].anomaly)) {
            genCheat('HUNT_RECORD', {
              ...params,
              count: formState.value[monster].anomaly,
              type: {
                label: '怪异讨伐数',
                value: GUILD_CARD_MONSTER_LOG_TYPE['怪异讨伐数'],
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
      GUILD_CARD_MONSTER_OPTIONS.forEach((monster) => {
        if (
          GUILD_CARD_MONSTER[monster.label].smallest
          && GUILD_CARD_MONSTER[monster.label].largest
        ) {
          const params = { monster }
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
        if (['古龙种', '霸主'].includes(GUILD_CARD_MONSTER[monster.label].type)) {
          return true
        }
        return false
      },
      IS_ANOMALY_DISABLED: (monster: LabelInValueType) => {
        if (['古龙种', '霸主', 'SP'].includes(GUILD_CARD_MONSTER[monster.label].type)) {
          return true
        }
        return false
      },
      IS_SMALLEST_DISABLED: (monster: LabelInValueType) => {
        if (!GUILD_CARD_MONSTER[monster.label].smallest) {
          return true
        }
        return false
      },
      IS_LARGEST_DISABLED: (monster: LabelInValueType) => {
        if (!GUILD_CARD_MONSTER[monster.label].largest) {
          return true
        }
        return false
      },
    }
  },
})
</script>

<template>
  <a-card title="狩猎记录" size="small">
    <template #extra>
      <a-space>
        <a-form :model="formState" layout="inline">
          <a-form-item>
            <template #label>
              总狩猎数/总捕获数
              <a-tooltip title="总狩猎数 = 总讨伐数 + 总捕获数">
                <Icon class="tip-icon" type="QuestionCircleOutlined" />
              </a-tooltip>
            </template>
            <a-input-group compact>
              <a-input-number
                v-model:value="formState.overall.hunt"
                placeholder="总狩猎数"
                :precision="0"
                :min="0"
                allow-clear
                :style="{ width: '50%' }"
              />
              <a-input-number
                v-model:value="formState.overall.capture"
                placeholder="总捕获数"
                :precision="0"
                :min="0"
                allow-clear
                :style="{ width: '50%' }"
              />
            </a-input-group>
          </a-form-item>
        </a-form>

        <a-button type="primary" size="small" @click="onCrown">
          全金冠
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
                    狩猎数/捕获数
                    <a-tooltip title="狩猎数 = 讨伐数 + 捕获数">
                      <Icon class="tip-icon" type="QuestionCircleOutlined" />
                    </a-tooltip>
                  </template>
                  <a-input-group compact>
                    <a-input-number
                      v-model:value="formState[monster.value].hunt"
                      placeholder="狩猎数"
                      :precision="0"
                      :min="0"
                      allow-clear
                      :style="{ width: '50%' }"
                    />
                    <a-input-number
                      v-model:value="formState[monster.value].capture"
                      placeholder="捕获数"
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
                <a-form-item label="怪异讨伐数">
                  <a-input-number
                    v-model:value="formState[monster.value].anomaly"
                    placeholder="怪异讨伐数"
                    :precision="0"
                    :min="0"
                    allow-clear
                    :style="{ width: '100%' }"
                    :disabled="IS_ANOMALY_DISABLED(monster)"
                  />
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item label="最小尺寸">
                  <a-checkbox
                    v-model:checked="formState[monster.value].smallest"
                    :disabled="IS_SMALLEST_DISABLED(monster)"
                  />
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item label="最大尺寸">
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
