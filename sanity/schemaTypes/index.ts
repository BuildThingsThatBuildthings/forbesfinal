// Schema types
import { page } from './documents/page'
import { doctor } from './documents/doctor'
import { service } from './documents/service'
import { blogPost } from './documents/blogPost'
import { review } from './documents/review'
import { faq } from './documents/faq'
import { appointment } from './documents/appointment'

// Object types
import { section } from './objects/section'
import { seo } from './objects/seo'
import { medicalCompliance } from './objects/medicalCompliance'

export const schemaTypes = [
  // Documents
  page,
  doctor,
  service,
  blogPost,
  review,
  faq,
  appointment,
  
  // Objects
  section,
  seo,
  medicalCompliance,
]