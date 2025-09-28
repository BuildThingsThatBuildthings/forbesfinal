import { Section } from '@/types/sanity'
import { HeroSection } from './sections/HeroSection'
import { TextContentSection } from './sections/TextContentSection'
import { ServicesGridSection } from './sections/ServicesGridSection'
import { ReviewsSection } from './sections/ReviewsSection'
import { FAQSection } from './sections/FAQSection'
import { CTASection } from './sections/CTASection'
import { ImageTextSection } from './sections/ImageTextSection'
import { ContactSection } from './sections/ContactSection'
import { DoctorProfileSection } from './sections/DoctorProfileSection'
import { FeaturesListSection } from './sections/FeaturesListSection'
import { StatsSection } from './sections/StatsSection'
import { GallerySection } from './sections/GallerySection'
import { VideoSection } from './sections/VideoSection'
import { LocationSection } from './sections/LocationSection'

interface SectionRendererProps {
  sections: Section[]
}

export function SectionRenderer({ sections }: SectionRendererProps) {
  if (!sections || sections.length === 0) {
    return null
  }

  // Filter out inactive sections and sort by order
  const activeSections = sections
    .filter(section => section.isActive !== false)
    .sort((a, b) => (a.order || 0) - (b.order || 0))

  return (
    <div className="w-full">
      {activeSections.map((section, index) => {
        const key = section._id || `section-${index}`
        
        switch (section.type) {
          case 'hero':
            return <HeroSection key={key} section={section} />
            
          case 'textContent':
            return <TextContentSection key={key} section={section} />
            
          case 'servicesGrid':
            return <ServicesGridSection key={key} section={section} />
            
          case 'reviews':
            return <ReviewsSection key={key} section={section} />
            
          case 'faqSection':
            return <FAQSection key={key} section={section} />
            
          case 'cta':
            return <CTASection key={key} section={section} />
            
          case 'imageText':
            return <ImageTextSection key={key} section={section} />
            
          case 'contact':
            return <ContactSection key={key} section={section} />
            
          case 'doctorProfile':
            return <DoctorProfileSection key={key} section={section} />
            
          case 'featuresList':
            return <FeaturesListSection key={key} section={section} />
            
          case 'stats':
            return <StatsSection key={key} section={section} />
            
          case 'gallery':
            return <GallerySection key={key} section={section} />
            
          case 'video':
            return <VideoSection key={key} section={section} />
            
          case 'location':
            return <LocationSection key={key} section={section} />
            
          default:
            console.warn(`Unknown section type: ${section.type}`)
            return null
        }
      })}
    </div>
  )
}