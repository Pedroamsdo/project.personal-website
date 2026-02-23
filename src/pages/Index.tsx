import { useMemo, useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import SectorFilter from '../components/SectorFilter'
import AnalysisFeed from '../components/AnalysisFeed'
import { mockAnalyses } from '../data/mockAnalyses'
import type { Sector } from '../types/analysis'

function Index() {
  const [activeSector, setActiveSector] = useState<Sector | 'All'>('All')

  const filteredAnalyses = useMemo(() => {
    if (activeSector === 'All') return mockAnalyses
    return mockAnalyses.filter((a) => a.sector === activeSector)
  }, [activeSector])

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <Hero />
      <main id="analyses" className="mx-auto max-w-5xl px-6 pb-20">
        <SectorFilter activeSector={activeSector} onChange={setActiveSector} />
        <AnalysisFeed analyses={filteredAnalyses} />
      </main>
    </div>
  )
}

export default Index
