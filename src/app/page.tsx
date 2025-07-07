import { Hero, AboutSection } from '@/components/home';

export default function HomePage() {
  return (
    <div className="flex flex-col gap-8">
      <Hero />
      <AboutSection />
    </div>
  );
}
