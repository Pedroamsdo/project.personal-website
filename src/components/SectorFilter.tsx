import { Tab, TabGroup, TabList } from '@headlessui/react'
import { SECTORS, type Sector } from '../types/analysis'

interface SectorFilterProps {
  activeSector: Sector | 'All'
  onChange: (sector: Sector | 'All') => void
}

const tabs: (Sector | 'All')[] = ['All', ...SECTORS]

function SectorFilter({ activeSector, onChange }: SectorFilterProps) {
  const selectedIndex = tabs.indexOf(activeSector)

  return (
    <TabGroup
      selectedIndex={selectedIndex}
      onChange={(index) => onChange(tabs[index])}
    >
      <TabList className="flex gap-1 border-b border-slate-200">
        {tabs.map((tab) => (
          <Tab
            key={tab}
            className="cursor-pointer border-b-2 border-transparent px-4 py-2 text-sm text-slate-500 transition-colors hover:text-slate-900 focus:outline-none data-[selected]:border-emerald-800 data-[selected]:text-slate-900"
          >
            {tab}
          </Tab>
        ))}
      </TabList>
    </TabGroup>
  )
}

export default SectorFilter
