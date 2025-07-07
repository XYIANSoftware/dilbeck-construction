# Changelog

## [1.1.1] - Netlify Deployment Configuration

### Added

- Added Netlify deployment configuration with `netlify.toml`
- Updated Next.js config for static export with `output: 'export'`
- Added proper asset prefix for production deployment
- Configured unoptimized images for static export
- Added trailing slash support for Netlify compatibility

### Updated

- Updated sitemap.xml to use correct Netlify domain (dilbeck.netlify.app)
- Updated company info to include Netlify website URL
- Added export script to package.json for static build
- Configured proper redirects and headers for Netlify

### Technical Improvements

- Ensured compatibility with both local development and Netlify deployment
- Added security headers for production deployment
- Configured proper static file serving for Netlify
- Optimized build process for static hosting

## [1.1.0] - Organized Structure & Gallery Updates

### Added

- Created organized folder structure with `constants/` and `styles/` folders
- Added strongly typed interfaces for all data structures
- Created `GalleryItem` interface with comprehensive properties (projectName, details, longDetails, location, imgSrc, pictureName, alt, category, year, client)
- Added `galleryList.ts` with 10 gallery items using new naming convention (g-1.png through g-10.png)
- Created `companyInfo.ts` with centralized company information
- Created `navigation.ts` with navigation items
- Added `types.ts` with all TypeScript interfaces
- Created `globals.css` with custom CSS variables and utility classes
- Added barrel exports for all constants and styles

### Updated

- Updated all components to use constants from centralized location
- Refactored GalleryCarousel to use new CarouselImage interface
- Updated ProjectCard to use GalleryItem interface with proper property names
- Updated ProjectGrid to use galleryItems from constants
- Updated Header and Footer to use company info from constants
- Updated Hero component to use company info from constants
- Applied glass-effect styling throughout components
- Updated image paths to use new naming convention (g-1.png, g-2.png, etc.)

### Technical Improvements

- Improved type safety with strongly typed interfaces
- Centralized data management for easier maintenance
- Added custom CSS variables for consistent theming
- Improved component organization and reusability
- Enhanced maintainability with barrel exports

## [1.0.0] - Complete Initial Implementation

### Added

- Project bootstrapped with Next.js (App Router, TypeScript, Tailwind, import alias @/\*)
- Installed PrimeReact, PrimeFlex, PrimeIcons, Anime.js
- Set up organized component structure (common, layout, home, projectGallery, inputs)
- Created Header and Footer components with navigation
- Built Home page with Hero and AboutSection components
- Built Gallery page with Carousel and ProjectGrid components
- Implemented ProjectCard with flip animations using anime.js
- Added subtle animated gear background using anime.js
- Integrated PrimeReact Skeleton loaders for all images
- Added SEO optimization with metadata and sitemap.xml
- Implemented mobile-first responsive design with PrimeFlex and Tailwind
- Added Prettier config for code style consistency
- Created user-focused README and comprehensive CHANGELOG

### Technical Features

- Lara Light Blue PrimeReact theme for professional appearance
- Client-side animations with anime.js for card flips and background elements
- Barrel exports for clean component imports
- TypeScript interfaces for all component props
- Proper error handling and loading states
- Optimized build with no linting errors

## [0.1.0] - Initial Modern Implementation

- Project bootstrapped with Next.js (App Router, TypeScript, Tailwind, import alias @/\*)
- Installed PrimeReact, PrimeFlex, PrimeIcons, Anime.js
- Set up project structure for components, pages, and layout
- Added Prettier config for code style consistency
- Ready for Home and Gallery page development
