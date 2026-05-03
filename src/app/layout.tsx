import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pedro Anacleto — Essays',
  description: 'Notes on capital, technology, and Brazil.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
