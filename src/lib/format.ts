import type { Lang } from '@/i18n/types'

export function formatDate(iso: string, lang: Lang): string {
  const date = new Date(iso + 'T00:00:00Z')
  const locale = lang === 'pt' ? 'pt-BR' : 'en-US'
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date)
}
