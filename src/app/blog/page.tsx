"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  BookOpen,
  Calendar,
  Phone,
  Activity,
  Moon,
  Brain,
  Heart,
  Sparkles,
  Users,
  ArrowRight,
  Clock,
  User
} from "lucide-react";
// Note: Metadata moved to layout or parent component due to "use client" directive

const featuredPost = {
  id: "understanding-medical-acupuncture-phoenix",
  title: "Understanding Medical Acupuncture: A Phoenix Patient's Guide to Evidence-Based Healing",
  excerpt: "Discover how medical acupuncture differs from traditional approaches and why Phoenix residents are choosing physician-led integrative care for pain management, sleep disorders, and wellness optimization.",
  author: "Dr. Forbes",
  date: "2024-03-15",
  readTime: "8 min read",
  category: "Education",
  image: "/images/blog/medical-acupuncture-phoenix.jpg",
  tags: ["Medical Acupuncture", "Phoenix Healthcare", "Evidence-Based Medicine", "Patient Education"]
};

const blogPosts = [
  {
    id: "chronic-pain-relief-phoenix-acupuncture",
    title: "Chronic Pain Relief in Phoenix: How Medical Acupuncture Supports Long-Term Pain Management",
    excerpt: "Explore evidence-based approaches to chronic pain management through medical acupuncture, including research on effectiveness for back pain, arthritis, and headaches in the Arizona climate.",
    author: "Dr. Forbes",
    date: "2024-03-01",
    readTime: "6 min read",
    category: "Pain Management",
    icon: Activity,
    tags: ["Chronic Pain", "Phoenix Pain Management", "Back Pain", "Arthritis Relief"]
  },
  {
    id: "sleep-disorders-phoenix-acupuncture-treatment",
    title: "Sleep Disorders and Phoenix Heat: How Acupuncture May Support Better Sleep in Arizona",
    excerpt: "Learn how medical acupuncture may help address sleep challenges common to Phoenix residents, including heat-related sleep disruption and chronic insomnia.",
    author: "Dr. Forbes",
    date: "2024-02-15",
    readTime: "7 min read",
    category: "Sleep & Recovery",
    icon: Moon,
    tags: ["Sleep Disorders", "Phoenix Sleep", "Insomnia Treatment", "Arizona Health"]
  },
  {
    id: "stress-anxiety-management-phoenix-acupuncture",
    title: "Managing Stress and Anxiety in Phoenix: An Integrative Medicine Approach",
    excerpt: "Discover how medical acupuncture and stress management techniques can help Phoenix residents cope with urban stress, work pressures, and anxiety disorders.",
    author: "Dr. Forbes",
    date: "2024-02-01",
    readTime: "5 min read",
    category: "Mental Wellness",
    icon: Brain,
    tags: ["Stress Management", "Anxiety Relief", "Phoenix Mental Health", "Work-Life Balance"]
  },
  {
    id: "seasonal-allergies-phoenix-acupuncture-relief",
    title: "Phoenix Seasonal Allergies: Natural Support Through Medical Acupuncture",
    excerpt: "Understanding how medical acupuncture may help manage seasonal allergy symptoms common in the Phoenix Valley, including pollen and dust sensitivities.",
    author: "Dr. Forbes",
    date: "2024-01-15",
    readTime: "6 min read",
    category: "Seasonal Health",
    icon: Sparkles,
    tags: ["Seasonal Allergies", "Phoenix Allergies", "Natural Relief", "Immune Support"]
  },
  {
    id: "womens-health-menopause-phoenix-acupuncture",
    title: "Women's Health and Menopause: Phoenix Acupuncture Support for Hormonal Balance",
    excerpt: "How medical acupuncture may help Phoenix women navigate menopause symptoms, hormonal changes, and women's health concerns through integrative care.",
    author: "Dr. Forbes",
    date: "2024-01-01",
    readTime: "8 min read",
    category: "Women's Health",
    icon: Heart,
    tags: ["Women's Health", "Menopause Support", "Hormonal Balance", "Phoenix Women"]
  },
  {
    id: "digestive-health-phoenix-lifestyle-acupuncture",
    title: "Digestive Health and Phoenix Lifestyle: Acupuncture for Gut Wellness",
    excerpt: "Explore how medical acupuncture may support digestive health challenges common to Phoenix residents, including stress-related digestive issues and dietary concerns.",
    author: "Dr. Forbes",
    date: "2023-12-15",
    readTime: "6 min read",
    category: "Digestive Wellness",
    icon: Sparkles,
    tags: ["Digestive Health", "Gut Wellness", "Phoenix Nutrition", "Stress Digestion"]
  },
  {
    id: "migraine-headache-relief-phoenix-acupuncture",
    title: "Migraine and Headache Relief: Phoenix Acupuncture Solutions for Head Pain",
    excerpt: "Research-based insights on how medical acupuncture may help reduce migraine frequency and intensity for Phoenix residents dealing with chronic headaches.",
    author: "Dr. Forbes",
    date: "2023-12-01",
    readTime: "7 min read",
    category: "Pain Management",
    icon: Activity,
    tags: ["Migraine Relief", "Headache Treatment", "Phoenix Pain", "Neurological Support"]
  },
  {
    id: "athletic-performance-phoenix-acupuncture-recovery",
    title: "Athletic Performance and Recovery: How Phoenix Athletes Use Medical Acupuncture",
    excerpt: "Learn how Phoenix athletes and active individuals incorporate medical acupuncture for performance optimization, injury prevention, and faster recovery.",
    author: "Dr. Forbes",
    date: "2023-11-15",
    readTime: "6 min read",
    category: "Sports Medicine",
    icon: Users,
    tags: ["Athletic Performance", "Sports Recovery", "Phoenix Athletes", "Injury Prevention"]
  },
  {
    id: "senior-health-aging-phoenix-acupuncture",
    title: "Healthy Aging in Phoenix: Acupuncture Support for Senior Health and Wellness",
    excerpt: "How medical acupuncture may support healthy aging for Phoenix seniors, addressing pain management, mobility, and quality of life improvements.",
    author: "Dr. Forbes",
    date: "2023-11-01",
    readTime: "8 min read",
    category: "Senior Health",
    icon: Heart,
    tags: ["Senior Health", "Healthy Aging", "Phoenix Seniors", "Quality of Life"]
  },
  {
    id: "workplace-wellness-phoenix-acupuncture-stress",
    title: "Workplace Wellness in Phoenix: Acupuncture for Professional Stress Management",
    excerpt: "Addressing common workplace health challenges in Phoenix through medical acupuncture, including stress, repetitive strain, and work-life balance.",
    author: "Dr. Forbes",
    date: "2023-10-15",
    readTime: "5 min read",
    category: "Workplace Wellness",
    icon: Brain,
    tags: ["Workplace Wellness", "Professional Stress", "Phoenix Professionals", "Work Health"]
  },
  {
    id: "immune-system-support-phoenix-acupuncture",
    title: "Immune System Support Through Medical Acupuncture: Phoenix Wellness Strategies",
    excerpt: "How medical acupuncture may support immune system function and overall wellness for Phoenix residents, especially during seasonal transitions.",
    author: "Dr. Forbes",
    date: "2023-10-01",
    readTime: "7 min read",
    category: "Immune Support",
    icon: Users,
    tags: ["Immune Support", "Phoenix Wellness", "Seasonal Health", "Preventive Care"]
  },
  {
    id: "integrative-medicine-phoenix-future-healthcare",
    title: "The Future of Healthcare in Phoenix: Integrative Medicine and Patient-Centered Care",
    excerpt: "Exploring the growing role of integrative medicine in Phoenix healthcare, combining conventional treatment with evidence-based complementary approaches.",
    author: "Dr. Forbes",
    date: "2023-09-15",
    readTime: "6 min read",
    category: "Integrative Medicine",
    icon: Sparkles,
    tags: ["Integrative Medicine", "Phoenix Healthcare", "Patient-Centered Care", "Medical Innovation"]
  }
];

const categories = [
  { name: "Pain Management", count: 3, icon: Activity },
  { name: "Sleep & Recovery", count: 2, icon: Moon },
  { name: "Mental Wellness", count: 2, icon: Brain },
  { name: "Women's Health", count: 1, icon: Heart },
  { name: "Seasonal Health", count: 2, icon: Sparkles },
  { name: "Sports Medicine", count: 1, icon: Users }
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-teal-50 to-champagne-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-teal-100 rounded-full mb-6">
                <BookOpen className="h-10 w-10 text-teal-600" />
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-obsidian mb-6">
                Health Insights & Education
              </h1>
              <p className="text-xl text-ink/80 mb-8">
                Evidence-based health insights from Dr. Forbes covering medical acupuncture, 
                integrative medicine, and wellness strategies for Phoenix area residents
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
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="font-serif text-3xl md:text-4xl text-obsidian mb-4">
                Featured Article
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <article className="bg-gradient-to-br from-teal-50 to-champagne-50 rounded-2xl p-8 border border-teal-100">
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full font-medium">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center gap-2 text-ink/60">
                    <User className="h-4 w-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-2 text-ink/60">
                    <Clock className="h-4 w-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
                
                <h1 className="font-serif text-3xl md:text-4xl text-obsidian mb-4">
                  {featuredPost.title}
                </h1>
                
                <p className="text-lg text-ink/80 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPost.tags.map((tag, index) => (
                    <span key={index} className="text-xs bg-white/80 text-ink/70 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button
                  className="bg-teal-500 hover:bg-teal-600 text-white"
                  asChild
                >
                  <a href={`/blog/${featuredPost.id}`}>
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </article>
            </div>
          </div>
        </section>

        {/* Blog Categories */}
        <section className="py-16 bg-porcelain">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-obsidian mb-4">
                Explore by Category
              </h2>
              <p className="text-lg text-ink/70">
                Find articles on topics most relevant to your health interests
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {categories.map((category, index) => (
                <a
                  key={index}
                  href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-white rounded-xl p-6 hover:bg-teal-50 transition-colors group shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-100 rounded-full group-hover:bg-teal-200 transition-colors">
                      <category.icon className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-obsidian mb-1">
                        {category.name}
                      </h3>
                      <p className="text-sm text-ink/60">
                        {category.count} article{category.count !== 1 ? 's' : ''}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Articles */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-obsidian mb-4">
                Recent Articles
              </h2>
              <p className="text-lg text-ink/70">
                Stay informed with our latest health insights and medical acupuncture research
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {blogPosts.slice(0, 9).map((post, index) => (
                <article key={index} className="bg-porcelain rounded-xl p-6 hover:bg-teal-50 transition-colors group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-teal-100 rounded-full group-hover:bg-teal-200 transition-colors">
                      <post.icon className="h-5 w-5 text-teal-600" />
                    </div>
                    <span className="text-sm bg-white/80 text-teal-700 px-2 py-1 rounded font-medium">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-obsidian mb-3 line-clamp-2 group-hover:text-teal-700 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-sm text-ink/70 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-ink/60 mb-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs bg-white/60 text-ink/60 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-teal-200 hover:bg-teal-50 text-teal-700 group-hover:border-teal-300"
                    asChild
                  >
                    <a href={`/blog/${post.id}`}>
                      Read Article
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                </article>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button
                variant="outline"
                size="lg"
                className="border-obsidian/20 hover:bg-obsidian/5"
              >
                Load More Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-gradient-to-br from-teal-500 to-teal-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
                Stay Informed About Your Health
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Get the latest evidence-based health insights and medical acupuncture 
                research delivered to Phoenix area residents
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">
                  What You'll Receive:
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <ul className="space-y-2 text-white/90 text-sm">
                    <li>• Monthly health insights from Dr. Forbes</li>
                    <li>• Latest acupuncture research updates</li>
                    <li>• Phoenix-specific health tips</li>
                  </ul>
                  <ul className="space-y-2 text-white/90 text-sm">
                    <li>• Seasonal wellness strategies</li>
                    <li>• Treatment success stories</li>
                    <li>• Exclusive patient resources</li>
                  </ul>
                </div>
              </div>
              
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
                  Schedule Consultation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent text-white border-white hover:bg-white/10"
                  asChild
                >
                  <a href="/contact">
                    Contact Our Phoenix Office
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Medical Disclaimer */}
        <section className="py-8 bg-amber-50 border-t border-amber-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-lg font-semibold text-amber-800 mb-3">
                Educational Content Disclaimer
              </h3>
              <p className="text-amber-700 text-sm leading-relaxed">
                The content on this blog is for educational and informational purposes only and is not intended 
                as medical advice. Always consult with Dr. Forbes or qualified healthcare providers regarding 
                your specific health concerns and treatment options. Individual results may vary, and the 
                information provided should not be used as a substitute for professional medical diagnosis 
                or treatment. Citations to medical research are provided where appropriate and represent 
                current understanding as of the publication date.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}