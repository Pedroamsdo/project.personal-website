export interface Analysis {
  id: string
  company: string
  ticker?: string
  sector: Sector
  date: string
  abstract: string
}

export type Sector = 'SaaS' | 'AI' | 'Energy' | 'Fintech' | 'Healthcare' | 'Infrastructure'

export const SECTORS: Sector[] = ['SaaS', 'AI', 'Energy', 'Fintech', 'Healthcare', 'Infrastructure']
