'use client';

import { Button } from './button';
import { 
  trackHeroCTAClick, 
  trackPhoneClick, 
  trackEmailClick,
  getDeviceType,
  buildAcublissURL 
} from '@/lib/analytics';
import { useRouter } from 'next/navigation';

interface AnalyticsButtonProps {
  children: React.ReactNode;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  disabled?: boolean;
}

// Hero CTA Button with analytics tracking
interface HeroCTAButtonProps extends AnalyticsButtonProps {
  position: 'hero' | 'header' | 'footer' | 'sidebar';
  variant?: string;
  acublissUrl: string;
}

export function HeroCTAButton({ 
  children, 
  position, 
  variant = 'primary',
  acublissUrl,
  className,
  ...buttonProps 
}: HeroCTAButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    // Track the CTA click
    trackHeroCTAClick({
      page: window.location.pathname,
      position,
      variant,
      click_text: children?.toString() || 'Book Consultation'
    });

    // Build decorated URL and redirect
    const decoratedUrl = buildAcublissURL(acublissUrl);
    
    // Small delay to ensure tracking fires
    setTimeout(() => {
      window.open(decoratedUrl, '_blank', 'noopener,noreferrer');
    }, 100);
  };

  return (
    <Button
      onClick={handleClick}
      className={className}
      {...buttonProps}
    >
      {children}
    </Button>
  );
}

// Phone Click Button with analytics tracking
interface PhoneButtonProps extends AnalyticsButtonProps {
  phoneNumber: string;
}

export function PhoneButton({ 
  children, 
  phoneNumber,
  className,
  ...buttonProps 
}: PhoneButtonProps) {
  const handleClick = () => {
    trackPhoneClick({
      device: getDeviceType(),
      phone_number: phoneNumber,
      page: window.location.pathname
    });
  };

  return (
    <Button
      asChild
      className={className}
      {...buttonProps}
    >
      <a 
        href={`tel:${phoneNumber}`}
        onClick={handleClick}
      >
        {children}
      </a>
    </Button>
  );
}

// Email Click Button with analytics tracking
interface EmailButtonProps extends AnalyticsButtonProps {
  emailAddress: string;
  subject?: string;
}

export function EmailButton({ 
  children, 
  emailAddress,
  subject,
  className,
  ...buttonProps 
}: EmailButtonProps) {
  const handleClick = () => {
    trackEmailClick({
      page: window.location.pathname,
      email_address: emailAddress
    });
  };

  const mailtoUrl = `mailto:${emailAddress}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`;

  return (
    <Button
      asChild
      className={className}
      {...buttonProps}
    >
      <a 
        href={mailtoUrl}
        onClick={handleClick}
      >
        {children}
      </a>
    </Button>
  );
}

// Generic tracked button for custom events
interface TrackedButtonProps extends AnalyticsButtonProps {
  eventName: string;
  eventParameters?: Record<string, any>;
  onClick?: () => void;
}

export function TrackedButton({
  children,
  eventName,
  eventParameters = {},
  onClick,
  className,
  ...buttonProps
}: TrackedButtonProps) {
  const handleClick = () => {
    // Track custom event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, {
        page: window.location.pathname,
        timestamp: Date.now(),
        ...eventParameters
      });
    }

    // Call additional onClick handler if provided
    if (onClick) {
      onClick();
    }
  };

  return (
    <Button
      onClick={handleClick}
      className={className}
      {...buttonProps}
    >
      {children}
    </Button>
  );
}