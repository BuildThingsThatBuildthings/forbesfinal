import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  content: string;
  author: string;
  condition?: string;
  rating?: number;
  date?: string;
  className?: string;
}

export function TestimonialCard({
  content,
  author,
  condition,
  rating = 5,
  date,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "relative bg-white rounded-lg border border-gray-100 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow",
        className
      )}
    >
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 text-champagne-300/50">
        <Quote className="h-8 w-8" />
      </div>

      {/* Rating Stars */}
      {rating > 0 && (
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-4 w-4",
                i < rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "fill-gray-200 text-gray-200"
              )}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <blockquote className="text-ink/70 leading-relaxed mb-4 italic">
        "{content}"
      </blockquote>

      {/* Medical Disclaimer */}
      <p className="text-xs text-muted-foreground italic mb-4">
        *Individual results may vary. This testimonial reflects one patient's experience.
      </p>

      {/* Author Info */}
      <div className="border-t border-gray-100 pt-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-obsidian">{author}</p>
            {condition && (
              <p className="text-sm text-ink/60">Treated for: {condition}</p>
            )}
          </div>
          {date && (
            <p className="text-sm text-ink/50">{date}</p>
          )}
        </div>
      </div>
    </div>
  );
}

// Testimonial Section Component
interface TestimonialSectionProps {
  testimonials: Array<{
    id: string;
    content: string;
    author: string;
    condition?: string;
    rating?: number;
    date?: string;
  }>;
  className?: string;
}

export function TestimonialSection({ testimonials, className }: TestimonialSectionProps) {
  // Schema.org Review markup
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Forbes Integrative Medicine",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": testimonials.length
    },
    "review": testimonials.map(testimonial => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": testimonial.rating || 5
      },
      "author": {
        "@type": "Person",
        "name": testimonial.author
      },
      "reviewBody": testimonial.content,
      "datePublished": testimonial.date
    }))
  };

  return (
    <section className={cn("py-16 md:py-24", className)}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-obsidian mb-4">
            Patient Experiences
          </h2>
          <p className="text-lg text-ink/70 max-w-2xl mx-auto">
            Read how medical acupuncture has helped support our patients' wellness journeys
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}