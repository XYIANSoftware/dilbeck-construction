import { companyInfo } from '@/constants/companyInfo';

/**
 * Footer component with company information and links
 */
export function Footer() {
  const handlePhoneClick = () => {
    window.open('tel:+18314228213');
  };

  const handleLocationClick = () => {
    window.location.href = '/contact';
  };

  return (
    <footer className="glass-effect mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-blue-900 mb-4">{companyInfo.name}</h3>
            <p className="text-blue-800 mb-4">
              Building excellence with integrity and craftsmanship since 1978.
            </p>
            <div className="space-y-2 text-blue-700">
              <div
                className="cursor-pointer hover:text-blue-900 transition-colors"
                onClick={handlePhoneClick}
              >
                📞 +1 (831) 422-8213
              </div>
              <div
                className="cursor-pointer hover:text-blue-900 transition-colors"
                onClick={handleLocationClick}
              >
                📍 {companyInfo.address}
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Business Hours</h3>
            <div className="space-y-2 text-blue-800">
              {companyInfo.hoursOfOperation?.map((hour: string, index: number) => (
                <p key={index} className="text-sm">
                  {hour}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-200 mt-8 pt-6 text-center">
          <p className="text-blue-700 text-sm">
            © {new Date().getFullYear()} {companyInfo.name}. All rights reserved. | Built with
            modern web technologies for a professional online presence.
          </p>
        </div>
      </div>
    </footer>
  );
}
