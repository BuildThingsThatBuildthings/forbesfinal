import { Section } from '@/types/sanity'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { PortableText } from '../PortableText'
import { urlFor } from '@/lib/sanity-image'

interface HeroSectionProps {
  section: Section
}

export function HeroSection({ section }: HeroSectionProps) {
  const getBackgroundColor = (color?: string) => {
    switch (color) {
      case 'light-gray':
        return 'bg-gray-50'
      case 'brand-light':
        return 'bg-emerald-50'
      case 'brand-primary':
        return 'bg-emerald-600 text-white'
      case 'dark':
        return 'bg-gray-900 text-white'
      default:
        return 'bg-white'
    }
  }

  const getSpacing = (spacing?: string) => {
    switch (spacing) {
      case 'none':
        return 'py-0'
      case 'small':
        return 'py-8 md:py-12'
      case 'large':
        return 'py-16 md:py-24'
      default:
        return 'py-12 md:py-20'
    }
  }

  const backgroundClass = getBackgroundColor(section.backgroundColor)
  const spacingClass = getSpacing(section.spacing)
  const hasImage = section.image?.asset?.url
  const textColorClass = section.backgroundColor === 'brand-primary' || section.backgroundColor === 'dark' 
    ? 'text-white' 
    : 'text-gray-900'

  return (
    <section className={`relative ${backgroundClass} ${spacingClass}`}>
      {/* Background Image */}
      {hasImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={urlFor(section.image!).width(1920).height(1080).quality(85).url()}
            alt={section.image!.alt || ''}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}

      <div className={`container mx-auto px-4 relative z-10 ${hasImage ? 'text-white' : ''}`}>
        <div className="max-w-4xl mx-auto text-center">
          {section.subtitle && (
            <p className={`text-lg mb-4 ${hasImage || section.backgroundColor === 'brand-primary' || section.backgroundColor === 'dark' ? 'text-emerald-200' : 'text-emerald-600'}`}>
              {section.subtitle}
            </p>
          )}
          
          {section.title && (
            <h1 className={`text-4xl md:text-6xl font-serif font-bold mb-6 ${hasImage ? 'text-white' : textColorClass}`}>
              {section.title}
            </h1>
          )}

          {section.content && section.content.length > 0 && (
            <div className={`text-xl mb-8 ${hasImage ? 'text-gray-100' : 'text-gray-600'}`}>
              <PortableText value={section.content} />
            </div>
          )}

          {section.ctaButtons && section.ctaButtons.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {section.ctaButtons.map((button, index) => {
                const buttonVariant = button.style === 'primary' ? 'default' : 
                                    button.style === 'secondary' ? 'secondary' : 'outline'
                
                return (
                  <Button
                    key={index}
                    asChild
                    variant={buttonVariant}
                    size="lg"
                    className={hasImage ? 'shadow-lg' : ''}
                  >
                    <Link
                      href={button.url}
                      target={button.openInNewTab ? '_blank' : undefined}
                      rel={button.openInNewTab ? 'noopener noreferrer' : undefined}
                    >
                      {button.text}
                    </Link>
                  </Button>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}