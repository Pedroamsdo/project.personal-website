import Link from 'next/link'
import type { Article } from '@/models/article'
import type { Lang } from '@/i18n/types'
import { getDict } from '@/i18n/dictionaries'
import { formatDate } from '@/lib/format'

export default function ArticleCard({
  article,
  lang,
}: {
  article: Article
  lang: Lang
}) {
  const t = getDict(lang)

  return (
    <article className="group py-10 first:pt-0">
      <Link
        href={`/${lang}/articles/${article.slug}`}
        className="grid gap-3 md:grid-cols-[160px_1fr] md:gap-10"
      >
        <div className="flex flex-col gap-1 text-xs uppercase tracking-[0.16em] text-ink-subtle">
          <span>{article.category[lang]}</span>
          <span className="md:mt-auto">{formatDate(article.date, lang)}</span>
        </div>

        <div>
          <h3 className="font-serif text-2xl font-medium leading-tight tracking-tight text-ink transition-colors group-hover:text-accent md:text-3xl">
            {article.title[lang]}
          </h3>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-muted">
            {article.dek[lang]}
          </p>
          <p className="mt-4 text-xs uppercase tracking-wider text-ink-subtle">
            {article.readingTime} {t.article.minRead}
          </p>
        </div>
      </Link>
    </article>
  )
}
