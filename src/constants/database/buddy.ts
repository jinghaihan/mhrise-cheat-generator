import type { Version } from './version'

export const BUDDY_TYPE = [
  {
    key: 'palico',
    value: 'PALICO',
  },
  {
    key: 'palamute',
    value: 'PALAMUTE',
  },
] as const

export const BUDDY_LEVEL = [
  {
    key: '49',
    value: '059C30',
    label: '49',
  },
  {
    key: '50',
    value: '059C31',
    label: '50',
  },
] as const

export const BUDDY_SKILL = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '0A',
  '0B',
  '0C',
  '0D',
  '0E',
  '0F',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '1A',
  '1B',
  '1C',
  '1D',
  '1E',
  '1F',
  '20',
  '21',
  '22',
  '23',
] as const

export const BUDDY_SKILL_PALICO = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '0A',
  '0B',
  '0C',
  '0D',
  '0E',
  '0F',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
] as const

export const BUDDY_CHEAT_POINTER: Record<Version, string> = {
  'v16.0.2': '12B157C0',
  'v16.0.1': '12A4A1E8',
  'v16.0.0': '12A4FD80',
}
