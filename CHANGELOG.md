# Changelog

All notable changes to this project will be documented in this file.

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

### 🎨 Major UI/UX Improvements

- **Complete Theme Overhaul**: Switched from dark slate/amber theme to light blue professional theme
- **Restored Original Content Structure**: Brought back proper page separation and content organization
- **Office Image & Mission Statement**: Restored the front office image and company mission statement on home page
- **Glass Effect Design**: Implemented modern glass-effect backgrounds with transparency and blur effects
- **Improved Typography**: Enhanced text hierarchy with better blue color scheme

### 🏗️ Content & Structure

- **Home Page**: Restored Hero section with office image, About section, and Services section with CTA buttons
- **Services Section**: Added comprehensive construction services grid with call-to-action buttons
- **Contact Page**: Streamlined contact information, removed Google Maps, focused on essential contact details
- **Gallery Page**: Maintained project showcase with improved light theme styling

### 🎭 Animations & Interactions

- **Crane Animation**: Added animated crane moving back and forth with dirt pickup animation above title
- **Smooth Transitions**: Enhanced hover effects and button interactions throughout the site
- **Anime.js Integration**: Improved background animations with rotating gears, floating bolts, and construction elements
- **Interactive Navigation**: Enhanced crane hamburger menu with smooth animations

### 🔧 Technical Improvements

- **Server/Client Architecture**: Fixed all server/client boundary issues with proper component separation
- **Build System**: Resolved all build errors and linting issues
- **Component Structure**: Created proper client/server component hierarchy
- **AppShell Pattern**: Implemented clean layout separation with AppShell client component
- **Performance**: Optimized component rendering and reduced bundle size

### 📱 Navigation & Contact

- **Phone Integration**: Clickable phone numbers that call +1 (831) 422-8213
- **Location Routing**: Clickable addresses that route to contact page
- **Responsive Design**: Improved mobile-first design with better navigation
- **Footer Enhancement**: Updated footer with clickable contact information

### 🎨 Visual Design

- **Color Scheme**: Professional blue palette with proper contrast and accessibility
- **Glass Morphism**: Modern glass-effect cards and backgrounds
- **Typography**: Improved font hierarchy and readability
- **Spacing**: Better visual balance and component spacing

### 🐛 Bug Fixes

- Fixed all event handler errors in server components
- Resolved build compilation issues
- Fixed component import/export issues
- Corrected theme application across all components

### 📦 Dependencies

- Updated to stable dependency versions
- Improved package.json structure
- Added proper TypeScript types

---

## [1.3.0] - 2024-12-19

### 🎨 UI/UX Enhancements

- **Dark Theme Implementation**: Complete dark slate/amber theme with glass effects
- **Animated Crane Hamburger**: Unique crane-themed navigation menu with smooth animations
- **Construction Background**: Animated background with gears, bolts, and crane elements
- **Transparency Effects**: 50% transparent glass-effect backgrounds throughout the site

### 🏗️ Component Improvements

- **Hero Section**: Redesigned with gradient text and enhanced visual hierarchy
- **Gallery Cards**: Updated to use PrimeReact Card components with flip animations
- **Contact Page**: Enhanced with Google Maps integration and improved layout
- **Navigation**: Replaced standard hamburger with animated crane design

### 🎭 Animation Features

- **Anime.js Integration**: Smooth animations for background elements and interactions
- **Crane Animation**: Moving crane with pickup animations
- **Hover Effects**: Enhanced button and card hover states
- **Loading States**: Improved skeleton loading for gallery images

### 🔧 Technical Updates

- **PrimeReact Integration**: Enhanced component library usage
- **TypeScript**: Improved type safety and component interfaces
- **Responsive Design**: Better mobile-first approach
- **Performance**: Optimized animations and component rendering

---

## [1.2.0] - 2024-12-19

### 🎨 Design System

- **PrimeReact Integration**: Added PrimeReact components and theming
- **Tailwind CSS**: Implemented utility-first styling approach
- **Color Palette**: Professional construction-themed color scheme
- **Typography**: Improved font hierarchy and readability

### 🏗️ Component Architecture

- **Modular Components**: Separated concerns with dedicated component files
- **TypeScript**: Added proper type definitions and interfaces
- **Responsive Design**: Mobile-first approach with breakpoint considerations
- **Accessibility**: Enhanced ARIA labels and keyboard navigation

### 📱 Navigation

- **Hamburger Menu**: Mobile-friendly navigation with smooth animations
- **Page Routing**: Clean URL structure with Next.js App Router
- **Breadcrumbs**: Improved navigation context

### 🎭 Interactive Elements

- **Gallery Carousel**: Rotating project showcase with PrimeReact Carousel
- **Project Cards**: Flip animations and hover effects
- **Contact Forms**: Enhanced form validation and user feedback
- **Button States**: Improved hover and focus states

---

## [1.1.0] - 2024-12-19

### 🎨 Visual Enhancements

- **Hero Section**: Enhanced with company logo and mission statement
- **About Section**: Added company values and service highlights
- **Gallery**: Implemented project showcase with image carousel
- **Contact Page**: Professional contact information layout

### 🏗️ Content Structure

- **Page Organization**: Clear separation of Home, Gallery, and Contact pages
- **Company Information**: Comprehensive business details and contact info
- **Service Descriptions**: Detailed construction service offerings
- **Project Portfolio**: Showcase of completed construction projects

### 🔧 Technical Foundation

- **Next.js Setup**: Modern React framework with App Router
- **TypeScript**: Type-safe development environment
- **Tailwind CSS**: Utility-first CSS framework
- **Component Library**: PrimeReact integration for UI components

---

## [1.0.0] - 2024-12-19

### 🚀 Initial Release

- **Project Setup**: Next.js 15.3.5 with TypeScript
- **Basic Structure**: Home, Gallery, and Contact pages
- **Company Branding**: Dilbeck & Sons Construction identity
- **Responsive Design**: Mobile-first approach
- **Modern Stack**: React 18, TypeScript, Tailwind CSS

## [1.2.1] - Centered Layout & Visual Balance

### Updated

- Centered and visually balanced all main wrappers (Hero, Gallery, Contact)
- Hero section: logo, text, and cards are centered and spaced evenly
- Gallery page: heading, carousel, and grid are centered and aligned
- Contact page: heading, cards, and map are centered and visually balanced
- Improved flex/grid usage for consistent modern layout
- Fixed minor linter errors and improved accessibility
