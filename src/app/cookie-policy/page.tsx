"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Cookie, Settings, Eye, Target, BarChart, Shield } from "lucide-react";
// Note: Metadata moved to layout or parent component due to "use client" directive

export default function CookiePolicyPage() {
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
                <Cookie className="h-8 w-8 text-teal-600" />
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-obsidian mb-6">
                Cookie Policy
              </h1>
              <p className="text-xl text-ink/80 mb-8">
                Understanding how Forbes Integrative Medicine uses cookies and tracking technologies
              </p>
              <div className="bg-white/70 rounded-lg p-4 inline-block">
                <p className="text-sm text-ink/70">
                  Last Updated: {lastUpdated} | Effective Date: {effectiveDate}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Policy Content */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              
              {/* What Are Cookies */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl text-obsidian mb-6">What Are Cookies?</h2>
                <div className="bg-porcelain rounded-lg p-6 mb-6">
                  <p className="text-ink/80 leading-relaxed mb-4">
                    Cookies are small text files that are stored on your computer or mobile device when you visit 
                    a website. They help websites remember information about your visit, such as your preferred 
                    language and other settings, which can make your next visit easier and the site more useful to you.
                  </p>
                  <p className="text-ink/80 leading-relaxed">
                    Forbes Integrative Medicine uses cookies and similar technologies to improve your website 
                    experience, analyze site usage, and provide relevant information about our medical acupuncture services.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-teal-50 rounded-lg">
                    <Settings className="h-8 w-8 text-teal-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-obsidian">Functional</p>
                    <p className="text-xs text-ink/60">Remember your preferences</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <BarChart className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-obsidian">Analytics</p>
                    <p className="text-xs text-ink/60">Understand site usage</p>
                  </div>
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <Target className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-obsidian">Marketing</p>
                    <p className="text-xs text-ink/60">Relevant content & ads</p>
                  </div>
                </div>
              </div>

              {/* Types of Cookies We Use */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl text-obsidian mb-6">Types of Cookies We Use</h2>
                
                <div className="space-y-6">
                  <div className="bg-green-50 rounded-xl p-8 border border-green-200">
                    <h3 className="text-2xl font-semibold text-green-800 mb-4 flex items-center gap-3">
                      <Shield className="h-7 w-7" />
                      Essential Cookies (Always Active)
                    </h3>
                    <p className="text-green-700 text-sm leading-relaxed mb-4">
                      These cookies are necessary for the website to function properly and cannot be disabled. 
                      They are usually set in response to actions you take, such as filling out forms or setting 
                      privacy preferences.
                    </p>
                    
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2">What Essential Cookies Do:</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="space-y-1 text-green-700 text-sm">
                          <li>• Enable basic website functionality</li>
                          <li>• Remember your cookie consent preferences</li>
                          <li>• Maintain your session while browsing</li>
                          <li>• Ensure website security</li>
                        </ul>
                        <ul className="space-y-1 text-green-700 text-sm">
                          <li>• Load balancing for optimal performance</li>
                          <li>• Error detection and prevention</li>
                          <li>• Form submission functionality</li>
                          <li>• Accessibility features</li>
                        </ul>
                      </div>
                      
                      <div className="mt-4 p-3 bg-green-50 rounded border border-green-200">
                        <p className="text-green-700 text-xs">
                          <strong>Examples:</strong> Session ID, consent preferences, security tokens, load balancer cookies
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
                    <h3 className="text-2xl font-semibold text-blue-800 mb-4 flex items-center gap-3">
                      <BarChart className="h-7 w-7" />
                      Analytics Cookies (Optional)
                    </h3>
                    <p className="text-blue-700 text-sm leading-relaxed mb-4">
                      These cookies help us understand how visitors interact with our website by collecting and 
                      reporting information anonymously. This data helps us improve our website and better serve 
                      our patients.
                    </p>
                    
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-blue-800 mb-2">Analytics Information Collected:</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="space-y-1 text-blue-700 text-sm">
                          <li>• Number of website visitors</li>
                          <li>• Pages visited and time spent</li>
                          <li>• Geographic location (city/state level)</li>
                          <li>• Device type and browser used</li>
                        </ul>
                        <ul className="space-y-1 text-blue-700 text-sm">
                          <li>• How visitors found our website</li>
                          <li>• Popular content and services</li>
                          <li>• Website performance metrics</li>
                          <li>• Error tracking for improvements</li>
                        </ul>
                      </div>
                      
                      <div className="mt-4 p-3 bg-blue-50 rounded border border-blue-200">
                        <p className="text-blue-700 text-xs">
                          <strong>Services Used:</strong> Google Analytics 4, Google Tag Manager, Hotjar (session recordings)
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-4 bg-blue-100 rounded-lg p-4">
                      <p className="text-blue-800 text-sm font-medium mb-2">Important Privacy Protection:</p>
                      <p className="text-blue-700 text-xs leading-relaxed">
                        We <strong>never</strong> collect personal health information (PHI) through analytics cookies. 
                        All data is anonymized and cannot be linked to individual patients. Analytics data is used 
                        only to improve website functionality and user experience.
                      </p>
                    </div>
                  </div>

                  <div className="bg-purple-50 rounded-xl p-8 border border-purple-200">
                    <h3 className="text-2xl font-semibold text-purple-800 mb-4 flex items-center gap-3">
                      <Target className="h-7 w-7" />
                      Marketing Cookies (Optional)
                    </h3>
                    <p className="text-purple-700 text-sm leading-relaxed mb-4">
                      These cookies track your visit across websites and are used to display relevant advertisements 
                      and content. They help us reach people who might benefit from our medical acupuncture services.
                    </p>
                    
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-purple-800 mb-2">Marketing Cookie Functions:</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="space-y-1 text-purple-700 text-sm">
                          <li>• Display relevant health information</li>
                          <li>• Show ads for our services</li>
                          <li>• Measure advertising effectiveness</li>
                          <li>• Retarget website visitors</li>
                        </ul>
                        <ul className="space-y-1 text-purple-700 text-sm">
                          <li>• Social media integration</li>
                          <li>• Cross-device tracking</li>
                          <li>• Audience building for health content</li>
                          <li>• Campaign optimization</li>
                        </ul>
                      </div>
                      
                      <div className="mt-4 p-3 bg-purple-50 rounded border border-purple-200">
                        <p className="text-purple-700 text-xs">
                          <strong>Platforms Used:</strong> Facebook Pixel, LinkedIn Insight Tag, TikTok Pixel, Google Ads
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-4 bg-amber-100 rounded-lg p-4">
                      <p className="text-amber-800 text-sm font-medium mb-2">Medical Content Standards:</p>
                      <p className="text-amber-700 text-xs leading-relaxed">
                        All marketing content follows medical advertising guidelines and includes appropriate 
                        disclaimers. We never make false claims about treatment outcomes or guarantee results.
                      </p>
                    </div>
                  </div>

                  <div className="bg-indigo-50 rounded-xl p-8 border border-indigo-200">
                    <h3 className="text-2xl font-semibold text-indigo-800 mb-4 flex items-center gap-3">
                      <Eye className="h-7 w-7" />
                      Performance Cookies (Optional)
                    </h3>
                    <p className="text-indigo-700 text-sm leading-relaxed mb-4">
                      These cookies collect information about how you use our website to help us improve site 
                      performance, functionality, and user experience.
                    </p>
                    
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-indigo-800 mb-2">Performance Monitoring:</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="space-y-1 text-indigo-700 text-sm">
                          <li>• Page load times and speed</li>
                          <li>• User interaction patterns</li>
                          <li>• Error reporting and debugging</li>
                          <li>• Feature usage statistics</li>
                        </ul>
                        <ul className="space-y-1 text-indigo-700 text-sm">
                          <li>• Mobile vs desktop performance</li>
                          <li>• Browser compatibility issues</li>
                          <li>• Form completion rates</li>
                          <li>• Search functionality effectiveness</li>
                        </ul>
                      </div>
                      
                      <div className="mt-4 p-3 bg-indigo-50 rounded border border-indigo-200">
                        <p className="text-indigo-700 text-xs">
                          <strong>Tools Used:</strong> Hotjar heatmaps, Google PageSpeed Insights, error tracking systems
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Third-Party Services */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl text-obsidian mb-6">Third-Party Services & Cookies</h2>
                
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8 border border-amber-200 mb-6">
                  <h3 className="text-xl font-semibold text-amber-800 mb-4">External Services We Use</h3>
                  <p className="text-amber-700 text-sm leading-relaxed mb-4">
                    Our website integrates with several third-party services to provide better functionality 
                    and user experience. Each service may set its own cookies according to their privacy policies.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-porcelain rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-obsidian mb-3">Analytics & Performance</h3>
                    <div className="space-y-3">
                      <div className="bg-white rounded p-3 border border-gray-200">
                        <h4 className="font-medium text-obsidian text-sm">Google Analytics 4</h4>
                        <p className="text-xs text-ink/60">Website traffic analysis and user behavior tracking</p>
                        <p className="text-xs text-teal-600 mt-1">
                          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="hover:underline">
                            Google Privacy Policy
                          </a>
                        </p>
                      </div>
                      
                      <div className="bg-white rounded p-3 border border-gray-200">
                        <h4 className="font-medium text-obsidian text-sm">Hotjar</h4>
                        <p className="text-xs text-ink/60">Heatmaps and session recordings for UX improvement</p>
                        <p className="text-xs text-teal-600 mt-1">
                          <a href="https://www.hotjar.com/legal/policies/privacy/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                            Hotjar Privacy Policy
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-porcelain rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-obsidian mb-3">Marketing & Communication</h3>
                    <div className="space-y-3">
                      <div className="bg-white rounded p-3 border border-gray-200">
                        <h4 className="font-medium text-obsidian text-sm">Facebook Pixel</h4>
                        <p className="text-xs text-ink/60">Social media advertising and audience building</p>
                        <p className="text-xs text-teal-600 mt-1">
                          <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                            Facebook Privacy Policy
                          </a>
                        </p>
                      </div>
                      
                      <div className="bg-white rounded p-3 border border-gray-200">
                        <h4 className="font-medium text-obsidian text-sm">CallRail</h4>
                        <p className="text-xs text-ink/60">Phone call tracking and analytics</p>
                        <p className="text-xs text-teal-600 mt-1">
                          <a href="https://www.callrail.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:underline">
                            CallRail Privacy Policy
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-porcelain rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-obsidian mb-3">Booking & Scheduling</h3>
                    <div className="space-y-3">
                      <div className="bg-white rounded p-3 border border-gray-200">
                        <h4 className="font-medium text-obsidian text-sm">Acubliss</h4>
                        <p className="text-xs text-ink/60">Appointment scheduling and patient management</p>
                        <p className="text-xs text-teal-600 mt-1">
                          <a href="https://acubliss.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:underline">
                            Acubliss Privacy Policy
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-porcelain rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-obsidian mb-3">Social Media</h3>
                    <div className="space-y-3">
                      <div className="bg-white rounded p-3 border border-gray-200">
                        <h4 className="font-medium text-obsidian text-sm">LinkedIn Insight Tag</h4>
                        <p className="text-xs text-ink/60">Professional network advertising and analytics</p>
                        <p className="text-xs text-teal-600 mt-1">
                          <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:underline">
                            LinkedIn Privacy Policy
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cookie Consent & Management */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl text-obsidian mb-6">Managing Your Cookie Preferences</h2>
                
                <div className="bg-gradient-to-r from-teal-50 to-champagne-50 rounded-xl p-8 mb-6">
                  <h3 className="text-xl font-semibold text-obsidian mb-4">Your Cookie Choices</h3>
                  <p className="text-ink/70 leading-relaxed mb-4">
                    You have control over which cookies you allow on your device. You can manage your preferences 
                    through our cookie consent banner, browser settings, or by contacting us directly.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                    <h3 className="text-lg font-semibold text-blue-800 mb-3">Cookie Consent Banner</h3>
                    <p className="text-blue-700 text-sm leading-relaxed mb-3">
                      When you first visit our website, you'll see a cookie consent banner that allows you to:
                    </p>
                    <ul className="space-y-1 text-blue-700 text-sm mb-4">
                      <li>• Accept all cookies for full site functionality</li>
                      <li>• Decline optional cookies (analytics and marketing)</li>
                      <li>• Customize your preferences by cookie category</li>
                      <li>• Learn more about each type of cookie</li>
                    </ul>
                    <div className="bg-white rounded p-3 border border-blue-200">
                      <p className="text-blue-700 text-xs">
                        <strong>Note:</strong> Your consent choices are remembered for future visits. 
                        You can change your preferences at any time by clearing your browser cookies or 
                        using our preference center.
                      </p>
                    </div>
                  </div>

                  <div className="bg-amber-50 rounded-lg p-6 border border-amber-200">
                    <h3 className="text-lg font-semibold text-amber-800 mb-3">Browser Settings</h3>
                    <p className="text-amber-700 text-sm leading-relaxed mb-3">
                      You can also control cookies through your web browser settings:
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-amber-800 mb-2 text-sm">Common Browser Options:</h4>
                        <ul className="space-y-1 text-amber-700 text-sm">
                          <li>• Block all cookies</li>
                          <li>• Allow only first-party cookies</li>
                          <li>• Delete cookies when browser closes</li>
                          <li>• Manually manage cookies by site</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-amber-800 mb-2 text-sm">Browser-Specific Instructions:</h4>
                        <ul className="space-y-1 text-amber-700 text-sm">
                          <li>• <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener" className="text-teal-600 hover:underline">Chrome Cookie Settings</a></li>
                          <li>• <a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener" className="text-teal-600 hover:underline">Firefox Cookie Settings</a></li>
                          <li>• <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener" className="text-teal-600 hover:underline">Safari Cookie Settings</a></li>
                          <li>• <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener" className="text-teal-600 hover:underline">Edge Cookie Settings</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                    <h3 className="text-lg font-semibold text-purple-800 mb-3">Opt-Out Tools</h3>
                    <p className="text-purple-700 text-sm leading-relaxed mb-3">
                      You can opt out of specific tracking and advertising cookies using these industry tools:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="space-y-2 text-purple-700 text-sm">
                        <li>• <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener" className="text-teal-600 hover:underline">Google Analytics Opt-out</a></li>
                        <li>• <a href="https://www.facebook.com/settings/?tab=ads" target="_blank" rel="noopener" className="text-teal-600 hover:underline">Facebook Ad Preferences</a></li>
                        <li>• <a href="https://optout.aboutads.info/" target="_blank" rel="noopener" className="text-teal-600 hover:underline">Digital Advertising Alliance Opt-Out</a></li>
                      </ul>
                      <ul className="space-y-2 text-purple-700 text-sm">
                        <li>• <a href="https://www.networkadvertising.org/choices/" target="_blank" rel="noopener" className="text-teal-600 hover:underline">Network Advertising Initiative</a></li>
                        <li>• <a href="https://www.hotjar.com/legal/compliance/opt-out" target="_blank" rel="noopener" className="text-teal-600 hover:underline">Hotjar Opt-out</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Impact of Blocking Cookies */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl text-obsidian mb-6">Impact of Blocking Cookies</h2>
                
                <div className="bg-amber-50 rounded-lg p-6 border border-amber-200 mb-6">
                  <p className="text-amber-700 leading-relaxed text-sm">
                    While you have the right to block or delete cookies, doing so may affect your website experience. 
                    Here's what to expect when different types of cookies are disabled:
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                    <h3 className="font-semibold text-red-800 mb-2">Essential Cookies (Cannot be disabled)</h3>
                    <p className="text-red-700 text-sm">
                      Blocking essential cookies will prevent basic website functionality, including form submissions, 
                      appointment booking, and secure connections.
                    </p>
                  </div>

                  <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                    <h3 className="font-semibold text-yellow-800 mb-2">Analytics Cookies</h3>
                    <p className="text-yellow-700 text-sm">
                      Blocking analytics cookies won't affect your website experience, but it prevents us from 
                      understanding how to improve our site and content for future visitors.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <h3 className="font-semibold text-blue-800 mb-2">Marketing Cookies</h3>
                    <p className="text-blue-700 text-sm">
                      Blocking marketing cookies means you may see less relevant advertisements and health information. 
                      Social media integrations may also be limited.
                    </p>
                  </div>

                  <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                    <h3 className="font-semibold text-indigo-800 mb-2">Performance Cookies</h3>
                    <p className="text-indigo-700 text-sm">
                      Blocking performance cookies may result in slower website loading times and prevent us from 
                      identifying and fixing technical issues.
                    </p>
                  </div>
                </div>
              </div>

              {/* Data Retention */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl text-obsidian mb-6">Cookie Data Retention</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-porcelain rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-obsidian mb-3">Retention Periods</h3>
                    <div className="space-y-3">
                      <div className="bg-white rounded p-3 border border-gray-200">
                        <h4 className="font-medium text-obsidian text-sm">Session Cookies</h4>
                        <p className="text-xs text-ink/60">Deleted when you close your browser</p>
                      </div>
                      <div className="bg-white rounded p-3 border border-gray-200">
                        <h4 className="font-medium text-obsidian text-sm">Analytics Cookies</h4>
                        <p className="text-xs text-ink/60">26 months (Google Analytics default)</p>
                      </div>
                      <div className="bg-white rounded p-3 border border-gray-200">
                        <h4 className="font-medium text-obsidian text-sm">Marketing Cookies</h4>
                        <p className="text-xs text-ink/60">30-180 days depending on platform</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-porcelain rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-obsidian mb-3">Data Deletion</h3>
                    <ul className="space-y-2 text-ink/70 text-sm">
                      <li>• Cookies expire automatically after set periods</li>
                      <li>• You can delete cookies manually in browser settings</li>
                      <li>• Consent withdrawal triggers cookie removal</li>
                      <li>• We regularly purge old cookie data</li>
                      <li>• Third-party services follow their own retention policies</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Regional Compliance */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl text-obsidian mb-6">Regional Privacy Compliance</h2>
                
                <div className="space-y-6">
                  <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                    <h3 className="text-lg font-semibold text-blue-800 mb-3">European Union (GDPR)</h3>
                    <p className="text-blue-700 text-sm leading-relaxed mb-3">
                      For visitors from the EU, we comply with the General Data Protection Regulation (GDPR) requirements:
                    </p>
                    <ul className="space-y-1 text-blue-700 text-sm">
                      <li>• Explicit consent required for non-essential cookies</li>
                      <li>• Clear information about cookie purposes</li>
                      <li>• Right to withdraw consent at any time</li>
                      <li>• Data minimization principles applied</li>
                      <li>• Lawful basis for processing established</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                    <h3 className="text-lg font-semibold text-purple-800 mb-3">California (CCPA/CPRA)</h3>
                    <p className="text-purple-700 text-sm leading-relaxed mb-3">
                      For California residents, we provide additional privacy rights under state privacy laws:
                    </p>
                    <ul className="space-y-1 text-purple-700 text-sm">
                      <li>• Right to know what personal information is collected</li>
                      <li>• Right to delete personal information</li>
                      <li>• Right to opt-out of sale of personal information</li>
                      <li>• Right to non-discrimination for exercising privacy rights</li>
                      <li>• "Do Not Sell My Personal Information" honored</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                    <h3 className="text-lg font-semibold text-green-800 mb-3">Other US States</h3>
                    <p className="text-green-700 text-sm leading-relaxed mb-3">
                      We extend privacy protections to residents of all states with emerging privacy legislation:
                    </p>
                    <ul className="space-y-1 text-green-700 text-sm">
                      <li>• Connecticut, Colorado, Virginia, Utah privacy acts</li>
                      <li>• Consistent privacy standards across all users</li>
                      <li>• Proactive compliance with new state laws</li>
                      <li>• Regular policy updates for legal changes</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Updates to Cookie Policy */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl text-obsidian mb-6">Updates to This Cookie Policy</h2>
                <div className="bg-porcelain rounded-lg p-6">
                  <p className="text-ink/70 leading-relaxed mb-4">
                    We may update this Cookie Policy periodically to reflect changes in our cookie usage, 
                    new technologies, or legal requirements. When we make significant changes, we will:
                  </p>
                  <ul className="space-y-2 text-ink/70">
                    <li>• Update the "Last Modified" date at the top of this policy</li>
                    <li>• Provide notice through our website or email</li>
                    <li>• Request new consent if required by law</li>
                    <li>• Maintain previous versions for reference</li>
                  </ul>
                  <p className="text-sm text-ink/60 mt-4 italic">
                    Continued use of our website after policy updates indicates acceptance of the revised Cookie Policy.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl text-obsidian mb-6">Questions About Cookies</h2>
                <div className="bg-gradient-to-r from-teal-50 to-champagne-50 rounded-xl p-8">
                  <p className="text-ink/70 mb-6">
                    If you have questions about our use of cookies or want to request deletion of your cookie data:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-obsidian mb-3">Privacy Team</h3>
                      <div className="space-y-2 text-sm text-ink/70">
                        <p>Email: privacy@forbesintegrative.com</p>
                        <p>Phone: 602-688-4874</p>
                        <p>Response Time: Within 2 business days</p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-obsidian mb-3">Mailing Address</h3>
                      <div className="space-y-1 text-sm text-ink/70">
                        <p>Forbes Integrative Medicine</p>
                        <p>Attn: Privacy Officer</p>
                        <p>3104 E Camelback Rd Unit #7947</p>
                        <p>Phoenix, AZ 85016</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-teal-200">
                    <Button
                      variant="outline"
                      className="border-teal-600 text-teal-600 hover:bg-teal-50 mr-4"
                      asChild
                    >
                      <a href="mailto:privacy@forbesintegrative.com?subject=Cookie Policy Question">
                        Email Privacy Team
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      className="border-teal-600 text-teal-600 hover:bg-teal-50"
                      onClick={() => {
                        if (typeof window !== 'undefined') {
                          // Trigger cookie consent banner if available
                          const event = new CustomEvent('showCookieSettings');
                          window.dispatchEvent(event);
                        }
                      }}
                    >
                      <Settings className="mr-2 h-4 w-4" />
                      Manage Cookie Preferences
                    </Button>
                  </div>
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