export const SUPPORTED_LOCALES = ['zh', 'zh-Hant', 'en', 'ja', 'ko'] as const

export type AppLocale = (typeof SUPPORTED_LOCALES)[number]

export const LOCALE_LABEL: Record<AppLocale, string> = {
  'zh': '简体中文',
  'zh-Hant': '繁體中文',
  'en': 'English',
  'ja': '日本語',
  'ko': '한국어',
}

export const ENUM_I18N_PREFIX = {
  itemType: 'item',

  talismanType: 'talisman.type',
  talismanSkill: 'skill',
  talismanSlot: 'talisman.slot',

  buddyType: 'buddy.type',
  buddySkill: 'buddy.skill',
  buddyPalicoSkill: 'buddy.palico-skill',

  quriousCraftingType: 'qurious-crafting.type',
  quriousCrafting: 'qurious-crafting',
  quriousCraftingSkill: 'qurious-crafting.skill',

  anomalyQuestType: 'anomaly-quest.type',
  anomalyQuestHunt: 'anomaly-quest.hunt',
  anomalyQuestLocation: 'anomaly-quest.location',
  anomalyQuestTimelimit: 'anomaly-quest.time-limit',
  anomalyQuestFail: 'anomaly-quest.fail',
  anomalyQuestPlayerQty: 'anomaly-quest.player-qty',
  anomalyQuestTimezone: 'anomaly-quest.timezone',
  anomalyQuestSp: 'anomaly-quest.special-investigation',
  anomalyQuestMonster: 'monster',

  functionalHunterSpeed: 'functional.hunter-speed',
  functionalQuestReward: 'functional.quest-reward-multiplier',
  functionalQuestMonsterSize: 'functional.quest-monster-size',

  guildCardQuestType: 'guild-card.quest-type',
  guildCardWeaponType: 'guild-card.weapon-type',
  guildCardWeaponUsageQuestType: 'guild-card.weapon-usage.quest-type',
  guildCardArenaType: 'guild-card.arena.type',
  guildCardArenaQuest: 'guild-card.arena.quest',
  guildCardMonster: 'monster',
  guildCardMonsterLogType: 'guild-card.monster-log-type',
  guildCardAwardName: 'guild-card-award.name',
  guildCardAwardDescription: 'guild-card-award.description',
} as const
