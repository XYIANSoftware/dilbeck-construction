import type { Metadata } from 'next';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import '@/styles/globals.css';
import { AppShell } from '@/components/layout/AppShell';

export const metadata: Metadata = {
  metadataBase: new URL('https://dilbeck.netlify.app'),
  title: 'Dilbeck & Sons Construction',
  description:
    'Professional construction services with quality craftsmanship and reliable project delivery.',
  keywords: 'construction, building, renovation, contractor, construction company',
  authors: [{ name: 'Dilbeck & Sons Construction' }],
  creator: 'Dilbeck & Sons Construction',
  publisher: 'Dilbeck & Sons Construction',
  robots: 'index, follow',
  openGraph: {
    title: 'Dilbeck & Sons Construction',
    description:
      'Professional construction services with quality craftsmanship and reliable project delivery.',
    type: 'website',
    url: 'https://dilbeck.netlify.app',
    siteName: 'Dilbeck & Sons Construction',
    images: [
      {
        url: '/D_logo.png',
        width: 1200,
        height: 630,
        alt: 'Dilbeck & Sons Construction Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dilbeck & Sons Construction',
    description:
      'Professional construction services with quality craftsmanship and reliable project delivery.',
    images: ['/D_logo.png'],
  },
  icons: {
    icon: '/D_logo.ico',
    apple: '/D_logo.ico',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-construction min-h-screen">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
