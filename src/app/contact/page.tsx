"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  MapPin,
  Phone,
  Clock,
  Car,
  Accessibility,
  Calendar,
  Mail,
  Navigation,
  Building
} from "lucide-react";

const officeDetails = [
  {
    icon: MapPin,
    title: "Office Address",
    content: "3104 E Camelback Rd Unit #7947\nPhoenix, AZ 85016",
    action: "Get Directions",
    actionLink: "https://maps.google.com/?q=3104+E+Camelback+Rd+Unit+7947+Phoenix+AZ+85016"
  },
  {
    icon: Phone,
    title: "Phone Number",
    content: "602-688-4874",
    action: "Call Now",
    actionLink: "tel:602-688-4874"
  },
  {
    icon: Clock,
    title: "Office Hours",
    content: "Monday - Friday\n9:00 AM - 5:00 PM\nWeekends: Closed",
    action: "Schedule Appointment",
    actionLink: "#schedule"
  },
  {
    icon: Mail,
    title: "Patient Portal",
    content: "Online scheduling and\npatient communication",
    action: "Access Portal",
    actionLink: "https://forbesintegrativemedicine.acubliss.app"
  }
];

const locationFeatures = [
  {
    icon: Car,
    title: "Free Parking",
    description: "Convenient on-site parking available for all patients and visitors"
  },
  {
    icon: Accessibility,
    title: "ADA Accessible",
    description: "Full accessibility compliance including wheelchair access and accessible restrooms"
  },
  {
    icon: Building,
    title: "Professional Building",
    description: "Modern medical building with elevator access and professional atmosphere"
  },
  {
    icon: Navigation,
    title: "Central Location",
    description: "Easily accessible from all areas of Phoenix Valley including Scottsdale, Tempe, and Paradise Valley"
  }
];

const nearbyLandmarks = [
  { name: "Phoenix Zoo", distance: "2.5 miles south", direction: "Perfect for combining appointments with family activities" },
  { name: "Papago Park", distance: "3 miles southeast", direction: "Great for post-treatment walks and outdoor relaxation" },
  { name: "Scottsdale Fashion Square", distance: "4 miles east", direction: "Convenient for errands before or after appointments" },
  { name: "Phoenix Sky Harbor Airport", distance: "8 miles southwest", direction: "Accessible for out-of-town patients" },
  { name: "Camelback Mountain", distance: "5 miles north", direction: "Popular hiking destination for active patients" },
  { name: "Biltmore Fashion Park", distance: "1.5 miles west", direction: "Shopping and dining options nearby" }
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-teal-50 to-champagne-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-teal-100 rounded-full mb-6">
                <MapPin className="h-10 w-10 text-teal-600" />
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-obsidian mb-6">
                Visit Our Phoenix Office
              </h1>
              <p className="text-xl text-ink/80 mb-8">
                Conveniently located on Camelback Road, our modern facility provides 
                a comfortable and accessible environment for your integrative healthcare needs
              </p>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border border-teal-100 mb-8">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="text-left">
                    <h2 className="text-2xl font-serif text-obsidian mb-4">
                      Forbes Integrative Medicine
                    </h2>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-ink font-medium">3104 E Camelback Rd Unit #7947</p>
                          <p className="text-ink/70">Phoenix, AZ 85016</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-teal-600 flex-shrink-0" />
                        <p className="text-ink font-medium">602-688-4874</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-ink font-medium">Monday - Friday</p>
                          <p className="text-ink/70">9:00 AM - 5:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-3">
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
                      Schedule Appointment
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
            </div>
          </div>
        </section>

        {/* Contact Details Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {officeDetails.map((detail, index) => (
                <div key={index} className="text-center p-6 bg-porcelain rounded-xl">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4">
                    <detail.icon className="h-8 w-8 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-obsidian mb-3">
                    {detail.title}
                  </h3>
                  <p className="text-ink/70 mb-4 whitespace-pre-line text-sm">
                    {detail.content}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-teal-200 hover:bg-teal-50 text-teal-700"
                    asChild={detail.actionLink !== "#schedule"}
                    onClick={detail.actionLink === "#schedule" ? () => {
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
                    } : undefined}
                  >
                    {detail.actionLink !== "#schedule" ? (
                      <a href={detail.actionLink} target="_blank" rel="noopener noreferrer">
                        {detail.action}
                      </a>
                    ) : (
                      detail.action
                    )}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location Features */}
        <section className="py-16 bg-porcelain">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-obsidian mb-4">
                Office Features & Amenities
              </h2>
              <p className="text-lg text-ink/70 max-w-2xl mx-auto">
                Our Phoenix location is designed with patient comfort, accessibility, and convenience in mind
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {locationFeatures.map((feature, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-100 rounded-full mb-4">
                    <feature.icon className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-obsidian mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-ink/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-teal-50 to-champagne-50 rounded-xl p-8 border border-teal-100">
              <h3 className="text-xl font-semibold text-obsidian mb-6 text-center">
                Getting to Our Office
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-ink mb-2 flex items-center gap-2">
                    <Car className="h-4 w-4 text-teal-600" />
                    By Car
                  </h4>
                  <p className="text-sm text-ink/70 leading-relaxed">
                    Located on E Camelback Rd between 32nd Street and Tatum Blvd. 
                    Free parking available in the building lot. GPS coordinates: 33.5092, -111.9892
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-ink mb-2 flex items-center gap-2">
                    <Car className="h-4 w-4 text-teal-600" />
                    Parking
                  </h4>
                  <p className="text-sm text-ink/70 leading-relaxed">
                    Complimentary parking available directly in front of the building. 
                    Additional parking spaces available in the rear lot. All spaces are well-lit and secure.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-ink mb-2 flex items-center gap-2">
                    <Building className="h-4 w-4 text-teal-600" />
                    Building Access
                  </h4>
                  <p className="text-sm text-ink/70 leading-relaxed">
                    Suite #7947 is located on the main floor. Elevator access available for upper floors. 
                    Clear signage throughout the building for easy navigation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Area Information */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl text-obsidian mb-4">
                  Central Phoenix Location
                </h2>
                <p className="text-lg text-ink/70">
                  Conveniently located for patients throughout the Phoenix Valley
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-porcelain rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-obsidian mb-4">
                    Serving These Communities
                  </h3>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="space-y-2 text-ink/70">
                      <p>• Phoenix</p>
                      <p>• Scottsdale</p>
                      <p>• Tempe</p>
                      <p>• Paradise Valley</p>
                      <p>• Mesa</p>
                    </div>
                    <div className="space-y-2 text-ink/70">
                      <p>• Chandler</p>
                      <p>• Glendale</p>
                      <p>• Peoria</p>
                      <p>• Ahwatukee</p>
                      <p>• Carefree</p>
                    </div>
                  </div>
                  <p className="text-xs text-ink/60 mt-4">
                    Patients travel from throughout Arizona for specialized integrative care
                  </p>
                </div>
                
                <div className="bg-porcelain rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-obsidian mb-4">
                    Nearby Landmarks & Distances
                  </h3>
                  <div className="space-y-3">
                    {nearbyLandmarks.map((landmark, index) => (
                      <div key={index} className="text-sm">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-ink">{landmark.name}</span>
                          <span className="text-teal-600 text-xs">{landmark.distance}</span>
                        </div>
                        <p className="text-xs text-ink/60 ml-0">
                          {landmark.direction}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-porcelain">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="font-serif text-3xl md:text-4xl text-obsidian mb-4">
                  Have Questions?
                </h2>
                <p className="text-lg text-ink/70">
                  We're here to help with any questions about appointments, treatments, or our services
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-obsidian mb-3">
                      Ready to Schedule Your Visit?
                    </h3>
                    <p className="text-ink/70 mb-6">
                      The quickest way to schedule is through our online patient portal or by calling our office directly
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
                        Schedule Online
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

                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="font-semibold text-obsidian mb-3">
                      Common Questions We Can Help With:
                    </h4>
                    <ul className="space-y-2 text-sm text-ink/70">
                      <li>• Insurance coverage and out-of-network benefits</li>
                      <li>• Appointment availability and scheduling</li>
                      <li>• Treatment options for specific conditions</li>
                      <li>• New patient information and preparation</li>
                      <li>• Directions and parking information</li>
                      <li>• Follow-up care and treatment planning</li>
                    </ul>
                  </div>

                  <div className="bg-teal-50 border border-teal-100 rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-teal-600 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-teal-800 mb-1">
                          Office Hours
                        </h4>
                        <p className="text-sm text-teal-700">
                          Monday through Friday, 9:00 AM - 5:00 PM<br />
                          Same-day appointments often available for urgent concerns
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Information */}
        <section className="py-12 bg-amber-50 border-t border-amber-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-xl font-semibold text-amber-800 mb-4">
                For Medical Emergencies
              </h3>
              <p className="text-amber-700 mb-4">
                If you are experiencing a medical emergency, please call 911 or go to your nearest emergency room. 
                Do not use our office phone number or online scheduling for emergency situations.
              </p>
              <p className="text-sm text-amber-600">
                For urgent but non-emergency concerns outside of office hours, you may leave a voicemail 
                at 602-688-4874 and we will return your call as soon as possible during business hours.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}