import { createClient } from '@sanity/client'
import { cache } from 'react'

// Fallback configuration for builds without Sanity credentials
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder-project-id'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const hasSanityConfig = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== 'placeholder-project-id'

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-08-27',
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN,
  perspective: 'published',
})

export const previewClient = createClient({
  projectId,
  dataset,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-08-27',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  perspective: 'previewDrafts',
})

export const getClient = (preview?: boolean) => {
  return preview ? previewClient : sanityClient
}

// Cached fetch functions for better performance
export const cachedClient = cache(getClient)