import { defineField, defineType } from 'sanity'

export const doctor = defineType({
  name: 'doctor',
  title: 'Doctor Profile',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Doctor Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Professional Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'credentials',
      title: 'Credentials',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
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
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
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
      name: 'specialties',
      title: 'Specialties',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'education',
      title: 'Education',
      type: 'array',
      of: [
        defineField({
          name: 'institution',
          type: 'object',
          fields: [
            defineField({
              name: 'degree',
              title: 'Degree',
              type: 'string',
            }),
            defineField({
              name: 'school',
              title: 'School/Institution',
              type: 'string',
            }),
            defineField({
              name: 'year',
              title: 'Year',
              type: 'number',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'certifications',
      title: 'Board Certifications',
      type: 'array',
      of: [
        defineField({
          name: 'certification',
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Certification Name',
              type: 'string',
            }),
            defineField({
              name: 'issuingBody',
              title: 'Issuing Organization',
              type: 'string',
            }),
            defineField({
              name: 'year',
              title: 'Year Obtained',
              type: 'number',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'yearsOfExperience',
      title: 'Years of Experience',
      type: 'number',
    }),
    defineField({
      name: 'philosophy',
      title: 'Medical Philosophy',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
      media: 'profileImage',
    },
  },
})