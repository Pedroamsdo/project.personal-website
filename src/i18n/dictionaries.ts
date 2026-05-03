import type { Lang } from './types'

type Dict = {
  nav: { articles: string; about: string }
  home: { tagline: string; featured: string; more: string }
  article: { back: string; readEssay: string; minRead: string }
  about: { title: string; contact: string }
  footer: { rights: string }
  meta: { siteTitle: string; siteDescription: string }
}

export const dictionaries: Record<Lang, Dict> = {
  en: {
    nav: { articles: 'Essays', about: 'About' },
    home: {
      tagline: 'Notes on capital, technology, and Brazil.',
      featured: 'Featured',
      more: 'More essays',
    },
    article: {
      back: '← Back to essays',
      readEssay: 'Read essay',
      minRead: 'min read',
    },
    about: {
      title: 'About',
      contact: 'Get in touch',
    },
    footer: { rights: 'All rights reserved.' },
    meta: {
      siteTitle: 'Pedro Anacleto — Essays',
      siteDescription: 'Notes on capital, technology, and Brazil.',
    },
  },
  pt: {
    nav: { articles: 'Ensaios', about: 'Sobre' },
    home: {
      tagline: 'Notas sobre capital, tecnologia e Brasil.',
      featured: 'Em destaque',
      more: 'Mais ensaios',
    },
    article: {
      back: '← Voltar aos ensaios',
      readEssay: 'Ler ensaio',
      minRead: 'min de leitura',
    },
    about: {
      title: 'Sobre',
      contact: 'Entre em contato',
    },
    footer: { rights: 'Todos os direitos reservados.' },
    meta: {
      siteTitle: 'Pedro Anacleto — Ensaios',
      siteDescription: 'Notas sobre capital, tecnologia e Brasil.',
    },
  },
}

export function getDict(lang: Lang) {
  return dictionaries[lang]
}
