"use client"

import { LucideIcon, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  benefits?: string[];
  className?: string;
}

// Luxury color mapping for services
const getServiceAccent = (title: string) => {
  if (title.includes("Pain")) return "sage"
  if (title.includes("Sleep")) return "teal"
  if (title.includes("Stress")) return "sage"
  if (title.includes("Digestive")) return "champagne"
  if (title.includes("Women")) return "teal"
  return "sage"
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  benefits,
  className,
}: ServiceCardProps) {
  const accent = getServiceAccent(title)
  
  return (
    <div
      className={cn(
        "group relative bg-white rounded-lg border border-sage-100 p-8",
        "hover:shadow-xl transition-all duration-400 transform hover:-translate-y-1",
        "hover:border-sage-200 cursor-pointer overflow-hidden",
        className
      )}
    >
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-warm-stone/0 to-warm-stone/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Professional icon presentation */}
      <div className="mb-6 relative z-10">
        <div className={cn(
          "inline-flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-400",
          accent === "sage" && "bg-sage-50 text-sage-600 group-hover:bg-sage-100",
          accent === "teal" && "bg-teal-50 text-teal-600 group-hover:bg-teal-100",
          accent === "champagne" && "bg-champagne-50 text-champagne-600 group-hover:bg-champagne-100",
          "group-hover:scale-105"
        )}>
          <Icon className="h-6 w-6" />
        </div>
      </div>

      {/* Content with luxury typography */}
      <div className="relative z-10">
        <h3 className="font-display text-2xl text-charcoal-ink mb-3 group-hover:text-deep-teal transition-colors duration-300">
          {title}
        </h3>
        <p className="text-charcoal-ink/70 leading-relaxed mb-4 font-light">
          {description}
        </p>

        {/* Professional benefit presentation */}
        {benefits && benefits.length > 0 && (
          <ul className="space-y-2.5">
            {benefits.map((benefit, index) => (
              <li 
                key={index} 
                className="flex items-start gap-3 text-sm text-charcoal-ink/60 transition-all duration-300 group-hover:text-charcoal-ink/80"
              >
                <CheckCircle className="w-4 h-4 text-sage-500 mt-0.5 flex-shrink-0" />
                <span className="font-light">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Elegant accent line */}
      <div className={cn(
        "absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-500",
        accent === "sage" && "bg-gradient-to-r from-transparent via-sage-400 to-transparent",
        accent === "teal" && "bg-gradient-to-r from-transparent via-teal-400 to-transparent",
        accent === "champagne" && "bg-gradient-to-r from-transparent via-champagne-400 to-transparent",
        "opacity-0 group-hover:opacity-100"
      )} />
    </div>
  );
}