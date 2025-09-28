'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { getRelatedLinks } from '@/lib/utils'
import { Button } from '@/components/ui/button'

interface InternalLinksProps {
  title?: string
  description?: string
  maxLinks?: number
  className?: string
  variant?: 'default' | 'compact' | 'sidebar'
}

export function InternalLinks({ 
  title = "Related Pages",
  description = "Explore more information about our services and practice",
  maxLinks = 3,
  className = "",
  variant = 'default'
}: InternalLinksProps) {
  const pathname = usePathname()
  const relatedLinks = getRelatedLinks(pathname).slice(0, maxLinks)

  if (relatedLinks.length === 0) {
    return null
  }

  if (variant === 'compact') {
    return (
      <div className={`space-y-2 ${className}`}>
        <h4 className="font-medium text-sm text-ink/70 uppercase tracking-wide">
          {title}
        </h4>
        <nav className="space-y-1">
          {relatedLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="block text-sm text-teal-600 hover:text-teal-700 transition-colors duration-200"
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    )
  }

  if (variant === 'sidebar') {
    return (
      <aside className={`bg-porcelain rounded-lg p-6 ${className}`}>
        <h3 className="font-serif text-lg text-obsidian mb-4">
          {title}
        </h3>
        <nav className="space-y-3">
          {relatedLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="block group"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium text-obsidian group-hover:text-teal-600 transition-colors duration-200">
                    {link.title}
                  </h4>
                  <p className="text-sm text-ink/60 mt-1">
                    {link.description}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-ink/40 group-hover:text-teal-600 transition-colors duration-200 ml-2 flex-shrink-0 mt-0.5" />
              </div>
            </Link>
          ))}
        </nav>
      </aside>
    )
  }

  return (
    <section className={`py-16 md:py-24 bg-white ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
            {title}
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {relatedLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="group block p-6 bg-slate-50 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-medium text-slate-900 group-hover:text-teal-600 transition-colors duration-200">
                  {link.title}
                </h3>
                <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-teal-600 transition-colors duration-200 flex-shrink-0 ml-2" />
              </div>
              <p className="text-sm text-slate-600">
                {link.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contextual CTA Component with internal links
interface ContextualCTAProps {
  currentPage: string
  className?: string
}

export function ContextualCTA({ currentPage, className = "" }: ContextualCTAProps) {
  const ctaConfig: Record<string, {
    title: string
    description: string
    primaryCTA: { text: string; href: string; external?: boolean }
    secondaryCTA?: { text: string; href: string; external?: boolean }
  }> = {
    '/about': {
      title: 'Ready to Experience Dr. Forbes\' Expertise?',
      description: 'Schedule a consultation to discuss your health goals and treatment options.',
      primaryCTA: { text: 'Schedule Consultation', href: 'https://forbesintegrativemedicine.acubliss.app', external: true },
      secondaryCTA: { text: 'Learn About Services', href: '/medical-acupuncture' }
    },
    '/medical-acupuncture': {
      title: 'Start Your Healing Journey Today',
      description: 'See if medical acupuncture can help your specific condition.',
      primaryCTA: { text: 'Book Appointment', href: 'https://forbesintegrativemedicine.acubliss.app', external: true },
      secondaryCTA: { text: 'View Conditions', href: '/conditions' }
    },
    '/conditions': {
      title: 'Take the Next Step Toward Relief',
      description: 'Schedule a consultation to create your personalized treatment plan.',
      primaryCTA: { text: 'Schedule Now', href: 'https://forbesintegrativemedicine.acubliss.app', external: true },
      secondaryCTA: { text: 'New Patient Info', href: '/new-patients' }
    },
    '/faq': {
      title: 'Still Have Questions?',
      description: 'Contact us directly or schedule a consultation to learn more.',
      primaryCTA: { text: 'Contact Us', href: '/contact' },
      secondaryCTA: { text: 'Schedule Consultation', href: 'https://forbesintegrativemedicine.acubliss.app', external: true }
    }
  }

  const config = ctaConfig[currentPage]
  
  if (!config) {
    // Default CTA for pages without specific configuration
    return (
      <section className={`py-12 bg-gradient-to-br from-teal-500 to-teal-600 ${className}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">
            Ready to Start Your Wellness Journey?
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Contact Forbes Integrative Medicine today to learn how we can help you achieve your health goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-teal-600 hover:bg-gray-100"
              asChild
            >
              <a href="https://forbesintegrativemedicine.acubliss.app" target="_blank" rel="noopener noreferrer">
                Schedule Consultation
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent text-white border-white hover:bg-white/10"
              asChild
            >
              <a href="tel:602-688-4874">
                Call (602) 688-4874
              </a>
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={`py-12 bg-gradient-to-br from-teal-500 to-teal-600 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">
          {config.title}
        </h2>
        <p className="text-white/90 mb-6 max-w-2xl mx-auto">
          {config.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-teal-600 hover:bg-gray-100"
            asChild
          >
            <a 
              href={config.primaryCTA.href}
              {...(config.primaryCTA.external && { 
                target: "_blank", 
                rel: "noopener noreferrer" 
              })}
            >
              {config.primaryCTA.text}
              {config.primaryCTA.external && <ExternalLink className="ml-2 h-4 w-4" />}
            </a>
          </Button>
          {config.secondaryCTA && (
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent text-white border-white hover:bg-white/10"
              asChild
            >
              <a 
                href={config.secondaryCTA.href}
                {...(config.secondaryCTA.external && { 
                  target: "_blank", 
                  rel: "noopener noreferrer" 
                })}
              >
                {config.secondaryCTA.text}
                {config.secondaryCTA.external && <ExternalLink className="ml-2 h-4 w-4" />}
              </a>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}