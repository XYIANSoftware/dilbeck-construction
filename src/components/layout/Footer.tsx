import { companyInfo } from '@/constants';

/**
 * Footer component with company info and contact details
 */
export function Footer() {
  return (
    <footer className="w-full flex flex-col md:flex-row items-center justify-between px-4 py-4 glass-effect mt-8">
      <span className="text-sm text-blue-900 font-semibold">
        © {new Date().getFullYear()} {companyInfo.name}
      </span>
      <span className="text-sm text-blue-800 mt-2 md:mt-0">
        Contact:{' '}
        <a href={`tel:${companyInfo.phone}`} className="underline hover:text-blue-600">
          {companyInfo.phone}
        </a>{' '}
        | {companyInfo.address}
      </span>
    </footer>
  );
}
