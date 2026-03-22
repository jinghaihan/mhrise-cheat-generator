import {
  ANOMALY_QUEST_FAIL,
  ANOMALY_QUEST_HUNT,
  ANOMALY_QUEST_LOCATION,
  ANOMALY_QUEST_MONSTER,
  ANOMALY_QUEST_MONSTER_CODE_TO_I18N_KEY,
  ANOMALY_QUEST_MONSTER_MAJOR,
  ANOMALY_QUEST_PLAYERQTY,
  ANOMALY_QUEST_SP,
  ANOMALY_QUEST_TIMELIMIT,
  ANOMALY_QUEST_TIMEZONE,
  ANOMALY_QUEST_TYPE,
} from '@/constants/database'
import { ENUM_I18N_PREFIX } from '@/constants/i18n'
import { t } from '@/modules/i18n'
import { getEnumLabel } from '@/utils'

export type ColumnData = AnomalyQuestConfig

export interface BasicFormState extends AnomalyQuestConfig {
  [key: string]: any
}

const NO_MONSTER_CODE = '0000,000B'

function createLabelByValueMap(valueByLabel: Record<string, string>) {
  return Object.keys(valueByLabel).reduce((result, label) => {
    result[valueByLabel[label]] = label
    return result
  }, {} as Record<string, string>)
}

function resolveLabelInValueByCode(
  value: string,
  labelByValue: Record<string, string>,
  i18nPrefix: string,
  i18nId = value,
): LabelInValueType {
  return {
    label: getEnumLabel(i18nPrefix, i18nId, labelByValue[value] || value),
    value,
  }
}

function resolveMonsterLabelInValueByCode(
  value: string,
  labelByValue: Record<string, string>,
): LabelInValueType {
  const i18nId = ANOMALY_QUEST_MONSTER_CODE_TO_I18N_KEY[value] || value
  return resolveLabelInValueByCode(
    value,
    labelByValue,
    ENUM_I18N_PREFIX.anomalyQuestMonster,
    i18nId,
  )
}

const ANOMALY_QUEST_SP_LABEL_BY_VALUE = createLabelByValueMap(ANOMALY_QUEST_SP)
const ANOMALY_QUEST_TYPE_LABEL_BY_VALUE = createLabelByValueMap(ANOMALY_QUEST_TYPE)
const ANOMALY_QUEST_HUNT_LABEL_BY_VALUE = createLabelByValueMap(ANOMALY_QUEST_HUNT)
const ANOMALY_QUEST_LOCATION_LABEL_BY_VALUE = createLabelByValueMap(ANOMALY_QUEST_LOCATION)
const ANOMALY_QUEST_TIMELIMIT_LABEL_BY_VALUE = createLabelByValueMap(ANOMALY_QUEST_TIMELIMIT)
const ANOMALY_QUEST_FAIL_LABEL_BY_VALUE = createLabelByValueMap(ANOMALY_QUEST_FAIL)
const ANOMALY_QUEST_PLAYERQTY_LABEL_BY_VALUE = createLabelByValueMap(ANOMALY_QUEST_PLAYERQTY)
const ANOMALY_QUEST_TIMEZONE_LABEL_BY_VALUE = createLabelByValueMap(ANOMALY_QUEST_TIMEZONE)
const ANOMALY_QUEST_MONSTER_LABEL_BY_VALUE = createLabelByValueMap(ANOMALY_QUEST_MONSTER)
const ANOMALY_QUEST_MONSTER_MAJOR_LABEL_BY_VALUE = Object.keys(ANOMALY_QUEST_MONSTER_MAJOR).reduce(
  (result, label) => {
    result[ANOMALY_QUEST_MONSTER_MAJOR[label].code] = label
    return result
  },
  {} as Record<string, string>,
)

export function getColumns() {
  return [
    {
      title: t('ui.anomalyQuest.index'),
      dataIndex: 'index',
      ellipsis: true,
      sorter: (a: ColumnData, b: ColumnData) => a.index - b.index,
      width: 100,
      fixed: 'left',
    },
    {
      title: t('ui.anomalyQuest.questIndex'),
      dataIndex: 'questIndex',
      ellipsis: true,
      sorter: (a: ColumnData, b: ColumnData) => a.questIndex - b.questIndex,
      width: 100,
      fixed: 'left',
    },
    {
      title: t('ui.anomalyQuest.level'),
      dataIndex: 'level',
      ellipsis: true,
      sorter: (a: ColumnData, b: ColumnData) => a.level - b.level,
      width: 100,
    },
    {
      title: t('ui.anomalyQuest.questType'),
      dataIndex: 'type',
      ellipsis: true,
      width: 100,
      customRender: ({ record }: { record: ColumnData }) => {
        return record.type?.label
      },
    },
    {
      title: t('ui.anomalyQuest.huntCount'),
      dataIndex: 'hunt',
      ellipsis: true,
      width: 80,
      customRender: ({ record }: { record: ColumnData }) => {
        return record.hunt?.label
      },
    },
    {
      title: t('ui.anomalyQuest.monster'),
      dataIndex: 'monster',
      ellipsis: true,
      width: 400,
    },
    {
      title: t('ui.anomalyQuest.intruderMonster'),
      dataIndex: 'monster5',
      ellipsis: true,
      width: 160,
      customRender: ({ record }: { record: ColumnData }) => {
        return record.monster5?.label
      },
    },
    {
      title: t('ui.anomalyQuest.location'),
      dataIndex: 'location',
      ellipsis: true,
      width: 100,
      customRender: ({ record }: { record: ColumnData }) => {
        return record.location?.label
      },
    },
    {
      title: t('ui.anomalyQuest.timeLimit'),
      dataIndex: 'timelimit',
      ellipsis: true,
      width: 100,
      customRender: ({ record }: { record: ColumnData }) => {
        return record.timelimit?.label
      },
    },
    {
      title: t('ui.anomalyQuest.failCondition'),
      dataIndex: 'fail',
      ellipsis: true,
      width: 100,
      customRender: ({ record }: { record: ColumnData }) => {
        return record.fail?.label
      },
    },
    {
      title: t('ui.anomalyQuest.playerCount'),
      dataIndex: 'playerQty',
      ellipsis: true,
      width: 100,
      customRender: ({ record }: { record: ColumnData }) => {
        return record.playerQty?.label
      },
    },
    {
      title: t('ui.anomalyQuest.timezone'),
      dataIndex: 'timezone',
      ellipsis: true,
      width: 80,
      customRender: ({ record }: { record: ColumnData }) => {
        return record.timezone?.label
      },
    },
    {
      title: t('ui.anomalyQuest.specialInvestigation'),
      dataIndex: 'sp',
      ellipsis: true,
      width: 100,
      fixed: 'right',
      customRender: ({ record }: { record: ColumnData }) => {
        return record.sp?.label
      },
    },
    {
      title: t('ui.common.action'),
      key: 'action',
      width: 100,
      fixed: 'right',
    },
  ]
}

export interface DefineAnomlayQuestConfig {
  index: number
  questIndex: number
  level?: number

  sp?: string
  type?: string
  hunt?: string
  location: string
  timelimit?: string
  fail?: string
  playerQty?: string
  timezone?: string

  monster1: string
  monster2?: string
  monster3?: string
  monster4?: string
  monster5?: string
}

export class AnomalyQuest implements AnomalyQuestConfig {
  public index: number
  public questIndex: number
  public level: number
  public type: LabelInValueType
  public hunt: LabelInValueType
  public monster1: LabelInValueType
  public monster2: LabelInValueType
  public monster3: LabelInValueType
  public monster4: LabelInValueType
  public monster5: LabelInValueType
  public location: LabelInValueType
  public timelimit: LabelInValueType
  public fail: LabelInValueType
  public playerQty: LabelInValueType
  public timezone: LabelInValueType
  public sp: LabelInValueType

  constructor(config: DefineAnomlayQuestConfig) {
    const {
      index,
      questIndex,
      level = 300,
      sp = '00010000',
      type = '0002',
      hunt = '0001',
      location = '000A',
      timelimit = '0019',
      fail = '0005',
      playerQty = '0004',
      timezone = '0001',
      monster1,
      monster2 = NO_MONSTER_CODE,
      monster3 = NO_MONSTER_CODE,
      monster4 = NO_MONSTER_CODE,
      monster5 = NO_MONSTER_CODE,
    } = config

    this.index = index
    this.questIndex = questIndex
    this.level = level || 300

    this.sp = resolveLabelInValueByCode(
      sp,
      ANOMALY_QUEST_SP_LABEL_BY_VALUE,
      ENUM_I18N_PREFIX.anomalyQuestSp,
    )
    this.type = resolveLabelInValueByCode(
      type,
      ANOMALY_QUEST_TYPE_LABEL_BY_VALUE,
      ENUM_I18N_PREFIX.anomalyQuestType,
    )
    this.hunt = resolveLabelInValueByCode(
      hunt,
      ANOMALY_QUEST_HUNT_LABEL_BY_VALUE,
      ENUM_I18N_PREFIX.anomalyQuestHunt,
    )
    this.location = resolveLabelInValueByCode(
      location,
      ANOMALY_QUEST_LOCATION_LABEL_BY_VALUE,
      ENUM_I18N_PREFIX.anomalyQuestLocation,
    )
    this.timelimit = resolveLabelInValueByCode(
      timelimit,
      ANOMALY_QUEST_TIMELIMIT_LABEL_BY_VALUE,
      ENUM_I18N_PREFIX.anomalyQuestTimelimit,
    )
    this.fail = resolveLabelInValueByCode(
      fail,
      ANOMALY_QUEST_FAIL_LABEL_BY_VALUE,
      ENUM_I18N_PREFIX.anomalyQuestFail,
    )
    this.playerQty = resolveLabelInValueByCode(
      playerQty,
      ANOMALY_QUEST_PLAYERQTY_LABEL_BY_VALUE,
      ENUM_I18N_PREFIX.anomalyQuestPlayerQty,
    )
    this.timezone = resolveLabelInValueByCode(
      timezone,
      ANOMALY_QUEST_TIMEZONE_LABEL_BY_VALUE,
      ENUM_I18N_PREFIX.anomalyQuestTimezone,
    )
    this.monster1 = resolveMonsterLabelInValueByCode(
      monster1,
      ANOMALY_QUEST_MONSTER_MAJOR_LABEL_BY_VALUE,
    )
    this.monster2 = resolveMonsterLabelInValueByCode(
      monster2,
      ANOMALY_QUEST_MONSTER_LABEL_BY_VALUE,
    )
    this.monster3 = resolveMonsterLabelInValueByCode(
      monster3,
      ANOMALY_QUEST_MONSTER_LABEL_BY_VALUE,
    )
    this.monster4 = resolveMonsterLabelInValueByCode(
      monster4,
      ANOMALY_QUEST_MONSTER_LABEL_BY_VALUE,
    )
    this.monster5 = resolveMonsterLabelInValueByCode(
      monster5,
      ANOMALY_QUEST_MONSTER_LABEL_BY_VALUE,
    )
  }
}

export const CUSTOM_ANOMALY_QUESTS = [
  {
    monster1: '003C,0000',
    monster2: '073C,000B',
    monster3: '0517,0005',
    timelimit: '0032',
    location: '0001',
    hunt: '0002',
  },
  {
    monster1: '0201,0006',
    monster2: '0701,000B',
    monster3: '0001,0001',
    timelimit: '0032',
    location: '000C',
    hunt: '0003',
    type: '0001',
  },
  {
    monster1: '0202,0006',
    monster2: '0702,000B',
    monster3: '0002,0003',
    timelimit: '0032',
    location: '0001',
    hunt: '0003',
    type: '0001',
  },
  {
    monster1: '0559,0006',
    monster2: '0059,0002',
    monster3: '0517,0005',
    timelimit: '0032',
    location: '0001',
    hunt: '0002',
    type: '0001',
  },
  {
    monster1: '0052,0004',
    monster2: '0752,000B',
    monster3: '0517,0005',
    timelimit: '0032',
    location: '000C',
    hunt: '0002',
  },
  {
    monster1: '0039,0004',
    monster2: '0739,000B',
    monster3: '0517,0005',
    timelimit: '0032',
    location: '000C',
    hunt: '0002',
  },
  {
    monster1: '0188,0006',
    monster2: '0088,0003',
    monster3: '0517,0005',
    timelimit: '0032',
    location: '000D',
    hunt: '0002',
    type: '0001',
  },
  {
    monster1: '0007,0004',
    monster2: '0707,000B',
    monster3: '0517,0005',
    timelimit: '0032',
    location: '0002',
    hunt: '0002',
  },
  {
    monster1: '0517,0006',
    monster2: '0017,0004',
    monster3: '0576,0005',
    timelimit: '0032',
    location: '000C',
    hunt: '0002',
    type: '0001',
  },
  {
    monster1: '0576,0006',
    monster2: '0076,0004',
    monster3: '0517,0005',
    timelimit: '0032',
    location: '0004',
    hunt: '0002',
    type: '0001',
  },
]
