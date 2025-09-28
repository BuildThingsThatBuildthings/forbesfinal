"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TestimonialSection } from "@/components/ui/testimonial-card";
import { Button } from "@/components/ui/button";
import { 
  Star,
  Heart,
  Activity,
  Moon,
  Brain,
  Sparkles,
  Users,
  Calendar,
  Phone,
  AlertTriangle
} from "lucide-react";
// Note: Metadata moved to layout or parent component due to "use client" directive

const testimonials = [
  {
    id: "1",
    content: "After struggling with chronic back pain for over 5 years, Dr. Forbes' treatments have given me my life back. Within just a few sessions, I noticed significant improvement, and now I can enjoy hiking in South Mountain again without constant pain. What impressed me most was her medical background - she really understands the anatomy behind my pain.",
    author: "Sarah M., 42",
    location: "Phoenix, AZ",
    condition: "Chronic Back Pain",
    rating: 5,
    date: "2024",
    treatmentDuration: "8 sessions over 3 months"
  },
  {
    id: "2",
    content: "The Arizona heat used to trigger debilitating migraines that kept me indoors all summer. Dr. Forbes' comprehensive approach - combining medical acupuncture with lifestyle guidance - has been a game-changer. I went from 15+ migraine days per month to just 2-3. Now I can actually enjoy our beautiful Phoenix summers again.",
    author: "Michael R., 38",
    location: "Scottsdale, AZ",
    condition: "Chronic Migraines",
    rating: 5,
    date: "2024",
    treatmentDuration: "12 sessions over 4 months"
  },
  {
    id: "3",
    content: "Working night shifts at Banner Health was destroying my sleep patterns. I was skeptical about acupuncture, but Dr. Forbes' medical credibility convinced me to try it. The improvement in my sleep quality has been remarkable - I'm now sleeping 6-7 hours straight instead of waking up every 2 hours. Her evidence-based approach made all the difference.",
    author: "Jennifer L., 29",
    location: "Tempe, AZ",
    condition: "Chronic Insomnia",
    rating: 5,
    date: "2024",
    treatmentDuration: "6 sessions over 2 months"
  },
  {
    id: "4",
    content: "My anxiety was making it impossible to enjoy retirement in Paradise Valley. Dr. Forbes' integrative approach didn't just address my panic attacks - she helped me understand the mind-body connection. The treatments have given me back my confidence to travel and socialize. Her warm, professional manner made me feel comfortable from day one.",
    author: "David K., 67",
    location: "Paradise Valley, AZ",
    condition: "Anxiety & Panic Attacks",
    rating: 5,
    date: "2024",
    treatmentDuration: "10 sessions over 3 months"
  },
  {
    id: "5",
    content: "Menopause hit me hard during our first Phoenix summer. The hot flashes were unbearable on top of the 115-degree weather! When hormone therapy wasn't an option, Dr. Forbes' treatments became my lifeline. The hot flashes decreased significantly, my sleep improved, and my mood stabilized. She's incredibly knowledgeable and genuinely cares about her patients.",
    author: "Linda T., 54",
    location: "Ahwatukee, AZ",
    condition: "Menopause Symptoms",
    rating: 5,
    date: "2024",
    treatmentDuration: "15 sessions over 6 months"
  },
  {
    id: "6",
    content: "A cycling accident on the Scottsdale Greenbelt left me with severe neck pain and daily headaches. Physical therapy wasn't enough. Dr. Forbes' medical acupuncture treatments provided the breakthrough I needed. My pain went from an 8/10 to a manageable 2/10, and I'm back to cycling the desert trails I love. Her understanding of sports injuries was evident.",
    author: "Robert H., 45",
    location: "Mesa, AZ",
    condition: "Sports Injury Recovery",
    rating: 5,
    date: "2024",
    treatmentDuration: "14 sessions over 4 months"
  },
  {
    id: "7",
    content: "Years of digestive issues were affecting my ability to enjoy Phoenix's amazing restaurant scene. Dr. Forbes took a thorough medical history and created a treatment plan that addressed my specific symptoms. After working with her, I can finally eat without fear of discomfort. Her integrative approach looked at the whole picture, not just my symptoms.",
    author: "Maria G., 36",
    location: "Central Phoenix, AZ",
    condition: "Digestive Issues",
    rating: 5,
    date: "2024",
    treatmentDuration: "8 sessions over 3 months"
  },
  {
    id: "8",
    content: "Managing a tech startup in Phoenix was taking a toll on my health. The stress management support I received from Dr. Forbes helped me through an incredibly difficult time. Her treatments provided both physical and emotional relief, and she taught me valuable techniques for managing work pressure. The combination of her medical expertise and compassionate approach was exactly what I needed.",
    author: "James W., 41",
    location: "Chandler, AZ",
    condition: "Chronic Stress & Burnout",
    rating: 5,
    date: "2024",
    treatmentDuration: "12 sessions over 4 months"
  },
  {
    id: "9",
    content: "Recovery from my knee replacement surgery was slower than expected. My orthopedic surgeon at Mayo Clinic recommended Dr. Forbes for pain management support. Her medical acupuncture treatments significantly reduced my post-surgical pain and seemed to accelerate my healing. I was back to my morning walks around Encanto Park much sooner than anticipated.",
    author: "Eleanor S., 71",
    location: "North Phoenix, AZ",
    condition: "Post-Surgical Recovery",
    rating: 5,
    date: "2024",
    treatmentDuration: "10 sessions over 5 weeks"
  },
  {
    id: "10",
    content: "Trying to conceive was becoming emotionally and physically exhausting. My fertility doctor suggested acupuncture as a complementary treatment. Dr. Forbes' approach was so supportive and professional - she never made unrealistic promises but provided excellent care during a stressful time. Her treatments helped me feel more balanced throughout the process, and I appreciated her medical background in women's health.",
    author: "Rachel K., 33",
    location: "Gilbert, AZ",
    condition: "Fertility Support",
    rating: 5,
    date: "2024",
    treatmentDuration: "16 sessions over 6 months"
  },
  {
    id: "11",
    content: "As a nurse at Phoenix Children's Hospital, I was experiencing severe shoulder pain from years of patient care. Dr. Forbes understood the physical demands of healthcare work and developed a treatment plan that fit my schedule. The improvement in my range of motion has been incredible - I can work full shifts without the constant aching I lived with for months.",
    author: "Patricia M., 48",
    location: "Glendale, AZ",
    condition: "Occupational Shoulder Pain",
    rating: 5,
    date: "2024",
    treatmentDuration: "9 sessions over 10 weeks"
  },
  {
    id: "12",
    content: "My teenage son's chronic headaches were affecting his ability to focus in school and enjoy activities like baseball in the Arizona heat. Dr. Forbes was wonderful with him - patient, reassuring, and thorough in her approach. His headaches have decreased significantly, and he's back to playing summer league without missing games due to pain. Her pediatric experience really showed.",
    author: "Susan D., 52",
    location: "Peoria, AZ",
    condition: "Adolescent Chronic Headaches",
    rating: 5,
    date: "2024",
    treatmentDuration: "7 sessions over 3 months"
  }
];

const conditionCategories = [
  {
    icon: Activity,
    title: "Pain Management",
    description: "Patients often report significant improvement in chronic pain conditions",
    conditions: [
      "Chronic back and neck pain",
      "Headaches and migraines",
      "Arthritis and joint pain",
      "Post-injury recovery",
      "Fibromyalgia support"
    ],
    commonResults: "Many patients report 50-80% reduction in pain levels within 4-8 treatments"
  },
  {
    icon: Moon,
    title: "Sleep & Recovery",
    description: "Sleep quality improvements frequently reported by patients",
    conditions: [
      "Chronic insomnia",
      "Sleep maintenance issues",
      "Restless sleep patterns",
      "Recovery enhancement",
      "Energy optimization"
    ],
    commonResults: "Patients often report improved sleep within 2-4 weeks of starting treatment"
  },
  {
    icon: Brain,
    title: "Stress & Mental Wellness",
    description: "Emotional and mental health support through integrative care",
    conditions: [
      "Chronic stress management",
      "Anxiety support",
      "Mood balance",
      "Panic attack frequency",
      "General mental wellness"
    ],
    commonResults: "Many patients experience reduced stress levels and improved emotional balance"
  },
  {
    icon: Heart,
    title: "Women's Health",
    description: "Specialized support for women's health concerns",
    conditions: [
      "Menopause symptom relief",
      "Hormonal balance support",
      "Fertility wellness",
      "Menstrual cycle support",
      "Reproductive health"
    ],
    commonResults: "Women often report improved hormone-related symptoms and overall wellness"
  },
  {
    icon: Sparkles,
    title: "Digestive Wellness",
    description: "Digestive health improvements through targeted treatments",
    conditions: [
      "Chronic digestive discomfort",
      "Metabolic support",
      "Nutritional balance",
      "Gut health optimization",
      "Appetite regulation"
    ],
    commonResults: "Patients frequently experience improved digestive comfort and function"
  },
  {
    icon: Users,
    title: "General Wellness",
    description: "Overall health optimization and preventive care",
    conditions: [
      "Energy level improvement",
      "Immune system support",
      "Preventive health care",
      "Athletic performance",
      "Quality of life enhancement"
    ],
    commonResults: "Many patients report increased energy and overall sense of well-being"
  }
];

export default function ReviewsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-teal-50 to-champagne-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-6">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} className="h-8 w-8 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-obsidian mb-6">
                Patient Reviews & Results
              </h1>
              <p className="text-xl text-ink/80 mb-8">
                Discover how medical acupuncture has helped Phoenix area patients 
                improve their health and quality of life
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
                  Experience Results Yourself
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

        {/* Important Disclaimer */}
        <section className="py-8 bg-amber-50 border-b border-amber-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-amber-800 mb-2">
                    Important Notice About Individual Results
                  </h3>
                  <p className="text-amber-700 text-sm leading-relaxed">
                    <strong>Individual results may vary.</strong> The testimonials and results shared on this page 
                    represent individual patient experiences and are not a guarantee of similar outcomes for other patients. 
                    Medical acupuncture effectiveness depends on many factors including individual health status, condition 
                    severity, treatment compliance, and other personal factors. Dr. Forbes evaluates each patient individually 
                    to determine appropriate treatment expectations. These testimonials have not been scientifically validated 
                    and should not be considered as medical evidence. Always consult with Dr. Forbes about your specific 
                    condition and expected outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Patient Testimonials */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-obsidian mb-4">
                Real Patients, Real Results
              </h2>
              <p className="text-lg text-ink/70 max-w-2xl mx-auto">
                Read about the experiences of Phoenix area patients who have worked 
                with Dr. Forbes to address their health concerns
              </p>
            </div>
            
            <TestimonialSection testimonials={testimonials} showExtended={true} />
          </div>
        </section>

        {/* Conditions We Help */}
        <section className="py-16 md:py-24 bg-porcelain">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-obsidian mb-4">
                Conditions We Support
              </h2>
              <p className="text-lg text-ink/70 max-w-2xl mx-auto">
                Learn about the various health concerns that patients often report 
                improvement with through medical acupuncture treatment
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {conditionCategories.map((category, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-100 rounded-full mb-4">
                    <category.icon className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-obsidian mb-3">
                    {category.title}
                  </h3>
                  <p className="text-ink/70 mb-4 text-sm">
                    {category.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-ink mb-2 text-sm">Common Conditions:</h4>
                    <ul className="space-y-1">
                      {category.conditions.map((condition, condIndex) => (
                        <li key={condIndex} className="text-xs text-ink/60 flex items-start gap-1">
                          <span className="text-teal-500 mt-1">•</span>
                          {condition}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-xs text-teal-600 font-medium">
                      {category.commonResults}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-teal-50 to-champagne-50 rounded-xl p-8 border border-teal-100">
              <h3 className="text-xl font-semibold text-obsidian mb-4 text-center">
                Why Patients Choose Forbes Integrative Medicine
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h4 className="font-semibold text-ink mb-2">Medical Expertise</h4>
                  <p className="text-sm text-ink/70">
                    Board-certified physician with comprehensive medical training and acupuncture specialization
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-ink mb-2">Evidence-Based Care</h4>
                  <p className="text-sm text-ink/70">
                    Treatments grounded in peer-reviewed research and clinical evidence
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-ink mb-2">Personalized Treatment</h4>
                  <p className="text-sm text-ink/70">
                    Individual assessment and customized treatment plans for each patient
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Outcomes */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl text-obsidian mb-4">
                  Understanding Treatment Outcomes
                </h2>
                <p className="text-lg text-ink/70">
                  Every patient's journey is unique. Here's what you can generally expect 
                  from medical acupuncture treatment
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-porcelain rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-obsidian mb-4">
                    Typical Treatment Timeline
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-ink mb-1">Initial Response (1-3 sessions)</h4>
                      <p className="text-sm text-ink/70">
                        Some patients may notice initial changes in symptoms or overall well-being
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-ink mb-1">Progressive Improvement (4-8 sessions)</h4>
                      <p className="text-sm text-ink/70">
                        Many patients report more sustained improvements during this phase
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-ink mb-1">Maintenance Phase (ongoing)</h4>
                      <p className="text-sm text-ink/70">
                        Periodic treatments may help maintain improvements for chronic conditions
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-porcelain rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-obsidian mb-4">
                    Factors Affecting Outcomes
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 mt-1">•</span>
                      <span className="text-sm text-ink/70">
                        Individual health status and medical history
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 mt-1">•</span>
                      <span className="text-sm text-ink/70">
                        Condition severity and duration
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 mt-1">•</span>
                      <span className="text-sm text-ink/70">
                        Treatment compliance and frequency
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 mt-1">•</span>
                      <span className="text-sm text-ink/70">
                        Lifestyle factors and self-care practices
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 mt-1">•</span>
                      <span className="text-sm text-ink/70">
                        Concurrent medical treatments and medications
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
                <h3 className="text-lg font-semibold text-amber-800 mb-3">
                  Setting Realistic Expectations
                </h3>
                <p className="text-amber-700 text-sm leading-relaxed mb-3">
                  Dr. Forbes believes in transparent communication about treatment expectations. 
                  During your initial consultation, she will:
                </p>
                <ul className="space-y-1 text-amber-700 text-sm">
                  <li>• Discuss realistic timelines for your specific condition</li>
                  <li>• Explain factors that may influence your treatment response</li>
                  <li>• Monitor your progress and adjust treatment plans as needed</li>
                  <li>• Provide honest assessments about expected outcomes</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-teal-500 to-teal-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
              Ready to Start Your Wellness Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join the many Phoenix area patients who have experienced the benefits 
              of medical acupuncture with Dr. Forbes
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
                Schedule Your Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent text-white border-white hover:bg-white/10"
                asChild
              >
                <a href="/new-patients">
                  Learn About Your First Visit
                </a>
              </Button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-white/80 text-sm">
                Call us at{" "}
                <a href="tel:602-688-4874" className="text-white underline hover:no-underline">
                  602-688-4874
                </a>
                {" "}or visit our Phoenix office at 3104 E Camelback Rd Unit #7947
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}