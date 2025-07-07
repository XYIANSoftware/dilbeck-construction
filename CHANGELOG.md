# Changelog

All notable changes to this project will be documented in this file.

## [1.7.0] - 2024-12-19

### Added

- **Complete Gallery Redesign**: New organized project sections with proper titles and structure
- **GalleryProjectDisplay Component**: New component with organized project categories
- **Project Sections**: Residential, Commercial, and Renovation & Restoration sections
- **PrimeReact Card Integration**: Proper use of PrimeReact Card components with centered layout
- **Category Tags**: Visual category indicators using PrimeReact Tag components
- **Enhanced Modal**: Improved project details modal with better layout and information display

### Changed

- **Gallery Layout**: Replaced old carousel and grid with organized project sections
- **Card Design**: Standard PrimeReact cards with proper spacing and hover effects
- **Project Organization**: Projects now organized by category with descriptive titles
- **Responsive Grid**: Better responsive grid system with justify-items-center and align-items-center
- **Content Structure**: Clear section titles (H2) with descriptive subtitles

### Fixed

- **Backwards Cards**: Completely eliminated the backwards card issue
- **Layout Issues**: Fixed all alignment and centering problems
- **Content Orientation**: All project information now displays correctly
- **Modal Functionality**: Enhanced modal with better project details and call-to-action

### Technical

- **Component Architecture**: New GalleryProjectDisplay component with proper TypeScript interfaces
- **PrimeReact Props**: Proper use of PrimeReact component props (severity, size, etc.)
- **CSS Utilities**: Added line-clamp-3 utility for text truncation
- **Grid System**: Implemented responsive grid with proper centering classes
- **State Management**: Clean state management for modal and project selection

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

### Added

- **Project Details Modal**: Click "View Details" button now opens a comprehensive modal
- **Enhanced Project Information**: Modal displays location, category, year, client, and full description
- **Call-to-Action Integration**: "Get a Quote" button in modal that directly calls the company phone
- **Better Card Information**: Added category badges and year indicators on card front
- **Improved Back Card Layout**: Added icons and better information organization

### Changed

- **Fixed Deprecated Properties**: Replaced `onLoadingComplete` with `onLoad` for all images
- **Enhanced Modal Design**: Professional modal with proper spacing and typography
- **Better Card Content**: More detailed information display with icons and proper formatting
- **Improved User Experience**: Clear call-to-action flow from gallery to contact

### Fixed

- **Button Functionality**: "View Details" button now works properly and opens modal
- **JSON Syntax Errors**: Resolved build errors and cache issues
- **Image Loading**: Fixed deprecated property warnings
- **Webpack Cache Issues**: Cleared cache to resolve runtime errors

### Technical

- **Modal Integration**: Added PrimeReact Dialog component for project details
- **Event Handling**: Proper event propagation and modal state management
- **Phone Integration**: Direct phone call functionality from modal
- **Enhanced TypeScript**: Better type safety for all gallery components

## [1.5.0] - 2024-12-19

### Added

- Enhanced hamburger menu with larger, more visible crane animation
- Improved crane line and hook sizing (12px width, 1.5px height)
- Better contrast with blue-700 color and rounded-full styling
- Increased animation translation for more dramatic effect

### Changed

- Completely redesigned gallery cards with fixed aspect ratio (h-80)
- Fixed card content orientation and layout
- Improved image visibility with better overlay gradients
- Added glossy button styling with gradient backgrounds and hover effects
- Enhanced card back design with proper content distribution
- Updated grid spacing for better visual balance

### Fixed

- Resolved hamburger menu visibility issues
- Fixed card content being backwards/incorrectly oriented
- Corrected image and skeleton display issues
- Improved button styling and positioning
- Added proper line-clamp utility for text truncation

### Technical

- Added custom CSS classes for glossy buttons and line-clamp
- Updated ESLint configuration for better compatibility
- Enhanced 3D card flip animations

## [1.4.0] - 2024-12-19

### Added

- Animated crane hamburger menu using Anime.js
- Dark slate/amber theme with 50% transparent glass effects
- Animated construction-themed background with gears, bolts, and crane elements
- Multi-page structure with proper content separation
- AppShell client component for interactive elements

### Changed

- Restored original multi-page layout (Home, Gallery, Contact)
- Implemented lighter blue theme for better readability
- Added crane moving animation above page titles
- Enhanced navigation with hamburger menu for mobile/desktop consistency

### Fixed

- Resolved all server/client boundary issues
- Fixed PostCSS configuration errors
- Removed unused TypeScript expect-error directives
- Properly marked client components with 'use client' directive

### Technical

- Updated to Next.js 15.3.5
- Enhanced TypeScript configuration
- Improved build process and error handling

## [1.3.0] - 2024-12-19

### Added

- PrimeReact theming with global imports
- PrimeReactProvider wrapping for consistent theming
- Hamburger menu using PrimeReact Sidebar
- Gallery cards using PrimeReact Card components
- Original company assets (logo and front office image)

### Changed

- Refactored navigation to hamburger menu for consistent desktop/mobile experience
- Updated gallery cards to use PrimeReact Card components
- Enhanced component structure and organization

### Fixed

- Resolved server/client component boundary issues
- Fixed barrel export imports by switching to direct imports
- Corrected missing 'use client' directives in Hero component

## [1.2.0] - 2024-12-19

### Added

- Animated gear background using Anime.js
- Gallery carousel with rotating project images
- Project grid with flip animation cards
- Contact page with company info and Google Maps embed
- Professional construction-themed animations

### Changed

- Enhanced visual design with construction elements
- Improved user experience with smooth animations
- Better responsive design for mobile devices

## [1.1.0] - 2024-12-19

### Added

- Gallery page with project showcase
- Contact page with company information
- Responsive design improvements
- Enhanced navigation structure

### Changed

- Improved page layout and content organization
- Better mobile responsiveness

## [1.0.0] - 2024-12-19

### Added

- Initial Next.js project setup with TypeScript
- Tailwind CSS for styling
- PrimeReact, PrimeFlex, and PrimeIcons integration
- Anime.js for animations
- Basic page structure (Home, Gallery, Contact)
- Header and Footer components
- Hero section with animated elements
- About section with company information
- Professional construction company branding
- Mobile-first responsive design
- Modern, professional UI/UX

### Technical

- Next.js 15.3.3+ with App Router
- TypeScript for type safety
- Tailwind CSS for utility-first styling
- PrimeReact for UI components
- Anime.js for smooth animations
- ESLint and Prettier for code quality

## [1.2.1] - Centered Layout & Visual Balance

### Updated

- Centered and visually balanced all main wrappers (Hero, Gallery, Contact)
- Hero section: logo, text, and cards are centered and spaced evenly
- Gallery page: heading, carousel, and grid are centered and aligned
- Contact page: heading, cards, and map are centered and visually balanced
- Improved flex/grid usage for consistent modern layout
- Fixed minor linter errors and improved accessibility
