// GROQ queries for Sanity CMS

// Base fragments for reusable fields
export const imageFragment = `
  _type,
  asset->{
    _id,
    url
  },
  alt,
  caption,
  hotspot
`

export const seoFragment = `
  seo {
    metaTitle,
    metaDescription,
    keywords,
    canonical,
    noIndex,
    noFollow,
    ogImage {
      ${imageFragment}
    },
    ogTitle,
    ogDescription,
    twitterCard,
    structuredDataType,
    priority,
    changeFrequency
  }
`

export const medicalComplianceFragment = `
  medicalCompliance {
    includeDisclaimer,
    customDisclaimer,
    fdaCompliant,
    evidenceBased,
    hipaaCompliant,
    requiresConsent,
    consentObtained,
    consentDate,
    disclaimerText,
    medicalReviewed,
    reviewedBy->{
      _id,
      name,
      title
    },
    reviewDate,
    nextReviewDate,
    riskLevel,
    targetAudience,
    ageRestriction,
    warningsRequired,
    references,
    lastUpdated
  }
`

export const ctaButtonFragment = `
  ctaButtons[] {
    text,
    url,
    style,
    openInNewTab
  }
`

export const sectionFragment = `
  _id,
  _type,
  type,
  title,
  subtitle,
  content,
  image {
    ${imageFragment}
  },
  images[] {
    ${imageFragment}
  },
  videoUrl,
  ${ctaButtonFragment},
  relatedServices[]->{
    _id,
    name,
    slug,
    shortDescription,
    featuredImage {
      ${imageFragment}
    }
  },
  relatedReviews[]->{
    _id,
    patientName,
    patientInitials,
    rating,
    title,
    review,
    condition,
    approved
  },
  relatedFaqs[]->{
    _id,
    question,
    answer,
    category
  },
  backgroundColor,
  spacing,
  order,
  isActive
`

// Page queries
export const pageQuery = `*[_type == "page" && slug.current == $slug && isActive == true][0] {
  _id,
  title,
  slug,
  sections[] {
    ${sectionFragment}
  },
  ${seoFragment},
  ${medicalComplianceFragment},
  publishedAt,
  isActive
}`

export const homepageQuery = `*[_type == "page" && _id == "homepage"][0] {
  _id,
  title,
  sections[] {
    ${sectionFragment}
  },
  ${seoFragment},
  ${medicalComplianceFragment},
  publishedAt,
  isActive
}`

export const allPagesQuery = `*[_type == "page" && isActive == true] | order(title asc) {
  _id,
  title,
  slug,
  ${seoFragment},
  publishedAt
}`

// Doctor queries
export const doctorQuery = `*[_type == "doctor" && _id == "dr-forbes"][0] {
  _id,
  name,
  title,
  credentials,
  profileImage {
    ${imageFragment}
  },
  bio,
  specialties,
  education,
  certifications,
  yearsOfExperience,
  philosophy,
  ${seoFragment}
}`

// Service queries
export const allServicesQuery = `*[_type == "service" && isActive == true] | order(order asc, name asc) {
  _id,
  name,
  slug,
  shortDescription,
  featuredImage {
    ${imageFragment}
  },
  conditions,
  benefits,
  duration,
  frequency,
  price,
  featured,
  order
}`

export const serviceQuery = `*[_type == "service" && slug.current == $slug && isActive == true][0] {
  _id,
  name,
  slug,
  shortDescription,
  fullDescription,
  featuredImage {
    ${imageFragment}
  },
  conditions,
  benefits,
  duration,
  frequency,
  price,
  featured,
  ${seoFragment},
  ${medicalComplianceFragment}
}`

export const featuredServicesQuery = `*[_type == "service" && isActive == true && featured == true] | order(order asc) [0...6] {
  _id,
  name,
  slug,
  shortDescription,
  featuredImage {
    ${imageFragment}
  },
  price
}`

// Blog queries
export const allBlogPostsQuery = `*[_type == "blogPost" && draft != true] | order(publishedAt desc) {
  _id,
  title,
  slug,
  author->{
    _id,
    name,
    title
  },
  publishedAt,
  excerpt,
  featuredImage {
    ${imageFragment}
  },
  categories,
  tags,
  readingTime,
  featured
}`

export const blogPostQuery = `*[_type == "blogPost" && slug.current == $slug && draft != true][0] {
  _id,
  title,
  slug,
  author->{
    _id,
    name,
    title,
    profileImage {
      ${imageFragment}
    }
  },
  publishedAt,
  excerpt,
  featuredImage {
    ${imageFragment}
  },
  categories,
  tags,
  body,
  readingTime,
  ${seoFragment},
  ${medicalComplianceFragment}
}`

export const featuredBlogPostsQuery = `*[_type == "blogPost" && draft != true && featured == true] | order(publishedAt desc) [0...3] {
  _id,
  title,
  slug,
  author->{
    name,
    title
  },
  publishedAt,
  excerpt,
  featuredImage {
    ${imageFragment}
  },
  categories,
  readingTime
}`

export const blogCategoriesQuery = `*[_type == "blogPost" && draft != true].categories[] | unique`

// Review queries
export const approvedReviewsQuery = `*[_type == "review" && approved == true && consentGiven == true] | order(reviewDate desc) {
  _id,
  patientName,
  patientInitials,
  rating,
  title,
  review,
  condition,
  treatmentDuration,
  verifiedPatient,
  reviewDate,
  source,
  location,
  beforeAfter
}`

export const featuredReviewsQuery = `*[_type == "review" && approved == true && consentGiven == true && featured == true] | order(reviewDate desc) [0...6] {
  _id,
  patientName,
  patientInitials,
  rating,
  title,
  review,
  condition,
  treatmentDuration,
  verifiedPatient,
  location
}`

export const reviewStatsQuery = `{
  "totalReviews": count(*[_type == "review" && approved == true && consentGiven == true]),
  "averageRating": math::avg(*[_type == "review" && approved == true && consentGiven == true].rating),
  "fiveStarCount": count(*[_type == "review" && approved == true && consentGiven == true && rating == 5]),
  "fourStarCount": count(*[_type == "review" && approved == true && consentGiven == true && rating == 4]),
  "threeStarCount": count(*[_type == "review" && approved == true && consentGiven == true && rating == 3]),
  "twoStarCount": count(*[_type == "review" && approved == true && consentGiven == true && rating == 2]),
  "oneStarCount": count(*[_type == "review" && approved == true && consentGiven == true && rating == 1])
}`

// FAQ queries
export const allFaqsQuery = `*[_type == "faq" && isActive == true] | order(order asc, question asc) {
  _id,
  question,
  answer,
  category,
  tags,
  featured,
  order
}`

export const faqsByCategoryQuery = `*[_type == "faq" && isActive == true && category == $category] | order(order asc, question asc) {
  _id,
  question,
  answer,
  category,
  tags,
  order
}`

export const featuredFaqsQuery = `*[_type == "faq" && isActive == true && featured == true] | order(order asc) [0...6] {
  _id,
  question,
  answer,
  category
}`

export const faqCategoriesQuery = `*[_type == "faq" && isActive == true].category | unique`

// Appointment queries
export const allAppointmentsQuery = `*[_type == "appointment" && isActive == true] | order(order asc, title asc) {
  _id,
  title,
  description,
  duration,
  price,
  isInitialConsult,
  requirements,
  bookingInfo,
  insuranceInfo,
  order
}`

export const appointmentQuery = `*[_type == "appointment" && _id == $id && isActive == true][0] {
  _id,
  title,
  description,
  duration,
  price,
  isInitialConsult,
  requirements,
  preparation,
  whatToExpect,
  afterCare,
  bookingInfo,
  insuranceInfo,
  relatedServices[]->{
    _id,
    name,
    slug,
    shortDescription
  },
  ${medicalComplianceFragment}
}`

// Site-wide queries
export const navigationQuery = `{
  "pages": *[_type == "page" && isActive == true && !(_id in ["homepage"])] | order(title asc) {
    _id,
    title,
    slug
  },
  "services": *[_type == "service" && isActive == true] | order(order asc, name asc) [0...8] {
    _id,
    name,
    slug
  }
}`

export const siteSettingsQuery = `{
  "doctor": *[_type == "doctor" && _id == "dr-forbes"][0] {
    name,
    title,
    credentials
  },
  "featuredServices": *[_type == "service" && isActive == true && featured == true] | order(order asc) [0...4] {
    name,
    slug,
    shortDescription
  }
}`