import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { AnalyticsProvider, AnalyticsErrorBoundary, PerformanceMonitor } from '@/components/analytics/AnalyticsProvider';
import { OrganizationSchema, DoctorSchema, LocalBusinessSchema } from '@/components/seo/StructuredData';
import { generateMetadata } from '@/lib/seo';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = generateMetadata({
  title: "Forbes Integrative Medicine | Medical Acupuncture Phoenix",
  description: "Physician-led medical acupuncture clinic in Phoenix. Board-certified Family Medicine physician specializing in evidence-based integrative treatments for pain, sleep, and wellness.",
  keywords: ["medical acupuncture Phoenix", "Dr Forbes", "integrative medicine Phoenix", "physician acupuncturist", "pain management Phoenix", "acupuncture clinic Phoenix"],
  canonical: "/",
  ogImage: "/images/hero-main.webp"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <OrganizationSchema />
        <DoctorSchema />
        <LocalBusinessSchema />
      </head>
      <body className="font-sans antialiased">
        <AnalyticsErrorBoundary>
          <AnalyticsProvider>
            {children}
            <PerformanceMonitor />
          </AnalyticsProvider>
        </AnalyticsErrorBoundary>
      </body>
    </html>
  );
}