import { defineField, defineType } from "sanity";

export const section = defineType({
  name: "section",
  title: "Page Section",
  type: "object",
  fields: [
    defineField({
      name: "type",
      title: "Section Type",
      type: "string",
      options: {
        list: [
          { title: "Hero Section", value: "hero" },
          { title: "Text Content", value: "textContent" },
          { title: "Services Grid", value: "servicesGrid" },
          { title: "Reviews/Testimonials", value: "reviews" },
          { title: "FAQ Section", value: "faqSection" },
          { title: "Call to Action", value: "cta" },
          { title: "Image with Text", value: "imageText" },
          { title: "Contact Information", value: "contact" },
          { title: "Doctor Profile", value: "doctorProfile" },
          { title: "Features List", value: "featuresList" },
          { title: "Stats/Numbers", value: "stats" },
          { title: "Gallery", value: "gallery" },
          { title: "Video", value: "video" },
          { title: "Map/Location", value: "location" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Section Title",
      type: "string",
    }),
    defineField({
      name: "subtitle",
      title: "Section Subtitle",
      type: "string",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
            ],
            annotations: [
              {
                title: "URL",
                name: "link",
                type: "object",
                fields: [
                  {
                    title: "URL",
                    name: "href",
                    type: "url",
                  },
                  {
                    title: "Open in new tab",
                    name: "blank",
                    type: "boolean",
                    initialValue: false,
                  },
                ],
              },
            ],
          },
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "caption",
              type: "string",
              title: "Caption",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "image",
      title: "Section Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
    }),
    defineField({
      name: "images",
      title: "Multiple Images",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "caption",
              type: "string",
              title: "Caption",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "videoUrl",
      title: "Video URL",
      type: "url",
      description: "YouTube, Vimeo, or direct video file URL",
    }),
    defineField({
      name: "ctaButtons",
      title: "Call to Action Buttons",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "text",
              title: "Button Text",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "url",
              title: "Button URL",
              type: "url",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "style",
              title: "Button Style",
              type: "string",
              options: {
                list: [
                  { title: "Primary", value: "primary" },
                  { title: "Secondary", value: "secondary" },
                  { title: "Outline", value: "outline" },
                ],
              },
              initialValue: "primary",
            }),
            defineField({
              name: "openInNewTab",
              title: "Open in New Tab",
              type: "boolean",
              initialValue: false,
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "relatedServices",
      title: "Related Services",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "service" },
        },
      ],
    }),
    defineField({
      name: "relatedReviews",
      title: "Related Reviews",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "review" },
        },
      ],
    }),
    defineField({
      name: "relatedFaqs",
      title: "Related FAQs",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "faq" },
        },
      ],
    }),
    defineField({
      name: "backgroundColor",
      title: "Background Color",
      type: "string",
      options: {
        list: [
          { title: "Default (White)", value: "default" },
          { title: "Light Gray", value: "light-gray" },
          { title: "Brand Light", value: "brand-light" },
          { title: "Brand Primary", value: "brand-primary" },
          { title: "Dark", value: "dark" },
        ],
      },
      initialValue: "default",
    }),
    defineField({
      name: "spacing",
      title: "Section Spacing",
      type: "string",
      options: {
        list: [
          { title: "None", value: "none" },
          { title: "Small", value: "small" },
          { title: "Medium (Default)", value: "medium" },
          { title: "Large", value: "large" },
        ],
      },
      initialValue: "medium",
    }),
    defineField({
      name: "order",
      title: "Section Order",
      type: "number",
      description: "Lower numbers appear first",
    }),
    defineField({
      name: "isActive",
      title: "Active",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      type: "type",
      title: "title",
      order: "order",
    },
    prepare(selection) {
      const { type, title, order } = selection;
      const typeLabels = {
        hero: "🦸 Hero",
        textContent: "📝 Text",
        servicesGrid: "🏥 Services",
        reviews: "⭐ Reviews",
        faqSection: "❓ FAQ",
        cta: "📞 CTA",
        imageText: "🖼️ Image+Text",
        contact: "📧 Contact",
        doctorProfile: "👨‍⚕️ Doctor",
        featuresList: "✅ Features",
        stats: "📊 Stats",
        gallery: "🖼️ Gallery",
        video: "🎥 Video",
        location: "📍 Location",
      };
      return {
        title: title || (typeLabels as any)[type] || type,
        subtitle: `Order: ${order || "Not set"}`,
      };
    },
  },
});
