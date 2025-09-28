import Head from 'next/head'
import { siteConfig } from '@/lib/seo'

interface SEOHeadProps {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  ogType?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  keywords?: string[]
  noIndex?: boolean
  noFollow?: boolean
  structuredData?: object
  children?: React.ReactNode
}

export function SEOHead({
  title,
  description,
  canonical,
  ogImage = '/images/og-default.jpg',
  ogType = 'website',
  publishedTime,
  modifiedTime,
  author,
  keywords = [],
  noIndex = false,
  noFollow = false,
  structuredData,
  children
}: SEOHeadProps) {
  const pageTitle = title 
    ? `${title} | ${siteConfig.name}` 
    : siteConfig.defaultTitle
  
  const pageDescription = description || siteConfig.description
  
  const defaultKeywords = [
    'medical acupuncture Phoenix',
    'Dr Forbes',
    'integrative medicine Phoenix',
    'physician acupuncturist',
    'pain management Phoenix',
    'acupuncture clinic Phoenix'
  ]
  
  const allKeywords = [...defaultKeywords, ...keywords].join(', ')
  
  const canonicalUrl = canonical 
    ? `${siteConfig.url}${canonical}`
    : siteConfig.url
    
  const ogImageUrl = ogImage.startsWith('http') 
    ? ogImage 
    : `${siteConfig.url}${ogImage}`

  const robotsContent = [
    noIndex ? 'noindex' : 'index',
    noFollow ? 'nofollow' : 'follow'
  ].join(', ')

  return (
    <Head>
      {/* Basic meta tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={allKeywords} />
      <meta name="author" content={author || siteConfig.doctor.name} />
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={`${robotsContent}, max-snippet:-1, max-image-preview:large, max-video-preview:-1`} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph tags */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title || siteConfig.name} />
      <meta property="og:locale" content="en_US" />
      
      {/* Article-specific Open Graph tags */}
      {ogType === 'article' && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {author && <meta property="article:author" content={author} />}
          <meta property="article:section" content="Health" />
          <meta property="article:tag" content="Medical Acupuncture" />
          <meta property="article:tag" content="Integrative Medicine" />
          <meta property="article:tag" content="Phoenix Healthcare" />
        </>
      )}
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={ogImageUrl} />
      <meta name="twitter:image:alt" content={title || siteConfig.name} />
      <meta name="twitter:site" content="@ForbesIntegrative" />
      <meta name="twitter:creator" content="@DrForbesMD" />
      
      {/* Additional meta tags for medical/health sites */}
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      <meta name="revisit-after" content="7 days" />
      <meta name="classification" content="Medical, Healthcare, Acupuncture, Integrative Medicine" />
      
      {/* Geographic meta tags */}
      <meta name="geo.region" content="US-AZ" />
      <meta name="geo.placename" content="Phoenix, Arizona" />
      <meta name="geo.position" content="33.5089,-112.0131" />
      <meta name="ICBM" content="33.5089,-112.0131" />
      
      {/* Medical/Health specific tags */}
      <meta name="health.topic" content="Acupuncture" />
      <meta name="health.topic" content="Pain Management" />
      <meta name="health.topic" content="Integrative Medicine" />
      <meta name="medical.specialty" content="Family Medicine" />
      <meta name="medical.specialty" content="Medical Acupuncture" />
      
      {/* Structured data */}
      {structuredData && (
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
      
      {/* Favicon and app icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#14b8a6" />
      <meta name="msapplication-TileColor" content="#14b8a6" />
      
      {/* DNS prefetch and preconnect for performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Additional children (custom meta tags, scripts, etc.) */}
      {children}
    </Head>
  )
}

// Utility component for common page types
export function HomePageSEO() {
  return (
    <SEOHead
      title="Forbes Integrative Medicine | Medical Acupuncture Phoenix"
      description="Physician-led medical acupuncture clinic in Phoenix. Board-certified Family Medicine physician specializing in evidence-based integrative treatments for pain, sleep, and wellness."
      canonical="/"
      keywords={['Phoenix acupuncture', 'medical acupuncturist Phoenix', 'pain management Phoenix']}
    />
  )
}

export function AboutPageSEO() {
  return (
    <SEOHead
      title="About Dr. Forbes | Board-Certified Family Medicine & Medical Acupuncture Phoenix"
      description="Meet Dr. Forbes, board-certified Family Medicine physician and medical acupuncturist in Phoenix. UVA Chief Resident with Marma therapy certification and 15+ years experience."
      canonical="/about"
      keywords={['Dr Forbes Phoenix', 'board certified family medicine Phoenix', 'UVA medicine']}
    />
  )
}

export function ServicesSEO() {
  return (
    <SEOHead
      title="Medical Acupuncture Services Phoenix | Forbes Integrative Medicine"
      description="Comprehensive medical acupuncture treatments in Phoenix. Evidence-based integrative medicine for pain management, sleep disorders, stress, and wellness optimization."
      canonical="/medical-acupuncture"
      keywords={['medical acupuncture Phoenix', 'acupuncture services Phoenix', 'integrative medicine Phoenix']}
    />
  )
}

export function ConditionsSEO() {
  return (
    <SEOHead
      title="Conditions Treated | Medical Acupuncture Phoenix | Forbes Integrative Medicine"
      description="Medical acupuncture treatment for chronic pain, migraines, sleep disorders, stress, digestive issues, and women's health in Phoenix, Arizona."
      canonical="/conditions"
      keywords={['acupuncture for pain Phoenix', 'migraine treatment Phoenix', 'sleep disorder treatment Phoenix']}
    />
  )
}

export function FAQSEO() {
  return (
    <SEOHead
      title="FAQ | Medical Acupuncture Questions Phoenix | Forbes Integrative Medicine"
      description="Get answers to common questions about medical acupuncture, insurance coverage, safety, treatments, and appointments at Forbes Integrative Medicine in Phoenix."
      canonical="/faq"
      keywords={['medical acupuncture FAQ Phoenix', 'acupuncture questions Phoenix', 'acupuncture safety Phoenix']}
    />
  )
}