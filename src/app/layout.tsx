import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './globals.css';
import '@/styles/globals.css';
import { Header, Footer } from '@/components/layout';
import { GearBackground } from '@/components/common';
import type { ReactNode } from 'react';
import { PrimeReactProvider } from 'primereact/api';

export const metadata = {
  title: 'Dilbeck & Sons Construction | General Contractors Monterey CA',
  description:
    'Dilbeck Construction, Dilbeck & Sons, General Contractors in Monterey, CA. Building with integrity and craftsmanship since 1978.',
  icons: {
    icon: '/D_logo.ico',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-blue-50 text-blue-900">
        <PrimeReactProvider value={{ ripple: true }}>
          <Header />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
          <GearBackground />
        </PrimeReactProvider>
      </body>
    </html>
  );
}
