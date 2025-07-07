'use client';

import { ProjectCard } from './ProjectCard';
import { galleryItems } from '@/constants';

/**
 * ProjectGrid displays a grid of ProjectCard components
 */
export function ProjectGrid() {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
      {galleryItems.map(item => (
        <ProjectCard key={item.id} {...item} />
      ))}
    </div>
  );
}
