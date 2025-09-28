import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SectionRenderer } from "@/components/sanity/SectionRenderer";
import {
  getHomepage,
  getFeaturedServices,
  getFeaturedReviews,
  getFeaturedFaqs,
} from "@/lib/sanity-utils";
import { FAQSchema, ReviewsSchema } from "@/components/seo/StructuredData";
import { Metadata } from "next";
import { notFound } from "next/navigation";

// Fallback content if Sanity is not set up yet
const fallbackHomepage = {
  _id: "homepage-fallback",
  title: "Forbes Integrative Medicine | Medical Acupuncture Phoenix",
  sections: [
    {
      _id: "hero-fallback",
      _type: "section",
      type: "hero" as const,
      title: "Physician-Led Medical Acupuncture",
      subtitle: "Board-Certified Family Medicine Doctor",
      content: [
        {
          _type: "block",
          children: [
            {
              _type: "span",
              text: "Dr. Forbes combines traditional medical training with evidence-based acupuncture to provide comprehensive integrative care in Phoenix, Arizona.",
            },
          ],
        },
      ],
      ctaButtons: [
        {
          text: "Book Your Consultation",
          url: "https://forbesintegrativemedicine.acubliss.app",
          style: "primary" as const,
          openInNewTab: true,
        },
        {
          text: "Call 602-688-4874",
          url: "tel:602-688-4874",
          style: "outline" as const,
          openInNewTab: false,
        },
      ],
      backgroundColor: "default",
      spacing: "large",
      order: 1,
      isActive: true,
    },
    {
      _id: "services-fallback",
      _type: "section",
      type: "textContent" as const,
      title: "Evidence-Based Treatments",
      subtitle: "Comprehensive Care",
      content: [
        {
          _type: "block",
          children: [
            {
              _type: "span",
              text: "We provide comprehensive medical acupuncture services tailored to your individual health needs. Dr. Forbes specializes in pain management, sleep disorders, stress reduction, and women's health.",
            },
          ],
        },
      ],
      ctaButtons: [
        {
          text: "View All Services",
          url: "/services",
          style: "primary" as const,
          openInNewTab: false,
        },
      ],
      backgroundColor: "light-gray",
      spacing: "medium",
      order: 2,
      isActive: true,
    },
  ],
  seo: {
    metaTitle: "Forbes Integrative Medicine | Medical Acupuncture Phoenix",
    metaDescription:
      "Board-certified Family Medicine physician specializing in evidence-based medical acupuncture in Phoenix. Pain management, sleep disorders, and integrative wellness care.",
    keywords: [
      "medical acupuncture Phoenix",
      "Dr Forbes",
      "integrative medicine",
      "pain management Phoenix",
    ],
  },
};

export async function generateMetadata(): Promise<Metadata> {
  try {
    const homepage = (await getHomepage()) || fallbackHomepage;

    return {
      title: homepage.seo?.metaTitle || homepage.title,
      description:
        homepage.seo?.metaDescription ||
        "Physician-led medical acupuncture clinic in Phoenix. Board-certified Family Medicine doctor specializing in integrative treatments.",
      keywords:
        homepage.seo?.keywords?.join(", ") ||
        "medical acupuncture, Phoenix, integrative medicine",
      openGraph: {
        title:
          (homepage.seo as any)?.ogTitle ||
          homepage.seo?.metaTitle ||
          homepage.title,
        description:
          (homepage.seo as any)?.ogDescription ||
          homepage.seo?.metaDescription ||
          "Physician-led medical acupuncture clinic in Phoenix.",
        type: "website",
        url: "/",
      },
      twitter: {
        card: (homepage.seo as any)?.twitterCard || "summary_large_image",
        title:
          (homepage.seo as any)?.ogTitle ||
          homepage.seo?.metaTitle ||
          homepage.title,
        description:
          (homepage.seo as any)?.ogDescription ||
          homepage.seo?.metaDescription ||
          "Physician-led medical acupuncture clinic in Phoenix.",
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Forbes Integrative Medicine | Medical Acupuncture Phoenix",
      description:
        "Board-certified Family Medicine physician specializing in evidence-based medical acupuncture in Phoenix.",
    };
  }
}

export default async function HomePage() {
  let homepage = null;
  let featuredServices = [];
  let featuredReviews = [];
  let featuredFaqs = [];

  try {
    // Fetch content from Sanity
    [homepage, featuredServices, featuredReviews, featuredFaqs] =
      await Promise.all([
        getHomepage({ cache: "force-cache" }),
        getFeaturedServices({ cache: "force-cache" }),
        getFeaturedReviews({ cache: "force-cache" }),
        getFeaturedFaqs({ cache: "force-cache" }),
      ]);
  } catch (error) {
    console.error("Error fetching CMS content:", error);
  }

  // Use fallback if no content from Sanity
  if (!homepage) {
    homepage = fallbackHomepage;
  }

  // Transform data for structured data schemas
  const faqSchemaData = featuredFaqs.map((faq) => ({
    question: faq.question,
    answer: Array.isArray(faq.answer)
      ? faq.answer
          .map(
            (block) => block.children?.map((child) => child.text).join("") || ""
          )
          .join(" ")
      : faq.answer || "",
  }));

  const reviewSchemaData = featuredReviews.map((review) => ({
    author: review.patientInitials || review.patientName,
    rating: review.rating,
    reviewBody: review.review,
    datePublished: review.reviewDate,
  }));

  return (
    <>
      {/* Structured Data */}
      {faqSchemaData.length > 0 && <FAQSchema faqs={faqSchemaData} />}
      {reviewSchemaData.length > 0 && (
        <ReviewsSchema reviews={reviewSchemaData} />
      )}

      <Header />
      <main>
        {/* Render dynamic sections from Sanity */}
        <SectionRenderer sections={homepage.sections || []} />

        {/* Medical Compliance Disclaimer */}
        {homepage.medicalCompliance?.includeDisclaimer && (
          <section className="py-8 bg-gray-50 border-t">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-sm text-gray-600 leading-relaxed">
                  {homepage.medicalCompliance.disclaimerText ||
                    homepage.medicalCompliance.customDisclaimer ||
                    "This information is for educational purposes only and is not intended to replace the advice of your doctor. Forbes Integrative Medicine disclaims any liability for the decisions you make based on this information."}
                </p>
                {homepage.medicalCompliance.medicalReviewed &&
                  homepage.medicalCompliance.reviewedBy && (
                    <p className="text-xs text-gray-500 mt-2">
                      Medically reviewed by{" "}
                      {homepage.medicalCompliance.reviewedBy.name},{" "}
                      {homepage.medicalCompliance.reviewedBy.title}
                      {homepage.medicalCompliance.reviewDate &&
                        ` on ${new Date(homepage.medicalCompliance.reviewDate).toLocaleDateString()}`}
                    </p>
                  )}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
