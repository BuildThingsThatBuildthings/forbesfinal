# Forbes Integrative Medicine - Looker Studio Dashboard Template

## Dashboard Overview
Complete business intelligence dashboard for medical practice performance tracking, patient acquisition analysis, and ROI optimization.

**Data Sources:**
- GA4 Property (Primary)
- Google Ads (Optional)
- CallRail API (If available)
- Manual data entry for appointment values

---

## 📊 Page 1: Executive Summary Dashboard

### Key Performance Indicators (Scorecard Section)

#### Primary KPIs - Current Month
```sql
-- New Patient Acquisition
Metric: book_flow_complete (Current Month)
Comparison: Previous Month
Target: 50 new patients/month
Visualization: Scorecard with trend arrow

-- Cost Per Patient Acquisition
Metric: (Ad Spend + Marketing Costs) / New Patients  
Target: < $150 CPA
Visualization: Scorecard with budget progress bar

-- Website Conversion Rate
Metric: (book_flow_complete + qualified_call) / Sessions * 100
Target: > 5%
Visualization: Scorecard with industry benchmark

-- Total Revenue Generated
Metric: Sum of appointment_value + call_value
Target: $12,500/month
Visualization: Scorecard with YTD progress
```

#### Secondary KPIs - Performance Indicators
```sql
-- Phone vs Online Booking Ratio
Metric: qualified_call / (book_flow_complete + qualified_call) * 100
Visualization: Pie chart

-- Average Time to Conversion
Metric: Days between first visit and booking
Visualization: Number with historical average

-- Patient Lifetime Value
Metric: Average revenue per patient * visit frequency
Visualization: Trend line over 6 months

-- Return Patient Rate  
Metric: Returning visitors who book / Total bookings
Visualization: Percentage with target line
```

### Trend Analysis Charts

#### 1. New Patient Acquisition Trend (6 Months)
```
Chart Type: Line Chart
X-Axis: Month
Y-Axis: Number of new patients
Data: book_flow_complete events by month
Breakdown: Online bookings vs Phone calls
Colors: Blue (online), Green (phone)
```

#### 2. Website Traffic vs Conversions
```
Chart Type: Combo Chart  
X-Axis: Week
Y-Axis Left: Sessions (bars)
Y-Axis Right: Conversion Rate (line)
Data: GA4 sessions + conversion events
Goal Line: 5% conversion rate target
```

#### 3. Revenue Performance
```
Chart Type: Column Chart
X-Axis: Month
Y-Axis: Revenue ($)
Data: Appointment revenue + estimated call value
Stacking: By appointment type
Colors: Consultation (blue), Treatment (green), Follow-up (orange)
```

### Source Performance Overview
```
Table Configuration:
Dimensions: 
- Source/Medium
- Campaign (when available)

Metrics:
- Sessions
- CTA Clicks (hero_cta_click)  
- Bookings (book_flow_complete + qualified_call)
- Conversion Rate
- Est. Revenue
- Cost Per Acquisition
- Return on Ad Spend

Sorting: By conversion rate descending
Conditional Formatting: Green (>5%), Yellow (3-5%), Red (<3%)
```

---

## 📊 Page 2: Acquisition & Attribution Analysis

### Traffic Source Performance Deep Dive

#### Channel Performance Matrix
```sql
-- Organic Search Performance
Source: google / organic
Metrics: Sessions, hero_cta_click, conversions, avg_session_duration
Target: 60% of total traffic

-- Paid Search Performance  
Source: google / cpc
Metrics: Sessions, cost, conversions, CPA, ROAS
Target: CPA < $150, ROAS > 3:1

-- Direct Traffic Performance
Source: (direct) / (none)  
Metrics: Sessions, return_visitor_rate, conversion_rate
Target: 25% of traffic, >10% conversion

-- Referral Traffic Performance
Source: Various referral domains
Metrics: Sessions, top_referrers, conversion_quality
Target: Growing referral network
```

#### Attribution Analysis Dashboard
```
Visualization: Sankey Diagram
Flow: First Touch Source → Last Touch Source → Conversion
Data: Multi-channel attribution from GA4
Insight: How patients discover and convert across touchpoints
```

### Conversion Funnel Analysis

#### Primary Conversion Funnel
```
Funnel Visualization:
Step 1: Website Visits (Sessions)
Step 2: CTA Engagement (hero_cta_click)  
Step 3: Booking Process Started (book_flow_start)
Step 4: Booking Completed (book_flow_complete)

Drop-off Analysis:
- Step 1→2: Engagement Rate
- Step 2→3: Intent Rate  
- Step 3→4: Completion Rate
- Overall: End-to-end Conversion

Benchmark: Industry averages for medical practices
```

#### Secondary Conversion Paths
```
Path Analysis:
Direct Booking: hero_cta_click → book_flow_complete
Phone Route: hero_cta_click → phone_click → qualified_call
Email Route: email_click → (offline conversion)
FAQ Engagement: faq_expand → hero_cta_click → conversion

Visualization: Flow diagram with conversion rates
```

### Geographic Performance Analysis

#### Patient Location Insights
```
Map Visualization:
Data: Sessions and conversions by city/region
Color Coding: Conversion rate intensity
Bubble Size: Total sessions
Focus Areas: Phoenix metro, surrounding areas

Table Supplement:
- City/Region
- Sessions  
- Conversion Rate
- Distance from clinic
- Marketing penetration opportunity
```

---

## 📊 Page 3: User Behavior & Engagement Analytics  

### Content Engagement Analysis

#### Page Performance Dashboard
```sql
-- Homepage Performance
Page: /
Metrics: Sessions, avg_time_on_page, hero_cta_click_rate, bounce_rate
Target: <30% bounce rate, >90s avg time

-- Services Page Performance  
Page: /services
Metrics: Sessions, service_view events, time_on_page, conversion_rate
Target: >60% conversion to booking intent

-- About/Provider Page Performance
Page: /about or /dr-forbes
Metrics: Sessions, provider_bio_view events, trust_signals_viewed
Target: Builds credibility and trust

-- FAQ Page Performance
Page: /faq
Metrics: faq_expand events, questions_viewed, conversion_impact
Target: Reduces friction, increases conversions
```

#### FAQ Engagement Insights
```
Most Expanded FAQs:
Visualization: Horizontal bar chart
Data: faq_expand events grouped by question_id
Insights: Top patient concerns and interests

FAQ Conversion Impact:
Analysis: Conversion rate for users who expand FAQs vs those who don't
Segmentation: By FAQ section (services, pricing, general)
```

#### Device & Technology Analysis
```
Device Performance:
Breakdown: Mobile (60%), Desktop (35%), Tablet (5%)
Conversion Rates: By device type
Load Times: Performance by device
Optimization: Mobile-first insights

Browser Compatibility:
Performance: Chrome, Safari, Firefox, Edge
Issues: Tracking accuracy by browser
Consent Rates: By browser privacy settings
```

### User Journey Analysis

#### Session Flow Visualization  
```
Path Analysis:
Entry Points: Top landing pages
Navigation Patterns: Most common page sequences  
Exit Points: Where users leave the funnel
Conversion Paths: Successful booking journeys

Visualization: Sunburst chart showing user paths
Data: Enhanced e-commerce tracking from GA4
```

#### Engagement Scoring Model
```sql
-- User Engagement Score Calculation
Base Score: 1 (session start)
+1: hero_cta_click
+1: service_view (>30 seconds)
+2: faq_expand (multiple questions)
+1: provider_bio_view
+2: phone_click or email_click
+5: book_flow_complete

Segmentation:
- Low Engagement (1-2): Browser/researcher
- Medium Engagement (3-4): Interested prospect  
- High Engagement (5+): Ready to book
- Converted (booking/call): Patient
```

---

## 📊 Page 4: Contact & Communication Intelligence

### CallRail Integration Dashboard

#### Call Performance Metrics
```sql
-- Call Volume Analysis
Metric: Total calls received
Breakdown: By source, day of week, hour
Target: 80+ calls/month

-- Call Quality Distribution  
Metric: call_quality_score (1-5 scale)
Visualization: Histogram
Target: >60% calls scoring 3+

-- Call Conversion Analysis
Metric: qualified_call rate
Calculation: Calls >2min AND business hours
Target: >40% qualification rate

-- Call Attribution
Metric: Call source attribution
Breakdown: Organic, Paid, Direct, Referral
Integration: With GA4 traffic data
```

#### Phone vs Digital Preference Analysis
```
Contact Method Preference:
Phone Bookings: qualified_call events
Online Bookings: book_flow_complete events  
Email Inquiries: email_click events
Ratio Analysis: Phone preference vs online preference

Demographic Insights:
Age correlation (if available)
Device correlation (mobile users more likely to call)
Time of day patterns (business hours vs after hours)
```

### Communication Effectiveness

#### Response Time Analysis
```sql
-- Phone Response Metrics
Average Ring Time: CallRail data
Answer Rate: Answered calls / Total calls
Business Hours Coverage: Calls answered during business hours
After Hours Handling: Voicemail to callback conversion

-- Email Response Tracking
Email Click Rate: email_click events
Response Time Target: <24 hours (manual tracking)
Follow-up Effectiveness: Conversion after email contact
```

#### Top Inquiry Topics
```
FAQ Analysis:
Most Asked Questions: Top faq_expand events
Service Interest: Most viewed service pages
Pricing Inquiries: Insurance-related FAQ expansions
Location Questions: Maps/directions interactions

Content Optimization:
Question Gap Analysis: Calls asking questions not in FAQ
Content Updates: Based on common phone inquiries
Educational Opportunities: Blog topics based on interest
```

---

## 📊 Page 5: Revenue & ROI Dashboard

### Financial Performance Tracking

#### Revenue Analysis
```sql
-- Monthly Revenue Tracking
Online Bookings: book_flow_complete * avg_appointment_value
Phone Conversions: qualified_call * estimated_value
Total Revenue: Sum of all conversion values
Growth Rate: Month-over-month percentage change

-- Revenue by Source
Organic Revenue: Conversions attributed to organic traffic
Paid Revenue: Conversions attributed to paid campaigns  
Direct Revenue: Direct traffic conversions
Referral Revenue: Partner and referral source conversions
```

#### Marketing ROI Calculation
```sql
-- Cost Per Acquisition by Channel
Google Ads: Ad spend / conversions
SEO Investment: SEO cost / organic conversions  
Website Maintenance: Annual cost allocated monthly
Total Marketing Cost: All marketing expenses

-- Return on Investment
ROI Formula: (Revenue - Marketing Cost) / Marketing Cost * 100
Target ROI: >300% (every $1 spent returns $4)
Payback Period: Months to recover acquisition cost
Patient LTV: Revenue per patient over 12 months
```

### Predictive Analytics

#### Booking Forecast Model
```sql
-- Seasonal Trends
Historical Data: 12+ months of booking data
Seasonal Patterns: Monthly/quarterly variations
Growth Trends: Year-over-year growth rates
External Factors: Economic conditions, health trends

-- Predictive Metrics
Next Month Forecast: Based on current trends
Confidence Intervals: Statistical reliability
Capacity Planning: Appointment availability
Revenue Projections: Expected monthly revenue
```

#### Patient Acquisition Projections
```sql
-- Lead Generation Forecast
Website Traffic Trends: Growth rate projections
Conversion Rate Trends: Optimization improvements
Marketing Budget Impact: Increased spend scenarios
Market Saturation Analysis: Growth rate sustainability
```

---

## 🎯 Dashboard Configuration Details

### Data Source Setup

#### Primary GA4 Connection
```
Property: Forbes Integrative Medicine
Date Range: Last 28 days (default)
Custom Dimensions:
- appointment_type
- provider  
- device_category
- call_quality_score
- engagement_score

Custom Metrics:
- cost_per_acquisition
- patient_lifetime_value
- booking_conversion_rate
- call_qualification_rate
```

#### Calculated Fields
```sql
-- Conversion Rate
Conversion Rate = (book_flow_complete + qualified_call) / Sessions * 100

-- Cost Per Acquisition  
CPA = Marketing Spend / (book_flow_complete + qualified_call)

-- Return on Ad Spend
ROAS = Revenue / Marketing Spend

-- Patient Lifetime Value
PLV = Average Appointment Value * Average Visits Per Year * Average Years as Patient

-- Call Quality Score
CASE 
  WHEN Call Duration >= 180 THEN 5
  WHEN Call Duration >= 120 THEN 4  
  WHEN Call Duration >= 60 THEN 3
  WHEN Call Duration >= 30 THEN 2
  ELSE 1
END
```

### Dashboard Filters & Controls

#### Global Filters
```
Date Range Selector: 
- Last 7 days
- Last 30 days  
- Last 90 days
- Custom range

Channel Grouping:
- All Channels
- Organic Search
- Paid Search  
- Direct
- Social
- Referral

Device Category:
- All Devices
- Desktop
- Mobile
- Tablet

Location Filter:
- All Locations
- Phoenix Metro
- Arizona  
- Out of State
```

#### Audience Segments
```
New vs Returning:
- New Patients (first-time visitors who converted)
- Returning Patients (return visitors who convert)
- Prospects (visitors who haven't converted)

Engagement Level:
- High Engagement (multiple touchpoints)
- Medium Engagement (some interaction)
- Low Engagement (single page visits)

Conversion Path:
- Direct Bookers (homepage → booking)
- Researchers (multiple pages → booking)
- Phone Preference (clicked phone vs online booking)
```

---

## 📋 Dashboard Maintenance & Updates

### Weekly Review Process
1. **Data Quality Check** - Verify tracking accuracy
2. **Performance Review** - KPI achievement assessment  
3. **Trend Analysis** - Identify significant changes
4. **Action Items** - Document optimization opportunities
5. **Team Updates** - Share insights with clinic staff

### Monthly Optimization
1. **Goal Assessment** - Review targets vs actual performance
2. **ROI Analysis** - Calculate true marketing effectiveness
3. **Patient Feedback Integration** - Correlate satisfaction with acquisition source
4. **Dashboard Updates** - Add new metrics or visualizations as needed
5. **Strategic Planning** - Adjust marketing strategy based on data insights

### Quarterly Business Review
1. **Comprehensive Analysis** - Full performance evaluation
2. **Competitive Benchmarking** - Industry comparison
3. **Growth Planning** - Scale strategy based on successful channels
4. **Technology Updates** - Evaluate new analytics features
5. **Team Training** - Ensure staff can interpret and act on data

This Looker Studio dashboard template provides Forbes Integrative Medicine with comprehensive business intelligence to make data-driven decisions, optimize marketing spend, and grow the practice efficiently.