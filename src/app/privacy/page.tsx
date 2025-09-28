import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Shield, Eye, Database, Users, Mail, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Forbes Integrative Medicine Phoenix | Patient Data Protection",
  description: "Learn how Forbes Integrative Medicine protects your personal health information and privacy. Our comprehensive privacy policy covers data collection, usage, and your rights.",
  keywords: "medical privacy policy Phoenix, patient data protection, HIPAA privacy, health information security",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
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
                <Shield className="h-8 w-8 text-teal-600" />
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-obsidian mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-ink/80 mb-8">
                Forbes Integrative Medicine is committed to protecting your privacy and personal health information
              </p>
              <div className="bg-white/70 rounded-lg p-4 inline-block">
                <p className="text-sm text-ink/70">
                  Last Updated: {lastUpdated} | Effective Date: {effectiveDate}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              
              {/* Introduction */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl text-obsidian mb-6">Our Privacy Commitment</h2>
                <div className="bg-porcelain rounded-lg p-6 mb-6">
                  <p className="text-ink/80 leading-relaxed">
                    Forbes Integrative Medicine ("we," "our," or "us") respects your privacy and is committed to 
                    protecting your personal information. This Privacy Policy explains how we collect, use, disclose, 
                    and safeguard your information when you visit our website, use our services, or interact with our practice.
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4">
                    <Shield className="h-8 w-8 text-teal-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-obsidian">HIPAA Compliant</p>
                    <p className="text-xs text-ink/60">Protected health information secure</p>
                  </div>
                  <div className="text-center p-4">
                    <Database className="h-8 w-8 text-teal-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-obsidian">Secure Storage</p>
                    <p className="text-xs text-ink/60">Industry-standard encryption</p>
                  </div>
                  <div className="text-center p-4">
                    <Users className="h-8 w-8 text-teal-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-obsidian">Your Rights</p>
                    <p className="text-xs text-ink/60">Access, correct, delete your data</p>
                  </div>
                </div>
              </div>

              {/* Information We Collect */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl text-obsidian mb-6 flex items-center gap-3">
                  <Database className="h-8 w-8 text-teal-600" />
                  Information We Collect
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-porcelain rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-obsidian mb-3">Personal Information</h3>
                    <ul className="space-y-2 text-ink/70">
                      <li>• Name, email address, phone number, mailing address</li>
                      <li>• Date of birth, gender, emergency contact information</li>
                      <li>• Insurance information and payment details</li>
                      <li>• Medical history and health information (protected under HIPAA)</li>
                    </ul>
                  </div>

                  <div className="bg-porcelain rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-obsidian mb-3">Website Usage Information</h3>
                    <ul className="space-y-2 text-ink/70">
                      <li>• IP address, browser type, device information</li>
                      <li>• Pages viewed, time spent on site, click patterns</li>
                      <li>• Referral source and search terms used</li>
                      <li>• Geographic location (city/state level only)</li>
                    </ul>
                  </div>

                  <div className="bg-porcelain rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-obsidian mb-3">Analytics & Marketing Data</h3>
                    <ul className="space-y-2 text-ink/70">
                      <li>• Google Analytics 4 tracking data (anonymized)</li>
                      <li>• Social media pixel data (Facebook, LinkedIn, TikTok)</li>
                      <li>• CallRail phone call tracking information</li>
                      <li>• Hotjar session recordings (anonymized)</li>
                      <li>• Cross-domain tracking with Acubliss booking portal</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use Information */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl text-obsidian mb-6 flex items-center gap-3">
                  <Eye className="h-8 w-8 text-teal-600" />
                  How We Use Your Information
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-teal-50 rounded-lg p-6 border border-teal-100">
                    <h3 className="text-xl font-semibold text-obsidian mb-4">Medical Services</h3>
                    <ul className="space-y-2 text-ink/70 text-sm">
                      <li>• Provide medical acupuncture treatments</li>
                      <li>• Maintain medical records and treatment plans</li>
                      <li>• Process insurance claims and billing</li>
                      <li>• Communicate about appointments and care</li>
                      <li>• Comply with legal and regulatory requirements</li>
                    </ul>
                  </div>

                  <div className="bg-champagne-50 rounded-lg p-6 border border-champagne-200">
                    <h3 className="text-xl font-semibold text-obsidian mb-4">Website & Marketing</h3>
                    <ul className="space-y-2 text-ink/70 text-sm">
                      <li>• Improve website performance and user experience</li>
                      <li>• Analyze site traffic and usage patterns</li>
                      <li>• Display relevant health information content</li>
                      <li>• Send appointment reminders and health tips</li>
                      <li>• Conduct marketing campaigns (with consent)</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 bg-amber-50 rounded-lg p-6 border border-amber-200">
                  <h3 className="text-lg font-semibold text-amber-800 mb-3">Important: Medical vs. Marketing Data</h3>
                  <p className="text-amber-700 text-sm leading-relaxed">
                    <strong>We never use protected health information (PHI) for marketing analytics.</strong> Your medical records, 
                    treatment details, and personal health information are strictly separated from website analytics data. 
                    Marketing tools only track general website usage, not your medical information.
                  </p>
                </div>
              </div>

              {/* Information Sharing */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl text-obsidian mb-6">Information Sharing & Disclosure</h2>
                
                <div className="space-y-6">
                  <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                    <h3 className="text-xl font-semibold text-green-800 mb-3">Healthcare Operations</h3>
                    <p className="text-green-700 text-sm mb-3">We may share your protected health information with:</p>
                    <ul className="space-y-1 text-green-700 text-sm">
                      <li>• Insurance companies for claim processing</li>
                      <li>• Other healthcare providers involved in your care</li>
                      <li>• Medical laboratories for test results</li>
                      <li>• Legal authorities when required by law</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                    <h3 className="text-xl font-semibold text-blue-800 mb-3">Service Providers</h3>
                    <p className="text-blue-700 text-sm mb-3">We work with trusted third-party services:</p>
                    <ul className="space-y-1 text-blue-700 text-sm">
                      <li>• Acubliss (appointment booking) - only scheduling data</li>
                      <li>• Google Analytics/GTM - anonymized website usage</li>
                      <li>• CallRail - phone call tracking and analytics</li>
                      <li>• Payment processors - billing and payment data</li>
                      <li>• Cloud storage providers - secure data backup</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                    <h3 className="text-xl font-semibold text-red-800 mb-3">We Never Share</h3>
                    <ul className="space-y-1 text-red-700 text-sm">
                      <li>• Medical information for marketing purposes</li>
                      <li>• Personal data with unauthorized parties</li>
                      <li>• Information for commercial gain without consent</li>
                      <li>• Data with social media platforms directly</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Cookies and Tracking */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl text-obsidian mb-6">Cookies & Tracking Technologies</h2>
                
                <div className="bg-porcelain rounded-lg p-6 mb-6">
                  <p className="text-ink/70 mb-4">
                    We use cookies and similar technologies to improve your website experience and analyze site usage. 
                    You can control these through your browser settings or our cookie consent banner.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-obsidian mb-3">Essential Cookies</h3>
                    <p className="text-sm text-ink/70 mb-3">
                      Required for website functionality (cannot be disabled):
                    </p>
                    <ul className="space-y-1 text-xs text-ink/60">
                      <li>• Session management</li>
                      <li>• Security tokens</li>
                      <li>• Cookie consent preferences</li>
                      <li>• Website performance</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-obsidian mb-3">Analytics Cookies</h3>
                    <p className="text-sm text-ink/70 mb-3">
                      Help us understand website usage (optional):
                    </p>
                    <ul className="space-y-1 text-xs text-ink/60">
                      <li>• Google Analytics 4</li>
                      <li>• Page view tracking</li>
                      <li>• User behavior analysis</li>
                      <li>• Performance metrics</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-obsidian mb-3">Marketing Cookies</h3>
                    <p className="text-sm text-ink/70 mb-3">
                      For relevant ads and content (optional):
                    </p>
                    <ul className="space-y-1 text-xs text-ink/60">
                      <li>• Facebook Pixel</li>
                      <li>• LinkedIn Insight Tag</li>
                      <li>• TikTok Pixel</li>
                      <li>• Retargeting campaigns</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-obsidian mb-3">Performance Cookies</h3>
                    <p className="text-sm text-ink/70 mb-3">
                      Optimize site speed and functionality:
                    </p>
                    <ul className="space-y-1 text-xs text-ink/60">
                      <li>• Hotjar session recordings</li>
                      <li>• Load time optimization</li>
                      <li>• Error tracking</li>
                      <li>• User experience improvements</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Your Privacy Rights */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl text-obsidian mb-6 flex items-center gap-3">
                  <Users className="h-8 w-8 text-teal-600" />
                  Your Privacy Rights
                </h2>
                
                <div className="bg-gradient-to-r from-teal-50 to-champagne-50 rounded-xl p-8 mb-6">
                  <h3 className="text-xl font-semibold text-obsidian mb-4">You Have the Right To:</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="text-teal-500 mt-1">✓</span>
                        <span className="text-sm text-ink/70">Access your personal information</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-500 mt-1">✓</span>
                        <span className="text-sm text-ink/70">Correct inaccurate information</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-500 mt-1">✓</span>
                        <span className="text-sm text-ink/70">Request deletion of your data</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-500 mt-1">✓</span>
                        <span className="text-sm text-ink/70">Opt out of marketing communications</span>
                      </li>
                    </ul>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="text-teal-500 mt-1">✓</span>
                        <span className="text-sm text-ink/70">Restrict data processing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-500 mt-1">✓</span>
                        <span className="text-sm text-ink/70">Data portability</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-500 mt-1">✓</span>
                        <span className="text-sm text-ink/70">Withdraw consent at any time</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-500 mt-1">✓</span>
                        <span className="text-sm text-ink/70">File a complaint with authorities</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50 rounded-lg p-6 border border-amber-200">
                  <h3 className="text-lg font-semibold text-amber-800 mb-3">California Residents (CCPA Rights)</h3>
                  <p className="text-amber-700 text-sm leading-relaxed">
                    California residents have additional rights under the California Consumer Privacy Act (CCPA), 
                    including the right to know what personal information is collected, the right to delete personal 
                    information, and the right to opt-out of the sale of personal information. We do not sell personal information.
                  </p>
                </div>
              </div>

              {/* Data Security */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl text-obsidian mb-6">Data Security & Retention</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                    <h3 className="text-xl font-semibold text-green-800 mb-4">Security Measures</h3>
                    <ul className="space-y-2 text-green-700 text-sm">
                      <li>• SSL/TLS encryption for data transmission</li>
                      <li>• Encrypted storage of sensitive information</li>
                      <li>• Regular security audits and updates</li>
                      <li>• Access controls and staff training</li>
                      <li>• HIPAA-compliant security standards</li>
                      <li>• Secure backup and disaster recovery</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                    <h3 className="text-xl font-semibold text-blue-800 mb-4">Data Retention</h3>
                    <ul className="space-y-2 text-blue-700 text-sm">
                      <li>• Medical records: 7 years (Arizona law)</li>
                      <li>• Website analytics: 26 months (GA4 default)</li>
                      <li>• Marketing data: 2 years or until consent withdrawn</li>
                      <li>• Call recordings: 90 days</li>
                      <li>• Payment records: 7 years for tax purposes</li>
                      <li>• Session recordings: 365 days maximum</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* International Transfers */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl text-obsidian mb-6">International Data Transfers</h2>
                <div className="bg-porcelain rounded-lg p-6">
                  <p className="text-ink/70 leading-relaxed mb-4">
                    Some of our service providers may store or process your information outside the United States. 
                    We ensure adequate protection through:
                  </p>
                  <ul className="space-y-2 text-ink/70">
                    <li>• Standard Contractual Clauses (SCCs)</li>
                    <li>• Adequacy decisions by relevant authorities</li>
                    <li>• Certified privacy frameworks</li>
                    <li>• Regular compliance assessments</li>
                  </ul>
                </div>
              </div>

              {/* Children's Privacy */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl text-obsidian mb-6">Children's Privacy</h2>
                <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                  <p className="text-purple-700 leading-relaxed mb-4">
                    Our services are not directed to children under 13. We do not knowingly collect personal 
                    information from children under 13 without parental consent. For patients under 18, we require 
                    parental or guardian consent for treatment and data collection.
                  </p>
                  <p className="text-purple-700 text-sm">
                    If you believe we have collected information from a child under 13, please contact us immediately 
                    so we can delete this information.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl text-obsidian mb-6">Contact Us About Privacy</h2>
                <div className="bg-gradient-to-r from-teal-50 to-champagne-50 rounded-xl p-8">
                  <p className="text-ink/70 mb-6">
                    For questions about this Privacy Policy or to exercise your privacy rights, contact us:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-obsidian mb-3">Privacy Officer</h3>
                      <div className="space-y-2">
                        <p className="text-sm text-ink/70 flex items-center gap-2">
                          <Mail className="h-4 w-4 text-teal-600" />
                          privacy@forbesintegrative.com
                        </p>
                        <p className="text-sm text-ink/70 flex items-center gap-2">
                          <Phone className="h-4 w-4 text-teal-600" />
                          602-688-4874
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-obsidian mb-3">Mailing Address</h3>
                      <div className="text-sm text-ink/70">
                        <p>Forbes Integrative Medicine</p>
                        <p>3104 E Camelback Rd Unit #7947</p>
                        <p>Phoenix, AZ 85016</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-teal-200">
                    <Button
                      variant="outline"
                      className="border-teal-600 text-teal-600 hover:bg-teal-50"
                      asChild
                    >
                      <a href="mailto:privacy@forbesintegrative.com">
                        <Mail className="mr-2 h-4 w-4" />
                        Contact Privacy Officer
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Changes to Policy */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl text-obsidian mb-6">Changes to This Privacy Policy</h2>
                <div className="bg-porcelain rounded-lg p-6">
                  <p className="text-ink/70 leading-relaxed mb-4">
                    We may update this Privacy Policy from time to time to reflect changes in our practices, 
                    technology, legal requirements, or other factors. We will notify you of any material changes by:
                  </p>
                  <ul className="space-y-2 text-ink/70">
                    <li>• Posting the updated policy on our website</li>
                    <li>• Sending email notification for significant changes</li>
                    <li>• Providing notice during your next visit</li>
                  </ul>
                  <p className="text-sm text-ink/60 mt-4 italic">
                    Continued use of our services after changes indicates acceptance of the updated Privacy Policy.
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