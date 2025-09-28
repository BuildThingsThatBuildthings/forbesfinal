import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { sanityClient } from './sanity'

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// Helper function to get optimized image URLs
export function getImageUrl(
  source: SanityImageSource,
  width?: number,
  height?: number,
  quality?: number
): string {
  let image = urlFor(source)
  
  if (width) image = image.width(width)
  if (height) image = image.height(height)
  if (quality) image = image.quality(quality)
  
  return image.url()
}

// Common image transformations
export const imageTransforms = {
  // Hero images
  hero: (source: SanityImageSource) =>
    urlFor(source)
      .width(1920)
      .height(1080)
      .quality(85)
      .format('webp')
      .url(),

  // Card thumbnails
  card: (source: SanityImageSource) =>
    urlFor(source)
      .width(400)
      .height(300)
      .quality(80)
      .format('webp')
      .url(),

  // Profile images
  profile: (source: SanityImageSource) =>
    urlFor(source)
      .width(300)
      .height(300)
      .quality(85)
      .format('webp')
      .url(),

  // Blog featured images
  blogFeatured: (source: SanityImageSource) =>
    urlFor(source)
      .width(800)
      .height(400)
      .quality(80)
      .format('webp')
      .url(),

  // Gallery thumbnails
  galleryThumb: (source: SanityImageSource) =>
    urlFor(source)
      .width(200)
      .height(200)
      .quality(75)
      .format('webp')
      .url(),

  // Open Graph images
  og: (source: SanityImageSource) =>
    urlFor(source)
      .width(1200)
      .height(630)
      .quality(85)
      .format('jpg')
      .url(),
}