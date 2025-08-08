<script lang="ts">
import { defineComponent, inject, ref } from 'vue'

import ArenaRecordForm from './ArenaRecordForm.vue'
import AwardsForm from './AwardsForm.vue'
import BasicForm from './BasicForm.vue'
import HuntLogForm from './HuntLogForm.vue'
import QuestCompleteForm from './QuestCompleteForm.vue'
import WeaponUsageForm from './WeaponUsageForm.vue'

export default defineComponent({
  name: 'GuildCard',
  components: {
    BasicForm,
    QuestCompleteForm,
    WeaponUsageForm,
    HuntLogForm,
    ArenaRecordForm,
    AwardsForm,
  },
  setup() {
    const basicFormRef = ref()
    const questCompleteFormRef = ref()
    const weaponUsageFormRef = ref()
    const huntLogFormRef = ref()
    const arenaRecordFormRef = ref()
    const awardsFormRef = ref()

    const onSubmit = () => {
      basicFormRef.value?.onSubmit?.()
      questCompleteFormRef.value?.onSubmit?.()
      weaponUsageFormRef.value?.onSubmit?.()
      huntLogFormRef.value?.onSubmit?.()
      arenaRecordFormRef.value?.onSubmit?.()
      awardsFormRef.value?.onSubmit?.()
    }

    return {
      prefixCls: `${inject('PREFIX_CLS')}-guild-card`,
      basicFormRef,
      questCompleteFormRef,
      weaponUsageFormRef,
      huntLogFormRef,
      arenaRecordFormRef,
      awardsFormRef,
      onSubmit,
    }
  },
})
</script>

<template>
  <div :class="prefixCls">
    <div class="left-space">
      <BasicForm ref="basicFormRef" />

      <WeaponUsageForm ref="weaponUsageFormRef" />

      <ArenaRecordForm ref="arenaRecordFormRef" />
    </div>

    <div class="right-space">
      <QuestCompleteForm ref="questCompleteFormRef" />

      <HuntLogForm ref="huntLogFormRef" />

      <AwardsForm ref="awardsFormRef" />
    </div>

    <a-float-button type="primary" @click="onSubmit">
      <template #icon>
        <Icon type="FormOutlined" />
      </template>
    </a-float-button>
  </div>
</template>

<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-guild-card';

  .@{prefix-cls} {
    height: 100%;
    width: 100%;
    display: flex;
    column-gap: 8px;

    .left-space {
      flex: 0 0 auto;
      width: 220px;
    }
    .right-space {
      flex: 1 1 auto;
    }
    .left-space,
    .right-space {
      display: flex;
      flex-direction: column;
      row-gap: 8px;
    }
  }
</style>
