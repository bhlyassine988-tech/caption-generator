'use client'

import Link from 'next/link'
import { ArrowRight, Sparkles, Zap, TrendingUp } from 'lucide-react'

export default function Hero() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Generate Engaging
            <span className="block bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Social Media Captions
            </span>
            in Seconds
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Never run out of caption ideas again. AI-powered creativity that saves time and 
            increases engagement across Instagram, Twitter, LinkedIn, and TikTok.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/generate" className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center">
              Start Generating Captions
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="/demo" className="btn-secondary text-lg px-8 py-4">
              Watch Demo
            </Link>
          </div>
          
          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-primary-500" />
              <span>10,000+ captions generated</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-secondary-500" />
              <span>3 seconds average generation</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span>40% increase in engagement</span>
            </div>
          </div>
        </div>
        
        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Creativity</h3>
            <p className="text-gray-600">Advanced AI that understands context and generates engaging, relevant captions</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-secondary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Lightning Fast</h3>
            <p className="text-gray-600">Generate multiple caption variations in under 3 seconds</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Boost Engagement</h3>
            <p className="text-gray-600">Optimized captions designed to increase likes, comments, and shares</p>
          </div>
        </div>
      </div>
    </section>
  )
}
