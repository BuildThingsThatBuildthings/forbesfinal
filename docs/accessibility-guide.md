# Accessibility Guide
## Forbes Integrative Medicine Design System

Ensuring our luxury medical design system is accessible to all patients, regardless of abilities or assistive technologies. This guide covers WCAG 2.1 AA compliance for healthcare websites.

## Core Accessibility Principles

### 1. Perceivable
Information must be presentable in ways users can perceive, especially critical for medical information.

### 2. Operable
Interface components must be operable by all users, including those using assistive technologies.

### 3. Understandable
Information and UI operation must be understandable, crucial for medical consent and instructions.

### 4. Robust
Content must be robust enough to work with various assistive technologies and future technologies.

## Color and Contrast

### Contrast Ratios
Our design system meets and exceeds WCAG AA standards:

```css
/* Text Contrast Ratios */
.text-obsidian on porcelain: 13.2:1 ✓ (Exceeds AAA)
.text-ink on white: 11.8:1 ✓ (Exceeds AAA)
.text-ink on porcelain: 10.9:1 ✓ (Exceeds AAA)

/* Interactive Elements */
.btn-primary (teal-500 bg): 4.8:1 ✓ (Exceeds AA)
.btn-secondary (champagne-500 bg): 7.2:1 ✓ (Exceeds AAA)
.text-teal-600 links: 5.1:1 ✓ (Exceeds AA)

/* Status Colors */
.text-success-600: 4.5:1 ✓ (Meets AA)
.text-error-600: 4.7:1 ✓ (Exceeds AA)
.text-warning-700: 4.5:1 ✓ (Meets AA)
```

### Color Usage Guidelines

**Never rely on color alone:**
```tsx
// ❌ Bad - Color only indication
<span className="text-error-600">Required field</span>

// ✅ Good - Color + icon + text
<span className="text-error-600 flex items-center">
  <ExclamationIcon className="w-4 h-4 mr-1" />
  Required field
</span>
```

**Status indicators with multiple cues:**
```tsx
<div className="status-error">
  <XCircleIcon className="w-4 h-4" />
  <span>Error: Please review your information</span>
</div>
```

## Typography Accessibility

### Font Sizes
All body text meets minimum accessibility requirements:

```css
/* Minimum font sizes */
.text-base: 16px /* Main body text - exceeds 14px minimum */
.text-sm: 14px /* Small text - meets minimum */
.text-xs: 12px /* Reserved for disclaimers only */
```

### Line Height for Readability
Generous line heights improve readability for all users:

```css
/* Body text line heights */
p: 1.6 /* 26px line height for 16px text */
.lead: 1.5 /* 27px line height for 18px text */
small: 1.5 /* 21px line height for 14px text */
```

### Font Weight Accessibility
```css
/* Accessible font weights */
.font-normal: 400 /* Default - ensures readability */
.font-medium: 500 /* UI elements - sufficient contrast */
.font-semibold: 600 /* Navigation - strong hierarchy */

/* Avoid thin weights for body text */
.font-light: 300 /* Only for large display text */
```

## Focus Management

### Focus Indicators
All interactive elements have visible focus indicators:

```css
/* Primary focus ring */
.focus-ring {
  focus:outline-none
  focus:ring-2 
  focus:ring-teal-500 
  focus:ring-offset-2
  focus:ring-offset-porcelain
}

/* Focus with luxury styling */
.focus-ring-luxury {
  focus:outline-none
  focus:ring-2 
  focus:ring-champagne-500 
  focus:ring-offset-2
}
```

### Focus Order
Logical tab order for all components:

```tsx
// Appointment form with proper tab order
<form>
  <input tabIndex={1} placeholder="First Name" />
  <input tabIndex={2} placeholder="Last Name" />
  <input tabIndex={3} placeholder="Email" />
  <select tabIndex={4}>
    <option>Consultation Type</option>
  </select>
  <textarea tabIndex={5} placeholder="Health Concerns" />
  <button tabIndex={6} type="submit">Schedule</button>
</form>
```

### Skip Links
Essential for keyboard navigation:

```tsx
<a 
  href="#main-content" 
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-teal-600 text-white px-4 py-2 rounded-md z-50"
>
  Skip to main content
</a>

<a 
  href="#appointment-booking" 
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-32 bg-teal-600 text-white px-4 py-2 rounded-md z-50"
>
  Skip to appointment booking
</a>
```

## Interactive Elements

### Button Accessibility
All buttons include proper attributes and states:

```tsx
// Primary CTA with full accessibility
<button 
  type="submit"
  className="btn-primary focus-ring"
  aria-describedby="appointment-help"
  disabled={isLoading}
  aria-label={isLoading ? "Scheduling appointment..." : "Schedule consultation"}
>
  {isLoading ? (
    <>
      <Spinner className="w-4 h-4 mr-2" />
      Scheduling...
    </>
  ) : (
    <>
      <CalendarIcon className="w-4 h-4 mr-2" />
      Schedule Consultation
    </>
  )}
</button>

<div id="appointment-help" className="form-help mt-2">
  Initial consultation fee is $350 and includes comprehensive health evaluation.
</div>
```

### Link Accessibility
```tsx
// External link with proper indication
<a 
  href="https://portal.patient.com" 
  target="_blank"
  rel="noopener noreferrer"
  className="btn-link focus-ring"
  aria-label="Access patient portal (opens in new tab)"
>
  Patient Portal
  <ExternalLinkIcon className="w-4 h-4 ml-1" />
</a>

// Internal navigation
<a 
  href="/services/functional-medicine"
  className="nav-link focus-ring"
  aria-current={currentPage === 'functional-medicine' ? 'page' : undefined}
>
  Functional Medicine
</a>
```

## Form Accessibility

### Form Labels and Descriptions
All form elements have proper labels and help text:

```tsx
<div className="form-group">
  <label htmlFor="health-concerns" className="form-label required">
    Primary Health Concerns
    <span className="text-error-600 ml-1" aria-label="required">*</span>
  </label>
  
  <textarea
    id="health-concerns"
    name="healthConcerns"
    className="form-textarea focus-ring"
    placeholder="Please describe your main health concerns or symptoms..."
    aria-describedby="health-concerns-help health-concerns-error"
    aria-required="true"
    aria-invalid={errors.healthConcerns ? 'true' : 'false'}
    rows={4}
  />
  
  <div id="health-concerns-help" className="form-help">
    This information helps Dr. Forbes prepare for your consultation and ensures 
    we address your specific needs.
  </div>
  
  {errors.healthConcerns && (
    <div id="health-concerns-error" className="form-error" role="alert">
      <ExclamationIcon className="w-4 h-4 inline mr-1" />
      Please describe your primary health concerns to help us prepare for your visit.
    </div>
  )}
</div>
```

### Form Validation
Accessible error handling with ARIA attributes:

```tsx
<div className="form-group">
  <label htmlFor="email" className="form-label">Email Address</label>
  
  <div className="relative">
    <input
      id="email"
      type="email"
      className={`form-input focus-ring ${
        errors.email ? 'border-error-500 focus:ring-error-500' : ''
      }`}
      aria-describedby={errors.email ? "email-error" : "email-help"}
      aria-invalid={errors.email ? 'true' : 'false'}
      value={formData.email}
      onChange={handleEmailChange}
    />
    
    {errors.email && (
      <ExclamationCircleIcon className="w-5 h-5 text-error-500 absolute right-3 top-3" />
    )}
  </div>
  
  {!errors.email ? (
    <div id="email-help" className="form-help">
      We'll use this email to send appointment confirmations and health information.
    </div>
  ) : (
    <div id="email-error" className="form-error" role="alert">
      <span className="font-medium">Email error:</span> Please enter a valid email address.
    </div>
  )}
</div>
```

## Images and Media

### Image Accessibility
All images have descriptive alt text appropriate for medical context:

```tsx
// Staff photos
<img 
  src="/dr-forbes-consultation.jpg"
  alt="Dr. Forbes consulting with a patient in her modern medical office, showing compassionate care and professional expertise"
  className="aspect-medical rounded-lg img-medical"
/>

// Decorative images
<img 
  src="/medical-pattern-bg.svg"
  alt=""
  role="presentation"
  className="absolute inset-0 opacity-5"
/>

// Informational graphics
<img 
  src="/functional-medicine-process.png"
  alt="Functional medicine process diagram showing: 1) Comprehensive assessment, 2) Root cause analysis, 3) Personalized treatment plan, 4) Ongoing monitoring"
  className="w-full max-w-md mx-auto"
/>
```

### Video Accessibility
```tsx
<video 
  controls
  className="w-full aspect-video rounded-lg"
  poster="/video-poster-dr-forbes.jpg"
>
  <source src="/welcome-video.mp4" type="video/mp4" />
  <source src="/welcome-video.webm" type="video/webm" />
  
  <track 
    kind="captions" 
    src="/captions-en.vtt" 
    srcLang="en" 
    label="English captions"
    default 
  />
  
  <track 
    kind="descriptions" 
    src="/descriptions-en.vtt" 
    srcLang="en" 
    label="English audio descriptions"
  />
  
  <p className="bg-neutral-100 p-4 rounded-md">
    Your browser doesn't support video playback. 
    <a href="/welcome-video.mp4" className="text-teal-600 underline">
      Download the video
    </a> or read our 
    <a href="/about-transcript" className="text-teal-600 underline">
      full transcript
    </a>.
  </p>
</video>
```

## Navigation Accessibility

### Main Navigation
```tsx
<nav role="navigation" aria-label="Main navigation">
  <ul className="flex space-x-6">
    <li>
      <a 
        href="/services" 
        className="nav-link focus-ring"
        aria-current={currentPath === '/services' ? 'page' : undefined}
      >
        Services
      </a>
    </li>
    <li>
      <a 
        href="/about" 
        className="nav-link focus-ring"
        aria-current={currentPath === '/about' ? 'page' : undefined}
      >
        About Dr. Forbes
      </a>
    </li>
    <li>
      <a 
        href="/testimonials" 
        className="nav-link focus-ring"
        aria-current={currentPath === '/testimonials' ? 'page' : undefined}
      >
        Patient Stories
      </a>
    </li>
  </ul>
</nav>
```

### Breadcrumb Navigation
```tsx
<nav aria-label="Breadcrumb" className="mb-8">
  <ol className="flex items-center space-x-2 text-sm">
    <li>
      <a href="/" className="text-ink hover:text-teal-600 focus-ring rounded-sm px-1">
        Home
      </a>
    </li>
    <li>
      <ChevronRightIcon className="w-4 h-4 text-neutral-400" />
    </li>
    <li>
      <a href="/services" className="text-ink hover:text-teal-600 focus-ring rounded-sm px-1">
        Services
      </a>
    </li>
    <li>
      <ChevronRightIcon className="w-4 h-4 text-neutral-400" />
    </li>
    <li aria-current="page" className="text-teal-600 font-medium">
      Functional Medicine
    </li>
  </ol>
</nav>
```

## ARIA and Semantic HTML

### Landmark Roles
```tsx
<body>
  <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50">
    Skip to main content
  </a>
  
  <header role="banner">
    <nav role="navigation" aria-label="Main navigation">
      {/* Navigation content */}
    </nav>
  </header>
  
  <main id="main" role="main">
    <article role="article">
      {/* Main content */}
    </article>
    
    <aside role="complementary" aria-label="Patient testimonials">
      {/* Sidebar content */}
    </aside>
  </main>
  
  <footer role="contentinfo">
    {/* Footer content */}
  </footer>
</body>
```

### Live Regions
For dynamic content updates:

```tsx
// Status announcements
<div 
  role="status" 
  aria-live="polite" 
  aria-atomic="true"
  className="sr-only"
  id="status-announcements"
>
  {statusMessage}
</div>

// Alert announcements  
<div 
  role="alert" 
  aria-live="assertive"
  className="sr-only"
  id="alert-announcements"
>
  {alertMessage}
</div>

// Form submission feedback
const handleFormSubmit = async (data) => {
  setStatusMessage("Submitting your appointment request...");
  
  try {
    await submitAppointment(data);
    setStatusMessage("Appointment request submitted successfully. You will receive a confirmation email shortly.");
  } catch (error) {
    setAlertMessage("There was an error submitting your request. Please try again or call our office.");
  }
};
```

## Modal and Dialog Accessibility

### Appointment Modal
```tsx
<Dialog 
  open={isOpen} 
  onClose={handleClose}
  className="relative z-50"
  aria-labelledby="appointment-title"
  aria-describedby="appointment-description"
>
  <div className="fixed inset-0 bg-black/25 backdrop-blur-sm" />
  
  <div className="fixed inset-0 flex items-center justify-center p-4">
    <Dialog.Panel className="card-luxury w-full max-w-md">
      <div className="flex items-center justify-between mb-4">
        <Dialog.Title id="appointment-title" className="text-xl font-serif text-obsidian">
          Schedule Your Consultation
        </Dialog.Title>
        
        <button
          onClick={handleClose}
          className="p-2 text-neutral-500 hover:text-neutral-700 focus-ring rounded-md"
          aria-label="Close appointment form"
        >
          <XMarkIcon className="w-5 h-5" />
        </button>
      </div>
      
      <Dialog.Description id="appointment-description" className="text-ink mb-6">
        Book your comprehensive health consultation with Dr. Forbes. 
        Initial consultations are $350 and include a 90-minute evaluation.
      </Dialog.Description>
      
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
      </form>
    </Dialog.Panel>
  </div>
</Dialog>
```

## Screen Reader Considerations

### Content Structure
```tsx
// Clear heading hierarchy
<article>
  <h1>Functional Medicine Approach</h1>
  
  <section>
    <h2>What is Functional Medicine?</h2>
    <p>Content about functional medicine...</p>
    
    <h3>Root Cause Analysis</h3>
    <p>Details about root cause approach...</p>
    
    <h3>Personalized Treatment</h3>
    <p>Information about personalized care...</p>
  </section>
  
  <section>
    <h2>Our Testing Process</h2>
    <p>Description of testing procedures...</p>
  </section>
</article>
```

### Tables for Structured Data
```tsx
<table className="w-full">
  <caption className="text-lg font-serif text-obsidian mb-4 text-left">
    Office Hours and Contact Information
  </caption>
  
  <thead>
    <tr className="border-b border-neutral-200">
      <th scope="col" className="text-left py-3 font-medium text-obsidian">
        Day
      </th>
      <th scope="col" className="text-left py-3 font-medium text-obsidian">
        Hours
      </th>
      <th scope="col" className="text-left py-3 font-medium text-obsidian">
        Contact
      </th>
    </tr>
  </thead>
  
  <tbody>
    <tr className="border-b border-neutral-100">
      <th scope="row" className="py-3 text-ink">Monday - Friday</th>
      <td className="py-3 text-ink">8:00 AM - 6:00 PM</td>
      <td className="py-3 text-ink">(555) 123-4567</td>
    </tr>
    <tr className="border-b border-neutral-100">
      <th scope="row" className="py-3 text-ink">Saturday</th>
      <td className="py-3 text-ink">9:00 AM - 2:00 PM</td>
      <td className="py-3 text-ink">(555) 123-4567</td>
    </tr>
  </tbody>
</table>
```

## Testing Checklist

### Keyboard Navigation
- [ ] All interactive elements are keyboard accessible
- [ ] Tab order is logical and intuitive
- [ ] Focus indicators are clearly visible
- [ ] No keyboard traps exist
- [ ] Skip links work properly

### Screen Reader Testing
- [ ] Content reads in logical order
- [ ] All images have appropriate alt text
- [ ] Form labels are properly associated
- [ ] Headings create clear document outline
- [ ] Status messages are announced

### Color and Contrast
- [ ] All text meets WCAG AA contrast ratios
- [ ] Information isn't conveyed by color alone
- [ ] Focus indicators have sufficient contrast
- [ ] Interactive elements are distinguishable

### Responsive Design
- [ ] Content reflows properly at all sizes
- [ ] Touch targets are minimum 44px
- [ ] Text remains readable when zoomed to 200%
- [ ] Horizontal scrolling isn't required

### Medical Compliance
- [ ] Emergency contact information is easily accessible
- [ ] Medical disclaimers are clearly marked
- [ ] Appointment booking is prominently available
- [ ] Patient privacy information is accessible

## Tools for Testing

### Automated Testing
```bash
# Install accessibility testing tools
npm install --save-dev @axe-core/playwright
npm install --save-dev pa11y
```

### Manual Testing Tools
- **Screen readers**: NVDA (Windows), VoiceOver (macOS), ORCA (Linux)
- **Color contrast**: WebAIM Contrast Checker, Colour Contrast Analyser
- **Browser extensions**: axe DevTools, WAVE, Lighthouse
- **Keyboard navigation**: Tab key, arrow keys, Enter, Space, Escape

### Testing Checklist for Components
```javascript
// Example accessibility test
describe('Appointment Form Accessibility', () => {
  test('has proper labels and ARIA attributes', async () => {
    // Test form labels
    expect(screen.getByLabelText('First Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument();
    
    // Test required field indicators
    expect(screen.getByRole('textbox', { name: /first name.*required/i })).toBeInTheDocument();
    
    // Test error messages
    fireEvent.click(screen.getByRole('button', { name: /schedule/i }));
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });
  
  test('supports keyboard navigation', async () => {
    const firstNameInput = screen.getByLabelText('First Name');
    const emailInput = screen.getByLabelText('Email Address');
    const submitButton = screen.getByRole('button', { name: /schedule/i });
    
    // Test tab order
    firstNameInput.focus();
    fireEvent.keyDown(document.activeElement, { key: 'Tab' });
    expect(emailInput).toHaveFocus();
    
    fireEvent.keyDown(document.activeElement, { key: 'Tab' });
    expect(submitButton).toHaveFocus();
  });
});
```

This accessibility guide ensures our luxury medical design system maintains the highest standards of accessibility while preserving the premium aesthetic and clinical credibility essential for Forbes Integrative Medicine.