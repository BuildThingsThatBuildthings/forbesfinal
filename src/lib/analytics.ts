/**
 * Forbes Integrative Medicine - Analytics Library
 * Centralized analytics tracking for GA4 and cross-domain events
 */

// Analytics configuration
export const ANALYTICS_CONFIG = {
  GA4_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || 'G-XXXXXXXXXX',
  GTM_CONTAINER_ID: process.env.NEXT_PUBLIC_GTM_CONTAINER_ID || 'GTM-XXXXXXX',
  ACUBLISS_DOMAIN: 'forbesintegrativemedicine.acubliss.app',
  PRIMARY_DOMAIN: 'forbesintegrative.com',
  CALLRAIL_ACCOUNT_ID: process.env.NEXT_PUBLIC_CALLRAIL_ACCOUNT_ID || 'ACC-XXXXX',
  DEBUG: process.env.NODE_ENV === 'development'
};

// Event parameter types
export interface HeroCTAClickParams {
  page: string;
  position: 'hero' | 'header' | 'footer' | 'sidebar';
  variant: string;
  click_text?: string;
}

export interface BookFlowStartParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  gclid?: string;
  msclkid?: string;
  page_referrer: string;
  destination_url: string;
}

export interface BookFlowCompleteParams {
  appointment_type: 'consultation' | 'acupuncture' | 'follow_up';
  revenue: number;
  currency: 'USD';
  appointment_date: string;
  provider: 'dr_forbes';
}

export interface PhoneClickParams {
  device: 'mobile' | 'desktop' | 'tablet';
  phone_number: string;
  page: string;
}

export interface EmailClickParams {
  page: string;
  email_address: string;
}

export interface FAQExpandParams {
  question_id: string;
  question_text: string;
  section: 'services' | 'pricing' | 'general';
  page: string;
}

// Declare gtag function
declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void;
    dataLayer: any[];
  }
}

/**
 * Initialize Google Analytics
 */
export const initGA = (): void => {
  if (typeof window === 'undefined') return;
  
  // Initialize dataLayer if not exists
  window.dataLayer = window.dataLayer || [];
  
  // Define gtag function
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };
  
  // Set timestamp
  window.gtag('js', new Date());
  
  // Configure GA4
  window.gtag('config', ANALYTICS_CONFIG.GA4_MEASUREMENT_ID, {
    page_title: document.title,
    page_location: window.location.href,
    custom_map: {
      custom_parameter_1: 'clinic_location',
      custom_parameter_2: 'provider_type',
      custom_parameter_3: 'practice_type'
    },
    // Cross-domain tracking
    linker: {
      domains: [ANALYTICS_CONFIG.ACUBLISS_DOMAIN],
      accept_incoming: true
    },
    // Enhanced measurements
    enhanced_measurements: {
      scrolls: true,
      outbound_clicks: true,
      site_search: false,
      video_engagement: false,
      file_downloads: true
    },
    // Custom parameters
    clinic_location: 'Phoenix, AZ',
    provider_type: 'medical_acupuncture',
    practice_type: 'integrative_medicine',
    // Debug mode in development
    debug_mode: ANALYTICS_CONFIG.DEBUG
  });
  
  if (ANALYTICS_CONFIG.DEBUG) {
    console.log('GA4 Analytics initialized', {
      measurement_id: ANALYTICS_CONFIG.GA4_MEASUREMENT_ID,
      debug_mode: true
    });
  }
};

/**
 * Track page views
 */
export const trackPageView = (path: string, title?: string): void => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('config', ANALYTICS_CONFIG.GA4_MEASUREMENT_ID, {
    page_path: path,
    page_title: title || document.title,
    page_location: window.location.href
  });
  
  if (ANALYTICS_CONFIG.DEBUG) {
    console.log('Page view tracked:', { path, title });
  }
};

/**
 * Track hero CTA clicks
 */
export const trackHeroCTAClick = (params: HeroCTAClickParams): void => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', 'hero_cta_click', {
    event_category: 'engagement',
    event_label: 'book_consultation',
    page: params.page,
    position: params.position,
    variant: params.variant,
    click_text: params.click_text || 'Book Consultation',
    value: 1
  });
  
  if (ANALYTICS_CONFIG.DEBUG) {
    console.log('Hero CTA click tracked:', params);
  }
};

/**
 * Track booking flow start (redirect to Acubliss)
 */
export const trackBookFlowStart = (params: BookFlowStartParams): void => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  // Get URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  
  window.gtag('event', 'book_flow_start', {
    event_category: 'conversion',
    event_label: 'booking_initiated',
    utm_source: params.utm_source || urlParams.get('utm_source') || '(direct)',
    utm_medium: params.utm_medium || urlParams.get('utm_medium') || '(none)',
    utm_campaign: params.utm_campaign || urlParams.get('utm_campaign') || '(not set)',
    gclid: params.gclid || urlParams.get('gclid') || '',
    msclkid: params.msclkid || urlParams.get('msclkid') || '',
    page_referrer: params.page_referrer,
    destination_url: params.destination_url,
    value: 1
  });
  
  if (ANALYTICS_CONFIG.DEBUG) {
    console.log('Book flow start tracked:', params);
  }
};

/**
 * Track booking flow completion (called from Acubliss domain)
 */
export const trackBookFlowComplete = (params: BookFlowCompleteParams): void => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  // Track as conversion with revenue
  window.gtag('event', 'book_flow_complete', {
    event_category: 'conversion',
    event_label: 'appointment_booked',
    appointment_type: params.appointment_type,
    revenue: params.revenue,
    currency: params.currency,
    appointment_date: params.appointment_date,
    provider: params.provider,
    value: params.revenue
  });
  
  // Also track as purchase for e-commerce reporting
  window.gtag('event', 'purchase', {
    transaction_id: `appointment_${Date.now()}`,
    value: params.revenue,
    currency: params.currency,
    items: [{
      item_id: `appointment_${params.appointment_type}`,
      item_name: `${params.appointment_type.replace('_', ' ')} Appointment`,
      category: 'Medical Services',
      quantity: 1,
      price: params.revenue
    }]
  });
  
  if (ANALYTICS_CONFIG.DEBUG) {
    console.log('Book flow complete tracked:', params);
  }
};

/**
 * Track phone clicks
 */
export const trackPhoneClick = (params: PhoneClickParams): void => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', 'phone_click', {
    event_category: 'contact',
    event_label: 'phone_call',
    device: params.device,
    phone_number: params.phone_number,
    page: params.page,
    value: 1
  });
  
  if (ANALYTICS_CONFIG.DEBUG) {
    console.log('Phone click tracked:', params);
  }
};

/**
 * Track email clicks
 */
export const trackEmailClick = (params: EmailClickParams): void => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', 'email_click', {
    event_category: 'contact',
    event_label: 'email_click',
    page: params.page,
    email_address: params.email_address,
    value: 1
  });
  
  if (ANALYTICS_CONFIG.DEBUG) {
    console.log('Email click tracked:', params);
  }
};

/**
 * Track FAQ expansions
 */
export const trackFAQExpand = (params: FAQExpandParams): void => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', 'faq_expand', {
    event_category: 'engagement',
    event_label: 'faq_interaction',
    question_id: params.question_id,
    question_text: params.question_text,
    section: params.section,
    page: params.page,
    value: 1
  });
  
  if (ANALYTICS_CONFIG.DEBUG) {
    console.log('FAQ expand tracked:', params);
  }
};

/**
 * Track custom medical practice events
 */
export const trackServiceView = (serviceType: string, timeOnPage: number): void => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', 'service_view', {
    event_category: 'engagement',
    event_label: 'service_interest',
    service_type: serviceType,
    time_on_page: timeOnPage,
    value: 1
  });
};

export const trackProviderBioView = (section: string): void => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', 'provider_bio_view', {
    event_category: 'engagement',
    event_label: 'provider_interest',
    provider: 'dr_forbes',
    section_viewed: section,
    value: 1
  });
};

export const trackInsuranceCheck = (insuranceType: string): void => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', 'insurance_check', {
    event_category: 'engagement',
    event_label: 'insurance_inquiry',
    insurance_type: insuranceType,
    value: 1
  });
};

/**
 * Get user device type
 */
export const getDeviceType = (): 'mobile' | 'desktop' | 'tablet' => {
  if (typeof window === 'undefined') return 'desktop';
  
  const userAgent = navigator.userAgent;
  const width = window.innerWidth;
  
  if (/iPad/.test(userAgent) || (width >= 768 && width <= 1024)) {
    return 'tablet';
  } else if (/Mobile|Android|iPhone/.test(userAgent) || width < 768) {
    return 'mobile';
  } else {
    return 'desktop';
  }
};

/**
 * Build Acubliss URL with tracking parameters
 */
export const buildAcublissURL = (baseUrl: string): string => {
  if (typeof window === 'undefined') return baseUrl;
  
  const url = new URL(baseUrl);
  const currentParams = new URLSearchParams(window.location.search);
  
  // Add GA cross-domain parameters
  const gaParams = ['gclid', 'dclid', 'gclsrc', 'gbraid', 'wbraid'];
  gaParams.forEach(param => {
    const value = currentParams.get(param);
    if (value) url.searchParams.set(param, value);
  });
  
  // Add UTM parameters
  const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
  utmParams.forEach(param => {
    const value = currentParams.get(param);
    if (value) url.searchParams.set(param, value);
  });
  
  // Add Microsoft Click ID
  const msclkid = currentParams.get('msclkid');
  if (msclkid) url.searchParams.set('msclkid', msclkid);
  
  // Add referrer information
  if (document.referrer) {
    url.searchParams.set('referrer', encodeURIComponent(document.referrer));
  }
  
  return url.toString();
};

/**
 * Setup automatic link decoration for Acubliss links
 */
export const setupAcublissLinkDecoration = (): void => {
  if (typeof window === 'undefined') return;
  
  // Decorate all Acubliss links on page load
  const decorateLinks = () => {
    const acublissLinks = document.querySelectorAll(`a[href*="${ANALYTICS_CONFIG.ACUBLISS_DOMAIN}"]`);
    
    acublissLinks.forEach((link) => {
      const anchor = link as HTMLAnchorElement;
      const decoratedUrl = buildAcublissURL(anchor.href);
      anchor.href = decoratedUrl;
      
      // Add click tracking
      anchor.addEventListener('click', () => {
        trackBookFlowStart({
          page_referrer: window.location.href,
          destination_url: decoratedUrl
        });
      });
    });
  };
  
  // Run on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', decorateLinks);
  } else {
    decorateLinks();
  }
  
  // Re-run when new content is added (for SPAs)
  const observer = new MutationObserver((mutations) => {
    let shouldDecorate = false;
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          const element = node as Element;
          if (element.querySelector && element.querySelector(`a[href*="${ANALYTICS_CONFIG.ACUBLISS_DOMAIN}"]`)) {
            shouldDecorate = true;
          }
        }
      });
    });
    
    if (shouldDecorate) {
      setTimeout(decorateLinks, 100);
    }
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
};

/**
 * Initialize all analytics functionality
 */
export const initializeAnalytics = (): void => {
  if (typeof window === 'undefined') return;
  
  initGA();
  setupAcublissLinkDecoration();
  
  // Track initial page view
  trackPageView(window.location.pathname, document.title);
  
  if (ANALYTICS_CONFIG.DEBUG) {
    console.log('Forbes Integrative Medicine Analytics initialized');
  }
};