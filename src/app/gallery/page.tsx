import { GalleryContent } from '@/components/projectGallery/GalleryContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project Gallery | Dilbeck & Sons Construction',
  description:
    'View our portfolio of completed construction projects in Monterey, CA. From residential renovations to commercial buildings, see the quality craftsmanship and attention to detail that sets Dilbeck & Sons Construction apart.',
  keywords: [
    'construction projects Monterey',
    'construction portfolio',
    'building projects gallery',
    'residential construction projects',
    'commercial construction projects',
    'construction work examples',
    'building contractor portfolio',
    'Monterey construction projects',
    'Dilbeck Construction gallery',
    'construction showcase',
  ],
  openGraph: {
    title: 'Project Gallery | Dilbeck & Sons Construction',
    description:
      'View our portfolio of completed construction projects in Monterey, CA. From residential renovations to commercial buildings, see the quality craftsmanship and attention to detail.',
    url: 'https://dilbeck.netlify.app/gallery',
    siteName: 'Dilbeck & Sons Construction',
    images: [
      {
        url: '/D_logo.png',
        width: 1200,
        height: 630,
        alt: 'Dilbeck & Sons Construction Project Gallery - Quality Construction Projects in Monterey CA',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Project Gallery | Dilbeck & Sons Construction',
    description:
      'View our portfolio of completed construction projects in Monterey, CA. Quality craftsmanship and attention to detail.',
    images: ['/D_logo.png'],
  },
  alternates: {
    canonical: 'https://dilbeck.netlify.app/gallery',
  },
};

export default function GalleryPage() {
  return <GalleryContent />;
}
