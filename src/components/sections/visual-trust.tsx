"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

export function VisualTrustSection({ className }: { className?: string }) {
  return (
    <section className={cn("py-20 bg-gradient-to-b from-white via-warm-stone/20 to-white", className)}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display text-charcoal-ink mb-4">
            Excellence in Integrative Medicine
          </h2>
          <p className="text-lg text-charcoal-ink/70 max-w-2xl mx-auto font-light">
            Combining traditional wisdom with modern medical expertise in the heart of Phoenix
          </p>
        </div>

        {/* Visual Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Professional Practice */}
          <div className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="aspect-square relative">
              <Image
                src="/images/secondary-image.png"
                alt="Forbes Integrative Medicine Practice"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-ink/80 via-charcoal-ink/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-display mb-2">Mobile Practice</h3>
                <p className="text-sm text-white/90 font-light">
                  Professional acupuncture services in the comfort of your space
                </p>
              </div>
            </div>
          </div>

          {/* Dr. Forbes */}
          <div className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="aspect-square relative bg-gradient-to-br from-sage-50 to-teal-50 flex items-center justify-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/images/dr-forbes-bio.png"
                  alt="Dr. Janie Forbes, MD"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center bg-gradient-to-t from-white via-white/95 to-transparent">
                <h3 className="text-xl font-display text-charcoal-ink mb-1">Dr. Janie Forbes, MD</h3>
                <p className="text-sm text-charcoal-ink/70 font-light">
                  Board-Certified • Chief Resident • Natural Medicine Expert
                </p>
              </div>
            </div>
          </div>

          {/* Brand Promise */}
          <div className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="aspect-square relative bg-gradient-to-br from-champagne-50 via-white to-sage-50 flex flex-col items-center justify-center p-8">
              <Image
                src="/images/logo-with-name.png"
                alt="Forbes Integrative Medicine"
                width={180}
                height={180}
                className="mb-6"
              />
              <div className="text-center">
                <h3 className="text-xl font-display text-charcoal-ink mb-3">Our Promise</h3>
                <p className="text-sm text-charcoal-ink/70 font-light leading-relaxed">
                  Evidence-based treatments delivered with compassion and expertise
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}