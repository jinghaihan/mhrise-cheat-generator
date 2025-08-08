import { read, utils } from 'xlsx'

export async function fetchXlsx(url: string, sheetName: string): Promise<string[][]> {
  const f = await fetch(url)
  const buffer = await f.arrayBuffer()
  const wb = read(buffer)

  const worksheet = wb.Sheets[sheetName]
  return utils.sheet_to_json(worksheet, { header: 1 })
}
