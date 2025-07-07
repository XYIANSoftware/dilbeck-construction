'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { Skeleton } from 'primereact/skeleton';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { GalleryItem } from '@/constants';

/**
 * ProjectCard with flip/overlay animation using anime.js and PrimeReact Card
 */
export function ProjectCard({ imgSrc, projectName, details, alt }: GalleryItem) {
  const [flipped, setFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  const handleFlip = async () => {
    try {
      const animeModule = await import('animejs');
      // @ts-expect-error: animejs types do not match runtime usage
      const anime = animeModule.default || animeModule;

      if (!flipped) {
        anime({
          targets: cardRef.current,
          rotateY: '180deg',
          duration: 700,
          easing: 'easeInOutCubic',
        });
      } else {
        anime({
          targets: cardRef.current,
          rotateY: '0deg',
          duration: 700,
          easing: 'easeInOutCubic',
        });
      }
      setFlipped(!flipped);
    } catch (error) {
      console.warn('Anime.js failed to load:', error);
      // Fallback to CSS transition if anime.js fails
      setFlipped(!flipped);
    }
  };

  return (
    <div className="perspective-1000 w-full h-64" onClick={handleFlip}>
      <div
        ref={cardRef}
        className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer"
        style={{ transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
      >
        {/* Front */}
        <Card className="absolute w-full h-full backface-hidden p-0 overflow-hidden">
          <div className="relative w-full h-full">
            {!loaded && <Skeleton width="100%" height="100%" className="rounded-xl" />}
            <Image
              src={imgSrc}
              alt={alt}
              fill
              className={`object-cover w-full h-full transition-opacity duration-500 ${
                loaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoadingComplete={() => setLoaded(true)}
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-blue-900/80 to-transparent p-3">
              <span className="text-white font-bold text-lg">{projectName}</span>
            </div>
          </div>
        </Card>
        {/* Back */}
        <Card
          className="absolute w-full h-full backface-hidden bg-blue-900 text-white flex items-center justify-center p-4"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <div className="text-center">
            <p className="text-base mb-4">{details}</p>
            <Button
              label="View Details"
              icon="pi pi-eye"
              className="p-button-outlined p-button-sm"
              onClick={e => {
                e.stopPropagation();
                // Add any additional action here
              }}
            />
          </div>
        </Card>
      </div>
    </div>
  );
}
