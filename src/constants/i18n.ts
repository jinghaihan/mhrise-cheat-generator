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
  itemType: 'ui.enum.item.type',

  talismanType: 'ui.enum.talisman.type',
  talismanSkill: 'ui.enum.talisman.skill',
  talismanSlot: 'ui.enum.talisman.slot',

  buddyType: 'ui.enum.buddy.type',
  buddySkill: 'ui.enum.buddy.skill',
  buddyPalicoSkill: 'ui.enum.buddy.palicoSkill',

  quriousCraftingType: 'ui.enum.quriousCrafting.type',
  quriousCraftingSkill: 'ui.enum.quriousCrafting.skill',

  anomalyQuestType: 'ui.enum.anomalyQuest.type',
  anomalyQuestHunt: 'ui.enum.anomalyQuest.hunt',
  anomalyQuestLocation: 'ui.enum.anomalyQuest.location',
  anomalyQuestTimelimit: 'ui.enum.anomalyQuest.timelimit',
  anomalyQuestFail: 'ui.enum.anomalyQuest.fail',
  anomalyQuestPlayerQty: 'ui.enum.anomalyQuest.playerQty',
  anomalyQuestTimezone: 'ui.enum.anomalyQuest.timezone',
  anomalyQuestSp: 'ui.enum.anomalyQuest.sp',
  anomalyQuestMonster: 'ui.enum.anomalyQuest.monster',

  functionalHunterSpeed: 'ui.enum.functional.hunterSpeed',
  functionalQuestReward: 'ui.enum.functional.questRewardMultiplier',
  functionalQuestMonsterSize: 'ui.enum.functional.questMonsterSize',

  guildCardQuestType: 'ui.enum.guildCard.questType',
  guildCardWeaponType: 'ui.enum.guildCard.weaponType',
  guildCardWeaponUsageQuestType: 'ui.enum.guildCard.weaponUsage.questType',
  guildCardArenaType: 'ui.enum.guildCard.arena.type',
  guildCardArenaQuest: 'ui.enum.guildCard.arena.quest',
  guildCardMonster: 'ui.enum.guildCard.monster',
  guildCardAwardName: 'ui.enum.guildCard.award.name',
  guildCardAwardDescription: 'ui.enum.guildCard.award.description',
} as const
