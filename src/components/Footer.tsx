import { getDict } from '@/i18n/dictionaries'
import type { Lang } from '@/i18n/types'

export default function Footer({ lang }: { lang: Lang }) {
  const t = getDict(lang)
  const year = new Date().getFullYear()

  return (
    <footer className="mt-32 border-t border-rule">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-12 text-xs text-ink-subtle md:flex-row">
        <p>
          © {year} Pedro Anacleto. {t.footer.rights}
        </p>
        <div className="flex gap-6">
          <a
            href="mailto:pedroamsdo@gmail.com"
            className="transition-colors hover:text-ink"
          >
            Email
          </a>
          <a
            href="https://x.com/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-ink"
          >
            X
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-ink"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
