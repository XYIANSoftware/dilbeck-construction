/**
 * Footer component with company info and contact details
 */
export function Footer() {
  return (
    <footer className="w-full flex flex-col md:flex-row items-center justify-between px-4 py-4 bg-white/80 backdrop-blur border-t border-blue-100 shadow-inner mt-8">
      <span className="text-sm text-blue-900 font-semibold">
        © {new Date().getFullYear()} Dilbeck & Sons Construction
      </span>
      <span className="text-sm text-blue-800 mt-2 md:mt-0">
        Contact:{' '}
        <a href="tel:831-555-1234" className="underline hover:text-blue-600">
          831-555-1234
        </a>{' '}
        | 123 Main St, Monterey, CA
      </span>
    </footer>
  );
}
