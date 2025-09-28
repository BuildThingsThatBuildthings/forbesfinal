import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // Forbes Integrative Medicine - Luxury Medical Brand
      // Inspired by Aman Resorts & Four Seasons Wellness
      colors: {
        // Healing Sky Blues - Trust with warmth
        sky: {
          50: "#F0F9FF",   // Ice blue backgrounds
          100: "#E0F2FE",  // Lightest sky
          200: "#BAE6FD",  // Very light blue
          300: "#7DD3FC",  // Light blue
          400: "#38BDF8",  // Medium light blue
          500: "#0EA5E9",  // Primary sky blue
          600: "#0284C7",  // Darker blue
          700: "#0369A1",  // Deep blue
          800: "#075985",  // Very deep blue
          900: "#0C4A6E",  // Darkest blue
        },
        
        // Sage - Natural luxury healing
        sage: {
          50: "#F7F8F7",   // Whisper
          100: "#EEF0ED",  // Light mist
          200: "#DDE1DB",  // Soft
          300: "#BCC3B8",  // Light
          400: "#A8B5A0",  // Sage Whisper (primary)
          500: "#96A38D",  // Medium
          600: "#7A8770",  // Deep
          700: "#5E6B53",  // Forest
          800: "#424F36",  // Dark
          900: "#263319",  // Deepest
        },
        
        // Stone - Luxury warmth
        stone: {
          50: "#F5F3F0",   // Warm Stone (primary)
          100: "#EFEBE6",  // Light
          200: "#E9E3DC",  // Soft
          300: "#DDD5C9",  // Medium
          400: "#D1C7B6",  // Warm
          500: "#C5B9A3",  // Rich
          600: "#B9AB90",  // Deep
          700: "#AD9D7D",  // Dark
        },
        
        // Champagne - Understated luxury
        champagne: {
          50: "#FAF9F7",   // Silk
          100: "#F5F2ED",  // Light
          200: "#EBE5DB",  // Soft
          300: "#E8DCC0",  // Champagne (primary)
          400: "#E0D0A5",  // Warm
          500: "#D8C48A",  // Rich
          600: "#D0B86F",  // Deep
        },
        
        // Teal - Medical authority
        teal: {
          50: "#E6F4F4",   // Ice
          100: "#CCE9E9",  // Light
          200: "#99D3D3",  // Soft
          300: "#66BDBD",  // Medium
          400: "#4C9090",  // Deep
          500: "#2C5F5F",  // Deep Teal (primary)
          600: "#234A4A",  // Darker
          700: "#1A3636",  // Dark
        },
        
        // Neutral Grays with warmth
        slate: {
          50: "#F8FAFB",   // Nearly white
          100: "#F1F5F7",  // Pearl gray
          200: "#E2E8EC",  // Light gray
          300: "#CBD5DC",  // Medium light gray
          400: "#94A3B3",  // Medium gray
          500: "#64748B",  // Soft slate (body text)
          600: "#475569",  // Darker gray
          700: "#334155",  // Dark gray
          800: "#1E293B",  // Very dark gray
          900: "#0F172A",  // Deep navy (headlines)
        },
        
        // Luxury Accent Colors
        "sage-whisper": "#A8B5A0",
        "warm-stone": "#F5F3F0",
        "deep-teal": "#2C5F5F",
        "champagne-accent": "#E8DCC0",
        "charcoal-ink": "#2D2D2D",
        "pure-canvas": "#FEFEFE",
        "soft-mist": "#F8F6F3",
        "golden-hour": "#D4B896",
        
        // Semantic Colors for Medical Context
        success: {
          50: "#ECFDF5",
          100: "#D1FAE5",
          500: "#0D8043", // Darker green for medical context (updated)
          600: "#0A6835",
          700: "#085027",
        },
        warning: {
          50: "#FFFBEB",
          100: "#FEF3C7",
          500: "#D97706", // Medical orange for important info
          600: "#B45309", // Darker medical caution (updated)
          700: "#92400E",
        },
        error: {
          50: "#FEF2F2",
          100: "#FEE2E2",
          500: "#EF4444", // Error states
          600: "#DC2626",
          700: "#B91C1C",
        },
        
        // Extended Neutral Palette
        neutral: {
          50: "#FAFAFA", // Nearly white
          100: "#F5F5F5", // Very light gray
          200: "#E5E5E5", // Light gray
          300: "#D4D4D4", // Medium light gray
          400: "#A3A3A3", // Medium gray
          500: "#737373", // True gray
          600: "#525252", // Medium dark gray
          700: "#404040", // Dark gray
          800: "#262626", // Very dark gray
          900: "#171717", // Nearly black
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        // Luxury serif for headlines - medical authority with elegance
        display: ["Playfair Display", "Georgia", "serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
        // Professional sans for body - exceptional readability
        sans: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        body: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      
      // Simplified Typography Scale - Minimal hierarchy
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5' }],     // 12px - disclaimers
        'sm': ['0.875rem', { lineHeight: '1.5' }],    // 14px - captions
        'base': ['1rem', { lineHeight: '1.7' }],      // 16px - body text
        'lg': ['1.125rem', { lineHeight: '1.7' }],    // 18px - large body
        'xl': ['1.5rem', { lineHeight: '1.5' }],      // 24px - subheadings
        '2xl': ['2rem', { lineHeight: '1.4' }],       // 32px - headings
        '3xl': ['2.5rem', { lineHeight: '1.3' }],     // 40px - large headings
        '4xl': ['3rem', { lineHeight: '1.2' }],       // 48px - hero text
        '5xl': ['3.5rem', { lineHeight: '1.1' }],     // 56px - display
      },
      
      // Spacing Scale - 8px Grid System
      spacing: {
        '0.5': '0.125rem', // 2px
        '1': '0.25rem', // 4px
        '1.5': '0.375rem', // 6px
        '2': '0.5rem', // 8px - base unit
        '2.5': '0.625rem', // 10px
        '3': '0.75rem', // 12px
        '3.5': '0.875rem', // 14px
        '4': '1rem', // 16px
        '5': '1.25rem', // 20px
        '6': '1.5rem', // 24px
        '7': '1.75rem', // 28px
        '8': '2rem', // 32px
        '9': '2.25rem', // 36px
        '10': '2.5rem', // 40px
        '11': '2.75rem', // 44px
        '12': '3rem', // 48px
        '14': '3.5rem', // 56px
        '16': '4rem', // 64px
        '20': '5rem', // 80px
        '24': '6rem', // 96px
        '28': '7rem', // 112px
        '32': '8rem', // 128px
        '36': '9rem', // 144px
        '40': '10rem', // 160px
        '44': '11rem', // 176px
        '48': '12rem', // 192px
        '52': '13rem', // 208px
        '56': '14rem', // 224px
        '60': '15rem', // 240px
        '64': '16rem', // 256px
        '72': '18rem', // 288px
        '80': '20rem', // 320px
        '96': '24rem', // 384px
      },
      // Minimal Border Radius - Clean geometric shapes
      borderRadius: {
        'none': '0px',
        'sm': '4px',     // Small elements
        'DEFAULT': '8px', // Default radius
        'md': '12px',    // Medium elements
        'lg': '16px',    // Large elements
        'full': '9999px', // Pills/badges
      },
      
      // Minimal Box Shadow System - Subtle depth
      boxShadow: {
        'none': 'none',
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
      },
      // Luxury Animation System - Elegant and refined
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-up": {
          from: {
            opacity: "0",
            transform: "translateY(8px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "scale-in": {
          from: {
            opacity: "0",
            transform: "scale(0.98)",
          },
          to: {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        // Luxury drift - organic movement
        "luxury-drift": {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "33%": { transform: "translateY(-3px) translateX(1px)" },
          "66%": { transform: "translateY(1px) translateX(-1px)" },
        },
        // Medical pulse - subtle opacity
        "medical-pulse": {
          "0%, 100%": { opacity: "0.8" },
          "50%": { opacity: "1" },
        },
        // Elegant reveal
        "elegant-reveal": {
          from: { 
            opacity: "0",
            transform: "translateY(4px)"
          },
          to: { 
            opacity: "1",
            transform: "translateY(0)"
          },
        },
        // Premium shimmer
        "premium-shimmer": {
          "0%": { backgroundPosition: "200% 50%" },
          "100%": { backgroundPosition: "-200% 50%" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        "fade-up": "fade-up 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        "scale-in": "scale-in 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        "luxury-drift": "luxury-drift 8s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        "medical-pulse": "medical-pulse 3s ease-in-out infinite",
        "elegant-reveal": "elegant-reveal 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        "premium-shimmer": "premium-shimmer 3s linear infinite",
      },
      
      // Transition System
      transitionDuration: {
        '150': '150ms', // Quick interactions
        '200': '200ms', // Default
        '300': '300ms', // Moderate
        '400': '400ms', // Slower
        '500': '500ms', // Entrance animations
        '700': '700ms', // Complex animations
      },
      
      transitionTimingFunction: {
        'ease-luxury': 'cubic-bezier(0.4, 0, 0.2, 1)', // Custom luxury easing
        'ease-medical': 'cubic-bezier(0.25, 0.1, 0.25, 1)', // Smooth medical feel
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;