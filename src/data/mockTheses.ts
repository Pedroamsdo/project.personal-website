import type { InvestmentThesis } from '@/models/thesis'

export const mockTheses: InvestmentThesis[] = [
  {
    id: '1',
    company: 'Nubank',
    ticker: 'NU',
    sector: 'Fintech',
    summary:
      'Maior banco digital do mundo com 100M+ clientes. Expansão para México e Colômbia como vetor de crescimento. NPLs abaixo de 4% sustentam margens de crédito. Monetização de cross-sell em seguros e investimentos é o próximo catalisador.',
    metrics: { cagr: '35%', roic: '22%', marketCap: 'US$ 55B' },
    accentColor: 'hsl(280, 60%, 55%)',
    initials: 'NU',
    imageUrl: '/images/logos/nubank.png',
  },
  {
    id: '2',
    company: 'WEG',
    ticker: 'WEGE3',
    sector: 'Infrastructure',
    summary:
      'Líder global em motores elétricos e automação industrial. Expansão internacional robusta com fábricas na China e México. Beneficiária direta da eletrificação e transição energética. Margens consistentemente acima de 20%.',
    metrics: { cagr: '18%', roic: '28%', marketCap: 'R$ 220B' },
    accentColor: 'hsl(210, 70%, 50%)',
    initials: 'WG',
    imageUrl: '/images/logos/weg.png',
  },
  {
    id: '3',
    company: 'Cosan',
    ticker: 'CSAN3',
    sector: 'Energy',
    summary:
      'Conglomerado integrado de energia com posições em etanol (Raízen), gás natural (Compass), logística (Rumo) e lubrificantes (Moove). Tese de sum-of-parts com desconto significativo vs. ativos listados.',
    metrics: { cagr: '12%', roic: '15%', marketCap: 'R$ 25B' },
    accentColor: 'hsl(15, 65%, 50%)',
    initials: 'CS',
    imageUrl: '/images/logos/cosan.png',
  },
  {
    id: '4',
    company: 'TOTVS',
    ticker: 'TOTS3',
    sector: 'SaaS',
    summary:
      'Maior empresa de software do Brasil com 60%+ de market share em ERP para SMBs. Transição para cloud acelera receita recorrente. Verticais de techfin e business performance ampliam TAM endereçável.',
    metrics: { cagr: '20%', roic: '18%', marketCap: 'R$ 28B' },
    accentColor: 'hsl(145, 50%, 45%)',
    initials: 'TV',
    imageUrl: '/images/logos/totvs.png',
  },
  {
    id: '5',
    company: 'RaiaDrogasil',
    ticker: 'RADL3',
    sector: 'Healthcare',
    summary:
      'Maior rede de farmácias do Brasil com 3.000+ lojas. Marketplace digital cresce acima de 40% a.a. Consolidação do setor fragmentado e envelhecimento populacional são tailwinds estruturais de longo prazo.',
    metrics: { cagr: '15%', roic: '19%', marketCap: 'R$ 45B' },
    accentColor: 'hsl(350, 55%, 50%)',
    initials: 'RD',
    imageUrl: '/images/logos/raiadrogasil.png',
  },
  {
    id: '6',
    company: 'Localiza',
    ticker: 'RENT3',
    sector: 'Infrastructure',
    summary:
      'Líder absoluta em aluguel de veículos e gestão de frotas no Brasil. Integração com Unidas cria escala sem precedentes. Modelo asset-heavy com retornos superiores ao custo de capital e poder de precificação comprovado.',
    metrics: { cagr: '22%', roic: '16%', marketCap: 'R$ 50B' },
    accentColor: 'hsl(140, 55%, 42%)',
    initials: 'LZ',
    imageUrl: '/images/logos/localiza.png',
  },
]
