'use client';

import { PrimeReactProvider } from 'primereact/api';
import ConstructionBackground from '@/components/common/ConstructionBackground';
import CraneHamburger from '@/components/common/CraneHamburger';
import { Footer } from '@/components/layout/Footer';

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <PrimeReactProvider>
      <ConstructionBackground />
      <div className="relative z-10 min-h-screen flex flex-col">
        <CraneHamburger />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </PrimeReactProvider>
  );
}
