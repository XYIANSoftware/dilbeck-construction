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
        // @ts-expect-error: animejs types do not match runtime usage
        const anime = animeModule.default || animeModule;

        if (visible) {
          anime({
            targets: '.crane-line',
            rotate: 45,
            translateY: -5,
            easing: 'easeInOutQuad',
            duration: 600,
          });
          anime({
            targets: '.crane-hook',
            rotate: -45,
            translateY: 5,
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
          className="cursor-pointer p-2 hover:bg-amber-400/20 rounded-lg transition-colors"
          onClick={() => setVisible(!visible)}
          aria-label="Menu"
        >
          <div className="crane-line w-8 h-1 bg-amber-400 mb-1 rounded shadow-sm" />
          <div className="crane-line w-8 h-1 bg-amber-400 mb-1 rounded shadow-sm" />
          <div className="crane-hook w-6 h-1 bg-amber-400 rounded ml-1 shadow-sm" />
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
            <h2 className="text-xl font-bold text-amber-400">{companyInfo.name}</h2>
          </div>

          <nav className="flex flex-col gap-2">
            {navigationItems.map(item => (
              <Button
                key={item.href}
                label={item.label}
                icon={item.icon}
                className="w-full justify-start p-button-text p-button-lg hover:bg-amber-400/20 transition-colors"
                severity="secondary"
                onClick={() => {
                  setVisible(false);
                  router.push(item.href);
                }}
              />
            ))}
          </nav>

          <div className="border-t border-slate-700 pt-4 mt-4">
            <div className="text-sm text-slate-400 mb-2">
              <strong>Contact:</strong>
            </div>
            <div className="text-sm text-slate-400 mb-1">📞 {companyInfo.phone}</div>
            <div className="text-sm text-slate-400">📍 {companyInfo.address}</div>
          </div>
        </div>
      </Sidebar>
    </>
  );
};

export default CraneHamburger;
