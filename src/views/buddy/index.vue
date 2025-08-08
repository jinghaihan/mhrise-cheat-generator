<script lang="ts">
import type { ColumnData } from './constant'
import { defineComponent, inject, ref } from 'vue'
import { VerticalLayout } from '@/components/TableLayout'
import { useCheat } from '@/composables/useCheat'

import { getTableScrollX } from '@/utils'
import BasicForm from './BasicForm.vue'
import { columns } from './constant'
import PalicoSkillForm from './PalicoSkillForm.vue'
import SkillForm from './SkillForm.vue'

export default defineComponent({
  name: 'Buddy',
  components: { VerticalLayout, BasicForm, SkillForm, PalicoSkillForm },
  setup() {
    const { genCheat } = useCheat()
    const data = ref([] as ColumnData[])

    const onSubmit = () => {
      if (data.value.length) {
        data.value.forEach((row) => {
          genCheat('BUDDY_LEVEL', row)
          if (row.skills) {
            genCheat('BUDDY_SKILL', row)
          }
          if (row.palicoSkills) {
            genCheat('PALICO_SKILL', row)
          }
        })
      }
    }

    return {
      prefixCls: `${inject('PREFIX_CLS')}-buddy`,
      columns,
      data,
      onSubmit,
      getTableScrollX,
    }
  },
})
</script>

<template>
  <div :class="prefixCls">
    <VerticalLayout>
      <template #config>
        <BasicForm @add="(value) => data.push(value)" @clear="data = []" />
      </template>

      <template #operation>
        <a-button type="primary" :disabled="!data.length" @click="onSubmit">
          加入购物车
        </a-button>
      </template>

      <template #table>
        <a-table
          :columns="columns"
          :data-source="data"
          row-key="id"
          :pagination="false"
          size="small"
          :scroll="{ x: getTableScrollX(columns), y: `calc(100vh - 240px)` }"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.dataIndex === 'skill'">
              <a-popover title="随从技能" placement="bottom" :trigger="['click']">
                <span>
                  <a-tag v-if="!record.skills" color="error"> Empty </a-tag>
                  <a-tag
                    v-for="(skill, index) in record.skills"
                    :key="`${skill.value}_${index}`"
                    color="blue"
                  >
                    {{ skill.label }}
                  </a-tag>
                </span>

                <template #content>
                  <SkillForm
                    :update="
                      (value: Record<string, any>[]) => {
                        record.skills = value
                      }
                    "
                  />
                </template>
              </a-popover>
            </template>

            <template v-if="column.dataIndex === 'palicoSkill'">
              <template v-if="record.type.value === 'PALICO'">
                <a-popover title="支援行动" placement="bottom" :trigger="['click']">
                  <span>
                    <a-tag v-if="!record.palicoSkills" color="error"> Empty </a-tag>
                    <a-tag
                      v-for="(skill, index) in record.palicoSkills"
                      :key="`${skill.value}_${index}`"
                      color="blue"
                    >
                      {{ skill.label }}
                    </a-tag>
                  </span>

                  <template #content>
                    <PalicoSkillForm
                      :update="
                        (value: Record<string, any>[]) => {
                          record.palicoSkills = value
                        }
                      "
                    />
                  </template>
                </a-popover>
              </template>
              <template v-else>
                -
              </template>
            </template>

            <template v-if="column.key === 'action'">
              <a-popconfirm
                title="确定删除吗?"
                ok-text="Yes"
                cancel-text="No"
                @confirm="
                  data = data.filter((item) => item.box !== record.box || item.type !== record.type)
                "
              >
                <a-button type="text" danger>
                  删除
                </a-button>
              </a-popconfirm>
            </template>
          </template>
        </a-table>
      </template>
    </VerticalLayout>
  </div>
</template>

<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-buddy';

  .@{prefix-cls} {
    height: 100%;
    width: 100%;
  }
</style>
