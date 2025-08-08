export type ColumnData = ItemConfig

export interface BasicFormState {
  [key: string]: any
  box: number
  item: LabelInValueType
  count: number
}

export type ItemQuanityFormState = ItemQtyConfig

export interface OverallItemFormState {
  count: number
}

export const columns = [
  {
    title: '道具ID',
    dataIndex: 'id',
    ellipsis: true,
    customRender: ({ record }: { record: ColumnData }) => {
      return record.item?.value
    },
  },
  {
    title: '道具名称',
    dataIndex: 'item',
    ellipsis: true,
    customRender: ({ record }: { record: ColumnData }) => {
      return record.item?.label
    },
  },
  {
    title: '道具箱.No',
    dataIndex: 'box',
    ellipsis: true,
    sorter: (a: ColumnData, b: ColumnData) => a.box - b.box,
  },
  {
    title: '数量',
    dataIndex: 'count',
    ellipsis: true,
  },
  {
    title: '操作',
    key: 'action',
  },
]
