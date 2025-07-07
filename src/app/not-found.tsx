'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Page Not Found</h2>
        <p className="text-blue-700 mb-8 max-w-md">
          The page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted.
        </p>
        <Link
          href="/"
          className="btn-primary inline-block px-6 py-3 rounded font-semibold text-white bg-blue-700 hover:bg-blue-800 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
