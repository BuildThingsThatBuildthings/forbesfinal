import { defineField, defineType } from 'sanity'

export const appointment = defineType({
  name: 'appointment',
  title: 'Appointment Information',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Appointment Type',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'e.g., "60 minutes", "90 minutes"',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'e.g., "$200", "$150-200", "Varies by insurance"',
    }),
    defineField({
      name: 'isInitialConsult',
      title: 'Initial Consultation',
      type: 'boolean',
      initialValue: false,
      description: 'Is this a first-time appointment?',
    }),
    defineField({
      name: 'requirements',
      title: 'Requirements',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'What patients need to bring or do before the appointment',
    }),
    defineField({
      name: 'preparation',
      title: 'Preparation Instructions',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
          },
        },
      ],
    }),
    defineField({
      name: 'whatToExpect',
      title: 'What to Expect',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H4', value: 'h4' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
          },
        },
      ],
    }),
    defineField({
      name: 'afterCare',
      title: 'After Care Instructions',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
          },
        },
      ],
    }),
    defineField({
      name: 'bookingInfo',
      title: 'Booking Information',
      type: 'object',
      fields: [
        defineField({
          name: 'phone',
          title: 'Booking Phone',
          type: 'string',
        }),
        defineField({
          name: 'email',
          title: 'Booking Email',
          type: 'string',
        }),
        defineField({
          name: 'onlineBookingUrl',
          title: 'Online Booking URL',
          type: 'url',
        }),
        defineField({
          name: 'availableHours',
          title: 'Available Hours',
          type: 'text',
          rows: 2,
        }),
        defineField({
          name: 'cancellationPolicy',
          title: 'Cancellation Policy',
          type: 'text',
          rows: 3,
        }),
      ],
    }),
    defineField({
      name: 'insuranceInfo',
      title: 'Insurance Information',
      type: 'object',
      fields: [
        defineField({
          name: 'acceptedInsurance',
          title: 'Accepted Insurance',
          type: 'array',
          of: [{ type: 'string' }],
        }),
        defineField({
          name: 'selfPayOptions',
          title: 'Self-Pay Options',
          type: 'text',
          rows: 2,
        }),
        defineField({
          name: 'hsaFsaEligible',
          title: 'HSA/FSA Eligible',
          type: 'boolean',
          initialValue: true,
        }),
      ],
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
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
    defineField({
      name: 'medicalCompliance',
      title: 'Medical Compliance',
      type: 'medicalCompliance',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'duration',
      price: 'price',
    },
    prepare(selection) {
      const { title, subtitle, price } = selection
      return {
        title,
        subtitle: `${subtitle} ${price ? `- ${price}` : ''}`,
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
    }
  ],
})