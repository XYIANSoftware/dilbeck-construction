# Changelog

All notable changes to this project will be documented in this file.

## [1.7.3] - 2024-12-19

### Changed

- **Sidebar Layout**: Reorganized sidebar into proper header, main navigation, and footer sections
- **Header Section**: Moved logo and company title to top of sidebar with horizontal layout
- **Navigation Area**: Main menu now occupies the center area with proper spacing
- **Footer Section**: Contact information moved to bottom and "snapped" to footer area
- **Icon Integration**: Restored PrimeReact icons in navigation buttons for better visual hierarchy
- **Layout Structure**: Used flexbox layout with flex-shrink-0 for header/footer and flex-1 for main content

## [1.7.2] - 2024-12-19

### Fixed

- **Crane Hamburger Menu**: Completely redesigned the hamburger menu to actually look like a crane with proper arm, hook, and tower elements
- **Crane Animation**: Fixed animation to show realistic crane movement (arm lifts, hook swings, base extends)

### Changed

- **Sidebar Styling**: Enhanced sidebar with glossy glass effect, gradient backgrounds, and improved visual hierarchy
- **Menu Buttons**: Removed icons from navigation buttons for cleaner, more professional appearance
- **Sidebar Layout**: Improved spacing, typography, and hover effects for better user experience
- **Visual Effects**: Added drop shadows, blur effects, and gradient overlays for premium feel

## [1.7.1] - 2024-12-19

### Fixed

- **Gallery Images**: Fixed gallery display to use actual images from public/gallery folder (g-1.png through g-9.png)
- **Project Data**: Updated GalleryProjectDisplay to use real gallery data from constants instead of hardcoded data
- **Image Paths**: Ensured all gallery images reference correct paths (/gallery/g-1.png, etc.)

## [1.7.0] - 2024-12-19

### Added

- **Complete Gallery Redesign**: Implemented new GalleryProjectDisplay component with organized project sections
- **Project Categories**: Organized gallery into Residential, Commercial, and Renovation sections
- **Enhanced Modal**: Improved project detail modal with comprehensive information and call-to-action
- **Centered Layout**: All gallery cards now properly centered using PrimeReact components
- **CSS Utilities**: Added necessary CSS classes for improved gallery layout and styling

### Changed

- **Gallery Structure**: Replaced simple grid with categorized project sections
- **Card Design**: Enhanced project cards with better information hierarchy and styling
- **Modal Content**: Added detailed project information including location, year, client, and full description

## [1.6.2] - 2024-12-19

### Added

- **Complete anime.js v4 Implementation**: Updated all components to use the latest anime.js v4 syntax
- **Proper Animation Scoping**: Implemented createScope for better animation management
- **Enhanced Crane Hamburger**: Fixed visibility issues with proper anime.js v4 setup

### Changed

- **Updated to anime.js v4.0.0**: Migrated from v3.2.1 to latest version
- **Animation Syntax**: Replaced old `anime()` function with new `animate()` method
- **Easing Functions**: Updated to new easing syntax (e.g., `easeInOut(2)` instead of `easeInOutQuad`)
- **Proper Imports**: Using destructured imports (`{ animate, createScope, stagger }`)

### Fixed

- **Crane Hamburger Visibility**: Resolved the "3 dots moving" issue with proper animation setup
- **Animation Performance**: Better animation management with proper scoping and cleanup
- **TypeScript Errors**: Fixed all type issues with anime.js v4 integration
- **Build Errors**: Resolved all compilation issues related to anime.js

### Technical

- **Scope Management**: Implemented proper animation scoping with createScope
- **Cleanup Functions**: Added proper revert() calls for animation cleanup
- **Method Registration**: Used self.add() for registering animation methods
- **Enhanced Type Safety**: Better TypeScript integration with anime.js v4

## [1.6.1] - 2024-12-19

### Fixed

- **MetadataBase Warning**: Added metadataBase property to resolve social media image warnings
- **Web App Manifest**: Created site.webmanifest file to eliminate 404 errors
- **Console Errors**: Resolved all metadata and manifest-related console warnings
- **PWA Support**: Added proper web app manifest for better mobile experience

### Technical

- **Enhanced SEO**: Proper metadata configuration for social media sharing
- **PWA Features**: Added manifest with app icons, theme colors, and display settings
- **Clean Console**: Eliminated all metadata and manifest-related warnings

## [1.6.0] - 2024-12-19

### Fixed

- **Anime.js Compatibility**: Updated all animation components to use anime.js v4 syntax
- **Crane Hamburger Menu**: Fixed animation using createScope and animate methods
- **TypeScript Errors**: Resolved all TypeScript compilation errors related to anime.js v4
- **Build Process**: Ensured successful build with no linter errors

### Changed

- **Animation Syntax**: Updated from anime.js v3 to v4 API throughout the application
- **Component Updates**: Modified CraneHamburger, Hero, and other animated components

## [1.5.0] - 2024-12-19

### Fixed

- **Console Warnings**: Added metadataBase to layout metadata to resolve missing metadataBase warning
- **Web Manifest**: Created site.webmanifest file and updated layout to reference it, fixing 404 error
- **Footer Layout**: Removed "Our Services" section and adjusted footer grid to two columns for better balance

### Added

- **Site Manifest**: Added proper web app manifest for better PWA support
- **Metadata Configuration**: Enhanced metadata configuration for better SEO

## [1.4.0] - 2024-12-19

### Fixed

- **Gallery Cards**: Major rework of ProjectCard component with improved button styling and content orientation
- **Card Layout**: Fixed image visibility and card aspect ratio for better presentation
- **Modal Functionality**: Added working modal dialog for detailed project information with call-to-action
- **Hamburger Menu**: Increased size and improved visibility of crane hamburger menu icon
- **Footer**: Removed emergency service section and adjusted layout for better balance

### Changed

- **Card Design**: Enhanced project cards with better information hierarchy and PrimeReact integration
- **Modal System**: Implemented comprehensive modal system for project details
- **Navigation**: Improved hamburger menu visibility and user experience

## [1.3.0] - 2024-12-19

### Fixed

- **CSS Classes**: Added missing CSS classes for 3D card flip effects in globals.css
- **Gallery Layout**: Fixed gallery card display and animation issues
- **Build Process**: Resolved all build errors and ensured successful compilation

### Added

- **3D Effects**: Implemented proper 3D card flip animations for gallery items
- **Enhanced Styling**: Added comprehensive CSS utilities for gallery interactions

## [1.2.0] - 2024-12-19

### Fixed

- **Server/Client Boundary**: Resolved all server component issues by properly marking client components
- **Layout Structure**: Fixed AppShell component to properly wrap interactive elements
- **Build Errors**: Eliminated all TypeScript and build compilation errors
- **PostCSS Configuration**: Fixed PostCSS config file syntax and removed unused TypeScript directives

### Changed

- **Component Architecture**: Restructured layout to use client-side AppShell for interactive elements
- **Theme Implementation**: Applied lighter blue theme throughout the application
- **Animation Integration**: Added crane animation above title and other requested animations

## [1.1.0] - 2024-12-19

### Fixed

- **Multi-page Layout**: Restored original multi-page structure with proper content separation
- **Navigation**: Fixed hamburger menu functionality and page routing
- **Theme**: Applied lighter blue theme instead of dark slate/amber
- **Content Organization**: Properly separated content across Home, Gallery, and Contact pages

### Changed

- **Page Structure**: Reverted to multi-page layout with distinct Home, Gallery, and Contact pages
- **Theme Colors**: Updated to lighter, more professional blue color scheme
- **Navigation**: Improved hamburger menu with proper page routing

## [1.0.0] - 2024-12-19

### Added

- **Initial Release**: Complete Next.js construction website with TypeScript, Tailwind, and PrimeReact
- **Core Pages**: Home, Gallery, and Contact pages with professional design
- **Components**: Header, Footer, Hero, AboutSection, GalleryCarousel, ProjectGrid, ProjectCard
- **Animations**: Anime.js integration with animated gear background
- **Theme**: Dark slate/amber theme with 50% transparent glass-effect backgrounds
- **Navigation**: Animated crane hamburger menu with smooth transitions
- **Responsive Design**: Mobile-first design with PrimeReact components
- **PrimeReact Integration**: Full theming and component library integration
- **Contact Page**: Company information with Google Maps embed
- **Gallery**: Project showcase with categorized sections and modal details

### Technical

- **Next.js 15.3.3+ with App Router**
- **TypeScript for type safety**
- **Tailwind CSS for utility-first styling**
- **PrimeReact for UI components**
- **Anime.js for smooth animations**
- **ESLint and Prettier for code quality**

## [1.2.1] - Centered Layout & Visual Balance

### Updated

- Centered and visually balanced all main wrappers (Hero, Gallery, Contact)
- Hero section: logo, text, and cards are centered and spaced evenly
- Gallery page: heading, carousel, and grid are centered and aligned
- Contact page: heading, cards, and map are centered and visually balanced
- Improved flex/grid usage for consistent modern layout
- Fixed minor linter errors and improved accessibility
