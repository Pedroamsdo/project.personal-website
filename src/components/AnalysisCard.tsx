import type { Analysis } from '../types/analysis'

interface AnalysisCardProps {
  analysis: Analysis
}

function AnalysisCard({ analysis }: AnalysisCardProps) {
  return (
    <article className="py-6">
      <div className="flex items-baseline gap-3">
        <h3 className="font-serif text-xl font-semibold tracking-tight text-slate-900">
          {analysis.company}
        </h3>
        {analysis.ticker && (
          <span className="text-sm text-slate-400">{analysis.ticker}</span>
        )}
      </div>
      <div className="mt-1 flex items-center gap-3">
        <span className="text-xs font-medium uppercase tracking-wide text-emerald-800">
          {analysis.sector}
        </span>
        <span className="text-xs text-slate-400">{analysis.date}</span>
      </div>
      <p className="mt-3 leading-relaxed text-slate-600">
        {analysis.abstract}
      </p>
    </article>
  )
}

export default AnalysisCard
