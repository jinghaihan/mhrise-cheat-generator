import { t } from '@/modules/i18n'

export interface ParseSelectOptionsConfig {
  i18nPrefix?: string
}

type SelectOptionEntry = string | {
  key: string
  value: string
  label?: string
}

function normalizeOptionEntry(entry: SelectOptionEntry) {
  if (typeof entry === 'string') {
    return {
      key: entry,
      value: entry,
      label: entry,
    }
  }

  return {
    key: entry.key,
    value: entry.value,
    label: entry.label || entry.key,
  }
}

function resolveLabel(
  sourceLabel: string,
  sourceKey: string,
  config: ParseSelectOptionsConfig,
) {
  if (!config.i18nPrefix) {
    return sourceLabel
  }

  const i18nKey = `${config.i18nPrefix}.${sourceKey}`
  const translated = t(i18nKey)
  return translated === i18nKey ? sourceLabel : translated
}

export function parseSelectOptions(
  data: readonly SelectOptionEntry[],
  config: ParseSelectOptionsConfig = {},
) {
  return data.map((entry) => {
    const normalized = normalizeOptionEntry(entry)
    const sourceKey = normalized.key
    const sourceLabel = normalized.label
    const value = normalized.value

    return {
      label: resolveLabel(sourceLabel, sourceKey, config),
      value,
      sourceKey,
      sourceLabel,
    }
  })
}

export function getEnumLabel(i18nPrefix: string, id: string, fallback = id) {
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
