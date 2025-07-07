import { GalleryCarousel, ProjectGrid } from '@/components/projectGallery';

export default function GalleryPage() {
  return (
    <div className="flex flex-col gap-8">
      <GalleryCarousel />
      <ProjectGrid />
    </div>
  );
}

export const metadata = {
  title: 'Gallery | Dilbeck & Sons Construction',
  description:
    'Project gallery for Dilbeck Construction, Dilbeck & Sons, General Contractors in Monterey, CA. View our top projects and craftsmanship.',
};
