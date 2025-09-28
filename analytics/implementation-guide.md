# Forbes Integrative Medicine - Analytics Implementation Guide

## 🚀 Quick Start Implementation

### Step 1: Setup Analytics Accounts
1. **Google Analytics 4**
   - Create GA4 property: "Forbes Integrative Medicine"
   - Note Measurement ID: `G-XXXXXXXXXX`
   - Enable Enhanced Ecommerce
   - Configure custom dimensions for medical practice

2. **Google Tag Manager**
   - Create GTM container: "Forbes Integrative Medicine"  
   - Note Container ID: `GTM-XXXXXXX`
   - Import configuration from `/analytics/gtm-configuration.json`

3. **CallRail Account**
   - Create CallRail account for medical practice
   - Note Account ID: `ACC-XXXXX`
   - Configure phone number replacement
   - Set up call scoring rules

### Step 2: Configure Environment Variables
```bash
# Copy and update environment variables
cp .env.example .env.local

# Update with your actual IDs
NEXT_PUBLIC_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_CONTAINER_ID=GTM-XXXXXXX  
NEXT_PUBLIC_CALLRAIL_ACCOUNT_ID=ACC-XXXXX
```

### Step 3: Deploy Analytics Components
The analytics components are already integrated into your Next.js application:

- ✅ **Analytics Provider**: Wraps your app in `layout.tsx`
- ✅ **Consent Management**: EU/privacy compliance built-in
- ✅ **Cross-domain Tracking**: Automatic Acubliss link decoration
- ✅ **Event Tracking**: Hero CTA, booking flow, contact events
- ✅ **CallRail Integration**: Phone call tracking with quality scoring
- ✅ **Performance Monitoring**: Core Web Vitals tracking

---

## 📊 Analytics Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────┐
│                        Forbes Integrative Medicine                  │
│                           Analytics Stack                           │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────┐    ┌─────────────────┐    ┌─────────────────────┐
│   Data Layer    │    │   Consent Mgmt  │    │   Performance       │
│                 │    │                 │    │   Monitoring        │
│ • Page Views    │    │ • GDPR/CCPA     │    │ • Core Web Vitals   │
│ • User Events   │────│ • Regional Logic│────│ • Page Speed        │
│ • Conversions   │    │ • Preferences   │    │ • Error Tracking    │
│ • Call Data     │    │ • LocalStorage  │    │ • User Experience   │
└─────────────────┘    └─────────────────┘    └─────────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────────────────────────────────────────────────────────┐
│                    Google Tag Manager                              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐│
│  │     GA4     │  │   CallRail  │  │  Cross-Dom  │  │   Custom    ││
│  │   Events    │  │ Integration │  │   Tracking  │  │   Events    ││
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘│
└─────────────────────────────────────────────────────────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────────┐
│  Google         │    │     CallRail    │    │      Acubliss       │
│  Analytics 4    │    │   Call Tracking │    │  Booking Platform   │
│                 │    │                 │    │                     │
│ • Patient       │    │ • Call Quality  │    │ • Appointment       │
│   Acquisition   │    │ • Lead Scoring  │    │   Completions       │
│ • Conversion    │    │ • Attribution   │    │ • Revenue Data      │
│   Funnels       │    │ • ROI Analysis  │    │ • Cross-Domain      │
│ • ROI Tracking  │    │                 │    │   Attribution       │
└─────────────────┘    └─────────────────┘    └─────────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────────────────────────────────────────────────────────┐
│                     Looker Studio Dashboard                        │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐│
│  │ Executive   │  │ Acquisition │  │ Engagement  │  │   Revenue   ││
│  │ Summary     │  │ Analysis    │  │ Insights    │  │   ROI       ││
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘│
└─────────────────────────────────────────────────────────────────────┘
```

---

## 🎯 Key Events & Tracking Implementation

### Primary Conversion Events

#### 1. Hero CTA Click
```typescript
// Automatically tracked when using HeroCTAButton component
import { HeroCTAButton } from '@/components/ui/analytics-buttons';

<HeroCTAButton
  position="hero"
  variant="primary"
  acublissUrl="https://forbesintegrativemedicine.acubliss.app/book"
>
  Book Consultation
</HeroCTAButton>

// Tracks: page, position, variant, click_text
```

#### 2. Booking Flow
```typescript
// book_flow_start - Automatic on Acubliss redirects
// book_flow_complete - Fires on Acubliss confirmation page

// Add to Acubliss confirmation page:
<script>
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: 'book_flow_complete',
  appointment_type: 'consultation', // or 'acupuncture', 'follow_up'
  appointment_value: 250,
  appointment_date: '2024-12-15',
  provider: 'dr_forbes'
});
</script>
```

#### 3. Contact Interactions
```typescript
// Phone clicks - automatic with PhoneButton component
import { PhoneButton } from '@/components/ui/analytics-buttons';

<PhoneButton phoneNumber="(602) 555-0123">
  Call Now
</PhoneButton>

// Email clicks - automatic with EmailButton component  
import { EmailButton } from '@/components/ui/analytics-buttons';

<EmailButton 
  emailAddress="info@forbesintegrative.com"
  subject="Appointment Inquiry"
>
  Send Email
</EmailButton>
```

#### 4. FAQ Interactions
```typescript
// Automatic tracking with FAQAccordion component
import { FAQAccordion } from '@/components/ui/faq-accordion';

const faqItems = [
  {
    id: 'insurance-coverage',
    question: 'Do you accept insurance?',
    answer: 'We accept most major insurance plans...'
  }
];

<FAQAccordion items={faqItems} section="services" />
```

---

## 🔧 Advanced Configuration

### Custom Event Tracking
```typescript
// Track custom medical practice events
import { useAnalytics } from '@/components/analytics/AnalyticsProvider';

const { trackEvent } = useAnalytics();

// Service page engagement
trackEvent('service_view', {
  service_type: 'medical_acupuncture',
  time_on_page: 90,
  page: '/services/acupuncture'
});

// Provider information views
trackEvent('provider_bio_view', {
  provider: 'dr_forbes',
  section_viewed: 'credentials',
  page: '/about'
});

// Insurance inquiry
trackEvent('insurance_check', {
  insurance_type: 'blue_cross',
  page: '/insurance'
});
```

### Cross-Domain Setup for Acubliss

#### Automatic Link Decoration
```typescript
// Links to Acubliss are automatically decorated with tracking parameters
// Example result:
// https://forbesintegrativemedicine.acubliss.app/book?
//   utm_source=google&
//   utm_medium=cpc&
//   utm_campaign=medical_acupuncture&
//   gclid=CjwKCAiA&
//   _ga=2.123456789.987654321
```

#### Manual URL Building
```typescript
import { buildAcublissURL } from '@/lib/analytics';

const decoratedUrl = buildAcublissURL('https://forbesintegrativemedicine.acubliss.app/book');
// Use decoratedUrl for external redirects
```

---

## 📱 Consent Management Implementation

### Automatic Regional Detection
The consent system automatically detects user regions and displays appropriate consent options:

- **EU/EEA**: Full consent banner with decline option
- **US Privacy States** (CA, CT, CO, etc.): Consent banner with analytics opt-out
- **US Standard**: Implied consent for analytics, no advertising tracking

### Manual Consent Control
```typescript
import { updateConsent } from '@/lib/analytics';

// Grant analytics consent only
updateConsent(true, false);

// Grant all marketing consent  
updateConsent(true, true);

// Decline all tracking (EU)
updateConsent(false, false);
```

### Consent Preferences Modal
```typescript
import { ConsentPreferencesModal } from '@/components/analytics/ConsentBanner';

// Add to your privacy settings page
const [showPreferences, setShowPreferences] = useState(false);

<ConsentPreferencesModal 
  isOpen={showPreferences}
  onClose={() => setShowPreferences(false)}
/>
```

---

## 📞 CallRail Integration Setup

### Account Configuration
1. **CallRail Dashboard Settings**
   ```
   Account Type: Medical Practice
   Business Category: Healthcare > Alternative Medicine
   Practice Location: Phoenix, AZ
   Business Hours: Mon-Fri 8AM-6PM, Sat 9AM-2PM
   ```

2. **Phone Number Setup**
   ```
   Primary Number: (602) 555-0123
   Tracking Numbers: Dynamic insertion enabled
   Whisper Message: "Call from Forbes Integrative website"
   ```

3. **Call Scoring Configuration**
   ```
   Minimum Duration: 30 seconds
   Qualified Call: 2+ minutes during business hours
   High Value Call: 3+ minutes + appointment booking keywords
   ```

### Integration Code
```typescript
// CallRail automatically integrates with GA4
// Custom call quality scoring includes:

const callQualityFactors = {
  duration: {
    '3+ minutes': 4,
    '2+ minutes': 3,
    '1+ minutes': 2,
    '30+ seconds': 1
  },
  timing: {
    'Business hours': +1,
    'Weekend': +0.5
  },
  answered: +1
};

// Estimated appointment value: $250 for qualified calls
```

---

## 🎨 UI Component Integration

### Analytics-Enabled Components

#### Button Components
```typescript
// Hero CTA with analytics
<HeroCTAButton
  position="hero"
  variant="primary-large"
  acublissUrl="https://forbesintegrativemedicine.acubliss.app/book"
  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg"
>
  Book Your Consultation Today
</HeroCTAButton>

// Phone button with device detection
<PhoneButton
  phoneNumber="(602) 555-0123"
  variant="outline"
  className="border-green-600 text-green-600 hover:bg-green-50"
>
  📞 Call Now
</PhoneButton>

// Tracked custom actions
<TrackedButton
  eventName="insurance_inquiry"
  eventParameters={{ insurance_type: 'general_inquiry' }}
  onClick={() => setShowInsuranceModal(true)}
>
  Check Insurance Coverage
</TrackedButton>
```

#### FAQ Accordion
```typescript
const medicalFAQs = [
  {
    id: 'what-is-medical-acupuncture',
    question: 'What is medical acupuncture?',
    answer: 'Medical acupuncture is performed by physicians who have completed specialized training...'
  },
  {
    id: 'insurance-coverage',
    question: 'Is medical acupuncture covered by insurance?',
    answer: 'Many insurance plans cover medical acupuncture when performed by a physician...'
  }
];

<FAQAccordion 
  items={medicalFAQs} 
  section="services"
  className="max-w-3xl mx-auto"
/>
```

---

## 📊 Data Studio Dashboard Setup

### 1. Create Dashboard
1. Go to [Looker Studio](https://datastudio.google.com)
2. Create new dashboard: "Forbes Integrative Medicine Analytics"
3. Add data sources:
   - GA4 Property connection
   - Google Ads (if applicable)
   - Manual CSV for appointment values

### 2. Import Dashboard Template
Use the configuration from `/analytics/looker-studio-dashboard.md`:
- Executive Summary (Page 1)
- Acquisition Analysis (Page 2)  
- User Behavior (Page 3)
- Contact Intelligence (Page 4)
- Revenue & ROI (Page 5)

### 3. Configure Automated Reports
```
Weekly Summary Email:
- Recipients: Dr. Forbes, Practice Manager
- Schedule: Every Monday 8 AM MST
- Content: KPI summary, weekly trends, action items

Monthly Business Review:
- Recipients: Full team
- Schedule: First Monday of each month
- Content: Comprehensive performance analysis
```

---

## 🚀 Launch Checklist

### Pre-Launch Testing
- [ ] Run QA checklist from `/analytics/qa-checklist.md`
- [ ] Test all user journeys across devices
- [ ] Verify cross-domain tracking with Acubliss
- [ ] Confirm consent management works in different regions
- [ ] Validate CallRail integration and call quality scoring

### Launch Day
- [ ] Switch to production environment variables
- [ ] Publish GTM container changes  
- [ ] Enable GA4 data collection
- [ ] Activate CallRail phone number replacement
- [ ] Monitor for any tracking errors

### Post-Launch (Week 1)
- [ ] Daily data quality checks
- [ ] Verify conversion attribution accuracy
- [ ] Monitor consent rates and compliance
- [ ] Check CallRail call quality scores
- [ ] Generate first weekly performance report

---

## 🎯 Success Metrics & KPIs

### Primary Business Metrics
- **New Patient Acquisition**: >50/month
- **Cost Per Acquisition**: <$150
- **Conversion Rate**: >5% (website visitors to appointments)
- **Call Quality Rate**: >40% qualified calls
- **Return on Marketing Spend**: >300% ROI

### Analytics Quality Metrics  
- **Data Accuracy**: >95% event tracking success
- **Cross-Domain Attribution**: >90% booking attribution
- **Consent Rate**: >80% analytics consent (non-EU)
- **Page Load Impact**: <100ms additional load time
- **Error Rate**: <1% tracking failures

### Patient Experience Metrics
- **FAQ Engagement**: Average 2+ questions expanded
- **Service Interest**: >60% view service pages
- **Mobile Conversion**: Match or exceed desktop rates
- **Contact Preference**: Track phone vs online booking ratio

---

## 🔄 Ongoing Optimization

### Monthly Review Process
1. **Performance Analysis**: KPI achievement vs targets
2. **Channel Optimization**: Reallocate budget to top-performing sources
3. **Content Updates**: Optimize based on FAQ engagement data
4. **Conversion Rate Optimization**: Test CTA variants using A/B testing
5. **Call Quality Enhancement**: Refine CallRail scoring algorithms

### Quarterly Strategic Review
1. **ROI Analysis**: Calculate true marketing effectiveness
2. **Patient Journey Mapping**: Identify optimization opportunities  
3. **Competitive Analysis**: Benchmark against industry standards
4. **Technology Updates**: Evaluate new analytics features
5. **Scale Planning**: Growth strategy based on successful channels

This implementation provides Forbes Integrative Medicine with enterprise-level analytics capabilities while maintaining HIPAA compliance and optimizing for medical practice growth.