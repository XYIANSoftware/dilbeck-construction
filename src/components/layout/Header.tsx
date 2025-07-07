'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import { navigationItems, companyInfo } from '@/constants';

/**
 * Header component with hamburger menu using PrimeReact Sidebar
 */
export function Header() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    <>
      <header className="w-full flex items-center justify-between px-4 py-2 glass-effect sticky top-0 z-50">
        <div className="flex items-center">
          <Image
            src="/D_logo.png"
            alt={`${companyInfo.name} Logo`}
            width={70}
            height={70}
            className="object-contain"
          />
        </div>
        <Button
          icon="pi pi-bars"
          onClick={() => setSidebarVisible(true)}
          className="p-button-text p-button-rounded"
          aria-label="Menu"
        />
      </header>

      <Sidebar
        visible={sidebarVisible}
        position="right"
        onHide={() => setSidebarVisible(false)}
        className="w-80"
        showCloseIcon={true}
      >
        <div className="flex flex-col gap-6 p-4">
          <div className="text-center mb-6">
            <Image
              src="/D_logo.png"
              alt={`${companyInfo.name} Logo`}
              width={80}
              height={80}
              className="object-contain mx-auto mb-2"
            />
            <h2 className="text-xl font-bold text-blue-900">{companyInfo.name}</h2>
          </div>

          <nav className="flex flex-col gap-2">
            {navigationItems.map(item => (
              <Link key={item.href} href={item.href} onClick={() => setSidebarVisible(false)}>
                <Button
                  label={item.label}
                  icon={item.icon}
                  className="w-full justify-start p-button-text p-button-lg"
                  severity="secondary"
                />
              </Link>
            ))}
          </nav>

          <div className="border-t pt-4 mt-4">
            <div className="text-sm text-gray-600 mb-2">
              <strong>Contact:</strong>
            </div>
            <div className="text-sm text-gray-600 mb-1">📞 {companyInfo.phone}</div>
            <div className="text-sm text-gray-600">📍 {companyInfo.address}</div>
          </div>
        </div>
      </Sidebar>
    </>
  );
}
