export const APP_VERSION = '1.1.2' as const;

export const APP_VERSION_TAG = `v${APP_VERSION}` as const;
export const APP_MAJOR = 'v1' as const;

export function formatVersion(v: string = APP_VERSION) {
  return `v${v}`;
}
