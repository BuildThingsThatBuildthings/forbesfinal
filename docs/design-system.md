# Forbes Integrative Medicine Design System

A luxury medical design system that balances clinical credibility with premium positioning. This system creates a trustworthy, calm, and sophisticated aesthetic appropriate for a high-end medical practice.

## Brand Foundation

### Core Values
- **Trust**: Building confidence through consistent, professional design
- **Expertise**: Communicating medical authority and competence
- **Luxury**: Premium positioning without compromising accessibility
- **Wellness**: Promoting health and healing through calming aesthetics
- **Innovation**: Modern approaches to integrative medicine

### Brand Personality
- Sophisticated yet approachable
- Authoritative but not intimidating
- Premium without being pretentious
- Calming and reassuring
- Innovative and forward-thinking

## Color System

### Primary Colors
```css
/* Porcelain White - Primary Background */
--porcelain: #F8F7F5
/* Warm, sophisticated base that feels premium yet approachable */

/* Obsidian - Primary Text */
--obsidian: #0A0B0D
/* Deep, authoritative black with subtle blue undertone for trust */

/* Ink - Secondary Text */
--ink: #1A1B1E
/* Softer alternative to obsidian for body text and descriptions */
```

### Accent Colors
```css
/* Deep Teal - Primary Brand Accent */
--teal-500: #2A9D9D
/* Medical blue-green associated with health, balance, and trust */

/* Champagne - Luxury Highlights (Use Sparingly) */
--champagne-500: #CDC3A5
/* Metallic warmth for premium touches and special elements */
```

### Color Usage Guidelines

**Primary Text Hierarchy:**
- Headlines: `obsidian` (#0A0B0D)
- Body text: `ink` (#1A1B1E) 
- Secondary text: `ink` at 70% opacity
- Muted text: `ink` at 50% opacity

**Interactive Elements:**
- Primary CTAs: `teal-500` background
- Secondary CTAs: `champagne-500` background
- Links: `teal-600` with hover to `teal-700`
- Focus states: `teal-500` ring

**Backgrounds:**
- Primary: `porcelain` (#F8F7F5)
- Cards/surfaces: Pure white (#FFFFFF)
- Subtle sections: `porcelain` with 50% opacity
- Elevated surfaces: Pure white with luxury shadows

### Semantic Colors
```css
/* Medical Context Colors */
--success: #10B981  /* Health indicators, positive outcomes */
--warning: #F59E0B  /* Caution, attention needed */
--error: #EF4444    /* Critical issues, validation errors */
```

## Typography

### Font Stack
```css
/* Display Serif - Playfair Display */
--font-serif: "Playfair Display", Georgia, serif;
/* For headlines, elegance, and authority */

/* Body Sans - Inter */
--font-sans: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
/* For body text, UI elements, and readability */
```

### Type Scale
Based on Perfect Fifth (1.5x) ratio for harmonious proportions:

```css
/* Display (Marketing only) */
.text-8xl: 96px / 1.0 line-height

/* Headlines */
.text-7xl: 72px / 1.05 line-height  /* H1 */
.text-6xl: 60px / 1.1 line-height   /* H2 */
.text-5xl: 48px / 1.2 line-height   /* H3 */
.text-4xl: 36px / 1.25 line-height  /* H4 */
.text-3xl: 30px / 1.3 line-height   /* H5 */
.text-2xl: 24px / 1.4 line-height   /* H6 */

/* Body Text */
.text-xl: 20px / 1.5 line-height    /* Large body, subheadings */
.text-lg: 18px / 1.6 line-height    /* Large body text */
.text-base: 16px / 1.6 line-height  /* Default body text */
.text-sm: 14px / 1.5 line-height    /* Small text, captions */
.text-xs: 12px / 1.5 line-height    /* Fine print, disclaimers */
```

### Typography Guidelines

**Headlines (H1-H6):**
- Use Playfair Display serif font
- Weight: 400 (normal) - let the font's elegance speak
- Color: `obsidian` for maximum authority
- Generous line-height for calm reading experience
- Use `.text-balance` for better line breaks

**Body Text:**
- Use Inter sans-serif font
- Weight: 400 (normal) for body, 500 (medium) for emphasis
- Color: `ink` for softer appearance than pure black
- Line-height: 1.6 for comfortable reading
- Generous paragraph spacing (1rem margin-bottom)

**UI Elements:**
- Use Inter sans-serif font
- Weight: 500 (medium) for buttons, 600 (semibold) for navigation
- Slightly tighter line-height for interface elements

## Spacing System

### 8px Grid System
All spacing follows an 8-pixel base unit for visual harmony:

```css
/* Base unit: 8px */
--spacing-1: 4px    /* 0.5 units */
--spacing-2: 8px    /* 1 unit - base */
--spacing-3: 12px   /* 1.5 units */
--spacing-4: 16px   /* 2 units */
--spacing-6: 24px   /* 3 units */
--spacing-8: 32px   /* 4 units */
--spacing-10: 40px  /* 5 units */
--spacing-12: 48px  /* 6 units */
--spacing-16: 64px  /* 8 units */
--spacing-20: 80px  /* 10 units */
--spacing-24: 96px  /* 12 units */
--spacing-32: 128px /* 16 units */
```

### Layout Spacing
- **Sections**: 128px (desktop) / 96px (tablet) / 64px (mobile)
- **Components**: 32-48px vertical spacing
- **Elements**: 16-24px between related items
- **Text**: 16px paragraph spacing, 24-32px heading spacing

## Elevation & Shadows

### Shadow System
Luxury elevation using subtle shadows with brand colors:

```css
/* Light shadows for subtle elevation */
.shadow-card: 0 4px 16px -2px rgba(10, 11, 13, 0.08)
.shadow-card-hover: 0 8px 24px -4px rgba(10, 11, 13, 0.12)

/* Medium shadows for components */
.shadow-md: 0 10px 15px -3px rgba(10, 11, 13, 0.1)
.shadow-lg: 0 20px 25px -5px rgba(10, 11, 13, 0.1)

/* Luxury shadow with teal accent */
.shadow-luxury: 0 32px 64px -12px rgba(42, 157, 157, 0.15)
```

### Usage Guidelines
- **Cards**: `shadow-card` with `shadow-card-hover` on hover
- **Modals/Popups**: `shadow-lg` or `shadow-xl`
- **Premium elements**: `shadow-luxury` for hero sections
- **Buttons**: `shadow-sm` with `shadow-md` on hover

## Button System

### Primary Actions
```css
.btn-primary {
  background: teal-500;
  color: white;
  padding: 16px 32px;
  font-weight: 500;
  border-radius: 6px;
  transition: all 200ms ease;
}
```
**Usage:** Main CTAs, appointment booking, primary actions

### Secondary Actions
```css
.btn-secondary {
  background: champagne-500;
  color: obsidian;
  padding: 16px 32px;
  font-weight: 500;
  border-radius: 6px;
}
```
**Usage:** Supporting actions, alternative options

### Ghost/Outline Actions
```css
.btn-ghost {
  border: 1px solid neutral-300;
  color: obsidian;
  background: transparent;
  padding: 16px 32px;
}
```
**Usage:** Tertiary actions, cancel buttons, subtle CTAs

### Button States
- **Hover**: Darker shade, increased shadow
- **Active**: Even darker shade, reduced shadow
- **Focus**: 2px ring in button color with 2px offset
- **Disabled**: 50% opacity, no pointer events

### Button Sizing
```css
.btn-sm: padding: 8px 16px, text: 14px
.btn-default: padding: 12px 24px, text: 16px
.btn-lg: padding: 16px 32px, text: 18px
.btn-xl: padding: 20px 40px, text: 20px
```

## Component Guidelines

### Cards
```css
.card-luxury {
  background: white;
  border: 1px solid neutral-200/50;
  border-radius: 8px;
  padding: 32px;
  box-shadow: shadow-card;
  transition: all 300ms ease;
}
```

**Variants:**
- `.card-medical` - Subtle teal accent border
- `.card-elevated` - Higher shadow for important content
- `.card-hero` - Luxury shadow for primary content

### Forms
```css
.form-input {
  border: 1px solid neutral-300;
  border-radius: 6px;
  padding: 12px 16px;
  font-size: 16px;
  background: white;
  transition: border-color 200ms ease;
}

.form-input:focus {
  border-color: teal-500;
  box-shadow: 0 0 0 2px teal-500/20;
}
```

### Navigation
```css
.nav-link {
  color: ink;
  font-weight: 500;
  padding: 8px 16px;
  transition: color 200ms ease;
}

.nav-link:hover {
  color: teal-600;
}

.nav-link-active {
  color: teal-600;
  font-weight: 600;
}
```

## Photography Guidelines

### Image Treatment
- **Warmth**: Slight warm tone (+10-15 temperature)
- **Contrast**: Moderate increase (+10-15%) for clarity
- **Saturation**: Slightly enhanced (+5-10%) for health vitality
- **Brightness**: Ensure adequate brightness for positive mood

### Composition
- **Clean backgrounds**: Prefer uncluttered, professional settings
- **Natural lighting**: Soft, even lighting that feels welcoming
- **Professional attire**: Clean, medical-appropriate clothing
- **Genuine expressions**: Authentic smiles and professional confidence

### Image Categories
1. **Staff portraits**: Professional headshots with warm lighting
2. **Facility photos**: Clean, modern medical spaces
3. **Treatment images**: Professional medical procedures (when appropriate)
4. **Lifestyle images**: Health and wellness focused lifestyle shots

### Technical Specs
- **Aspect ratios**: 16:10 (hero), 4:3 (medical), 3:4 (portraits)
- **Resolution**: Minimum 1920px width for hero images
- **Format**: WebP with JPEG fallback for optimization
- **Compression**: Balance quality vs. loading speed

## Animation Guidelines

### Micro-Interactions
```css
/* Subtle, professional animations */
transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);

/* Page transitions */
.animate-fade-up {
  animation: fade-up 500ms cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Animation Principles
- **Subtle**: Never distract from content or medical focus
- **Purposeful**: Every animation should improve UX
- **Fast**: Keep durations between 150-300ms for interactions
- **Smooth**: Use custom easing curves for luxury feel

### Common Animations
- **Hover states**: 200ms color/shadow transitions
- **Page loads**: 500ms fade-up entrance
- **Form feedback**: 150ms color changes
- **Card interactions**: 300ms elevation changes

## Accessibility Standards

### Color Contrast
- **Normal text**: Minimum 4.5:1 ratio (WCAG AA)
- **Large text**: Minimum 3:1 ratio
- **Interactive elements**: Minimum 3:1 ratio for boundaries

### Focus Management
- **Visible focus indicators**: 2px ring with 2px offset
- **Focus order**: Logical tab progression
- **Skip links**: For keyboard navigation

### Typography
- **Font size**: Minimum 16px for body text
- **Line height**: Minimum 1.4 for readability
- **Line length**: Maximum 70-80 characters per line

### Interactive Elements
- **Touch targets**: Minimum 44px for mobile
- **Hover states**: Clear visual feedback
- **Loading states**: Progress indicators for actions

## Component Tokens

### Design Tokens Export
```javascript
export const forbesDesignTokens = {
  colors: {
    porcelain: '#F8F7F5',
    obsidian: '#0A0B0D',
    ink: '#1A1B1E',
    teal: {
      50: '#E6F7F7',
      500: '#2A9D9D',
      600: '#217A7A',
      700: '#195858'
    },
    champagne: {
      50: '#FAF9F6',
      500: '#CDC3A5',
      600: '#A49C84'
    }
  },
  typography: {
    fontFamily: {
      serif: '"Playfair Display", Georgia, serif',
      sans: '"Inter", system-ui, sans-serif'
    },
    fontSize: {
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '30px',
      '4xl': '36px',
      '5xl': '48px',
      '6xl': '60px',
      '7xl': '72px'
    }
  },
  spacing: {
    1: '4px',
    2: '8px',
    4: '16px',
    6: '24px',
    8: '32px',
    12: '48px',
    16: '64px',
    24: '96px',
    32: '128px'
  },
  borderRadius: {
    sm: '4px',
    default: '6px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    '2xl': '20px'
  },
  boxShadow: {
    card: '0 4px 16px -2px rgba(10, 11, 13, 0.08)',
    cardHover: '0 8px 24px -4px rgba(10, 11, 13, 0.12)',
    luxury: '0 32px 64px -12px rgba(42, 157, 157, 0.15)'
  }
}
```

## Implementation Guidelines

### CSS Custom Properties
Use CSS custom properties for dynamic theming:
```css
:root {
  --color-primary: theme(colors.teal.500);
  --color-surface: theme(colors.white);
  --spacing-unit: 8px;
  --radius-default: 6px;
}
```

### Component Development
1. **Start with tokens**: Use design system tokens, not hardcoded values
2. **Follow naming conventions**: Consistent BEM or utility-first approach
3. **Include hover states**: Every interactive element needs clear feedback
4. **Test accessibility**: Run accessibility checks during development
5. **Document variants**: Clearly document all component variations

### Quality Checklist
- [ ] Uses design system colors exclusively
- [ ] Follows 8px spacing grid
- [ ] Includes proper hover/focus states
- [ ] Meets accessibility contrast ratios
- [ ] Responsive across all breakpoints
- [ ] Uses appropriate typography scale
- [ ] Includes loading/error states where applicable

## Usage Examples

### Hero Section
```html
<section class="section-lg bg-gradient-hero">
  <div class="container">
    <h1 class="text-7xl font-serif text-obsidian mb-6 text-balance">
      Integrative Medicine for Optimal Health
    </h1>
    <p class="lead text-ink/90 mb-8 max-w-2xl">
      Experience personalized healthcare that combines the best of conventional and alternative medicine.
    </p>
    <div class="flex gap-4">
      <button class="btn-primary btn-lg">
        Schedule Consultation
      </button>
      <button class="btn-secondary btn-lg">
        Learn More
      </button>
    </div>
  </div>
</section>
```

### Service Card
```html
<div class="card-luxury hover:shadow-card-hover">
  <div class="credential-badge mb-4">
    Board Certified
  </div>
  <h3 class="text-3xl font-serif text-obsidian mb-4">
    Functional Medicine
  </h3>
  <p class="text-ink leading-relaxed mb-6">
    Address root causes of illness through comprehensive testing and personalized treatment plans.
  </p>
  <button class="btn-outline">
    Learn More
  </button>
</div>
```

### Contact Form
```html
<form class="space-y-6">
  <div class="form-group">
    <label class="form-label">Full Name</label>
    <input type="text" class="form-input" placeholder="Enter your name">
  </div>
  <div class="form-group">
    <label class="form-label">Email</label>
    <input type="email" class="form-input" placeholder="your@email.com">
  </div>
  <div class="form-group">
    <label class="form-label">Message</label>
    <textarea class="form-textarea" placeholder="How can we help you?"></textarea>
  </div>
  <button type="submit" class="btn-primary w-full">
    Send Message
  </button>
</form>
```

This design system creates a cohesive, luxurious, and trustworthy brand experience that positions Forbes Integrative Medicine as a premium healthcare provider while maintaining accessibility and clinical credibility.