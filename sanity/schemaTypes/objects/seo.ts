import { defineField, defineType } from 'sanity'

export const seo = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      validation: (Rule) => 
        Rule.max(60).warning('Meta titles should be under 60 characters for optimal SEO'),
      description: 'This will override the default title for search engines',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => 
        Rule.max(160).warning('Meta descriptions should be under 160 characters for optimal SEO'),
      description: 'Brief description for search engines (150-160 characters)',
    }),
    defineField({
      name: 'keywords',
      title: 'Focus Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'Primary keywords this content should rank for',
    }),
    defineField({
      name: 'canonical',
      title: 'Canonical URL',
      type: 'url',
      description: 'Preferred URL for this content to avoid duplicate content issues',
    }),
    defineField({
      name: 'noIndex',
      title: 'No Index',
      type: 'boolean',
      initialValue: false,
      description: 'Prevent search engines from indexing this page',
    }),
    defineField({
      name: 'noFollow',
      title: 'No Follow',
      type: 'boolean',
      initialValue: false,
      description: 'Prevent search engines from following links on this page',
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          validation: (Rule) => Rule.required(),
        }
      ],
      description: 'Image for social media sharing (1200x630px recommended)',
    }),
    defineField({
      name: 'ogTitle',
      title: 'Open Graph Title',
      type: 'string',
      validation: (Rule) => Rule.max(95),
      description: 'Title for social media sharing (will use meta title if not set)',
    }),
    defineField({
      name: 'ogDescription',
      title: 'Open Graph Description',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.max(300),
      description: 'Description for social media sharing (will use meta description if not set)',
    }),
    defineField({
      name: 'twitterCard',
      title: 'Twitter Card Type',
      type: 'string',
      options: {
        list: [
          { title: 'Summary', value: 'summary' },
          { title: 'Summary Large Image', value: 'summary_large_image' },
        ],
      },
      initialValue: 'summary_large_image',
    }),
    defineField({
      name: 'structuredDataType',
      title: 'Structured Data Type',
      type: 'string',
      options: {
        list: [
          { title: 'None', value: 'none' },
          { title: 'Article', value: 'article' },
          { title: 'Medical Business', value: 'medical-business' },
          { title: 'Service', value: 'service' },
          { title: 'FAQ Page', value: 'faq-page' },
          { title: 'Review', value: 'review' },
        ],
      },
      initialValue: 'none',
      description: 'Type of structured data to include for rich snippets',
    }),
    defineField({
      name: 'priority',
      title: 'Sitemap Priority',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(1),
      initialValue: 0.5,
      description: 'Priority for XML sitemap (0.0 to 1.0)',
    }),
    defineField({
      name: 'changeFrequency',
      title: 'Change Frequency',
      type: 'string',
      options: {
        list: [
          { title: 'Always', value: 'always' },
          { title: 'Hourly', value: 'hourly' },
          { title: 'Daily', value: 'daily' },
          { title: 'Weekly', value: 'weekly' },
          { title: 'Monthly', value: 'monthly' },
          { title: 'Yearly', value: 'yearly' },
          { title: 'Never', value: 'never' },
        ],
      },
      initialValue: 'monthly',
      description: 'How frequently this content changes',
    }),
  ],
  options: {
    collapsible: true,
    collapsed: false,
  },
})