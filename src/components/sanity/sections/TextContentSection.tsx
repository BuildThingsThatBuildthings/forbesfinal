import { Section } from '@/types/sanity'
import { PortableText } from '../PortableText'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface TextContentSectionProps {
  section: Section
}

export function TextContentSection({ section }: TextContentSectionProps) {
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
        return 'py-12 md:py-16'
    }
  }

  const backgroundClass = getBackgroundColor(section.backgroundColor)
  const spacingClass = getSpacing(section.spacing)

  return (
    <section className={`${backgroundClass} ${spacingClass}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {section.subtitle && (
            <p className="text-emerald-600 text-center mb-4 font-medium">
              {section.subtitle}
            </p>
          )}
          
          {section.title && (
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-emerald-900 mb-8">
              {section.title}
            </h2>
          )}

          {section.content && section.content.length > 0 && (
            <div className="prose prose-lg prose-emerald max-w-none">
              <PortableText value={section.content} />
            </div>
          )}

          {section.ctaButtons && section.ctaButtons.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              {section.ctaButtons.map((button, index) => {
                const buttonVariant = button.style === 'primary' ? 'default' : 
                                    button.style === 'secondary' ? 'secondary' : 'outline'
                
                return (
                  <Button
                    key={index}
                    asChild
                    variant={buttonVariant}
                    size="lg"
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