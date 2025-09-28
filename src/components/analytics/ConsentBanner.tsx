'use client';

import { useState, useEffect } from 'react';
import { Button } from '../ui/button';

interface ConsentPreferences {
  analytics: boolean;
  advertising: boolean;
  timestamp: number;
}

type UserRegion = 'EU' | 'US_PRIVACY' | 'US_STANDARD';

export function ConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [userRegion, setUserRegion] = useState<UserRegion>('US_STANDARD');
  const [isLoading, setIsLoading] = useState(true);

  // Consent management functions
  const updateGoogleConsent = (analyticsGranted: boolean, adStorageGranted: boolean = false) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': analyticsGranted ? 'granted' : 'denied',
        'ad_storage': adStorageGranted ? 'granted' : 'denied',
        'personalization_storage': analyticsGranted ? 'granted' : 'denied'
      });

      // Track consent decision
      window.gtag('event', 'consent_update', {
        'event_category': 'consent',
        'analytics_consent': analyticsGranted ? 'granted' : 'denied',
        'ad_consent': adStorageGranted ? 'granted' : 'denied'
      });
    }
  };

  const saveConsentPreferences = (preferences: ConsentPreferences) => {
    localStorage.setItem('forbes_clinic_consent', JSON.stringify(preferences));
    updateGoogleConsent(preferences.analytics, preferences.advertising);
  };

  const getStoredConsent = (): ConsentPreferences | null => {
    if (typeof window === 'undefined') return null;
    
    const stored = localStorage.getItem('forbes_clinic_consent');
    if (!stored) return null;

    try {
      const preferences = JSON.parse(stored);
      // Check if consent is less than 1 year old
      const oneYear = 365 * 24 * 60 * 60 * 1000;
      if (Date.now() - preferences.timestamp > oneYear) {
        localStorage.removeItem('forbes_clinic_consent');
        return null;
      }
      return preferences;
    } catch {
      return null;
    }
  };

  const detectUserRegion = (): UserRegion => {
    if (typeof window === 'undefined') return 'US_STANDARD';

    // Use timezone as proxy for region detection
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    
    // European timezones
    const europeanTimezones = [
      'Europe/', 'GMT', 'UTC',
      'Africa/Casablanca', 'Africa/Cairo', 'Asia/Istanbul'
    ];
    
    if (europeanTimezones.some(tz => timezone.includes(tz))) {
      return 'EU';
    }

    // Privacy-focused US states (California, Connecticut, Colorado, etc.)
    const privacyStates = [
      'America/Los_Angeles', 'America/Tijuana', // California
      'America/New_York', // Connecticut (approx)
      'America/Denver', 'America/Boise' // Colorado
    ];

    if (privacyStates.some(tz => timezone.includes(tz))) {
      return 'US_PRIVACY';
    }

    return 'US_STANDARD';
  };

  // Initialize consent banner logic
  useEffect(() => {
    const region = detectUserRegion();
    setUserRegion(region);

    const storedConsent = getStoredConsent();

    if (storedConsent) {
      // Apply stored preferences
      updateGoogleConsent(storedConsent.analytics, storedConsent.advertising);
      setShowBanner(false);
    } else if (region === 'EU' || region === 'US_PRIVACY') {
      // Show banner for regulated regions
      setShowBanner(true);
    } else {
      // US standard - implied consent for analytics only
      const impliedConsent: ConsentPreferences = {
        analytics: true,
        advertising: false,
        timestamp: Date.now()
      };
      saveConsentPreferences(impliedConsent);
      setShowBanner(false);
    }

    setIsLoading(false);
  }, []);

  const handleAcceptAll = () => {
    const preferences: ConsentPreferences = {
      analytics: true,
      advertising: true,
      timestamp: Date.now()
    };
    saveConsentPreferences(preferences);
    setShowBanner(false);
  };

  const handleAcceptEssential = () => {
    const preferences: ConsentPreferences = {
      analytics: true,
      advertising: false,
      timestamp: Date.now()
    };
    saveConsentPreferences(preferences);
    setShowBanner(false);
  };

  const handleDeclineAll = () => {
    const preferences: ConsentPreferences = {
      analytics: false,
      advertising: false,
      timestamp: Date.now()
    };
    saveConsentPreferences(preferences);
    setShowBanner(false);
  };

  // Don't render anything while loading or if banner shouldn't be shown
  if (isLoading || !showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-2">
              Your Privacy Choices
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {userRegion === 'EU' 
                ? "We use cookies and similar technologies to provide our services, analyze website usage, and improve your experience. You can manage your preferences below."
                : "We use analytics cookies to understand how you interact with our website and improve our services. This helps us provide better healthcare information and booking experiences."
              }
            </p>
            <div className="mt-2">
              <a 
                href="/privacy" 
                className="text-sm text-blue-600 hover:text-blue-800 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              <span className="mx-2 text-gray-400">|</span>
              <a 
                href="/cookie-policy" 
                className="text-sm text-blue-600 hover:text-blue-800 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cookie Policy
              </a>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2 lg:gap-3 min-w-fit">
            {userRegion === 'EU' && (
              <Button
                variant="outline"
                size="sm"
                onClick={handleDeclineAll}
                className="text-sm"
              >
                Decline All
              </Button>
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={handleAcceptEssential}
              className="text-sm"
            >
              Essential Only
            </Button>
            <Button
              size="sm"
              onClick={handleAcceptAll}
              className="text-sm bg-blue-600 hover:bg-blue-700 text-white"
            >
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Consent preferences management component
export function ConsentPreferencesModal({ 
  isOpen, 
  onClose 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
}) {
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    analytics: false,
    advertising: false,
    timestamp: Date.now()
  });

  useEffect(() => {
    if (isOpen) {
      const stored = localStorage.getItem('forbes_clinic_consent');
      if (stored) {
        try {
          const storedPrefs = JSON.parse(stored);
          setPreferences({
            analytics: storedPrefs.analytics || false,
            advertising: storedPrefs.advertising || false,
            timestamp: storedPrefs.timestamp || Date.now()
          });
        } catch {
          // Use defaults if parsing fails
        }
      }
    }
  }, [isOpen]);

  const handleSave = () => {
    const updatedPreferences = {
      ...preferences,
      timestamp: Date.now()
    };
    
    localStorage.setItem('forbes_clinic_consent', JSON.stringify(updatedPreferences));
    
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': updatedPreferences.analytics ? 'granted' : 'denied',
        'ad_storage': updatedPreferences.advertising ? 'granted' : 'denied',
        'personalization_storage': updatedPreferences.analytics ? 'granted' : 'denied'
      });
    }
    
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <h2 className="text-lg font-semibold mb-4">Privacy Preferences</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Essential Cookies</h3>
            <p className="text-sm text-gray-600 mb-2">
              Required for the website to function properly, including security and basic functionality.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm">Always Active</span>
              <input type="checkbox" checked disabled className="text-blue-600" />
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-2">Analytics Cookies</h3>
            <p className="text-sm text-gray-600 mb-2">
              Help us understand how visitors interact with our website to improve our services.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm">Allow Analytics</span>
              <input 
                type="checkbox" 
                checked={preferences.analytics}
                onChange={(e) => setPreferences(prev => ({
                  ...prev, 
                  analytics: e.target.checked
                }))}
                className="text-blue-600"
              />
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-2">Marketing Cookies</h3>
            <p className="text-sm text-gray-600 mb-2">
              Used to track visitors across websites for advertising and remarketing purposes.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm">Allow Marketing</span>
              <input 
                type="checkbox" 
                checked={preferences.advertising}
                onChange={(e) => setPreferences(prev => ({
                  ...prev, 
                  advertising: e.target.checked
                }))}
                className="text-blue-600"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button onClick={onClose} className="flex-1 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-12 px-6 py-3">
            Cancel
          </button>
          <button onClick={handleSave} className="flex-1 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-teal-500 text-white hover:bg-teal-600 shadow-sm hover:shadow-md h-12 px-6 py-3">
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
}