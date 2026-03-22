import { t } from '@/modules/i18n'

export type ColumnData = ItemConfig

export interface BasicFormState {
  [key: string]: any
  box: number
  item: LabelInValueType | null
  count: number | null
}

export type ItemQuanityFormState = ItemQtyConfig

export interface OverallItemFormState {
  count: number
}

export function getColumns() {
  return [
    {
      title: t('ui.item.table.itemId'),
      dataIndex: 'id',
      ellipsis: true,
      customRender: ({ record }: { record: ColumnData }) => {
        return record.item?.value
      },
    },
    {
      title: t('ui.item.table.itemName'),
      dataIndex: 'item',
      ellipsis: true,
      customRender: ({ record }: { record: ColumnData }) => {
        return record.item?.label
      },
    },
    {
      title: t('ui.item.boxNo'),
      dataIndex: 'box',
      ellipsis: true,
      sorter: (a: ColumnData, b: ColumnData) => a.box - b.box,
    },
    {
      title: t('ui.common.count'),
      dataIndex: 'count',
      ellipsis: true,
    },
    {
      title: t('ui.common.action'),
      key: 'action',
    },
  ]
}
