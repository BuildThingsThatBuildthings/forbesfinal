import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { FAQSection } from "@/components/ui/faq-accordion";
import { TrustMetrics } from "@/components/ui/trust-indicators";
import {
  MapPin,
  Clock,
  Phone,
  Car,
  Star,
  Award,
  Users,
  CalendarCheck
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Physician Acupuncturist Scottsdale AZ | Dr Forbes MD Medical Acupuncture",
  description: "Leading physician acupuncturist serving Scottsdale, Paradise Valley & Camelback Corridor. Dr. Forbes MD offers cash-pay concierge medical acupuncture for chronic pain, migraines & wellness. Penn State MD, UVA Chief Resident.",
  keywords: "physician acupuncturist Scottsdale, medical acupuncture Paradise Valley, concierge acupuncture Camelback Corridor, cash pay acupuncture Scottsdale, MD acupuncturist Arizona, integrative medicine doctor Biltmore, luxury medical acupuncture Phoenix, Penn State MD acupuncturist, University Virginia physician Scottsdale",
};

const scottsdaleFaqs = [
  {
    id: "scottsdale-1",
    question: "Do you serve patients from Scottsdale and Paradise Valley?",
    answer: "Yes! Dr. Forbes serves patients throughout the Phoenix metro area, including Scottsdale, Paradise Valley, Camelback Corridor, Biltmore, and North Phoenix. Our central Phoenix location at 3104 E Camelback Rd is conveniently located just minutes from Scottsdale and Paradise Valley, with easy access from Loop 101 and SR-51."
  },
  {
    id: "scottsdale-2",
    question: "Why choose a physician acupuncturist over traditional acupuncturists in Scottsdale?",
    answer: "As an MD with board certification in Family Medicine, Dr. Forbes provides a unique advantage: complete medical evaluation, ability to order diagnostic tests, coordinate with your other physicians, and ensure safe integration with medications. This physician-led approach is especially valuable for complex conditions requiring comprehensive medical oversight."
  },
  {
    id: "scottsdale-3",
    question: "What makes Forbes Integrative different from other Scottsdale acupuncture clinics?",
    answer: "Dr. Forbes brings exceptional credentials: Penn State MD, Chief Resident at University of Virginia, and specialized training in Integrated Structural Acupuncture. We offer a concierge-level experience with extended appointments, personalized treatment protocols, and the medical expertise to address complex health concerns that traditional acupuncturists cannot."
  },
  {
    id: "scottsdale-4",
    question: "Do you accept insurance for Scottsdale and Paradise Valley patients?",
    answer: "We operate as a cash-pay practice to provide the highest quality care without insurance limitations. Medicare covers chronic back pain treatments for qualifying patients. We provide detailed receipts for HSA/FSA reimbursement and can assist with insurance reimbursement paperwork when applicable."
  },
  {
    id: "scottsdale-5",
    question: "What conditions do you treat for Scottsdale area patients?",
    answer: "We specialize in chronic pain, migraines, neuropathy, fertility support, anxiety, and complex conditions requiring physician oversight. Our medical acupuncture approach is particularly effective for patients who haven't found relief with conventional treatments alone."
  }
];

const nearbyAreas = [
  { name: "Paradise Valley", distance: "8 minutes", zip: "85253" },
  { name: "Biltmore Area", distance: "5 minutes", zip: "85016" },
  { name: "Camelback Corridor", distance: "2 minutes", zip: "85018" },
  { name: "North Scottsdale", distance: "15 minutes", zip: "85254" },
  { name: "Old Town Scottsdale", distance: "10 minutes", zip: "85251" },
  { name: "McCormick Ranch", distance: "12 minutes", zip: "85258" }
];

export default function ScottsdalePage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-sage-50 via-white to-sand-50">
        <div className="absolute inset-0 bg-[url('/images/pattern-organic.svg')] opacity-5" />
        <div className="container relative mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-playfair text-charcoal mb-6">
              Physician Acupuncturist Serving Scottsdale & Paradise Valley
            </h1>
            <p className="text-xl text-stone-600 mb-8 max-w-3xl mx-auto">
              Dr. Forbes MD brings university-trained medical expertise to the affluent communities of
              Scottsdale, Paradise Valley, and the Camelback Corridor with evidence-based medical acupuncture.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                <CalendarCheck className="w-5 h-5 mr-2" />
                Book Scottsdale Consultation
              </Button>
              <Button size="lg" variant="outline">
                <Phone className="w-5 h-5 mr-2" />
                Call 602-688-4874
              </Button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="text-center p-4 bg-white/80 rounded-lg">
              <Award className="w-8 h-8 text-teal-600 mx-auto mb-2" />
              <p className="font-semibold">Penn State MD</p>
              <p className="text-sm text-stone-600">Medical School</p>
            </div>
            <div className="text-center p-4 bg-white/80 rounded-lg">
              <Star className="w-8 h-8 text-teal-600 mx-auto mb-2" />
              <p className="font-semibold">UVA Chief Resident</p>
              <p className="text-sm text-stone-600">Leadership Training</p>
            </div>
            <div className="text-center p-4 bg-white/80 rounded-lg">
              <Users className="w-8 h-8 text-teal-600 mx-auto mb-2" />
              <p className="font-semibold">15+ Years</p>
              <p className="text-sm text-stone-600">Serving Phoenix Metro</p>
            </div>
            <div className="text-center p-4 bg-white/80 rounded-lg">
              <MapPin className="w-8 h-8 text-teal-600 mx-auto mb-2" />
              <p className="font-semibold">Central Location</p>
              <p className="text-sm text-stone-600">Minutes from Scottsdale</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Accessibility */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-playfair text-charcoal mb-8 text-center">
            Conveniently Located for Scottsdale & Paradise Valley Residents
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Phoenix Location</h3>
              <div className="space-y-3">
                <p className="flex items-start">
                  <MapPin className="w-5 h-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                  <span>3104 E Camelback Rd Unit #7947<br />Phoenix, AZ 85016</span>
                </p>
                <p className="flex items-center">
                  <Phone className="w-5 h-5 text-teal-600 mr-3" />
                  <span>(602) 688-4874</span>
                </p>
                <p className="flex items-center">
                  <Clock className="w-5 h-5 text-teal-600 mr-3" />
                  <span>Monday - Friday: 9:00 AM - 5:00 PM</span>
                </p>
                <p className="flex items-center">
                  <Car className="w-5 h-5 text-teal-600 mr-3" />
                  <span>Free parking available</span>
                </p>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold mb-3">Easy Access From:</h4>
                <ul className="space-y-2">
                  {nearbyAreas.map((area) => (
                    <li key={area.zip} className="flex justify-between text-sm">
                      <span>{area.name} ({area.zip})</span>
                      <span className="text-teal-600">{area.distance}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-sage-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Why Scottsdale Patients Choose Dr. Forbes</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span><strong>Physician-Led Care:</strong> MD evaluation ensures comprehensive treatment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span><strong>Cash-Pay Flexibility:</strong> No insurance restrictions on treatment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span><strong>Extended Appointments:</strong> 90-minute initial consultations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span><strong>Concierge Experience:</strong> Personalized, unhurried care</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span><strong>Evidence-Based:</strong> University-trained, research-backed protocols</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Treated */}
      <section className="py-16 bg-gradient-to-b from-white to-sage-50/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-playfair text-charcoal mb-8 text-center">
            Specialized Medical Acupuncture for Scottsdale's Health Needs
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-3 text-teal-700">Executive Stress & Performance</h3>
              <p className="text-stone-600 mb-4">
                Tailored protocols for high-performing professionals dealing with chronic stress,
                burnout, and optimization needs.
              </p>
              <Link href="/conditions/stress-management" className="text-teal-600 hover:text-teal-700 font-medium">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-3 text-teal-700">Golf & Tennis Injuries</h3>
              <p className="text-stone-600 mb-4">
                Specialized treatment for sports-related pain, helping Scottsdale's active
                community return to peak performance.
              </p>
              <Link href="/conditions/sports-injuries" className="text-teal-600 hover:text-teal-700 font-medium">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-3 text-teal-700">Anti-Aging & Wellness</h3>
              <p className="text-stone-600 mb-4">
                Integrative approaches to longevity, vitality, and age-related concerns for
                Paradise Valley's wellness-focused community.
              </p>
              <Link href="/conditions/wellness" className="text-teal-600 hover:text-teal-700 font-medium">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-3 text-teal-700">Chronic Migraines</h3>
              <p className="text-stone-600 mb-4">
                Evidence-based protocols proven to reduce frequency and intensity of migraines
                when other treatments have failed.
              </p>
              <Link href="/conditions/chronic-migraines" className="text-teal-600 hover:text-teal-700 font-medium">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-3 text-teal-700">Neuropathy & Nerve Pain</h3>
              <p className="text-stone-600 mb-4">
                Advanced techniques for peripheral neuropathy, sciatica, and complex nerve
                conditions requiring medical expertise.
              </p>
              <Link href="/conditions/neuropathy" className="text-teal-600 hover:text-teal-700 font-medium">
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-3 text-teal-700">Fertility & IVF Support</h3>
              <p className="text-stone-600 mb-4">
                Research-backed acupuncture protocols to enhance fertility and support IVF
                success for couples in their journey.
              </p>
              <Link href="/conditions/fertility-ivf" className="text-teal-600 hover:text-teal-700 font-medium">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Experience Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-playfair text-charcoal mb-8 text-center">
            A Premium Medical Experience for Discerning Patients
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-4">Concierge-Level Care Without Membership Fees</h3>
              <p className="text-stone-600 mb-6">
                Experience the personalized attention you deserve. Dr. Forbes provides unhurried,
                comprehensive consultations that address your complete health picture, not just symptoms.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <span className="text-teal-700 font-semibold">90</span>
                  </div>
                  <div>
                    <p className="font-semibold">Minute Initial Consultations</p>
                    <p className="text-sm text-stone-600">Thorough evaluation and personalized treatment planning</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <span className="text-teal-700 font-semibold">1:1</span>
                  </div>
                  <div>
                    <p className="font-semibold">Direct Physician Care</p>
                    <p className="text-sm text-stone-600">Always treated by Dr. Forbes, never delegated</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                    <span className="text-teal-700 font-semibold">24h</span>
                  </div>
                  <div>
                    <p className="font-semibold">Responsive Communication</p>
                    <p className="text-sm text-stone-600">Questions answered promptly between visits</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-sage-50 to-sand-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Investment in Your Health</h3>
              <div className="space-y-3 mb-6">
                <p className="flex justify-between">
                  <span>Initial Consultation (90 min)</span>
                  <span className="font-semibold">$350</span>
                </p>
                <p className="flex justify-between">
                  <span>Follow-up Sessions (45 min)</span>
                  <span className="font-semibold">$175</span>
                </p>
                <p className="flex justify-between">
                  <span>Package of 6 Sessions</span>
                  <span className="font-semibold">$900 (Save $150)</span>
                </p>
              </div>
              <div className="border-t pt-4">
                <p className="text-sm text-stone-600 mb-2">✓ HSA/FSA eligible</p>
                <p className="text-sm text-stone-600 mb-2">✓ Medicare covers chronic back pain</p>
                <p className="text-sm text-stone-600">✓ Detailed receipts for reimbursement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-white to-sage-50/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-playfair text-charcoal mb-8 text-center">
            Frequently Asked Questions from Scottsdale & Paradise Valley Patients
          </h2>
          <FAQSection faqs={scottsdaleFaqs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-700 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-playfair mb-6">
            Experience Physician-Led Medical Acupuncture
          </h2>
          <p className="text-xl mb-8 opacity-95">
            Join Scottsdale and Paradise Valley residents who have discovered the difference
            of university-trained, evidence-based integrative medicine.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-teal-700 hover:bg-gray-100">
              <CalendarCheck className="w-5 h-5 mr-2" />
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Phone className="w-5 h-5 mr-2" />
              Call 602-688-4874
            </Button>
          </div>
          <p className="mt-6 text-sm opacity-90">
            Serving Scottsdale, Paradise Valley, Biltmore, Camelback Corridor, and Greater Phoenix
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}