import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Dilbeck & Sons Construction',
  description:
    'Terms of service for Dilbeck & Sons Construction serving Monterey County, California',
  robots: 'noindex, nofollow',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-6">Terms of Service</h1>
          <p className="text-gray-600 mb-6">Last updated: December 19, 2024</p>

          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold text-blue-800 mb-3">1. Agreement to Terms</h2>
              <p className="mb-3">
                By accessing and using the services of Dilbeck & Sons Construction ("we," "our," or
                "us"), you agree to be bound by these Terms of Service. These terms apply to all
                construction services provided in Monterey County, California.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-800 mb-3">2. Services</h2>
              <p className="mb-3">
                Dilbeck & Sons Construction provides general contracting services including but not
                limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Residential construction and remodeling</li>
                <li>Commercial construction projects</li>
                <li>Kitchen and bathroom renovations</li>
                <li>Outdoor construction and landscaping</li>
                <li>Project management and consultation</li>
                <li>Permit acquisition and compliance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-800 mb-3">
                3. Licensing and Compliance
              </h2>
              <p className="mb-3">
                We operate in compliance with all applicable California and Monterey County
                regulations:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>California Contractor's State License Board (CSLB) requirements</li>
                <li>Monterey County building codes and ordinances</li>
                <li>Local zoning and planning regulations</li>
                <li>Environmental protection standards</li>
                <li>Worker safety and insurance requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-800 mb-3">4. Project Agreements</h2>
              <p className="mb-3">
                All construction projects require a written agreement that includes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Detailed scope of work and specifications</li>
                <li>Project timeline and milestones</li>
                <li>Payment schedule and terms</li>
                <li>Warranty information</li>
                <li>Change order procedures</li>
                <li>Dispute resolution process</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-800 mb-3">5. Payment Terms</h2>
              <p className="mb-3">Payment terms are as follows:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Initial deposit required upon contract signing</li>
                <li>Progress payments based on project milestones</li>
                <li>Final payment upon project completion and inspection</li>
                <li>Late payments subject to applicable fees</li>
                <li>All payments must be made in U.S. dollars</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-800 mb-3">
                6. Permits and Inspections
              </h2>
              <p className="mb-3">
                We handle all necessary permits and inspections for your project:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Building permits from Monterey County</li>
                <li>Required inspections during construction</li>
                <li>Final inspection and certificate of occupancy</li>
                <li>Compliance with local building codes</li>
                <li>Environmental and safety inspections as required</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-800 mb-3">
                7. Warranty and Guarantees
              </h2>
              <p className="mb-3">Our work is guaranteed as follows:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>One-year warranty on all workmanship</li>
                <li>Manufacturer warranties on materials and fixtures</li>
                <li>Compliance with California warranty laws</li>
                <li>Prompt response to warranty claims</li>
                <li>Repair or replacement of defective work</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-800 mb-3">
                8. Insurance and Liability
              </h2>
              <p className="mb-3">We maintain comprehensive insurance coverage:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>General liability insurance</li>
                <li>Worker's compensation insurance</li>
                <li>Property damage coverage</li>
                <li>Professional liability insurance</li>
                <li>Compliance with California insurance requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-800 mb-3">9. Change Orders</h2>
              <p className="mb-3">
                Changes to the original scope of work require written change orders:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Detailed description of changes</li>
                <li>Impact on timeline and cost</li>
                <li>Client approval required before work begins</li>
                <li>Updated payment schedule if applicable</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-800 mb-3">10. Dispute Resolution</h2>
              <p className="mb-3">In the event of disputes, we follow this process:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Direct communication to resolve issues</li>
                <li>Mediation if direct resolution fails</li>
                <li>Arbitration in accordance with California law</li>
                <li>Legal action as a last resort</li>
                <li>Venue: Monterey County, California</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-800 mb-3">11. Website Terms</h2>
              <p className="mb-3">By using our website, you agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide accurate information in contact forms</li>
                <li>Not use the website for unlawful purposes</li>
                <li>Respect our intellectual property rights</li>
                <li>Not interfere with website functionality</li>
                <li>Accept our privacy policy</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-800 mb-3">
                12. Limitation of Liability
              </h2>
              <p className="mb-3">
                Our liability is limited to the extent permitted by California law:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Maximum liability limited to project contract amount</li>
                <li>No liability for consequential damages</li>
                <li>Force majeure events excluded</li>
                <li>Client's duty to mitigate damages</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-800 mb-3">13. Governing Law</h2>
              <p className="mb-3">
                These terms are governed by the laws of the State of California. Any disputes shall
                be resolved in the courts of Monterey County, California.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-800 mb-3">14. Contact Information</h2>
              <p className="mb-3">For questions about these Terms of Service, please contact us:</p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p>
                  <strong>Dilbeck & Sons Construction</strong>
                </p>
                <p>Phone: +1 (831) 422-8213</p>
                <p>Address: Monterey County, California</p>
                <p>Email: [Contact email for terms inquiries]</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-800 mb-3">15. Updates to Terms</h2>
              <p>
                We may update these Terms of Service from time to time. We will notify you of any
                material changes by posting the new terms on this page and updating the "Last
                updated" date.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
