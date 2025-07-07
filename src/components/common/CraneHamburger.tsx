'use client';

import { useRef, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { navigationItems } from '@/constants/navigation';
import { companyInfo } from '@/constants/companyInfo';
import { PageTransition } from './PageTransition';
import 'primeflex/primeflex.css';

const ICON_SIZE = 44; // px (slightly smaller than logo)

const CraneHamburger = () => {
  const [visible, setVisible] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const root = useRef<HTMLDivElement>(null);

  const handleMenuToggle = () => {
    setVisible(v => !v);
  };

  const handlePhoneClick = () => {
    window.open('tel:+18314228213');
  };

  const handleLocationClick = () => {
    router.push('/contact');
  };

  const isActivePage = (href: string) => {
    // Normalize pathname by removing trailing slash
    const normalizedPathname = pathname.replace(/\/$/, '');
    const normalizedHref = href.replace(/\/$/, '');
    if (normalizedHref === '') {
      return normalizedPathname === '';
    }
    return normalizedPathname === normalizedHref;
  };

  const handleNavigation = (href: string) => {
    setVisible(false);
    router.push(href);
  };

  return (
    <div ref={root}>
      <PageTransition />
      <header className="w-full flex items-center justify-between px-4 py-2 glass-effect sticky top-0 z-50">
        <div className="flex items-center">
          <Image
            src="/D_logo.png"
            alt={`${companyInfo.name} Logo`}
            width={115}
            height={64}
            className="object-contain"
            priority
          />
        </div>
        <div
          className="cursor-pointer p-2 hover:bg-blue-100 rounded-xl transition-all duration-300 border-2 border-blue-300 hover:border-blue-500 hover:shadow-lg flex items-center justify-center"
          style={{ width: ICON_SIZE + 16, height: ICON_SIZE + 16 }}
          onClick={handleMenuToggle}
          aria-label="Menu"
        >
          {/* SVG Crane Hook Icon, animated with CSS */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="crane-hook animate-swing"
            width={ICON_SIZE}
            height={ICON_SIZE}
            fill="none"
            viewBox="0 0 64 64"
            stroke="currentColor"
            strokeWidth="2"
            style={{
              animation: 'swing 2.2s ease-in-out infinite',
              transformOrigin: '32px 2px',
            }}
          >
            {/* Cable */}
            <path d="M32 2 v20" stroke="#2563eb" strokeWidth="3" />
            {/* Pulley */}
            <circle cx="32" cy="30" r="8" fill="#facc15" stroke="#2563eb" strokeWidth="3" />
            {/* Hook */}
            <path d="M32 38 q0 8 6 8 q-6 0 -6 8" stroke="#2563eb" strokeWidth="3" fill="none" />
          </svg>
        </div>
      </header>
      <Sidebar
        visible={visible}
        onHide={() => setVisible(false)}
        position="right"
        className="w-80"
        showCloseIcon={true}
        style={{
          background:
            'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,248,255,0.95) 100%)',
          backdropFilter: 'blur(20px)',
          borderLeft: '1px solid rgba(59, 130, 246, 0.2)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        }}
      >
        <div className="flex flex-col h-full">
          {/* Header Section */}
          <div className="flex-shrink-0 p-6 border-b border-blue-200 text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-1">{companyInfo.name}</h2>
            <p className="text-base text-blue-600">General Contractors</p>
          </div>
          {/* Main Navigation Section */}
          <div className="flex-1 p-6">
            <nav className="flex flex-col gap-3">
              {navigationItems.map((item, idx) => {
                const isActive = isActivePage(item.href);
                return (
                  <Button
                    key={item.href}
                    label={item.label}
                    className={`sidebar-btn w-full h-14 justify-center text-center p-button-text p-button-lg px-6 py-4 text-lg font-medium transition-all duration-300 rounded-xl border shadow-sm hover:shadow-md ${
                      isActive ? 'p-button-info custom-active-menu-btn' : ''
                    }`}
                    severity={isActive ? 'info' : 'secondary'}
                    onClick={() => handleNavigation(item.href)}
                  />
                );
              })}
            </nav>
          </div>
          {/* Footer Section - Contact Info */}
          <div className="flex-shrink-0 p-6 border-t border-blue-200 bg-gradient-to-t from-blue-50/50 to-transparent">
            <div className="text-sm text-blue-700 mb-3 font-semibold">Contact Information</div>
            <div
              className="text-sm text-blue-600 mb-2 cursor-pointer hover:text-blue-800 transition-colors p-2 rounded-lg hover:bg-blue-50 flex items-center gap-2"
              onClick={handlePhoneClick}
            >
              <i className="pi pi-phone text-blue-500"></i>
              +1 (831) 422-8213
            </div>
            <div
              className="text-sm text-blue-600 cursor-pointer hover:text-blue-800 transition-colors p-2 rounded-lg hover:bg-blue-50 flex items-center gap-2"
              onClick={handleLocationClick}
            >
              <i className="pi pi-map-marker text-blue-500"></i>
              {companyInfo.address}
            </div>
          </div>
        </div>
      </Sidebar>
      <style jsx>{`
        @keyframes swing {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(8deg);
          }
          75% {
            transform: rotate(-8deg);
          }
        }
      `}</style>
    </div>
  );
};

export default CraneHamburger;
