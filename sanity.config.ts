import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemaTypes'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder-project-id'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
  name: 'forbes-integrative-medicine',
  title: 'Forbes Integrative Medicine CMS',
  
  projectId,
  dataset,
  
  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Pages')
              .child(
                S.list()
                  .title('Pages')
                  .items([
                    S.listItem()
                      .title('Homepage')
                      .child(
                        S.document()
                          .schemaType('page')
                          .documentId('homepage')
                      ),
                    S.listItem()
                      .title('About Page')
                      .child(
                        S.document()
                          .schemaType('page')
                          .documentId('about')
                      ),
                    S.listItem()
                      .title('Services Page')
                      .child(
                        S.document()
                          .schemaType('page')
                          .documentId('services')
                      ),
                    S.listItem()
                      .title('Contact Page')
                      .child(
                        S.document()
                          .schemaType('page')
                          .documentId('contact')
                      ),
                    S.listItem()
                      .title('All Pages')
                      .child(S.documentTypeList('page').title('All Pages'))
                  ])
              ),
            S.listItem()
              .title('Dr. Forbes Profile')
              .child(
                S.document()
                  .schemaType('doctor')
                  .documentId('dr-forbes')
              ),
            S.listItem()
              .title('Services')
              .child(S.documentTypeList('service').title('Services')),
            S.listItem()
              .title('Blog Posts')
              .child(S.documentTypeList('blogPost').title('Blog Posts')),
            S.listItem()
              .title('Reviews & Testimonials')
              .child(S.documentTypeList('review').title('Reviews')),
            S.listItem()
              .title('FAQs')
              .child(S.documentTypeList('faq').title('FAQs')),
            S.listItem()
              .title('Appointments')
              .child(S.documentTypeList('appointment').title('Appointments')),
          ])
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})