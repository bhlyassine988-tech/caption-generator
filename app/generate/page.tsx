import Header from '@/components/Header'
import CaptionGenerator from '@/components/CaptionGenerator'
import Footer from '@/components/Footer'

export default function GeneratePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Generate Your Caption
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Describe your content, choose your style, and get AI-powered captions in seconds
            </p>
          </div>
          <CaptionGenerator />
        </div>
      </div>
      <Footer />
    </main>
  )
}
