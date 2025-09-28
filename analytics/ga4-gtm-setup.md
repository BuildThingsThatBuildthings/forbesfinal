# Forbes Integrative Medicine - GA4/GTM Analytics Implementation

## Overview
Complete analytics setup for Forbes Integrative Medicine clinic website with cross-domain tracking to Acubliss booking portal and comprehensive event tracking.

**Domain Configuration:**
- Primary: forbesintegrative.com
- Booking Portal: forbesintegrativemedicine.acubliss.app

## 1. Event Taxonomy

### Medical Clinic Event Schema

#### Core Business Events
```javascript
// Primary CTA Tracking
hero_cta_click: {
  event_category: "engagement",
  event_label: "book_consultation",
  page: string,      // Current page path
  position: string,  // "hero", "header", "footer", "sidebar"
  variant: string    // Button text variant for A/B testing
}

// Booking Flow Events
book_flow_start: {
  event_category: "conversion",
  event_label: "booking_initiated",
  utm_source: string,
  utm_medium: string,
  utm_campaign: string,
  gclid: string,
  msclkid: string,
  page_referrer: string
}

book_flow_complete: {
  event_category: "conversion",
  event_label: "appointment_booked",
  appointment_type: string, // "consultation", "acupuncture", "follow_up"
  revenue: number,
  currency: "USD",
  appointment_date: string,
  provider: "dr_forbes"
}

// Contact Events
phone_click: {
  event_category: "contact",
  event_label: "phone_call",
  device: string,    // "mobile", "desktop", "tablet"
  phone_number: string
}

email_click: {
  event_category: "contact",
  event_label: "email_click",
  page: string,
  email_address: string
}

// Content Engagement
faq_expand: {
  event_category: "engagement",
  event_label: "faq_interaction",
  question_id: string,
  question_text: string,
  section: string // "services", "pricing", "general"
}
```

#### Healthcare-Specific Events
```javascript
// Service Interest
service_view: {
  event_category: "engagement",
  event_label: "service_interest",
  service_type: string, // "medical_acupuncture", "pain_management", "wellness"
  time_on_page: number
}

// Provider Information
provider_bio_view: {
  event_category: "engagement",
  event_label: "provider_interest",
  provider: "dr_forbes",
  section_viewed: string // "credentials", "experience", "philosophy"
}

// Insurance/Payment Interest
insurance_check: {
  event_category: "engagement",
  event_label: "insurance_inquiry",
  insurance_type: string
}
```

## 2. Google Tag Manager Configuration

### Container Setup
```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
<!-- End Google Tag Manager -->

<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

### GA4 Configuration Tag
```javascript
// GA4 Configuration - Tag Type: Google Analytics: GA4 Configuration
Tag Configuration:
- Measurement ID: G-XXXXXXXXXX
- Cookie Settings:
  - Cookie Domain: auto
  - Cookie Flags: secure;samesite=none
- Cross Domain Tracking:
  - Configure domains: forbesintegrative.com,forbesintegrativemedicine.acubliss.app
- Enhanced Measurements: All enabled
- Custom Parameters:
  - clinic_location: "Phoenix, AZ"
  - provider_type: "medical_acupuncture"
  - practice_type: "integrative_medicine"

Trigger: All Pages
```

### Cross-Domain Tracking Configuration
```javascript
// Variable: Cross Domain Auto Link
Variable Type: Auto-Link Domains
Domain List: forbesintegrativemedicine.acubliss.app
Use Hash as Delimiter: false
Decorate Forms: true
```

## 3. Event Parameters and Triggers

### Hero CTA Click Trigger
```javascript
// Trigger: Hero CTA Click
Trigger Type: Click - All Elements
Fire On: Some Clicks
Conditions:
- Click Element matches CSS selector: .hero-cta, [data-analytics="hero-cta"]
- Page Path does not contain "acubliss"

// Tag: Hero CTA Event
Tag Type: Google Analytics: GA4 Event
Event Name: hero_cta_click
Parameters:
- event_category: engagement
- event_label: book_consultation
- page: {{Page Path}}
- position: {{Click Element}} -> data-position attribute
- variant: {{Click Element}} -> data-variant attribute
- click_text: {{Click Text}}
```

### Book Flow Start Trigger
```javascript
// Trigger: Booking Redirect
Trigger Type: Click - All Elements  
Fire On: Some Clicks
Conditions:
- Click URL contains "acubliss.app"
- Click Element matches CSS selector: a[href*="acubliss"]

// Tag: Book Flow Start
Tag Type: Google Analytics: GA4 Event
Event Name: book_flow_start
Parameters:
- event_category: conversion
- event_label: booking_initiated
- utm_source: {{URL - utm_source}}
- utm_medium: {{URL - utm_medium}}
- utm_campaign: {{URL - utm_campaign}}
- gclid: {{URL - gclid}}
- msclkid: {{URL - msclkid}}
- page_referrer: {{Referrer}}
- destination_url: {{Click URL}}
```

### Book Flow Complete (Acubliss Domain)
```javascript
// Trigger: Booking Confirmation
Trigger Type: Page View
Fire On: Some Page Views
Conditions:
- Page Hostname equals forbesintegrativemedicine.acubliss.app
- Page Path contains "confirmation" OR "thank-you" OR "success"

// Tag: Book Flow Complete
Tag Type: Google Analytics: GA4 Event
Event Name: book_flow_complete
Parameters:
- event_category: conversion
- event_label: appointment_booked
- appointment_type: {{DLV - appointment_type}} // From dataLayer
- revenue: {{DLV - appointment_value}}
- currency: "USD"
- appointment_date: {{DLV - appointment_date}}
- provider: "dr_forbes"
```

### Phone Click Trigger
```javascript
// Trigger: Phone Number Click
Trigger Type: Click - All Elements
Fire On: Some Clicks
Conditions:
- Click URL matches RegEx: ^tel:.*

// Tag: Phone Click Event
Tag Type: Google Analytics: GA4 Event
Event Name: phone_click
Parameters:
- event_category: contact
- event_label: phone_call
- device: {{Device Type}}
- phone_number: {{Click URL}} -> remove "tel:" prefix
- page: {{Page Path}}
```

### Email Click Trigger
```javascript
// Trigger: Email Click
Trigger Type: Click - All Elements
Fire On: Some Clicks
Conditions:
- Click URL matches RegEx: ^mailto:.*

// Tag: Email Click Event
Tag Type: Google Analytics: GA4 Event
Event Name: email_click
Parameters:
- event_category: contact
- event_label: email_click
- page: {{Page Path}}
- email_address: {{Click URL}} -> remove "mailto:" prefix
```

### FAQ Expand Trigger
```javascript
// Trigger: FAQ Interaction
Trigger Type: Click - All Elements
Fire On: Some Clicks
Conditions:
- Click Element matches CSS selector: .faq-trigger, [data-analytics="faq-expand"]

// Tag: FAQ Expand Event
Tag Type: Google Analytics: GA4 Event
Event Name: faq_expand
Parameters:
- event_category: engagement
- event_label: faq_interaction
- question_id: {{Click Element}} -> data-question-id attribute
- question_text: {{Click Element}} -> aria-label or data-question
- section: {{Click Element}} -> data-section attribute
- page: {{Page Path}}
```

## 4. Consent Mode Implementation

### Consent Mode Configuration
```javascript
// Consent Mode Initialization (before GTM)
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

// Default consent state
gtag('consent', 'default', {
  'analytics_storage': 'denied',
  'ad_storage': 'denied',
  'functionality_storage': 'granted',
  'personalization_storage': 'denied',
  'security_storage': 'granted',
  'wait_for_update': 2000,
  'region': ['US-CA', 'US-CT', 'US-CO'] // Privacy-focused states
});

// EU/UK region handling
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
</script>
```

### Consent Update Function
```javascript
// Consent Management Function
function updateConsent(analyticsGranted, adStorageGranted = false) {
  gtag('consent', 'update', {
    'analytics_storage': analyticsGranted ? 'granted' : 'denied',
    'ad_storage': adStorageGranted ? 'granted' : 'denied',
    'personalization_storage': analyticsGranted ? 'granted' : 'denied'
  });
  
  // Track consent decision
  gtag('event', 'consent_update', {
    'event_category': 'consent',
    'analytics_consent': analyticsGranted ? 'granted' : 'denied',
    'ad_consent': adStorageGranted ? 'granted' : 'denied'
  });
}

// Usage examples:
// updateConsent(true, false); // Analytics only
// updateConsent(true, true);  // All marketing
// updateConsent(false);       // Decline all
```

### Regional Logic Implementation
```javascript
// GTM Custom HTML Tag: Consent Banner Logic
<script>
(function() {
  // Detect user region
  function getUserRegion() {
    // You can use a service like ipapi.co or implement server-side
    // For now, using timezone as proxy
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    
    if (timezone.includes('Europe') || timezone === 'GMT') {
      return 'EU';
    } else if (['America/Los_Angeles', 'America/Denver', 'America/New_York']
               .some(tz => timezone.includes(tz.split('/')[1]))) {
      // Check for privacy-focused US states
      return 'US_PRIVACY';
    }
    return 'US_STANDARD';
  }

  const region = getUserRegion();
  const consentKey = 'forbes_clinic_consent';
  const savedConsent = localStorage.getItem(consentKey);

  // Show banner if no saved consent and in regulated region
  if (!savedConsent && (region === 'EU' || region === 'US_PRIVACY')) {
    showConsentBanner(region);
  } else if (savedConsent) {
    const consent = JSON.parse(savedConsent);
    updateConsent(consent.analytics, consent.advertising);
  } else {
    // US standard - implied consent for analytics
    updateConsent(true, false);
  }
})();
</script>
```

## 5. CallRail Integration Plan

### CallRail Setup Configuration
```javascript
// CallRail Dynamic Number Insertion
<script>
var _cr = _cr || [];
_cr.push(['_setAccount', 'ACC-XXXXX']); // Your CallRail Account ID

// Medical practice specific configuration
_cr.push(['_enablePageViews']);
_cr.push(['_enableCallAttributionReporting']);

// Custom source tracking for medical referrals
_cr.push(['_setCustomVar', 'referral_source', '{{Referrer}}']);
_cr.push(['_setCustomVar', 'landing_page', '{{Page Path}}']);
_cr.push(['_setCustomVar', 'utm_campaign', '{{URL - utm_campaign}}']);

(function(){
  var s = document.createElement('script');
  s.src = 'https://d2f8lau4gl4ixy.cloudfront.net/app/A_CODE_XXXXX.js';
  s.async = true;
  document.head.appendChild(s);
})();
</script>
```

### CallRail GTM Integration
```javascript
// CallRail Call Event Trigger
// Trigger Type: Custom Event
// Event Name: callrail_call_complete

// CallRail Integration Tag
Tag Type: Custom HTML
HTML:
<script>
// Listen for CallRail call events
if (typeof CallRail !== 'undefined') {
  CallRail.ready(function() {
    CallRail.on('call_complete', function(call) {
      // Send to GA4
      gtag('event', 'phone_call_complete', {
        event_category: 'contact',
        event_label: 'callrail_call',
        call_duration: call.duration,
        caller_area_code: call.caller_number.substring(0, 3),
        tracking_number: call.tracking_number,
        referrer: call.referrer_domain,
        landing_page: call.landing_page_url
      });

      // Send to dataLayer for other tags
      window.dataLayer.push({
        event: 'callrail_call_complete',
        call_duration: call.duration,
        call_value: call.value || 0,
        call_source: call.referrer_domain
      });
    });
  });
}
</script>

Trigger: All Pages
```

### Medical Practice Call Scoring
```javascript
// Enhanced call tracking for medical appointments
CallRail.on('call_complete', function(call) {
  let callScore = 0;
  let appointmentLikely = false;
  
  // Score based on call duration (medical consultations typically longer)
  if (call.duration >= 120) callScore += 3;      // 2+ minutes
  else if (call.duration >= 60) callScore += 2;  // 1+ minute
  else if (call.duration >= 30) callScore += 1;  // 30+ seconds
  
  // Score based on time of day (business hours)
  const callHour = new Date(call.start_time).getHours();
  if (callHour >= 8 && callHour <= 17) callScore += 1;
  
  // Determine if likely appointment booking
  appointmentLikely = callScore >= 3;
  
  gtag('event', 'qualified_call', {
    event_category: 'conversion',
    event_label: appointmentLikely ? 'appointment_likely' : 'inquiry',
    call_quality_score: callScore,
    estimated_value: appointmentLikely ? 250 : 0
  });
});
```

## 6. QA Checklist and Test Plan

### Pre-Launch QA Checklist

#### Technical Implementation
- [ ] GTM container loads on all pages
- [ ] GA4 measurement ID correctly configured
- [ ] Cross-domain tracking parameters present on Acubliss links
- [ ] All event triggers fire correctly in GTM Preview mode
- [ ] Consent mode initialized before any tracking
- [ ] Custom parameters populated with correct values
- [ ] No JavaScript errors in browser console

#### Event Tracking Verification
- [ ] hero_cta_click fires with correct parameters
- [ ] book_flow_start fires on Acubliss redirect
- [ ] book_flow_complete fires on confirmation page
- [ ] phone_click captures tel: link clicks
- [ ] email_click captures mailto: link clicks
- [ ] faq_expand fires with question identification
- [ ] Events appear in GA4 DebugView within 5 minutes

#### Cross-Domain Tracking
- [ ] _ga parameter appended to Acubliss URLs
- [ ] Same Client ID maintained across domains
- [ ] Attribution data preserved in booking flow
- [ ] Thank you page events attributed to original source

#### Consent Management
- [ ] Consent banner displays in EU/privacy states
- [ ] Analytics blocked until consent granted
- [ ] Consent preferences saved locally
- [ ] Consent update events tracked

### Testing Scenarios

#### User Journey Testing
```javascript
// Test Scenario 1: Complete Booking Flow
1. Land on homepage from Google Ads
2. Click hero CTA button
3. Redirect to Acubliss (verify parameters)
4. Complete booking on Acubliss
5. Verify: hero_cta_click → book_flow_start → book_flow_complete

// Test Scenario 2: Contact Interactions  
1. Visit services page
2. Click phone number
3. Click email address
4. Expand 2-3 FAQ items
5. Verify: All events fire with correct parameters

// Test Scenario 3: Cross-Device Journey
1. Start on mobile, click CTA (don't complete)
2. Continue on desktop, complete booking
3. Verify: Attribution maintained via User ID or Client ID
```

#### Browser/Device Testing Matrix
```
Desktop:
- Chrome (latest)
- Safari (latest) 
- Firefox (latest)
- Edge (latest)

Mobile:
- iOS Safari
- Android Chrome
- Samsung Internet

Tablet:
- iPad Safari
- Android Chrome
```

### Debug and Validation Tools

#### GA4 Debug Setup
```javascript
// Enable GA4 Debug Mode
gtag('config', 'G-XXXXXXXXXX', {
  'debug_mode': true, // Remove in production
  'send_page_view': true
});

// Custom debug function
function debugGA4Event(eventName, parameters) {
  if (window.location.hostname === 'localhost' || 
      window.location.search.includes('debug=1')) {
    console.log('GA4 Debug - Event:', eventName, parameters);
  }
}
```

#### Validation Checklist
```javascript
// Automated validation function
function validateAnalyticsSetup() {
  const checks = {
    gtmLoaded: !!window.google_tag_manager,
    ga4Loaded: !!window.gtag,
    dataLayerExists: !!window.dataLayer,
    consentModeActive: window.dataLayer.some(item => 
      item[0] === 'consent' && item[1] === 'default'
    )
  };
  
  console.table(checks);
  return Object.values(checks).every(check => check === true);
}

// Run validation
window.addEventListener('load', () => {
  setTimeout(validateAnalyticsSetup, 2000);
});
```

## 7. Looker Studio Dashboard Template

### Key Performance Indicators (KPIs)

#### Executive Dashboard Metrics
```sql
-- Primary KPIs for Medical Practice
1. Monthly New Patient Acquisition
   - Source: book_flow_complete events
   - Dimension: First-time vs returning patients
   
2. Cost Per Patient Acquisition
   - Formula: Ad Spend / New Patients
   - Breakdown by channel (Google Ads, SEO, Referral)
   
3. Patient Lifetime Value (PLV)
   - Average appointment value × Visit frequency × Retention period
   
4. Conversion Funnel Performance
   - Website visitors → CTA clicks → Booking starts → Appointments booked
   
5. Phone vs Online Booking Ratio
   - Phone calls (CallRail) vs Online bookings (Acubliss)
```

### Dashboard Structure

#### Page 1: Executive Summary
```
📊 Scorecard Section:
- This Month New Patients: [Number]
- Cost Per Acquisition: [$Amount]
- Booking Conversion Rate: [%]
- Total Revenue Generated: [$Amount]

📈 Trend Charts:
- New Patient Acquisition (Last 6 months)
- Website Traffic vs Bookings
- Source Performance Comparison

🎯 Goal Progress:
- Monthly New Patient Target
- CPA Target Performance
- Revenue Goal Achievement
```

#### Page 2: Acquisition Analysis
```
📊 Traffic Sources Performance:
Source | Visitors | CTA Clicks | Bookings | CPA | ROAS
Google Ads | X | X | X | $X | X.X
Organic Search | X | X | X | $X | X.X
Direct | X | X | X | $X | X.X
Referral | X | X | X | $X | X.X

📈 Conversion Funnel:
[Visual funnel showing drop-off rates]
Website Visits → Hero CTA Clicks → Booking Starts → Completions

🔄 Attribution Analysis:
- First Touch Attribution
- Last Touch Attribution  
- Multi-Touch Attribution Model
```

#### Page 3: User Behavior Insights
```
🎯 Engagement Metrics:
- Average Session Duration
- Pages per Session
- FAQ Interaction Rate
- Service Page Views

📱 Device & Location Analysis:
- Mobile vs Desktop Booking Rates
- Geographic Distribution of Patients
- Local vs Non-local Patient Ratio

⏰ Temporal Patterns:
- Booking Time Distribution
- Day of Week Performance
- Seasonal Trends
```

#### Page 4: Contact & Communication
```
📞 Call Tracking (CallRail Integration):
- Total Calls Received
- Call Duration Distribution
- Qualified Call Rate
- Call-to-Appointment Conversion

📧 Contact Method Preferences:
- Phone vs Email vs Online Booking
- Response Time Analysis
- Contact Source Attribution

🗣️ Patient Communication Insights:
- Most Asked FAQ Questions
- Service Interest Patterns
- Information-Seeking Behavior
```

### Custom Calculations

#### Medical Practice Specific Metrics
```sql
-- Patient Acquisition Cost (PAC)
PAC = (Google Ads Cost + Other Marketing Costs) / New Patients

-- Booking Conversion Rate
Booking_Rate = book_flow_complete / Unique_Visitors * 100

-- Phone Call Quality Score
Call_Quality = (Calls > 2min) / Total_Calls * 100

-- Service Interest Score
Service_Interest = service_view_events / Total_Sessions

-- Patient Engagement Index
Engagement_Index = (FAQ_Expands + Service_Views + Bio_Views) / Sessions
```

### Automated Reporting Setup

#### Weekly Performance Report
```
Recipients: Dr. Forbes, Practice Manager
Schedule: Every Monday 8 AM
Content:
- Week-over-week patient acquisition
- Top performing marketing channels
- Conversion rate trends
- Action items and recommendations
```

#### Monthly Business Review
```
Recipients: Full team
Schedule: First Monday of each month
Content:
- Monthly goal achievement
- ROI analysis by channel
- Patient feedback correlation
- Strategic recommendations for next month
```

### Data Studio Template Configuration

#### Data Sources Connection
```
1. GA4 Property: Forbes Integrative Medicine
   - Custom dimensions: appointment_type, provider, device
   - Calculated metrics: CPA, LTV, conversion rates

2. Google Ads Account (if applicable)
   - Campaign performance data
   - Cost and click data
   - Keyword performance

3. CallRail Integration
   - Call volume and duration
   - Call source attribution
   - Call outcome scoring

4. Acubliss API (if available)
   - Appointment completion rates
   - Revenue per appointment
   - Appointment types breakdown
```

#### Dashboard Filters and Controls
```
Date Range Selector: Last 30 days (default)
Channel Filter: All, Paid Search, Organic, Direct, Referral
Device Filter: All, Desktop, Mobile, Tablet  
Location Filter: All, Local (Phoenix Metro), Non-local
Appointment Type: All, Consultation, Follow-up, Treatment
```

This comprehensive setup provides Forbes Integrative Medicine with enterprise-level analytics capabilities while maintaining compliance with healthcare privacy requirements and providing actionable insights for practice growth.