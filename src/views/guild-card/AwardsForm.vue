<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import awardsSunbreak from '@/assets/images/awards/awards-sunbreak.png'
import awards from '@/assets/images/awards/awards.png'
import SpriteIcon from '@/components/SpriteIcon/index.vue'
import { useCheat } from '@/composables/useCheat'
import { GUILD_CARD_AWARDS } from '@/constants/database'

export default defineComponent({
  name: 'AwardsForm',
  components: { SpriteIcon },
  setup() {
    const data = ref({} as Record<string, boolean>)
    const checkAll = ref(false)

    const GUILD_CARD_AWARDS_OPTIONS = Object.keys(GUILD_CARD_AWARDS).map((name) => {
      data.value[name] = false
      return {
        label: name,
        value: GUILD_CARD_AWARDS[name],
      }
    })

    const { genCheat } = useCheat()
    const onSubmit = () => {
      if (Object.values(data.value).includes(true)) {
        const state = {} as Record<string, number>
        Object.keys(data.value).forEach((name) => {
          const type = GUILD_CARD_AWARDS[name].type
          if (!state[type]) {
            state[type] = 0
          }
          if (data.value[name]) {
            state[type] += Number.parseInt(GUILD_CARD_AWARDS[name].id, 16)
          }
        })
        genCheat('AWARDS', state)
      }
    }

    const checkAllChange = () => {
      GUILD_CARD_AWARDS_OPTIONS.forEach((item) => {
        if (checkAll.value) {
          data.value[item.label] = true
        }
        else {
          data.value[item.label] = false
        }
      })
    }

    const onChange = (name: string) => {
      data.value[name] = !data.value[name]
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
  <a-card title="勋章" size="small">
    <template #extra>
      <a-space>
        <a-tooltip title="请同时勾选已解锁勋章">
          <Icon class="tip-icon" type="QuestionCircleOutlined" />
        </a-tooltip>
        <a-checkbox
          v-model:checked="checkAll"
          :indeterminate="indeterminate"
          @change="checkAllChange"
        >
          全勋章
        </a-checkbox>
      </a-space>
    </template>

    <a-space :size="[8, 8]" wrap>
      <a-tooltip
        v-for="(award, index) in GUILD_CARD_AWARDS_OPTIONS"
        :key="award.label"
        placement="top"
      >
        <template #title>
          <p>名称：{{ award.label }}</p>
          <p>描述：{{ award.value.description }}</p>
        </template>
        <a-badge status="color">
          <template #count>
            <Icon v-show="data[award.label]" type="CheckCircleOutlined" />
          </template>
          <a-card hoverable :style="{ width: '64px' }" @click="onChange(award.label)">
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
