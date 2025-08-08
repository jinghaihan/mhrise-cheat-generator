export function isEmpty(value: any): boolean {
  if (value === null || value === undefined || value === '') {
    return true
  }
  return false
}
