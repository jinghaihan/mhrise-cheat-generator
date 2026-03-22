import type { Version } from './version'

export const FUNCTIONAL_QUEST_MONSTER_SIZE = [
  '3F6147AE',
  '3F666666',
  '3F733333',
  '3F800000',
  '3F947AE1',
  '3F9851EB',
  '3FA00000',
] as const

export const FUNCTIONAL_QUEST_MONSTER_SIZE_CHEAT_POINTER: Record<Version, string> = {
  'v16.0.2': '12A56CF8',
  'v16.0.1': '12B1B7D8',
  'v16.0.0': '12B21498',
}

export const FUNCTIONAL_QUEST_REWARD_MULTIPLE_TYPE = [
  '01',
  '05',
  '09',
  '0D',
  '11',
  '15',
  '19',
  '1D',
  '21',
] as const

export const FUNCTIONAL_QUEST_REWARD_MULTIPLE_TYPE_CHEAT_POINTER: Record<Version, string> = {
  'v16.0.2': '064F6E5C',
  'v16.0.1': '0568C054',
  'v16.0.0': '05686350',
}

export const FUNCTIONAL_HUNTER_SPEED_MULTIPLE_TYPE = [
  '1E2E1000',
  '1E2D1000',
  '1E2C1000',
  '1E2A1000',
] as const

export const FUNCTIONAL_HUNTER_SPEED_MULTIPLE_TYPE_CHEAT_POINTER: Record<Version, string> = {
  'v16.0.2': '07148DAC',
  'v16.0.1': '0713CD9C',
  'v16.0.0': '0713CC2C',
}
