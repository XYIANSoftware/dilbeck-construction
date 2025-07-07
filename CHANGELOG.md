# Changelog

All notable changes to this project will be documented in this file.

## [1.7.9] - 2024-12-19

### Added

- **Privacy Policy Page**: Comprehensive privacy policy specific to construction services in Monterey County, California
- **Terms of Service Page**: Detailed terms of service covering construction contracts, licensing, and California regulations
- **Legal Page Access**: Privacy and Terms links added to footer as small text links
- **SEO Protection**: robots.txt configured to prevent crawling of legal pages

### Changed

- **Footer Content**: Removed "Built with modern web technologies" text for cleaner appearance
- **Footer Links**: Added Privacy Policy and Terms of Service as small, unobtrusive text links
- **Page Metadata**: Both legal pages include noindex, nofollow meta tags to prevent search engine indexing

### Technical

- **Legal Compliance**: Privacy policy includes CCPA compliance for California residents
- **Construction Specific**: Terms cover contractor licensing, permits, warranties, and Monterey County regulations
- **Accessibility**: Legal pages maintain consistent styling with the rest of the site
- **SEO Management**: robots.txt prevents search engines from indexing legal pages

## [1.7.8] - 2024-12-19

### Improved

- **Gallery Card Layout**: Enhanced card design with better vertical padding and improved content spacing
- **Button Placement**: Moved "View Details" button inside card content for better visual integration
- **Card Styling**: Implemented glossy glass effect with 70% transparent background and enhanced elevation
- **Button Design**: Reduced border radius to 8px for softer, more modern square appearance
- **Visual Effects**: Added backdrop blur and subtle border for premium glass morphism effect

### Changed

- **Card Background**: Applied rgba(255, 255, 255, 0.7) with backdrop-filter blur for glossy appearance
- **Shadow Effects**: Enhanced from shadow-lg to shadow-xl with hover:shadow-2xl for better elevation
- **Content Spacing**: Increased vertical padding and improved spacing between card elements
- **Button Styling**: Consistent 8px border radius across all buttons in gallery and modal

### Technical

- **CSS Properties**: Added inline styles for background transparency and backdrop blur
- **Layout Structure**: Restructured card content to properly contain the button within card boundaries
- **Responsive Design**: Maintained responsive behavior while improving visual hierarchy

## [1.7.7] - 2024-12-19

### Fixed

- **Anime.js Import Issues**: Resolved persistent module import errors by replacing anime.js with CSS animations
- **Build Errors**: Eliminated all module resolution errors that were preventing successful builds
- **Animation Reliability**: Implemented CSS keyframe animations for consistent, reliable crane hook swinging

### Changed

- **Animation Implementation**: Replaced anime.js with pure CSS animations using @keyframes swing
- **Crane Hook Animation**: Smooth swinging animation (2.2s duration) with proper transform origin
- **Code Simplification**: Removed complex anime.js setup and dependencies for better reliability

### Technical

- **CSS Animations**: Added custom @keyframes swing animation with ease-in-out timing
- **Transform Origin**: Properly set transform origin to 32px 2px for realistic swinging motion
- **Build Stability**: Ensured all imports are resolved and build process is error-free

## [1.7.6] - 2024-12-19

### Fixed

- **Animation Issues**: Simplified anime.js setup by removing complex scope management and using direct function calls
- **Animation Reliability**: Fixed animation not working by storing functions globally and using simpler animation triggers
- **Size Adjustment**: Reduced crane icon size from 20x16 to 14x11 for better proportions
- **Padding Optimization**: Reduced button padding from p-4 to p-3 for more appropriate sizing

### Improved

- **Animation Performance**: More reliable animation system with proper cleanup
- **Visual Balance**: Better proportioned crane icon that fits well in the header
- **Code Simplicity**: Cleaner animation implementation without complex scoping

## [1.7.5] - 2024-12-19

### Changed

- **Crane Redesign**: Completely redesigned the crane to look like a realistic construction crane
- **Crane Structure**: Added proper crane elements - base platform, vertical tower, horizontal boom, hook with cable, and support struts
- **Button Styling**: Added blue border around hamburger menu button with hover effects for better visibility
- **Animation Enhancement**: Improved animations with more realistic crane movements (arm lift, hook swing, tower extension)

### Improved

- **Visual Clarity**: Crane now clearly resembles a construction crane instead of abstract shapes
- **Button Visibility**: Blue border and hover effects make it obvious the crane is a clickable button
- **Animation Timing**: Longer, more dramatic animations (1000ms) for better visual impact
- **Crane Details**: Added support struts and cable to make the crane more recognizable

## [1.7.4] - 2024-12-19

### Fixed

- **Crane Hamburger Menu Visibility**: Made the crane icon significantly larger and more visible (16x12 instead of 12x8)
- **Crane Icon Styling**: Increased line thickness, padding, and shadow effects for better visibility
- **Animation Enhancement**: Improved animation distances and scaling for more dramatic effect

### Changed

- **Navigation Icons**: Completely removed PrimeReact icons from sidebar navigation buttons
- **Clean Menu Design**: Navigation buttons now show only text labels without any symbols or icons
- **Better Visual Hierarchy**: Cleaner, more professional appearance without distracting icons

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
