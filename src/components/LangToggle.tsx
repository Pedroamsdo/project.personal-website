'use client'

import { useRouter, usePathname } from 'next/navigation'
import { LANGS, type Lang } from '@/i18n/types'

export default function LangToggle({ currentLang }: { currentLang: Lang }) {
  const router = useRouter()
  const pathname = usePathname() || `/${currentLang}`

  function hrefFor(lang: Lang) {
    const segments = pathname.split('/').filter(Boolean)
    if (segments.length === 0) return `/${lang}`
    segments[0] = lang
    return `/${segments.join('/')}`
  }

  const activeIndex = LANGS.indexOf(currentLang)

  return (
    <button
      type="button"
      role="switch"
      aria-checked={currentLang === LANGS[1]}
      aria-label={`Idioma: ${currentLang.toUpperCase()}`}
      onClick={() => {
        const next = LANGS[(activeIndex + 1) % LANGS.length]
        router.push(hrefFor(next))
      }}
      className="relative inline-flex items-center h-7 w-[72px] rounded-full border border-ink/20 bg-paper text-[10px] tracking-[0.15em] font-medium select-none overflow-hidden transition-colors duration-300 hover:border-ink/40"
    >
      <span
        aria-hidden
        className="absolute top-0.5 bottom-0.5 left-0.5 w-[34px] rounded-full bg-ink transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]"
        style={{
          transform: `translateX(${activeIndex * 34}px)`,
        }}
      />
      {LANGS.map((lang, i) => (
        <span
          key={lang}
          className={`relative z-10 flex-1 text-center transition-colors duration-300 ${
            i === activeIndex ? 'text-paper' : 'text-ink-subtle'
          }`}
        >
          {lang.toUpperCase()}
        </span>
      ))}
    </button>
  )
}
