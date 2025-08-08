export type ColumnData = QuriousCraftingConfig

export interface BasicFormState extends QuriousCraftingConfig {
  [key: string]: any
}

export const columns = [
  {
    title: '装备箱.No',
    dataIndex: 'box',
    ellipsis: true,
    sorter: (a: ColumnData, b: ColumnData) => a.box - b.box,
    width: 100,
    fixed: 'left',
  },
  {
    title: '类型',
    dataIndex: 'type',
    ellipsis: true,
    width: 180,
    fixed: 'left',
    customRender: ({ record }: { record: ColumnData }) => {
      return record.type?.label
    },
  },
  {
    title: '炼成',
    dataIndex: 'skill',
    ellipsis: true,
    width: 400,
  },
  {
    title: '操作',
    key: 'action',
    width: 100,
    fixed: 'right',
  },
]
