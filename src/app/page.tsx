import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ThesisGrid from '@/components/ThesisGrid'
import { mockTheses } from '@/data/mockTheses'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ThesisGrid theses={mockTheses} />
    </main>
  )
}
