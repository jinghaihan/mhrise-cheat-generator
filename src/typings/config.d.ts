declare interface CheatConfig {
  [key: string]: any
  title: string
  code: string
}

declare interface ItemConfig {
  [key: string]: any
  item: LabelInValueType
  box: number
  count: number
}

declare interface ItemQtyConfig {
  [key: string]: any
  start: number
  end: number
  count: number
}

declare interface TalismanConfig {
  [key: string]: any
  box: number
  type: LabelInValueType
  skill1: LabelInValueType
  level1: number
  skill2: LabelInValueType
  level2: number
  slot: LabelInValueType
}

declare interface QuriousCraftingConfig {
  [key: string]: any
  box: number
  type: LabelInValueType
  skill1: LabelInValueType
  skill2: LabelInValueType
  skill3: LabelInValueType
  skill4: LabelInValueType
  skill5: LabelInValueType
  skill6: LabelInValueType
  skill7: LabelInValueType
}

declare interface AnomalyQuestConfig {
  [key: string]: any
  index: number
  questIndex: number
  level: number
  type: LabelInValueType
  hunt: LabelInValueType
  monster1: LabelInValueType
  monster2: LabelInValueType
  monster3: LabelInValueType
  monster4: LabelInValueType
  monster5: LabelInValueType
  location: LabelInValueType
  timelimit: LabelInValueType
  fail: LabelInValueType
  playerQty: LabelInValueType
  timezone: LabelInValueType
  sp: LabelInValueType
}

declare interface BuddyConfig {
  [key: string]: any
  box: number
  type: LabelInValueType
  level: LabelInValueType
  skills: {
    skill1: LabelInValueType
    skill2: LabelInValueType
    skill3: LabelInValueType
    skill4: LabelInValueType
    skill5: LabelInValueType
    skill6: LabelInValueType
    skill7: LabelInValueType
    skill8: LabelInValueType
  }
  palicoSkills: {
    skill1: LabelInValueType
    skill2: LabelInValueType
    skill3: LabelInValueType
    skill4: LabelInValueType
    skill5: LabelInValueType
  }
}

declare interface GuildCardBasicConfig {
  [key: string]: any
  hunterRank: LabelInValueType
  masterRank: LabelInValueType
  anomalyRank: LabelInValueType
  zenny: number | null
  overallZenny: number | null
  kamura: number | null
  playDuration: number | null
  like: number | null
}

declare interface ArenaRecordRemoveConfig {
  [key: string]: any
  type: LabelInValueType
  quest: LabelInValueType
  slot: number | null
}

declare interface QuestRewardMultiplerConfig {
  multiple: LabelInValueType
}

declare interface QuestMonsterSizeConfig {
  slot: number
  multiple: LabelInValueType
}

declare interface HunterSpeedConfig {
  multiple: LabelInValueType
}
