import { t } from '@/modules/i18n'

type ParseOptionI18nIdBy = 'sourceKey' | 'value'

export interface ParseSelectOptionsConfig {
  i18nPrefix?: string
  i18nIdBy?: ParseOptionI18nIdBy
}

function resolveLabel(
  sourceLabel: string,
  sourceKey: string,
  value: string,
  config: ParseSelectOptionsConfig,
) {
  if (!config.i18nPrefix) {
    return sourceLabel
  }

  const idBy: ParseOptionI18nIdBy = config.i18nIdBy || 'value'
  const i18nId = idBy === 'sourceKey' ? sourceKey : value
  const i18nKey = `${config.i18nPrefix}.${i18nId}`
  const translated = t(i18nKey)
  return translated === i18nKey ? sourceLabel : translated
}

export function parseSelectOptions(
  data: Record<string, string>,
  revert = false,
  config: ParseSelectOptionsConfig = {},
) {
  return Object.keys(data).map((sourceKey) => {
    const sourceLabel = revert ? data[sourceKey] : sourceKey
    const value = revert ? sourceKey : data[sourceKey]

    return {
      label: resolveLabel(sourceLabel, sourceKey, value, config),
      value,
      sourceKey,
      sourceLabel,
    }
  })
}

export function getEnumLabel(i18nPrefix: string, id: string, fallback: string) {
  const i18nKey = `${i18nPrefix}.${id}`
  const translated = t(i18nKey)
  return translated === i18nKey ? fallback : translated
}

export function getTableScrollX(columns: { width: number }[]): number {
  let sum = 0
  columns.forEach((column) => {
    sum += column.width
  })
  return sum
}
