'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { LANGS, type Lang } from '@/i18n/types'

export default function LangToggle({ currentLang }: { currentLang: Lang }) {
  const pathname = usePathname() || `/${currentLang}`
  const [pressed, setPressed] = useState<Lang | null>(null)

  function hrefFor(lang: Lang) {
    const segments = pathname.split('/').filter(Boolean)
    if (segments.length === 0) return `/${lang}`
    segments[0] = lang
    return `/${segments.join('/')}`
  }

  return (
    <div className="flex items-center gap-2 text-xs tracking-wider">
      {LANGS.map((lang, i) => {
        const isActive = lang === currentLang
        const isPressed = pressed === lang
        return (
          <span key={lang} className="flex items-center gap-2">
            <Link
              href={hrefFor(lang)}
              onMouseDown={() => setPressed(lang)}
              onMouseUp={() => setPressed(null)}
              onMouseLeave={() => setPressed(null)}
              onTouchStart={() => setPressed(lang)}
              onTouchEnd={() => setPressed(null)}
              className={`group inline-flex items-center gap-1.5 transition-colors duration-300 ease-out ${
                isActive ? 'text-ink' : 'text-ink-subtle hover:text-ink'
              } ${isPressed ? 'scale-95' : 'scale-100'} transition-transform`}
            >
              <span
                aria-hidden
                className={`relative inline-block h-1.5 w-1.5 rounded-full border border-current transition-all duration-300 ease-out ${
                  isActive
                    ? 'bg-current shadow-[0_0_6px_currentColor]'
                    : 'bg-transparent'
                } ${isPressed ? 'scale-150' : 'scale-100'}`}
              />
              {lang.toUpperCase()}
            </Link>
            {i === 0 && <span className="text-ink-subtle">·</span>}
          </span>
        )
      })}
    </div>
  )
}
