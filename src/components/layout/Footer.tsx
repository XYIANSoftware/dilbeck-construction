import { companyInfo } from '@/constants';

/**
 * Footer component with company information and links
 */
export function Footer() {
  return (
    <footer className="glass-effect mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-amber-400 mb-4">{companyInfo.name}</h3>
            <p className="text-slate-300 mb-4">
              Building excellence with integrity and craftsmanship since 1978.
            </p>
            <div className="space-y-2 text-slate-400">
              <p>📞 {companyInfo.phone}</p>
              <p>📍 {companyInfo.address}</p>
            </div>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-amber-400 mb-4">Our Services</h3>
            <ul className="space-y-2 text-slate-300">
              <li>• General Contracting</li>
              <li>• Commercial Construction</li>
              <li>• Residential Projects</li>
              <li>• Renovation & Remodeling</li>
              <li>• Project Management</li>
            </ul>
          </div>

          {/* Hours */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-amber-400 mb-4">Business Hours</h3>
            <div className="space-y-2 text-slate-300">
              {companyInfo.hoursOfOperation?.map((hour: string, index: number) => (
                <p key={index} className="text-sm">
                  {hour}
                </p>
              ))}
            </div>
            <div className="mt-4">
              <p className="text-amber-400 font-semibold">Emergency Service</p>
              <p className="text-slate-300 text-sm">Available 24/7 for urgent projects</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-8 pt-6 text-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} {companyInfo.name}. All rights reserved. | Built with
            modern web technologies for a professional online presence.
          </p>
        </div>
      </div>
    </footer>
  );
}
