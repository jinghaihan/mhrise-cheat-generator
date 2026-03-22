export const VERSIONS = ['v16.0.2', 'v16.0.1', 'v16.0.0'] as const

export type Version = (typeof VERSIONS)[number]

export const DEFAULT_VERSION: Version = VERSIONS[0]
const VERSION_SET = new Set<string>(VERSIONS)

export function isVersion(value: string | null | undefined): value is Version {
  if (!value)
    return false
  return VERSION_SET.has(value)
}

export const TITLE_ID: Record<Version, string> = {
  'v16.0.2': '0100559011740000',
  'v16.0.1': '0100559011740000',
  'v16.0.0': '0100559011740000',
}

export const BUILD_ID: Record<Version, string> = {
  'v16.0.2': 'D2FD97779381FB9A',
  'v16.0.1': '92DF51D37268A38C',
  'v16.0.0': '44C9289FBB51455F',
}
