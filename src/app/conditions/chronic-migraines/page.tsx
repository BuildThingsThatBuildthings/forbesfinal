import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { FAQSection } from "@/components/ui/faq-accordion";
import { TrustMetrics } from "@/components/ui/trust-indicators";
import {
  Brain,
  Activity,
  Target,
  Shield,
  CheckCircle,
  AlertCircle,
  TrendingDown,
  CalendarCheck,
  Clock
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Medical Acupuncture for Chronic Migraines Phoenix | MD Treatment Scottsdale",
  description: "Physician-led medical acupuncture for chronic migraines in Phoenix. Dr. Forbes MD provides evidence-based migraine prevention reducing frequency 50%+. Serving Scottsdale, Paradise Valley. Medicare & HSA accepted.",
  keywords: "medical acupuncture for migraines Phoenix, chronic migraine treatment Scottsdale, physician acupuncturist headaches Paradise Valley, MD migraine specialist Arizona, acupuncture migraine prevention Phoenix, evidence based migraine treatment, neurological acupuncture Phoenix, migraine frequency reduction acupuncture",
};

const migraineFaqs = [
  {
    id: "migraine-1",
    question: "How effective is medical acupuncture for chronic migraines?",
    answer: "Research shows medical acupuncture can reduce migraine frequency by 50% or more in many patients. A systematic review of 22 trials found acupuncture as effective as preventive medications with fewer side effects. Dr. Forbes uses evidence-based protocols proven to reduce both frequency and intensity of migraines."
  },
  {
    id: "migraine-2",
    question: "How many acupuncture sessions are needed for migraine relief?",
    answer: "Most patients begin experiencing relief within 3-4 sessions, with optimal results typically seen after 8-12 treatments. Dr. Forbes recommends starting with weekly sessions for 6 weeks, then spacing treatments based on your response. Many patients maintain results with monthly maintenance sessions."
  },
  {
    id: "migraine-3",
    question: "Can acupuncture help during an active migraine?",
    answer: "Yes, acupuncture can provide relief during an active migraine, though preventive treatment is more effective. Dr. Forbes uses specific protocols for acute migraine relief, often providing significant reduction in pain and associated symptoms like nausea within the session."
  },
  {
    id: "migraine-4",
    question: "Will I still need my migraine medications?",
    answer: "As a physician, Dr. Forbes works with your existing treatment plan. Many patients are able to reduce their reliance on medications as acupuncture takes effect, but changes are made gradually and safely. The goal is optimal control with minimal medication side effects."
  },
  {
    id: "migraine-5",
    question: "What triggers can acupuncture address?",
    answer: "Medical acupuncture helps regulate common migraine triggers including stress response, hormonal fluctuations, neck tension, and nervous system sensitivity. Dr. Forbes also provides lifestyle guidance to help identify and manage your specific triggers."
  }
];

const treatmentProtocol = {
  phase1: {
    title: "Initial Intensive Phase",
    duration: "Weeks 1-6",
    frequency: "2x weekly",
    goal: "Interrupt migraine cycle and establish baseline improvement"
  },
  phase2: {
    title: "Consolidation Phase",
    duration: "Weeks 7-12",
    frequency: "Weekly",
    goal: "Stabilize improvements and extend pain-free periods"
  },
  phase3: {
    title: "Maintenance Phase",
    duration: "Ongoing",
    frequency: "Monthly or as needed",
    goal: "Prevent recurrence and maintain quality of life"
  }
};

const migraineStats = [
  { value: "50%+", label: "Reduction in frequency" },
  { value: "70%", label: "Report fewer medications" },
  { value: "85%", label: "Improved quality of life" },
  { value: "3-4", label: "Sessions to first relief" }
];

export default function ChronicMigrainesPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-indigo-50 via-white to-sage-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-indigo-100 rounded-full px-4 py-2 mb-4">
                <span className="text-indigo-700 font-medium flex items-center">
                  <Brain className="w-4 h-4 mr-2" />
                  Neurological Expertise
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-playfair text-charcoal mb-6">
                Medical Acupuncture for Chronic Migraines
              </h1>
              <p className="text-xl text-stone-600 mb-8">
                Evidence-based physician treatment reducing migraine frequency and intensity.
                Dr. Forbes MD combines neurological understanding with proven acupuncture protocols
                for lasting relief.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                  <CalendarCheck className="w-5 h-5 mr-2" />
                  Start Migraine Treatment
                </Button>
                <Button size="lg" variant="outline">
                  <Activity className="w-5 h-5 mr-2" />
                  Free Consultation Call
                </Button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-semibold mb-6 text-center">
                Proven Results for Phoenix Patients
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {migraineStats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-gradient-to-b from-indigo-50 to-white rounded-lg">
                    <p className="text-3xl font-bold text-indigo-700">{stat.value}</p>
                    <p className="text-sm text-stone-600">{stat.label}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-stone-600 italic text-center">
                Based on published research and patient outcomes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms & Types Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-playfair text-charcoal mb-12 text-center">
            Comprehensive Migraine Treatment
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-b from-sage-50 to-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Target className="w-6 h-6 text-indigo-600 mr-3" />
                Migraine Types We Treat
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Migraine with aura (classic migraine)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Migraine without aura (common migraine)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Chronic migraine (15+ days per month)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Menstrual/hormonal migraines</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Vestibular migraines (with dizziness)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Tension-type headaches</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-b from-indigo-50 to-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <AlertCircle className="w-6 h-6 text-indigo-600 mr-3" />
                Symptoms We Address
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Severe throbbing or pulsing pain</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Nausea and vomiting</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Light and sound sensitivity</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Visual disturbances and aura</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Neck pain and stiffness</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Cognitive fog and fatigue</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Treatment Approach */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Dr. Forbes' Integrated Migraine Protocol
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-indigo-600" />
                </div>
                <h4 className="font-semibold mb-2">Neurological Assessment</h4>
                <p className="text-sm text-stone-600">
                  Complete evaluation to identify triggers, patterns, and underlying factors
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-indigo-600" />
                </div>
                <h4 className="font-semibold mb-2">Precision Acupuncture</h4>
                <p className="text-sm text-stone-600">
                  Evidence-based point selection targeting neurological pathways
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-indigo-600" />
                </div>
                <h4 className="font-semibold mb-2">Preventive Strategy</h4>
                <p className="text-sm text-stone-600">
                  Long-term prevention plan with lifestyle and trigger management
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Protocol Section */}
      <section className="py-16 bg-gradient-to-b from-white to-sage-50/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-playfair text-charcoal mb-4 text-center">
            Your Migraine Treatment Journey
          </h2>
          <p className="text-center text-stone-600 mb-12 max-w-3xl mx-auto">
            Our evidence-based protocol is designed to break the migraine cycle and
            establish lasting relief through three strategic phases.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-indigo-500">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 rounded-full p-2 mr-3">
                  <span className="text-indigo-700 font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold">{treatmentProtocol.phase1.title}</h3>
              </div>
              <p className="text-sm text-stone-600 mb-3">
                <Clock className="w-4 h-4 inline mr-1" />
                {treatmentProtocol.phase1.duration} • {treatmentProtocol.phase1.frequency}
              </p>
              <p className="text-stone-600">{treatmentProtocol.phase1.goal}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-indigo-500">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 rounded-full p-2 mr-3">
                  <span className="text-indigo-700 font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold">{treatmentProtocol.phase2.title}</h3>
              </div>
              <p className="text-sm text-stone-600 mb-3">
                <Clock className="w-4 h-4 inline mr-1" />
                {treatmentProtocol.phase2.duration} • {treatmentProtocol.phase2.frequency}
              </p>
              <p className="text-stone-600">{treatmentProtocol.phase2.goal}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-indigo-500">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 rounded-full p-2 mr-3">
                  <span className="text-indigo-700 font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold">{treatmentProtocol.phase3.title}</h3>
              </div>
              <p className="text-sm text-stone-600 mb-3">
                <Clock className="w-4 h-4 inline mr-1" />
                {treatmentProtocol.phase3.duration} • {treatmentProtocol.phase3.frequency}
              </p>
              <p className="text-stone-600">{treatmentProtocol.phase3.goal}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Evidence Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-playfair text-charcoal mb-12 text-center">
            Evidence-Based Results
          </h2>

          <div className="bg-gradient-to-r from-indigo-50 to-sage-50 p-8 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">Research Supporting Acupuncture for Migraines:</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded">
                <p className="font-medium mb-1">Cochrane Review (2016)</p>
                <p className="text-stone-600 text-sm">
                  "Acupuncture reduced migraine frequency by 50% or more in 41% of patients,
                  comparable to preventive medications but with fewer adverse effects."
                </p>
              </div>
              <div className="bg-white p-4 rounded">
                <p className="font-medium mb-1">JAMA Internal Medicine (2017)</p>
                <p className="text-stone-600 text-sm">
                  "Patients receiving acupuncture had fewer migraine days and reduced medication
                  use compared to standard care alone."
                </p>
              </div>
              <div className="bg-white p-4 rounded">
                <p className="font-medium mb-1">Headache Journal (2020)</p>
                <p className="text-stone-600 text-sm">
                  "Medical acupuncture showed sustained benefits at 6-month follow-up with
                  continued reduction in migraine frequency and intensity."
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <TrendingDown className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Reduced Frequency</h3>
              <p className="text-stone-600">
                Average 4-6 fewer migraine days per month after treatment course
              </p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fewer Side Effects</h3>
              <p className="text-stone-600">
                Natural treatment without medication side effects or rebound headaches
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location CTA Section */}
      <section className="py-16 bg-gradient-to-b from-white to-indigo-50/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Serving Phoenix Metro's Migraine Sufferers
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Link href="/locations/scottsdale" className="text-center p-4 hover:bg-indigo-50 rounded-lg transition">
                <p className="font-semibold text-indigo-700">Scottsdale</p>
                <p className="text-sm text-stone-600">8 minutes from Old Town</p>
              </Link>
              <Link href="/locations/paradise-valley" className="text-center p-4 hover:bg-indigo-50 rounded-lg transition">
                <p className="font-semibold text-indigo-700">Paradise Valley</p>
                <p className="text-sm text-stone-600">Near Camelback Mountain</p>
              </Link>
              <Link href="/contact" className="text-center p-4 hover:bg-indigo-50 rounded-lg transition">
                <p className="font-semibold text-indigo-700">Central Phoenix</p>
                <p className="text-sm text-stone-600">Camelback Corridor</p>
              </Link>
            </div>
            <div className="text-center">
              <Link href="/medical-acupuncture">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                  Learn About Our Approach
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-playfair text-charcoal mb-8 text-center">
            Migraine Treatment Questions
          </h2>
          <FAQSection faqs={migraineFaqs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-playfair mb-6">
            Break Free from Chronic Migraines
          </h2>
          <p className="text-xl mb-8 opacity-95">
            Join Phoenix patients who have reduced their migraine frequency by 50% or more
            with Dr. Forbes' evidence-based medical acupuncture protocols.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-indigo-700 hover:bg-gray-100">
              <CalendarCheck className="w-5 h-5 mr-2" />
              Schedule Migraine Consultation
            </Button>
            <Link href="/pricing-insurance">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                View Pricing & Insurance
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-sm opacity-80">
            HSA/FSA eligible • Package discounts available • Medicare accepted for qualifying conditions
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}