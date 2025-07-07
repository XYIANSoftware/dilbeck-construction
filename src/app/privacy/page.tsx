import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Dilbeck & Sons Construction',
  description: 'Privacy policy for Dilbeck & Sons Construction serving Monterey County, California',
  robots: 'noindex, nofollow',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-6">Privacy Policy</h1>
          <p className="text-gray-600 mb-6">Last updated: December 19, 2024</p>

          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold text-blue-800 mb-3">1. Introduction</h2>
              <p className="mb-3">
                Dilbeck & Sons Construction ("we," "our," or "us") is committed to protecting your
                privacy. This Privacy Policy explains how we collect, use, and safeguard your
                information when you visit our website or use our construction services in Monterey
                County, California.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-800 mb-3">
                2. Information We Collect
              </h2>
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-blue-700">Personal Information</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Name and contact information (phone, email, address)</li>
                  <li>Project details and specifications</li>
                  <li>Property information for construction projects</li>
                  <li>Communication records and correspondence</li>
                </ul>

                <h3 className="text-lg font-medium text-blue-700">Website Information</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>IP address and browser information</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Contact form submissions</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-800 mb-3">
                3. How We Use Your Information
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide construction services and project management</li>
                <li>Communicate about project updates and scheduling</li>
                <li>Obtain necessary permits and comply with Monterey County regulations</li>
                <li>Process payments and maintain financial records</li>
                <li>Improve our services and website functionality</li>
                <li>Comply with California construction laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-800 mb-3">4. Information Sharing</h2>
              <p className="mb-3">
                We do not sell, trade, or rent your personal information to third parties. We may
                share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>With subcontractors and suppliers necessary for your project</li>
                <li>To comply with Monterey County building codes and regulations</li>
                <li>When required by California law or court order</li>
                <li>With your explicit consent for specific purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-800 mb-3">5. Data Security</h2>
              <p className="mb-3">
                We implement appropriate security measures to protect your personal information,
                including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Secure data storage and transmission</li>
                <li>Limited access to personal information</li>
                <li>Regular security assessments</li>
                <li>Compliance with California data protection laws</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-800 mb-3">
                6. Your Rights (California Residents)
              </h2>
              <p className="mb-3">
                Under the California Consumer Privacy Act (CCPA), you have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Know what personal information we collect and how we use it</li>
                <li>Request deletion of your personal information</li>
                <li>
                  Opt-out of the sale of personal information (we do not sell personal information)
                </li>
                <li>Non-discrimination for exercising your privacy rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-800 mb-3">
                7. Construction-Specific Privacy
              </h2>
              <p className="mb-3">
                As a construction company serving Monterey County, we may collect additional
                information specific to construction projects:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Property surveys and site assessments</li>
                <li>Building permits and inspection records</li>
                <li>Contractor license verification</li>
                <li>Insurance and bonding information</li>
                <li>Project photographs and documentation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-800 mb-3">8. Contact Information</h2>
              <p className="mb-3">
                If you have questions about this Privacy Policy or wish to exercise your privacy
                rights, please contact us:
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p>
                  <strong>Dilbeck & Sons Construction</strong>
                </p>
                <p>Phone: +1 (831) 422-8213</p>
                <p>Address: Monterey County, California</p>
                <p>Email: [Contact email for privacy inquiries]</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-800 mb-3">
                9. Updates to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any
                material changes by posting the new Privacy Policy on this page and updating the
                "Last updated" date.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
