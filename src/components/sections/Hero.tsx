"use client";

import { Button } from "@/components/ui/button";
import { Calendar, Award, Shield, Clock } from "lucide-react";

export function Hero() {
  const handleBookingClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'hero_cta_click', {
        page: window.location.pathname,
        position: 'hero',
        variant: 'primary'
      });
    }
    const currentParams = new URLSearchParams(window.location.search);
    const acublissUrl = new URL('https://forbesintegrativemedicine.acubliss.app');
    currentParams.forEach((value, key) => {
      if (key.startsWith('utm_') || key === 'gclid' || key === 'msclkid') {
        acublissUrl.searchParams.set(key, value);
      }
    });
    window.location.href = acublissUrl.toString();
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-porcelain to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-obsidian leading-tight">
                Physician-Led Medical Acupuncture
              </h1>
              <p className="text-xl md:text-2xl text-ink/80">
                Evidence-based integrative treatments for pain, sleep, and wellness in Phoenix
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-ink/70 leading-relaxed">
                Dr. Forbes combines board-certified Family Medicine expertise with advanced acupuncture techniques to help patients often report reduced pain, improved sleep, and enhanced well-being.
              </p>
              <p className="text-sm text-muted-foreground italic">
                *Individual results may vary. Treatment outcomes depend on various factors.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-teal-500" />
                <span className="text-sm font-medium text-ink">Board Certified</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="h-5 w-5 text-teal-500" />
                <span className="text-sm font-medium text-ink">UVA Chief Resident</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-teal-500" />
                <span className="text-sm font-medium text-ink">Same Week Appointments</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleBookingClick}
                size="lg"
                className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-lg font-medium shadow-md hover:shadow-lg transition-all"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Book Your Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-obsidian/20 hover:bg-obsidian/5 px-8 py-6 text-lg"
                asChild
              >
                <a href="tel:602-688-4874">
                  Call 602-688-4874
                </a>
              </Button>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-teal-50 to-champagne-100 rounded-2xl shadow-xl">
              {/* Professional photo will go here */}
              <div className="absolute inset-0 flex items-center justify-center text-teal-600/20">
                <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-champagne-200/30 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-teal-200/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}