'use client'

import { SECTORS, type Sector } from '@/models/thesis'
import { cn } from '@/lib/utils'

interface SectorFilterProps {
  activeSector: Sector | 'All'
  onChange: (sector: Sector | 'All') => void
}

const tabs: (Sector | 'All')[] = ['All', ...SECTORS]

export default function SectorFilter({ activeSector, onChange }: SectorFilterProps) {
  return (
    <div role="tablist" className="flex gap-1 border-b border-navy-700">
      {tabs.map((tab) => (
        <button
          key={tab}
          role="tab"
          aria-selected={activeSector === tab}
          onClick={() => onChange(tab)}
          className={cn(
            'cursor-pointer border-b-2 px-4 py-2 text-sm transition-colors focus:outline-none',
            activeSector === tab
              ? 'border-earth-500 text-gray-100'
              : 'border-transparent text-gray-500 hover:text-gray-100'
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}
