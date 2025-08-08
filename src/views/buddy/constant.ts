export type ColumnData = BuddyConfig

export interface BasicFormState extends BuddyConfig {
  [key: string]: any
}

export const columns = [
  {
    title: '类型',
    dataIndex: 'type',
    ellipsis: true,
    width: 100,
    customRender: ({ record }: { record: ColumnData }) => {
      return record.type?.label
    },
  },
  {
    title: '栏位.No',
    dataIndex: 'box',
    ellipsis: true,
    sorter: (a: ColumnData, b: ColumnData) => a.box - b.box,
    width: 100,
  },
  {
    title: '等级',
    dataIndex: 'level',
    ellipsis: true,
    width: 100,
    customRender: ({ record }: { record: ColumnData }) => {
      return record.level?.label
    },
  },
  {
    title: '随从技能',
    dataIndex: 'skill',
    ellipsis: true,
    width: 300,
  },
  {
    title: '支援行动',
    dataIndex: 'palicoSkill',
    ellipsis: true,
    width: 300,
  },
  {
    title: '操作',
    key: 'action',
    width: 100,
  },
]
