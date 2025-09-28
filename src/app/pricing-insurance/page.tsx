import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { FAQSection } from "@/components/ui/faq-accordion";
import {
  DollarSign,
  CreditCard,
  FileText,
  Shield,
  CheckCircle,
  Info,
  Phone,
  CalendarCheck,
  Calculator,
  Sparkles
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cash Pay Medical Acupuncture Pricing Phoenix | Medicare Coverage & HSA/FSA",
  description: "Transparent pricing for medical acupuncture in Phoenix. Medicare covers chronic back pain. HSA/FSA eligible. Cash pay packages available. Dr. Forbes MD offers affordable physician-led integrative care Scottsdale Paradise Valley.",
  keywords: "cash pay acupuncture pricing Phoenix, Medicare acupuncture coverage Arizona, HSA FSA acupuncture Phoenix, medical acupuncture cost Scottsdale, self pay physician acupuncturist, acupuncture package deals Paradise Valley, affordable medical acupuncture Phoenix, no insurance acupuncture doctor, Medicare chronic back pain coverage",
};

const pricingPlans = [
  {
    name: "Initial Consultation",
    price: "$350",
    duration: "90 minutes",
    features: [
      "Comprehensive medical history review",
      "Complete physical examination",
      "Diagnostic evaluation & testing recommendations",
      "Personalized treatment plan development",
      "First acupuncture treatment session",
      "Lifestyle and nutrition guidance",
      "Treatment frequency recommendations"
    ],
    highlighted: false
  },
  {
    name: "6-Session Package",
    price: "$900",
    savings: "Save $150",
    duration: "45 minutes each",
    features: [
      "Six follow-up treatment sessions",
      "Progress monitoring & adjustments",
      "Flexible scheduling within 3 months",
      "Treatment plan modifications as needed",
      "Email support between visits",
      "Priority scheduling availability",
      "10% off additional sessions"
    ],
    highlighted: true,
    popular: true
  },
  {
    name: "Follow-Up Session",
    price: "$175",
    duration: "45 minutes",
    features: [
      "Individual treatment session",
      "Progress evaluation",
      "Treatment adjustments",
      "Ongoing symptom management",
      "Lifestyle modification support",
      "Flexible pay-as-you-go option"
    ],
    highlighted: false
  }
];

const medicareInfo = {
  title: "Medicare Coverage for Chronic Back Pain",
  eligibility: [
    "Diagnosis of chronic low back pain (12+ weeks duration)",
    "Pain not associated with surgery or pregnancy",
    "No specific cause identified (non-specific)",
    "Treatment by qualified physician acupuncturist",
    "Up to 12 sessions in 90 days initially",
    "Additional 8 sessions if improving",
    "Maximum 20 sessions per year"
  ],
  process: [
    "Schedule initial consultation with Dr. Forbes",
    "Medical evaluation to confirm Medicare eligibility",
    "Documentation of chronic back pain diagnosis",
    "Direct Medicare billing for covered services",
    "No upfront payment for Medicare-covered visits"
  ]
};

const insuranceOptions = [
  {
    type: "HSA/FSA",
    iconName: "CreditCard",
    description: "Fully eligible for Health Savings Account and Flexible Spending Account payments",
    details: [
      "Use pre-tax dollars for treatment",
      "We provide detailed receipts",
      "IRS-qualified medical expense",
      "Most cards accepted directly"
    ]
  },
  {
    type: "Out-of-Network Benefits",
    iconName: "FileText",
    description: "We can provide documentation for insurance reimbursement claims",
    details: [
      "Detailed superbills provided",
      "CPT codes included",
      "Diagnosis codes documented",
      "Help with claim forms"
    ]
  },
  {
    type: "Direct Payment",
    iconName: "DollarSign",
    description: "Multiple payment options for your convenience",
    details: [
      "All major credit cards",
      "Debit cards accepted",
      "Cash or check",
      "Payment plans available"
    ]
  }
];

// Icon mapping for pricing page
const getPricingIcon = (iconName: string) => {
  const icons: { [key: string]: any } = {
    CreditCard,
    FileText,
    DollarSign
  };
  return icons[iconName];
};

const faqs = [
  {
    id: "price-1",
    question: "Why do you operate as a cash-pay practice?",
    answer: "Cash-pay allows us to provide superior care without insurance restrictions. We can spend 90 minutes on initial consultations, create personalized treatment plans, and use the most effective techniques without waiting for approvals. This model ensures you receive optimal treatment tailored to your specific needs."
  },
  {
    id: "price-2",
    question: "How does Medicare coverage for chronic back pain work?",
    answer: "Medicare Part B covers acupuncture for chronic low back pain when specific criteria are met. You need to have back pain lasting 12+ weeks with no specific identifiable cause. Dr. Forbes can evaluate if you qualify and handle Medicare billing directly. Coverage includes up to 20 sessions per year."
  },
  {
    id: "price-3",
    question: "Can I use my HSA or FSA to pay for acupuncture?",
    answer: "Yes! Medical acupuncture is a qualified medical expense for both HSA and FSA accounts. We accept these cards directly and provide detailed receipts with all necessary documentation for your records. This allows you to use pre-tax dollars for your treatment."
  },
  {
    id: "price-4",
    question: "Do you offer payment plans?",
    answer: "Yes, we understand that healthcare is an investment. We offer flexible payment options including our 6-session package that provides significant savings. For those needing extended treatment, we can discuss customized payment arrangements to make care accessible."
  },
  {
    id: "price-5",
    question: "What if my insurance covers out-of-network acupuncture?",
    answer: "We provide detailed superbills with all necessary codes (CPT, diagnosis) for you to submit to your insurance for reimbursement. While we don't bill insurance directly (except Medicare), many patients receive partial reimbursement from their out-of-network benefits."
  },
  {
    id: "price-6",
    question: "Is the initial consultation fee worth it compared to other clinics?",
    answer: "Absolutely. Our 90-minute initial consultation includes a complete medical evaluation that traditional acupuncturists cannot provide. Dr. Forbes can order tests, review your medications, coordinate with your doctors, and create a comprehensive treatment plan. This thorough approach often identifies issues others miss."
  }
];

const valueProposition = [
  {
    title: "No Insurance Delays",
    description: "Start treatment immediately without waiting for approvals"
  },
  {
    title: "Longer Appointments",
    description: "90-minute initial visits, 45-minute follow-ups"
  },
  {
    title: "Personalized Care",
    description: "Treatment tailored to you, not insurance protocols"
  },
  {
    title: "Direct Access",
    description: "Communicate directly with Dr. Forbes between visits"
  }
];

export default function PricingInsurancePage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-teal-50 via-white to-sage-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-playfair text-charcoal mb-6">
              Transparent Pricing & Insurance Options
            </h1>
            <p className="text-xl text-stone-600 mb-8 max-w-3xl mx-auto">
              Quality physician-led medical acupuncture with flexible payment options.
              Medicare coverage available for chronic back pain. HSA/FSA eligible.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                <CalendarCheck className="w-5 h-5 mr-2" />
                Book Consultation
              </Button>
              <Button size="lg" variant="outline">
                <Phone className="w-5 h-5 mr-2" />
                Call 602-688-4874
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-playfair text-charcoal mb-4 text-center">
            Simple, Transparent Pricing
          </h2>
          <p className="text-center text-stone-600 mb-12 max-w-3xl mx-auto">
            No hidden fees, no surprise bills. Know exactly what your investment in health will be.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-lg p-8 ${
                  plan.highlighted
                    ? "bg-gradient-to-b from-teal-50 to-white border-2 border-teal-200 shadow-xl"
                    : "bg-white border border-gray-200 shadow-lg"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Sparkles className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-4xl font-bold text-teal-700">{plan.price}</span>
                  </div>
                  {plan.savings && (
                    <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {plan.savings}
                    </span>
                  )}
                  <p className="text-stone-600 mt-2">{plan.duration}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.highlighted
                      ? "bg-teal-600 hover:bg-teal-700 text-white"
                      : "bg-white hover:bg-gray-50 text-teal-700 border border-teal-200"
                  }`}
                >
                  Choose {plan.name}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medicare Section */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-block bg-blue-100 rounded-full p-3 mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-playfair text-charcoal mb-4">
                {medicareInfo.title}
              </h2>
              <p className="text-lg text-stone-600">
                Medicare Part B now covers acupuncture for chronic low back pain
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
                  Eligibility Requirements
                </h3>
                <ul className="space-y-2">
                  {medicareInfo.eligibility.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-stone-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Info className="w-6 h-6 text-blue-600 mr-2" />
                  How It Works
                </h3>
                <ol className="space-y-2">
                  {medicareInfo.process.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-stone-600">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link href="/conditions/chronic-back-pain-medicare">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Check Medicare Eligibility
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Options Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-playfair text-charcoal mb-12 text-center">
            Flexible Payment Options
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {insuranceOptions.map((option, index) => {
              const IconComponent = getPricingIcon(option.iconName);
              return (
                <div key={index} className="bg-gradient-to-b from-sage-50 to-white p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
                      {IconComponent && <IconComponent className="w-6 h-6 text-teal-700" />}
                    </div>
                    <h3 className="text-xl font-semibold">{option.type}</h3>
                  </div>
                <p className="text-stone-600 mb-4">{option.description}</p>
                <ul className="space-y-2">
                  {option.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 bg-gradient-to-b from-white to-sage-50/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-playfair text-charcoal mb-4 text-center">
            The Value of Cash-Pay Medical Care
          </h2>
          <p className="text-center text-stone-600 mb-12 max-w-3xl mx-auto">
            Our cash-pay model allows us to focus on what matters most: your health and recovery
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProposition.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-stone-600">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-center">
              Calculate Your Investment
            </h3>
            <div className="bg-gradient-to-r from-teal-50 to-sage-50 p-6 rounded-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="font-medium mb-2">Typical Treatment Course:</p>
                  <ul className="text-sm space-y-1 text-stone-600">
                    <li>• Initial consultation: $350</li>
                    <li>• 6-session package: $900</li>
                    <li>• Total investment: $1,250</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">Compare to:</p>
                  <ul className="text-sm space-y-1 text-stone-600">
                    <li>• Ongoing medication costs</li>
                    <li>• Lost productivity from pain</li>
                    <li>• Quality of life impact</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm font-medium text-teal-700">
                  Most patients see significant improvement within 6-8 sessions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-playfair text-charcoal mb-8 text-center">
            Pricing & Insurance Questions
          </h2>
          <FAQSection faqs={faqs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-700 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-playfair mb-6">
            Invest in Your Health Today
          </h2>
          <p className="text-xl mb-8 opacity-95">
            Join Phoenix, Scottsdale, and Paradise Valley patients who have discovered
            the value of physician-led medical acupuncture.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button size="lg" className="bg-white text-teal-700 hover:bg-gray-100">
              <CalendarCheck className="w-5 h-5 mr-2" />
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Phone className="w-5 h-5 mr-2" />
              Call 602-688-4874
            </Button>
          </div>
          <div className="inline-block bg-white/10 rounded-lg p-4">
            <p className="text-sm">
              <strong>Payment Options:</strong> Cash, Credit Card, HSA/FSA, Medicare (chronic back pain)
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}