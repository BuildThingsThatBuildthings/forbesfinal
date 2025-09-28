import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { FAQSection } from "@/components/ui/faq-accordion";
import {
  MapPin,
  Clock,
  Phone,
  Shield,
  Star,
  Award,
  Sparkles,
  CalendarCheck,
  Heart,
  Brain,
  Activity
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Concierge Medical Acupuncture Paradise Valley | Cash Pay Physician Acupuncturist",
  description: "Premium physician-led medical acupuncture for Paradise Valley. Dr. Forbes MD offers concierge integrative medicine for chronic pain, migraines, wellness. Penn State MD, cash-pay luxury healthcare near Camelback Mountain.",
  keywords: "concierge medical acupuncture Paradise Valley, cash pay acupuncture Paradise Valley, physician acupuncturist Camelback Mountain, luxury medical acupuncture Phoenix, integrative medicine Paradise Valley Arizona, MD acupuncturist near Scottsdale, premium healthcare Paradise Valley, executive wellness acupuncture, private pay physician Phoenix",
};

const paradiseValleyFaqs = [
  {
    id: "pv-1",
    question: "What makes Forbes Integrative ideal for Paradise Valley residents seeking premium healthcare?",
    answer: "Dr. Forbes provides concierge-level medical acupuncture without membership fees. As a Penn State MD and former UVA Chief Resident, she offers the medical expertise Paradise Valley residents expect, combined with personalized, unhurried care. Our cash-pay model ensures you receive optimal treatment without insurance limitations."
  },
  {
    id: "pv-2",
    question: "How is cash-pay medical acupuncture different from insurance-based care?",
    answer: "Cash-pay allows us to provide 90-minute initial consultations, personalized treatment protocols, and direct physician access without the constraints of insurance approvals. Paradise Valley patients appreciate the flexibility to receive exactly the care they need, when they need it, without bureaucratic delays or limitations."
  },
  {
    id: "pv-3",
    question: "What exclusive services do you offer for Paradise Valley's executive community?",
    answer: "We specialize in executive stress management, performance optimization, and longevity medicine. Our protocols address the unique health challenges of high-achieving professionals, including chronic stress, cognitive performance, sleep optimization, and preventive wellness strategies."
  },
  {
    id: "pv-4",
    question: "How convenient is your location for Paradise Valley residents?",
    answer: "Our office at 3104 E Camelback Rd is just 8 minutes from Paradise Valley, situated in the prestigious Camelback Corridor. We offer flexible scheduling, including early morning and evening appointments to accommodate busy executives and professionals."
  },
  {
    id: "pv-5",
    question: "Can you coordinate with my other Paradise Valley physicians?",
    answer: "Absolutely. As an MD, Dr. Forbes can communicate directly with your medical team, order diagnostic tests when needed, and ensure seamless integration with your existing healthcare. This physician-to-physician coordination is a key advantage of choosing a medical acupuncturist."
  }
];

const luxuryBenefits = [
  {
    iconName: "Shield",
    title: "Medical Expertise",
    description: "Board-certified MD ensures comprehensive medical evaluation and safety"
  },
  {
    iconName: "Sparkles",
    title: "Concierge Experience",
    description: "Unhurried appointments in a serene, professional environment"
  },
  {
    iconName: "Heart",
    title: "Personalized Protocols",
    description: "Custom treatment plans tailored to your unique health goals"
  },
  {
    iconName: "Brain",
    title: "Evidence-Based",
    description: "University-trained approach using proven medical acupuncture techniques"
  }
];

// Icon mapping for Paradise Valley page
const getIcon = (iconName: string) => {
  const icons: { [key: string]: any } = {
    Shield,
    Sparkles,
    Heart,
    Brain
  };
  return icons[iconName];
};

const executiveConditions = [
  {
    title: "Executive Burnout & Stress",
    description: "Comprehensive protocols for high-stress professionals",
    link: "/conditions/stress-management"
  },
  {
    title: "Cognitive Performance",
    description: "Enhance mental clarity, focus, and decision-making",
    link: "/conditions/cognitive-enhancement"
  },
  {
    title: "Sleep Optimization",
    description: "Address insomnia and improve sleep quality naturally",
    link: "/conditions/sleep-disorders"
  },
  {
    title: "Chronic Pain Management",
    description: "Advanced techniques for persistent pain conditions",
    link: "/conditions/chronic-pain"
  },
  {
    title: "Longevity & Anti-Aging",
    description: "Integrative approaches to healthy aging and vitality",
    link: "/conditions/wellness"
  },
  {
    title: "Migraine Prevention",
    description: "Reduce frequency and severity of debilitating headaches",
    link: "/conditions/chronic-migraines"
  }
];

export default function ParadiseValleyPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-white via-sand-50 to-sage-50">
        <div className="absolute inset-0 bg-[url('/images/pattern-organic.svg')] opacity-3" />
        <div className="container relative mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-teal-50 rounded-full">
              <span className="text-teal-700 font-medium">Serving Paradise Valley Since 2009</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-playfair text-charcoal mb-6">
              Concierge Medical Acupuncture for Paradise Valley
            </h1>
            <p className="text-xl text-stone-600 mb-8 max-w-3xl mx-auto">
              Experience physician-led integrative medicine with Dr. Forbes MD.
              Premium cash-pay healthcare combining Western medical expertise with
              evidence-based acupuncture for Paradise Valley's discerning residents.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                <CalendarCheck className="w-5 h-5 mr-2" />
                Book Paradise Valley Consultation
              </Button>
              <Button size="lg" variant="outline">
                <Phone className="w-5 h-5 mr-2" />
                Private Line: 602-688-4874
              </Button>
            </div>

            {/* Credentials Bar */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-teal-600" />
                <span>Penn State MD</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-teal-600" />
                <span>UVA Chief Resident</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-teal-600" />
                <span>Board-Certified Family Medicine</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-playfair text-charcoal mb-4 text-center">
            Premium Healthcare Without Compromise
          </h2>
          <p className="text-center text-stone-600 mb-12 max-w-3xl mx-auto">
            Paradise Valley residents choose Dr. Forbes for an elevated medical experience that
            prioritizes results, privacy, and personalized attention.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {luxuryBenefits.map((benefit, index) => {
              const IconComponent = getIcon(benefit.iconName);
              return (
                <div key={index} className="text-center p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-50 to-sage-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    {IconComponent && <IconComponent className="w-8 h-8 text-teal-600" />}
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-stone-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Executive Wellness Section */}
      <section className="py-16 bg-gradient-to-b from-white to-sand-50/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-playfair text-charcoal mb-6">
                Executive Wellness & Performance Medicine
              </h2>
              <p className="text-stone-600 mb-6">
                Paradise Valley's business leaders and professionals trust Dr. Forbes for
                comprehensive integrative care that addresses the unique demands of
                high-performance lifestyles.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Activity className="w-5 h-5 text-teal-600 mr-3 mt-1" />
                  <div>
                    <p className="font-semibold">Stress & Burnout Recovery</p>
                    <p className="text-sm text-stone-600">Reset your nervous system and restore balance</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Brain className="w-5 h-5 text-teal-600 mr-3 mt-1" />
                  <div>
                    <p className="font-semibold">Cognitive Enhancement</p>
                    <p className="text-sm text-stone-600">Improve focus, clarity, and mental performance</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Heart className="w-5 h-5 text-teal-600 mr-3 mt-1" />
                  <div>
                    <p className="font-semibold">Longevity Medicine</p>
                    <p className="text-sm text-stone-600">Proactive strategies for healthy aging</p>
                  </div>
                </div>
              </div>

              <Link href="/medical-acupuncture">
                <Button className="bg-teal-600 hover:bg-teal-700">
                  Explore Executive Wellness Programs
                </Button>
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-6">Conditions We Specialize In</h3>
              <div className="space-y-3">
                {executiveConditions.map((condition, index) => (
                  <Link key={index} href={condition.link} className="block p-3 hover:bg-sage-50 rounded-lg transition-colors">
                    <p className="font-medium text-charcoal">{condition.title}</p>
                    <p className="text-sm text-stone-600">{condition.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-playfair text-charcoal mb-4 text-center">
            Transparent Cash-Pay Pricing
          </h2>
          <p className="text-center text-stone-600 mb-12 max-w-3xl mx-auto">
            Our cash-pay model eliminates insurance restrictions, allowing for comprehensive
            treatment plans tailored to Paradise Valley patients' specific needs.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-b from-sage-50 to-white p-8 rounded-lg border border-sage-100">
              <h3 className="text-xl font-semibold mb-4">Initial Consultation</h3>
              <p className="text-3xl font-bold text-teal-700 mb-4">$350</p>
              <p className="text-sm text-stone-600 mb-4">90-minute comprehensive evaluation</p>
              <ul className="space-y-2 text-sm">
                <li>✓ Complete medical history</li>
                <li>✓ Physical examination</li>
                <li>✓ Personalized treatment plan</li>
                <li>✓ First acupuncture session</li>
              </ul>
            </div>

            <div className="bg-gradient-to-b from-teal-50 to-white p-8 rounded-lg border-2 border-teal-200 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-teal-600 text-white px-4 py-1 rounded-full text-sm">
                Most Popular
              </div>
              <h3 className="text-xl font-semibold mb-4">6-Session Package</h3>
              <p className="text-3xl font-bold text-teal-700 mb-4">$900</p>
              <p className="text-sm text-stone-600 mb-4">Save $150 on follow-ups</p>
              <ul className="space-y-2 text-sm">
                <li>✓ Six 45-minute sessions</li>
                <li>✓ Flexible scheduling</li>
                <li>✓ Progress monitoring</li>
                <li>✓ Treatment adjustments</li>
              </ul>
            </div>

            <div className="bg-gradient-to-b from-sand-50 to-white p-8 rounded-lg border border-sand-100">
              <h3 className="text-xl font-semibold mb-4">Follow-Up Session</h3>
              <p className="text-3xl font-bold text-teal-700 mb-4">$175</p>
              <p className="text-sm text-stone-600 mb-4">45-minute treatment session</p>
              <ul className="space-y-2 text-sm">
                <li>✓ Progress evaluation</li>
                <li>✓ Treatment refinement</li>
                <li>✓ Lifestyle guidance</li>
                <li>✓ Ongoing support</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-teal-50 rounded-lg p-6">
              <p className="font-semibold mb-2">Payment Options & Benefits</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span>✓ HSA/FSA Eligible</span>
                <span>✓ Credit Cards Accepted</span>
                <span>✓ Medicare for Chronic Back Pain</span>
                <span>✓ Detailed Receipts Provided</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-gradient-to-b from-white to-sage-50/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-playfair text-charcoal mb-8 text-center">
            Conveniently Located in the Camelback Corridor
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Minutes from Paradise Valley</h3>

              <div className="space-y-3 mb-6">
                <p className="flex items-start">
                  <MapPin className="w-5 h-5 text-teal-600 mr-3 mt-1" />
                  <span>
                    <strong>3104 E Camelback Rd Unit #7947</strong><br />
                    Phoenix, AZ 85016<br />
                    <span className="text-sm text-stone-600">Camelback Corridor - 8 minutes from Paradise Valley</span>
                  </span>
                </p>
                <p className="flex items-center">
                  <Phone className="w-5 h-5 text-teal-600 mr-3" />
                  <span>(602) 688-4874</span>
                </p>
                <p className="flex items-center">
                  <Clock className="w-5 h-5 text-teal-600 mr-3" />
                  <span>Flexible scheduling available</span>
                </p>
              </div>

              <div className="border-t pt-4">
                <p className="font-semibold mb-2">Nearby Landmarks:</p>
                <ul className="text-sm text-stone-600 space-y-1">
                  <li>• 2 miles from Camelback Mountain</li>
                  <li>• 5 minutes from Biltmore Fashion Park</li>
                  <li>• 8 minutes from Paradise Valley Mall</li>
                  <li>• 10 minutes from Scottsdale Fashion Square</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Why Paradise Valley Chooses Dr. Forbes</h3>
              <div className="space-y-3">
                <div className="bg-sage-50 p-4 rounded-lg">
                  <p className="font-medium mb-1">Privacy & Discretion</p>
                  <p className="text-sm text-stone-600">Professional, confidential environment respecting your privacy</p>
                </div>
                <div className="bg-sand-50 p-4 rounded-lg">
                  <p className="font-medium mb-1">No Insurance Hassles</p>
                  <p className="text-sm text-stone-600">Direct payment means no waiting for approvals or limitations</p>
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <p className="font-medium mb-1">Physician Expertise</p>
                  <p className="text-sm text-stone-600">MD evaluation ensures comprehensive, safe treatment</p>
                </div>
                <div className="bg-stone-50 p-4 rounded-lg">
                  <p className="font-medium mb-1">Flexible Scheduling</p>
                  <p className="text-sm text-stone-600">Appointments that work with your executive schedule</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-playfair text-charcoal mb-8 text-center">
            Paradise Valley Patients: Your Questions Answered
          </h2>
          <FAQSection faqs={paradiseValleyFaqs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-charcoal to-stone-800 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-playfair mb-6">
            Elevate Your Healthcare Experience
          </h2>
          <p className="text-xl mb-8 opacity-95">
            Join Paradise Valley residents who have chosen physician-led integrative medicine
            for superior health outcomes and personalized care.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-charcoal hover:bg-gray-100">
              <CalendarCheck className="w-5 h-5 mr-2" />
              Book Paradise Valley Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Phone className="w-5 h-5 mr-2" />
              Call 602-688-4874
            </Button>
          </div>
          <p className="mt-6 text-sm opacity-80">
            Proudly serving Paradise Valley, Camelback Mountain, Biltmore, and surrounding areas
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}