import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { TrustBadgesSection } from "@/components/ui/trust-badges";
import { FAQSection } from "@/components/ui/faq-accordion";
import { 
  Calendar, 
  CheckCircle, 
  Activity,
  Target,
  Shield,
  Heart
} from "lucide-react";

export const metadata: Metadata = {
  title: "Medical Acupuncture | Forbes Integrative Medicine Phoenix",
  description: "Evidence-based medical acupuncture performed by board-certified physician Dr. Forbes. Combining Western medicine with traditional techniques for optimal patient outcomes.",
};

const techniques = [
  {
    title: "KMS (Korean Medicine Style)",
    description: "Advanced Korean acupuncture techniques for systemic healing and pain relief"
  },
  {
    title: "Auricular Acupuncture",
    description: "Specialized ear acupuncture for systemic conditions and whole-body wellness"
  },
  {
    title: "Chinese Scalp Acupuncture",
    description: "Targeted scalp points for neurological conditions and cognitive support"
  },
  {
    title: "Trigger Point Dry Needling",
    description: "Precise treatment of myofascial pain and muscle tension points"
  },
  {
    title: "Integrated Structural Acupuncture",
    description: "Comprehensive approach combining structural assessment with targeted treatment"
  },
  {
    title: "Marma Therapy",
    description: "Ayurvedic vital point therapy integrated with medical acupuncture"
  }
];

const conditions = [
  "Chronic pain (back, neck, joint)",
  "Headaches and migraines",
  "Sleep disorders and insomnia",
  "Stress and anxiety",
  "Digestive issues",
  "Women's health concerns",
  "Allergies and sinusitis",
  "Post-surgical recovery",
  "Sports injuries",
  "Fatigue and low energy"
];

const processSteps = [
  {
    step: "1",
    title: "Comprehensive Assessment",
    description: "Thorough medical history and physical examination to understand your unique health needs"
  },
  {
    step: "2",
    title: "Personalized Treatment Plan",
    description: "Custom protocol combining medical expertise with acupuncture techniques tailored to your condition"
  },
  {
    step: "3",
    title: "Gentle Treatment",
    description: "Precise needle placement using sterile, single-use needles with minimal discomfort"
  },
  {
    step: "4",
    title: "Progress Monitoring",
    description: "Regular evaluation and adjustment of treatment plan based on your response and improvement"
  }
];

const faqs = [
  {
    id: "ma-faq-1",
    question: "How is medical acupuncture different from traditional acupuncture?",
    answer: "Medical acupuncture is performed by licensed physicians who integrate Western medical knowledge with traditional techniques. Dr. Janie Forbes combines her board certification in Family Medicine with specialized acupuncture training from the University of New England College of Osteopathic Medicine to provide evidence-based, medically-informed treatments."
  },
  {
    id: "ma-faq-2",
    question: "Is acupuncture painful?",
    answer: "Most patients experience minimal to no discomfort. Acupuncture needles are extremely thin (about the width of a hair), and many patients find the treatment deeply relaxing. Some may feel a mild tingling or warmth at needle sites."
  },
  {
    id: "ma-faq-3",
    question: "How long does each session last?",
    answer: "Initial consultations typically last 60-90 minutes, including assessment and first treatment. Follow-up sessions usually last 45-60 minutes. Needles are typically retained for 20-30 minutes during treatment."
  },
  {
    id: "ma-faq-4",
    question: "Are there any side effects?",
    answer: "Acupuncture is generally very safe when performed by a qualified physician. Minor side effects may include slight bruising or soreness at needle sites. Serious adverse effects are extremely rare with proper technique."
  },
  {
    id: "ma-faq-5",
    question: "Can acupuncture be combined with conventional treatments?",
    answer: "Yes, medical acupuncture complements conventional treatments well. Dr. Forbes coordinates with your healthcare team to ensure integrated care that supports your overall treatment plan."
  }
];

export default function MedicalAcupuncturePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-porcelain to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-obsidian mb-6">
                Medical Acupuncture
              </h1>
              <p className="text-xl md:text-2xl text-ink/80 mb-8">
                Evidence-based integrative treatment combining Western medicine with traditional acupuncture techniques
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                  Book Consultation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-obsidian/20"
                  asChild
                >
                  <a href="tel:602-688-4874">Call 602-688-4874</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <TrustBadgesSection variant="horizontal" />

        {/* What is Medical Acupuncture */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl text-obsidian mb-6">
                  Physician-Led Integrative Care
                </h2>
                <div className="space-y-4 text-ink/70">
                  <p className="text-lg leading-relaxed">
                    Medical acupuncture represents the integration of traditional Eastern medicine 
                    with modern Western medical practice. As a board-certified Family Medicine 
                    physician, Dr. Forbes brings a unique perspective to acupuncture treatment.
                  </p>
                  <p className="leading-relaxed">
                    This approach allows for comprehensive evaluation of your health concerns, 
                    ensuring that acupuncture is used safely and effectively as part of your 
                    overall treatment plan. Each session is informed by both medical diagnostics 
                    and traditional acupuncture principles.
                  </p>
                  <p className="leading-relaxed">
                    Patients often report improvements in pain levels, sleep quality, stress 
                    management, and overall well-being. Dr. Forbes' medical training ensures 
                    that underlying conditions are properly identified and addressed.
                  </p>
                </div>
                <p className="text-sm text-muted-foreground italic mt-4">
                  *Individual results vary. Acupuncture supports wellness but is not a cure for medical conditions.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-porcelain rounded-lg p-6">
                  <h3 className="font-serif text-2xl text-obsidian mb-4">Why Choose Medical Acupuncture?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-teal-500 mt-0.5" />
                      <span className="text-ink/70">Performed by board-certified physician</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Target className="h-5 w-5 text-teal-500 mt-0.5" />
                      <span className="text-ink/70">Evidence-based treatment protocols</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Activity className="h-5 w-5 text-teal-500 mt-0.5" />
                      <span className="text-ink/70">Integrated with conventional medicine</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Heart className="h-5 w-5 text-teal-500 mt-0.5" />
                      <span className="text-ink/70">Personalized to your health needs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Techniques */}
        <section className="py-16 md:py-24 bg-porcelain">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-obsidian mb-4">
                Advanced Treatment Techniques
              </h2>
              <p className="text-lg text-ink/70 max-w-2xl mx-auto">
                Dr. Forbes employs various evidence-based acupuncture techniques tailored to each patient's needs
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techniques.map((technique, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-serif text-xl text-obsidian mb-2">{technique.title}</h3>
                  <p className="text-ink/70">{technique.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Conditions Treated */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl text-obsidian mb-4">
                  Conditions We Support
                </h2>
                <p className="text-lg text-ink/70">
                  Medical acupuncture may help support various health conditions
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-3">
                {conditions.map((condition, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0" />
                    <span className="text-ink/70">{condition}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground italic text-center mt-8">
                *Results vary by individual. Consult with Dr. Forbes to determine if acupuncture is appropriate for your condition.
              </p>
            </div>
          </div>
        </section>

        {/* Treatment Process */}
        <section className="py-16 md:py-24 bg-porcelain">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-obsidian mb-4">
                Your Treatment Journey
              </h2>
              <p className="text-lg text-ink/70 max-w-2xl mx-auto">
                A structured approach to achieving your wellness goals
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step) => (
                <div key={step.step} className="text-center">
                  <div className="w-16 h-16 bg-teal-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-serif">
                    {step.step}
                  </div>
                  <h3 className="font-medium text-obsidian mb-2">{step.title}</h3>
                  <p className="text-sm text-ink/70">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl text-obsidian mb-4">
                  Common Questions
                </h2>
              </div>
              <FAQSection items={faqs} />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-teal-500 to-teal-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
              Begin Your Healing Journey
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Schedule a consultation to discover how medical acupuncture can support your health goals
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
                <a href="tel:602-688-4874">Call 602-688-4874</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}