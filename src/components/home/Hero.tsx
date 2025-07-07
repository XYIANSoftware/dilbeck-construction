import Image from 'next/image';

/**
 * Hero section for the home page with mission, history, and image
 */
export function Hero() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between gap-8 py-8 px-4 bg-white/70 rounded-lg shadow-lg mt-6">
      <div className="flex-1 flex flex-col gap-4">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
          Dilbeck & Sons Construction
        </h1>
        <p className="text-lg text-blue-800">
          Building Monterey&apos;s future with integrity, craftsmanship, and family values since
          1978.
        </p>
        <p className="text-base text-blue-700">
          Founded in the heart of Monterey, Dilbeck & Sons Construction has delivered quality
          general contracting services for over four decades. Our team is dedicated to excellence,
          safety, and lasting relationships.
        </p>
      </div>
      <div className="flex-1 flex justify-center">
        <Image
          src="/office-team.jpg"
          alt="Dilbeck & Sons Team"
          width={320}
          height={240}
          className="rounded-xl shadow-md object-cover w-full max-w-xs md:max-w-sm"
        />
      </div>
    </section>
  );
}
