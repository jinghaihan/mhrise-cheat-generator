import { t } from '@/modules/i18n'

export type ColumnData = QuriousCraftingConfig

export interface BasicFormState {
  [key: string]: any
  box: number
  type: LabelInValueType | null
  skill1: LabelInValueType | null
  skill2: LabelInValueType | null
  skill3: LabelInValueType | null
  skill4: LabelInValueType | null
  skill5: LabelInValueType | null
  skill6: LabelInValueType | null
  skill7: LabelInValueType | null
}

export function getColumns() {
  return [
    {
      title: t('ui.common.equipmentBoxNo'),
      dataIndex: 'box',
      ellipsis: true,
      sorter: (a: ColumnData, b: ColumnData) => a.box - b.box,
      width: 100,
      fixed: 'left',
    },
    {
      title: t('ui.common.type'),
      dataIndex: 'type',
      ellipsis: true,
      width: 180,
      fixed: 'left',
      customRender: ({ record }: { record: ColumnData }) => {
        return record.type?.label
      },
    },
    {
      title: t('ui.quriousCrafting.table.crafting'),
      dataIndex: 'skill',
      ellipsis: true,
      width: 400,
    },
    {
      title: t('ui.common.action'),
      key: 'action',
      width: 100,
      fixed: 'right',
    },
  ]
}
