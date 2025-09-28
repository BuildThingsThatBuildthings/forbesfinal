import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { cn } from '@/lib/utils'
import { BreadcrumbSchema } from '@/components/seo/StructuredData'

export interface BreadcrumbItem {
  name: string
  href: string
  current?: boolean
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  // Always include home as first item
  const allItems = [
    { name: 'Home', href: '/', current: false },
    ...items
  ]

  // Generate schema data
  const schemaItems = allItems.map(item => ({
    name: item.name,
    item: `https://forbesintegrative.com${item.href}`
  }))

  return (
    <>
      <BreadcrumbSchema items={schemaItems} />
      <nav 
        aria-label="Breadcrumb" 
        className={cn("flex py-4", className)}
      >
        <ol className="flex items-center space-x-2 text-sm">
          {allItems.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && (
                <ChevronRight 
                  className="h-4 w-4 text-ink/40 mx-2 flex-shrink-0" 
                  aria-hidden="true" 
                />
              )}
              
              {item.current ? (
                <span 
                  className="text-ink font-medium"
                  aria-current="page"
                >
                  {index === 0 && <Home className="h-4 w-4 mr-1 inline" aria-hidden="true" />}
                  {item.name}
                </span>
              ) : (
                <Link 
                  href={item.href}
                  className="text-ink/60 hover:text-teal-600 transition-colors duration-200 flex items-center"
                >
                  {index === 0 && <Home className="h-4 w-4 mr-1" aria-hidden="true" />}
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}

// Predefined breadcrumb configurations for common pages
export const breadcrumbConfigs = {
  about: [
    { name: 'About Dr. Forbes', href: '/about', current: true }
  ],
  services: [
    { name: 'Medical Acupuncture', href: '/medical-acupuncture', current: true }
  ],
  conditions: [
    { name: 'Conditions We Treat', href: '/conditions', current: true }
  ],
  newPatients: [
    { name: 'New Patients', href: '/new-patients', current: true }
  ],
  faq: [
    { name: 'Frequently Asked Questions', href: '/faq', current: true }
  ],
  reviews: [
    { name: 'Patient Reviews', href: '/reviews', current: true }
  ],
  contact: [
    { name: 'Contact Us', href: '/contact', current: true }
  ],
  blog: [
    { name: 'Health Blog', href: '/blog', current: true }
  ],
  blogPost: (title: string, slug: string) => [
    { name: 'Health Blog', href: '/blog', current: false },
    { name: title, href: `/blog/${slug}`, current: true }
  ],
  privacy: [
    { name: 'Privacy Policy', href: '/privacy', current: true }
  ],
  terms: [
    { name: 'Terms of Service', href: '/terms', current: true }
  ],
  cookiePolicy: [
    { name: 'Cookie Policy', href: '/cookie-policy', current: true }
  ],
  accessibility: [
    { name: 'Accessibility', href: '/accessibility', current: true }
  ]
}

// Helper component for common page breadcrumbs
interface PageBreadcrumbProps {
  config: keyof typeof breadcrumbConfigs | BreadcrumbItem[]
  className?: string
}

export function PageBreadcrumb({ config, className }: PageBreadcrumbProps) {
  const items = typeof config === 'string' ? breadcrumbConfigs[config] : config
  
  if (!items || items.length === 0) {
    return null
  }
  
  return <Breadcrumb items={items} className={className} />
}

// Rich snippet breadcrumb for SEO (invisible but helps search engines)
interface SEOBreadcrumbProps {
  items: BreadcrumbItem[]
}

export function SEOBreadcrumb({ items }: SEOBreadcrumbProps) {
  const allItems = [
    { name: 'Home', href: '/', current: false },
    ...items
  ]

  const schemaItems = allItems.map(item => ({
    name: item.name,
    item: `https://forbesintegrative.com${item.href}`
  }))

  return (
    <>
      <BreadcrumbSchema items={schemaItems} />
      <div className="sr-only" itemScope itemType="https://schema.org/BreadcrumbList">
        {allItems.map((item, index) => (
          <div key={item.href} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <meta itemProp="position" content={(index + 1).toString()} />
            <Link href={item.href} itemProp="item">
              <span itemProp="name">{item.name}</span>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}