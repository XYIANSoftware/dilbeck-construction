import { GalleryItem } from './types';

/**
 * Gallery items with strongly typed data
 * Images follow naming convention: g-1.png, g-2.png, etc.
 * Available images: g-1.png through g-9.png
 */
export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    projectName: 'Modern Home',
    details: 'A custom-built modern home with sustainable materials and open living spaces.',
    longDetails:
      'This stunning modern home features sustainable building materials, open-concept living spaces, and energy-efficient design. The project showcases our commitment to quality craftsmanship and contemporary architectural trends.',
    location: 'Monterey, CA',
    imgSrc: '/gallery/g-1.png',
    pictureName: 'g-1.png',
    alt: 'Modern home exterior with clean lines and large windows',
    category: 'Residential',
    year: '2024',
    client: 'Private Residence',
  },
  {
    id: '2',
    projectName: 'Commercial Project',
    details:
      'A large-scale commercial build for a local business, featuring energy-efficient design.',
    longDetails:
      'This commercial project demonstrates our expertise in large-scale construction. The building features state-of-the-art energy systems, modern office spaces, and sustainable design principles.',
    location: 'Monterey, CA',
    imgSrc: '/gallery/g-2.png',
    pictureName: 'g-2.png',
    alt: 'Commercial building with modern facade and glass windows',
    category: 'Commercial',
    year: '2023',
    client: 'Local Business',
  },
  {
    id: '3',
    projectName: 'Historic Renovation',
    details: 'Complete renovation of a historic Monterey property, preserving its original charm.',
    longDetails:
      'This historic renovation project required careful attention to detail to preserve the original character while modernizing the infrastructure. We maintained the architectural integrity while adding modern amenities.',
    location: 'Monterey, CA',
    imgSrc: '/gallery/g-3.png',
    pictureName: 'g-3.png',
    alt: 'Historic building renovation with preserved architectural details',
    category: 'Renovation',
    year: '2023',
    client: 'Historic Property Owner',
  },
  {
    id: '4',
    projectName: 'Custom Kitchen',
    details: 'A chef-inspired kitchen remodel with premium finishes and smart appliances.',
    longDetails:
      'This custom kitchen remodel features premium materials, smart home integration, and chef-grade appliances. The design maximizes functionality while creating a beautiful, welcoming space.',
    location: 'Monterey, CA',
    imgSrc: '/gallery/g-4.png',
    pictureName: 'g-4.png',
    alt: 'Custom kitchen with granite countertops and modern appliances',
    category: 'Kitchen',
    year: '2024',
    client: 'Private Residence',
  },
  {
    id: '5',
    projectName: 'Outdoor Living Space',
    details: 'Outdoor living space with deck, pergola, and fire pit for year-round enjoyment.',
    longDetails:
      'This outdoor living space creates a seamless transition between indoor and outdoor living. Features include a custom deck, pergola, fire pit, and landscaping designed for year-round enjoyment.',
    location: 'Monterey, CA',
    imgSrc: '/gallery/g-5.png',
    pictureName: 'g-5.png',
    alt: 'Outdoor deck with pergola and fire pit area',
    category: 'Outdoor',
    year: '2024',
    client: 'Private Residence',
  },
  {
    id: '6',
    projectName: 'Office Building',
    details: 'Modern office building with open workspaces and collaborative areas.',
    longDetails:
      'This office building project features modern open workspaces, collaborative areas, and energy-efficient systems. The design promotes productivity while maintaining a comfortable work environment.',
    location: 'Monterey, CA',
    imgSrc: '/gallery/g-6.png',
    pictureName: 'g-6.png',
    alt: 'Modern office building with glass facade and open workspaces',
    category: 'Commercial',
    year: '2023',
    client: 'Tech Company',
  },
  {
    id: '7',
    projectName: 'Bathroom Remodel',
    details: 'Luxury bathroom remodel with spa-like features and premium fixtures.',
    longDetails:
      'This luxury bathroom remodel transforms an ordinary space into a spa-like retreat. Features include premium fixtures, custom tile work, and thoughtful design details.',
    location: 'Monterey, CA',
    imgSrc: '/gallery/g-7.png',
    pictureName: 'g-7.png',
    alt: 'Luxury bathroom with marble tiles and modern fixtures',
    category: 'Bathroom',
    year: '2024',
    client: 'Private Residence',
  },
  {
    id: '8',
    projectName: 'Retail Space',
    details: 'Modern retail space with flexible layout and attractive storefront.',
    longDetails:
      'This retail space project features a flexible layout that can accommodate various business needs. The attractive storefront and interior design create an inviting shopping experience.',
    location: 'Monterey, CA',
    imgSrc: '/gallery/g-8.png',
    pictureName: 'g-8.png',
    alt: 'Modern retail space with glass storefront and flexible interior',
    category: 'Commercial',
    year: '2023',
    client: 'Retail Business',
  },
  {
    id: '9',
    projectName: 'Basement Finish',
    details: 'Finished basement with entertainment area and additional living space.',
    longDetails:
      'This basement finishing project creates valuable additional living space. The design includes an entertainment area, guest space, and storage solutions while maintaining proper moisture control.',
    location: 'Monterey, CA',
    imgSrc: '/gallery/g-9.png',
    pictureName: 'g-9.png',
    alt: 'Finished basement with entertainment area and comfortable seating',
    category: 'Basement',
    year: '2024',
    client: 'Private Residence',
  },
];
