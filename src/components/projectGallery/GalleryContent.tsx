'use client';

import { GalleryProjectDisplay } from './GalleryProjectDisplay';

export function GalleryContent() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">Project Gallery</h1>
        <p className="text-lg text-blue-800 mb-12 max-w-3xl">
          Explore our portfolio of completed projects, showcasing our commitment to quality and
          craftsmanship across residential, commercial, and renovation projects.
        </p>

        <div className="w-full">
          <GalleryProjectDisplay />
        </div>
      </div>
    </section>
  );
}
