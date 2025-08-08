<script lang="ts">
import { defineComponent, inject } from 'vue'

import CheatListForm from './CheatListForm.vue'
import HunterSpeedForm from './HunterSpeedForm.vue'
import QuestMonsterSizeForm from './QuestMonsterSizeForm.vue'
import QuestRewardMultiplerForm from './QuestRewardMultiplerForm.vue'

export default defineComponent({
  name: 'FunctionalList',
  components: { CheatListForm, QuestRewardMultiplerForm, QuestMonsterSizeForm, HunterSpeedForm },
  setup() {
    const SCROLL_CONTAINER = inject('SCROLL_CONTAINER') as string

    return {
      prefixCls: `${inject('PREFIX_CLS')}-functional-list`,
      backTopTarget: () => {
        return document.getElementById(SCROLL_CONTAINER)
      },
    }
  },
})
</script>

<template>
  <div :class="prefixCls">
    <div class="left-space">
      <CheatListForm />
    </div>
    <div class="right-space">
      <QuestRewardMultiplerForm />

      <QuestMonsterSizeForm />

      <HunterSpeedForm />
    </div>

    <a-back-top :target="backTopTarget" />
  </div>
</template>

<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-functional-list';

  .@{prefix-cls} {
    height: 100%;
    width: 100%;
    display: flex;
    column-gap: 8px;
    .left-space {
      flex: 1 1 auto;
    }
    .right-space {
      flex: 0 0 auto;
      width: 350px;
    }
    .left-space,
    .right-space {
      display: flex;
      flex-direction: column;
      row-gap: 8px;
    }
  }
</style>
