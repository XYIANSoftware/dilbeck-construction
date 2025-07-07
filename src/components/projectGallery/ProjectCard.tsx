'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { Skeleton } from 'primereact/skeleton';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { GalleryItem } from '@/constants';

/**
 * ProjectCard with enhanced functionality and modal details
 */
export function ProjectCard({
  imgSrc,
  projectName,
  details,
  longDetails,
  location,
  category,
  year,
  client,
  alt,
}: GalleryItem) {
  const [flipped, setFlipped] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  const handleFlip = async () => {
    try {
      const { animate } = await import('animejs');

      if (!cardRef.current) return;

      if (!flipped) {
        animate(cardRef.current, {
          rotateY: '180deg',
          duration: 700,
          ease: 'easeInOut(2)',
        });
      } else {
        animate(cardRef.current, {
          rotateY: '0deg',
          duration: 700,
          ease: 'easeInOut(2)',
        });
      }
      setFlipped(!flipped);
    } catch (error) {
      console.warn('Anime.js failed to load:', error);
      setFlipped(!flipped);
    }
  };

  const handleViewDetails = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="perspective-1000 w-full h-80" onClick={handleFlip}>
        <div
          ref={cardRef}
          className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer"
          style={{ transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
        >
          {/* Front - Image with overlay */}
          <Card className="absolute w-full h-full backface-hidden p-0 overflow-hidden shadow-lg">
            <div className="relative w-full h-full">
              {!loaded && <Skeleton width="100%" height="100%" className="rounded-xl" />}
              <Image
                src={imgSrc}
                alt={alt}
                fill
                className={`object-cover w-full h-full transition-opacity duration-500 ${
                  loaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setLoaded(true)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/20 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-4">
                <h3 className="text-white font-bold text-xl mb-2">{projectName}</h3>
                <p className="text-white/90 text-sm line-clamp-2 mb-2">{details}</p>
                <div className="flex items-center gap-2 text-white/80 text-xs">
                  {category && (
                    <span className="bg-blue-600 px-2 py-1 rounded-full">{category}</span>
                  )}
                  {year && <span>• {year}</span>}
                </div>
              </div>
            </div>
          </Card>

          {/* Back - Details with glossy button */}
          <Card
            className="absolute w-full h-full backface-hidden bg-gradient-to-br from-blue-900 to-blue-800 text-white flex flex-col justify-between p-4 shadow-lg"
            style={{ transform: 'rotateY(180deg)' }}
          >
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-3 text-center">{projectName}</h3>
              <p className="text-sm leading-relaxed text-white/90 mb-4">{details}</p>

              <div className="space-y-2 text-sm">
                {location && (
                  <div className="flex items-center gap-2">
                    <i className="pi pi-map-marker text-blue-300"></i>
                    <span>{location}</span>
                  </div>
                )}
                {category && (
                  <div className="flex items-center gap-2">
                    <i className="pi pi-tag text-blue-300"></i>
                    <span>{category}</span>
                  </div>
                )}
                {year && (
                  <div className="flex items-center gap-2">
                    <i className="pi pi-calendar text-blue-300"></i>
                    <span>{year}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-center mt-4">
              <Button
                label="View Details"
                icon="pi pi-eye"
                className="glossy-button"
                onClick={handleViewDetails}
              />
            </div>
          </Card>
        </div>
      </div>

      {/* Project Details Modal */}
      <Dialog
        visible={showModal}
        onHide={handleCloseModal}
        header={projectName}
        className="w-full max-w-2xl"
        modal
        closeOnEscape
        closeIcon="pi pi-times"
      >
        <div className="space-y-6">
          {/* Project Image */}
          <div className="relative w-full h-64 rounded-lg overflow-hidden">
            <Image src={imgSrc} alt={alt} fill className="object-cover" />
          </div>

          {/* Project Details */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {location && (
                <div className="flex items-center gap-2">
                  <i className="pi pi-map-marker text-blue-600"></i>
                  <span className="font-semibold">Location:</span>
                  <span>{location}</span>
                </div>
              )}
              {category && (
                <div className="flex items-center gap-2">
                  <i className="pi pi-tag text-blue-600"></i>
                  <span className="font-semibold">Category:</span>
                  <span>{category}</span>
                </div>
              )}
              {year && (
                <div className="flex items-center gap-2">
                  <i className="pi pi-calendar text-blue-600"></i>
                  <span className="font-semibold">Year:</span>
                  <span>{year}</span>
                </div>
              )}
              {client && (
                <div className="flex items-center gap-2">
                  <i className="pi pi-user text-blue-600"></i>
                  <span className="font-semibold">Client:</span>
                  <span>{client}</span>
                </div>
              )}
            </div>

            {/* Project Description */}
            <div>
              <h4 className="font-semibold text-lg mb-2">Project Description</h4>
              <p className="text-gray-700 leading-relaxed">{longDetails || details}</p>
            </div>

            {/* Call to Action */}
            <div className="flex justify-center pt-4">
              <Button
                label="Get a Quote"
                icon="pi pi-phone"
                className="glossy-button"
                onClick={() => {
                  handleCloseModal();
                  window.open('tel:+18314228213');
                }}
              />
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}
