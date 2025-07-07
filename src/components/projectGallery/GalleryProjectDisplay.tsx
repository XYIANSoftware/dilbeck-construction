'use client';

import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Tag } from 'primereact/tag';
import Image from 'next/image';
import { useState } from 'react';
import { GalleryItem } from '@/constants';

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

  // Organize projects by category
  const projectSections: ProjectSection[] = [
    {
      title: 'Residential Projects',
      subtitle: 'Custom homes and renovations',
      items: [
        {
          id: '1',
          projectName: 'Modern Home',
          details: 'A custom-built modern home with sustainable materials and open living spaces.',
          longDetails:
            'This stunning modern home features sustainable building materials, open-concept living spaces, and energy-efficient design. The project showcases our commitment to quality craftsmanship and contemporary architectural trends.',
          location: 'Monterey, CA',
          imgSrc: '/gallery/g-1.png',
          pictureName: 'g-1.png',
          alt: 'Modern home exterior with clean lines and large windows',
          category: 'Residential',
          year: '2024',
          client: 'Private Residence',
        },
        {
          id: '4',
          projectName: 'Custom Kitchen',
          details: 'A chef-inspired kitchen remodel with premium finishes and smart appliances.',
          longDetails:
            'This custom kitchen remodel features premium materials, smart home integration, and chef-grade appliances. The design maximizes functionality while creating a beautiful, welcoming space.',
          location: 'Monterey, CA',
          imgSrc: '/gallery/g-4.png',
          pictureName: 'g-4.png',
          alt: 'Custom kitchen with granite countertops and modern appliances',
          category: 'Kitchen',
          year: '2024',
          client: 'Private Residence',
        },
        {
          id: '5',
          projectName: 'Outdoor Living Space',
          details:
            'Outdoor living space with deck, pergola, and fire pit for year-round enjoyment.',
          longDetails:
            'This outdoor living space creates a seamless transition between indoor and outdoor living. Features include a custom deck, pergola, fire pit, and landscaping designed for year-round enjoyment.',
          location: 'Monterey, CA',
          imgSrc: '/gallery/g-5.png',
          pictureName: 'g-5.png',
          alt: 'Outdoor deck with pergola and fire pit area',
          category: 'Outdoor',
          year: '2024',
          client: 'Private Residence',
        },
        {
          id: '7',
          projectName: 'Bathroom Remodel',
          details: 'Luxury bathroom remodel with spa-like features and premium fixtures.',
          longDetails:
            'This luxury bathroom remodel transforms an ordinary space into a spa-like retreat. Features include premium fixtures, custom tile work, and thoughtful design details.',
          location: 'Monterey, CA',
          imgSrc: '/gallery/g-7.png',
          pictureName: 'g-7.png',
          alt: 'Luxury bathroom with marble tiles and modern fixtures',
          category: 'Bathroom',
          year: '2024',
          client: 'Private Residence',
        },
        {
          id: '9',
          projectName: 'Basement Finish',
          details: 'Finished basement with entertainment area and additional living space.',
          longDetails:
            'This basement finishing project creates valuable additional living space. The design includes an entertainment area, guest space, and storage solutions while maintaining proper moisture control.',
          location: 'Monterey, CA',
          imgSrc: '/gallery/g-9.png',
          pictureName: 'g-9.png',
          alt: 'Finished basement with entertainment area and comfortable seating',
          category: 'Basement',
          year: '2024',
          client: 'Private Residence',
        },
      ],
    },
    {
      title: 'Commercial Projects',
      subtitle: 'Office buildings and retail spaces',
      items: [
        {
          id: '2',
          projectName: 'Commercial Project',
          details:
            'A large-scale commercial build for a local business, featuring energy-efficient design.',
          longDetails:
            'This commercial project demonstrates our expertise in large-scale construction. The building features state-of-the-art energy systems, modern office spaces, and sustainable design principles.',
          location: 'Monterey, CA',
          imgSrc: '/gallery/g-2.png',
          pictureName: 'g-2.png',
          alt: 'Commercial building with modern facade and glass windows',
          category: 'Commercial',
          year: '2023',
          client: 'Local Business',
        },
        {
          id: '6',
          projectName: 'Office Building',
          details: 'Modern office building with open workspaces and collaborative areas.',
          longDetails:
            'This office building project features modern open workspaces, collaborative areas, and energy-efficient systems. The design promotes productivity while maintaining a comfortable work environment.',
          location: 'Monterey, CA',
          imgSrc: '/gallery/g-6.png',
          pictureName: 'g-6.png',
          alt: 'Modern office building with glass facade and open workspaces',
          category: 'Commercial',
          year: '2023',
          client: 'Tech Company',
        },
        {
          id: '8',
          projectName: 'Retail Space',
          details: 'Modern retail space with flexible layout and attractive storefront.',
          longDetails:
            'This retail space project features a flexible layout that can accommodate various business needs. The attractive storefront and interior design create an inviting shopping experience.',
          location: 'Monterey, CA',
          imgSrc: '/gallery/g-8.png',
          pictureName: 'g-8.png',
          alt: 'Modern retail space with glass storefront and flexible interior',
          category: 'Commercial',
          year: '2023',
          client: 'Retail Business',
        },
      ],
    },
    {
      title: 'Renovation & Restoration',
      subtitle: 'Historic preservation and modern updates',
      items: [
        {
          id: '3',
          projectName: 'Historic Renovation',
          details:
            'Complete renovation of a historic Monterey property, preserving its original charm.',
          longDetails:
            'This historic renovation project required careful attention to detail to preserve the original character while modernizing the infrastructure. We maintained the architectural integrity while adding modern amenities.',
          location: 'Monterey, CA',
          imgSrc: '/gallery/g-3.png',
          pictureName: 'g-3.png',
          alt: 'Historic building renovation with preserved architectural details',
          category: 'Renovation',
          year: '2023',
          client: 'Historic Property Owner',
        },
      ],
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
    <Card className="w-full max-w-sm h-96 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative w-full h-48 mb-4">
        <Image src={project.imgSrc} alt={project.alt} fill className="object-cover rounded-lg" />
        <div className="absolute top-2 right-2">
          <Tag value={project.category} severity="info" />
        </div>
      </div>

      <div className="flex flex-col h-32">
        <h3 className="text-xl font-bold text-blue-900 mb-2">{project.projectName}</h3>
        <p className="text-gray-600 text-sm flex-grow line-clamp-3">{project.details}</p>

        <div className="flex items-center justify-between mt-3">
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
      </div>

      <div className="mt-4">
        <Button
          label="View Details"
          icon="pi pi-eye"
          className="w-full"
          severity="secondary"
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
