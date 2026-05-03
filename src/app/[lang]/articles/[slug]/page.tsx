import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { articles, getArticleBySlug } from '@/data/articles'
import { getDict } from '@/i18n/dictionaries'
import { formatDate } from '@/lib/format'
import { isLang, LANGS, type Lang } from '@/i18n/types'

export function generateStaticParams() {
  return LANGS.flatMap((lang) =>
    articles.map((a) => ({ lang, slug: a.slug })),
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}): Promise<Metadata> {
  const { lang, slug } = await params
  if (!isLang(lang)) return {}
  const article = getArticleBySlug(slug)
  if (!article) return {}
  return {
    title: `${article.title[lang as Lang]} — Pedro Anacleto`,
    description: article.dek[lang as Lang],
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}) {
  const { lang, slug } = await params
  if (!isLang(lang)) notFound()
  const typedLang = lang as Lang
  const article = getArticleBySlug(slug)
  if (!article) notFound()
  const t = getDict(typedLang)

  return (
    <article className="mx-auto max-w-2xl px-6 py-20 md:py-28">
      <Link
        href={`/${typedLang}`}
        className="mb-12 inline-block text-xs uppercase tracking-[0.18em] text-ink-subtle transition-colors hover:text-ink"
      >
        {t.article.back}
      </Link>

      <header className="border-b border-rule pb-10">
        <p className="mb-6 text-xs uppercase tracking-[0.18em] text-ink-subtle">
          {article.category[typedLang]}
        </p>

        <h1 className="font-serif text-4xl font-medium leading-[1.1] tracking-tight text-ink md:text-5xl">
          {article.title[typedLang]}
        </h1>

        <p className="mt-8 font-serif text-xl italic leading-relaxed text-ink-muted md:text-2xl">
          {article.dek[typedLang]}
        </p>

        <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-wider text-ink-subtle">
          <span>{formatDate(article.date, typedLang)}</span>
          <span>·</span>
          <span>
            {article.readingTime} {t.article.minRead}
          </span>
        </div>
      </header>

      <div className="prose-editorial mt-12">
        {article.body[typedLang].map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </article>
  )
}
