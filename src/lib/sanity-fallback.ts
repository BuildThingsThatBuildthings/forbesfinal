// Fallback data when Sanity is not configured
export const fallbackData = {
  doctor: {
    name: "Dr. Janie Forbes",
    title: "Board-Certified Family Medicine Physician",
    credentials: [
      "MD - Penn State College of Medicine",
      "Board-Certified Family Medicine",
      "Chief Resident - University of Virginia",
      "Certified in Integrated Structural Acupuncture - University of New England",
      "Certified in Marma Therapy - Ayurvedic Institute",
      "Former Assistant Professor - University of Virginia",
      "Part-time faculty - University of Arizona College of Medicine Phoenix"
    ],
    bio: "Dr. Forbes combines comprehensive medical training with specialized acupuncture expertise to provide evidence-based integrative care.",
    image: null,
    slug: "dr-forbes"
  },

  services: [
    {
      title: "Medical Acupuncture",
      slug: "medical-acupuncture",
      description: "Physician-led acupuncture combining Western medical knowledge with traditional techniques",
      featured: true
    },
    {
      title: "Chronic Pain Management",
      slug: "chronic-pain",
      description: "Comprehensive pain management using integrative medical approaches",
      featured: true
    },
    {
      title: "Migraine Treatment",
      slug: "migraines",
      description: "Evidence-based acupuncture protocols for migraine prevention and relief",
      featured: true
    }
  ],

  reviews: [
    {
      name: "Sarah M.",
      rating: 5,
      review: "Dr. Forbes' approach to medical acupuncture has been life-changing for my chronic pain.",
      approved: true,
      featured: true
    },
    {
      name: "Michael R.",
      rating: 5,
      review: "Finally found relief from migraines after years of unsuccessful treatments.",
      approved: true,
      featured: true
    }
  ],

  faqs: [
    {
      question: "What makes medical acupuncture different from traditional acupuncture?",
      answer: "Medical acupuncture is performed by licensed physicians who can integrate treatment with your complete medical care.",
      category: "general",
      featured: true
    },
    {
      question: "Do you accept insurance?",
      answer: "We operate as a cash-pay practice but Medicare covers acupuncture for chronic back pain. We provide detailed receipts for reimbursement.",
      category: "insurance",
      featured: true
    }
  ]
}

// Check if Sanity is properly configured
export const hasSanityConfig = () => {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  return projectId && projectId !== 'placeholder-project-id' && projectId !== 'your_project_id_here'
}

// Use fallback data when Sanity is not configured
export const withFallback = <T>(sanityData: T | null, fallbackKey: keyof typeof fallbackData): T => {
  if (!hasSanityConfig() || !sanityData) {
    return fallbackData[fallbackKey] as T
  }
  return sanityData
}