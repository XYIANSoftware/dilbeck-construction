import { ContactInfo } from '@/components/contact/ContactInfo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Dilbeck & Sons Construction',
  description:
    'Contact Dilbeck & Sons Construction in Monterey, CA for your construction project. Get a free quote, discuss your building needs, or learn more about our services. Call (831) 422-8213 today!',
  keywords: [
    'contact construction contractor',
    'construction quote Monterey',
    'building contractor contact',
    'construction consultation',
    'free construction estimate',
    'Monterey construction company',
    'construction services contact',
    'building project consultation',
    'Dilbeck Construction contact',
    'construction contractor phone',
  ],
  openGraph: {
    title: 'Contact Us | Dilbeck & Sons Construction',
    description:
      'Contact Dilbeck & Sons Construction in Monterey, CA for your construction project. Get a free quote, discuss your building needs, or learn more about our services.',
    url: 'https://dilbeck.netlify.app/contact',
    siteName: 'Dilbeck & Sons Construction',
    images: [
      {
        url: '/D_logo.png',
        width: 1200,
        height: 630,
        alt: 'Contact Dilbeck & Sons Construction - Professional General Contractors in Monterey CA',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Dilbeck & Sons Construction',
    description:
      'Contact Dilbeck & Sons Construction in Monterey, CA for your construction project. Get a free quote today!',
    images: ['/D_logo.png'],
  },
  alternates: {
    canonical: 'https://dilbeck.netlify.app/contact',
  },
};

export default function ContactPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">Contact Us</h1>
        <p className="text-lg text-blue-800 mb-8 max-w-xl">
          We&apos;d love to hear from you! Reach out for a quote, project inquiry, or just to say
          hello.
        </p>

        <ContactInfo />

        <ContactInfo
          ctaOnly
          heading="Ready to Start Your Project?"
          description={
            "Contact us today to discuss your construction needs. We're here to help bring your vision to life."
          }
        />
      </div>
    </section>
  );
}
