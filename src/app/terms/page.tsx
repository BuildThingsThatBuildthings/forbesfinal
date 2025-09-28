import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Scale, AlertTriangle, Calendar, CreditCard, Shield, FileText } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Forbes Integrative Medicine Phoenix | Medical Acupuncture Terms",
  description: "Terms of service for Forbes Integrative Medicine. Learn about our medical service agreements, policies, and patient responsibilities for acupuncture treatment in Phoenix.",
  keywords: "medical terms of service Phoenix, acupuncture treatment agreement, patient policies Phoenix, medical service terms",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  const lastUpdated = "December 15, 2024";
  const effectiveDate = "January 1, 2025";

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-teal-50 to-champagne-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-6">
                <Scale className="h-8 w-8 text-teal-600" />
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-obsidian mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-ink/80 mb-8">
                Legal terms and conditions for medical services at Forbes Integrative Medicine
              </p>
              <div className="bg-white/70 rounded-lg p-4 inline-block">
                <p className="text-sm text-ink/70">
                  Last Updated: {lastUpdated} | Effective Date: {effectiveDate}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              
              {/* Agreement to Terms */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl text-obsidian mb-6">Agreement to Terms</h2>
                <div className="bg-porcelain rounded-lg p-6 mb-6">
                  <p className="text-ink/80 leading-relaxed mb-4">
                    By accessing or using the services of Forbes Integrative Medicine ("we," "our," or "us"), 
                    including our website, booking appointments, or receiving medical treatments, you ("patient," 
                    "you," or "your") agree to be bound by these Terms of Service.
                  </p>
                  <p className="text-ink/80 leading-relaxed">
                    These terms constitute a legally binding agreement between you and Forbes Integrative Medicine, 
                    located at 3104 E Camelback Rd Unit #7947, Phoenix, AZ 85016.
                  </p>
                </div>
              </div>

              {/* Medical Service Disclaimers */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl text-obsidian mb-6 flex items-center gap-3">
                  <AlertTriangle className="h-8 w-8 text-amber-500" />
                  Medical Service Disclaimers
                </h2>
                
                <div className="bg-amber-50 rounded-xl p-8 border-2 border-amber-200 mb-6">
                  <h3 className="text-xl font-bold text-amber-800 mb-4">
                    IMPORTANT MEDICAL DISCLAIMERS - PLEASE READ CAREFULLY
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-amber-800 mb-2">No Guarantee of Results</h4>
                      <p className="text-amber-700 text-sm leading-relaxed">
                        <strong>Individual results may vary.</strong> Medical acupuncture treatments are intended to support 
                        overall wellness and may help with various conditions. However, we make no guarantees, warranties, 
                        or promises regarding treatment outcomes, cure rates, or specific results.
                      </p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-amber-800 mb-2">Not a Substitute for Medical Care</h4>
                      <p className="text-amber-700 text-sm leading-relaxed">
                        Our services complement but do not replace conventional medical care. You should continue 
                        working with your primary care physician and specialists. Never discontinue prescribed 
                        medications without consulting your prescribing physician.
                      </p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-amber-800 mb-2">Consultation Required</h4>
                      <p className="text-amber-700 text-sm leading-relaxed">
                        Treatment suitability must be determined through individual consultation. Not all patients 
                        are candidates for acupuncture. Dr. Forbes will evaluate your medical history and current 
                        health status to determine appropriate treatment.
                      </p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-amber-800 mb-2">Evidence-Based But Variable</h4>
                      <p className="text-amber-700 text-sm leading-relaxed">
                        While our treatments are based on peer-reviewed research and clinical evidence, patient 
                        responses vary significantly. Factors affecting outcomes include individual health status, 
                        condition severity, treatment compliance, and lifestyle factors.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Medical Practice Information */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl text-obsidian mb-6">Medical Practice Information</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-porcelain rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-obsidian mb-4">Licensed Physician</h3>
                    <p className="text-ink/70 text-sm leading-relaxed mb-3">
                      Dr. Forbes is a board-certified physician licensed to practice medicine in Arizona. 
                      Our medical acupuncture services are provided within the scope of medical practice.
                    </p>
                    <ul className="space-y-1 text-xs text-ink/60">
                      <li>• Board Certified in Family Medicine</li>
                      <li>• Licensed in Arizona</li>
                      <li>• Specialized training in Medical Acupuncture</li>
                      <li>• Marma therapy certification</li>
                    </ul>
                  </div>

                  <div className="bg-porcelain rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-obsidian mb-4">Practice Standards</h3>
                    <p className="text-ink/70 text-sm leading-relaxed mb-3">
                      We maintain the highest standards of medical practice and patient safety.
                    </p>
                    <ul className="space-y-1 text-xs text-ink/60">
                      <li>• HIPAA compliant privacy practices</li>
                      <li>• Sterile needling techniques</li>
                      <li>• Evidence-based treatment protocols</li>
                      <li>• Continuing medical education</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Appointment Policies */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl text-obsidian mb-6 flex items-center gap-3">
                  <Calendar className="h-8 w-8 text-teal-600" />
                  Appointment & Cancellation Policies
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-teal-50 rounded-lg p-6 border border-teal-200">
                    <h3 className="text-xl font-semibold text-teal-800 mb-4">Appointment Scheduling</h3>
                    <ul className="space-y-2 text-teal-700 text-sm">
                      <li>• Appointments can be scheduled online via Acubliss or by phone</li>
                      <li>• New patient appointments include comprehensive consultation</li>
                      <li>• Follow-up appointments are typically 30-45 minutes</li>
                      <li>• We recommend consistent appointment scheduling for optimal results</li>
                      <li>• Same-day appointments may be available based on schedule</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
                    <h3 className="text-xl font-semibold text-orange-800 mb-4">Cancellation & No-Show Policy</h3>
                    <div className="space-y-3 text-orange-700 text-sm">
                      <p>
                        <strong>24-Hour Notice Required:</strong> Appointments must be cancelled at least 24 hours 
                        in advance to avoid fees.
                      </p>
                      <p>
                        <strong>Late Cancellation Fee:</strong> Appointments cancelled with less than 24 hours notice 
                        may be subject to a $50 cancellation fee.
                      </p>
                      <p>
                        <strong>No-Show Policy:</strong> Patients who fail to appear for scheduled appointments 
                        without notice will be charged the full appointment fee.
                      </p>
                      <p>
                        <strong>Emergency Exceptions:</strong> Genuine medical emergencies or severe illness 
                        may be considered exceptions to this policy at our discretion.
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                    <h3 className="text-xl font-semibold text-blue-800 mb-4">Punctuality & Preparation</h3>
                    <ul className="space-y-2 text-blue-700 text-sm">
                      <li>• Arrive 15 minutes early for new patient appointments</li>
                      <li>• Arrive 10 minutes early for follow-up appointments</li>
                      <li>• Late arrivals may result in shortened treatment time</li>
                      <li>• Bring insurance cards and photo identification</li>
                      <li>• Come prepared with questions and current medication list</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Payment Terms */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl text-obsidian mb-6 flex items-center gap-3">
                  <CreditCard className="h-8 w-8 text-teal-600" />
                  Payment Terms & Financial Policies
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                    <h3 className="text-xl font-semibold text-green-800 mb-4">Payment Options</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-green-800 mb-2">Accepted Methods</h4>
                        <ul className="space-y-1 text-green-700 text-sm">
                          <li>• Cash payments</li>
                          <li>• Credit/debit cards</li>
                          <li>• Health Savings Account (HSA)</li>
                          <li>• Flexible Spending Account (FSA)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-800 mb-2">Payment Timing</h4>
                        <ul className="space-y-1 text-green-700 text-sm">
                          <li>• Payment due at time of service</li>
                          <li>• Insurance co-pays collected upfront</li>
                          <li>• Treatment plans may offer payment options</li>
                          <li>• Returned check fee: $35</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                    <h3 className="text-xl font-semibold text-purple-800 mb-4">Insurance Coverage</h3>
                    <div className="space-y-3 text-purple-700 text-sm">
                      <p>
                        <strong>Verification Required:</strong> We recommend contacting your insurance provider 
                        to verify acupuncture benefits before your first appointment.
                      </p>
                      <p>
                        <strong>Out-of-Network Benefits:</strong> Many plans offer out-of-network reimbursement. 
                        We provide documentation needed for reimbursement claims.
                      </p>
                      <p>
                        <strong>Pre-Authorization:</strong> Some insurance plans require pre-authorization for 
                        acupuncture services. This is the patient's responsibility to obtain.
                      </p>
                      <p>
                        <strong>Patient Responsibility:</strong> Patients are ultimately responsible for all charges, 
                        regardless of insurance coverage determinations.
                      </p>
                    </div>
                  </div>

                  <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                    <h3 className="text-xl font-semibold text-red-800 mb-4">Collections & Outstanding Balances</h3>
                    <ul className="space-y-2 text-red-700 text-sm">
                      <li>• Unpaid balances over 90 days may be sent to collections</li>
                      <li>• Collection fees and interest may be added to outstanding balances</li>
                      <li>• Services may be suspended for accounts with outstanding balances</li>
                      <li>• Payment plans are available for approved patients</li>
                      <li>• Financial hardship considerations available upon request</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Liability & Risk */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl text-obsidian mb-6 flex items-center gap-3">
                  <Shield className="h-8 w-8 text-amber-500" />
                  Liability Limitations & Assumption of Risk
                </h2>
                
                <div className="bg-amber-50 rounded-xl p-8 border-2 border-amber-200 mb-6">
                  <h3 className="text-xl font-bold text-amber-800 mb-4">
                    LIMITATION OF LIABILITY
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-amber-800 mb-2">Professional Medical Services</h4>
                      <p className="text-amber-700 text-sm leading-relaxed">
                        Medical acupuncture is a recognized medical treatment with potential risks and benefits. 
                        As with any medical procedure, there are inherent risks that cannot be eliminated entirely. 
                        By consenting to treatment, you acknowledge and accept these risks.
                      </p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-amber-800 mb-2">Limitation of Damages</h4>
                      <p className="text-amber-700 text-sm leading-relaxed">
                        To the maximum extent permitted by law, Forbes Integrative Medicine's liability for any 
                        claim related to services provided shall not exceed the amount paid for the specific 
                        treatment session in question.
                      </p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-amber-800 mb-2">No Consequential Damages</h4>
                      <p className="text-amber-700 text-sm leading-relaxed">
                        We shall not be liable for indirect, incidental, special, or consequential damages, 
                        including lost wages, travel expenses, or other economic losses, regardless of the 
                        theory of liability.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">Informed Consent & Risk Acceptance</h3>
                  <p className="text-blue-700 text-sm leading-relaxed mb-3">
                    By receiving treatment, you acknowledge that you have been informed of:
                  </p>
                  <ul className="space-y-1 text-blue-700 text-sm">
                    <li>• The nature of acupuncture treatment and procedures</li>
                    <li>• Potential risks and side effects (bruising, minor bleeding, temporary soreness)</li>
                    <li>• Alternative treatment options</li>
                    <li>• The voluntary nature of treatment</li>
                    <li>• The right to refuse or discontinue treatment at any time</li>
                  </ul>
                </div>
              </div>

              {/* Patient Responsibilities */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl text-obsidian mb-6">Patient Responsibilities</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-porcelain rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-obsidian mb-4">Medical History & Honesty</h3>
                    <ul className="space-y-2 text-ink/70 text-sm">
                      <li>• Provide complete and accurate medical history</li>
                      <li>• Disclose all medications and supplements</li>
                      <li>• Report any changes in health status</li>
                      <li>• Inform us of pregnancy or potential pregnancy</li>
                      <li>• Report any adverse reactions promptly</li>
                    </ul>
                  </div>

                  <div className="bg-porcelain rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-obsidian mb-4">Treatment Compliance</h3>
                    <ul className="space-y-2 text-ink/70 text-sm">
                      <li>• Follow treatment recommendations</li>
                      <li>• Attend scheduled appointments</li>
                      <li>• Communicate concerns or questions</li>
                      <li>• Maintain realistic expectations</li>
                      <li>• Participate actively in your care</li>
                    </ul>
                  </div>

                  <div className="bg-porcelain rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-obsidian mb-4">Respectful Behavior</h3>
                    <ul className="space-y-2 text-ink/70 text-sm">
                      <li>• Treat staff with courtesy and respect</li>
                      <li>• Maintain appropriate boundaries</li>
                      <li>• Follow office policies and procedures</li>
                      <li>• Respect other patients' privacy</li>
                      <li>• Use cell phones appropriately</li>
                    </ul>
                  </div>

                  <div className="bg-porcelain rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-obsidian mb-4">Financial Obligations</h3>
                    <ul className="space-y-2 text-ink/70 text-sm">
                      <li>• Pay for services as agreed</li>
                      <li>• Provide accurate insurance information</li>
                      <li>• Communicate financial concerns</li>
                      <li>• Honor payment arrangements</li>
                      <li>• Update contact and billing information</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Website Terms */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl text-obsidian mb-6">Website Use Terms</h2>
                
                <div className="space-y-6">
                  <div className="bg-porcelain rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-obsidian mb-4">Acceptable Use</h3>
                    <p className="text-ink/70 text-sm leading-relaxed mb-3">
                      Our website is provided for informational purposes and appointment scheduling. You agree to use 
                      the website only for lawful purposes and in accordance with these terms.
                    </p>
                    <ul className="space-y-1 text-ink/70 text-sm">
                      <li>• Do not attempt to hack, damage, or disrupt the website</li>
                      <li>• Do not post or transmit harmful content</li>
                      <li>• Do not violate any applicable laws or regulations</li>
                      <li>• Do not infringe on intellectual property rights</li>
                    </ul>
                  </div>

                  <div className="bg-porcelain rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-obsidian mb-4">Intellectual Property</h3>
                    <p className="text-ink/70 text-sm leading-relaxed mb-3">
                      All content on this website, including text, images, logos, and design elements, is owned by 
                      Forbes Integrative Medicine and protected by copyright and trademark laws.
                    </p>
                    <ul className="space-y-1 text-ink/70 text-sm">
                      <li>• Content may not be copied without permission</li>
                      <li>• Trademarks may not be used without authorization</li>
                      <li>• Personal use of information is permitted</li>
                      <li>• Commercial use requires written consent</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Governing Law */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl text-obsidian mb-6">Governing Law & Jurisdiction</h2>
                
                <div className="bg-gradient-to-r from-teal-50 to-champagne-50 rounded-xl p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold text-obsidian mb-4">Arizona Law</h3>
                      <p className="text-ink/70 text-sm leading-relaxed">
                        These Terms of Service shall be governed by and construed in accordance with the laws of 
                        the State of Arizona, without regard to conflict of law principles.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-obsidian mb-4">Dispute Resolution</h3>
                      <p className="text-ink/70 text-sm leading-relaxed">
                        Any disputes arising under these terms shall be resolved in the appropriate courts of 
                        Maricopa County, Arizona. Both parties consent to the jurisdiction of these courts.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-teal-200">
                    <h3 className="text-lg font-semibold text-obsidian mb-3">Severability</h3>
                    <p className="text-ink/70 text-sm leading-relaxed">
                      If any provision of these terms is found to be unenforceable or invalid, the remaining 
                      provisions shall continue to be valid and enforceable to the fullest extent permitted by law.
                    </p>
                  </div>
                </div>
              </div>

              {/* Changes to Terms */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl text-obsidian mb-6">Changes to Terms</h2>
                <div className="bg-porcelain rounded-lg p-6">
                  <p className="text-ink/70 leading-relaxed mb-4">
                    We reserve the right to modify these Terms of Service at any time. Changes will be effective 
                    immediately upon posting on our website. We will make reasonable efforts to notify patients 
                    of material changes through:
                  </p>
                  <ul className="space-y-2 text-ink/70">
                    <li>• Website posting with updated date</li>
                    <li>• Email notification for significant changes</li>
                    <li>• Notice provided during appointments</li>
                  </ul>
                  <p className="text-sm text-ink/60 mt-4 italic">
                    Continued use of our services after changes indicates acceptance of the updated terms.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl text-obsidian mb-6 flex items-center gap-3">
                  <FileText className="h-8 w-8 text-teal-600" />
                  Questions About These Terms
                </h2>
                <div className="bg-gradient-to-r from-teal-50 to-champagne-50 rounded-xl p-8">
                  <p className="text-ink/70 mb-6">
                    If you have questions about these Terms of Service or need clarification on any policy:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-obsidian mb-3">Practice Administrator</h3>
                      <div className="space-y-2 text-sm text-ink/70">
                        <p>Forbes Integrative Medicine</p>
                        <p>3104 E Camelback Rd Unit #7947</p>
                        <p>Phoenix, AZ 85016</p>
                        <p>Phone: 602-688-4874</p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-obsidian mb-3">Office Hours</h3>
                      <div className="space-y-1 text-sm text-ink/70">
                        <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                        <p>Saturday: By appointment</p>
                        <p>Sunday: Closed</p>
                        <p className="text-xs italic text-ink/60 mt-2">
                          Emergency consultations available by arrangement
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-teal-200">
                    <Button
                      variant="outline"
                      className="border-teal-600 text-teal-600 hover:bg-teal-50"
                      asChild
                    >
                      <a href="tel:602-688-4874">
                        Call 602-688-4874
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Acknowledgment */}
              <div className="mb-12">
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8 border-2 border-amber-200">
                  <h3 className="text-xl font-bold text-amber-800 mb-4">
                    Acknowledgment of Terms
                  </h3>
                  <p className="text-amber-700 text-sm leading-relaxed">
                    <strong>By scheduling an appointment, receiving treatment, or using our website, you acknowledge 
                    that you have read, understood, and agree to be bound by these Terms of Service.</strong> 
                    You also acknowledge that you have had the opportunity to ask questions about these terms 
                    and that any questions have been answered to your satisfaction.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}