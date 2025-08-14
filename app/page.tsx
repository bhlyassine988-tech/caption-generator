import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      <Hero />
      <Features />
      <Footer />
    </main>
  )
}
