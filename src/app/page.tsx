import { HomeContent } from '@/components/home/HomeContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dilbeck & Sons Construction | General Contractors Monterey CA',
  description:
    'Professional general contractors in Monterey, CA. Specializing in residential and commercial construction, renovations, and custom building projects. Quality craftsmanship since 1978. Get your free quote today!',
  keywords: [
    'general contractor Monterey CA',
    'construction company Monterey',
    'residential construction',
    'commercial construction',
    'custom homes Monterey',
    'building contractor',
    'renovation contractor',
    'construction services',
    'Dilbeck Construction',
    'Monterey construction',
  ],
  openGraph: {
    title: 'Dilbeck & Sons Construction | General Contractors Monterey CA',
    description:
      'Professional general contractors in Monterey, CA. Specializing in residential and commercial construction, renovations, and custom building projects. Quality craftsmanship since 1978.',
    url: 'https://dilbeck.netlify.app',
    siteName: 'Dilbeck & Sons Construction',
    images: [
      {
        url: '/D_logo.png',
        width: 1200,
        height: 630,
        alt: 'Dilbeck & Sons Construction - Professional General Contractors in Monterey CA',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dilbeck & Sons Construction | General Contractors Monterey CA',
    description:
      'Professional general contractors in Monterey, CA. Specializing in residential and commercial construction, renovations, and custom building projects.',
    images: ['/D_logo.png'],
  },
  alternates: {
    canonical: 'https://dilbeck.netlify.app',
  },
};

export default function HomePage() {
  return <HomeContent />;
}
