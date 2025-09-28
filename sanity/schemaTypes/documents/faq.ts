import { defineField, defineType } from 'sanity'

export const faq = defineType({
  name: 'faq',
  title: 'Frequently Asked Question',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H4', value: 'h4' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  }
                ]
              }
            ]
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'General', value: 'general' },
          { title: 'Acupuncture', value: 'acupuncture' },
          { title: 'Appointments', value: 'appointments' },
          { title: 'Insurance & Billing', value: 'insurance-billing' },
          { title: 'Conditions & Treatments', value: 'conditions-treatments' },
          { title: 'What to Expect', value: 'what-to-expect' },
          { title: 'Safety & Side Effects', value: 'safety-side-effects' },
          { title: 'Medical History', value: 'medical-history' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'featured',
      title: 'Featured FAQ',
      type: 'boolean',
      initialValue: false,
      description: 'Display this FAQ prominently',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
    }),
    defineField({
      name: 'relatedServices',
      title: 'Related Services',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'service' },
        },
      ],
    }),
    defineField({
      name: 'lastUpdated',
      title: 'Last Updated',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'medicalCompliance',
      title: 'Medical Compliance',
      type: 'medicalCompliance',
    }),
  ],
  preview: {
    select: {
      title: 'question',
      subtitle: 'category',
      featured: 'featured',
    },
    prepare(selection) {
      const { title, subtitle, featured } = selection
      return {
        title,
        subtitle: `${subtitle || 'General'} ${featured ? '⭐' : ''}`,
      }
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [
        { field: 'order', direction: 'asc' }
      ]
    },
    {
      title: 'Category',
      name: 'categoryAsc',
      by: [
        { field: 'category', direction: 'asc' }
      ]
    },
  ],
})