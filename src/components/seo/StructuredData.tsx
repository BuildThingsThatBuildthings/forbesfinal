import { siteConfig } from '@/lib/seo'

// Organization & Medical Business Schema
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'MedicalBusiness', 'Physician'],
    name: siteConfig.practice.name,
    alternateName: 'Forbes Integrative Medicine Clinic',
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.png`,
    description: siteConfig.description,
    
    // Contact Information
    telephone: siteConfig.practice.phone,
    email: 'info@forbesintegrative.com',
    
    // Address
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.practice.address.street,
      addressLocality: siteConfig.practice.address.city,
      addressRegion: siteConfig.practice.address.state,
      postalCode: siteConfig.practice.address.zipCode,
      addressCountry: siteConfig.practice.address.country
    },
    
    // Geo Coordinates
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.practice.coordinates.latitude,
      longitude: siteConfig.practice.coordinates.longitude
    },
    
    // Area Served
    areaServed: [
      {
        '@type': 'City',
        name: 'Phoenix',
        containedInPlace: {
          '@type': 'State',
          name: 'Arizona'
        }
      },
      {
        '@type': 'City',
        name: 'Scottsdale',
        containedInPlace: {
          '@type': 'State',
          name: 'Arizona'
        }
      },
      {
        '@type': 'City',
        name: 'Tempe',
        containedInPlace: {
          '@type': 'State',
          name: 'Arizona'
        }
      }
    ],
    
    // Operating Hours
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00'
      }
    ],
    
    // Medical Specialties
    medicalSpecialty: [
      'Medical Acupuncture',
      'Integrative Medicine', 
      'Pain Management',
      'Family Medicine'
    ],
    
    // Services Offered
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Medical Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'MedicalTherapy',
            name: 'Medical Acupuncture',
            description: 'Evidence-based acupuncture for pain management, sleep disorders, and wellness'
          }
        },
        {
          '@type': 'Offer', 
          itemOffered: {
            '@type': 'MedicalTherapy',
            name: 'Pain Management',
            description: 'Integrative approach to chronic and acute pain relief'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'MedicalTherapy', 
            name: 'Marma Therapy',
            description: 'Traditional healing therapy for holistic wellness'
          }
        }
      ]
    },
    
    // Review aggregate (placeholder - would be dynamic)
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1'
    },
    
    // Social Media (if available)
    sameAs: Object.values(siteConfig.social).filter(Boolean)
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  )
}

// Doctor/Person Schema
export function DoctorSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.doctor.name,
    jobTitle: siteConfig.doctor.title,
    description: 'Board-certified Family Medicine physician specializing in medical acupuncture and integrative medicine in Phoenix, Arizona.',
    
    // Professional Credentials
    hasCredential: siteConfig.doctor.credentials.map(credential => ({
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Medical Certification',
      name: credential
    })),
    
    // Medical Specialties
    knowsAbout: siteConfig.doctor.specialties,
    
    // Professional Affiliations
    memberOf: [
      {
        '@type': 'MedicalOrganization',
        name: 'American Board of Family Medicine'
      },
      {
        '@type': 'MedicalOrganization', 
        name: 'American Academy of Medical Acupuncture'
      }
    ],
    
    // Education
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'University of Virginia',
      description: 'Former Chief Resident in Family Medicine'
    },
    
    // Work Location
    worksFor: {
      '@type': 'MedicalBusiness',
      name: siteConfig.practice.name,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.practice.address.street,
        addressLocality: siteConfig.practice.address.city,
        addressRegion: siteConfig.practice.address.state,
        postalCode: siteConfig.practice.address.zipCode
      }
    },
    
    // Contact
    telephone: siteConfig.practice.phone,
    url: siteConfig.url
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  )
}

// Local Business Schema
export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': `${siteConfig.url}#organization`,
    name: siteConfig.practice.name,
    image: `${siteConfig.url}/images/clinic-exterior.jpg`,
    description: siteConfig.description,
    
    // Business Details
    priceRange: '$$',
    currenciesAccepted: 'USD',
    paymentAccepted: ['Cash', 'Check', 'Credit Card', 'Insurance'],
    
    // Location & Contact
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.practice.address.street,
      addressLocality: siteConfig.practice.address.city,
      addressRegion: siteConfig.practice.address.state,
      postalCode: siteConfig.practice.address.zipCode,
      addressCountry: siteConfig.practice.address.country
    },
    
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.practice.coordinates.latitude,
      longitude: siteConfig.practice.coordinates.longitude
    },
    
    telephone: siteConfig.practice.phone,
    url: siteConfig.url,
    
    // Hours
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '00:00',
        closes: '00:00',
        validFrom: '2024-01-01',
        validThrough: '2024-12-31'
      }
    ],
    
    // Services
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Medical Acupuncture Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'MedicalTherapy',
            name: 'Chronic Pain Management',
            alternateName: 'Acupuncture for Chronic Pain'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'MedicalTherapy',
            name: 'Migraine & Headache Treatment',
            alternateName: 'Acupuncture for Migraines'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'MedicalTherapy',
            name: 'Sleep Disorder Treatment',
            alternateName: 'Acupuncture for Insomnia'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'MedicalTherapy',
            name: 'Stress & Anxiety Management',
            alternateName: 'Acupuncture for Anxiety'
          }
        }
      ]
    },
    
    // Reviews (would be dynamic)
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1'
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  )
}

// Breadcrumb Schema Component
interface BreadcrumbSchemaProps {
  items: Array<{
    name: string
    item: string
  }>
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  )
}

// FAQ Schema Component
interface FAQSchemaProps {
  faqs: Array<{
    question: string
    answer: string
  }>
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  )
}

// Article Schema for Blog Posts
interface ArticleSchemaProps {
  title: string
  description: string
  author: string
  datePublished: string
  dateModified?: string
  image?: string
  url: string
  keywords?: string[]
}

export function ArticleSchema({ 
  title, 
  description, 
  author, 
  datePublished, 
  dateModified, 
  image,
  url,
  keywords = []
}: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    author: {
      '@type': 'Person',
      name: author
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/images/logo.png`
      }
    },
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    },
    ...(image && {
      image: {
        '@type': 'ImageObject',
        url: image,
        width: 1200,
        height: 630
      }
    }),
    ...(keywords.length > 0 && { keywords: keywords.join(', ') })
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  )
}

// Review Schema Component
interface ReviewSchemaProps {
  reviews: Array<{
    author: string
    rating: number
    reviewBody: string
    datePublished: string
  }>
}

export function ReviewsSchema({ reviews }: ReviewSchemaProps) {
  const aggregateRating = {
    '@type': 'AggregateRating',
    ratingValue: (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1),
    reviewCount: reviews.length,
    bestRating: 5,
    worstRating: 1
  }

  const reviewSchemas = reviews.map(review => ({
    '@type': 'Review',
    author: {
      '@type': 'Person', 
      name: review.author
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1
    },
    reviewBody: review.reviewBody,
    datePublished: review.datePublished
  }))

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: siteConfig.practice.name,
    aggregateRating: aggregateRating,
    review: reviewSchemas
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  )
}