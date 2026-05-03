import type { Article } from '@/models/article'
import type { Lang } from '@/i18n/types'
import ArticleCard from './ArticleCard'

export default function ArticleList({
  articles,
  lang,
}: {
  articles: Article[]
  lang: Lang
}) {
  return (
    <div className="divide-y divide-rule">
      {articles.map((article) => (
        <ArticleCard key={article.slug} article={article} lang={lang} />
      ))}
    </div>
  )
}
