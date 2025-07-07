'use client';

import Image from 'next/image';
import { Button } from 'primereact/button';
import { companyInfo } from '@/constants';

/**
 * Hero section component with company introduction
 */
export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-8">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/40" />

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center justify-center text-center">
        <div className="mb-8 flex flex-col items-center justify-center">
          <Image
            src="/D_logo.png"
            alt={`${companyInfo.name} Logo`}
            width={120}
            height={120}
            className="object-contain mx-auto mb-6 shadow-construction"
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gradient text-glow">
            {companyInfo.name}
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-6 max-w-3xl mx-auto">
            Building Excellence, Crafting Dreams
          </p>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center justify-around gap-8 mb-12">
          <div className="card-glass p-8 rounded-2xl w-full md:w-1/2 max-w-md flex flex-col items-center">
            <h2 className="text-2xl font-bold text-amber-400 mb-4 text-center">Our Mission</h2>
            <p className="text-slate-300 leading-relaxed text-center">
              We are committed to delivering exceptional construction services with integrity,
              craftsmanship, and attention to detail. Every project reflects our dedication to
              quality and customer satisfaction.
            </p>
          </div>

          <div className="card-glass p-8 rounded-2xl w-full md:w-1/2 max-w-md flex flex-col items-center">
            <h2 className="text-2xl font-bold text-amber-400 mb-4 text-center">Why Choose Us</h2>
            <ul className="text-slate-300 space-y-2 text-left">
              <li className="flex items-center gap-2">
                <span className="text-amber-400">✓</span>
                Experienced team with decades of expertise
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-400">✓</span>
                Quality materials and superior craftsmanship
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-400">✓</span>
                On-time project delivery and transparent communication
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-400">✓</span>
                Comprehensive construction services
              </li>
            </ul>
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

        <div className="mt-12 card-glass p-6 rounded-xl max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
            <div>
              <p className="text-amber-400 font-semibold">Call Us Today</p>
              <p className="text-slate-300">{companyInfo.phone}</p>
            </div>
            <div>
              <p className="text-amber-400 font-semibold">Visit Our Office</p>
              <p className="text-slate-300">{companyInfo.address}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
