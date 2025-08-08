export type ColumnData = TalismanConfig

export interface BasicFormState extends TalismanConfig {
  [key: string]: any
}

export const columns = [
  {
    title: '装备箱.No',
    dataIndex: 'box',
    ellipsis: true,
    sorter: (a: ColumnData, b: ColumnData) => a.box - b.box,
  },
  {
    title: '类型',
    dataIndex: 'type',
    ellipsis: true,
    customRender: ({ record }: { record: ColumnData }) => {
      return record.type?.label
    },
  },
  {
    title: '技能',
    dataIndex: 'skill',
    ellipsis: true,
    width: 400,
  },
  {
    title: '插槽',
    dataIndex: 'slot',
    ellipsis: true,
    customRender: ({ record }: { record: ColumnData }) => {
      return record.slot?.label
    },
  },
  {
    title: '操作',
    key: 'action',
  },
]
