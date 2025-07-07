'use client';
import { Card } from 'primereact/card';
import { Button } from '@/components/common';
import { companyInfo } from '@/constants';

export default function ContactPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient text-glow">Contact Us</h1>
        <p className="text-lg text-slate-300 mb-8 max-w-xl">
          We&apos;d love to hear from you! Reach out for a quote, project inquiry, or just to say
          hello.
        </p>
        <Card className="card-glass p-8 w-full flex flex-col items-center mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-bold text-amber-400 mb-2">Location</h2>
              <p className="text-slate-300 mb-2">{companyInfo.address}</p>
              <Button
                label="Get Directions"
                icon="pi pi-map-marker"
                className="btn-secondary"
                onClick={() =>
                  window.open(
                    `https://maps.google.com/?q=${encodeURIComponent(companyInfo.address)}`
                  )
                }
              />
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-bold text-amber-400 mb-2">Phone</h2>
              <p className="text-slate-300 mb-2">{companyInfo.phone}</p>
              <Button
                label="Call Now"
                icon="pi pi-phone"
                className="btn-primary"
                onClick={() => window.open(`tel:${companyInfo.phone}`)}
              />
            </div>
          </div>
        </Card>
        <div className="w-full flex flex-col items-center justify-center mb-8">
          <iframe
            title="Google Maps"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              companyInfo.address
            )}&output=embed`}
            width="100%"
            height="300"
            className="rounded-xl border-2 border-construction shadow-construction"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
