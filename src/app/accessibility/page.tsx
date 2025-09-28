import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Eye, Ear, Mouse, Keyboard, Smartphone, Mail, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement | Forbes Integrative Medicine Phoenix | Website Accessibility",
  description: "Learn about Forbes Integrative Medicine's commitment to digital accessibility and accommodations for patients with disabilities visiting our Phoenix acupuncture practice.",
  keywords: "website accessibility Phoenix, ADA compliance medical website, disability accommodations Phoenix, accessible healthcare",
  robots: {
    index: true,
    follow: true,
  },
};

export default function AccessibilityPage() {
  const lastUpdated = "December 15, 2024";

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-teal-50 to-champagne-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-6">
                <Eye className="h-8 w-8 text-teal-600" />
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-obsidian mb-6">
                Accessibility Statement
              </h1>
              <p className="text-xl text-ink/80 mb-8">
                Forbes Integrative Medicine is committed to ensuring digital accessibility for people with disabilities
              </p>
              <div className="bg-white/70 rounded-lg p-4 inline-block">
                <p className="text-sm text-ink/70">
                  Last Updated: {lastUpdated}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Accessibility Content */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              
              {/* Our Commitment */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl text-obsidian mb-6">Our Accessibility Commitment</h2>
                <div className="bg-porcelain rounded-lg p-6 mb-6">
                  <p className="text-ink/80 leading-relaxed mb-4">
                    Forbes Integrative Medicine believes that healthcare information and services should be accessible 
                    to all patients, including those with disabilities. We are committed to ensuring that our website 
                    and digital platforms are accessible to individuals with a wide range of abilities and disabilities.
                  </p>
                  <p className="text-ink/80 leading-relaxed">
                    We continually work to improve the accessibility of our website and ensure it meets or exceeds 
                    the standards outlined in the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-teal-50 rounded-lg">
                    <Eye className="h-8 w-8 text-teal-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-obsidian">Visual</p>
                    <p className="text-xs text-ink/60">Screen readers, high contrast</p>
                  </div>
                  <div className="text-center p-4 bg-teal-50 rounded-lg">
                    <Ear className="h-8 w-8 text-teal-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-obsidian">Hearing</p>
                    <p className="text-xs text-ink/60">Captions, visual alerts</p>
                  </div>
                  <div className="text-center p-4 bg-teal-50 rounded-lg">
                    <Mouse className="h-8 w-8 text-teal-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-obsidian">Motor</p>
                    <p className="text-xs text-ink/60">Keyboard navigation</p>
                  </div>
                  <div className="text-center p-4 bg-teal-50 rounded-lg">
                    <Smartphone className="h-8 w-8 text-teal-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-obsidian">Cognitive</p>
                    <p className="text-xs text-ink/60">Clear language, consistent design</p>
                  </div>
                </div>
              </div>

              {/* Accessibility Features */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl text-obsidian mb-6">Current Accessibility Features</h2>
                
                <div className="space-y-6">
                  <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                    <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center gap-3">
                      <Eye className="h-6 w-6" />
                      Visual Accessibility
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="space-y-2 text-green-700 text-sm">
                        <li>• High contrast color schemes</li>
                        <li>• Sufficient color contrast ratios (WCAG AA compliant)</li>
                        <li>• Resizable text up to 200% without horizontal scrolling</li>
                        <li>• Alternative text for all images and graphics</li>
                        <li>• Clear focus indicators for interactive elements</li>
                      </ul>
                      <ul className="space-y-2 text-green-700 text-sm">
                        <li>• Consistent navigation structure</li>
                        <li>• Descriptive headings and page titles</li>
                        <li>• No content that flashes or strobes</li>
                        <li>• Screen reader compatible design</li>
                        <li>• Semantic HTML markup</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                    <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center gap-3">
                      <Keyboard className="h-6 w-6" />
                      Keyboard & Navigation
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="space-y-2 text-blue-700 text-sm">
                        <li>• Full keyboard navigation support</li>
                        <li>• Tab order follows logical sequence</li>
                        <li>• Skip links to main content</li>
                        <li>• Clear focus indicators</li>
                        <li>• No keyboard traps</li>
                      </ul>
                      <ul className="space-y-2 text-blue-700 text-sm">
                        <li>• Accessible dropdown menus</li>
                        <li>• Form fields with proper labels</li>
                        <li>• Error messages clearly identified</li>
                        <li>• Consistent navigation patterns</li>
                        <li>• Breadcrumb navigation where appropriate</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                    <h3 className="text-xl font-semibold text-purple-800 mb-4 flex items-center gap-3">
                      <Smartphone className="h-6 w-6" />
                      Mobile & Touch Accessibility
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="space-y-2 text-purple-700 text-sm">
                        <li>• Responsive design for all screen sizes</li>
                        <li>• Touch targets at least 44x44 pixels</li>
                        <li>• Adequate spacing between clickable elements</li>
                        <li>• Portrait and landscape orientation support</li>
                        <li>• Voice control compatibility</li>
                      </ul>
                      <ul className="space-y-2 text-purple-700 text-sm">
                        <li>• Mobile screen reader support</li>
                        <li>• Zoom functionality up to 500%</li>
                        <li>• Large text options</li>
                        <li>• Simple gesture navigation</li>
                        <li>• Reduced motion options</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-amber-50 rounded-lg p-6 border border-amber-200">
                    <h3 className="text-xl font-semibold text-amber-800 mb-4">Content & Language</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="space-y-2 text-amber-700 text-sm">
                        <li>• Plain language and clear communication</li>
                        <li>• Consistent terminology throughout site</li>
                        <li>• Descriptive link text</li>
                        <li>• Proper document structure with headings</li>
                        <li>• Error prevention and clear error messages</li>
                      </ul>
                      <ul className="space-y-2 text-amber-700 text-sm">
                        <li>• Consistent page layouts and navigation</li>
                        <li>• Instructions provided for complex tasks</li>
                        <li>• Time limits can be extended or removed</li>
                        <li>• Content organized logically</li>
                        <li>• Medical terms explained when used</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Assistive Technology Compatibility */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl text-obsidian mb-6">Assistive Technology Compatibility</h2>
                
                <div className="bg-porcelain rounded-lg p-6 mb-6">
                  <p className="text-ink/80 leading-relaxed mb-4">
                    Our website is designed to be compatible with a wide range of assistive technologies and 
                    has been tested with various tools to ensure broad accessibility.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-obsidian mb-4">Screen Readers</h3>
                    <ul className="space-y-2 text-ink/70 text-sm">
                      <li>• NVDA (NonVisual Desktop Access)</li>
                      <li>• JAWS (Job Access With Speech)</li>
                      <li>• VoiceOver (macOS/iOS)</li>
                      <li>• TalkBack (Android)</li>
                      <li>• Dragon NaturallySpeaking</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-champagne-50 to-amber-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-obsidian mb-4">Browsers & Platforms</h3>
                    <ul className="space-y-2 text-ink/70 text-sm">
                      <li>• Chrome, Firefox, Safari, Edge</li>
                      <li>• Windows, macOS, iOS, Android</li>
                      <li>• Voice recognition software</li>
                      <li>• Switch navigation devices</li>
                      <li>• Eye-tracking systems</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Accessibility Standards */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl text-obsidian mb-6">Standards & Guidelines We Follow</h2>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-8">
                    <h3 className="text-xl font-semibold text-obsidian mb-4">WCAG 2.2 Level AA Compliance</h3>
                    <p className="text-ink/70 text-sm leading-relaxed mb-4">
                      We strive to meet the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA standards, 
                      which are internationally recognized best practices for web accessibility.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-obsidian mb-2">Four Principles of WCAG:</h4>
                        <ul className="space-y-1 text-ink/70 text-sm">
                          <li><strong>Perceivable:</strong> Information presented in ways users can perceive</li>
                          <li><strong>Operable:</strong> Interface components users can operate</li>
                          <li><strong>Understandable:</strong> Information and UI operation must be understandable</li>
                          <li><strong>Robust:</strong> Content can be interpreted by a wide variety of assistive technologies</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-obsidian mb-2">Additional Standards:</h4>
                        <ul className="space-y-1 text-ink/70 text-sm">
                          <li>• Section 508 (Rehabilitation Act)</li>
                          <li>• ADA (Americans with Disabilities Act)</li>
                          <li>• EN 301 549 (European Standard)</li>
                          <li>• AODA (Accessibility for Ontarians with Disabilities Act)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Physical Practice Accessibility */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl text-obsidian mb-6">Physical Practice Accessibility</h2>
                
                <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                  <p className="text-blue-700 leading-relaxed mb-4">
                    Our Phoenix practice location is designed to accommodate patients with various accessibility needs:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-blue-800 mb-2">Building Access</h3>
                      <ul className="space-y-1 text-blue-700 text-sm">
                        <li>• ADA-compliant entrance</li>
                        <li>• Accessible parking spaces available</li>
                        <li>• Elevator access to office</li>
                        <li>• Wide doorways and hallways</li>
                        <li>• Accessible restroom facilities</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-blue-800 mb-2">Treatment Accommodations</h3>
                      <ul className="space-y-1 text-blue-700 text-sm">
                        <li>• Wheelchair accessible treatment rooms</li>
                        <li>• Adjustable treatment tables</li>
                        <li>• Clear communication protocols</li>
                        <li>• Extended appointment times when needed</li>
                        <li>• Assistance with forms and paperwork</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-blue-200">
                    <p className="text-blue-700 text-sm">
                      <strong>Address:</strong> 3104 E Camelback Rd Unit #7947, Phoenix, AZ 85016
                    </p>
                  </div>
                </div>
              </div>

              {/* Ongoing Improvements */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl text-obsidian mb-6">Ongoing Accessibility Improvements</h2>
                
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8">
                  <p className="text-ink/80 leading-relaxed mb-6">
                    Accessibility is an ongoing commitment. We regularly review and improve our website and services 
                    to ensure they remain accessible to all users. Our current initiatives include:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-obsidian mb-3">Current Projects</h3>
                      <ul className="space-y-2 text-ink/70 text-sm">
                        <li>• Regular accessibility audits</li>
                        <li>• User testing with individuals with disabilities</li>
                        <li>• Staff training on accessibility best practices</li>
                        <li>• Technology updates for better compatibility</li>
                        <li>• Content review for plain language</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-obsidian mb-3">Future Enhancements</h3>
                      <ul className="space-y-2 text-ink/70 text-sm">
                        <li>• Voice navigation improvements</li>
                        <li>• Enhanced mobile accessibility</li>
                        <li>• Multi-language support</li>
                        <li>• Advanced screen reader optimization</li>
                        <li>• Improved form accessibility</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Request Accommodation */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl text-obsidian mb-6">Request an Accommodation</h2>
                
                <div className="bg-gradient-to-r from-teal-50 to-champagne-50 rounded-xl p-8">
                  <p className="text-ink/70 leading-relaxed mb-6">
                    If you need specific accommodations to access our website or services, or if you encounter 
                    any accessibility barriers, please contact us. We are committed to working with you to find 
                    appropriate solutions.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-obsidian mb-3">Contact Methods</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Phone className="h-5 w-5 text-teal-600" />
                          <div>
                            <p className="font-medium text-obsidian">Phone</p>
                            <a href="tel:602-688-4874" className="text-sm text-teal-600 hover:underline">
                              602-688-4874
                            </a>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <Mail className="h-5 w-5 text-teal-600" />
                          <div>
                            <p className="font-medium text-obsidian">Email</p>
                            <a href="mailto:accessibility@forbesintegrative.com" className="text-sm text-teal-600 hover:underline">
                              accessibility@forbesintegrative.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-obsidian mb-3">What to Include</h3>
                      <ul className="space-y-1 text-ink/70 text-sm">
                        <li>• Description of the accessibility barrier</li>
                        <li>• Specific accommodation needed</li>
                        <li>• Your preferred contact method</li>
                        <li>• Urgency of the request</li>
                        <li>• Any relevant assistive technology used</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-teal-200">
                    <p className="text-ink/60 text-sm">
                      <strong>Response Time:</strong> We strive to respond to accessibility requests within 2 business days. 
                      Urgent requests will be addressed as quickly as possible.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feedback */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl text-obsidian mb-6">Accessibility Feedback</h2>
                
                <div className="bg-porcelain rounded-lg p-6">
                  <p className="text-ink/70 leading-relaxed mb-4">
                    We welcome feedback on the accessibility of Forbes Integrative Medicine's website and services. 
                    Your input helps us identify areas for improvement and better serve all patients.
                  </p>
                  
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <h3 className="font-semibold text-obsidian mb-2">We Want to Hear From You</h3>
                    <ul className="space-y-1 text-ink/70 text-sm">
                      <li>• Report accessibility barriers or challenges</li>
                      <li>• Suggest improvements to our website or services</li>
                      <li>• Share your experience using assistive technology</li>
                      <li>• Provide feedback on accommodations received</li>
                      <li>• Recommend additional accessibility features</li>
                    </ul>
                  </div>
                  
                  <div className="mt-6">
                    <Button
                      variant="outline"
                      className="border-teal-600 text-teal-600 hover:bg-teal-50 mr-4"
                      asChild
                    >
                      <a href="mailto:accessibility@forbesintegrative.com">
                        <Mail className="mr-2 h-4 w-4" />
                        Send Accessibility Feedback
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      className="border-teal-600 text-teal-600 hover:bg-teal-50"
                      asChild
                    >
                      <a href="tel:602-688-4874">
                        <Phone className="mr-2 h-4 w-4" />
                        Call 602-688-4874
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Third Party Content */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl text-obsidian mb-6">Third-Party Content & Services</h2>
                
                <div className="bg-amber-50 rounded-lg p-6 border border-amber-200">
                  <p className="text-amber-700 leading-relaxed mb-4">
                    Our website may contain links to third-party websites or services (such as our booking system, 
                    insurance verification tools, or educational resources). While we strive to link only to accessible 
                    external content, we cannot guarantee the accessibility of third-party sites.
                  </p>
                  
                  <div className="bg-white rounded-lg p-4">
                    <h3 className="font-semibold text-amber-800 mb-2">What We Do</h3>
                    <ul className="space-y-1 text-amber-700 text-sm">
                      <li>• Evaluate third-party services for accessibility</li>
                      <li>• Provide alternative access methods when possible</li>
                      <li>• Work with vendors to improve accessibility</li>
                      <li>• Offer assistance with third-party services</li>
                    </ul>
                  </div>
                  
                  <p className="text-amber-700 text-sm mt-4">
                    If you encounter accessibility issues with any linked content or services, please contact us 
                    for assistance or alternative access methods.
                  </p>
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl text-obsidian mb-6">Technical Accessibility Information</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-porcelain rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-obsidian mb-4">Website Technology</h3>
                    <ul className="space-y-2 text-ink/70 text-sm">
                      <li>• HTML5 semantic markup</li>
                      <li>• ARIA (Accessible Rich Internet Applications) labels</li>
                      <li>• CSS for visual presentation</li>
                      <li>• JavaScript for enhanced functionality</li>
                      <li>• Responsive web design</li>
                      <li>• Progressive enhancement principles</li>
                    </ul>
                  </div>

                  <div className="bg-porcelain rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-obsidian mb-4">Testing Methods</h3>
                    <ul className="space-y-2 text-ink/70 text-sm">
                      <li>• Automated accessibility testing tools</li>
                      <li>• Manual keyboard navigation testing</li>
                      <li>• Screen reader compatibility testing</li>
                      <li>• Color contrast analysis</li>
                      <li>• Mobile device accessibility testing</li>
                      <li>• User testing with individuals with disabilities</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Legal Compliance */}
              <div className="mb-12">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
                  <h3 className="text-xl font-semibold text-obsidian mb-4">Legal & Regulatory Compliance</h3>
                  <p className="text-ink/70 leading-relaxed mb-4">
                    Forbes Integrative Medicine is committed to compliance with applicable accessibility laws and 
                    regulations, including:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <ul className="space-y-2 text-ink/70 text-sm">
                      <li>• Americans with Disabilities Act (ADA)</li>
                      <li>• Section 508 of the Rehabilitation Act</li>
                      <li>• Arizona accessibility requirements</li>
                      <li>• Healthcare accessibility standards</li>
                    </ul>
                    <ul className="space-y-2 text-ink/70 text-sm">
                      <li>• Web Content Accessibility Guidelines (WCAG)</li>
                      <li>• Section 1557 of the Affordable Care Act</li>
                      <li>• Phoenix municipal accessibility requirements</li>
                      <li>• Medical practice accessibility standards</li>
                    </ul>
                  </div>
                  
                  <p className="text-ink/60 text-sm mt-4 italic">
                    This accessibility statement was last reviewed and updated on {lastUpdated}. 
                    We review and update this statement regularly to ensure it reflects our current accessibility efforts.
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