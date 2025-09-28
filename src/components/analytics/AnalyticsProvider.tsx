'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { initializeAnalytics, trackPageView, ANALYTICS_CONFIG } from '@/lib/analytics';
import { ConsentBanner } from './ConsentBanner';

// GTM Script Component
export function GTMScript() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Initialize GTM
    const script = document.createElement('script');
    script.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${ANALYTICS_CONFIG.GTM_CONTAINER_ID}');
    `;
    document.head.appendChild(script);

    return () => {
      // Cleanup if needed
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* GTM noscript fallback */}
      <noscript>
        <iframe 
          src={`https://www.googletagmanager.com/ns.html?id=${ANALYTICS_CONFIG.GTM_CONTAINER_ID}`}
          height="0" 
          width="0" 
          style={{display:'none', visibility:'hidden'}}
        />
      </noscript>
    </>
  );
}

// Consent Mode Initialization Script
export function ConsentModeScript() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Initialize consent mode before any other scripts
    const script = document.createElement('script');
    script.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}

      // Default consent state for different regions
      gtag('consent', 'default', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied',
        'functionality_storage': 'granted',
        'personalization_storage': 'denied',
        'security_storage': 'granted',
        'wait_for_update': 2000,
        'region': ['US-CA', 'US-CT', 'US-CO', 'US-VA', 'US-IL', 'US-MT', 'US-TX']
      });

      // EU/EEA region handling
      gtag('consent', 'default', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied',
        'functionality_storage': 'granted',
        'personalization_storage': 'denied',
        'security_storage': 'granted',
        'wait_for_update': 2000,
        'region': ['AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 
                  'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 
                  'RO', 'SK', 'SI', 'ES', 'SE', 'GB', 'IS', 'LI', 'NO', 'CH']
      });
    `;
    
    // Insert before any other scripts
    const firstScript = document.getElementsByTagName('script')[0];
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    } else {
      document.head.appendChild(script);
    }
  }, []);

  return null;
}

// Main Analytics Provider Component
interface AnalyticsProviderProps {
  children: React.ReactNode;
}

export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  const pathname = usePathname();
  const [analyticsReady, setAnalyticsReady] = React.useState(false);

  // Initialize analytics on mount with error handling
  useEffect(() => {
    const initWithTimeout = async () => {
      try {
        // Add a timeout to prevent hanging
        const timeoutPromise = new Promise((_, reject) => {
          setTimeout(() => reject(new Error('Analytics initialization timeout')), 5000);
        });

        const initPromise = new Promise<void>((resolve) => {
          initializeAnalytics();
          resolve();
        });

        await Promise.race([initPromise, timeoutPromise]);
        setAnalyticsReady(true);
      } catch (error) {
        console.warn('Analytics initialization failed:', error);
        setAnalyticsReady(true); // Continue without analytics
      }
    };

    initWithTimeout();
  }, []);

  // Track page views on route changes
  useEffect(() => {
    if (analyticsReady) {
      trackPageView(pathname);
    }
  }, [pathname, analyticsReady]);

  return (
    <>
      <ConsentModeScript />
      <GTMScript />
      {children}
      <ConsentBanner />
    </>
  );
}

// Hook for tracking analytics events in components
export function useAnalytics() {
  return {
    trackEvent: (eventName: string, parameters: Record<string, any>) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, parameters);
        
        if (ANALYTICS_CONFIG.DEBUG) {
          console.log('Analytics event tracked:', eventName, parameters);
        }
      }
    },
    
    trackTiming: (name: string, value: number, category?: string, label?: string) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'timing_complete', {
          name,
          value,
          event_category: category || 'Performance',
          event_label: label
        });
      }
    },

    trackException: (description: string, fatal = false) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'exception', {
          description,
          fatal
        });
      }
    },

    setUserProperty: (name: string, value: string) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', ANALYTICS_CONFIG.GA4_MEASUREMENT_ID, {
          custom_map: { [name]: value }
        });
      }
    }
  };
}

// Performance monitoring component
export function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return;

    const sendPerformanceData = () => {
      const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (perfData && window.gtag) {
        // Track Core Web Vitals and page load metrics
        window.gtag('event', 'timing_complete', {
          name: 'page_load_time',
          value: Math.round(perfData.loadEventEnd - perfData.fetchStart),
          event_category: 'Performance'
        });

        window.gtag('event', 'timing_complete', {
          name: 'dom_interactive',
          value: Math.round(perfData.domInteractive - perfData.fetchStart),
          event_category: 'Performance'
        });

        window.gtag('event', 'timing_complete', {
          name: 'first_contentful_paint',
          value: Math.round(perfData.domContentLoadedEventEnd - perfData.fetchStart),
          event_category: 'Performance'
        });
      }
    };

    // Send performance data after page is fully loaded
    if (document.readyState === 'complete') {
      setTimeout(sendPerformanceData, 1000);
    } else {
      window.addEventListener('load', () => {
        setTimeout(sendPerformanceData, 1000);
      });
    }

    // Track Largest Contentful Paint (LCP)
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as PerformanceEntry & { renderTime?: number; loadTime?: number };
        
        if (lastEntry && window.gtag) {
          window.gtag('event', 'timing_complete', {
            name: 'largest_contentful_paint',
            value: Math.round(lastEntry.renderTime || lastEntry.loadTime || 0),
            event_category: 'Core Web Vitals'
          });
        }
      });

      try {
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        // LCP not supported in this browser
      }

      // Track First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (window.gtag) {
            window.gtag('event', 'timing_complete', {
              name: 'first_input_delay',
              value: Math.round(entry.processingStart - entry.startTime),
              event_category: 'Core Web Vitals'
            });
          }
        });
      });

      try {
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (e) {
        // FID not supported in this browser
      }

      // Track Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
      });

      try {
        clsObserver.observe({ entryTypes: ['layout-shift'] });
        
        // Send CLS value when user leaves the page
        const sendCLS = () => {
          if (window.gtag) {
            window.gtag('event', 'timing_complete', {
              name: 'cumulative_layout_shift',
              value: Math.round(clsValue * 1000), // Convert to milliseconds
              event_category: 'Core Web Vitals'
            });
          }
        };

        window.addEventListener('beforeunload', sendCLS);
        window.addEventListener('visibilitychange', () => {
          if (document.visibilityState === 'hidden') {
            sendCLS();
          }
        });
      } catch (e) {
        // CLS not supported in this browser
      }
    }
  }, []);

  return null;
}

// Error boundary for analytics with chunk load error handling
interface ErrorBoundaryState {
  hasError: boolean;
  errorType: 'chunk' | 'analytics' | 'unknown';
  retryCount: number;
}

export class AnalyticsErrorBoundary extends React.Component<
  { children: React.ReactNode },
  ErrorBoundaryState
> {
  private maxRetries = 3;
  
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { 
      hasError: false, 
      errorType: 'unknown',
      retryCount: 0 
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Detect chunk load errors
    const isChunkError = error.message?.includes('ChunkLoadError') || 
                        error.message?.includes('Loading chunk') ||
                        error.message?.includes('timeout');
    
    return { 
      hasError: true,
      errorType: isChunkError ? 'chunk' : 'analytics',
      retryCount: 0
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Handle chunk load errors by reloading the page
    if (this.state.errorType === 'chunk' && this.state.retryCount < this.maxRetries) {
      console.warn('Chunk load error detected, attempting recovery...', error.message);
      
      // Attempt to reload the page after a short delay
      setTimeout(() => {
        if (typeof window !== 'undefined') {
          window.location.reload();
        }
      }, 1000);
      
      return;
    }

    // Track error in analytics only if analytics is working
    if (typeof window !== 'undefined' && window.gtag && this.state.errorType !== 'chunk') {
      try {
        window.gtag('event', 'exception', {
          description: error.toString(),
          fatal: false,
          error_component: 'AnalyticsErrorBoundary',
          error_type: this.state.errorType,
          error_info: JSON.stringify(errorInfo)
        });
      } catch (e) {
        // Silently fail if analytics itself is broken
      }
    }

    console.error('Analytics Error Boundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // For chunk errors, show a minimal loading state while recovery happens
      if (this.state.errorType === 'chunk') {
        return (
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600 mx-auto mb-4"></div>
              <p className="text-slate-600">Loading...</p>
            </div>
          </div>
        );
      }
      
      // For other errors, continue rendering children
      return this.props.children;
    }

    return this.props.children;
  }
}