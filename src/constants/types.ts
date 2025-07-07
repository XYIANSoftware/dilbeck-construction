/**
 * Gallery item interface with all required properties
 */
export interface GalleryItem {
  id: string;
  projectName: string;
  details: string;
  longDetails: string;
  location: string;
  imgSrc: string;
  pictureName: string;
  alt: string;
  category?: string;
  year?: string;
  client?: string;
}

/**
 * Top carousel image interface
 */
export interface CarouselImage {
  id: string;
  title: string;
  src: string;
  alt: string;
}

/**
 * Company information interface
 */
export interface CompanyInfo {
  name: string;
  phone: string;
  address: string;
  email?: string;
  website?: string;
  founded: string;
  description: string;
}

/**
 * Navigation item interface
 */
export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}
