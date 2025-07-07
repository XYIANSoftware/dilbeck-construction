import { ContactInfo } from '@/components/contact/ContactInfo';

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
