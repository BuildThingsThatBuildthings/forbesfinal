import React from 'react';

// Export all section components
export { HeroSection } from './HeroSection'
export { TextContentSection } from './TextContentSection'

// Define section interface
interface SectionProps {
  section: {
    title?: string;
    [key: string]: any;
  };
}

// Placeholder exports for sections to be implemented
export const ServicesGridSection = ({ section }: SectionProps) => (
  <div className="py-12 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="text-center">
        <h2 className="text-3xl font-serif font-bold mb-4">{section.title || 'Services'}</h2>
        <p className="text-gray-600">Services grid section - to be implemented</p>
      </div>
    </div>
  </div>
)

export const ReviewsSection: React.FC<SectionProps> = ({ section }) => (
  <div className="py-12">
    <div className="container mx-auto px-4">
      <div className="text-center">
        <h2 className="text-3xl font-serif font-bold mb-4">{section.title || 'Reviews'}</h2>
        <p className="text-gray-600">Reviews section - to be implemented</p>
      </div>
    </div>
  </div>
)

export const FAQSection: React.FC<SectionProps> = ({ section }) => (
  <div className="py-12 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="text-center">
        <h2 className="text-3xl font-serif font-bold mb-4">{section.title || 'FAQ'}</h2>
        <p className="text-gray-600">FAQ section - to be implemented</p>
      </div>
    </div>
  </div>
)

export const CTASection: React.FC<SectionProps> = ({ section }) => (
  <div className="py-12 bg-emerald-600">
    <div className="container mx-auto px-4">
      <div className="text-center text-white">
        <h2 className="text-3xl font-serif font-bold mb-4">{section.title || 'Call to Action'}</h2>
        <p>CTA section - to be implemented</p>
      </div>
    </div>
  </div>
)

export const ImageTextSection: React.FC<SectionProps> = ({ section }) => (
  <div className="py-12">
    <div className="container mx-auto px-4">
      <div className="text-center">
        <h2 className="text-3xl font-serif font-bold mb-4">{section.title || 'Image with Text'}</h2>
        <p className="text-gray-600">Image with text section - to be implemented</p>
      </div>
    </div>
  </div>
)

export const ContactSection: React.FC<SectionProps> = ({ section }) => (
  <div className="py-12 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="text-center">
        <h2 className="text-3xl font-serif font-bold mb-4">{section.title || 'Contact'}</h2>
        <p className="text-gray-600">Contact section - to be implemented</p>
      </div>
    </div>
  </div>
)

export const DoctorProfileSection: React.FC<SectionProps> = ({ section }) => (
  <div className="py-12">
    <div className="container mx-auto px-4">
      <div className="text-center">
        <h2 className="text-3xl font-serif font-bold mb-4">{section.title || 'Doctor Profile'}</h2>
        <p className="text-gray-600">Doctor profile section - to be implemented</p>
      </div>
    </div>
  </div>
)

export const FeaturesListSection: React.FC<SectionProps> = ({ section }) => (
  <div className="py-12 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="text-center">
        <h2 className="text-3xl font-serif font-bold mb-4">{section.title || 'Features'}</h2>
        <p className="text-gray-600">Features list section - to be implemented</p>
      </div>
    </div>
  </div>
)

export const StatsSection: React.FC<SectionProps> = ({ section }) => (
  <div className="py-12">
    <div className="container mx-auto px-4">
      <div className="text-center">
        <h2 className="text-3xl font-serif font-bold mb-4">{section.title || 'Statistics'}</h2>
        <p className="text-gray-600">Stats section - to be implemented</p>
      </div>
    </div>
  </div>
)

export const GallerySection: React.FC<SectionProps> = ({ section }) => (
  <div className="py-12 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="text-center">
        <h2 className="text-3xl font-serif font-bold mb-4">{section.title || 'Gallery'}</h2>
        <p className="text-gray-600">Gallery section - to be implemented</p>
      </div>
    </div>
  </div>
)

export const VideoSection: React.FC<SectionProps> = ({ section }) => (
  <div className="py-12">
    <div className="container mx-auto px-4">
      <div className="text-center">
        <h2 className="text-3xl font-serif font-bold mb-4">{section.title || 'Video'}</h2>
        <p className="text-gray-600">Video section - to be implemented</p>
      </div>
    </div>
  </div>
)

export const LocationSection: React.FC<SectionProps> = ({ section }) => (
  <div className="py-12 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="text-center">
        <h2 className="text-3xl font-serif font-bold mb-4">{section.title || 'Location'}</h2>
        <p className="text-gray-600">Location section - to be implemented</p>
      </div>
    </div>
  </div>
)