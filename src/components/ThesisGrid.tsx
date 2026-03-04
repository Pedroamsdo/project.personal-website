'use client'

import { motion } from 'framer-motion'
import type { InvestmentThesis } from '@/models/thesis'
import ThesisCard from './ThesisCard'

interface ThesisGridProps {
  theses: InvestmentThesis[]
}

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
}

export default function ThesisGrid({ theses }: ThesisGridProps) {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-20">
      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {theses.map((thesis) => (
          <motion.div key={thesis.id} variants={item}>
            <ThesisCard thesis={thesis} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
