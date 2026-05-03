import type { Lang } from '@/i18n/types'

export type Article = {
  slug: string
  category: Record<Lang, string>
  date: string
  readingTime: number
  title: Record<Lang, string>
  dek: Record<Lang, string>
  body: Record<Lang, string[]>
}
