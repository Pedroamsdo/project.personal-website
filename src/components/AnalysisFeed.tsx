import type { Analysis } from '../types/analysis'
import AnalysisCard from './AnalysisCard'

interface AnalysisFeedProps {
  analyses: Analysis[]
}

function AnalysisFeed({ analyses }: AnalysisFeedProps) {
  if (analyses.length === 0) {
    return (
      <p className="py-12 text-center text-slate-400">
        No analyses found for this sector.
      </p>
    )
  }

  return (
    <div className="divide-y divide-slate-200">
      {analyses.map((analysis) => (
        <AnalysisCard key={analysis.id} analysis={analysis} />
      ))}
    </div>
  )
}

export default AnalysisFeed
