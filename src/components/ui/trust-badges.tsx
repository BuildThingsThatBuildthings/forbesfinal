import { Award, GraduationCap, Shield, Heart, Clock, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface TrustBadgeProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description?: string;
  className?: string;
}

function TrustBadge({ icon: Icon, title, description, className }: TrustBadgeProps) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center">
          <Icon className="h-6 w-6 text-teal-600" />
        </div>
      </div>
      <div>
        <p className="font-medium text-obsidian">{title}</p>
        {description && (
          <p className="text-sm text-ink/60">{description}</p>
        )}
      </div>
    </div>
  );
}

interface TrustBadgesSectionProps {
  className?: string;
  variant?: "horizontal" | "grid";
}

export function TrustBadgesSection({ className, variant = "horizontal" }: TrustBadgesSectionProps) {
  const badges = [
    {
      icon: Shield,
      title: "Board Certified",
      description: "Family Medicine"
    },
    {
      icon: GraduationCap,
      title: "UVA Chief Resident",
      description: "Medical Excellence"
    },
    {
      icon: Award,
      title: "Marma Certified",
      description: "Advanced Techniques"
    },
    {
      icon: Heart,
      title: "Patient-Centered",
      description: "Individualized Care"
    },
    {
      icon: Clock,
      title: "15+ Years",
      description: "Clinical Experience"
    },
    {
      icon: Users,
      title: "1000+ Patients",
      description: "Helped Achieve Wellness"
    }
  ];

  if (variant === "grid") {
    return (
      <section className={cn("py-12 bg-porcelain/50", className)}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {badges.map((badge, index) => (
              <TrustBadge key={index} {...badge} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={cn("py-8 border-y border-gray-100 bg-white", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
          {badges.slice(0, 4).map((badge, index) => (
            <TrustBadge 
              key={index} 
              {...badge}
              description={undefined} // Horizontal variant shows only titles
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Compact trust indicators for hero sections
export function CompactTrustIndicators({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap gap-4", className)}>
      <div className="flex items-center gap-2 text-sm">
        <Shield className="h-4 w-4 text-teal-500" />
        <span className="font-medium text-ink">Board Certified</span>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <Award className="h-4 w-4 text-teal-500" />
        <span className="font-medium text-ink">UVA Chief Resident</span>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <Clock className="h-4 w-4 text-teal-500" />
        <span className="font-medium text-ink">Same Week Appointments</span>
      </div>
    </div>
  );
}