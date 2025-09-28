import { siteConfig } from './seo'

// Base schema types
interface BaseSchema {
  '@context': string
  '@type': string | string[]
}

// Organization Schema Generator
export function generateOrganizationSchema(): BaseSchema & Record<string, any> {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'MedicalBusiness', 'MedicalOrganization'],
    '@id': `${siteConfig.url}#organization`,
    name: siteConfig.practice.name,
    alternateName: 'Forbes Integrative Medicine Clinic',
    url: siteConfig.url,
    logo: {
      '@type': 'ImageObject',
      url: `${siteConfig.url}/images/logo-with-name.png`,
      width: 300,
      height: 100
    },
    image: `${siteConfig.url}/images/hero-main.webp`,
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
    
    // Geographic Coordinates
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.practice.coordinates.latitude,
      longitude: siteConfig.practice.coordinates.longitude
    },
    
    // Service Areas
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
      },
      {
        '@type': 'City',
        name: 'Paradise Valley',
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
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '00:00',
        closes: '00:00'
      }
    ],
    
    // Medical Specialties
    medicalSpecialty: [
      'Medical Acupuncture',
      'Integrative Medicine',
      'Pain Management', 
      'Family Medicine'
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
            name: 'Medical Acupuncture for Chronic Pain',
            description: 'Evidence-based acupuncture for chronic pain management including back pain, neck pain, and joint pain.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'MedicalTherapy',
            name: 'Migraine and Headache Treatment',
            description: 'Acupuncture therapy for migraine prevention and headache relief.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'MedicalTherapy',
            name: 'Sleep Disorder Treatment',
            description: 'Integrative approach to improving sleep quality and treating insomnia.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'MedicalTherapy',
            name: 'Stress and Anxiety Management',
            description: 'Acupuncture and integrative medicine for stress reduction and anxiety management.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'MedicalTherapy',
            name: 'Marma Therapy',
            description: 'Traditional healing therapy focusing on specific energy points for holistic wellness.'
          }
        }
      ]
    },
    
    // Payment Methods
    paymentAccepted: ['Cash', 'Check', 'Credit Card', 'HSA', 'FSA'],
    currenciesAccepted: 'USD',
    priceRange: '$$',
    
    // Reviews/Ratings (would be dynamic)
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1'
    },
    
    // Founding info
    foundingDate: '2020',
    slogan: 'Evidence-Based Integrative Medicine',
    
    // Social Media
    sameAs: Object.values(siteConfig.social).filter(Boolean)
  }
}

// Doctor/Person Schema Generator
export function generateDoctorSchema(): BaseSchema & Record<string, any> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteConfig.url}#doctor`,
    name: siteConfig.doctor.name,
    givenName: 'Dr.',
    familyName: 'Forbes',
    honorificPrefix: 'Dr.',
    jobTitle: siteConfig.doctor.title,
    description: 'Board-certified Family Medicine physician specializing in medical acupuncture and integrative medicine in Phoenix, Arizona. Former Chief Resident at University of Virginia with specialized training in Marma therapy.',
    
    // Professional Image
    image: `${siteConfig.url}/images/dr-forbes-bio.png`,
    
    // Credentials
    hasCredential: siteConfig.doctor.credentials.map(credential => ({
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Medical Certification',
      name: credential,
      recognizedBy: {
        '@type': 'Organization',
        name: 'American Board of Family Medicine'
      }
    })),
    
    // Areas of Expertise
    knowsAbout: siteConfig.doctor.specialties,
    
    // Professional Memberships
    memberOf: [
      {
        '@type': 'MedicalOrganization',
        name: 'American Board of Family Medicine'
      },
      {
        '@type': 'MedicalOrganization',
        name: 'American Academy of Medical Acupuncture'
      },
      {
        '@type': 'MedicalOrganization',
        name: 'Arizona Medical Association'
      },
      {
        '@type': 'MedicalOrganization',
        name: 'Maricopa County Medical Society'
      }
    ],
    
    // Education
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'University of Virginia',
        description: 'Family Medicine Residency - Chief Resident'
      }
    ],
    
    // Work Information
    worksFor: {
      '@type': 'MedicalBusiness',
      name: siteConfig.practice.name,
      '@id': `${siteConfig.url}#organization`
    },
    
    // Contact
    telephone: siteConfig.practice.phone,
    url: siteConfig.url,
    
    // Years of Experience
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Physician',
      occupationLocation: {
        '@type': 'City',
        name: 'Phoenix, Arizona'
      },
      skills: 'Medical Acupuncture, Integrative Medicine, Family Medicine, Pain Management, Marma Therapy'
    }
  }
}

// Local Business Schema
export function generateLocalBusinessSchema(): BaseSchema & Record<string, any> {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'MedicalBusiness', 'HealthAndBeautyBusiness'],
    '@id': `${siteConfig.url}#localbusiness`,
    name: siteConfig.practice.name,
    image: [
      `${siteConfig.url}/images/hero-main.webp`,
      `${siteConfig.url}/images/secondary-image.png`,
      `${siteConfig.url}/images/dr-forbes-bio.png`
    ],
    description: siteConfig.description,
    
    // Location
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
    
    // Contact
    telephone: siteConfig.practice.phone,
    url: siteConfig.url,
    
    // Business Details
    priceRange: '$$',
    paymentAccepted: ['Cash', 'Check', 'Credit Card', 'Insurance', 'HSA', 'FSA'],
    
    // Operating Hours  
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00'
      }
    ],
    
    // Services
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Medical Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'MedicalTherapy',
            name: 'Medical Acupuncture',
            description: 'Evidence-based acupuncture treatments'
          }
        }
      ]
    },
    
    // Ratings
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127'
    }
  }
}

// Medical Condition Schema Generator
export function generateMedicalConditionSchema(condition: {
  name: string
  description: string
  symptoms?: string[]
  treatments?: string[]
  alternativeName?: string
}): BaseSchema & Record<string, any> {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalCondition',
    name: condition.name,
    alternateName: condition.alternativeName,
    description: condition.description,
    
    ...(condition.symptoms && {
      signOrSymptom: condition.symptoms.map(symptom => ({
        '@type': 'MedicalSymptom',
        name: symptom
      }))
    }),
    
    ...(condition.treatments && {
      possibleTreatment: condition.treatments.map(treatment => ({
        '@type': 'MedicalTherapy',
        name: treatment
      }))
    }),
    
    associatedAnatomy: {
      '@type': 'AnatomicalStructure',
      name: 'Human Body'
    }
  }
}

// Medical Therapy Schema Generator  
export function generateMedicalTherapySchema(therapy: {
  name: string
  description: string
  indication?: string[]
  contraindication?: string[]
  seriousAdverseOutcome?: string[]
}): BaseSchema & Record<string, any> {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalTherapy',
    name: therapy.name,
    description: therapy.description,
    
    ...(therapy.indication && {
      indication: therapy.indication.map(indication => ({
        '@type': 'MedicalCondition',
        name: indication
      }))
    }),
    
    ...(therapy.contraindication && {
      contraindication: therapy.contraindication.map(contraindication => ({
        '@type': 'MedicalCondition', 
        name: contraindication
      }))
    }),
    
    ...(therapy.seriousAdverseOutcome && {
      seriousAdverseOutcome: therapy.seriousAdverseOutcome.map(outcome => ({
        '@type': 'MedicalEntity',
        name: outcome
      }))
    }),
    
    administrationRoute: 'Percutaneous',
    dosageForm: 'Acupuncture Needles'
  }
}

// Generate all schemas as a combined object
export function generateAllSchemas() {
  return {
    organization: generateOrganizationSchema(),
    doctor: generateDoctorSchema(), 
    localBusiness: generateLocalBusinessSchema()
  }
}

// Utility to create a script tag with schema
export function createSchemaScript(schema: object) {
  return `<script type="application/ld+json">${JSON.stringify(schema, null, 2)}</script>`
}