"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Activity, 
  Brain, 
  Heart, 
  Moon, 
  Sparkles, 
  Users,
  Calendar,
  ArrowRight,
  CheckCircle
} from "lucide-react";

// Metadata handled by layout.tsx for client components

const conditions = [
  {
    id: "pain",
    title: "Chronic Pain Management",
    icon: Activity,
    description: "Comprehensive approach to managing chronic and acute pain conditions",
    details: [
      "Back and neck pain",
      "Arthritis and joint pain",
      "Headaches and migraines",
      "Fibromyalgia",
      "Post-surgical pain",
      "Sports injuries",
      "Sciatica",
      "TMJ disorders"
    ],
    approach: "Dr. Forbes combines traditional acupuncture points with modern trigger point therapy to address both the symptoms and underlying causes of chronic pain. Many patients report significant improvements in pain levels and mobility."
  },
  {
    id: "sleep",
    title: "Sleep Disorders",
    icon: Moon,
    description: "Restoring natural sleep patterns for better health and recovery",
    details: [
      "Insomnia",
      "Sleep maintenance issues",
      "Early morning awakening",
      "Restless leg syndrome",
      "Sleep apnea support",
      "Shift work sleep disorder",
      "Jet lag recovery",
      "Nightmares and night terrors"
    ],
    approach: "Using specific acupuncture protocols, we help regulate the body's natural sleep-wake cycle. Patients often experience improved sleep quality, easier sleep onset, and more restful nights."
  },
  {
    id: "stress",
    title: "Stress & Anxiety",
    icon: Brain,
    description: "Natural support for emotional balance and mental well-being",
    details: [
      "General anxiety",
      "Work-related stress",
      "Panic disorders",
      "PTSD support",
      "Depression support",
      "Emotional regulation",
      "Burnout recovery",
      "Performance anxiety"
    ],
    approach: "Medical acupuncture can help activate the body's relaxation response and support emotional balance. Many patients report feeling calmer, more centered, and better able to manage daily stressors."
  },
  {
    id: "digestive",
    title: "Digestive Health",
    icon: Sparkles,
    description: "Supporting digestive wellness and metabolic balance",
    details: [
      "IBS (Irritable Bowel Syndrome)",
      "Acid reflux/GERD",
      "Constipation",
      "Bloating and gas",
      "Nausea",
      "Appetite regulation",
      "Crohn's disease support",
      "Ulcerative colitis support"
    ],
    approach: "Acupuncture can help regulate digestive function and reduce inflammation in the gut. Patients frequently report improvements in digestive comfort and regular bowel function."
  },
  {
    id: "womens-health",
    title: "Women's Health",
    icon: Heart,
    description: "Specialized care for women's unique health needs",
    details: [
      "Menstrual irregularities",
      "PMS symptoms",
      "Menopause symptoms",
      "Fertility support",
      "Pregnancy discomfort",
      "PCOS management",
      "Endometriosis support",
      "Hormonal balance"
    ],
    approach: "Dr. Forbes provides specialized acupuncture treatments tailored to women's health concerns, supporting hormonal balance and reproductive wellness throughout all life stages."
  },
  {
    id: "wellness",
    title: "General Wellness",
    icon: Users,
    description: "Preventive care and overall health optimization",
    details: [
      "Immune system support",
      "Energy and fatigue",
      "Allergies and sinusitis",
      "Weight management support",
      "Smoking cessation",
      "Addiction recovery support",
      "Athletic performance",
      "Post-COVID recovery"
    ],
    approach: "Regular acupuncture treatments can support overall wellness, boost immune function, and help maintain optimal health. Many patients use acupuncture as part of their preventive health routine."
  }
];

export default function ConditionsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-porcelain to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-obsidian mb-6">
                Conditions We Support
              </h1>
              <p className="text-xl md:text-2xl text-ink/80 mb-8">
                Evidence-based medical acupuncture for a wide range of health concerns
              </p>
              <p className="text-lg text-ink/70 mb-8 max-w-2xl mx-auto">
                Dr. Forbes combines Western medical expertise with traditional acupuncture 
                to provide comprehensive care for various conditions. Each treatment plan 
                is personalized to your specific needs and health goals.
              </p>
              <Button
                size="lg"
                className="bg-teal-500 hover:bg-teal-600 text-white"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    const currentParams = new URLSearchParams(window.location.search);
                    const acublissUrl = new URL('https://forbesintegrativemedicine.acubliss.app');
                    currentParams.forEach((value, key) => {
                      if (key.startsWith('utm_') || key === 'gclid' || key === 'msclkid') {
                        acublissUrl.searchParams.set(key, value);
                      }
                    });
                    window.location.href = acublissUrl.toString();
                  }
                }}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Your Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* Conditions Sections */}
        {conditions.map((condition, index) => (
          <section
            key={condition.id}
            id={condition.id}
            className={`py-16 md:py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-porcelain'}`}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center">
                      <condition.icon className="h-6 w-6 text-teal-600" />
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl text-obsidian">
                      {condition.title}
                    </h2>
                  </div>
                  <p className="text-lg text-ink/70 mb-6">
                    {condition.description}
                  </p>
                  <p className="text-ink/70 leading-relaxed mb-6">
                    {condition.approach}
                  </p>
                  <p className="text-sm text-muted-foreground italic mb-8">
                    *Individual results may vary. Acupuncture supports wellness but does not cure medical conditions.
                  </p>
                  <Button
                    className="bg-teal-500 hover:bg-teal-600 text-white"
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        const currentParams = new URLSearchParams(window.location.search);
                        const acublissUrl = new URL('https://forbesintegrativemedicine.acubliss.app');
                        currentParams.forEach((value, key) => {
                          if (key.startsWith('utm_') || key === 'gclid' || key === 'msclkid') {
                            acublissUrl.searchParams.set(key, value);
                          }
                        });
                        window.location.href = acublissUrl.toString();
                      }
                    }}
                  >
                    Book Treatment
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <h3 className="font-medium text-obsidian mb-4">Specific Conditions Treated:</h3>
                  <div className="space-y-2">
                    {condition.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                        <span className="text-ink/70">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Important Information */}
        <section className="py-16 md:py-24 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl text-obsidian mb-6 text-center">
                Important Information
              </h2>
              <div className="bg-porcelain rounded-lg p-6 md:p-8 space-y-4">
                <p className="text-ink/70 leading-relaxed">
                  <strong className="text-obsidian">Medical Evaluation:</strong> Dr. Forbes 
                  conducts a comprehensive medical evaluation during your initial consultation 
                  to determine if acupuncture is appropriate for your condition.
                </p>
                <p className="text-ink/70 leading-relaxed">
                  <strong className="text-obsidian">Integrated Care:</strong> Medical acupuncture 
                  works best as part of an integrated treatment approach. Dr. Forbes coordinates 
                  with your healthcare team to ensure comprehensive care.
                </p>
                <p className="text-ink/70 leading-relaxed">
                  <strong className="text-obsidian">Treatment Duration:</strong> The number of 
                  sessions needed varies by individual and condition. Many patients report 
                  improvement within 4-6 sessions, though some conditions may require ongoing care.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Medical acupuncture is intended to support overall wellness and may help with 
                  various conditions. Results vary by individual. Always consult with a healthcare 
                  provider for medical conditions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-teal-500 to-teal-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
              Find Relief Through Medical Acupuncture
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Schedule a consultation to discuss how medical acupuncture can address your specific health concerns
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-teal-600 hover:bg-gray-100"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    const currentParams = new URLSearchParams(window.location.search);
                    const acublissUrl = new URL('https://forbesintegrativemedicine.acubliss.app');
                    currentParams.forEach((value, key) => {
                      if (key.startsWith('utm_') || key === 'gclid' || key === 'msclkid') {
                        acublissUrl.searchParams.set(key, value);
                      }
                    });
                    window.location.href = acublissUrl.toString();
                  }
                }}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Your Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent text-white border-white hover:bg-white/10"
                asChild
              >
                <a href="/medical-acupuncture">
                  Learn About Our Approach
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}