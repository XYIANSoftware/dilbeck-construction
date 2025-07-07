'use client';

import { Carousel } from 'primereact/carousel';
import { Skeleton } from 'primereact/skeleton';
import Image from 'next/image';
import { useState } from 'react';
import { CarouselImage } from '@/constants';

// Use first 5 items from gallery for carousel
const topImages: CarouselImage[] = [
  {
    id: '1',
    title: 'Modern Home',
    src: '/gallery/g-1.png',
    alt: 'Modern home exterior with clean lines and large windows',
  },
  {
    id: '2',
    title: 'Commercial Project',
    src: '/gallery/g-2.png',
    alt: 'Commercial building with modern facade and glass windows',
  },
  {
    id: '3',
    title: 'Historic Renovation',
    src: '/gallery/g-3.png',
    alt: 'Historic building renovation with preserved architectural details',
  },
  {
    id: '4',
    title: 'Custom Kitchen',
    src: '/gallery/g-4.png',
    alt: 'Custom kitchen with granite countertops and modern appliances',
  },
  {
    id: '5',
    title: 'Outdoor Living Space',
    src: '/gallery/g-5.png',
    alt: 'Outdoor deck with pergola and fire pit area',
  },
];

function GalleryItem({ image }: { image: CarouselImage }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center h-64 w-full">
      <div className="relative w-full h-48 flex items-center justify-center">
        {!loaded && <Skeleton width="100%" height="12rem" className="rounded-xl" />}
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className={`object-cover rounded-xl shadow-md transition-opacity duration-500 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoadingComplete={() => setLoaded(true)}
        />
      </div>
      <span className="mt-2 text-blue-900 font-semibold">{image.title}</span>
    </div>
  );
}

/**
 * GalleryCarousel displays a rotating carousel of top project images
 */
export function GalleryCarousel() {
  return (
    <div className="w-full max-w-3xl mx-auto my-6">
      <Carousel
        value={topImages}
        itemTemplate={image => <GalleryItem image={image} />}
        numVisible={1}
        circular
        autoplayInterval={4000}
        showIndicators
        showNavigators
        className="rounded-xl shadow-lg bg-white/80"
      />
    </div>
  );
}
