import { Carousel } from 'primereact/carousel';
import { Skeleton } from 'primereact/skeleton';
import Image from 'next/image';
import { useState } from 'react';

interface GalleryImage {
  id: string;
  src: string;
  title: string;
}

const topImages: GalleryImage[] = [
  { id: '1', src: '/gallery/top1.jpg', title: 'Modern Home' },
  { id: '2', src: '/gallery/top2.jpg', title: 'Commercial Project' },
  { id: '3', src: '/gallery/top3.jpg', title: 'Renovation' },
  { id: '4', src: '/gallery/top4.jpg', title: 'Custom Kitchen' },
  { id: '5', src: '/gallery/top5.jpg', title: 'Outdoor Living' },
];

function GalleryItem({ image }: { image: GalleryImage }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center h-64 w-full">
      <div className="relative w-full h-48 flex items-center justify-center">
        {!loaded && <Skeleton width="100%" height="12rem" className="rounded-xl" />}
        <Image
          src={image.src}
          alt={image.title}
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
