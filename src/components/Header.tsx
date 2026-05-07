import type { CSSProperties } from 'react'
import Link from 'next/link'
import { getDict } from '@/i18n/dictionaries'
import type { Lang } from '@/i18n/types'
import LangToggle from './LangToggle'

const NAME = 'Pedro Anacleto'

export default function Header({ lang }: { lang: Lang }) {
  const t = getDict(lang)

  return (
    <header className="border-b border-rule">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link
          href={`/${lang}`}
          className="name-mark font-serif text-lg font-medium tracking-tight text-ink"
          aria-label={NAME}
        >
          <span className="name-mark__inner" aria-hidden="true">
            {NAME.split('').map((char, i) => (
              <span
                key={`${char}-${i}`}
                className="name-mark__char"
                style={{ '--i': i } as CSSProperties}
              >
                {char === ' ' ? ' ' : char}
              </span>
            ))}
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          <Link
            href={`/${lang}`}
            className="text-sm text-ink-muted transition-colors hover:text-ink"
          >
            {t.nav.articles}
          </Link>
          <Link
            href={`/${lang}/about`}
            className="text-sm text-ink-muted transition-colors hover:text-ink"
          >
            {t.nav.about}
          </Link>
        </nav>

        <LangToggle currentLang={lang} />
      </div>
    </header>
  )
}
