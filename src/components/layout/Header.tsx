import Link from "next/link";
import Image from "next/image";

/**
 * Header component with logo, company name, and navigation
 */
export function Header() {
  return (
    <header className="w-full flex items-center justify-between px-4 py-2 bg-white/80 backdrop-blur border-b border-blue-100 shadow-sm sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <Image
          src="/globe.svg"
          alt="Dilbeck & Sons Construction Logo"
          width={40}
          height={40}
          className="rounded-full"
        />
        <span className="text-xl font-bold text-blue-900 tracking-tight">
          Dilbeck & Sons Construction
        </span>
      </div>
      <nav className="flex gap-4">
        <Link
          href="/"
          className="text-blue-800 hover:text-blue-600 font-medium transition-colors"
        >
          Home
        </Link>
        <Link
          href="/gallery"
          className="text-blue-800 hover:text-blue-600 font-medium transition-colors"
        >
          Gallery
        </Link>
      </nav>
    </header>
  );
}
