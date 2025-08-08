import {
  ANOMALY_QUEST_FAIL,
  ANOMALY_QUEST_HUNT,
  ANOMALY_QUEST_LOCATION,
  ANOMALY_QUEST_MONSTER,
  ANOMALY_QUEST_MONSTER_MAJOR,
  ANOMALY_QUEST_PLAYERQTY,
  ANOMALY_QUEST_SP,
  ANOMALY_QUEST_TIMELIMIT,
  ANOMALY_QUEST_TIMEZONE,
  ANOMALY_QUEST_TYPE,
} from '@/constants/database'

export type ColumnData = AnomalyQuestConfig

export interface BasicFormState extends AnomalyQuestConfig {
  [key: string]: any
}

export const columns = [
  {
    title: '入手索引',
    dataIndex: 'index',
    ellipsis: true,
    sorter: (a: ColumnData, b: ColumnData) => a.index - b.index,
    width: 100,
    fixed: 'left',
  },
  {
    title: '任务索引',
    dataIndex: 'questIndex',
    ellipsis: true,
    sorter: (a: ColumnData, b: ColumnData) => a.questIndex - b.questIndex,
    width: 100,
    fixed: 'left',
  },
  {
    title: '任务等级',
    dataIndex: 'level',
    ellipsis: true,
    sorter: (a: ColumnData, b: ColumnData) => a.level - b.level,
    width: 100,
  },
  {
    title: '任务类别',
    dataIndex: 'type',
    ellipsis: true,
    width: 100,
    customRender: ({ record }: { record: ColumnData }) => {
      return record.type?.label
    },
  },
  {
    title: '讨伐数目',
    dataIndex: 'hunt',
    ellipsis: true,
    width: 80,
    customRender: ({ record }: { record: ColumnData }) => {
      return record.hunt?.label
    },
  },
  {
    title: '怪物',
    dataIndex: 'monster',
    ellipsis: true,
    width: 400,
  },
  {
    title: '乱入怪物',
    dataIndex: 'monster5',
    ellipsis: true,
    width: 160,
    customRender: ({ record }: { record: ColumnData }) => {
      return record.monster5?.label
    },
  },
  {
    title: '目的地',
    dataIndex: 'location',
    ellipsis: true,
    width: 100,
    customRender: ({ record }: { record: ColumnData }) => {
      return record.location?.label
    },
  },
  {
    title: '限制时间',
    dataIndex: 'timelimit',
    ellipsis: true,
    width: 100,
    customRender: ({ record }: { record: ColumnData }) => {
      return record.timelimit?.label
    },
  },
  {
    title: '失败条件',
    dataIndex: 'fail',
    ellipsis: true,
    width: 100,
    customRender: ({ record }: { record: ColumnData }) => {
      return record.fail?.label
    },
  },
  {
    title: '参加人数',
    dataIndex: 'playerQty',
    ellipsis: true,
    width: 100,
    customRender: ({ record }: { record: ColumnData }) => {
      return record.playerQty?.label
    },
  },
  {
    title: '时间段',
    dataIndex: 'timezone',
    ellipsis: true,
    width: 80,
    customRender: ({ record }: { record: ColumnData }) => {
      return record.timezone?.label
    },
  },
  {
    title: '特别探究化',
    dataIndex: 'sp',
    ellipsis: true,
    width: 100,
    fixed: 'right',
    customRender: ({ record }: { record: ColumnData }) => {
      return record.sp?.label
    },
  },
  {
    title: '操作',
    key: 'action',
    width: 100,
    fixed: 'right',
  },
]

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
      sp = '否',
      type = '讨伐',
      hunt = '1头',
      location = '斗技场',
      timelimit = '25分',
      fail = '5次力尽',
      playerQty = '4人',
      timezone = '昼',
      monster1,
      monster2 = '无',
      monster3 = '无',
      monster4 = '无',
      monster5 = '无',
    } = config

    this.index = index
    this.questIndex = questIndex
    this.level = level || 300

    this.sp = {
      label: sp,
      value: ANOMALY_QUEST_SP[sp],
    }
    this.type = {
      label: type,
      value: ANOMALY_QUEST_TYPE[type],
    }
    this.hunt = {
      label: hunt,
      value: ANOMALY_QUEST_HUNT[hunt],
    }
    this.location = {
      label: location,
      value: ANOMALY_QUEST_LOCATION[location],
    }
    this.timelimit = {
      label: timelimit,
      value: ANOMALY_QUEST_TIMELIMIT[timelimit],
    }
    this.fail = {
      label: fail,
      value: ANOMALY_QUEST_FAIL[fail],
    }
    this.playerQty = {
      label: playerQty,
      value: ANOMALY_QUEST_PLAYERQTY[playerQty],
    }
    this.timezone = {
      label: timezone,
      value: ANOMALY_QUEST_TIMEZONE[timezone],
    }
    this.monster1 = {
      label: monster1,
      value: ANOMALY_QUEST_MONSTER_MAJOR[monster1].code,
    }
    this.monster2 = {
      label: monster2,
      value: ANOMALY_QUEST_MONSTER[monster2],
    }
    this.monster3 = {
      label: monster3,
      value: ANOMALY_QUEST_MONSTER[monster3],
    }
    this.monster4 = {
      label: monster4,
      value: ANOMALY_QUEST_MONSTER[monster4],
    }
    this.monster5 = {
      label: monster5,
      value: ANOMALY_QUEST_MONSTER[monster5],
    }
  }
}

export const CUSTOM_ANOMALY_QUESTS = [
  {
    monster1: '青熊兽',
    monster2: '霸主·青熊兽',
    monster3: '激昂金狮子',
    timelimit: '50分',
    location: '废神社',
    hunt: '2头',
  },
  {
    monster1: '金火龙',
    monster2: '霸主·雌火龙',
    monster3: '雌火龙',
    timelimit: '50分',
    location: '密林',
    hunt: '3头',
    type: '狩猎',
  },
  {
    monster1: '银火龙',
    monster2: '霸主·火龙',
    monster3: '火龙',
    timelimit: '50分',
    location: '废神社',
    hunt: '3头',
    type: '狩猎',
  },
  {
    monster1: '嗟怨震天怨虎龙',
    monster2: '怨虎龙',
    monster3: '激昂金狮子',
    timelimit: '50分',
    location: '废神社',
    hunt: '2头',
    type: '狩猎',
  },
  {
    monster1: '泡狐龙',
    monster2: '霸主·泡狐龙',
    monster3: '激昂金狮子',
    timelimit: '50分',
    location: '密林',
    hunt: '2头',
  },
  {
    monster1: '雷狼龙',
    monster2: '霸主·雷狼龙',
    monster3: '激昂金狮子',
    timelimit: '50分',
    location: '密林',
    hunt: '2头',
  },
  {
    monster1: '棘茶龙',
    monster2: '棘龙',
    monster3: '激昂金狮子',
    timelimit: '50分',
    location: '城塞高地',
    hunt: '2头',
    type: '狩猎',
  },
  {
    monster1: '角龙',
    monster2: '霸主·角龙',
    monster3: '激昂金狮子',
    timelimit: '50分',
    location: '沙原',
    hunt: '2头',
  },
  {
    monster1: '激昂金狮子',
    monster2: '金狮子',
    monster3: '红莲爆鳞龙',
    timelimit: '50分',
    location: '密林',
    hunt: '2头',
    type: '狩猎',
  },
  {
    monster1: '红莲爆鳞龙',
    monster2: '爆鳞龙',
    monster3: '激昂金狮子',
    timelimit: '50分',
    location: '冰封群岛',
    hunt: '2头',
    type: '狩猎',
  },
]
