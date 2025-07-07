import type { Metadata, Viewport } from 'next';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import '@/styles/globals.css';
import { AppShell } from '@/components/layout/AppShell';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#2563eb',
  colorScheme: 'light',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://dilbeck.netlify.app'),
  title: {
    default: 'Dilbeck & Sons Construction | General Contractors Monterey CA',
    template: '%s | Dilbeck & Sons Construction',
  },
  description:
    'Professional general contractors in Monterey, CA. Specializing in residential and commercial construction, renovations, and custom building projects. Quality craftsmanship since 1978.',
  keywords: [
    'construction',
    'general contractor',
    'Monterey CA',
    'building contractor',
    'renovation',
    'custom homes',
    'commercial construction',
    'residential construction',
    'construction company',
    'building services',
    'construction services',
    'Dilbeck Construction',
    'Dilbeck & Sons',
  ],
  authors: [{ name: 'Dilbeck & Sons Construction' }],
  creator: 'Dilbeck & Sons Construction',
  publisher: 'Dilbeck & Sons Construction',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dilbeck.netlify.app',
    siteName: 'Dilbeck & Sons Construction',
    title: 'Dilbeck & Sons Construction | General Contractors Monterey CA',
    description:
      'Professional general contractors in Monterey, CA. Specializing in residential and commercial construction, renovations, and custom building projects. Quality craftsmanship since 1978.',
    images: [
      {
        url: '/D_logo.png',
        width: 1200,
        height: 630,
        alt: 'Dilbeck & Sons Construction - Professional General Contractors in Monterey CA',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@dilbeckconstruction', // Add your Twitter handle if you have one
    creator: '@dilbeckconstruction',
    title: 'Dilbeck & Sons Construction | General Contractors Monterey CA',
    description:
      'Professional general contractors in Monterey, CA. Specializing in residential and commercial construction, renovations, and custom building projects.',
    images: ['/D_logo.png'],
  },
  alternates: {
    canonical: 'https://dilbeck.netlify.app',
  },
  category: 'construction',
  classification: 'business',
  other: {
    'geo.region': 'US-CA',
    'geo.placename': 'Monterey, California',
    'geo.position': '36.6002;-121.8947',
    ICBM: '36.6002, -121.8947',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body className="bg-construction min-h-screen">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
