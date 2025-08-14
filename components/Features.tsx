'use client'

import { Instagram, Twitter, Linkedin, Music, Hash, Palette, Zap, Users, BarChart3, Shield } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: <Instagram className="w-8 h-8 text-pink-500" />,
      title: "Multi-Platform Support",
      description: "Generate captions optimized for Instagram, Twitter, LinkedIn, TikTok, and more. Each platform gets tailored content that follows best practices.",
      platforms: ["Instagram", "Twitter", "LinkedIn", "TikTok"]
    },
    {
      icon: <Palette className="w-8 h-8 text-purple-500" />,
      title: "Tone & Style Options",
      description: "Choose from professional, casual, witty, inspirational, or promotional tones. Customize length and style to match your brand voice.",
      options: ["Professional", "Casual", "Witty", "Inspirational", "Promotional"]
    },
    {
      icon: <Hash className="w-8 h-8 text-blue-500" />,
      title: "Smart Hashtag Generation",
      description: "AI-powered hashtag suggestions that are relevant to your content and trending in your niche. Boost discoverability automatically.",
      features: ["Trending hashtags", "Niche-specific", "Engagement optimized"]
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Lightning Fast Generation",
      description: "Get 3-5 caption variations in under 3 seconds. No more staring at blank screens waiting for inspiration to strike.",
      speed: "< 3 seconds"
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: "Brand Voice Consistency",
      description: "Create custom tone profiles to maintain consistent messaging across all your social media accounts and campaigns.",
      benefits: ["Consistent messaging", "Brand recognition", "Professional appearance"]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-indigo-500" />,
      title: "Engagement Optimization",
      description: "AI-trained on high-performing social media content to generate captions that drive likes, comments, shares, and saves.",
      metrics: ["Likes", "Comments", "Shares", "Saves"]
    }
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need for
            <span className="block bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Social Media Success
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered platform combines cutting-edge technology with social media expertise 
            to deliver captions that actually work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card hover:shadow-lg transition-shadow duration-300 group">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {feature.description}
              </p>
              
              {/* Feature-specific details */}
              {feature.platforms && (
                <div className="flex flex-wrap gap-2">
                  {feature.platforms.map((platform, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {platform}
                    </span>
                  ))}
                </div>
              )}
              
              {feature.options && (
                <div className="flex flex-wrap gap-2">
                  {feature.options.map((option, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {option}
                    </span>
                  ))}
                </div>
              )}
              
              {feature.features && (
                <div className="flex flex-wrap gap-2">
                  {feature.features.map((feat, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {feat}
                    </span>
                  ))}
                </div>
              )}
              
              {feature.speed && (
                <div className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full font-medium">
                  {feature.speed}
                </div>
              )}
              
              {feature.benefits && (
                <div className="flex flex-wrap gap-2">
                  {feature.benefits.map((benefit, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {benefit}
                    </span>
                  ))}
                </div>
              )}
              
              {feature.metrics && (
                <div className="flex flex-wrap gap-2">
                  {feature.metrics.map((metric, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                      {metric}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 px-6 py-3 rounded-full mb-8">
            <Shield className="w-5 h-5" />
            <span className="font-medium">Enterprise-grade security & privacy</span>
          </div>
          
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Trusted by Content Creators Worldwide
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of creators, marketers, and businesses who've transformed their 
            social media presence with AI-powered captions.
          </p>
        </div>
      </div>
    </section>
  )
}
