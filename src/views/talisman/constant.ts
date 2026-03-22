import { t } from '@/modules/i18n'

export type ColumnData = TalismanConfig

export interface BasicFormState extends TalismanConfig {
  [key: string]: any
}

export function getColumns() {
  return [
    {
      title: t('ui.common.equipmentBoxNo'),
      dataIndex: 'box',
      ellipsis: true,
      sorter: (a: ColumnData, b: ColumnData) => a.box - b.box,
    },
    {
      title: t('ui.common.type'),
      dataIndex: 'type',
      ellipsis: true,
      customRender: ({ record }: { record: ColumnData }) => {
        return record.type?.label
      },
    },
    {
      title: t('ui.common.skill'),
      dataIndex: 'skill',
      ellipsis: true,
      width: 400,
    },
    {
      title: t('ui.common.slot'),
      dataIndex: 'slot',
      ellipsis: true,
      customRender: ({ record }: { record: ColumnData }) => {
        return record.slot?.label
      },
    },
    {
      title: t('ui.common.action'),
      key: 'action',
    },
  ]
}
