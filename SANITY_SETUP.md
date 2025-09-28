# Sanity CMS Setup Guide - Forbes Integrative Medicine

This guide will help you complete the Sanity CMS integration for the Forbes Integrative Medicine website.

## 🚀 Quick Start

### 1. Environment Variables Setup

Update your `.env.local` file with your actual Sanity project details:

```env
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID="your-actual-project-id"
NEXT_PUBLIC_SANITY_DATASET="production"
NEXT_PUBLIC_SANITY_API_VERSION="2024-08-27"
SANITY_API_TOKEN="your-actual-api-token"
SANITY_PREVIEW_SECRET="your-preview-secret-key"
```

### 2. Initialize Sanity Project

Run these commands to set up your Sanity project:

```bash
# Initialize Sanity project
npx sanity init --project-id your-project-id --dataset production

# Start Sanity Studio
npm run sanity

# Deploy Sanity Studio (optional)
npm run sanity:deploy
```

### 3. Access Sanity Studio

- **Development**: http://localhost:3000/studio
- **Production**: https://yoursite.com/studio

## 📁 File Structure

```
├── sanity.config.ts                 # Main Sanity configuration
├── .env.local                       # Environment variables
├── sanity/
│   └── schemaTypes/
│       ├── index.ts                 # Schema exports
│       ├── documents/               # Document schemas
│       │   ├── page.ts             # Page content
│       │   ├── doctor.ts           # Doctor profile
│       │   ├── service.ts          # Medical services
│       │   ├── blogPost.ts         # Blog articles
│       │   ├── review.ts           # Patient testimonials
│       │   ├── faq.ts              # FAQ items
│       │   └── appointment.ts      # Appointment types
│       └── objects/                # Object schemas
│           ├── section.ts          # Page sections
│           ├── seo.ts              # SEO metadata
│           └── medicalCompliance.ts # Medical disclaimers
├── src/
│   ├── lib/
│   │   ├── sanity.ts              # Sanity client
│   │   ├── sanity-utils.ts        # Content fetching utilities
│   │   ├── sanity-image.ts        # Image URL builder
│   │   └── queries.ts             # GROQ queries
│   ├── types/
│   │   └── sanity.ts              # TypeScript types
│   ├── components/
│   │   └── sanity/
│   │       ├── PortableText.tsx   # Rich text renderer
│   │       ├── SectionRenderer.tsx # Dynamic sections
│   │       └── sections/          # Section components
│   └── app/
│       ├── studio/                # Sanity Studio route
│       └── api/sanity/            # Preview APIs
```

## 🎨 Content Management

### Creating Content

1. **Homepage Content**: 
   - Go to Studio → Pages → Homepage
   - Add sections using the drag-and-drop editor

2. **Doctor Profile**:
   - Go to Studio → Dr. Forbes Profile
   - Add bio, credentials, education, certifications

3. **Services**:
   - Go to Studio → Services
   - Create service pages with descriptions, pricing, conditions

4. **Blog Posts**:
   - Go to Studio → Blog Posts
   - Write articles with medical compliance checks

5. **Reviews**:
   - Go to Studio → Reviews & Testimonials
   - Add patient reviews with consent verification

6. **FAQs**:
   - Go to Studio → FAQs
   - Organize by categories

### Content Types Available

#### 📄 Page Schema
- Dynamic page builder with sections
- SEO optimization fields
- Medical compliance tracking

#### 👨‍⚕️ Doctor Schema  
- Professional credentials
- Education and certifications
- Biography with rich text
- Profile images with optimization

#### 🏥 Service Schema
- Service descriptions
- Conditions treated
- Pricing information
- Featured images
- Medical disclaimers

#### 📝 Blog Post Schema
- Rich text content
- Author attribution
- Categories and tags
- Featured images
- Reading time estimation
- Medical review tracking

#### ⭐ Review Schema
- Patient testimonials
- Rating system
- Condition-specific reviews
- Consent tracking (HIPAA compliant)
- Before/after descriptions

#### ❓ FAQ Schema
- Categorized questions
- Rich text answers
- Related services linking
- Medical compliance fields

#### 📅 Appointment Schema
- Appointment types
- Duration and pricing
- Preparation instructions
- Insurance information
- Booking details

## 🔧 Advanced Features

### Medical Compliance
Every content type includes medical compliance fields:
- FDA compliance tracking
- Medical disclaimers
- Patient consent verification
- HIPAA compliance
- Evidence-based claim validation
- Medical review tracking

### SEO Optimization
- Meta titles and descriptions
- Open Graph images
- Twitter card configuration
- Canonical URLs
- Structured data types
- Sitemap priority settings

### Image Optimization
- Automatic WebP conversion
- Multiple size variants
- Hotspot selection
- Alt text management
- CDN delivery

### Preview System
- Live preview mode
- Draft content viewing
- Preview URLs with authentication

## 🌐 Using CMS Content in Pages

### Basic Content Fetching
```typescript
import { getHomepage, getAllServices } from '@/lib/sanity-utils'

export default async function Page() {
  const homepage = await getHomepage()
  const services = await getAllServices()
  
  return (
    <div>
      <SectionRenderer sections={homepage?.sections || []} />
    </div>
  )
}
```

### Dynamic Routing
```typescript
// app/blog/[slug]/page.tsx
import { getBlogPost } from '@/lib/sanity-utils'

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)
  
  if (!post) {
    notFound()
  }
  
  return <PortableText value={post.body} />
}
```

## 🚀 Deployment

### Environment Setup
Ensure these environment variables are set in production:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET` 
- `SANITY_API_TOKEN`
- `SANITY_PREVIEW_SECRET`

### Caching Strategy
The CMS is configured with appropriate caching:
- Static content: 1 hour revalidation
- Blog posts: 30 minutes revalidation
- Navigation: 2 hours revalidation

### CDN Configuration
Images are automatically optimized and served from Sanity's CDN with:
- WebP format conversion
- Automatic resizing
- Quality optimization
- Hot spot cropping

## 📝 Content Guidelines

### Medical Content Requirements
1. All medical claims must be evidence-based
2. Include appropriate disclaimers
3. Get patient consent for testimonials
4. Regular medical review of content
5. FDA compliance for treatment claims

### SEO Best Practices
1. Unique meta titles under 60 characters
2. Descriptions under 160 characters  
3. Relevant keywords without stuffing
4. High-quality images with alt text
5. Internal linking strategy

## 🔄 Migration from Static to CMS

To switch from static content to CMS:

1. **Update page files**: Replace static imports with CMS data fetching
2. **Create initial content**: Populate Sanity with existing content
3. **Test preview mode**: Verify content displays correctly
4. **Update metadata**: Ensure SEO data transfers properly
5. **Switch page files**: Rename `page-sanity.tsx` to `page.tsx`

## 🛟 Troubleshooting

### Common Issues

**Studio not loading**: 
- Check environment variables
- Verify project ID and dataset name
- Ensure API token has correct permissions

**Images not displaying**:
- Add `cdn.sanity.io` to Next.js image domains
- Check image asset URLs in queries
- Verify hotspot data in fragments

**Content not updating**:
- Check caching settings
- Verify ISR revalidation times
- Clear Next.js cache if needed

**Preview mode issues**:
- Verify preview secret matches
- Check API token permissions
- Ensure preview client configuration

### Support Resources
- [Sanity Documentation](https://sanity.io/docs)
- [Next.js Integration Guide](https://sanity.io/docs/nextjs)
- [GROQ Query Language](https://sanity.io/docs/groq)

---

## 🎯 Next Steps

1. Set up your Sanity project with the provided project ID
2. Create initial content in Sanity Studio
3. Test the CMS integration thoroughly
4. Train content editors on the Studio interface
5. Set up automated backups and monitoring

The CMS is now fully integrated and ready for content management! 🚀