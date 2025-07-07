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
            // Animate the crane arm to lift up
            animate('.crane-arm', {
              rotate: -45,
              translateY: -4,
              ease: 'easeInOut(2)',
              duration: 800,
            });

            // Animate the hook to swing down
            animate('.crane-hook', {
              rotate: 45,
              translateY: 4,
              ease: 'easeInOut(2)',
              duration: 800,
            });

            // Animate the base to extend
            animate('.crane-base', {
              scaleX: 1.2,
              ease: 'easeInOut(2)',
              duration: 600,
            });
          });

          self.add('closeMenu', () => {
            // Reset all crane parts to original position
            animate(['.crane-arm', '.crane-hook'], {
              rotate: 0,
              translateY: 0,
              ease: 'easeInOut(2)',
              duration: 600,
            });

            animate('.crane-base', {
              scaleX: 1,
              ease: 'easeInOut(2)',
              duration: 400,
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
          {/* Crane Design */}
          <div className="relative w-12 h-8">
            {/* Crane Base */}
            <div className="crane-base absolute bottom-0 w-full h-1 bg-blue-700 rounded-full shadow-md" />

            {/* Crane Arm */}
            <div className="crane-arm absolute top-2 left-0 w-10 h-1.5 bg-blue-700 rounded-full shadow-md transform origin-left" />

            {/* Crane Hook */}
            <div className="crane-hook absolute top-4 right-0 w-6 h-1 bg-blue-700 rounded-full shadow-md transform origin-right" />

            {/* Crane Tower */}
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-blue-700 rounded-full shadow-md" />
          </div>
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
          <div className="flex-shrink-0 p-6 border-b border-blue-200">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Image
                  src="/D_logo.png"
                  alt={`${companyInfo.name} Logo`}
                  width={60}
                  height={60}
                  className="object-contain drop-shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-xl"></div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-blue-900">{companyInfo.name}</h2>
                <p className="text-sm text-blue-600">Professional Construction</p>
              </div>
            </div>
          </div>

          {/* Main Navigation Section */}
          <div className="flex-1 p-6">
            <nav className="flex flex-col gap-3">
              {navigationItems.map(item => (
                <Button
                  key={item.href}
                  label={item.label}
                  icon={item.icon}
                  className="w-full justify-start p-button-text p-button-lg text-left px-6 py-4 text-lg font-medium hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition-all duration-300 rounded-xl border border-transparent hover:border-blue-200 shadow-sm hover:shadow-md"
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
    </div>
  );
};

export default CraneHamburger;
