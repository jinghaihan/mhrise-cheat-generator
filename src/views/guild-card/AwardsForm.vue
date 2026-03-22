<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import awardsSunbreak from '@/assets/images/awards/awards-sunbreak.png'
import awards from '@/assets/images/awards/awards.png'
import SpriteIcon from '@/components/SpriteIcon/index.vue'
import { useCheat } from '@/composables/useCheat'
import { useReactiveI18n } from '@/composables/useReactiveI18n'
import { GUILD_CARD_AWARDS } from '@/constants/database'
import { ENUM_I18N_PREFIX } from '@/constants/i18n'
import { getEnumLabel } from '@/utils'

export default defineComponent({
  name: 'AwardsForm',
  components: { SpriteIcon },
  setup() {
    const data = ref({} as Record<string, boolean>)
    const checkAll = ref(false)

    const AWARD_ENTRIES = Object.keys(GUILD_CARD_AWARDS).map((name) => {
      const award = GUILD_CARD_AWARDS[name]
      const awardKey = `${award.type}-${award.id}`
      data.value[awardKey] = false
      return {
        key: awardKey,
        sourceLabel: name,
        value: award,
      }
    })
    const GUILD_CARD_AWARDS_OPTIONS = useReactiveI18n(() =>
      AWARD_ENTRIES.map((award) => {
        return {
          ...award,
          label: getEnumLabel(ENUM_I18N_PREFIX.guildCardAwardName, award.key, award.sourceLabel),
          description: getEnumLabel(
            ENUM_I18N_PREFIX.guildCardAwardDescription,
            award.key,
            award.value.description,
          ),
        }
      }),
    )

    const { genCheat } = useCheat()
    const onSubmit = () => {
      if (Object.values(data.value).includes(true)) {
        const state = {} as Record<string, number>
        AWARD_ENTRIES.forEach((item) => {
          const type = item.value.type
          if (!state[type]) {
            state[type] = 0
          }
          if (data.value[item.key]) {
            state[type] += Number.parseInt(item.value.id, 16)
          }
        })
        genCheat('AWARDS', state)
      }
    }

    const checkAllChange = () => {
      AWARD_ENTRIES.forEach((item) => {
        if (checkAll.value) {
          data.value[item.key] = true
        }
        else {
          data.value[item.key] = false
        }
      })
    }

    const onChange = (awardKey: string) => {
      data.value[awardKey] = !data.value[awardKey]
    }

    return {
      GUILD_CARD_AWARDS_OPTIONS,
      data,
      checkAll,
      images: {
        'awards': awards,
        'awards-sunbreak': awardsSunbreak,
      },
      indeterminate: computed(() => {
        return !checkAll.value && Object.values(data.value).includes(true)
      }),
      onSubmit,
      checkAllChange,
      onChange,
    }
  },
})
</script>

<template>
  <a-card :title="$t('ui.guildCard.awards')" size="small">
    <template #extra>
      <a-space>
        <a-tooltip :title="$t('ui.guildCard.awardsTip')">
          <Icon class="tip-icon" type="QuestionCircleOutlined" />
        </a-tooltip>
        <a-checkbox
          v-model:checked="checkAll"
          :indeterminate="indeterminate"
          @change="checkAllChange"
        >
          {{ $t('ui.guildCard.allAwards') }}
        </a-checkbox>
      </a-space>
    </template>

    <a-space :size="[8, 8]" wrap>
      <a-tooltip
        v-for="(award, index) in GUILD_CARD_AWARDS_OPTIONS"
        :key="award.key"
        placement="top"
      >
        <template #title>
          <p>{{ $t('ui.guildCard.name') }}: {{ award.label }}</p>
          <p>{{ $t('ui.guildCard.description') }}: {{ award.description }}</p>
        </template>
        <a-badge status="color">
          <template #count>
            <Icon v-show="data[award.key]" type="CheckCircleOutlined" />
          </template>
          <a-card hoverable :style="{ width: '64px' }" @click="onChange(award.key)">
            <template #cover>
              <SpriteIcon
                :images="index < 50 ? images.awards : images['awards-sunbreak']"
                :row="index < 50 ? index : index - 50"
              />
            </template>
          </a-card>
        </a-badge>
      </a-tooltip>
    </a-space>
  </a-card>
</template>

<style lang="less" scoped>
  .tip-icon {
    color: @primary-color;
  }
</style>
