import { getClient } from './sanity'
import * as queries from './queries'
import type {
  Page,
  PageContent,
  Doctor,
  Service,
  BlogPost,
  Review,
  FAQ,
  Appointment
} from '@/types/sanity'

interface QueryOptions {
  preview?: boolean
  cache?: RequestCache
}

// Page content functions
export async function getPage(slug: string, options: QueryOptions = {}): Promise<PageContent | null> {
  const client = getClient(options.preview)
  
  try {
    const page = await client.fetch(
      queries.pageQuery,
      { slug },
      { cache: options.cache || 'force-cache', next: { revalidate: 3600 } }
    )
    return page
  } catch (error) {
    console.error('Error fetching page:', error)
    return null
  }
}

export async function getHomepage(options: QueryOptions = {}): Promise<PageContent | null> {
  const client = getClient(options.preview)
  
  try {
    const homepage = await client.fetch(
      queries.homepageQuery,
      {},
      { cache: options.cache || 'force-cache', next: { revalidate: 3600 } }
    )
    return homepage
  } catch (error) {
    console.error('Error fetching homepage:', error)
    return null
  }
}

export async function getAllPages(options: QueryOptions = {}): Promise<Page[]> {
  const client = getClient(options.preview)
  
  try {
    const pages = await client.fetch(
      queries.allPagesQuery,
      {},
      { cache: options.cache || 'force-cache', next: { revalidate: 3600 } }
    )
    return pages || []
  } catch (error) {
    console.error('Error fetching all pages:', error)
    return []
  }
}

// Doctor functions
export async function getDoctor(options: QueryOptions = {}): Promise<Doctor | null> {
  const client = getClient(options.preview)
  
  try {
    const doctor = await client.fetch(
      queries.doctorQuery,
      {},
      { cache: options.cache || 'force-cache', next: { revalidate: 7200 } }
    )
    return doctor
  } catch (error) {
    console.error('Error fetching doctor:', error)
    return null
  }
}

// Service functions
export async function getAllServices(options: QueryOptions = {}): Promise<Service[]> {
  const client = getClient(options.preview)
  
  try {
    const services = await client.fetch(
      queries.allServicesQuery,
      {},
      { cache: options.cache || 'force-cache', next: { revalidate: 3600 } }
    )
    return services || []
  } catch (error) {
    console.error('Error fetching services:', error)
    return []
  }
}

export async function getService(slug: string, options: QueryOptions = {}): Promise<Service | null> {
  const client = getClient(options.preview)
  
  try {
    const service = await client.fetch(
      queries.serviceQuery,
      { slug },
      { cache: options.cache || 'force-cache', next: { revalidate: 3600 } }
    )
    return service
  } catch (error) {
    console.error('Error fetching service:', error)
    return null
  }
}

export async function getFeaturedServices(options: QueryOptions = {}): Promise<Service[]> {
  const client = getClient(options.preview)
  
  try {
    const services = await client.fetch(
      queries.featuredServicesQuery,
      {},
      { cache: options.cache || 'force-cache', next: { revalidate: 3600 } }
    )
    return services || []
  } catch (error) {
    console.error('Error fetching featured services:', error)
    return []
  }
}

// Blog functions
export async function getAllBlogPosts(options: QueryOptions = {}): Promise<BlogPost[]> {
  const client = getClient(options.preview)
  
  try {
    const posts = await client.fetch(
      queries.allBlogPostsQuery,
      {},
      { cache: options.cache || 'force-cache', next: { revalidate: 1800 } }
    )
    return posts || []
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

export async function getBlogPost(slug: string, options: QueryOptions = {}): Promise<BlogPost | null> {
  const client = getClient(options.preview)
  
  try {
    const post = await client.fetch(
      queries.blogPostQuery,
      { slug },
      { cache: options.cache || 'force-cache', next: { revalidate: 1800 } }
    )
    return post
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

export async function getFeaturedBlogPosts(options: QueryOptions = {}): Promise<BlogPost[]> {
  const client = getClient(options.preview)
  
  try {
    const posts = await client.fetch(
      queries.featuredBlogPostsQuery,
      {},
      { cache: options.cache || 'force-cache', next: { revalidate: 1800 } }
    )
    return posts || []
  } catch (error) {
    console.error('Error fetching featured blog posts:', error)
    return []
  }
}

export async function getBlogCategories(options: QueryOptions = {}): Promise<string[]> {
  const client = getClient(options.preview)
  
  try {
    const categories = await client.fetch(
      queries.blogCategoriesQuery,
      {},
      { cache: options.cache || 'force-cache', next: { revalidate: 7200 } }
    )
    return categories || []
  } catch (error) {
    console.error('Error fetching blog categories:', error)
    return []
  }
}

// Review functions
export async function getApprovedReviews(options: QueryOptions = {}): Promise<Review[]> {
  const client = getClient(options.preview)
  
  try {
    const reviews = await client.fetch(
      queries.approvedReviewsQuery,
      {},
      { cache: options.cache || 'force-cache', next: { revalidate: 3600 } }
    )
    return reviews || []
  } catch (error) {
    console.error('Error fetching reviews:', error)
    return []
  }
}

export async function getFeaturedReviews(options: QueryOptions = {}): Promise<Review[]> {
  const client = getClient(options.preview)
  
  try {
    const reviews = await client.fetch(
      queries.featuredReviewsQuery,
      {},
      { cache: options.cache || 'force-cache', next: { revalidate: 3600 } }
    )
    return reviews || []
  } catch (error) {
    console.error('Error fetching featured reviews:', error)
    return []
  }
}

export async function getReviewStats(options: QueryOptions = {}) {
  const client = getClient(options.preview)
  
  try {
    const stats = await client.fetch(
      queries.reviewStatsQuery,
      {},
      { cache: options.cache || 'force-cache', next: { revalidate: 3600 } }
    )
    return stats
  } catch (error) {
    console.error('Error fetching review stats:', error)
    return {
      totalReviews: 0,
      averageRating: 0,
      fiveStarCount: 0,
      fourStarCount: 0,
      threeStarCount: 0,
      twoStarCount: 0,
      oneStarCount: 0,
    }
  }
}

// FAQ functions
export async function getAllFaqs(options: QueryOptions = {}): Promise<FAQ[]> {
  const client = getClient(options.preview)
  
  try {
    const faqs = await client.fetch(
      queries.allFaqsQuery,
      {},
      { cache: options.cache || 'force-cache', next: { revalidate: 3600 } }
    )
    return faqs || []
  } catch (error) {
    console.error('Error fetching FAQs:', error)
    return []
  }
}

export async function getFaqsByCategory(category: string, options: QueryOptions = {}): Promise<FAQ[]> {
  const client = getClient(options.preview)
  
  try {
    const faqs = await client.fetch(
      queries.faqsByCategoryQuery,
      { category },
      { cache: options.cache || 'force-cache', next: { revalidate: 3600 } }
    )
    return faqs || []
  } catch (error) {
    console.error('Error fetching FAQs by category:', error)
    return []
  }
}

export async function getFeaturedFaqs(options: QueryOptions = {}): Promise<FAQ[]> {
  const client = getClient(options.preview)
  
  try {
    const faqs = await client.fetch(
      queries.featuredFaqsQuery,
      {},
      { cache: options.cache || 'force-cache', next: { revalidate: 3600 } }
    )
    return faqs || []
  } catch (error) {
    console.error('Error fetching featured FAQs:', error)
    return []
  }
}

export async function getFaqCategories(options: QueryOptions = {}): Promise<string[]> {
  const client = getClient(options.preview)
  
  try {
    const categories = await client.fetch(
      queries.faqCategoriesQuery,
      {},
      { cache: options.cache || 'force-cache', next: { revalidate: 7200 } }
    )
    return categories || []
  } catch (error) {
    console.error('Error fetching FAQ categories:', error)
    return []
  }
}

// Appointment functions
export async function getAllAppointments(options: QueryOptions = {}): Promise<Appointment[]> {
  const client = getClient(options.preview)
  
  try {
    const appointments = await client.fetch(
      queries.allAppointmentsQuery,
      {},
      { cache: options.cache || 'force-cache', next: { revalidate: 3600 } }
    )
    return appointments || []
  } catch (error) {
    console.error('Error fetching appointments:', error)
    return []
  }
}

export async function getAppointment(id: string, options: QueryOptions = {}): Promise<Appointment | null> {
  const client = getClient(options.preview)
  
  try {
    const appointment = await client.fetch(
      queries.appointmentQuery,
      { id },
      { cache: options.cache || 'force-cache', next: { revalidate: 3600 } }
    )
    return appointment
  } catch (error) {
    console.error('Error fetching appointment:', error)
    return null
  }
}

// Navigation and site-wide functions
export async function getNavigation(options: QueryOptions = {}) {
  const client = getClient(options.preview)
  
  try {
    const nav = await client.fetch(
      queries.navigationQuery,
      {},
      { cache: options.cache || 'force-cache', next: { revalidate: 7200 } }
    )
    return nav
  } catch (error) {
    console.error('Error fetching navigation:', error)
    return { pages: [], services: [] }
  }
}

export async function getSiteSettings(options: QueryOptions = {}) {
  const client = getClient(options.preview)
  
  try {
    const settings = await client.fetch(
      queries.siteSettingsQuery,
      {},
      { cache: options.cache || 'force-cache', next: { revalidate: 7200 } }
    )
    return settings
  } catch (error) {
    console.error('Error fetching site settings:', error)
    return { doctor: null, featuredServices: [] }
  }
}