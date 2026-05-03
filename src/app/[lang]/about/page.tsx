import { notFound } from 'next/navigation'
import { getDict } from '@/i18n/dictionaries'
import { isLang, type Lang } from '@/i18n/types'

const ABOUT_BODY: Record<Lang, string[]> = {
  en: [
    'Pedro Anacleto writes about capital, technology, and the long arc of Brazilian industry. The essays here are an attempt to think slowly in public — to publish the working notes that usually stay private.',
    'The interest is operational rather than macro. Most of what is interesting about an investment lives inside the company: how it allocates capital, how it treats time, how it absorbs shocks without losing its temperament. The macro is a constraint, not a thesis.',
    'These pages are written for a small audience of operators, allocators, and friends who care about the same set of questions. There is no newsletter, no schedule, no obligation to publish. Things appear when they are ready.',
  ],
  pt: [
    'Pedro Anacleto escreve sobre capital, tecnologia e o arco longo da indústria brasileira. Os ensaios aqui são uma tentativa de pensar devagar em público — publicar as notas de trabalho que normalmente ficam privadas.',
    'O interesse é operacional, não macro. Quase tudo que é interessante em um investimento vive dentro da empresa: como ela aloca capital, como trata o tempo, como absorve choques sem perder o temperamento. O macro é uma restrição, não uma tese.',
    'Estas páginas são escritas para uma audiência pequena de operadores, alocadores e amigos que se importam com o mesmo conjunto de perguntas. Não há newsletter, não há cronograma, não há obrigação de publicar. As coisas aparecem quando estão prontas.',
  ],
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const typedLang = lang as Lang
  const t = getDict(typedLang)

  return (
    <div className="mx-auto max-w-2xl px-6 py-24 md:py-32">
      <h1 className="font-serif text-5xl font-medium leading-tight tracking-tight text-ink md:text-6xl">
        {t.about.title}
      </h1>

      <div className="prose-editorial mt-12">
        {ABOUT_BODY[typedLang].map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="mt-16 border-t border-rule pt-8">
        <p className="mb-4 text-xs uppercase tracking-[0.18em] text-ink-subtle">
          {t.about.contact}
        </p>
        <ul className="flex flex-col gap-2 font-serif text-lg text-ink">
          <li>
            <a
              href="mailto:pedroamsdo@gmail.com"
              className="transition-colors hover:text-accent"
            >
              pedroamsdo@gmail.com
            </a>
          </li>
          <li>
            <a
              href="https://x.com/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-accent"
            >
              X / Twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-accent"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
