"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TrustBadgesSection } from "@/components/ui/trust-badges";
import { Button } from "@/components/ui/button";
import { 
  FileText,
  Clock,
  CreditCard,
  CheckCircle,
  AlertCircle,
  Calendar,
  Phone,
  MapPin,
  Stethoscope,
  ClipboardList,
  Shield
} from "lucide-react";
// Note: Metadata moved to layout or parent component due to "use client" directive

const preparationSteps = [
  {
    icon: FileText,
    title: "Complete Intake Forms",
    description: "Fill out your medical history and current symptoms form online before your visit",
    action: "Available 48 hours before appointment"
  },
  {
    icon: ClipboardList,
    title: "List Current Medications",
    description: "Bring a complete list of all medications, supplements, and vitamins you're taking",
    action: "Include dosages and frequency"
  },
  {
    icon: Shield,
    title: "Bring Insurance Information",
    description: "Bring your insurance card and photo ID for verification and out-of-network benefits",
    action: "We'll help process your claims"
  },
  {
    icon: Clock,
    title: "Arrive 15 Minutes Early",
    description: "Allow time for check-in and to review any remaining paperwork",
    action: "Plan for 90-120 minute first visit"
  }
];

const firstVisitProcess = [
  {
    icon: FileText,
    title: "Medical History Review",
    time: "15-20 minutes",
    description: "Comprehensive review of your health history, current symptoms, previous treatments, and health goals"
  },
  {
    icon: Stethoscope,
    title: "Physical Examination",
    time: "20-30 minutes",
    description: "Focused physical exam including pulse diagnosis, tongue examination, and assessment of affected areas"
  },
  {
    icon: CheckCircle,
    title: "Treatment Plan Discussion",
    time: "15-20 minutes",
    description: "Dr. Forbes will explain findings, discuss treatment options, and create a personalized care plan"
  },
  {
    icon: Calendar,
    title: "First Treatment (If Appropriate)",
    time: "30-45 minutes",
    description: "Initial acupuncture treatment may be performed if medically appropriate and patient consents"
  }
];

const insuranceInfo = [
  {
    title: "Out-of-Network Provider",
    description: "Forbes Integrative Medicine is an out-of-network provider for most insurance plans.",
    details: [
      "We provide detailed receipts for insurance reimbursement",
      "Many patients receive 50-80% reimbursement for out-of-network benefits",
      "We recommend calling your insurance to verify acupuncture benefits"
    ]
  },
  {
    title: "Payment Options",
    description: "We offer flexible payment options to make care accessible:",
    details: [
      "Cash, check, and all major credit cards accepted",
      "Health Savings Account (HSA) and Flexible Spending Account (FSA) eligible",
      "Payment plans available for extended treatment series"
    ]
  },
  {
    title: "Pricing Transparency",
    description: "All fees are discussed upfront with no surprise charges:",
    details: [
      "Initial consultation: Comprehensive evaluation and treatment planning",
      "Follow-up treatments: Standard acupuncture sessions",
      "Package rates available for series of treatments"
    ]
  }
];

export default function NewPatientsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-teal-50 to-champagne-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-obsidian mb-6">
                Welcome New Patients
              </h1>
              <p className="text-xl text-ink/80 mb-8">
                Your journey to optimal health begins here. Learn what to expect 
                during your first visit with Dr. Forbes at our Phoenix location.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
                  Schedule Your First Visit
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
              
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-teal-100">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <MapPin className="h-5 w-5 text-teal-600" />
                  <span className="text-lg font-semibold text-obsidian">Phoenix Location</span>
                </div>
                <p className="text-ink/70">
                  3104 E Camelback Rd Unit #7947, Phoenix, AZ 85016
                </p>
                <p className="text-ink/60 text-sm mt-2">
                  Convenient parking • Accessible location • Easy Valley access
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <TrustBadgesSection variant="horizontal" />

        {/* Preparation Steps */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-obsidian mb-4">
                Preparing for Your First Visit
              </h2>
              <p className="text-lg text-ink/70 max-w-2xl mx-auto">
                To ensure your first appointment is productive and efficient, 
                please follow these preparation steps
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {preparationSteps.map((step, index) => (
                <div key={index} className="text-center p-6 bg-porcelain rounded-xl">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4">
                    <step.icon className="h-8 w-8 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-obsidian mb-3">
                    {step.title}
                  </h3>
                  <p className="text-ink/70 mb-3 text-sm">
                    {step.description}
                  </p>
                  <p className="text-xs text-teal-600 font-medium">
                    {step.action}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-semibold text-amber-800 mb-2">
                    Important Preparation Notes
                  </h3>
                  <ul className="text-amber-700 space-y-1 text-sm">
                    <li>• Wear loose, comfortable clothing that allows easy access to arms and legs</li>
                    <li>• Avoid heavy meals 2 hours before treatment</li>
                    <li>• Limit alcohol and caffeine on treatment day</li>
                    <li>• Bring any recent lab results, imaging studies, or medical records</li>
                    <li>• If you have a bleeding disorder or take blood thinners, please inform us when scheduling</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-16 md:py-24 bg-porcelain">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl text-obsidian mb-4">
                  What to Expect During Your First Visit
                </h2>
                <p className="text-lg text-ink/70">
                  Your initial consultation typically takes 90-120 minutes and includes 
                  comprehensive evaluation and possibly your first treatment
                </p>
              </div>
              
              <div className="space-y-6">
                {firstVisitProcess.map((step, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-100 rounded-full flex-shrink-0">
                        <step.icon className="h-6 w-6 text-teal-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold text-obsidian">
                            {step.title}
                          </h3>
                          <span className="text-sm text-teal-600 bg-teal-50 px-2 py-1 rounded">
                            {step.time}
                          </span>
                        </div>
                        <p className="text-ink/70 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-teal-50 border border-teal-100 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-obsidian mb-4">
                  After Your First Visit
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-ink mb-2">Immediate Post-Treatment</h4>
                    <ul className="text-ink/70 space-y-1 text-sm">
                      <li>• Some patients may feel relaxed or slightly tired</li>
                      <li>• Drink plenty of water to support healing</li>
                      <li>• Avoid strenuous exercise for 2-4 hours</li>
                      <li>• Light activities and gentle movement are encouraged</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink mb-2">Follow-Up Care</h4>
                    <ul className="text-ink/70 space-y-1 text-sm">
                      <li>• Treatment response is often gradual and cumulative</li>
                      <li>• Follow-up appointments typically scheduled 1-2 weeks apart initially</li>
                      <li>• Dr. Forbes will monitor your progress and adjust treatment as needed</li>
                      <li>• Home care recommendations may be provided</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Insurance & Payment */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl text-obsidian mb-4">
                  Insurance & Payment Information
                </h2>
                <p className="text-lg text-ink/70">
                  We believe quality healthcare should be accessible. Here's what you 
                  need to know about insurance and payment options.
                </p>
              </div>
              
              <div className="space-y-8">
                {insuranceInfo.map((info, index) => (
                  <div key={index} className="bg-porcelain rounded-xl p-8">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-100 rounded-full flex-shrink-0">
                        <CreditCard className="h-6 w-6 text-teal-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-obsidian mb-3">
                          {info.title}
                        </h3>
                        <p className="text-ink/70 mb-4">
                          {info.description}
                        </p>
                        <ul className="space-y-2">
                          {info.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-ink/70">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-gradient-to-r from-teal-50 to-champagne-50 rounded-xl p-6 border border-teal-100">
                <h3 className="text-lg font-semibold text-obsidian mb-3">
                  Insurance Verification Assistance
                </h3>
                <p className="text-ink/70 mb-4">
                  Our office staff can help you understand your out-of-network benefits 
                  and assist with insurance claim submissions. We recommend calling your 
                  insurance provider before your first visit to ask about:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-sm text-ink/70 space-y-1">
                    <li>• Out-of-network acupuncture coverage</li>
                    <li>• Annual deductible requirements</li>
                    <li>• Percentage of reimbursement</li>
                  </ul>
                  <ul className="text-sm text-ink/70 space-y-1">
                    <li>• Maximum number of covered visits</li>
                    <li>• Required referrals or pre-authorizations</li>
                    <li>• Claim submission procedures</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Policies */}
        <section className="py-16 md:py-24 bg-porcelain">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl text-obsidian mb-8 text-center">
                Office Policies & Procedures
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-obsidian mb-4">
                    Scheduling & Cancellations
                  </h3>
                  <ul className="space-y-3 text-ink/70">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Online scheduling available 24/7</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">24-hour cancellation notice required</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Late arrival may result in shortened appointment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Same-day appointments often available</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-obsidian mb-4">
                    Privacy & Safety
                  </h3>
                  <ul className="space-y-3 text-ink/70">
                    <li className="flex items-start gap-2">
                      <Shield className="h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">HIPAA-compliant privacy practices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Single-use, sterile needles only</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Clean, sanitized treatment environment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Comprehensive safety protocols followed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-teal-500 to-teal-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
              Ready to Begin Your Health Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Dr. Forbes and our team are here to support you every step of the way. 
              Schedule your comprehensive consultation today.
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
                Schedule Your First Visit
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent text-white border-white hover:bg-white/10"
                asChild
              >
                <a href="/faq">
                  View Frequently Asked Questions
                </a>
              </Button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-white/80 text-sm">
                Questions? Call us at{" "}
                <a href="tel:602-688-4874" className="text-white underline hover:no-underline">
                  602-688-4874
                </a>
                {" "}or visit our Phoenix office Monday-Friday, 9:00 AM - 5:00 PM
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}