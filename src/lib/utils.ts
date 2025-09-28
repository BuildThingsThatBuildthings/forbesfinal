import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface RelatedLink {
  href: string
  title: string
  description: string
}

export function getRelatedLinks(pathname: string): RelatedLink[] {
  const allLinks: RelatedLink[] = [
    {
      href: "/medical-acupuncture",
      title: "Medical Acupuncture",
      description: "Learn about our physician-led acupuncture treatments"
    },
    {
      href: "/about",
      title: "About Dr. Forbes",
      description: "Meet our board-certified physician"
    },
    {
      href: "/conditions",
      title: "Conditions We Treat",
      description: "Explore conditions that may benefit from medical acupuncture"
    },
    {
      href: "/new-patients",
      title: "New Patients",
      description: "What to expect at your first visit"
    },
    {
      href: "/faq",
      title: "FAQs",
      description: "Common questions about medical acupuncture"
    },
    {
      href: "/contact",
      title: "Contact",
      description: "Schedule your consultation"
    }
  ]

  // Filter out the current page
  return allLinks.filter(link => link.href !== pathname)
}
