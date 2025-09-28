import { defineField, defineType } from 'sanity'

export const medicalCompliance = defineType({
  name: 'medicalCompliance',
  title: 'Medical Compliance',
  type: 'object',
  fields: [
    defineField({
      name: 'includeDisclaimer',
      title: 'Include Medical Disclaimer',
      type: 'boolean',
      initialValue: true,
      description: 'Include standard medical disclaimer on this content',
    }),
    defineField({
      name: 'customDisclaimer',
      title: 'Custom Disclaimer',
      type: 'text',
      rows: 4,
      description: 'Custom disclaimer text (if different from standard)',
    }),
    defineField({
      name: 'fdaCompliant',
      title: 'FDA Compliant',
      type: 'boolean',
      initialValue: true,
      description: 'Content follows FDA guidelines for medical claims',
    }),
    defineField({
      name: 'evidenceBased',
      title: 'Evidence-Based Claims',
      type: 'boolean',
      initialValue: true,
      description: 'All medical claims are supported by evidence',
    }),
    defineField({
      name: 'hipaaCompliant',
      title: 'HIPAA Compliant',
      type: 'boolean',
      initialValue: true,
      description: 'Content protects patient privacy per HIPAA',
    }),
    defineField({
      name: 'requiresConsent',
      title: 'Requires Patient Consent',
      type: 'boolean',
      initialValue: false,
      description: 'This content requires explicit patient consent to display',
    }),
    defineField({
      name: 'consentObtained',
      title: 'Patient Consent Obtained',
      type: 'boolean',
      initialValue: false,
      description: 'Patient consent has been obtained and documented',
      hidden: ({ parent }) => !parent?.requiresConsent,
    }),
    defineField({
      name: 'consentDate',
      title: 'Consent Date',
      type: 'date',
      description: 'Date patient consent was obtained',
      hidden: ({ parent }) => !parent?.consentObtained,
    }),
    defineField({
      name: 'disclaimerText',
      title: 'Disclaimer Text',
      type: 'text',
      rows: 6,
      initialValue: `This information is for educational purposes only and is not intended to replace the advice of your doctor. Forbes Integrative Medicine disclaims any liability for the decisions you make based on this information.

The information contained on this website is not intended to diagnose, treat, cure, or prevent any disease. Always consult with a qualified healthcare professional before making any changes to your healthcare routine.

Individual results may vary. No guarantee of specific results is warranted or implied and your results will depend on many factors (full disclaimer).`,
      description: 'Standard medical disclaimer text',
    }),
    defineField({
      name: 'medicalReviewed',
      title: 'Medically Reviewed',
      type: 'boolean',
      initialValue: false,
      description: 'Content has been reviewed by a medical professional',
    }),
    defineField({
      name: 'reviewedBy',
      title: 'Reviewed By',
      type: 'reference',
      to: { type: 'doctor' },
      description: 'Doctor who reviewed this content',
      hidden: ({ parent }) => !parent?.medicalReviewed,
    }),
    defineField({
      name: 'reviewDate',
      title: 'Review Date',
      type: 'date',
      description: 'Date of medical review',
      hidden: ({ parent }) => !parent?.medicalReviewed,
    }),
    defineField({
      name: 'nextReviewDate',
      title: 'Next Review Date',
      type: 'date',
      description: 'When this content should be reviewed again',
      hidden: ({ parent }) => !parent?.medicalReviewed,
    }),
    defineField({
      name: 'riskLevel',
      title: 'Medical Risk Level',
      type: 'string',
      options: {
        list: [
          { title: 'Low - General Information', value: 'low' },
          { title: 'Medium - Treatment Information', value: 'medium' },
          { title: 'High - Specific Medical Advice', value: 'high' },
        ],
      },
      initialValue: 'low',
      description: 'Risk level of medical information provided',
    }),
    defineField({
      name: 'targetAudience',
      title: 'Target Audience',
      type: 'string',
      options: {
        list: [
          { title: 'General Public', value: 'general' },
          { title: 'Current Patients', value: 'patients' },
          { title: 'Medical Professionals', value: 'professionals' },
          { title: 'Specific Condition Patients', value: 'condition-specific' },
        ],
      },
      initialValue: 'general',
    }),
    defineField({
      name: 'ageRestriction',
      title: 'Age Restriction',
      type: 'string',
      options: {
        list: [
          { title: 'All Ages', value: 'all' },
          { title: 'Adults Only (18+)', value: 'adults' },
          { title: 'Seniors (65+)', value: 'seniors' },
          { title: 'Pediatric', value: 'pediatric' },
        ],
      },
      initialValue: 'all',
    }),
    defineField({
      name: 'warningsRequired',
      title: 'Special Warnings Required',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Pregnancy Warning', value: 'pregnancy' },
          { title: 'Blood Thinner Warning', value: 'blood-thinners' },
          { title: 'Pacemaker Warning', value: 'pacemaker' },
          { title: 'Infection Risk Warning', value: 'infection-risk' },
          { title: 'Not for Emergency Use', value: 'not-emergency' },
        ],
        layout: 'tags',
      },
    }),
    defineField({
      name: 'references',
      title: 'Medical References',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Study/Reference Title',
              type: 'string',
            }),
            defineField({
              name: 'authors',
              title: 'Authors',
              type: 'string',
            }),
            defineField({
              name: 'journal',
              title: 'Journal/Source',
              type: 'string',
            }),
            defineField({
              name: 'year',
              title: 'Year',
              type: 'number',
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
            }),
            defineField({
              name: 'pmid',
              title: 'PubMed ID',
              type: 'string',
            }),
          ],
        }
      ],
    }),
    defineField({
      name: 'lastUpdated',
      title: 'Last Updated',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  options: {
    collapsible: true,
    collapsed: true,
  },
})