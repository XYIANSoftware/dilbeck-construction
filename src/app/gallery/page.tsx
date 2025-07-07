import { GalleryCarousel } from '@/components/projectGallery/GalleryCarousel';
import { ProjectGrid } from '@/components/projectGallery/ProjectGrid';

export default function GalleryPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient text-glow">
          Project Gallery
        </h1>
        <p className="text-lg text-slate-300 mb-10 max-w-2xl">
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

export const metadata = {
  title: 'Gallery | Dilbeck & Sons Construction',
  description:
    'Project gallery for Dilbeck Construction, Dilbeck & Sons, General Contractors in Monterey, CA. View our top projects and craftsmanship.',
};
