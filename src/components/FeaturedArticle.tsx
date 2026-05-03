import Link from 'next/link'
import type { Article } from '@/models/article'
import type { Lang } from '@/i18n/types'
import { getDict } from '@/i18n/dictionaries'
import { formatDate } from '@/lib/format'

export default function FeaturedArticle({
  article,
  lang,
}: {
  article: Article
  lang: Lang
}) {
  const t = getDict(lang)

  return (
    <article className="max-w-4xl">
      <p className="mb-6 text-xs uppercase tracking-[0.18em] text-ink-subtle">
        {article.category[lang]}
      </p>

      <Link href={`/${lang}/articles/${article.slug}`} className="group block">
        <h2 className="font-serif text-4xl font-medium leading-[1.1] tracking-tight text-ink transition-colors group-hover:text-accent md:text-6xl">
          {article.title[lang]}
        </h2>
      </Link>

      <p className="mt-8 max-w-2xl font-serif text-xl italic leading-relaxed text-ink-muted md:text-2xl">
        {article.dek[lang]}
      </p>

      <div className="mt-10 flex items-center gap-3 text-xs uppercase tracking-wider text-ink-subtle">
        <span>{formatDate(article.date, lang)}</span>
        <span>·</span>
        <span>
          {article.readingTime} {t.article.minRead}
        </span>
        <span>·</span>
        <Link
          href={`/${lang}/articles/${article.slug}`}
          className="text-ink transition-colors hover:text-accent"
        >
          {t.article.readEssay} →
        </Link>
      </div>
    </article>
  )
}
