import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { isLang, LANGS, type Lang } from '@/i18n/types'
import { getDict } from '@/i18n/dictionaries'

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  const t = getDict(lang)
  return {
    title: t.meta.siteTitle,
    description: t.meta.siteDescription,
  }
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!isLang(lang)) notFound()

  return (
    <div className="flex min-h-screen flex-col">
      <Header lang={lang as Lang} />
      <main className="flex-1">{children}</main>
      <Footer lang={lang as Lang} />
    </div>
  )
}
