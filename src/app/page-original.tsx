"use client";

import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MedicalHero } from "@/components/sections/medical-hero";
import { VisualTrustSection } from "@/components/sections/visual-trust";
import { ServiceCard } from "@/components/ui/service-card";
import { TestimonialSection } from "@/components/ui/testimonial-card";
import { 
  TrustMetrics, 
  PhysicianCredentialCard 
} from "@/components/ui/trust-indicators";
import { FAQSection } from "@/components/ui/faq-accordion";
import { Button } from "@/components/ui/button";
import { FAQSchema, ReviewsSchema } from "@/components/seo/StructuredData";
import { InternalLinks } from "@/components/seo/InternalLinks";
import { 
  Activity, 
  Brain, 
  Heart, 
  Moon, 
  Sparkles, 
  Users,
  Calendar,
  ArrowRight 
} from "lucide-react";

// Sample data - will be replaced with CMS content
const services = [
  {
    id: "pain-management",
    title: "Pain Management",
    description: "Evidence-based acupuncture techniques to help patients often report reduced chronic and acute pain.",
    icon: Activity,
    benefits: [
      "Back & neck pain support",
      "Headache & migraine relief",
      "Joint & arthritis comfort"
    ]
  },
  {
    id: "sleep-wellness",
    title: "Sleep & Recovery",
    description: "Supporting better sleep patterns and recovery through targeted acupuncture treatments.",
    icon: Moon,
    benefits: [
      "Improved sleep quality",
      "Reduced sleep disturbances",
      "Enhanced recovery"
    ]
  },
  {
    id: "stress-anxiety",
    title: "Stress & Anxiety",
    description: "Helping patients manage stress and anxiety with integrative medical approaches.",
    icon: Brain,
    benefits: [
      "Stress reduction support",
      "Emotional balance",
      "Mental clarity"
    ]
  },
  {
    id: "digestive-health",
    title: "Digestive Health",
    description: "Supporting digestive wellness through traditional and modern acupuncture methods.",
    icon: Sparkles,
    benefits: [
      "Digestive comfort",
      "Metabolic support",
      "Nutritional balance"
    ]
  },
  {
    id: "womens-health",
    title: "Women's Health",
    description: "Specialized care supporting women's health concerns through integrative medicine.",
    icon: Heart,
    benefits: [
      "Hormonal balance support",
      "Fertility wellness",
      "Menopause comfort"
    ]
  },
  {
    id: "wellness-prevention",
    title: "Wellness & Prevention",
    description: "Proactive health optimization and preventive care through regular treatments.",
    icon: Users,
    benefits: [
      "Immune support",
      "Energy optimization",
      "Preventive care"
    ]
  }
];

const testimonials = [
  {
    id: "mariana-review",
    content: "I am beyond grateful for having Dr. Forbes's help on many levels! Not only she is the kindest, most compassionate Dr. I have ever encountered, her knowledge and advice improved my coughing condition and the \"down\" in which I found myself when meeting her! After only 2 sessions with her and her advice, improvements were considerable and my gratitude immense! She is detailed, gives her 100% in her practicing, the combined acupuncture and natural remedies, tailored on my needs! Dr. Janie Forbes is the model of how medicine and bedside manners should be practiced!",
    author: "Mariana",
    condition: "Coughing & Wellness",
    rating: 5,
    date: "2024",
    source: "Google Reviews"
  },
  {
    id: "robert-review", 
    content: "Dr. Forbes is fantastic. I've used her for acupuncture to help me with pain related to a lumbar fusion and a torn labrum of the hip. Her technique has helped me immensely. Love how she fuses nontraditional (Chinese) medicine with traditional western allopathic medicine. She is always striving to improve her knowledge and technique. She has also helped me with anxiety, sleep issues and depression related to the above physical problems. I'm back to being highly active and feeling great!",
    author: "Robert Stroth",
    condition: "Pain Management & Mental Health",
    rating: 5,
    date: "2024",
    source: "Google Reviews"
  }
];

const faqs = [
  {
    id: "faq-1",
    question: "What is medical acupuncture?",
    answer: "Medical acupuncture is a therapeutic method that involves inserting fine needles into specific body points, performed by a licensed physician. Dr. Forbes combines Western medical training with traditional acupuncture techniques for evidence-based integrative care."
  },
  {
    id: "faq-2",
    question: "Is acupuncture covered by insurance?",
    answer: "Coverage varies by insurance plan. We recommend contacting your insurance provider to verify acupuncture benefits. Our office can provide you with the necessary documentation for reimbursement if your plan offers out-of-network benefits."
  },
  {
    id: "faq-3",
    question: "How many treatments will I need?",
    answer: "Treatment plans are individualized based on your condition and response to therapy. Many patients report improvement within 4-6 sessions, though chronic conditions may require ongoing maintenance treatments."
  },
  {
    id: "faq-4",
    question: "What conditions can medical acupuncture help with?",
    answer: "Medical acupuncture may support various conditions including chronic pain, headaches, sleep disorders, stress, digestive issues, and women's health concerns. Dr. Forbes will evaluate your specific situation to determine if acupuncture is appropriate for you."
  },
  {
    id: "faq-5",
    question: "What should I expect during my first visit?",
    answer: "Your initial consultation includes a comprehensive medical history, physical examination, and discussion of your health goals. Dr. Forbes will create a personalized treatment plan and may perform your first acupuncture session if appropriate."
  }
];

export default function HomePage() {
  // Transform FAQ data for schema
  const faqSchemaData = faqs.map(faq => ({
    question: faq.question,
    answer: faq.answer
  }));

  // Transform testimonials for review schema
  const reviewSchemaData = testimonials.map(testimonial => ({
    author: testimonial.author,
    rating: testimonial.rating,
    reviewBody: testimonial.content,
    datePublished: `${testimonial.date}-01-01`
  }));

  return (
    <>
      <FAQSchema faqs={faqSchemaData} />
      <ReviewsSchema reviews={reviewSchemaData} />
      <Header />
      <main>
        {/* Medical Hero Section with Authority Positioning */}
        <MedicalHero />

        {/* Trust Metrics for Social Proof */}
        <section className="py-8 bg-white border-b border-slate-200">
          <TrustMetrics />
        </section>

        {/* Visual Trust Section with Images */}
        <VisualTrustSection />
        
        {/* Physician Credentials */}
        <section className="py-12 bg-slate-50">
          <div className="container mx-auto px-4">
            <PhysicianCredentialCard className="max-w-4xl mx-auto" />
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Physician-Led Medical Treatments
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Comprehensive medical acupuncture services tailored to your individual health needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {services.map((service) => (
                <ServiceCard key={service.id} {...service} />
              ))}
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-sky-600 hover:bg-sky-700 text-white"
                asChild
              >
                <a href="/conditions">
                  Explore All Conditions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Meet Dr. Janie Forbes
                </h2>
                <div className="space-y-4 text-slate-600">
                  <p className="text-lg leading-relaxed">
                    Dr. Janie Forbes is a board-certified Family Medicine physician with a passion for integrative medicine. She graduated from Penn State College of Medicine and completed her residency in Family Medicine at the University of Virginia, where she also served as chief resident, demonstrating her leadership skills and commitment to excellence in patient care.
                  </p>
                  <p className="leading-relaxed">
                    Driven by a desire to offer more holistic care, Dr. Forbes expanded her expertise by completing the Acumed Integrated Structural Acupuncture course through the University of New England College of Osteopathic Medicine. Her dedication to integrative healing extends to Ayurvedic medicine, having studied under the renowned Dr. Vasant Lad at the Ayurvedic Institute, where she earned a certification in Marma Therapy.
                  </p>
                  <p className="leading-relaxed">
                    Before relocating to sunny Phoenix, AZ with her family, Dr. Forbes served as an Assistant Professor at the University of Virginia in the Family Medicine department. Her unique blend of conventional and alternative medical knowledge allows her to provide comprehensive, patient-centered care.
                  </p>
                </div>
                <div className="mt-8">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-slate-300 hover:bg-slate-50"
                    asChild
                  >
                    <a href="/about">
                      Learn More About Dr. Forbes
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[3/4] relative rounded-lg shadow-lg overflow-hidden">
                  <Image
                    src="/images/dr-forbes-bio.png"
                    alt="Dr. Janie Forbes - Board-certified Family Medicine physician specializing in medical acupuncture"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialSection testimonials={testimonials} />

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-slate-600">
                  Find answers to common questions about medical acupuncture and our practice
                </p>
              </div>
              
              <FAQSection items={faqs} />

              <div className="text-center mt-8">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-slate-300 hover:bg-slate-50"
                  asChild
                >
                  <a href="/faq">
                    View All FAQs
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <InternalLinks />

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-teal-500 to-teal-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-4">
              Ready to Start Your Wellness Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Schedule a consultation with Dr. Forbes to discuss how medical acupuncture 
              can support your health goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-6 text-lg"
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
                className="bg-transparent text-white border-white hover:bg-white/10 px-8 py-6 text-lg"
                asChild
              >
                <a href="tel:602-688-4874">
                  Call 602-688-4874
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