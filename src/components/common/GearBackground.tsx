'use client';
import { useEffect } from 'react';
import * as anime from 'animejs';
import Image from 'next/image';

/**
 * Subtle animated gear in the bottom right corner using anime.js
 */
export function GearBackground() {
  useEffect(() => {
    // @ts-expect-error: animejs types do not match runtime usage
    anime({
      targets: '.gear-icon',
      rotate: 360,
      easing: 'linear',
      duration: 10000,
      loop: true,
    });
  }, []);

  return (
    <div className="gear-icon fixed bottom-4 right-4 z-40 opacity-30 pointer-events-none select-none">
      <Image src="/gear.svg" alt="Gear" width={56} height={56} />
    </div>
  );
}
