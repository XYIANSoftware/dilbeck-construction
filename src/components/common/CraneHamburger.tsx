'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { navigationItems } from '@/constants/navigation';
import { companyInfo } from '@/constants/companyInfo';

const CraneHamburger = () => {
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const initAnimations = async () => {
      try {
        const animeModule = await import('animejs');
        const anime = animeModule.default || animeModule;

        if (visible) {
          anime({
            targets: '.crane-line',
            rotate: 45,
            translateY: -8,
            easing: 'easeInOutQuad',
            duration: 600,
          });
          anime({
            targets: '.crane-hook',
            rotate: -45,
            translateY: 8,
            easing: 'easeInOutQuad',
            duration: 600,
          });
        } else {
          anime({
            targets: ['.crane-line', '.crane-hook'],
            rotate: 0,
            translateY: 0,
            easing: 'easeInOutQuad',
            duration: 600,
          });
        }
      } catch (error) {
        console.warn('Anime.js failed to load:', error);
      }
    };

    initAnimations();
  }, [visible]);

  const handlePhoneClick = () => {
    window.open('tel:+18314228213');
  };

  const handleLocationClick = () => {
    router.push('/contact');
  };

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
        <div
          className="cursor-pointer p-3 hover:bg-blue-100 rounded-lg transition-colors"
          onClick={() => setVisible(!visible)}
          aria-label="Menu"
        >
          <div className="crane-line w-12 h-1.5 bg-blue-700 mb-2 rounded-full shadow-md" />
          <div className="crane-line w-12 h-1.5 bg-blue-700 mb-2 rounded-full shadow-md" />
          <div className="crane-hook w-10 h-1.5 bg-blue-700 rounded-full ml-2 shadow-md" />
        </div>
      </header>

      <Sidebar
        visible={visible}
        onHide={() => setVisible(false)}
        position="right"
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
              <Button
                key={item.href}
                label={item.label}
                icon={item.icon}
                className="w-full justify-start p-button-text p-button-lg hover:bg-blue-100 transition-colors"
                severity="secondary"
                onClick={() => {
                  setVisible(false);
                  router.push(item.href);
                }}
              />
            ))}
          </nav>

          <div className="border-t border-blue-200 pt-4 mt-4">
            <div className="text-sm text-blue-700 mb-2">
              <strong>Contact:</strong>
            </div>
            <div
              className="text-sm text-blue-600 mb-1 cursor-pointer hover:text-blue-800 transition-colors"
              onClick={handlePhoneClick}
            >
              📞 +1 (831) 422-8213
            </div>
            <div
              className="text-sm text-blue-600 cursor-pointer hover:text-blue-800 transition-colors"
              onClick={handleLocationClick}
            >
              📍 {companyInfo.address}
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
};

export default CraneHamburger;
