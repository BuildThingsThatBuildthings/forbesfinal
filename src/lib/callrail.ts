/**
 * CallRail Integration for Forbes Integrative Medicine
 * Phone call tracking and analytics integration
 */

import { ANALYTICS_CONFIG } from './analytics';

export interface CallRailCall {
  id: string;
  duration: number;
  caller_number: string;
  tracking_number: string;
  referrer_domain: string;
  landing_page_url: string;
  start_time: string;
  answered: boolean;
  value?: number;
  call_quality_score?: number;
}

declare global {
  interface Window {
    CallRail?: {
      ready: (callback: () => void) => void;
      on: (event: string, callback: (data: any) => void) => void;
      _cr?: any[];
    };
    _cr?: any[];
  }
}

/**
 * Initialize CallRail tracking
 */
export const initCallRail = (): void => {
  if (typeof window === 'undefined' || !ANALYTICS_CONFIG.CALLRAIL_ACCOUNT_ID) return;

  // Initialize CallRail array
  window._cr = window._cr || [];
  
  // Set account
  window._cr.push(['_setAccount', ANALYTICS_CONFIG.CALLRAIL_ACCOUNT_ID]);
  
  // Enable features
  window._cr.push(['_enablePageViews']);
  window._cr.push(['_enableCallAttributionReporting']);
  
  // Medical practice specific configuration
  window._cr.push(['_setCustomVar', 'practice_type', 'integrative_medicine']);
  window._cr.push(['_setCustomVar', 'provider', 'dr_forbes']);
  window._cr.push(['_setCustomVar', 'location', 'Phoenix_AZ']);
  
  // Set referral tracking
  if (document.referrer) {
    window._cr.push(['_setCustomVar', 'referral_source', document.referrer]);
  }
  
  // Set landing page
  window._cr.push(['_setCustomVar', 'landing_page', window.location.pathname]);
  
  // Set UTM parameters
  const urlParams = new URLSearchParams(window.location.search);
  const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
  utmParams.forEach(param => {
    const value = urlParams.get(param);
    if (value) {
      window._cr.push(['_setCustomVar', param, value]);
    }
  });

  // Load CallRail script
  const script = document.createElement('script');
  script.src = `https://d2f8lau4gl4ixy.cloudfront.net/app/${ANALYTICS_CONFIG.CALLRAIL_ACCOUNT_ID.replace('ACC-', 'A_CODE_')}.js`;
  script.async = true;
  
  const firstScript = document.getElementsByTagName('script')[0];
  if (firstScript && firstScript.parentNode) {
    firstScript.parentNode.insertBefore(script, firstScript);
  } else {
    document.head.appendChild(script);
  }

  if (ANALYTICS_CONFIG.DEBUG) {
    console.log('CallRail initialized', {
      account_id: ANALYTICS_CONFIG.CALLRAIL_ACCOUNT_ID,
      landing_page: window.location.pathname,
      referrer: document.referrer
    });
  }
};

/**
 * Calculate call quality score for medical appointments
 */
const calculateCallQualityScore = (call: CallRailCall): number => {
  let score = 0;
  
  // Duration scoring (medical consultations typically longer)
  if (call.duration >= 180) score += 4;      // 3+ minutes - very high quality
  else if (call.duration >= 120) score += 3; // 2+ minutes - high quality  
  else if (call.duration >= 60) score += 2;  // 1+ minute - medium quality
  else if (call.duration >= 30) score += 1;  // 30+ seconds - low quality
  
  // Time of day scoring (business hours)
  const callTime = new Date(call.start_time);
  const hour = callTime.getHours();
  const dayOfWeek = callTime.getDay();
  
  // Business hours (8 AM - 6 PM, Monday-Friday)
  if (hour >= 8 && hour <= 18 && dayOfWeek >= 1 && dayOfWeek <= 5) {
    score += 1;
  }
  
  // Weekend calls might indicate urgency
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    score += 0.5;
  }
  
  // Answered calls are higher quality
  if (call.answered) {
    score += 1;
  }
  
  return Math.min(score, 5); // Cap at 5
};

/**
 * Setup CallRail event listeners
 */
export const setupCallRailTracking = (): void => {
  if (typeof window === 'undefined') return;

  // Wait for CallRail to be ready
  const setupListeners = () => {
    if (!window.CallRail) return;

    window.CallRail.ready(() => {
      // Track call completion
      window.CallRail.on('call_complete', (call: CallRailCall) => {
        const qualityScore = calculateCallQualityScore(call);
        const isQualifiedCall = qualityScore >= 3;
        const estimatedValue = isQualifiedCall ? 250 : 0; // Average appointment value
        
        // Enhanced call data
        const enhancedCall = {
          ...call,
          call_quality_score: qualityScore,
          estimated_value: estimatedValue,
          is_qualified: isQualifiedCall
        };

        // Track in Google Analytics
        if (window.gtag) {
          window.gtag('event', 'phone_call_complete', {
            event_category: 'contact',
            event_label: 'callrail_call',
            call_duration: call.duration,
            call_quality_score: qualityScore,
            is_qualified_call: isQualifiedCall,
            estimated_value: estimatedValue,
            caller_area_code: call.caller_number.substring(1, 4), // Remove +1 prefix
            tracking_number: call.tracking_number,
            referrer: call.referrer_domain,
            landing_page: call.landing_page_url,
            call_answered: call.answered,
            value: estimatedValue
          });

          // Track as conversion if qualified
          if (isQualifiedCall) {
            window.gtag('event', 'qualified_call', {
              event_category: 'conversion',
              event_label: 'phone_consultation',
              value: estimatedValue,
              currency: 'USD'
            });
          }
        }

        // Push to dataLayer for other tags
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'callrail_call_complete',
          call_data: enhancedCall,
          call_duration: call.duration,
          call_value: estimatedValue,
          call_quality: qualityScore,
          call_source: call.referrer_domain,
          is_qualified_call: isQualifiedCall
        });

        if (ANALYTICS_CONFIG.DEBUG) {
          console.log('CallRail call tracked:', enhancedCall);
        }
      });

      // Track call start
      window.CallRail.on('call_start', (call: any) => {
        if (window.gtag) {
          window.gtag('event', 'phone_call_start', {
            event_category: 'engagement',
            event_label: 'call_initiated',
            tracking_number: call.tracking_number,
            page: window.location.pathname
          });
        }

        if (ANALYTICS_CONFIG.DEBUG) {
          console.log('CallRail call started:', call);
        }
      });
    });
  };

  // Try to setup listeners immediately or wait for script to load
  if (window.CallRail) {
    setupListeners();
  } else {
    // Poll for CallRail availability
    let attempts = 0;
    const maxAttempts = 50; // 5 seconds max wait
    const pollInterval = setInterval(() => {
      attempts++;
      if (window.CallRail || attempts >= maxAttempts) {
        clearInterval(pollInterval);
        if (window.CallRail) {
          setupListeners();
        }
      }
    }, 100);
  }
};

/**
 * Get phone number with CallRail tracking
 */
export const getTrackedPhoneNumber = (defaultNumber: string): string => {
  if (typeof window === 'undefined') return defaultNumber;
  
  // CallRail will replace this with tracking number via DOM manipulation
  // Just return the default number and let CallRail handle the replacement
  return defaultNumber;
};

/**
 * Initialize CallRail with medical practice optimizations
 */
export const initMedicalCallTracking = (): void => {
  if (typeof window === 'undefined') return;

  initCallRail();
  setupCallRailTracking();

  // Medical practice specific enhancements
  window._cr = window._cr || [];
  
  // Set appointment-related goals
  window._cr.push(['_setCallValue', 250]); // Average appointment value
  
  // Configure call scoring
  window._cr.push(['_setMinimumDuration', 30]); // Minimum call duration to be valuable
  
  // Set business hours
  window._cr.push(['_setBusinessHours', {
    monday: '08:00-18:00',
    tuesday: '08:00-18:00', 
    wednesday: '08:00-18:00',
    thursday: '08:00-18:00',
    friday: '08:00-18:00',
    saturday: '09:00-14:00', // Limited weekend hours
    sunday: 'closed'
  }]);

  if (ANALYTICS_CONFIG.DEBUG) {
    console.log('Medical call tracking initialized');
  }
};