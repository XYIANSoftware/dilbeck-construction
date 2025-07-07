'use client';

import { GalleryCarousel } from './GalleryCarousel';
import { ProjectGrid } from './ProjectGrid';

export function GalleryContent() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">Project Gallery</h1>
        <p className="text-lg text-blue-800 mb-10 max-w-2xl">
          Explore our portfolio of completed projects, showcasing our commitment to quality and
          craftsmanship.
        </p>
        <div className="w-full flex flex-col items-center justify-center mb-12">
          <GalleryCarousel />
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <ProjectGrid />
        </div>
      </div>
    </section>
  );
}
