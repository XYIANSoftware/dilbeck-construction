'use client';

import { Button } from 'primereact/button';

/**
 * Services section component with construction services and CTA buttons
 */
export function ServicesSection() {
  return (
    <section className="w-full flex flex-col gap-6 py-8 px-4 glass-effect rounded-lg shadow-lg mt-6 text-center">
      <h2 className="text-2xl font-semibold text-blue-900 mb-4">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">General Contracting</h3>
          <p className="text-blue-700 text-sm">
            Complete construction management from planning to completion with quality craftsmanship.
          </p>
        </div>
        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Commercial Construction</h3>
          <p className="text-blue-700 text-sm">
            Professional commercial building projects with attention to detail and safety standards.
          </p>
        </div>
        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Residential Projects</h3>
          <p className="text-blue-700 text-sm">
            Custom residential construction and renovations tailored to your vision and needs.
          </p>
        </div>
        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Renovation & Remodeling</h3>
          <p className="text-blue-700 text-sm">
            Transform existing spaces with our expert renovation and remodeling services.
          </p>
        </div>
        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Project Management</h3>
          <p className="text-blue-700 text-sm">
            Comprehensive project oversight ensuring timelines, budgets, and quality standards.
          </p>
        </div>
        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Consultation</h3>
          <p className="text-blue-700 text-sm">
            Expert consultation for construction planning, feasibility, and project optimization.
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button
          label="View Our Projects"
          icon="pi pi-images"
          className="btn-primary text-lg px-8 py-3"
          onClick={() => (window.location.href = '/gallery')}
        />
        <Button
          label="Contact Us"
          icon="pi pi-phone"
          className="btn-secondary text-lg px-8 py-3"
          onClick={() => (window.location.href = '/contact')}
        />
      </div>
    </section>
  );
}
