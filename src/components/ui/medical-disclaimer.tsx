import { AlertTriangle, Info, Stethoscope } from "lucide-react";
import { cn } from "@/lib/utils";

interface MedicalDisclaimerProps {
  variant?: 'default' | 'testimonial' | 'treatment' | 'compact' | 'footer';
  className?: string;
  customText?: string;
}

export function MedicalDisclaimer({ 
  variant = 'default', 
  className,
  customText 
}: MedicalDisclaimerProps) {
  
  const getDisclaimerContent = () => {
    if (customText) return customText;

    switch (variant) {
      case 'testimonial':
        return "*Individual results may vary. This testimonial reflects one patient's experience and is not a guarantee of similar outcomes for other patients.";
      
      case 'treatment':
        return "Individual results may vary. Treatment effectiveness depends on many factors including individual health status, condition severity, and treatment compliance. Consult with Dr. Forbes to determine if medical acupuncture is appropriate for your specific condition.";
      
      case 'compact':
        return "*Individual results may vary. Not a guarantee of treatment outcomes.";
      
      case 'footer':
        return "*Individual results may vary. Medical acupuncture treatments are intended to support overall wellness and may help with various conditions. Consult with Dr. Forbes for personalized treatment plans.";
      
      case 'default':
      default:
        return "Individual results may vary. The information provided on this website is for educational purposes only and is not intended as medical advice, diagnosis, or treatment. Medical acupuncture effectiveness depends on individual factors including health status, condition severity, and treatment compliance. Always consult with Dr. Forbes or your healthcare provider before making decisions about your health or treatment. Never discontinue prescribed medications without consulting your prescribing physician.";
    }
  };

  const getIconAndStyling = () => {
    switch (variant) {
      case 'testimonial':
        return {
          icon: Info,
          containerClass: "bg-blue-50 border-blue-200 text-blue-700",
          iconClass: "text-blue-500",
          textClass: "text-blue-700"
        };
      
      case 'treatment':
        return {
          icon: Stethoscope,
          containerClass: "bg-amber-50 border-amber-200 text-amber-800",
          iconClass: "text-amber-600",
          textClass: "text-amber-700"
        };
      
      case 'compact':
        return {
          icon: null,
          containerClass: "bg-gray-50 border-gray-200",
          iconClass: "",
          textClass: "text-gray-600 text-xs italic"
        };
      
      case 'footer':
        return {
          icon: null,
          containerClass: "",
          iconClass: "",
          textClass: "text-ink/50 text-xs italic"
        };
      
      case 'default':
      default:
        return {
          icon: AlertTriangle,
          containerClass: "bg-amber-50 border-amber-200",
          iconClass: "text-amber-600",
          textClass: "text-amber-700"
        };
    }
  };

  const { icon: Icon, containerClass, iconClass, textClass } = getIconAndStyling();
  const disclaimerText = getDisclaimerContent();

  if (variant === 'footer') {
    return (
      <p className={cn(textClass, className)}>
        {disclaimerText}
      </p>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={cn("p-2 rounded border", containerClass, className)}>
        <p className={textClass}>
          {disclaimerText}
        </p>
      </div>
    );
  }

  return (
    <div className={cn(
      "rounded-lg border p-4",
      containerClass,
      className
    )}>
      <div className="flex items-start gap-3">
        {Icon && <Icon className={cn("h-5 w-5 flex-shrink-0 mt-0.5", iconClass)} />}
        <div className="flex-1">
          {variant === 'default' && (
            <h3 className="font-semibold mb-2 text-amber-800">
              Important Medical Disclaimer
            </h3>
          )}
          <p className={cn("text-sm leading-relaxed", textClass)}>
            {disclaimerText}
          </p>
        </div>
      </div>
    </div>
  );
}

// Specific disclaimer components for common use cases
export function TestimonialDisclaimer({ className }: { className?: string }) {
  return <MedicalDisclaimer variant="testimonial" className={className} />;
}

export function TreatmentDisclaimer({ className }: { className?: string }) {
  return <MedicalDisclaimer variant="treatment" className={className} />;
}

export function CompactDisclaimer({ className }: { className?: string }) {
  return <MedicalDisclaimer variant="compact" className={className} />;
}

export function FooterDisclaimer({ className }: { className?: string }) {
  return <MedicalDisclaimer variant="footer" className={className} />;
}

// Medical disclaimer with HIPAA notice (for forms and patient portals)
export function HIPAADisclaimer({ className }: { className?: string }) {
  return (
    <MedicalDisclaimer 
      variant="treatment"
      className={className}
      customText="This form is for general inquiries only and should not be used to transmit personal health information (PHI) or discuss specific medical conditions. For urgent medical concerns, please call 602-688-4874 or seek immediate medical attention. By submitting this form, you acknowledge that email communication is not secure and may be intercepted by third parties."
    />
  );
}

// Age-appropriate disclaimer for minors
export function MinorDisclaimer({ className }: { className?: string }) {
  return (
    <MedicalDisclaimer 
      variant="treatment"
      className={className}
      customText="Patients under 18 years of age must have parental or guardian consent for treatment. A parent or legal guardian must be present during the initial consultation and provide consent for all treatments. Individual results may vary based on age, development, and other factors."
    />
  );
}

// Insurance disclaimer
export function InsuranceDisclaimer({ className }: { className?: string }) {
  return (
    <MedicalDisclaimer 
      variant="default"
      className={className}
      customText="Insurance coverage for acupuncture varies by plan and provider. We recommend contacting your insurance company to verify benefits before your appointment. Patients are ultimately responsible for all charges regardless of insurance coverage decisions. We can provide documentation for out-of-network reimbursement when applicable."
    />
  );
}