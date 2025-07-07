import { Hero, AboutSection } from '@/components/home';
import { ServicesSection } from '@/components/home/ServicesSection';

export default function HomePage() {
  return (
    <div className="flex flex-col gap-8">
      <Hero />
      <AboutSection />
      <ServicesSection />
    </div>
  );
}

export const metadata = {
  title: 'Dilbeck & Sons Construction | General Contractors Monterey CA',
  description:
    'Dilbeck Construction, Dilbeck & Sons, General Contractors in Monterey, CA. Building with integrity and craftsmanship since 1978.',
};
