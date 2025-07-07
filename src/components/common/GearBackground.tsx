'use client';
import { useEffect } from 'react';
import Image from 'next/image';

/**
 * Subtle animated gear in the bottom right corner using anime.js
 */
export function GearBackground() {
  useEffect(() => {
    // Dynamic import to avoid Turbopack issues
    const animateGear = async () => {
      try {
        const animeModule = await import('animejs');
        const anime = animeModule.default || animeModule;
        anime({
          targets: '.gear-icon',
          rotate: 360,
          easing: 'linear',
          duration: 10000,
          loop: true,
        });
      } catch (error) {
        console.warn('Anime.js failed to load:', error);
      }
    };

    animateGear();
  }, []);

  return (
    <div className="gear-icon fixed bottom-4 right-4 z-40 opacity-30 pointer-events-none select-none">
      <Image src="/icon-1.png" alt="Gear" width={56} height={56} className="rounded-full" />
    </div>
  );
}
