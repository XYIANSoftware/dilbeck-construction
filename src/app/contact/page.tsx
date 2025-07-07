'use client';
import { Card } from 'primereact/card';
import { Button } from '@/components/common';
import { companyInfo } from '@/constants';

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center py-8 px-4 min-h-[70vh]">
      <Card title="Contact Us" className="w-full max-w-xl mb-6">
        <div className="flex flex-col gap-4">
          <div>
            <strong>Address:</strong> {companyInfo.address}
          </div>
          <div>
            <strong>Phone:</strong>{' '}
            <a href={`tel:${companyInfo.phone}`} className="text-blue-700 underline">
              {companyInfo.phone}
            </a>
          </div>
          {companyInfo.email && (
            <div>
              <strong>Email:</strong>{' '}
              <a href={`mailto:${companyInfo.email}`} className="text-blue-700 underline">
                {companyInfo.email}
              </a>
            </div>
          )}
          <div>
            <strong>Hours of Operation:</strong>
            <ul className="ml-4 list-disc">
              {companyInfo.hoursOfOperation?.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
          <div className="flex gap-4 mt-2">
            <Button
              label="Call Now"
              icon="pi pi-phone"
              onClick={() => window.open(`tel:${companyInfo.phone}`)}
            />
            <Button
              label="Email"
              icon="pi pi-envelope"
              onClick={() => window.open(`mailto:${companyInfo.email}`)}
              severity="secondary"
            />
          </div>
        </div>
      </Card>
      <Card title="Our Location" className="w-full max-w-xl">
        <div className="w-full h-64 rounded overflow-hidden">
          <iframe
            title="Dilbeck & Sons Construction Location"
            src="https://www.google.com/maps?q=123+Main+St,+Monterey,+CA&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </Card>
    </div>
  );
}
