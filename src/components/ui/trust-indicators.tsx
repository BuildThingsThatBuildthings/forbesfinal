"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"
import { Shield, Award, Star, Clock, Users, GraduationCap, Building, Leaf } from "lucide-react"

export function TrustIndicatorRibbon({ className }: { className?: string }) {
  return (
    <div className={cn(
      "bg-gradient-to-r from-warm-stone via-white to-soft-mist border-b border-sage-100/50",
      className
    )}>
      <div className="flex flex-wrap items-center justify-center gap-8 px-6 py-3">
        <span className="text-sm font-medium text-charcoal-ink flex items-center gap-2">
          <Shield className="w-4 h-4 text-deep-teal" />
          Board-Certified Family Medicine
        </span>
        <span className="w-px h-4 bg-sage-200" />
        <span className="text-sm font-medium text-charcoal-ink flex items-center gap-2">
          <Award className="w-4 h-4 text-deep-teal" />
          UVA Chief Resident
        </span>
        <span className="w-px h-4 bg-sage-200" />
        <span className="text-sm font-medium text-charcoal-ink flex items-center gap-2">
          <Leaf className="w-4 h-4 text-sage-500" />
          Integrative Medicine Specialist
        </span>
      </div>
    </div>
  )
}

export function TrustIndicatorGrid({ className }: { className?: string }) {
  const indicators = [
    {
      icon: Shield,
      title: "Board Certified",
      description: "Family Medicine Physician",
      color: "text-deep-teal"
    },
    {
      icon: Award,
      title: "Chief Resident",
      description: "University of Virginia",
      color: "text-sage-600"
    },
    {
      icon: Leaf,
      title: "Natural Medicine",
      description: "Evidence-based approach",
      color: "text-sage-500"
    },
    {
      icon: Star,
      title: "5-Star Reviews",
      description: "Exceptional patient care",
      color: "text-champagne-600"
    }
  ]

  return (
    <div className={cn(
      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
      className
    )}>
      {indicators.map((indicator, index) => (
        <div 
          key={index} 
          className="group text-center transition-all duration-400"
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-white/80 backdrop-blur-sm border border-sage-100 group-hover:border-sage-200 transition-all duration-300 mb-4">
            <indicator.icon className={cn("w-6 h-6", indicator.color, "transition-transform duration-300 group-hover:scale-105")} />
          </div>
          <h4 className="text-sm font-display font-medium text-charcoal-ink mb-1">
            {indicator.title}
          </h4>
          <p className="text-xs text-charcoal-ink/60 font-light">
            {indicator.description}
          </p>
        </div>
      ))}
    </div>
  )
}

export function TrustMetrics({ className }: { className?: string }) {
  const metrics = [
    { value: "Established 2023", label: "New Practice", icon: Clock },
    { value: "Mobile", label: "In-Home & Corporate", icon: Users },
    { value: "5 Star", label: "Rated", icon: Star },
    { value: "Same Week", label: "Appointments", icon: Shield }
  ]

  return (
    <div className={cn(
      "grid grid-cols-2 md:grid-cols-4 gap-8 py-12",
      className
    )}>
      {metrics.map((metric, index) => {
        const Icon = metric.icon
        return (
          <div 
            key={index} 
            className="group text-center transition-all duration-400"
          >
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-sage-50 text-sage-600 mb-3 group-hover:bg-sage-100 transition-colors duration-300">
              <Icon className="w-5 h-5" />
            </div>
            <div className="text-3xl font-display font-medium text-charcoal-ink mb-1">
              {metric.value}
            </div>
            <div className="text-sm text-charcoal-ink/70 font-light">
              {metric.label}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export function PhysicianCredentialCard({ className }: { className?: string }) {
  const credentials = [
    { text: "Board-Certified Family Medicine Physician", icon: Shield },
    { text: "Medical Acupuncture Certification", icon: Award },
    { text: "UVA Chief Resident", icon: GraduationCap },
    { text: "Marma Therapy Certified", icon: Leaf }
  ]
  
  return (
    <div className={cn(
      "bg-white rounded-lg border border-sage-100 p-8 shadow-sm",
      "transition-all duration-400 hover:shadow-lg hover:border-sage-200",
      className
    )}>
      <div className="flex items-center gap-4 mb-6">
        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-sage-200">
          <Image
            src="/images/dr-forbes-bio.png"
            alt="Dr. Janie Forbes, MD"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="text-xl font-display text-charcoal-ink">
            Dr. Janie Forbes, MD
          </h3>
          <p className="text-sm text-charcoal-ink/60 font-light">Integrative Medicine Physician</p>
        </div>
      </div>
      
      <div className="space-y-3">
        {credentials.map((credential, index) => {
          const Icon = credential.icon
          return (
            <div 
              key={index}
              className="flex items-start gap-3 group"
            >
              <div className="p-1.5 bg-sage-50 rounded group-hover:bg-sage-100 transition-colors duration-300">
                <Icon className="w-4 h-4 text-sage-600" />
              </div>
              <span className="text-sm text-charcoal-ink/80 font-light">
                {credential.text}
              </span>
            </div>
          )
        })}
      </div>
      
      <div className="mt-6 pt-6 border-t border-sage-100/50">
        <p className="text-sm text-charcoal-ink/70 italic font-light leading-relaxed">
          &ldquo;I believe in treating the whole person, not just symptoms. Together, we&apos;ll discover your body&apos;s natural capacity for healing.&rdquo;
        </p>
        <p className="text-xs text-sage-600 mt-3 text-right font-display">— Dr. Forbes</p>
      </div>
    </div>
  )
}

export function MedicalAuthorityBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/60 backdrop-blur-sm border border-sage-200/50 rounded-full hover:bg-white transition-all duration-300 group">
      <Shield className="w-4 h-4 text-deep-teal" />
      <span className="text-sm font-medium text-charcoal-ink">
        Physician-Led Integrative Medicine
      </span>
    </div>
  )
}