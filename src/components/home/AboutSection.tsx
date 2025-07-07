'use client';

/**
 * About section for the home page with company values
 */
export function AboutSection() {
  return (
    <section className="w-full flex flex-col gap-4 py-6 px-4 mt-4 glass-effect rounded-lg shadow justify-items-center justify-content-center align-items-center">
      <h2 className="text-2xl font-semibold text-blue-900 mb-2">About Us</h2>
      <p className="text-blue-800">
        Dilbeck & Sons Construction is a family-owned business rooted in the Monterey community. We
        believe in honest work, transparent communication, and delivering results that stand the
        test of time.
      </p>
      <ul className="list-disc list-inside text-blue-700 mt-2">
        <li>Licensed & insured general contractors</li>
        <li>Residential & commercial expertise</li>
        <li>Committed to safety and sustainability</li>
        <li>Trusted by generations of local families</li>
      </ul>
    </section>
  );
}
