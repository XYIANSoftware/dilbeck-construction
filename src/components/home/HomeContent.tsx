'use client';

import { Hero } from './Hero';
import { AboutSection } from './AboutSection';
import { ServicesSection } from './ServicesSection';

export function HomeContent() {
  return (
    <div className="flex flex-col gap-8">
      <Hero />
      <AboutSection />
      <ServicesSection />
    </div>
  );
}
