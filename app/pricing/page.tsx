import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Check, Star } from 'lucide-react'
import Link from 'next/link'

export default function PricingPage() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for getting started with AI caption generation',
      features: [
        '10 captions per day',
        'Basic customization options',
        'Instagram & Twitter support',
        'Standard hashtag suggestions',
        'Community support'
      ],
      cta: 'Get Started Free',
      href: '/generate',
      popular: false
    },
    {
      name: 'Pro',
      price: '$9',
      period: 'per month',
      description: 'For content creators and small businesses',
      features: [
        'Unlimited captions',
        'All platforms supported',
        'Advanced customization',
        'Smart hashtag generation',
        'Emoji suggestions',
        'Priority support',
        'Export to multiple formats'
      ],
      cta: 'Start Pro Trial',
      href: '/signup?plan=pro',
      popular: true
    },
    {
      name: 'Business',
      price: '$29',
      period: 'per month',
      description: 'For teams and agencies',
      features: [
        'Everything in Pro',
        'Team collaboration',
        'Brand voice profiles',
        'Bulk generation',
        'Analytics dashboard',
        'API access',
        'White-label options',
        'Dedicated support'
      ],
      cta: 'Contact Sales',
      href: '/contact',
      popular: false
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent
            <span className="block bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Pricing
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your needs. Start free and upgrade anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative card ${
                plan.popular
                  ? 'ring-2 ring-primary-500 shadow-xl scale-105'
                  : 'hover:shadow-lg transition-shadow'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className={`block w-full text-center py-3 px-6 rounded-lg font-medium transition-colors ${
                  plan.popular
                    ? 'btn-primary'
                    : 'btn-secondary'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I cancel my subscription anytime?
              </h3>
              <p className="text-gray-600">
                Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you offer refunds?
              </h3>
              <p className="text-gray-600">
                We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, contact us for a full refund.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I change plans?
              </h3>
              <p className="text-gray-600">
                Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Is there a free trial for paid plans?
              </h3>
              <p className="text-gray-600">
                Yes! Pro and Business plans come with a 7-day free trial. No credit card required to start.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="card max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Social Media?
            </h2>
            <p className="text-gray-600 mb-6">
              Join thousands of creators who've already improved their engagement with AI-powered captions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/generate" className="btn-primary">
                Start Generating Captions
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
