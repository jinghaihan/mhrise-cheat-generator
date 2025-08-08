export type BasicFormState = GuildCardBasicConfig

export interface QuestCompleteFormState {
  [key: string]: any
  '00A0': number
  '00A4': number
  '00A8': number
  '00AC': number
  '00B0': number
  '00B4': number
  '00B8': number
  '00BC': number
  '00C0': number
  '00C4': number
  '023C': number
}

export interface WeaponUsageFormItem {
  '0190': number
  '0198': number
  '01A0': number
  '01A8': number
  '01C0': number
  '01B0': number
  '01B8': number
  '01C8': number
  '01D0': number
  '01D8': number
}

export interface WeaponUsageFormState {
  [key: string]: any
  '20': WeaponUsageFormItem
  '28': WeaponUsageFormItem
  '40': WeaponUsageFormItem
  '44': WeaponUsageFormItem
  '34': WeaponUsageFormItem
  '48': WeaponUsageFormItem
  '3C': WeaponUsageFormItem
  '38': WeaponUsageFormItem
  '24': WeaponUsageFormItem
  '4C': WeaponUsageFormItem
  '50': WeaponUsageFormItem
  '2C': WeaponUsageFormItem
  '30': WeaponUsageFormItem
  '54': WeaponUsageFormItem
}

export interface HuntLogFormItem {
  hunt: number
  capture: number
  anomaly: number
  largeset: boolean
  smallest: boolean
}

export interface HuntLogFormState {
  [key: string]: any
  'overall': {
    hunt: number | null
    capture: number | null
  }
  '00B4': HuntLogFormItem
  '0064': HuntLogFormItem
  '00C8': HuntLogFormItem
  '0070': HuntLogFormItem
  '0074': HuntLogFormItem
  '007C': HuntLogFormItem
  '0080': HuntLogFormItem
  '0098': HuntLogFormItem
  '0060': HuntLogFormItem
  '005C': HuntLogFormItem
  '0158': HuntLogFormItem
  '0030': HuntLogFormItem
  '009C': HuntLogFormItem
  '0094': HuntLogFormItem
  '0180': HuntLogFormItem
  '00C4': HuntLogFormItem
  '00CC': HuntLogFormItem
  '0034': HuntLogFormItem
  '00A0': HuntLogFormItem
  '0184': HuntLogFormItem
  '0020': HuntLogFormItem
  '0150': HuntLogFormItem
  '0058': HuntLogFormItem
  '00D0': HuntLogFormItem
  '0090': HuntLogFormItem
  '017C': HuntLogFormItem
  '00C0': HuntLogFormItem
  '0054': HuntLogFormItem
  '0164': HuntLogFormItem
  '0084': HuntLogFormItem
  '0178': HuntLogFormItem
  '00B0': HuntLogFormItem
  '019C': HuntLogFormItem
  '015C': HuntLogFormItem
  '0028': HuntLogFormItem
  '0154': HuntLogFormItem
  '00A8': HuntLogFormItem
  '018C': HuntLogFormItem
  '0068': HuntLogFormItem
  '0198': HuntLogFormItem
  '0174': HuntLogFormItem
  '01A4': HuntLogFormItem
  '01A8': HuntLogFormItem
  '0168': HuntLogFormItem
  '01E4': HuntLogFormItem
  '0170': HuntLogFormItem
  '0050': HuntLogFormItem
  '0038': HuntLogFormItem
  '00A4': HuntLogFormItem
  '0188': HuntLogFormItem
  '0044': HuntLogFormItem
  '01CC': HuntLogFormItem
  '0048': HuntLogFormItem
  '01D0': HuntLogFormItem
  '004C': HuntLogFormItem
  '01D4': HuntLogFormItem
  '0194': HuntLogFormItem
  '01E0': HuntLogFormItem
  '016C': HuntLogFormItem
  '01D8': HuntLogFormItem
  '01E8': HuntLogFormItem
  '0040': HuntLogFormItem
  '0160': HuntLogFormItem
  '00D4': HuntLogFormItem
  '0190': HuntLogFormItem
  '00AC': HuntLogFormItem
  '00B8': HuntLogFormItem
  '00BC': HuntLogFormItem
  '008C': HuntLogFormItem
  '01DC': HuntLogFormItem
  '01A0': HuntLogFormItem
  '01EC': HuntLogFormItem
  '0078': HuntLogFormItem
  '0024': HuntLogFormItem
  '0088': HuntLogFormItem
  '002C': HuntLogFormItem
  '003C': HuntLogFormItem
  '006C': HuntLogFormItem
}

export type ArenaRecordFormState = ArenaRecordRemoveConfig
