"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Services", href: "/medical-acupuncture" },
  { name: "Conditions", href: "/conditions" },
  { name: "About", href: "/about" },
  { name: "New Patient", href: "/new-patients" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleBookingClick = () => {
    // Track analytics event
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "hero_cta_click", {
        page: window.location.pathname,
        position: "header",
        variant: "primary",
      });
    }
    // Preserve UTM parameters when redirecting to Acubliss
    const currentParams = new URLSearchParams(window.location.search);
    const acublissUrl = new URL(
      "https://forbesintegrativemedicine.acubliss.app"
    );
    currentParams.forEach((value, key) => {
      if (key.startsWith("utm_") || key === "gclid" || key === "msclkid") {
        acublissUrl.searchParams.set(key, value);
      }
    });
    window.location.href = acublissUrl.toString();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200/50 shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-14 xl:h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center space-x-2 group transition-all duration-200 hover:scale-105"
            >
              <Image
                src="/images/logo-with-name.png"
                alt="Forbes Integrative Medicine"
                width={200}
                height={67}
                className="h-8 xl:h-10 w-auto transition-opacity duration-200 group-hover:opacity-90"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex xl:items-center xl:space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-700 hover:text-teal-600 transition-colors duration-200 px-2 py-2 rounded-md hover:bg-slate-50 whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden xl:flex xl:items-center xl:space-x-3">
            <a
              href="tel:602-688-4874"
              className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-teal-600 transition-colors duration-200 px-3 py-2 rounded-md hover:bg-slate-50"
              onClick={() => {
                if (typeof window !== "undefined" && window.gtag) {
                  window.gtag("event", "phone_click", {
                    device: "desktop",
                    page: window.location.pathname,
                  });
                }
              }}
            >
              <Phone className="h-4 w-4" />
              <span>602-688-4874</span>
            </a>
            <button
              onClick={handleBookingClick}
              className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-6 py-2.5 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200"
            >
              <Calendar className="h-4 w-4" />
              Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex xl:hidden items-center gap-3">
            {/* Mobile CTA Buttons */}
            <a
              href="tel:602-688-4874"
              className="p-2 text-slate-700 hover:text-teal-600 transition-colors duration-200 hover:bg-slate-100 rounded-lg"
              onClick={() => {
                if (typeof window !== "undefined" && window.gtag) {
                  window.gtag("event", "phone_click", {
                    device: "mobile",
                    page: window.location.pathname,
                  });
                }
              }}
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              onClick={handleBookingClick}
              className="inline-flex items-center gap-1 bg-teal-500 hover:bg-teal-600 text-white px-3 py-2 rounded-lg text-sm font-medium shadow-md transition-all duration-200"
            >
              <Calendar className="h-4 w-4" />
              Book
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="block h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "xl:hidden transition-all duration-300 ease-out transform-gpu",
            mobileMenuOpen
              ? "opacity-100 translate-y-0 max-h-screen"
              : "opacity-0 -translate-y-4 max-h-0 overflow-hidden"
          )}
        >
          <div className="space-y-2 pb-6 pt-6 bg-white/95 backdrop-blur-md rounded-b-xl mx-4 shadow-lg border border-slate-200">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-teal-600 rounded-lg transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="border-t border-slate-200/60 pt-6 space-y-3">
              <a
                href="tel:602-688-4874"
                className="flex items-center gap-3 px-4 py-3 text-base font-medium text-slate-700 hover:text-teal-600 transition-colors duration-200 rounded-lg hover:bg-slate-50"
                onClick={() => {
                  if (typeof window !== "undefined" && window.gtag) {
                    window.gtag("event", "phone_click", {
                      device: "mobile",
                      page: window.location.pathname,
                    });
                  }
                }}
              >
                <Phone className="h-5 w-5" />
                <span>602-688-4874</span>
              </a>
              <button
                onClick={handleBookingClick}
                className="w-full inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-medium shadow-md transition-all duration-200"
              >
                <Calendar className="h-5 w-5" />
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
