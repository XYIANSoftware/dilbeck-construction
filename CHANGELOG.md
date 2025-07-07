# Changelog

## [1.3.0] - Animated Crane Hamburger & Dark Theme

### Added

- **Animated Crane Hamburger Menu**: Replaced simple hamburger with construction-themed animated crane icon
- **Dark Construction Theme**: Complete theme overhaul with slate/amber color scheme
- **Animated Background**: Construction-themed animated background with gears, bolts, and crane elements
- **50% Transparency**: All component backgrounds now have 50% opacity for layered visual effect
- **Anime.js Integration**: Smooth animations for hamburger menu and background elements

### Updated

- **Header Component**: Replaced with CraneHamburger component featuring animated crane icon
- **Color Scheme**: Updated to dark theme with amber accents and slate backgrounds
- **Glass Effects**: Enhanced transparency and backdrop blur effects throughout
- **Navigation**: Improved sidebar styling with hover effects and better visual hierarchy
- **Hero Section**: Updated styling to match dark theme with gradient text effects

### Fixed

- **Build Errors**: Resolved client component serialization issues
- **Import Issues**: Fixed barrel export problems causing build failures
- **Linter Errors**: Cleaned up all TypeScript and ESLint warnings

### Technical Improvements

- **Client Components**: Properly marked all interactive components with 'use client'
- **Direct Imports**: Replaced barrel exports with direct imports to prevent serialization issues
- **Animation Performance**: Optimized anime.js usage with error handling and fallbacks
- **Theme Consistency**: Unified color scheme across all components and pages

## [1.2.0] - Major UI Improvements & Contact Page

### Added

- Added new Contact page at `/contact` with company information and Google Maps embed
- Added hours of operation to company info constants
- Added Contact navigation item to the menu
- Implemented hamburger menu using PrimeReact Sidebar for consistent desktop/mobile experience
- Added PrimeReactProvider wrapper for proper theming and ripple effects
- Added global PrimeReact theme, core styles, icons, and PrimeFlex imports

### Updated

- Refactored Header to use PrimeReact Sidebar with hamburger menu
- Updated ProjectCard to use PrimeReact Card component for better theming
- Enhanced navigation with icons and professional styling
- Improved overall PrimeReact theming throughout the application
- Updated company assets to use D_logo.png and front_dns.jpg
- Added favicon using D_logo.ico

### Technical Improvements

- Proper PrimeReact theming with lara-light-blue theme
- Consistent UI components using PrimeReact Card, Button, Sidebar
- Better mobile responsiveness with hamburger menu
- Enhanced user experience with smooth animations and transitions
- Improved accessibility with proper ARIA labels and semantic HTML

## [1.1.3] - Gallery Images Integration

### Updated

- Updated gallery list to reflect actual available images (g-1.png through g-9.png)
- Removed g-10.png reference since the image doesn't exist
- Updated GalleryCarousel to dynamically use first 5 images from galleryItems array
- Improved carousel data consistency by using centralized gallery data

### Technical Improvements

- Enhanced data consistency between carousel and gallery grid
- Improved maintainability by using single source of truth for gallery data
- Better error prevention by only referencing existing images
- Cleaner code structure with dynamic carousel image generation

## [1.1.2] - Turbopack & Anime.js Import Fixes

### Fixed

- Fixed Turbopack import error with anime.js in development mode
- Updated anime.js imports to use dynamic imports for better compatibility
- Added error handling and fallbacks for anime.js loading failures
- Fixed gear icon reference to use existing icon-1.png file
- Added graceful degradation when animations fail to load

### Technical Improvements

- Improved development experience with Turbopack compatibility
- Enhanced error handling for third-party library imports
- Added fallback CSS transitions when JavaScript animations fail
- Better type safety with proper error handling

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

## [1.2.1] - Centered Layout & Visual Balance

### Updated

- Centered and visually balanced all main wrappers (Hero, Gallery, Contact)
- Hero section: logo, text, and cards are centered and spaced evenly
- Gallery page: heading, carousel, and grid are centered and aligned
- Contact page: heading, cards, and map are centered and visually balanced
- Improved flex/grid usage for consistent modern layout
- Fixed minor linter errors and improved accessibility
