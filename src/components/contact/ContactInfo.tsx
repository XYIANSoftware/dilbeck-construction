'use client';

import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { companyInfo } from '@/constants/companyInfo';

interface ContactInfoProps {
  ctaOnly?: boolean;
  heading?: string;
  description?: string;
}

export function ContactInfo({ ctaOnly = false, heading, description }: ContactInfoProps) {
  const handlePhoneClick = () => {
    window.open('tel:+18314228213');
  };

  const handleEmailClick = () => {
    window.open('mailto:info@dilbeckconstruction.com');
  };

  if (ctaOnly) {
    return (
      <Card className="card-glass p-8 w-full">
        {heading && <h2 className="text-xl font-bold text-blue-900 mb-4 text-center">{heading}</h2>}
        {description && <p className="text-blue-800 text-center mb-6">{description}</p>}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            label="Call Now"
            icon="pi pi-phone"
            className="btn-primary"
            onClick={handlePhoneClick}
          />
          <Button
            label="Send Email"
            icon="pi pi-envelope"
            className="btn-secondary"
            onClick={handleEmailClick}
          />
        </div>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-8">
      <Card className="card-glass p-8 flex flex-col items-center">
        <h2 className="text-xl font-bold text-blue-900 mb-4">Get In Touch</h2>
        <div className="space-y-4 text-center">
          <div>
            <p className="text-blue-700 font-semibold mb-1">Phone</p>
            <Button
              label="+1 (831) 422-8213"
              icon="pi pi-phone"
              className="btn-primary"
              onClick={handlePhoneClick}
            />
          </div>
          <div>
            <p className="text-blue-700 font-semibold mb-1">Email</p>
            <Button
              label="info@dilbeckconstruction.com"
              icon="pi pi-envelope"
              className="btn-secondary"
              onClick={handleEmailClick}
            />
          </div>
        </div>
      </Card>

      <Card className="card-glass p-8 flex flex-col items-center">
        <h2 className="text-xl font-bold text-blue-900 mb-4">Visit Our Office</h2>
        <div className="space-y-4 text-center">
          <div>
            <p className="text-blue-700 font-semibold mb-1">Address</p>
            <p className="text-blue-800">{companyInfo.address}</p>
          </div>
          <div>
            <p className="text-blue-700 font-semibold mb-1">Business Hours</p>
            <div className="text-blue-800 text-sm">
              {companyInfo.hoursOfOperation?.map((hour: string, index: number) => (
                <p key={index}>{hour}</p>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
