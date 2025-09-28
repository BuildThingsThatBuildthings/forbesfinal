"use client"

import Link from "next/link"
import { Calendar, Phone, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

interface PremiumCTAProps {
  variant?: "primary" | "secondary"
  size?: "sm" | "md" | "lg"
  href?: string
  icon?: "calendar" | "phone" | "none"
  className?: string
  children: React.ReactNode
  onClick?: () => void
  fullWidth?: boolean
}

export function PremiumCTA({
  variant = "primary",
  size = "md",
  href = "https://forbesintegrativemedicine.acubliss.app",
  icon = "calendar",
  className,
  children,
  onClick,
  fullWidth = false
}: PremiumCTAProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
  
  const variants = {
    primary: "bg-sky-600 text-white hover:bg-sky-700",
    secondary: "bg-white text-sky-600 border-2 border-sky-200 hover:bg-sky-50"
  }
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  }
  
  const iconElement = icon === "calendar" ? (
    <Calendar className="w-5 h-5 mr-2" />
  ) : icon === "phone" ? (
    <Phone className="w-5 h-5 mr-2" />
  ) : null
  
  const classes = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
    className
  )
  
  if (onClick) {
    return (
      <button onClick={onClick} className={classes}>
        {iconElement}
        {children}
      </button>
    )
  }
  
  if (href?.startsWith("tel:")) {
    return (
      <a href={href} className={classes}>
        {iconElement}
        {children}
      </a>
    )
  }
  
  return (
    <Link href={href} className={classes}>
      {iconElement}
      {children}
    </Link>
  )
}

export function PhoneCallCTA({ className }: { className?: string }) {
  return (
    <a
      href="tel:602-688-4874"
      className={cn(
        "inline-flex items-center justify-center px-6 py-3 text-base font-medium text-sky-600 bg-white border-2 border-sky-200 rounded-lg hover:bg-sky-50 transition-colors duration-200",
        className
      )}
    >
      <Phone className="w-5 h-5 mr-2" />
      Call 602-688-4874
    </a>
  )
}

export function UrgentBookingCTA({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-2", className)}>
      <div className="text-center">
        <span className="inline-block px-3 py-1 text-xs font-medium text-sky-700 bg-sky-100 rounded-full">
          Limited Availability
        </span>
      </div>
      <PremiumCTA
        variant="primary"
        size="lg"
        href="https://forbesintegrativemedicine.acubliss.app"
      >
        Book Your Consultation
      </PremiumCTA>
    </div>
  )
}

export function ConsultationTimeCTA({ className }: { className?: string }) {
  return (
    <div className={cn(
      "flex flex-col sm:flex-row gap-4 items-center justify-center p-6 bg-sky-50 rounded-lg",
      className
    )}>
      <div className="flex items-center gap-2 text-slate-700">
        <Clock className="w-5 h-5 text-sky-600" />
        <span className="font-medium">90-Minute Initial Consultation</span>
      </div>
      <PremiumCTA
        variant="primary"
        size="md"
        href="https://forbesintegrativemedicine.acubliss.app"
      >
        Reserve Appointment
      </PremiumCTA>
    </div>
  )
}