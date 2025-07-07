import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Dilbeck & Sons Construction',
    short_name: 'Dilbeck Construction',
    description:
      'Professional general contractors in Monterey, CA. Specializing in residential and commercial construction, renovations, and custom building projects.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    categories: ['business', 'construction'],
    lang: 'en',
    orientation: 'portrait',
    scope: '/',
  };
}
