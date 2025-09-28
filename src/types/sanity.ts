import { PortableTextBlock } from '@portabletext/types'

// Base types
export interface SanityImage {
  _type: 'image'
  asset: {
    _id: string
    url: string
  }
  alt?: string
  caption?: string
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
}

export interface SEO {
  metaTitle?: string
  metaDescription?: string
  keywords?: string[]
  canonical?: string
  noIndex?: boolean
  noFollow?: boolean
  ogImage?: SanityImage
  ogTitle?: string
  ogDescription?: string
  twitterCard?: 'summary' | 'summary_large_image'
  structuredDataType?: string
  priority?: number
  changeFrequency?: string
}

export interface MedicalCompliance {
  includeDisclaimer?: boolean
  customDisclaimer?: string
  fdaCompliant?: boolean
  evidenceBased?: boolean
  hipaaCompliant?: boolean
  requiresConsent?: boolean
  consentObtained?: boolean
  consentDate?: string
  disclaimerText?: string
  medicalReviewed?: boolean
  reviewedBy?: Doctor
  reviewDate?: string
  nextReviewDate?: string
  riskLevel?: 'low' | 'medium' | 'high'
  targetAudience?: 'general' | 'patients' | 'professionals' | 'condition-specific'
  ageRestriction?: 'all' | 'adults' | 'seniors' | 'pediatric'
  warningsRequired?: string[]
  references?: {
    title?: string
    authors?: string
    journal?: string
    year?: number
    url?: string
    pmid?: string
  }[]
  lastUpdated?: string
}

export interface CTAButton {
  text: string
  url: string
  style: 'primary' | 'secondary' | 'outline'
  openInNewTab?: boolean
}

export interface Section {
  _id: string
  _type: 'section'
  type: 'hero' | 'textContent' | 'servicesGrid' | 'reviews' | 'faqSection' | 'cta' | 
        'imageText' | 'contact' | 'doctorProfile' | 'featuresList' | 'stats' | 
        'gallery' | 'video' | 'location'
  title?: string
  subtitle?: string
  content?: PortableTextBlock[]
  image?: SanityImage
  images?: SanityImage[]
  videoUrl?: string
  ctaButtons?: CTAButton[]
  relatedServices?: Service[]
  relatedReviews?: Review[]
  relatedFaqs?: FAQ[]
  backgroundColor?: string
  spacing?: 'none' | 'small' | 'medium' | 'large'
  order?: number
  isActive?: boolean
}

// Document types
export interface Page {
  _id: string
  _type: 'page'
  title: string
  slug: {
    current: string
  }
  sections?: Section[]
  seo?: SEO
  medicalCompliance?: MedicalCompliance
  publishedAt?: string
  isActive?: boolean
}

export interface Doctor {
  _id: string
  _type: 'doctor'
  name: string
  title: string
  credentials?: string[]
  profileImage?: SanityImage
  bio?: PortableTextBlock[]
  specialties?: string[]
  education?: {
    degree?: string
    school?: string
    year?: number
  }[]
  certifications?: {
    name?: string
    issuingBody?: string
    year?: number
  }[]
  yearsOfExperience?: number
  philosophy?: string
  seo?: SEO
}

export interface Service {
  _id: string
  _type: 'service'
  name: string
  slug: {
    current: string
  }
  shortDescription: string
  fullDescription?: PortableTextBlock[]
  featuredImage?: SanityImage
  conditions?: string[]
  benefits?: string[]
  duration?: string
  frequency?: string
  price?: string
  isActive?: boolean
  featured?: boolean
  order?: number
  seo?: SEO
  medicalCompliance?: MedicalCompliance
}

export interface BlogPost {
  _id: string
  _type: 'blogPost'
  title: string
  slug: {
    current: string
  }
  author: Doctor
  publishedAt: string
  excerpt: string
  featuredImage?: SanityImage
  categories?: string[]
  tags?: string[]
  body?: PortableTextBlock[]
  readingTime?: number
  featured?: boolean
  draft?: boolean
  seo?: SEO
  medicalCompliance?: MedicalCompliance
}

export interface Review {
  _id: string
  _type: 'review'
  patientName: string
  patientInitials?: string
  rating: 1 | 2 | 3 | 4 | 5
  title?: string
  review: string
  condition?: string
  treatmentDuration?: string
  verifiedPatient?: boolean
  consentGiven: boolean
  reviewDate: string
  source?: 'google' | 'website' | 'email' | 'phone' | 'in-person'
  featured?: boolean
  approved?: boolean
  location?: string
  beforeAfter?: {
    before?: string
    after?: string
  }
}

export interface FAQ {
  _id: string
  _type: 'faq'
  question: string
  answer: PortableTextBlock[]
  category: 'general' | 'acupuncture' | 'appointments' | 'insurance-billing' | 
           'conditions-treatments' | 'what-to-expect' | 'safety-side-effects' | 
           'medical-history'
  tags?: string[]
  featured?: boolean
  order?: number
  relatedServices?: Service[]
  lastUpdated?: string
  isActive?: boolean
  medicalCompliance?: MedicalCompliance
}

export interface Appointment {
  _id: string
  _type: 'appointment'
  title: string
  description?: string
  duration: string
  price?: string
  isInitialConsult?: boolean
  requirements?: string[]
  preparation?: PortableTextBlock[]
  whatToExpect?: PortableTextBlock[]
  afterCare?: PortableTextBlock[]
  bookingInfo?: {
    phone?: string
    email?: string
    onlineBookingUrl?: string
    availableHours?: string
    cancellationPolicy?: string
  }
  insuranceInfo?: {
    acceptedInsurance?: string[]
    selfPayOptions?: string
    hsaFsaEligible?: boolean
  }
  relatedServices?: Service[]
  isActive?: boolean
  order?: number
  medicalCompliance?: MedicalCompliance
}

// Query result types
export interface PageContent extends Page {
  sections: (Section & {
    relatedServices?: Service[]
    relatedReviews?: Review[]
    relatedFaqs?: FAQ[]
  })[]
}