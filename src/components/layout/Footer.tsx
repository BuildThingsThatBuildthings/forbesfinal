"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const navigation = {
  services: [
    { name: "Medical Acupuncture", href: "/medical-acupuncture" },
    { name: "Pain Management", href: "/conditions#pain" },
    { name: "Sleep Disorders", href: "/conditions#sleep" },
    { name: "Stress & Anxiety", href: "/conditions#stress" },
    { name: "Digestive Health", href: "/conditions#digestive" },
    { name: "Women's Health", href: "/conditions#womens-health" },
  ],
  practice: [
    { name: "About Dr. Forbes", href: "/about" },
    { name: "New Patients", href: "/new-patients" },
    { name: "FAQ", href: "/faq" },
    { name: "Reviews", href: "/reviews" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Accessibility", href: "/accessibility" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  // Schema.org LocalBusiness markup
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness", "Physician"],
    name: "Forbes Integrative Medicine",
    description:
      "Physician-led medical acupuncture clinic in Phoenix specializing in evidence-based integrative treatments.",
    url: "https://forbesintegrative.com",
    telephone: "602-688-4874",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3104 E Camelback Rd Unit #7947",
      addressLocality: "Phoenix",
      addressRegion: "AZ",
      postalCode: "85016",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.5089,
      longitude: -112.0131,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    priceRange: "$$",
    medicalSpecialty: "Acupuncture",
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Board Certification",
      recognizedBy: {
        "@type": "Organization",
        name: "American Board of Family Medicine",
      },
    },
  };

  return (
    <footer className="bg-porcelain" aria-labelledby="footer-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Company Info */}
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo-with-name.png"
                alt="Forbes Integrative Medicine"
                width={200}
                height={67}
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-ink/70 text-sm leading-relaxed max-w-md">
              Board-certified physician providing evidence-based medical
              acupuncture treatments. Helping patients achieve better health
              through integrative medicine.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-teal-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-ink">
                    3104 E Camelback Rd Unit #7947
                  </p>
                  <p className="text-sm text-ink/70">Phoenix, AZ 85016</p>
                </div>
              </div>
              <a
                href="tel:602-688-4874"
                className="flex items-center gap-3 text-sm text-ink hover:text-teal-600 transition-colors"
                onClick={() => {
                  if (typeof window !== "undefined" && window.gtag) {
                    window.gtag("event", "phone_click", {
                      device: "footer",
                      page: window.location.pathname,
                    });
                  }
                }}
              >
                <Phone className="h-5 w-5 text-teal-600" />
                <span>602-688-4874</span>
              </a>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-teal-600" />
                <span className="text-sm text-ink/70">
                  Mon-Fri: 9:00 AM - 5:00 PM
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-obsidian tracking-wider uppercase">
                  Services
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-ink/70 hover:text-teal-600 transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-obsidian tracking-wider uppercase">
                  Practice
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  {navigation.practice.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-ink/70 hover:text-teal-600 transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-obsidian tracking-wider uppercase">
                  Legal
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-ink/70 hover:text-teal-600 transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-ink/60">
              © {currentYear} Forbes Integrative Medicine. All rights reserved.
            </p>
            <p className="text-xs text-ink/50 italic max-w-lg text-center md:text-right">
              *Individual results may vary. Medical acupuncture treatments are
              intended to support overall wellness and may help with various
              conditions. Consult with Dr. Forbes for personalized treatment
              plans.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
