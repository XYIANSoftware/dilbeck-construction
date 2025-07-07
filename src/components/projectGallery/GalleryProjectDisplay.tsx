'use client';

import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Tag } from 'primereact/tag';
import Image from 'next/image';
import { useState } from 'react';
import { GalleryItem, galleryItems } from '@/constants';

interface ProjectSection {
  title: string;
  subtitle?: string;
  items: GalleryItem[];
}

/**
 * GalleryProjectDisplay - Organized project sections with PrimeReact cards
 */
export function GalleryProjectDisplay() {
  const [selectedProject, setSelectedProject] = useState<GalleryItem | null>(null);
  const [showModal, setShowModal] = useState(false);

  // Organize projects by category using actual gallery data
  const projectSections: ProjectSection[] = [
    {
      title: 'Residential Projects',
      subtitle: 'Custom homes and renovations',
      items: galleryItems.filter(item =>
        ['Residential', 'Kitchen', 'Bathroom', 'Outdoor', 'Basement'].includes(item.category || '')
      ),
    },
    {
      title: 'Commercial Projects',
      subtitle: 'Office buildings and retail spaces',
      items: galleryItems.filter(item => item.category === 'Commercial'),
    },
    {
      title: 'Renovation & Restoration',
      subtitle: 'Historic preservation and modern updates',
      items: galleryItems.filter(item => item.category === 'Renovation'),
    },
  ];

  const handleViewDetails = (project: GalleryItem) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  const ProjectCard = ({ project }: { project: GalleryItem }) => (
    <Card
      className="w-full max-w-sm h-auto shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2"
      style={{
        background:
          'linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(240,248,255,0.85) 100%)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(59, 130, 246, 0.15)',
        boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1)',
      }}
    >
      <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
        <Image
          src={project.imgSrc}
          alt={project.alt}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-2 right-2">
          <Tag value={project.category} severity="info" />
        </div>
        {/* Subtle gloss overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/10 pointer-events-none"></div>
      </div>

      <div className="flex flex-col h-auto py-4">
        <h3 className="text-xl font-bold text-blue-900 mb-3">{project.projectName}</h3>
        <p className="text-gray-600 text-sm flex-grow line-clamp-3 mb-4">{project.details}</p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <i className="pi pi-map-marker"></i>
            <span>{project.location}</span>
            {project.year && (
              <>
                <i className="pi pi-calendar"></i>
                <span>{project.year}</span>
              </>
            )}
          </div>
        </div>

        {/* Button moved inside card content */}
        <Button
          label="View Details"
          icon="pi pi-eye"
          className="w-full"
          severity="secondary"
          style={{
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
            border: 'none',
            boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
          }}
          onClick={() => handleViewDetails(project)}
        />
      </div>
    </Card>
  );

  return (
    <div className="w-full space-y-12">
      {projectSections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-2">{section.title}</h2>
            {section.subtitle && <p className="text-lg text-blue-700">{section.subtitle}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
            {section.items.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      ))}

      {/* Project Details Modal */}
      {selectedProject && (
        <Dialog
          visible={showModal}
          onHide={handleCloseModal}
          header={selectedProject.projectName}
          className="w-full max-w-4xl"
          modal
          closeOnEscape
          closeIcon="pi pi-times"
        >
          <div className="space-y-6">
            {/* Project Image */}
            <div className="relative w-full h-80 rounded-lg overflow-hidden">
              <Image
                src={selectedProject.imgSrc}
                alt={selectedProject.alt}
                fill
                className="object-cover"
              />
            </div>

            {/* Project Details */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <i className="pi pi-map-marker text-blue-600"></i>
                  <span className="font-semibold">Location:</span>
                  <span>{selectedProject.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="pi pi-tag text-blue-600"></i>
                  <span className="font-semibold">Category:</span>
                  <span>{selectedProject.category}</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="pi pi-calendar text-blue-600"></i>
                  <span className="font-semibold">Year:</span>
                  <span>{selectedProject.year}</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="pi pi-user text-blue-600"></i>
                  <span className="font-semibold">Client:</span>
                  <span>{selectedProject.client}</span>
                </div>
              </div>

              {/* Project Description */}
              <div>
                <h4 className="font-semibold text-lg mb-2">Project Description</h4>
                <p className="text-gray-700 leading-relaxed">
                  {selectedProject.longDetails || selectedProject.details}
                </p>
              </div>

              {/* Call to Action */}
              <div className="flex justify-center pt-4">
                <Button
                  label="Get a Quote"
                  icon="pi pi-phone"
                  severity="success"
                  size="large"
                  style={{
                    borderRadius: '8px',
                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                    border: 'none',
                    boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)',
                  }}
                  onClick={() => {
                    handleCloseModal();
                    window.open('tel:+18314228213');
                  }}
                />
              </div>
            </div>
          </div>
        </Dialog>
      )}
    </div>
  );
}
