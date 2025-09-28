# Forbes Integrative Medicine - Analytics QA Checklist & Test Plan

## Pre-Launch QA Checklist

### ✅ Technical Implementation

#### Core Setup
- [ ] GTM container loads on all pages without errors
- [ ] GA4 measurement ID correctly configured in GTM
- [ ] Consent mode initialized before any tracking scripts
- [ ] Cross-domain linker configured for Acubliss domain
- [ ] Environment variables properly set (GA4, GTM, CallRail IDs)
- [ ] No JavaScript errors in browser console
- [ ] Analytics library properly imported in layout.tsx

#### Tag Configuration
- [ ] GA4 Configuration tag fires on All Pages trigger
- [ ] Custom parameters populate with correct values:
  - clinic_location: "Phoenix, AZ"
  - provider_type: "medical_acupuncture"  
  - practice_type: "integrative_medicine"
- [ ] Enhanced measurements enabled (scrolls, outbound clicks, file downloads)
- [ ] Debug mode working in development environment

### ✅ Event Tracking Verification

#### Hero CTA Button
- [ ] hero_cta_click event fires when CTA buttons clicked
- [ ] Parameters captured correctly:
  - page: Current page path
  - position: Button location (hero, header, footer, sidebar)
  - variant: Button text/style variant
  - click_text: Actual button text
- [ ] Event visible in GA4 DebugView within 30 seconds
- [ ] Multiple CTA buttons on same page tracked separately

#### Booking Flow Events
- [ ] book_flow_start fires on Acubliss link clicks
- [ ] URL parameters preserved and tracked:
  - utm_source, utm_medium, utm_campaign
  - gclid, msclkid for ad attribution
  - page_referrer for source tracking
- [ ] book_flow_complete fires on Acubliss confirmation page
- [ ] Appointment data captured:
  - appointment_type
  - revenue amount
  - appointment_date
  - provider: "dr_forbes"

#### Contact Interactions
- [ ] phone_click fires on tel: link clicks
- [ ] Device type detected correctly (mobile/desktop/tablet)
- [ ] Phone number captured (without tel: prefix)
- [ ] email_click fires on mailto: link clicks
- [ ] Email address captured correctly

#### FAQ Interactions  
- [ ] faq_expand fires on accordion/dropdown clicks
- [ ] Question ID and text captured
- [ ] Section categorization working (services/pricing/general)
- [ ] Multiple FAQ expansions tracked separately

#### CallRail Integration
- [ ] CallRail script loads after account configuration
- [ ] call_complete events tracked with quality scoring
- [ ] Call duration and qualification logic working
- [ ] Qualified calls trigger conversion events
- [ ] Phone number replacement functioning

### ✅ Cross-Domain Tracking

#### Link Decoration
- [ ] Acubliss URLs automatically decorated with _ga parameter
- [ ] UTM parameters preserved across domain transition
- [ ] Google Click ID (gclid) maintained
- [ ] Microsoft Click ID (msclkid) maintained
- [ ] Referrer information passed correctly

#### Attribution Preservation
- [ ] Same Client ID maintained across domains
- [ ] User sessions continue across domain boundary
- [ ] Conversion attribution works end-to-end
- [ ] Source/medium preserved for bookings completed on Acubliss

### ✅ Consent Management

#### Consent Banner Display
- [ ] Banner shows for EU/EEA visitors
- [ ] Banner shows for privacy-focused US states (CA, CT, CO, etc.)
- [ ] Banner hidden for US visitors with standard regulations
- [ ] Region detection working via timezone analysis
- [ ] Stored consent preferences respected (1-year duration)

#### Consent Functionality
- [ ] "Accept All" grants analytics and advertising consent
- [ ] "Essential Only" grants analytics consent, denies advertising
- [ ] "Decline All" denies all tracking (EU only)
- [ ] Consent choices saved to localStorage
- [ ] Google Consent Mode updated correctly
- [ ] Consent decisions tracked as events

#### Privacy Compliance
- [ ] No tracking before explicit consent in regulated regions
- [ ] Consent banner accessible and readable
- [ ] Privacy Policy and Cookie Policy links functional
- [ ] Preferences can be changed via settings modal

### ✅ Performance Monitoring

#### Core Web Vitals
- [ ] Largest Contentful Paint (LCP) tracked
- [ ] First Input Delay (FID) tracked  
- [ ] Cumulative Layout Shift (CLS) tracked
- [ ] Page load time metrics recorded
- [ ] DOM interactive time captured

#### Error Handling
- [ ] Analytics errors caught by error boundary
- [ ] Failed tracking attempts logged (debug mode)
- [ ] Site functionality works when analytics blocked
- [ ] Graceful degradation for blocked scripts

---

## Test Plan & Scenarios

### 🧪 Test Scenario 1: Complete Booking Journey

#### Test Steps:
1. **Land on homepage** from Google Ads campaign
   ```
   URL: https://forbesintegrative.com?utm_source=google&utm_medium=cpc&utm_campaign=medical_acupuncture&gclid=ABC123
   ```
2. **Verify tracking:**
   - Page view event fires
   - UTM parameters captured
   - Device type detected

3. **Click hero CTA button**
   - hero_cta_click event fires
   - Parameters: page="/", position="hero", variant="primary"

4. **Redirect to Acubliss**
   - book_flow_start event fires
   - Decorated URL contains _ga parameter and UTM data
   - URL format: `https://forbesintegrativemedicine.acubliss.app/book?utm_source=google&utm_medium=cpc&utm_campaign=medical_acupuncture&gclid=ABC123&_ga=2.XXXXXXX`

5. **Complete booking on Acubliss**
   - book_flow_complete event fires
   - Revenue tracked: $250 (consultation)
   - appointment_type: "consultation"
   - Same Client ID maintained

#### Expected Results:
- All 4 events tracked in sequence
- Attribution data preserved
- Revenue attributed to original Google Ads click
- Conversion funnel complete in GA4 reports

---

### 🧪 Test Scenario 2: Multi-Device Contact Journey

#### Test Steps:
1. **Mobile visitor** browses services page
2. **Expand FAQ items** (2-3 different questions)
   - faq_expand events fire with question_id and section
3. **Click phone number**
   - phone_click event fires
   - device: "mobile" detected
   - Phone app opens

4. **Continue on desktop** later
5. **Click email link**
   - email_click event fires  
   - device: "desktop" detected
   - Email client opens

#### Expected Results:
- Device detection accurate for each interaction
- FAQ engagement tracked with specific question data
- Contact preferences identified (phone vs email)

---

### 🧪 Test Scenario 3: CallRail Phone Journey

#### Test Steps:
1. **Visitor** finds site via organic search
2. **CallRail** displays tracking number
3. **Call tracking number** (test call > 2 minutes)
4. **CallRail** logs call completion

#### Expected Results:
- call_complete event fires in GTM
- Call quality score ≥ 3 for 2+ minute call
- qualified_call conversion event triggered
- $250 estimated value assigned
- Call attribution to organic source

---

### 🧪 Test Scenario 4: EU Visitor Consent Flow

#### Test Steps:
1. **EU visitor** (VPN to Germany)
2. **Consent banner** displays
3. **Click "Essential Only"**
   - Consent stored as analytics: true, advertising: false
   - GA4 consent updated
4. **Navigate and interact** with site
5. **Verify** only analytics events fire (no advertising)

#### Expected Results:
- Consent banner shows for EU visitor
- Analytics tracking active after consent
- Advertising tracking remains blocked
- consent_update event tracked

---

### 🧪 Test Scenario 5: Cross-Browser Compatibility

#### Browsers to Test:
- **Desktop:** Chrome, Safari, Firefox, Edge
- **Mobile:** iOS Safari, Android Chrome, Samsung Internet
- **Privacy modes:** Incognito/Private browsing

#### Test Matrix:
| Browser | Events Fire | Consent Works | Cross-Domain | CallRail | Performance |
|---------|-------------|---------------|-------------|----------|-------------|
| Chrome  | ✅ | ✅ | ✅ | ✅ | ✅ |
| Safari  | ✅ | ✅ | ✅ | ✅ | ⚠️ |
| Firefox | ✅ | ✅ | ✅ | ✅ | ✅ |
| Edge    | ✅ | ✅ | ✅ | ✅ | ✅ |
| iOS Safari | ✅ | ✅ | ⚠️ | ✅ | ⚠️ |
| Android Chrome | ✅ | ✅ | ✅ | ✅ | ✅ |

---

### 🧪 Test Scenario 6: Performance Under Load

#### Load Testing:
1. **Simulate** 100 concurrent users
2. **Measure** analytics script load times
3. **Verify** event firing remains reliable
4. **Check** for memory leaks in long sessions

#### Performance Benchmarks:
- Analytics library load: < 500ms
- Event firing delay: < 100ms  
- Memory usage: < 10MB after 30 minutes
- No console errors under load

---

## Debug Tools & Validation

### 🔧 Browser Extensions
- **GA4 Helper:** Event validation
- **Google Analytics Debugger:** Console logging
- **GTM/GA Debugger:** Tag firing verification
- **CallRail Debugger:** Phone tracking validation

### 🔧 Built-in Debug Functions

#### Analytics Debug Console
```javascript
// Enable debug mode (add to URL: ?debug=1)
function validateAnalyticsSetup() {
  const checks = {
    gtmLoaded: !!window.google_tag_manager,
    ga4Loaded: !!window.gtag,
    dataLayerExists: !!window.dataLayer,
    consentModeActive: window.dataLayer.some(item => 
      item[0] === 'consent' && item[1] === 'default'
    ),
    callrailLoaded: !!window.CallRail
  };
  
  console.table(checks);
  return Object.values(checks).every(check => check === true);
}

// Manual event testing
function testHeroCTA() {
  trackHeroCTAClick({
    page: '/test',
    position: 'hero',
    variant: 'test-variant'
  });
}
```

#### GTM Preview Mode
1. **Enable** GTM Preview mode
2. **Navigate** to site with preview parameter
3. **Verify** tags fire in real-time
4. **Check** variable values populate correctly
5. **Test** triggers activate as expected

### 🔧 GA4 DebugView
1. **Enable** debug_mode in GA4 config
2. **Navigate** to GA4 DebugView in interface
3. **Perform** test actions on site
4. **Verify** events appear within 30 seconds
5. **Check** parameter values match expected

### 🔧 Automated Testing Script
```javascript
// Comprehensive analytics test suite
async function runAnalyticsTests() {
  const tests = [
    testPageView,
    testHeroCTAClick,
    testPhoneClick,
    testEmailClick,
    testFAQExpand,
    testCrossDomainTracking,
    testConsentManagement
  ];
  
  const results = [];
  for (const test of tests) {
    try {
      const result = await test();
      results.push({ test: test.name, status: 'PASS', result });
    } catch (error) {
      results.push({ test: test.name, status: 'FAIL', error });
    }
  }
  
  console.table(results);
  return results.every(r => r.status === 'PASS');
}
```

---

## Launch Readiness Checklist

### ✅ Final Pre-Launch Steps

#### Configuration
- [ ] Production GA4 Measurement ID configured
- [ ] Production GTM Container ID configured  
- [ ] CallRail Account ID configured
- [ ] Environment variables set in production
- [ ] Cross-domain tracking verified on live URLs

#### Testing
- [ ] All test scenarios completed successfully
- [ ] Cross-browser compatibility verified
- [ ] Mobile responsiveness confirmed
- [ ] Performance benchmarks met
- [ ] No console errors in production build

#### Documentation  
- [ ] Analytics setup documented
- [ ] Event taxonomy shared with team
- [ ] Looker Studio dashboard created
- [ ] Reporting schedule established
- [ ] Team training completed

#### Monitoring
- [ ] GA4 alerts configured for data issues
- [ ] GTM error notifications enabled
- [ ] CallRail call quality monitoring active
- [ ] Weekly analytics review scheduled
- [ ] Monthly optimization review planned

---

## Post-Launch Monitoring

### 📊 Day 1-7: Initial Monitoring
- **Daily** data quality checks
- **Monitor** for tracking gaps or errors
- **Verify** cross-domain attribution working
- **Check** consent rates and regional compliance
- **Validate** CallRail integration accuracy

### 📊 Week 2-4: Optimization Phase  
- **Analyze** user behavior patterns
- **Identify** conversion bottlenecks
- **Test** FAQ content based on expansion data
- **Optimize** CTA placement based on click data
- **Refine** call quality scoring algorithm

### 📊 Month 2+: Strategic Insights
- **Generate** monthly performance reports
- **Identify** high-value patient acquisition channels
- **Calculate** true ROI by traffic source
- **Optimize** marketing spend based on CAC data
- **Predict** appointment booking trends

This comprehensive QA process ensures the Forbes Integrative Medicine analytics implementation is accurate, compliant, and ready to drive data-informed practice growth.