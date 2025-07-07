'use client';

import { useEffect } from 'react';

const ConstructionBackground = () => {
  useEffect(() => {
    const initAnimations = async () => {
      try {
        const animeModule = await import('animejs');
        const anime = animeModule.default || animeModule;

        // Rotating gears
        anime({
          targets: '.gear',
          rotate: 360,
          easing: 'linear',
          duration: 15000,
          loop: true,
        });

        // Floating bolts
        anime({
          targets: '.bolt',
          translateY: [-5, 5],
          direction: 'alternate',
          easing: 'easeInOutSine',
          duration: 2000,
          delay: anime.stagger(300),
          loop: true,
        });

        // Bobbing crane lines
        anime({
          targets: '.crane-line',
          translateY: [0, 10],
          direction: 'alternate',
          easing: 'easeInOutSine',
          duration: 3000,
          delay: anime.stagger(400),
          loop: true,
        });

        // Floating construction elements
        anime({
          targets: '.construction-element',
          translateY: [-3, 3],
          rotate: [-2, 2],
          direction: 'alternate',
          easing: 'easeInOutSine',
          duration: 4000,
          delay: anime.stagger(500),
          loop: true,
        });

        // Main crane animation - moving back and forth
        anime({
          targets: '.main-crane',
          translateX: [-30, 30],
          easing: 'easeInOutQuad',
          duration: 4000,
          loop: true,
          direction: 'alternate',
        });

        // Crane pickup animation
        anime({
          targets: '.crane-hook',
          translateY: [0, -20, 0],
          scale: [1, 1.1, 1],
          easing: 'easeInOutQuad',
          duration: 3000,
          loop: true,
          delay: 1000,
        });

        // Dirt particles being picked up
        anime({
          targets: '.dirt-particle',
          translateY: [0, -30],
          opacity: [0.8, 0],
          easing: 'easeOutQuad',
          duration: 2000,
          loop: true,
          delay: anime.stagger(200),
        });
      } catch (error) {
        console.warn('Anime.js failed to load:', error);
      }
    };

    initAnimations();
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Light gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100" />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_1px_1px,rgba(30,64,175,0.15)_1px,transparent_0)] bg-[length:20px_20px]" />

      {/* Main crane animation above title area */}
      <div className="main-crane absolute top-20 left-1/2 transform -translate-x-1/2">
        {/* Crane arm */}
        <div className="w-32 h-2 bg-blue-600 rounded-full shadow-lg relative">
          {/* Crane hook */}
          <div className="crane-hook absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-6 bg-blue-700 rounded-b-full shadow-md" />

          {/* Dirt particles being picked up */}
          <div className="dirt-particle absolute bottom-2 left-1/4 w-2 h-2 bg-amber-600 rounded-full opacity-80" />
          <div className="dirt-particle absolute bottom-3 left-1/3 w-1.5 h-1.5 bg-amber-700 rounded-full opacity-80" />
          <div className="dirt-particle absolute bottom-2.5 left-1/2 w-1 h-1 bg-amber-800 rounded-full opacity-80" />
        </div>
      </div>

      {/* Rotating gears */}
      <div className="gear absolute top-10 left-10 w-16 h-16 bg-blue-400 opacity-20 rounded-full shadow-lg" />
      <div className="gear absolute top-40 right-20 w-24 h-24 bg-blue-500 opacity-15 rounded-full shadow-lg" />
      <div className="gear absolute bottom-20 left-1/4 w-12 h-12 bg-blue-300 opacity-25 rounded-full shadow-lg" />

      {/* Floating bolts */}
      <div className="bolt absolute bottom-20 left-16 w-2 h-2 bg-blue-400 rounded-full opacity-40 shadow-sm" />
      <div className="bolt absolute bottom-36 right-12 w-2 h-2 bg-blue-400 rounded-full opacity-30 shadow-sm" />
      <div className="bolt absolute top-1/3 left-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full opacity-35 shadow-sm" />

      {/* Bobbing crane lines */}
      <div className="crane-line absolute top-0 left-1/4 w-1 h-32 bg-blue-400 opacity-20 shadow-sm" />
      <div className="crane-line absolute top-0 right-1/3 w-1 h-40 bg-blue-300 opacity-15 shadow-sm" />
      <div className="crane-line absolute top-0 left-2/3 w-0.5 h-28 bg-blue-500 opacity-25 shadow-sm" />

      {/* Construction elements */}
      <div className="construction-element absolute top-1/4 right-1/4 w-3 h-3 bg-blue-400 opacity-30 transform rotate-45 shadow-sm" />
      <div className="construction-element absolute bottom-1/3 left-1/5 w-2 h-2 bg-blue-300 opacity-40 rounded-full shadow-sm" />
      <div className="construction-element absolute top-2/3 right-1/5 w-2.5 h-2.5 bg-blue-500 opacity-25 transform rotate-12 shadow-sm" />

      {/* Subtle light rays */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-400/10 to-transparent" />
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-blue-300/8 to-transparent" />
    </div>
  );
};

export default ConstructionBackground;
