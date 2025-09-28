import { PortableText as PortableTextComponent, PortableTextReactComponents } from '@portabletext/react'
import { PortableTextBlock } from '@portabletext/types'
import Image from 'next/image'
import Link from 'next/link'
import { SanityImage } from '@/types/sanity'

interface CustomPortableTextProps {
  value: PortableTextBlock[]
  className?: string
}

// Custom components for different block types
const components: Partial<PortableTextReactComponents> = {
  block: {
    h2: ({ children }) => (
      <h2 className="text-3xl font-serif font-bold text-emerald-900 mb-6 mt-8">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-serif font-bold text-emerald-800 mb-4 mt-6">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold text-emerald-700 mb-3 mt-4">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-gray-700 leading-relaxed mb-4">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-emerald-500 pl-6 my-6 italic text-gray-600 bg-emerald-50 py-4">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="ml-2">{children}</li>
    ),
    number: ({ children }) => (
      <li className="ml-2">{children}</li>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const { href, blank } = value
      const isExternal = href?.startsWith('http')
      
      if (isExternal) {
        return (
          <a
            href={href}
            target={blank ? '_blank' : '_self'}
            rel={blank ? 'noopener noreferrer' : undefined}
            className="text-emerald-600 hover:text-emerald-800 underline font-medium"
          >
            {children}
          </a>
        )
      }
      
      return (
        <Link 
          href={href}
          className="text-emerald-600 hover:text-emerald-800 underline font-medium"
        >
          {children}
        </Link>
      )
    },
    strong: ({ children }) => (
      <strong className="font-semibold text-gray-900">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic">{children}</em>
    ),
  },
  types: {
    image: ({ value }: { value: SanityImage & { caption?: string } }) => {
      const { asset, alt, caption } = value
      
      if (!asset?.url) {
        return null
      }

      return (
        <figure className="my-8">
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
            <Image
              src={asset.url}
              alt={alt || 'Image'}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            />
          </div>
          {caption && (
            <figcaption className="text-sm text-gray-600 text-center mt-2 italic">
              {caption}
            </figcaption>
          )}
        </figure>
      )
    },
  },
}

export function PortableText({ value, className = '' }: CustomPortableTextProps) {
  if (!value || value.length === 0) {
    return null
  }

  return (
    <div className={`prose prose-emerald max-w-none ${className}`}>
      <PortableTextComponent
        value={value}
        components={components}
      />
    </div>
  )
}