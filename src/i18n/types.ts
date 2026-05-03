export const LANGS = ['en', 'pt'] as const
export type Lang = (typeof LANGS)[number]

export function isLang(value: string): value is Lang {
  return (LANGS as readonly string[]).includes(value)
}
