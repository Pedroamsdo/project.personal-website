'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LANGS, type Lang } from '@/i18n/types'

export default function LangToggle({ currentLang }: { currentLang: Lang }) {
  const pathname = usePathname() || `/${currentLang}`

  function hrefFor(lang: Lang) {
    const segments = pathname.split('/').filter(Boolean)
    if (segments.length === 0) return `/${lang}`
    segments[0] = lang
    return `/${segments.join('/')}`
  }

  return (
    <div className="flex items-center gap-2 text-xs tracking-wider">
      {LANGS.map((lang, i) => (
        <span key={lang} className="flex items-center gap-2">
          <Link
            href={hrefFor(lang)}
            className={
              lang === currentLang
                ? 'text-ink'
                : 'text-ink-subtle transition-colors hover:text-ink'
            }
          >
            {lang.toUpperCase()}
          </Link>
          {i === 0 && <span className="text-ink-subtle">·</span>}
        </span>
      ))}
    </div>
  )
}
