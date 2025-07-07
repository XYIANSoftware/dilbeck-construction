import Link from 'next/link';
import Image from 'next/image';
import { navigationItems, companyInfo } from '@/constants';

/**
 * Header component with logo, company name, and navigation
 */
export function Header() {
  return (
    <header className="w-full flex items-center justify-between px-4 py-2 glass-effect sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <Image
          src="/icon-main.png"
          alt={`${companyInfo.name} Logo`}
          width={40}
          height={40}
          className="rounded-full"
        />
        <span className="text-xl font-bold text-blue-900 tracking-tight">{companyInfo.name}</span>
      </div>
      <nav className="flex gap-4">
        {navigationItems.map(item => (
          <Link
            key={item.href}
            href={item.href}
            className="text-blue-800 hover:text-blue-600 font-medium transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
