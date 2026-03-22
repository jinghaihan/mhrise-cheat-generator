<script lang="ts">
import type { ColumnData } from './constant'
import { defineComponent, inject, ref } from 'vue'
import { VerticalLayout } from '@/components/TableLayout'
import { useCheat } from '@/composables/useCheat'
import { useReactiveI18n } from '@/composables/useReactiveI18n'

import { getTableScrollX } from '@/utils'
import BasicForm from './BasicForm.vue'
import { getColumns } from './constant'
import PalicoSkillForm from './PalicoSkillForm.vue'
import SkillForm from './SkillForm.vue'

export default defineComponent({
  name: 'Buddy',
  components: { VerticalLayout, BasicForm, SkillForm, PalicoSkillForm },
  setup() {
    const { genCheat } = useCheat()
    const data = ref([] as ColumnData[])
    const columns = useReactiveI18n(getColumns)

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
          {{ $t('ui.common.addToCart') }}
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
              <a-popover :title="$t('ui.buddy.buddySkill')" placement="bottom" :trigger="['click']">
                <span>
                  <a-tag v-if="!record.skills" color="error"> {{ $t('ui.common.empty') }} </a-tag>
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
                <a-popover
                  :title="$t('ui.buddy.supportAction')"
                  placement="bottom"
                  :trigger="['click']"
                >
                  <span>
                    <a-tag v-if="!record.palicoSkills" color="error">
                      {{ $t('ui.common.empty') }}
                    </a-tag>
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
                :title="$t('ui.common.confirmDelete')"
                :ok-text="$t('ui.common.yes')"
                :cancel-text="$t('ui.common.no')"
                @confirm="
                  data = data.filter((item) => item.box !== record.box || item.type !== record.type)
                "
              >
                <a-button type="text" danger>
                  {{ $t('ui.common.delete') }}
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
