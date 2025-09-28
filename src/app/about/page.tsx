"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TrustBadgesSection } from "@/components/ui/trust-badges";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Award, 
  Users, 
  Heart,
  Calendar,
  MapPin,
  Phone
} from "lucide-react";
import { PageBreadcrumb, breadcrumbConfigs } from "@/components/ui/breadcrumb";
import { ContextualCTA } from "@/components/seo/InternalLinks";


const credentials = [
  {
    icon: GraduationCap,
    title: "Medical Education",
    description: "Penn State College of Medicine",
    details: "Doctor of Medicine (MD) degree"
  },
  {
    icon: Award,
    title: "Board Certification",
    description: "Family Medicine",
    details: "Board-certified Family Medicine physician"
  },
  {
    icon: Users,
    title: "Residency & Leadership",
    description: "University of Virginia",
    details: "Chief Resident in Family Medicine"
  },
  {
    icon: Heart,
    title: "Specialized Training",
    description: "Integrated Structural Acupuncture",
    details: "University of New England & Marma Therapy (Ayurvedic Institute)"
  }
];

const practicePhilosophy = [
  {
    title: "Evidence-Based Care",
    description: "All treatments are grounded in peer-reviewed research and clinical evidence, ensuring patients receive therapies that have demonstrated effectiveness in medical literature."
  },
  {
    title: "Integrative Approach",
    description: "Combining the best of Western medicine with time-tested traditional practices, creating comprehensive treatment plans that address root causes, not just symptoms."
  },
  {
    title: "Personalized Medicine",
    description: "Every patient receives individualized care based on their unique health history, current conditions, and personal health goals."
  },
  {
    title: "Patient Education",
    description: "Empowering patients with knowledge about their conditions and treatment options, enabling them to make informed decisions about their healthcare."
  }
];

export default function AboutPage() {
  return (
    <>
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-porcelain border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <PageBreadcrumb config="about" />
        </div>
      </div>
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-teal-50 to-champagne-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-obsidian mb-6">
                  Meet Dr. Janie Forbes
                </h1>
                <div className="text-xl text-ink/80 mb-6">
                  Board-Certified Family Medicine Physician<br />
                  Medical Acupuncture Specialist
                </div>
                <p className="text-lg text-ink/70 leading-relaxed mb-8">
                  Serving the Phoenix community with evidence-based integrative medicine, 
                  combining traditional medical training with specialized acupuncture expertise 
                  to support optimal patient outcomes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
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
                    Schedule Consultation
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
              <div className="relative">
                <div className="aspect-[3/4] bg-gradient-to-br from-teal-100 to-champagne-200 rounded-2xl shadow-xl" />
                <div className="absolute inset-0 flex items-center justify-center text-ink/30 font-serif text-2xl">
                  Professional Portrait
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <TrustBadgesSection variant="horizontal" />

        {/* Credentials Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-obsidian mb-4">
                Professional Credentials
              </h2>
              <p className="text-lg text-ink/70 max-w-2xl mx-auto">
                Dr. Forbes brings extensive medical training and specialized certifications 
                to provide the highest standard of integrative healthcare
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {credentials.map((credential, index) => (
                <div key={index} className="text-center p-6 bg-porcelain rounded-xl">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4">
                    <credential.icon className="h-8 w-8 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-obsidian mb-2">
                    {credential.title}
                  </h3>
                  <p className="text-ink font-medium mb-2">
                    {credential.description}
                  </p>
                  <p className="text-sm text-ink/60">
                    {credential.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Biography Section */}
        <section className="py-16 md:py-24 bg-porcelain">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl text-obsidian mb-8 text-center">
                Professional Biography
              </h2>
              
              <div className="prose prose-lg max-w-none text-ink/80 space-y-6">
                <p className="text-lg leading-relaxed">
                  Dr. Janie Forbes is a board-certified Family Medicine physician with a passion for integrative medicine. She graduated from Penn State College of Medicine and completed her residency in Family Medicine at the University of Virginia, where she also served as chief resident, demonstrating her leadership skills and commitment to excellence in patient care.
                </p>
                
                <p className="leading-relaxed">
                  Driven by a desire to offer more holistic care, Dr. Forbes expanded her expertise by completing the Acumed Integrated Structural Acupuncture course through the University of New England College of Osteopathic Medicine. Her dedication to integrative healing extends to Ayurvedic medicine, having studied under the renowned Dr. Vasant Lad at the Ayurvedic Institute, where she earned a certification in Marma Therapy.
                </p>
                
                <p className="leading-relaxed">
                  Before relocating to sunny Phoenix, AZ with her family, Dr. Forbes served as an Assistant Professor at the University of Virginia in the Family Medicine department. Her unique blend of conventional and alternative medical knowledge allows her to provide comprehensive, patient-centered care.
                </p>
                
                <div className="mt-8 p-6 bg-white rounded-xl border border-teal-100">
                  <h3 className="text-xl font-semibold text-obsidian mb-4">Professional Credentials</h3>
                  <ul className="space-y-2 text-ink/70">
                    <li>• Residency in Family Medicine, University of Virginia</li>
                    <li>• Chief Resident, Family Medicine, University of Virginia</li>
                    <li>• Certified in Integrated Structural Acupuncture, University of New England College of Osteopathic Medicine</li>
                    <li>• Certified in Marma Therapy, Ayurvedic Institute</li>
                    <li>• Former Assistant Professor, Family Medicine Department, University of Virginia</li>
                    <li>• Part-time faculty at University of Arizona College of Medicine - Phoenix</li>
                    <li>• Licensed in Virginia and Arizona</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Practice Philosophy Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl text-obsidian mb-4">
                  Practice Philosophy
                </h2>
                <p className="text-lg text-ink/70">
                  Dr. Forbes' approach to integrative medicine is built on four core principles
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {practicePhilosophy.map((principle, index) => (
                  <div key={index} className="p-6 bg-porcelain rounded-xl">
                    <h3 className="text-xl font-semibold text-obsidian mb-3">
                      {principle.title}
                    </h3>
                    <p className="text-ink/70 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Phoenix Connection Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-teal-500 to-teal-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center text-white">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6">
                <MapPin className="h-10 w-10 text-white" />
              </div>
              <h2 className="font-serif text-3xl md:text-4xl mb-6">
                Committed to Phoenix Community Health
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Dr. Forbes is proud to serve the Phoenix metropolitan area, bringing 
                specialized integrative medicine to Arizona residents. Understanding 
                the unique health challenges of living in the desert Southwest, 
                including seasonal allergies, heat-related stress, and the active 
                lifestyle many Phoenix residents embrace, Dr. Forbes tailors 
                treatments to support optimal health in our Arizona environment.
              </p>
              <p className="text-lg text-white/80 mb-8">
                Located in the heart of Phoenix at Camelback Road, our practice 
                is easily accessible to residents throughout the Valley, including 
                Scottsdale, Tempe, Paradise Valley, and surrounding communities.
              </p>
              <Button
                size="lg"
                className="bg-white text-teal-600 hover:bg-gray-100"
                asChild
              >
                <a href="/contact">
                  Visit Our Phoenix Location
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Academic & Continuing Education */}
        <section className="py-16 md:py-24 bg-porcelain">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl text-obsidian mb-8 text-center">
                Academic Excellence & Continuing Education
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-semibold text-obsidian mb-4">
                    Professional Memberships
                  </h3>
                  <ul className="space-y-3 text-ink/70">
                    <li>• American Academy of Family Physicians</li>
                    <li>• American Board of Family Medicine</li>
                    <li>• International Association of Medical Acupuncturists</li>
                    <li>• Arizona Medical Association</li>
                    <li>• Maricopa County Medical Society</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-obsidian mb-4">
                    Continuing Education Focus
                  </h3>
                  <ul className="space-y-3 text-ink/70">
                    <li>• Latest research in medical acupuncture</li>
                    <li>• Pain management innovations</li>
                    <li>• Integrative medicine protocols</li>
                    <li>• Patient safety and quality improvement</li>
                    <li>• Evidence-based complementary therapies</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-12 p-6 bg-white rounded-xl border border-teal-100">
                <h3 className="text-xl font-semibold text-obsidian mb-4">
                  Research & Clinical Interests
                </h3>
                <p className="text-ink/70 leading-relaxed">
                  Dr. Forbes maintains active involvement in clinical research and 
                  stays current with peer-reviewed literature in both family medicine 
                  and medical acupuncture. Areas of particular interest include chronic 
                  pain management, sleep disorders, stress-related conditions, and 
                  women's health issues. This ongoing commitment to research ensures 
                  that treatment protocols are based on the most current and effective 
                  evidence available.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contextual CTA */}
        <ContextualCTA currentPage="/about" />
      </main>
      <Footer />
    </>
  );
}