import { t } from '@/modules/i18n'

export type ColumnData = BuddyConfig

export interface BasicFormState extends BuddyConfig {
  [key: string]: any
}

export function getColumns() {
  return [
    {
      title: t('ui.common.type'),
      dataIndex: 'type',
      ellipsis: true,
      width: 100,
      customRender: ({ record }: { record: ColumnData }) => {
        return record.type?.label
      },
    },
    {
      title: t('ui.common.slotNo'),
      dataIndex: 'box',
      ellipsis: true,
      sorter: (a: ColumnData, b: ColumnData) => a.box - b.box,
      width: 100,
    },
    {
      title: t('ui.common.level'),
      dataIndex: 'level',
      ellipsis: true,
      width: 100,
      customRender: ({ record }: { record: ColumnData }) => {
        return record.level?.label
      },
    },
    {
      title: t('ui.buddy.buddySkill'),
      dataIndex: 'skill',
      ellipsis: true,
      width: 300,
    },
    {
      title: t('ui.buddy.supportAction'),
      dataIndex: 'palicoSkill',
      ellipsis: true,
      width: 300,
    },
    {
      title: t('ui.common.action'),
      key: 'action',
      width: 100,
    },
  ]
}
