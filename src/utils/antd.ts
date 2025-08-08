export function parseSelectOptions(data: Record<string, string>, revert = false) {
  return Object.keys(data).map((item) => {
    return {
      label: revert ? data[item] : item,
      value: revert ? item : data[item],
    }
  })
}

export function getTableScrollX(columns: { width: number }[]): number {
  let sum = 0
  columns.forEach((column) => {
    sum += column.width
  })
  return sum
}
