export type BasicFormState = GuildCardBasicConfig

export interface QuestCompleteFormState {
  [key: string]: number | undefined
}

export interface WeaponUsageFormItem {
  [key: string]: number | undefined
}

export interface WeaponUsageFormState {
  [key: string]: WeaponUsageFormItem
}

export interface HuntLogFormItem {
  hunt?: number | null
  capture?: number | null
  anomaly?: number | null
  largest?: boolean
  smallest?: boolean
}

export interface HuntLogFormState {
  [key: string]: HuntLogFormItem
  overall: {
    hunt: number | null
    capture: number | null
  }
}

export interface ArenaRecordFormState {
  type: LabelInValueType | null
  quest: LabelInValueType | null
  slot: number | null
}
