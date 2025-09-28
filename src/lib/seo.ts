import { Metadata } from 'next'

export interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
  ogType?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
  tags?: string[]
  noIndex?: boolean
  noFollow?: boolean
}

export const siteConfig = {
  name: 'Forbes Integrative Medicine',
  url: 'https://forbesintegrative.com',
  description: 'Physician acupuncturist Scottsdale Phoenix. Dr. Forbes MD provides medical acupuncture for chronic pain, migraines, neuropathy. Medicare accepted. Cash pay concierge integrative medicine Paradise Valley.',
  defaultTitle: 'Physician Acupuncturist Phoenix Scottsdale | Dr Forbes MD Medical Acupuncture',
  doctor: {
    name: 'Dr. Janie Forbes',
    title: 'Board-Certified Family Medicine Physician',
    credentials: [
      'MD - Penn State College of Medicine',
      'Board-Certified Family Medicine',
      'Chief Resident - University of Virginia',
      'Certified in Integrated Structural Acupuncture - University of New England',
      'Certified in Marma Therapy - Ayurvedic Institute',
      'Former Assistant Professor - University of Virginia',
      'Part-time faculty - University of Arizona College of Medicine Phoenix'
    ],
    specialties: ['Medical Acupuncture', 'Integrative Medicine', 'Family Medicine', 'Marma Therapy'],
  },
  practice: {
    name: 'Forbes Integrative Medicine',
    address: {
      street: '3104 E Camelback Rd Unit #7947',
      city: 'Phoenix',
      state: 'AZ',
      zipCode: '85016',
      country: 'US'
    },
    phone: '602-688-4874',
    coordinates: {
      latitude: 33.5089,
      longitude: -112.0131
    },
    hours: {
      monday: '9:00 AM - 5:00 PM',
      tuesday: '9:00 AM - 5:00 PM',
      wednesday: '9:00 AM - 5:00 PM',
      thursday: '9:00 AM - 5:00 PM',
      friday: '9:00 AM - 5:00 PM',
      saturday: 'Closed',
      sunday: 'Closed'
    }
  },
  social: {
    facebook: '',
    instagram: '',
    linkedin: '',
    youtube: ''
  }
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  canonical,
  ogImage = '/images/hero-main.webp',
  ogType = 'website',
  publishedTime,
  modifiedTime,
  author,
  section,
  tags = [],
  noIndex = false,
  noFollow = false
}: SEOProps = {}): Metadata {
  const fullTitle = title 
    ? `${title} | ${siteConfig.name}` 
    : siteConfig.defaultTitle
  
  const metaDescription = description || siteConfig.description
  
  const defaultKeywords = [
    'physician acupuncturist Scottsdale',
    'medical acupuncture Phoenix',
    'Dr Forbes MD Penn State',
    'cash pay acupuncture Paradise Valley',
    'Medicare acupuncture chronic back pain',
    'concierge medical acupuncture Camelback Corridor',
    'integrative medicine doctor Biltmore Phoenix',
    'physician led acupuncture vs traditional',
    'medical acupuncture for migraines Phoenix',
    'University Virginia trained physician Arizona',
    'evidence based acupuncture fertility IVF',
    'MD acupuncturist neuropathy treatment',
    'dry needling vs medical acupuncture',
    'HSA FSA acupuncture physician Phoenix',
    'board certified family medicine acupuncturist',
    'marma therapy needle free Phoenix'
  ]
  
  const allKeywords = [...defaultKeywords, ...keywords].join(', ')
  
  const canonicalUrl = canonical 
    ? `${siteConfig.url}${canonical}`
    : siteConfig.url
    
  const ogImageUrl = ogImage.startsWith('http') 
    ? ogImage 
    : `${siteConfig.url}${ogImage}`

  const metadata: Metadata = {
    title: fullTitle,
    description: metaDescription,
    keywords: allKeywords,
    authors: [{ name: author || siteConfig.doctor.name }],
    generator: 'Next.js',
    
    // Canonical URL
    alternates: {
      canonical: canonicalUrl
    },
    
    // Open Graph
    openGraph: {
      type: ogType,
      locale: 'en_US',
      url: canonicalUrl,
      title: fullTitle,
      description: metaDescription,
      siteName: siteConfig.name,
      images: [{
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: title || siteConfig.name
      }]
    },
    
    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: metaDescription,
      images: [ogImageUrl],
      creator: '@ForbesIntegrative' // Update with actual handle if available
    },
    
    // Robots
    robots: {
      index: !noIndex,
      follow: !noFollow,
      googleBot: {
        index: !noIndex,
        follow: !noFollow,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    },
    
    // Additional metadata for articles
    ...(ogType === 'article' && {
      openGraph: {
        type: 'article',
        locale: 'en_US',
        url: canonicalUrl,
        title: fullTitle,
        description: metaDescription,
        siteName: siteConfig.name,
        images: [{
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title || siteConfig.name
        }],
        ...(publishedTime && { publishedTime }),
        ...(modifiedTime && { modifiedTime }),
        ...(author && { 
          authors: [author]
        }),
        ...(section && { section }),
        ...(tags.length > 0 && { tags })
      }
    })
  }
  
  return metadata
}

// Helper function for breadcrumb generation
export interface BreadcrumbItem {
  name: string
  item: string
}

export function generateBreadcrumbs(items: BreadcrumbItem[]) {
  const baseItems: BreadcrumbItem[] = [
    { name: 'Home', item: siteConfig.url }
  ]
  
  return [...baseItems, ...items]
}

// Helper function for FAQ schema
export interface FAQItem {
  question: string
  answer: string
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }
}

// Helper for review/rating schema
export interface ReviewData {
  author: string
  rating: number
  reviewBody: string
  datePublished?: string
}

export function generateAggregateRatingSchema(reviews: ReviewData[]) {
  const avgRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
  
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    ratingValue: avgRating.toFixed(1),
    reviewCount: reviews.length,
    bestRating: 5,
    worstRating: 1
  }
}