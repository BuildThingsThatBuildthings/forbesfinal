import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { FAQSection } from "@/components/ui/faq-accordion";
import {
  CheckCircle,
  XCircle,
  Award,
  GraduationCap,
  Stethoscope,
  Activity,
  Shield,
  Clock,
  DollarSign,
  CalendarCheck
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Medical Acupuncture vs Traditional Acupuncture Phoenix | Physician vs Licensed Acupuncturist",
  description: "Compare medical acupuncture by MD physicians vs traditional acupuncture in Phoenix. Learn why physician acupuncturists like Dr. Forbes provide comprehensive care with medical diagnosis, testing, and prescription coordination.",
  keywords: "medical acupuncture vs traditional acupuncture, physician acupuncturist vs licensed acupuncturist, MD acupuncturist Phoenix, dry needling vs acupuncture, physician led acupuncture Arizona, medical doctor acupuncture Scottsdale, evidence based vs traditional Chinese medicine, integrative medicine physician Phoenix",
};

const comparisonData = [
  {
    category: "Medical Training",
    medical: "8+ years: Medical school, residency, board certification",
    traditional: "3-4 years: Acupuncture school and certification",
    medicalBetter: true
  },
  {
    category: "Diagnostic Capability",
    medical: "Can order labs, imaging, and diagnostic tests",
    traditional: "Cannot order medical tests or imaging",
    medicalBetter: true
  },
  {
    category: "Prescription Authority",
    medical: "Can prescribe medications when needed",
    traditional: "Cannot prescribe any medications",
    medicalBetter: true
  },
  {
    category: "Medical Coordination",
    medical: "Direct communication with your medical team",
    traditional: "Limited ability to coordinate with physicians",
    medicalBetter: true
  },
  {
    category: "Insurance Coverage",
    medical: "Medicare covers chronic back pain, some insurance accepted",
    traditional: "Variable insurance coverage, often limited",
    medicalBetter: true
  },
  {
    category: "Treatment Approach",
    medical: "Evidence-based protocols with research backing",
    traditional: "Traditional Chinese Medicine philosophy",
    medicalBetter: null // Both have merit
  },
  {
    category: "Safety Oversight",
    medical: "Medical board oversight and malpractice insurance",
    traditional: "Acupuncture board oversight",
    medicalBetter: true
  },
  {
    category: "Complex Conditions",
    medical: "Can manage complex medical conditions",
    traditional: "Refers complex cases to physicians",
    medicalBetter: true
  }
];

const faqs = [
  {
    id: "compare-1",
    question: "What is the main difference between a physician acupuncturist and a licensed acupuncturist?",
    answer: "A physician acupuncturist is an MD or DO with full medical training who has additional certification in acupuncture. They can diagnose conditions, order tests, prescribe medications, and integrate acupuncture with conventional medicine. A licensed acupuncturist (LAc) has training specifically in acupuncture and Traditional Chinese Medicine but cannot practice conventional medicine."
  },
  {
    id: "compare-2",
    question: "Is medical acupuncture more effective than traditional acupuncture?",
    answer: "Both can be effective, but medical acupuncture offers advantages for complex conditions. Physician acupuncturists can identify underlying medical issues, rule out serious conditions, coordinate with your medical team, and adjust medications if needed. This comprehensive approach is particularly valuable for patients with multiple health conditions or those taking medications."
  },
  {
    id: "compare-3",
    question: "Why would I choose a physician acupuncturist over a traditional acupuncturist?",
    answer: "Choose a physician acupuncturist when you need: comprehensive medical evaluation, coordination with other treatments, complex condition management, diagnostic testing capability, or when you're taking multiple medications. The medical training ensures nothing is missed and your acupuncture treatment is safely integrated with your overall healthcare."
  },
  {
    id: "compare-4",
    question: "Is medical acupuncture covered by insurance?",
    answer: "Medical acupuncture often has better insurance coverage. Medicare covers acupuncture for chronic low back pain when provided by qualified physicians. Many insurance plans are more likely to cover acupuncture when provided by an MD. Dr. Forbes also offers cash-pay options with HSA/FSA eligibility."
  },
  {
    id: "compare-5",
    question: "Does Dr. Forbes use Traditional Chinese Medicine principles?",
    answer: "Dr. Forbes integrates the best of both worlds. While her approach is evidence-based and grounded in Western medicine, she incorporates proven TCM techniques like auricular acupuncture and meridian theory when clinically appropriate. This integration provides the most comprehensive treatment approach."
  },
  {
    id: "compare-6",
    question: "Can a physician acupuncturist prescribe pain medication?",
    answer: "Yes, as a licensed physician, Dr. Forbes can prescribe medications when medically necessary. However, the goal of medical acupuncture is often to reduce or eliminate the need for pain medications through effective non-pharmaceutical treatment. Having prescription authority means she can manage your complete care."
  }
];

const whenToChoose = {
  medical: [
    "You have complex medical conditions",
    "You take multiple medications",
    "You need diagnostic testing",
    "You want physician-coordinated care",
    "You have Medicare coverage for back pain",
    "You prefer evidence-based protocols",
    "You need medical documentation",
    "You want comprehensive evaluation"
  ],
  traditional: [
    "You prefer TCM philosophy exclusively",
    "You have simple wellness needs",
    "Cost is the primary factor",
    "You're already established with an LAc"
  ]
};

export default function MedicalVsTraditionalPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-teal-50 via-white to-sage-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-playfair text-charcoal mb-6">
              Medical Acupuncture vs Traditional Acupuncture
            </h1>
            <p className="text-xl text-stone-600 mb-8 max-w-3xl mx-auto">
              Understanding the important differences between physician-led medical acupuncture
              and traditional acupuncture in Phoenix, Scottsdale, and Paradise Valley.
            </p>
            <div className="inline-block bg-white rounded-lg shadow-sm p-6">
              <p className="text-lg font-semibold text-teal-700 mb-2">
                The Key Distinction:
              </p>
              <p className="text-stone-600">
                Medical acupuncturists are physicians (MD/DO) with comprehensive medical training,
                while traditional acupuncturists are not medical doctors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-playfair text-charcoal mb-4 text-center">
            Comprehensive Comparison
          </h2>
          <p className="text-center text-stone-600 mb-12 max-w-3xl mx-auto">
            See how physician-led medical acupuncture provides advantages for complex health conditions
          </p>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead>
                <tr className="bg-gradient-to-r from-teal-600 to-teal-700 text-white">
                  <th className="px-6 py-4 text-left">Comparison Factor</th>
                  <th className="px-6 py-4 text-left">Medical Acupuncture (MD)</th>
                  <th className="px-6 py-4 text-left">Traditional Acupuncture (LAc)</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-4 font-semibold text-charcoal border-b">
                      {item.category}
                    </td>
                    <td className="px-6 py-4 border-b">
                      <div className="flex items-start">
                        {item.medicalBetter && (
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        )}
                        <span>{item.medical}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 border-b">
                      <div className="flex items-start">
                        {item.medicalBetter === false && (
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        )}
                        {item.medicalBetter === true && (
                          <XCircle className="w-5 h-5 text-red-400 mr-2 flex-shrink-0 mt-0.5" />
                        )}
                        <span>{item.traditional}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Physician Advantages Section */}
      <section className="py-16 bg-gradient-to-b from-white to-sage-50/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-playfair text-charcoal mb-12 text-center">
            Unique Advantages of Physician Acupuncturists
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <Stethoscope className="w-6 h-6 text-teal-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Complete Medical Evaluation</h3>
              <p className="text-stone-600 mb-4">
                Physician acupuncturists can perform comprehensive physical exams, order blood work,
                MRIs, and other diagnostic tests to rule out serious conditions before treatment.
              </p>
              <p className="text-sm font-medium text-teal-600">
                Example: Identifying thyroid issues causing fatigue before treating with acupuncture
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-teal-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Medication Management</h3>
              <p className="text-stone-600 mb-4">
                Can safely adjust or prescribe medications while using acupuncture to reduce
                dependency on pharmaceuticals, ensuring no dangerous interactions.
              </p>
              <p className="text-sm font-medium text-teal-600">
                Example: Tapering pain medications while increasing acupuncture frequency
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <Activity className="w-6 h-6 text-teal-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Integrated Treatment Plans</h3>
              <p className="text-stone-600 mb-4">
                Coordinates with your entire medical team, ensuring acupuncture complements
                other treatments like physical therapy, surgery recovery, or chronic disease management.
              </p>
              <p className="text-sm font-medium text-teal-600">
                Example: Coordinating with oncologist for chemotherapy side effect management
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When to Choose Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-playfair text-charcoal mb-12 text-center">
            When to Choose Each Type
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-teal-50 to-sage-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6 text-teal-800">
                Choose Medical Acupuncture When:
              </h3>
              <ul className="space-y-3">
                {whenToChoose.medical.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-stone-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/medical-acupuncture">
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">
                    Learn About Our Medical Approach
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-sand-50 to-stone-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6 text-stone-800">
                Traditional May Be Suitable When:
              </h3>
              <ul className="space-y-3">
                {whenToChoose.traditional.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-stone-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-4 bg-white/50 rounded">
                <p className="text-sm text-stone-600">
                  Note: Even for wellness needs, physician oversight ensures safety and optimal outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dr. Forbes Credentials Section */}
      <section className="py-16 bg-gradient-to-b from-white to-teal-50/20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-playfair text-charcoal mb-12 text-center">
            Dr. Forbes: The Best of Both Worlds
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Exceptional Medical Credentials</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <GraduationCap className="w-6 h-6 text-teal-600 mr-3 mt-1" />
                  <div>
                    <p className="font-semibold">Penn State College of Medicine</p>
                    <p className="text-sm text-stone-600">Medical Doctorate with honors</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="w-6 h-6 text-teal-600 mr-3 mt-1" />
                  <div>
                    <p className="font-semibold">Chief Resident - University of Virginia</p>
                    <p className="text-sm text-stone-600">Leadership in Family Medicine training</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-teal-600 mr-3 mt-1" />
                  <div>
                    <p className="font-semibold">Board-Certified Family Medicine</p>
                    <p className="text-sm text-stone-600">Comprehensive medical expertise</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Activity className="w-6 h-6 text-teal-600 mr-3 mt-1" />
                  <div>
                    <p className="font-semibold">Integrated Structural Acupuncture</p>
                    <p className="text-sm text-stone-600">Advanced certification from University of New England</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Integrative Expertise Includes:</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>Kiiko Matsumoto Style (KMS) acupuncture</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>Auricular (ear) acupuncture protocols</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>Chinese scalp acupuncture techniques</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>Trigger point dry needling</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>Marma therapy (needle-free option)</span>
                </li>
              </ul>
              <p className="text-sm text-stone-600 italic">
                "My medical training allows me to provide the safest, most effective acupuncture
                treatment while ensuring nothing important is missed." - Dr. Forbes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-playfair text-charcoal mb-8 text-center">
            Common Questions About Medical vs Traditional Acupuncture
          </h2>
          <FAQSection faqs={faqs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-700 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-playfair mb-6">
            Experience the Physician Advantage
          </h2>
          <p className="text-xl mb-8 opacity-95">
            Discover why patients throughout Phoenix, Scottsdale, and Paradise Valley choose
            Dr. Forbes for comprehensive, physician-led medical acupuncture.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-teal-700 hover:bg-gray-100">
              <CalendarCheck className="w-5 h-5 mr-2" />
              Book Medical Consultation
            </Button>
            <Link href="/medical-acupuncture">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Learn More About Our Approach
              </Button>
            </Link>
          </div>
          <div className="mt-8 inline-block bg-white/10 rounded-lg p-4">
            <p className="text-sm">
              <strong>Medicare Coverage Available</strong> for chronic back pain patients
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}