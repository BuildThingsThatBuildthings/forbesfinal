# Component Usage Guide
## Forbes Integrative Medicine Design System

This guide provides specific implementation examples for common medical practice components using our luxury design system.

## Navigation Components

### Primary Navigation
```tsx
<nav className="bg-white/95 backdrop-blur-sm border-b border-neutral-200/50 sticky top-0 z-50">
  <div className="container">
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center">
        <img src="/logo.svg" alt="Forbes Integrative Medicine" className="h-8 w-auto" />
      </div>
      <div className="hidden md:flex items-center space-x-8">
        <a href="/services" className="nav-link">Services</a>
        <a href="/about" className="nav-link">About Dr. Forbes</a>
        <a href="/testimonials" className="nav-link">Testimonials</a>
        <a href="/contact" className="nav-link">Contact</a>
        <button className="btn-primary btn-sm">Book Appointment</button>
      </div>
    </div>
  </div>
</nav>
```

### Mobile Navigation
```tsx
<div className="md:hidden">
  <button className="p-2 text-ink hover:text-teal-600 transition-colors">
    <MenuIcon className="w-6 h-6" />
  </button>
  {/* Mobile menu overlay */}
  <div className="fixed inset-0 z-50 bg-white/95 backdrop-blur-sm">
    <div className="container py-8">
      <div className="space-y-6">
        <a href="/services" className="block text-2xl font-serif text-obsidian">Services</a>
        <a href="/about" className="block text-2xl font-serif text-obsidian">About</a>
        <a href="/testimonials" className="block text-2xl font-serif text-obsidian">Testimonials</a>
        <a href="/contact" className="block text-2xl font-serif text-obsidian">Contact</a>
        <button className="btn-primary w-full mt-8">Book Appointment</button>
      </div>
    </div>
  </div>
</div>
```

## Hero Sections

### Primary Hero
```tsx
<section className="section-lg bg-gradient-to-br from-porcelain via-white to-champagne-50/30 relative overflow-hidden">
  <div className="absolute inset-0 bg-[url('/medical-pattern.svg')] opacity-5"></div>
  <div className="container relative z-10">
    <div className="max-w-4xl mx-auto text-center">
      <div className="trust-badge mb-8 animate-fade-up">
        <ShieldCheckIcon className="w-5 h-5 text-teal-600" />
        Board Certified Physician
      </div>
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-obsidian mb-6 text-balance animate-fade-up">
        Integrative Medicine for Optimal <span className="text-teal-600">Health</span>
      </h1>
      <p className="lead max-w-3xl mx-auto mb-10 animate-fade-up" style="animation-delay: 0.1s">
        Experience personalized healthcare that combines the best of conventional and alternative medicine, 
        tailored to your unique needs in Phoenix, Arizona.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style="animation-delay: 0.2s">
        <button className="btn-primary btn-xl">
          <CalendarIcon className="w-5 h-5" />
          Schedule Consultation
        </button>
        <button className="btn-secondary btn-xl">
          Learn About Our Approach
        </button>
      </div>
    </div>
  </div>
</section>
```

### Service Hero
```tsx
<section className="section bg-teal-50/50 relative">
  <div className="container">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="animate-fade-right">
        <div className="credential-badge mb-6">
          Functional Medicine Certified
        </div>
        <h1 className="text-5xl md:text-6xl font-serif text-obsidian mb-6 text-balance">
          Functional Medicine Consultations
        </h1>
        <p className="text-lg text-ink leading-relaxed mb-8">
          Discover the root cause of your health concerns through comprehensive testing, 
          detailed analysis, and personalized treatment protocols.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="btn-primary btn-lg">Book Consultation</button>
          <button className="btn-ghost btn-lg">Download Info Packet</button>
        </div>
      </div>
      <div className="animate-fade-left">
        <img 
          src="/functional-medicine-consultation.jpg" 
          alt="Dr. Forbes consulting with patient"
          className="aspect-medical rounded-2xl shadow-luxury img-medical"
        />
      </div>
    </div>
  </div>
</section>
```

## Service Cards

### Primary Service Card
```tsx
<div className="card-medical group hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
  <div className="flex items-start justify-between mb-4">
    <div className="credential-badge">
      Evidence-Based
    </div>
    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
      <HeartIcon className="w-6 h-6 text-teal-600" />
    </div>
  </div>
  
  <h3 className="text-2xl md:text-3xl font-serif text-obsidian mb-4 group-hover:text-teal-700 transition-colors">
    Cardiovascular Health
  </h3>
  
  <p className="text-ink leading-relaxed mb-6">
    Comprehensive cardiac risk assessment and prevention strategies using advanced testing, 
    nutritional interventions, and lifestyle optimization.
  </p>
  
  <div className="space-y-3 mb-6">
    <div className="flex items-center text-sm text-ink">
      <CheckIcon className="w-4 h-4 text-teal-600 mr-2 flex-shrink-0" />
      Advanced lipid panel analysis
    </div>
    <div className="flex items-center text-sm text-ink">
      <CheckIcon className="w-4 h-4 text-teal-600 mr-2 flex-shrink-0" />
      Coronary artery calcium scoring
    </div>
    <div className="flex items-center text-sm text-ink">
      <CheckIcon className="w-4 h-4 text-teal-600 mr-2 flex-shrink-0" />
      Personalized prevention protocols
    </div>
  </div>
  
  <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
    <span className="text-lg font-semibold text-teal-600">$350</span>
    <button className="btn-outline btn-sm">Learn More</button>
  </div>
</div>
```

### Compact Service Card
```tsx
<div className="card-luxury">
  <div className="flex items-start space-x-4">
    <div className="w-10 h-10 bg-champagne-100 rounded-lg flex items-center justify-center flex-shrink-0">
      <VialIcon className="w-5 h-5 text-champagne-700" />
    </div>
    <div className="flex-1">
      <h4 className="text-xl font-serif text-obsidian mb-2">
        Comprehensive Lab Testing
      </h4>
      <p className="text-sm text-ink mb-4">
        Advanced biomarker analysis to identify nutritional deficiencies and metabolic imbalances.
      </p>
      <button className="btn-link">
        View Test Panels
        <ArrowRightIcon className="w-4 h-4" />
      </button>
    </div>
  </div>
</div>
```

## Testimonial Components

### Featured Testimonial
```tsx
<div className="testimonial-card">
  <div className="pl-8">
    <blockquote className="text-xl md:text-2xl font-light text-ink leading-relaxed mb-6">
      Dr. Forbes completely transformed my approach to health. After years of managing symptoms, 
      we finally found the root cause of my chronic fatigue. I have my energy back and feel 
      better than I have in decades.
    </blockquote>
    
    <div className="flex items-center">
      <img 
        src="/testimonial-avatar-sarah.jpg" 
        alt="Sarah M."
        className="w-12 h-12 rounded-full object-cover mr-4"
      />
      <div>
        <div className="font-medium text-obsidian">Sarah M.</div>
        <div className="text-sm text-ink">Phoenix, AZ • Chronic Fatigue Recovery</div>
      </div>
    </div>
    
    <div className="flex mt-4">
      {[1,2,3,4,5].map((star) => (
        <StarIcon key={star} className="w-5 h-5 text-champagne-500 fill-current" />
      ))}
    </div>
  </div>
</div>
```

### Testimonial Grid
```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {testimonials.map((testimonial) => (
    <div key={testimonial.id} className="card-luxury">
      <div className="mb-4">
        {[1,2,3,4,5].map((star) => (
          <StarIcon key={star} className="w-4 h-4 text-champagne-500 fill-current inline mr-1" />
        ))}
      </div>
      
      <blockquote className="text-ink leading-relaxed mb-4">
        "{testimonial.content}"
      </blockquote>
      
      <div className="flex items-center pt-4 border-t border-champagne-200">
        <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mr-3">
          <UserIcon className="w-5 h-5 text-teal-600" />
        </div>
        <div>
          <div className="font-medium text-obsidian text-sm">{testimonial.name}</div>
          <div className="text-xs text-ink">{testimonial.condition}</div>
        </div>
      </div>
    </div>
  ))}
</div>
```

## Appointment Booking

### Appointment CTA Section
```tsx
<section className="section bg-gradient-medical relative overflow-hidden">
  <div className="absolute inset-0 bg-black/10"></div>
  <div className="container relative z-10">
    <div className="max-w-3xl mx-auto text-center text-white">
      <h2 className="text-4xl md:text-5xl font-serif mb-6 text-balance">
        Ready to Transform Your Health?
      </h2>
      <p className="text-xl leading-relaxed mb-8 text-white/90">
        Schedule your comprehensive consultation and take the first step toward optimal wellness.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="btn-primary btn-xl bg-white text-teal-600 hover:bg-porcelain">
          <CalendarIcon className="w-5 h-5" />
          Book Consultation - $350
        </button>
        <button className="btn-ghost btn-xl border-white text-white hover:bg-white/10">
          <PhoneIcon className="w-5 h-5" />
          Call (555) 123-4567
        </button>
      </div>
    </div>
  </div>
</section>
```

### Appointment Form
```tsx
<div className="card-luxury max-w-lg">
  <h3 className="text-2xl font-serif text-obsidian mb-6">Schedule Your Consultation</h3>
  
  <form className="space-y-6">
    <div className="grid grid-cols-2 gap-4">
      <div className="form-group">
        <label className="form-label">First Name</label>
        <input type="text" className="form-input" placeholder="John" required />
      </div>
      <div className="form-group">
        <label className="form-label">Last Name</label>
        <input type="text" className="form-input" placeholder="Doe" required />
      </div>
    </div>
    
    <div className="form-group">
      <label className="form-label">Email Address</label>
      <input type="email" className="form-input" placeholder="john@example.com" required />
    </div>
    
    <div className="form-group">
      <label className="form-label">Phone Number</label>
      <input type="tel" className="form-input" placeholder="(555) 123-4567" required />
    </div>
    
    <div className="form-group">
      <label className="form-label">Preferred Consultation Type</label>
      <select className="form-select">
        <option>Initial Comprehensive Consultation</option>
        <option>Functional Medicine Follow-up</option>
        <option>Nutrition Consultation</option>
        <option>Hormone Optimization</option>
      </select>
    </div>
    
    <div className="form-group">
      <label className="form-label">Brief Health Concern</label>
      <textarea className="form-textarea" placeholder="Please describe your primary health concerns..."></textarea>
    </div>
    
    <div className="border-t border-neutral-200 pt-6">
      <div className="flex items-center justify-between mb-4">
        <span className="font-medium text-obsidian">Consultation Fee</span>
        <span className="text-2xl font-serif text-teal-600">$350</span>
      </div>
      
      <div className="text-sm text-ink mb-6">
        <p className="mb-2">Initial consultation includes:</p>
        <ul className="space-y-1 text-xs">
          <li className="flex items-center">
            <CheckIcon className="w-3 h-3 text-teal-600 mr-2" />
            90-minute comprehensive evaluation
          </li>
          <li className="flex items-center">
            <CheckIcon className="w-3 h-3 text-teal-600 mr-2" />
            Personalized treatment plan
          </li>
          <li className="flex items-center">
            <CheckIcon className="w-3 h-3 text-teal-600 mr-2" />
            Laboratory test recommendations
          </li>
        </ul>
      </div>
    </div>
    
    <button type="submit" className="btn-primary w-full btn-lg">
      Schedule Consultation
    </button>
    
    <p className="medical-disclaimer text-center">
      *Consultation fee is applied toward treatment costs for continuing patients.
    </p>
  </form>
</div>
```

## About/Bio Section

### Doctor Bio Card
```tsx
<div className="grid lg:grid-cols-2 gap-12 items-start">
  <div className="animate-fade-right">
    <div className="relative">
      <img 
        src="/dr-forbes-portrait.jpg" 
        alt="Dr. Forbes" 
        className="aspect-portrait rounded-2xl shadow-luxury img-luxury"
      />
      <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-md">
        <img src="/medical-degree-icon.svg" alt="Medical Degree" className="w-8 h-8" />
      </div>
    </div>
  </div>
  
  <div className="animate-fade-left">
    <div className="space-x-2 mb-6">
      <span className="credential-badge">MD</span>
      <span className="credential-badge">Board Certified</span>
      <span className="credential-badge">Functional Medicine</span>
    </div>
    
    <h1 className="text-4xl md:text-5xl font-serif text-obsidian mb-6">
      Dr. Jennifer Forbes, MD
    </h1>
    
    <div className="space-y-4 text-ink leading-relaxed">
      <p>
        Dr. Forbes brings over 15 years of medical expertise to integrative healthcare, 
        combining traditional medical training with advanced functional medicine approaches.
      </p>
      
      <p>
        Board-certified in Internal Medicine and certified by the Institute for 
        Functional Medicine, she specializes in identifying root causes of chronic 
        illness and creating personalized treatment protocols.
      </p>
      
      <p>
        Her practice philosophy centers on treating the whole person, not just 
        symptoms, using evidence-based integrative approaches to optimize health 
        and prevent disease.
      </p>
    </div>
    
    <div className="mt-8 space-y-4">
      <div className="flex items-center text-sm">
        <GraduationCapIcon className="w-5 h-5 text-teal-600 mr-3" />
        <span><strong>Medical School:</strong> Stanford University School of Medicine</span>
      </div>
      <div className="flex items-center text-sm">
        <HospitalIcon className="w-5 h-5 text-teal-600 mr-3" />
        <span><strong>Residency:</strong> Mayo Clinic, Internal Medicine</span>
      </div>
      <div className="flex items-center text-sm">
        <CertificateIcon className="w-5 h-5 text-teal-600 mr-3" />
        <span><strong>Board Certifications:</strong> Internal Medicine, Functional Medicine</span>
      </div>
    </div>
    
    <div className="flex gap-4 mt-8">
      <button className="btn-primary">Schedule Consultation</button>
      <button className="btn-ghost">View Credentials</button>
    </div>
  </div>
</div>
```

## Contact Information

### Contact Cards
```tsx
<div className="grid md:grid-cols-3 gap-8">
  <div className="card-luxury text-center">
    <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
      <MapPinIcon className="w-8 h-8 text-teal-600" />
    </div>
    <h3 className="text-xl font-serif text-obsidian mb-2">Visit Our Clinic</h3>
    <p className="text-ink text-sm leading-relaxed">
      123 Medical Plaza Drive<br />
      Phoenix, AZ 85001<br />
      Suite 456
    </p>
    <button className="btn-link mt-4">
      Get Directions
      <ExternalLinkIcon className="w-4 h-4" />
    </button>
  </div>
  
  <div className="card-luxury text-center">
    <div className="w-16 h-16 bg-champagne-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
      <PhoneIcon className="w-8 h-8 text-champagne-700" />
    </div>
    <h3 className="text-xl font-serif text-obsidian mb-2">Call Us</h3>
    <p className="text-ink text-sm leading-relaxed">
      Phone: (555) 123-4567<br />
      Fax: (555) 123-4568<br />
      Emergency: (555) 123-4569
    </p>
    <button className="btn-link mt-4">
      Call Now
      <PhoneIcon className="w-4 h-4" />
    </button>
  </div>
  
  <div className="card-luxury text-center">
    <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
      <ClockIcon className="w-8 h-8 text-teal-600" />
    </div>
    <h3 className="text-xl font-serif text-obsidian mb-2">Office Hours</h3>
    <div className="text-ink text-sm leading-relaxed space-y-1">
      <div className="flex justify-between">
        <span>Monday - Friday</span>
        <span>8AM - 6PM</span>
      </div>
      <div className="flex justify-between">
        <span>Saturday</span>
        <span>9AM - 2PM</span>
      </div>
      <div className="flex justify-between">
        <span>Sunday</span>
        <span>Closed</span>
      </div>
    </div>
  </div>
</div>
```

## Loading States

### Page Loading
```tsx
<div className="min-h-screen bg-porcelain flex items-center justify-center">
  <div className="text-center">
    <div className="w-16 h-16 border-4 border-teal-200 border-t-teal-600 rounded-full animate-spin mx-auto mb-4"></div>
    <p className="text-ink">Loading your health consultation...</p>
  </div>
</div>
```

### Button Loading
```tsx
<button className="btn-primary" disabled>
  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
  Scheduling...
</button>
```

## Error States

### Form Validation Error
```tsx
<div className="form-group">
  <label className="form-label">Email Address</label>
  <input 
    type="email" 
    className="form-input border-error-500 focus:ring-error-500" 
    placeholder="john@example.com"
    aria-invalid="true"
    aria-describedby="email-error"
  />
  <p id="email-error" className="form-error mt-1">
    Please enter a valid email address.
  </p>
</div>
```

### Page Error
```tsx
<div className="min-h-screen bg-porcelain flex items-center justify-center">
  <div className="text-center max-w-md mx-auto px-4">
    <div className="w-24 h-24 bg-error-100 rounded-full flex items-center justify-center mx-auto mb-6">
      <ExclamationTriangleIcon className="w-12 h-12 text-error-600" />
    </div>
    <h1 className="text-2xl font-serif text-obsidian mb-4">
      Something Went Wrong
    </h1>
    <p className="text-ink mb-8">
      We apologize for the inconvenience. Please try refreshing the page or contact our office.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button className="btn-primary" onClick={() => window.location.reload()}>
        Refresh Page
      </button>
      <button className="btn-ghost">
        <PhoneIcon className="w-4 h-4" />
        Contact Support
      </button>
    </div>
  </div>
</div>
```

## Medical Disclaimers

### Standard Disclaimer
```tsx
<div className="bg-neutral-50 border border-neutral-200 rounded-lg p-6 mt-12">
  <div className="flex items-start">
    <InfoIcon className="w-6 h-6 text-neutral-600 mr-3 mt-1 flex-shrink-0" />
    <div className="medical-disclaimer">
      <h4 className="font-medium text-obsidian mb-2 not-italic">Medical Disclaimer</h4>
      <p className="mb-2">
        The information provided on this website is for educational purposes only and should not be 
        considered medical advice. Always consult with a qualified healthcare provider before making 
        any changes to your health regimen.
      </p>
      <p>
        Individual results may vary. Services and treatments have not been evaluated by the FDA 
        and are not intended to diagnose, treat, cure, or prevent any disease.
      </p>
    </div>
  </div>
</div>
```

This component guide provides practical implementation examples that maintain the luxury medical aesthetic while ensuring accessibility, usability, and clinical credibility appropriate for Forbes Integrative Medicine.