import { defineField, defineType } from 'sanity'

export const review = defineType({
  name: 'review',
  title: 'Patient Review',
  type: 'document',
  fields: [
    defineField({
      name: 'patientName',
      title: 'Patient Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'patientInitials',
      title: 'Patient Initials (for display)',
      type: 'string',
      description: 'e.g., "J.S." for privacy',
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5),
      options: {
        list: [
          { title: '1 Star', value: 1 },
          { title: '2 Stars', value: 2 },
          { title: '3 Stars', value: 3 },
          { title: '4 Stars', value: 4 },
          { title: '5 Stars', value: 5 },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'title',
      title: 'Review Title',
      type: 'string',
    }),
    defineField({
      name: 'review',
      title: 'Review Text',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'condition',
      title: 'Condition Treated',
      type: 'string',
      description: 'What condition or issue was the patient treated for?',
    }),
    defineField({
      name: 'treatmentDuration',
      title: 'Treatment Duration',
      type: 'string',
      description: 'How long was the treatment period? e.g., "3 months", "6 sessions"',
    }),
    defineField({
      name: 'verifiedPatient',
      title: 'Verified Patient',
      type: 'boolean',
      initialValue: false,
      description: 'Check if this is a verified patient review',
    }),
    defineField({
      name: 'consentGiven',
      title: 'Patient Consent Given',
      type: 'boolean',
      initialValue: false,
      description: 'Patient has given consent to use this review publicly',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'reviewDate',
      title: 'Review Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'source',
      title: 'Review Source',
      type: 'string',
      options: {
        list: [
          { title: 'Google Reviews', value: 'google' },
          { title: 'Website Form', value: 'website' },
          { title: 'Email', value: 'email' },
          { title: 'Phone Interview', value: 'phone' },
          { title: 'In-Person', value: 'in-person' },
        ],
      },
    }),
    defineField({
      name: 'featured',
      title: 'Featured Review',
      type: 'boolean',
      initialValue: false,
      description: 'Display this review prominently',
    }),
    defineField({
      name: 'approved',
      title: 'Approved for Display',
      type: 'boolean',
      initialValue: false,
      description: 'Review has been approved for public display',
    }),
    defineField({
      name: 'location',
      title: 'Patient Location (optional)',
      type: 'string',
      description: 'City, State for geographic diversity',
    }),
    defineField({
      name: 'beforeAfter',
      title: 'Before/After Description',
      type: 'object',
      fields: [
        defineField({
          name: 'before',
          title: 'Before Treatment',
          type: 'text',
          rows: 2,
        }),
        defineField({
          name: 'after',
          title: 'After Treatment',
          type: 'text',
          rows: 2,
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'patientName',
      subtitle: 'condition',
      rating: 'rating',
      approved: 'approved',
    },
    prepare(selection) {
      const { title, subtitle, rating, approved } = selection
      const stars = '★'.repeat(rating) + '☆'.repeat(5 - rating)
      return {
        title: `${title} - ${stars}`,
        subtitle: `${subtitle || 'General'} ${approved ? '✅' : '⏳'}`,
      }
    },
  },
  orderings: [
    {
      title: 'Review Date, New',
      name: 'reviewDateDesc',
      by: [
        { field: 'reviewDate', direction: 'desc' }
      ]
    },
    {
      title: 'Rating, High to Low',
      name: 'ratingDesc',
      by: [
        { field: 'rating', direction: 'desc' }
      ]
    },
  ],
})