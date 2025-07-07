'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export function PageTransition() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsTransitioning(true);

    // Hide transition after a short delay
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!isTransitioning) return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      {/* Top overlay */}
      <div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 transform origin-left"
        style={{
          animation: 'slideInFromLeft 0.3s ease-out forwards',
        }}
      />

      {/* Bottom overlay */}
      <div
        className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 transform origin-right"
        style={{
          animation: 'slideInFromRight 0.3s ease-out forwards',
        }}
      />

      {/* Left overlay */}
      <div
        className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-600 via-blue-500 to-blue-600 transform origin-top"
        style={{
          animation: 'slideInFromTop 0.3s ease-out forwards',
        }}
      />

      {/* Right overlay */}
      <div
        className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-blue-600 via-blue-500 to-blue-600 transform origin-bottom"
        style={{
          animation: 'slideInFromBottom 0.3s ease-out forwards',
        }}
      />

      <style jsx>{`
        @keyframes slideInFromLeft {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }

        @keyframes slideInFromRight {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }

        @keyframes slideInFromTop {
          0% {
            transform: scaleY(0);
          }
          100% {
            transform: scaleY(1);
          }
        }

        @keyframes slideInFromBottom {
          0% {
            transform: scaleY(0);
          }
          100% {
            transform: scaleY(1);
          }
        }
      `}</style>
    </div>
  );
}
