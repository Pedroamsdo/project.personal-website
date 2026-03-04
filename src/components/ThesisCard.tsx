'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import type { InvestmentThesis } from '@/models/thesis'

interface ThesisCardProps {
  thesis: InvestmentThesis
}

export default function ThesisCard({ thesis }: ThesisCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className="relative aspect-[4/5] overflow-hidden rounded-lg border border-navy-700"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Logo zone (~55%) — dark navy background with centered logo */}
      <div className="flex h-[55%] items-center justify-center bg-gradient-to-b from-navy-800 to-navy-900 p-10">
        <div className="relative h-full w-full">
          <Image
            src={thesis.imageUrl}
            alt={thesis.company}
            fill
            className="object-contain drop-shadow-lg"
            sizes="(max-width: 640px) 60vw, (max-width: 1024px) 30vw, 20vw"
          />
        </div>
      </div>

      {/* Text zone (~45%) — company info */}
      <div className="flex h-[45%] flex-col justify-center bg-navy-950 p-6">
        <span
          className="mb-2 w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
          style={{
            backgroundColor: thesis.accentColor,
            color: 'hsl(220, 40%, 10%)',
          }}
        >
          {thesis.sector}
        </span>
        <h3 className="font-serif text-xl font-semibold text-gray-100">
          {thesis.company}
        </h3>
        <p className="mt-1 text-sm text-gray-400">{thesis.ticker}</p>
      </div>

      {/* Hover overlay — Glassmorphism */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="absolute inset-0 flex flex-col justify-end rounded-lg bg-navy-950/85 p-5 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <span className="text-xs font-medium uppercase tracking-widest text-earth-400">
              {thesis.sector}
            </span>
            <h3 className="mt-2 font-serif text-lg font-semibold text-gray-100">
              {thesis.company}
            </h3>
            <p className="mt-2 line-clamp-4 text-sm leading-relaxed text-gray-300">
              {thesis.summary}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {thesis.metrics.cagr && (
                <span className="rounded-full bg-positive/15 px-3 py-1 text-xs font-medium text-positive">
                  CAGR {thesis.metrics.cagr}
                </span>
              )}
              {thesis.metrics.roic && (
                <span className="rounded-full bg-positive/15 px-3 py-1 text-xs font-medium text-positive">
                  ROIC {thesis.metrics.roic}
                </span>
              )}
              {thesis.metrics.marketCap && (
                <span className="rounded-full bg-navy-700/50 px-3 py-1 text-xs font-medium text-gray-300">
                  {thesis.metrics.marketCap}
                </span>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
