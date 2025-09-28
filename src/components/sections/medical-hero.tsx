"use client"

import { Phone, Award, Shield, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

// Sophisticated particle component with fixed positions for SSR compatibility
function LuxuryParticle({ delay, duration, position, size }: { delay: number; duration: number; position: number; size: number }) {
  return (
    <div
      className="absolute opacity-10"
      style={{
        left: `${position}%`,
        animation: `luxury-drift ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s infinite`,
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <div className="w-full h-full rounded-full bg-gradient-to-br from-sage-400 to-champagne-300" />
    </div>
  )
}

export function MedicalHero() {
  const [greeting, setGreeting] = useState("Welcome")
  
  useEffect(() => {
    const hour = new Date().getHours()
    if (hour < 12) {
      setGreeting("Good morning")
    } else if (hour < 17) {
      setGreeting("Good afternoon")
    } else {
      setGreeting("Good evening")
    }
  }, [])
  
  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      {/* Hero background image with brightness enhancement and readability overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-main.webp"
          alt="Dr. Janie Forbes performing medical acupuncture - Professional integrative medicine"
          fill
          className="object-cover object-center brightness-125 contrast-110"
          priority
          quality={95}
        />
        {/* Minimal overlay for text readability while preserving image vibrancy */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/30 to-white/40" />
        {/* Light overlay only at the top for text area */}
        <div className="absolute inset-x-0 top-0 h-2/3 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
      {/* Subtle luxury particles */}
      <div className="absolute inset-0 overflow-hidden">
        <LuxuryParticle key={0} delay={0} duration={20} position={15} size={2} />
        <LuxuryParticle key={1} delay={1.5} duration={23} position={45} size={3} />
        <LuxuryParticle key={2} delay={3} duration={26} position={75} size={2.5} />
        <LuxuryParticle key={3} delay={4.5} duration={29} position={25} size={1.5} />
        <LuxuryParticle key={4} delay={6} duration={32} position={85} size={3.5} />
      </div>
      
      {/* Elegant gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent opacity-20" />
      
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Sophisticated greeting - no emojis */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/80 backdrop-blur-sm rounded-full border border-sage-200/50 shadow-sm">
            <span className="text-sm font-medium text-charcoal-ink tracking-wide uppercase">
              {greeting}
            </span>
            <span className="w-px h-4 bg-sage-300" />
            <span className="text-sm text-charcoal-ink/80">
              Phoenix&apos;s Premier Medical Acupuncture Physician
            </span>
          </div>

          {/* Main Headline with luxury typography */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display text-charcoal-ink leading-tight tracking-tight animate-elegant-reveal">
            Medical Acupuncture
            <span className="block text-deep-teal mt-3">
              By a Board-Certified MD
            </span>
            <span className="block text-2xl md:text-3xl text-white mt-6 font-sans font-light tracking-normal">
              Evidence-Based Treatment • Physician-Led Care
            </span>
          </h1>

          {/* Sophisticated subheadline */}
          <p className="text-lg md:text-xl text-white leading-relaxed max-w-2xl mx-auto font-light">
            The only Family Medicine physician in Phoenix combining
            comprehensive medical evaluation with advanced acupuncture techniques
          </p>

          {/* Premium CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link
              href="https://forbesintegrativemedicine.acubliss.app"
              className="group inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-deep-teal rounded-lg hover:bg-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Schedule Your Consultation
            </Link>
            <a
              href="tel:602-688-4874"
              className="group inline-flex items-center justify-center px-8 py-4 text-base font-medium text-deep-teal bg-white/80 backdrop-blur-sm border border-deep-teal/20 rounded-lg hover:bg-white transition-all duration-300"
            >
              <Phone className="w-4 h-4 mr-2.5" />
              602.688.4874
            </a>
          </div>


          {/* Physician credentials - professional presentation */}
          <div className="pt-16 border-t border-sage-200/30 relative">
            <div className="absolute -top-px left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-champagne-300 to-transparent" />
            
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-sage-200">
                <Image
                  src="/images/dr-forbes-bio.png"
                  alt="Dr. Janie Forbes, MD"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <p className="text-lg text-charcoal-ink font-display">
                  Dr. Janie Forbes, MD
                </p>
                <p className="text-charcoal-ink/80 font-light">
                  Board-Certified Family Medicine
                </p>
              </div>
            </div>
            <div className="flex justify-center gap-3 mt-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-sage-50 text-sage-700 rounded-full text-xs font-medium">
                <Shield className="w-3 h-3" />
                Penn State MD
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-champagne-50 text-deep-teal rounded-full text-xs font-medium">
                <Award className="w-3 h-3" />
                UVA Chief Resident
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs font-medium">
                <Star className="w-3 h-3" />
                Medical Acupuncture
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}