'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { navigationItems } from '@/constants/navigation';
import { companyInfo } from '@/constants/companyInfo';

const CraneHamburger = () => {
  const [visible, setVisible] = useState(false);
  const router = useRouter();
  const root = useRef<HTMLDivElement>(null);
  const scope = useRef<any>(null);

  useEffect(() => {
    const initAnimations = async () => {
      try {
        const { createScope, animate } = await import('animejs');

        // Create a scope for all animations in this component
        scope.current = createScope({ root }).add((self: any) => {
          // Register animation methods to be used outside the scope
          self.add('openMenu', () => {
            animate('.crane-line', {
              rotate: 45,
              translateY: -8,
              ease: 'easeInOut(2)',
              duration: 600,
            });
            animate('.crane-hook', {
              rotate: -45,
              translateY: 8,
              ease: 'easeInOut(2)',
              duration: 600,
            });
          });

          self.add('closeMenu', () => {
            animate(['.crane-line', '.crane-hook'], {
              rotate: 0,
              translateY: 0,
              ease: 'easeInOut(2)',
              duration: 600,
            });
          });
        });

        // Properly cleanup all anime.js instances when component unmounts
        return () => {
          if (scope.current) {
            scope.current.revert();
          }
        };
      } catch (error) {
        console.warn('Anime.js failed to load:', error);
      }
    };

    initAnimations();
  }, []);

  const handleMenuToggle = () => {
    const newVisible = !visible;
    setVisible(newVisible);

    // Trigger the appropriate animation
    if (scope.current?.methods) {
      if (newVisible) {
        scope.current.methods.openMenu();
      } else {
        scope.current.methods.closeMenu();
      }
    }
  };

  const handlePhoneClick = () => {
    window.open('tel:+18314228213');
  };

  const handleLocationClick = () => {
    router.push('/contact');
  };

  return (
    <div ref={root}>
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
          onClick={handleMenuToggle}
          aria-label="Menu"
        >
          <div className="crane-line w-12 h-1.5 bg-blue-700 mb-2 rounded-full shadow-md" />
          <div className="crane-line w-12 h-1.5 bg-blue-700 mb-2 rounded-full shadow-md" />
          <div className="crane-hook w-10 h-1.5 bg-blue-700 rounded-full ml-2 shadow-md" />
        </div>
      </header>

      <Sidebar
        visible={visible}
        onHide={() => {
          setVisible(false);
          if (scope.current?.methods) {
            scope.current.methods.closeMenu();
          }
        }}
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
                  if (scope.current?.methods) {
                    scope.current.methods.closeMenu();
                  }
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
    </div>
  );
};

export default CraneHamburger;
