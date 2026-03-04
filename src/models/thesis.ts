export type Sector = 'SaaS' | 'AI' | 'Energy' | 'Fintech' | 'Healthcare' | 'Infrastructure'

export const SECTORS: Sector[] = ['SaaS', 'AI', 'Energy', 'Fintech', 'Healthcare', 'Infrastructure']

export interface ThesisMetrics {
  cagr?: string
  roic?: string
  marketCap?: string
}

export interface InvestmentThesis {
  id: string
  company: string
  ticker: string
  sector: Sector
  summary: string
  metrics: ThesisMetrics
  accentColor: string
  initials: string
  imageUrl: string
}
