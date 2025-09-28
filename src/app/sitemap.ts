import { MetadataRoute } from 'next'

// This would typically fetch dynamic content from your CMS or database
// For now, we'll use static data that matches your current structure
const staticPages = [
  {
    url: 'https://forbesintegrative.com',
    lastModified: new Date('2024-08-27'),
    changeFrequency: 'weekly' as const,
    priority: 1.0,
  },
  {
    url: 'https://forbesintegrative.com/about',
    lastModified: new Date('2024-08-27'),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  },
  {
    url: 'https://forbesintegrative.com/medical-acupuncture',
    lastModified: new Date('2024-08-27'),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  },
  {
    url: 'https://forbesintegrative.com/conditions',
    lastModified: new Date('2024-08-27'),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  },
  {
    url: 'https://forbesintegrative.com/new-patients',
    lastModified: new Date('2024-08-27'),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  },
  {
    url: 'https://forbesintegrative.com/faq',
    lastModified: new Date('2024-08-27'),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  },
  {
    url: 'https://forbesintegrative.com/reviews',
    lastModified: new Date('2024-08-27'),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  },
  {
    url: 'https://forbesintegrative.com/contact',
    lastModified: new Date('2024-08-27'),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  },
  {
    url: 'https://forbesintegrative.com/blog',
    lastModified: new Date('2024-08-27'),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  },
  // Legal pages
  {
    url: 'https://forbesintegrative.com/privacy',
    lastModified: new Date('2024-08-27'),
    changeFrequency: 'yearly' as const,
    priority: 0.3,
  },
  {
    url: 'https://forbesintegrative.com/terms',
    lastModified: new Date('2024-08-27'),
    changeFrequency: 'yearly' as const,
    priority: 0.3,
  },
  {
    url: 'https://forbesintegrative.com/cookie-policy',
    lastModified: new Date('2024-08-27'),
    changeFrequency: 'yearly' as const,
    priority: 0.3,
  },
  {
    url: 'https://forbesintegrative.com/accessibility',
    lastModified: new Date('2024-08-27'),
    changeFrequency: 'yearly' as const,
    priority: 0.3,
  },
]

// Sample blog posts - in a real app, these would be fetched from your CMS
const blogPosts = [
  {
    slug: 'medical-acupuncture-chronic-pain',
    lastModified: new Date('2024-08-27'),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  },
  {
    slug: 'acupuncture-migraine-headache-relief',
    lastModified: new Date('2024-08-27'),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  },
  {
    slug: 'sleep-disorders-acupuncture-treatment',
    lastModified: new Date('2024-08-27'),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  },
  {
    slug: 'marma-therapy-traditional-healing',
    lastModified: new Date('2024-08-27'),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  },
  {
    slug: 'integrative-medicine-approach',
    lastModified: new Date('2024-08-27'),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  },
]

export default function sitemap(): MetadataRoute.Sitemap {
  // Generate blog post URLs
  const blogUrls = blogPosts.map(post => ({
    url: `https://forbesintegrative.com/blog/${post.slug}`,
    lastModified: post.lastModified,
    changeFrequency: post.changeFrequency,
    priority: post.priority,
  }))

  // Combine static pages and blog posts
  return [
    ...staticPages,
    ...blogUrls,
  ]
}

// Alternative function for getting sitemap data (useful for other components)
export function getSitemapData() {
  return {
    staticPages,
    blogPosts,
    totalPages: staticPages.length + blogPosts.length
  }
}