import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pedro Sampaio — Investment Research',
  description: 'Independent investment research focused on technology, energy transitions, and emerging market infrastructure.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
