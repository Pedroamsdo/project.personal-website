import { notFound } from 'next/navigation'
import FeaturedArticle from '@/components/FeaturedArticle'
import ArticleList from '@/components/ArticleList'
import { getSortedArticles } from '@/data/articles'
import { getDict } from '@/i18n/dictionaries'
import { isLang, type Lang } from '@/i18n/types'

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const typedLang = lang as Lang
  const t = getDict(typedLang)

  const sorted = getSortedArticles()
  const [featured, ...rest] = sorted

  return (
    <div className="mx-auto max-w-6xl px-6">
      <section className="border-b border-rule pb-20 pt-20 md:pt-28">
        <p className="mb-16 max-w-xl font-serif text-xl italic leading-relaxed text-ink-muted md:text-2xl">
          {t.home.tagline}
        </p>
        {featured && <FeaturedArticle article={featured} lang={typedLang} />}
      </section>

      {rest.length > 0 && (
        <section className="py-20">
          <h2 className="mb-12 text-xs uppercase tracking-[0.18em] text-ink-subtle">
            {t.home.more}
          </h2>
          <ArticleList articles={rest} lang={typedLang} />
        </section>
      )}
    </div>
  )
}
