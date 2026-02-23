import type { Analysis } from '../types/analysis'

export const mockAnalyses: Analysis[] = [
  {
    id: '1',
    company: 'Datadog',
    ticker: 'DDOG',
    sector: 'SaaS',
    date: '2026-02-15',
    abstract:
      'Datadog continues to consolidate the observability market with best-in-class platform stickiness. Net revenue retention above 130% signals deep product-led expansion. The shift toward unified security and observability creates a compelling TAM expansion narrative, though valuation at 15x forward revenue demands sustained execution.',
  },
  {
    id: '2',
    company: 'Anthropic',
    sector: 'AI',
    date: '2026-02-10',
    abstract:
      'Anthropic represents the most credible safety-focused challenger in foundation models. Constitutional AI differentiation resonates with enterprise buyers prioritizing governance. The Amazon partnership de-risks distribution, but capital intensity remains the key variable — path to self-sustaining unit economics is the thesis unlock.',
  },
  {
    id: '3',
    company: 'Enphase Energy',
    ticker: 'ENPH',
    sector: 'Energy',
    date: '2026-01-28',
    abstract:
      'Enphase microinverter dominance faces margin pressure from IQ8 transition costs and softening residential solar demand in key European markets. Battery attach rates are the bright spot. We see a compelling entry point if NEM 3.0 headwinds are fully priced — current multiples suggest the market disagrees.',
  },
  {
    id: '4',
    company: 'Nubank',
    ticker: 'NU',
    sector: 'Fintech',
    date: '2026-01-20',
    abstract:
      'Nubank has crossed 100M customers and achieved consistent profitability in Brazil. Mexico and Colombia expansion is the next growth vector, but replicating the Brazilian playbook requires navigating distinct regulatory regimes. Credit quality remains pristine at 15-90 day NPLs below 4%, supporting the bull case for sustainable lending margins.',
  },
  {
    id: '5',
    company: 'Tempus AI',
    ticker: 'TEM',
    sector: 'Healthcare',
    date: '2026-01-12',
    abstract:
      'Tempus is building the operating system for precision medicine. Genomic sequencing revenue provides stable cash flows while the AI-driven clinical decision support platform scales. The Ambry Genetics acquisition expands hereditary testing capabilities. Key risk: reimbursement uncertainty and the long sales cycle in health systems.',
  },
  {
    id: '6',
    company: 'Cloudflare',
    ticker: 'NET',
    sector: 'Infrastructure',
    date: '2026-01-05',
    abstract:
      'Cloudflare edge network now serves as the backbone for developer-first infrastructure. Workers AI positions the company at the intersection of edge computing and inference workloads. Large customer growth (+34% YoY) validates the enterprise pivot, but GAAP profitability timeline remains a debate among investors.',
  },
]
