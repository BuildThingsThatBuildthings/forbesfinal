import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FAQSection } from "@/components/ui/faq-accordion";
import { Button } from "@/components/ui/button";
import { 
  HelpCircle,
  Stethoscope,
  CreditCard,
  Shield,
  Calendar,
  Phone,
  GraduationCap
} from "lucide-react";
import { PageBreadcrumb, breadcrumbConfigs } from "@/components/ui/breadcrumb";
import { FAQSchema } from "@/components/seo/StructuredData";
import { ContextualCTA } from "@/components/seo/InternalLinks";


const faqCategories = [
  {
    id: "treatment",
    title: "Treatment & Medical Questions",
    icon: Stethoscope,
    description: "Learn about medical acupuncture treatments and what to expect"
  },
  {
    id: "insurance",
    title: "Insurance & Payment",
    icon: CreditCard,
    description: "Understanding coverage, costs, and payment options"
  },
  {
    id: "safety",
    title: "Safety & Side Effects",
    icon: Shield,
    description: "Safety protocols, side effects, and contraindications"
  },
  {
    id: "logistics",
    title: "Appointments & Logistics",
    icon: Calendar,
    description: "Scheduling, preparation, and office policies"
  },
  {
    id: "education",
    title: "General Acupuncture Education",
    icon: GraduationCap,
    description: "Understanding acupuncture principles and evidence"
  }
];

const treatmentFAQs = [
  {
    id: "what-is-medical-acupuncture",
    question: "What is medical acupuncture and how is it different from traditional acupuncture?",
    answer: "Medical acupuncture is performed by licensed physicians who integrate acupuncture with Western medical diagnosis and treatment. Dr. Forbes uses evidence-based approaches, combining traditional acupuncture techniques with modern medical knowledge. This integration allows for more comprehensive patient evaluation and treatment planning that considers both Eastern and Western medical perspectives."
  },
  {
    id: "conditions-helped",
    question: "What conditions can medical acupuncture help with?",
    answer: "Medical acupuncture may help support various conditions including chronic pain (back, neck, joint pain), headaches and migraines, sleep disorders, stress and anxiety, digestive issues, women's health concerns, and general wellness optimization. Dr. Forbes evaluates each patient individually to determine if acupuncture is appropriate for their specific condition and health goals."
  },
  {
    id: "how-many-treatments",
    question: "How many treatments will I need?",
    answer: "Treatment plans are highly individualized based on your condition, health history, and response to therapy. Many patients report improvement within 4-6 sessions for acute conditions, while chronic conditions often require ongoing maintenance treatments. Dr. Forbes will monitor your progress and adjust the treatment plan as needed, always keeping you informed about expected timelines."
  },
  {
    id: "does-it-hurt",
    question: "Does acupuncture hurt?",
    answer: "Most patients report minimal to no discomfort during acupuncture treatments. The needles used are extremely thin (much thinner than injection needles) and are inserted gently. Some patients may feel a brief pinch or slight pressure upon insertion, followed by a sense of relaxation. Dr. Forbes uses high-quality, single-use sterile needles and techniques to maximize comfort."
  },
  {
    id: "how-long-sessions",
    question: "How long do treatment sessions last?",
    answer: "Initial consultations typically last 90-120 minutes, including comprehensive evaluation and possible first treatment. Follow-up treatment sessions usually last 45-60 minutes, including brief check-in, needle insertion, treatment time (usually 20-30 minutes with needles in place), and post-treatment discussion."
  },
  {
    id: "what-to-expect-first-visit",
    question: "What should I expect during my first visit?",
    answer: "Your first visit includes a comprehensive medical history review, physical examination including pulse and tongue diagnosis, discussion of your health goals, creation of a personalized treatment plan, and possibly your first acupuncture treatment if appropriate. Dr. Forbes takes time to explain findings and answer all your questions."
  }
];

const insuranceFAQs = [
  {
    id: "insurance-coverage",
    question: "Is acupuncture covered by insurance?",
    answer: "Forbes Integrative Medicine operates as a cash-pay practice. We do not bill insurance directly or participate in insurance networks. This allows us to provide personalized care without insurance restrictions and transparent pricing. We provide detailed receipts and documentation that you can submit to your insurance for potential reimbursement if you have out-of-network benefits. Payment is due at the time of service."
  },
  {
    id: "cost-treatment",
    question: "How much do treatments cost?",
    answer: "All fees are discussed transparently upfront with no surprise charges. As a cash-pay practice, we offer competitive rates without the overhead of insurance administration. Costs vary based on the complexity and length of treatment. We accept cash, check, credit cards, HSA, and FSA payments. Package rates and payment plans are available for treatment series to make care more accessible."
  },
  {
    id: "hsa-fsa-eligible",
    question: "Can I use my HSA or FSA for acupuncture treatments?",
    answer: "Yes, medical acupuncture treatments are typically eligible for Health Savings Account (HSA) and Flexible Spending Account (FSA) reimbursement when provided by a licensed physician like Dr. Forbes. We provide the necessary documentation for your HSA/FSA claims."
  },
  {
    id: "payment-plans",
    question: "Do you offer payment plans?",
    answer: "Yes, we understand that healthcare costs can be a concern and offer flexible payment options including payment plans for treatment series. Our goal is to make quality integrative care accessible. Please discuss payment options with our office staff when scheduling your appointment."
  }
];

const safetyFAQs = [
  {
    id: "is-acupuncture-safe",
    question: "Is medical acupuncture safe?",
    answer: "When performed by a qualified physician like Dr. Forbes, medical acupuncture is extremely safe. We use only single-use, sterile needles and follow strict safety protocols. Dr. Forbes' medical training allows for comprehensive patient screening to identify any contraindications or safety concerns before treatment."
  },
  {
    id: "side-effects",
    question: "What are the potential side effects of acupuncture?",
    answer: "Side effects are rare and typically mild when they occur. Some patients may experience slight soreness at needle sites, temporary fatigue, or mild dizziness immediately after treatment. Serious side effects are extremely rare when acupuncture is performed by a qualified physician. Dr. Forbes monitors patients closely and provides post-treatment care instructions."
  },
  {
    id: "contraindications",
    question: "Are there any conditions that would prevent me from receiving acupuncture?",
    answer: "Certain conditions require special consideration or may contraindicate acupuncture treatment. These include bleeding disorders, certain heart conditions with pacemakers, pregnancy (some points are avoided), and active infections at treatment sites. Dr. Forbes' medical training allows for proper evaluation of any contraindications during your initial consultation."
  },
  {
    id: "needles-sterile",
    question: "Are the needles sterile and safe?",
    answer: "Absolutely. We use only FDA-approved, single-use, sterile acupuncture needles that are disposed of safely after each use. All equipment and treatment areas are thoroughly sanitized between patients following medical-grade cleaning protocols. Dr. Forbes follows all applicable safety regulations and standards."
  }
];

const logisticsFAQs = [
  {
    id: "how-to-schedule",
    question: "How do I schedule an appointment?",
    answer: "You can schedule appointments online through our patient portal (available 24/7), call our Phoenix office at 602-688-4874 during business hours (Monday-Friday, 9:00 AM - 5:00 PM), or request an appointment through our website contact form. Same-day appointments are often available for urgent concerns."
  },
  {
    id: "what-to-bring",
    question: "What should I bring to my appointment?",
    answer: "Please bring your photo ID, insurance card, list of current medications and supplements (including dosages), any recent lab results or medical records relevant to your condition, and comfortable clothing that allows easy access to arms and legs. We'll email you intake forms to complete before your visit."
  },
  {
    id: "what-to-wear",
    question: "What should I wear to my acupuncture appointment?",
    answer: "Wear loose, comfortable clothing that allows easy access to your arms below the elbows and legs below the knees. Avoid tight clothing, pantyhose, or clothing that's difficult to roll up. We provide gowns if needed, but most treatments can be performed with minor clothing adjustments."
  },
  {
    id: "cancellation-policy",
    question: "What is your cancellation policy?",
    answer: "We require 24-hour notice for appointment cancellations or rescheduling. This allows us to offer your appointment slot to other patients who may need care. Late cancellations or no-shows may result in a fee. We understand that emergencies occur and will work with you on a case-by-case basis."
  },
  {
    id: "parking-location",
    question: "Where is your Phoenix office located and is parking available?",
    answer: "We're conveniently located at 3104 E Camelback Rd Unit #7947, Phoenix, AZ 85016. Free parking is available on-site, and our location is easily accessible from throughout the Phoenix Valley. The office is ADA accessible and designed for patient comfort and privacy."
  }
];

const educationFAQs = [
  {
    id: "how-acupuncture-works",
    question: "How does acupuncture work from a medical perspective?",
    answer: "While traditional explanations involve energy flow and meridians, modern research shows acupuncture stimulates the nervous system, releases endorphins and other neurotransmitters, improves blood flow, and modulates pain signals. It activates the body's natural healing mechanisms and can influence various physiological processes including inflammation, immune response, and muscle tension."
  },
  {
    id: "research-evidence",
    question: "Is there scientific evidence that acupuncture works?",
    answer: "Yes, extensive research published in peer-reviewed journals demonstrates acupuncture's effectiveness for many conditions. The World Health Organization, National Institutes of Health, and numerous medical organizations recognize acupuncture as effective for various conditions, particularly pain management. Dr. Forbes stays current with the latest research to provide evidence-based treatments."
  },
  {
    id: "difference-styles",
    question: "What's the difference between different acupuncture styles?",
    answer: "Traditional Chinese Medicine (TCM) acupuncture follows classical meridian theory, while medical acupuncture integrates Western medical diagnosis with acupuncture techniques. Dr. Forbes combines both approaches, using traditional point selections when appropriate while applying modern medical understanding of anatomy and physiology to optimize treatment effectiveness."
  },
  {
    id: "maintenance-treatments",
    question: "Will I need ongoing maintenance treatments?",
    answer: "This depends on your individual condition and treatment goals. Acute conditions often resolve with a series of treatments, while chronic conditions may benefit from periodic maintenance treatments to sustain improvements. Dr. Forbes will discuss long-term treatment recommendations based on your response to initial treatments and overall health goals."
  },
  {
    id: "combining-treatments",
    question: "Can I combine acupuncture with other medical treatments?",
    answer: "In most cases, yes. Dr. Forbes' medical background allows for safe integration of acupuncture with conventional medical treatments. We coordinate with your other healthcare providers as needed and carefully consider any potential interactions. Always inform Dr. Forbes of all treatments and medications you're receiving."
  },
  {
    id: "age-restrictions",
    question: "Are there age restrictions for acupuncture treatment?",
    answer: "Acupuncture can be beneficial for patients of various ages, from children to elderly adults. Treatment approaches are modified based on age and individual needs. For pediatric patients, Dr. Forbes may use modified techniques or fewer needles. Elderly patients often respond very well to gentle acupuncture treatments."
  }
];

export default function FAQPage() {
  // Combine all FAQ data for structured data
  const allFAQs = [
    ...treatmentFAQs,
    ...insuranceFAQs,
    ...safetyFAQs,
    ...logisticsFAQs,
    ...educationFAQs
  ];

  const faqSchemaData = allFAQs.map(faq => ({
    question: faq.question,
    answer: faq.answer
  }));

  return (
    <>
      <FAQSchema faqs={faqSchemaData} />
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-porcelain border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <PageBreadcrumb config="faq" />
        </div>
      </div>
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-teal-50 to-champagne-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-teal-100 rounded-full mb-6">
                <HelpCircle className="h-10 w-10 text-teal-600" />
              </div>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-obsidian mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-lg text-ink/80 mb-8">
                Find comprehensive answers to common questions about medical acupuncture, 
                treatments, and our Phoenix practice
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-teal-500 hover:bg-teal-600 text-white"
                  asChild
                >
                  <a href="https://forbesintegrativemedicine.acubliss.app" target="_blank" rel="noopener noreferrer">
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule Consultation
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-obsidian/20 hover:bg-obsidian/5"
                  asChild
                >
                  <a href="tel:602-688-4874">
                    <Phone className="mr-2 h-5 w-5" />
                    Call 602-688-4874
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Categories Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-2xl md:text-3xl text-obsidian mb-4">
                Question Categories
              </h2>
              <p className="text-base text-ink/70">
                Browse questions by category or scroll down to see all FAQs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {faqCategories.map((category) => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="bg-porcelain rounded-xl p-6 hover:bg-teal-50 transition-colors group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-100 rounded-full mb-4 group-hover:bg-teal-200 transition-colors">
                    <category.icon className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-obsidian mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-ink/70">
                    {category.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment & Medical Questions */}
        <section id="treatment" className="py-16 bg-porcelain">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4">
                  <Stethoscope className="h-8 w-8 text-teal-600" />
                </div>
                <h2 className="font-serif text-2xl md:text-3xl text-obsidian mb-4">
                  Treatment & Medical Questions
                </h2>
                <p className="text-base text-ink/70">
                  Learn about medical acupuncture treatments and what to expect
                </p>
              </div>
              <FAQSection items={treatmentFAQs} />
            </div>
          </div>
        </section>

        {/* Insurance & Payment */}
        <section id="insurance" className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4">
                  <CreditCard className="h-8 w-8 text-teal-600" />
                </div>
                <h2 className="font-serif text-2xl md:text-3xl text-obsidian mb-4">
                  Insurance & Payment Questions
                </h2>
                <p className="text-base text-ink/70">
                  Understanding coverage, costs, and payment options
                </p>
              </div>
              <FAQSection items={insuranceFAQs} />
            </div>
          </div>
        </section>

        {/* Safety & Side Effects */}
        <section id="safety" className="py-16 bg-porcelain">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4">
                  <Shield className="h-8 w-8 text-teal-600" />
                </div>
                <h2 className="font-serif text-2xl md:text-3xl text-obsidian mb-4">
                  Safety & Side Effects
                </h2>
                <p className="text-base text-ink/70">
                  Safety protocols, side effects, and contraindications
                </p>
              </div>
              <FAQSection items={safetyFAQs} />
            </div>
          </div>
        </section>

        {/* Logistics */}
        <section id="logistics" className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4">
                  <Calendar className="h-8 w-8 text-teal-600" />
                </div>
                <h2 className="font-serif text-2xl md:text-3xl text-obsidian mb-4">
                  Appointments & Logistics
                </h2>
                <p className="text-base text-ink/70">
                  Scheduling, preparation, and office policies
                </p>
              </div>
              <FAQSection items={logisticsFAQs} />
            </div>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="py-16 bg-porcelain">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4">
                  <GraduationCap className="h-8 w-8 text-teal-600" />
                </div>
                <h2 className="font-serif text-2xl md:text-3xl text-obsidian mb-4">
                  General Acupuncture Education
                </h2>
                <p className="text-base text-ink/70">
                  Understanding acupuncture principles and evidence
                </p>
              </div>
              <FAQSection items={educationFAQs} />
            </div>
          </div>
        </section>

        {/* Contextual CTA */}
        <ContextualCTA currentPage="/faq" />
      </main>
      <Footer />
    </>
  );
}