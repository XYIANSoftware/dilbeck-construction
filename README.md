
[dilbeck-logo-1.pdf](https://github.com/user-attachments/files/21107220/dilbeck-logo-1.pdf)

# Dilbeck & Sons Construction

A modern, professional website for Dilbeck & Sons Construction built with Next.js, TypeScript, and PrimeReact.

## 🚀 Features

- **Modern UI/UX**: Clean, professional design with glass-effect styling
- **Responsive Design**: Mobile-first approach with consistent hamburger menu across all devices
- **PrimeReact Integration**: Professional components with lara-light-blue theme
- **Smooth Animations**: Subtle anime.js animations for enhanced user experience
- **SEO Optimized**: Proper metadata, sitemap, and semantic HTML
- **TypeScript**: Full type safety throughout the application
- **Performance**: Optimized images with skeleton loaders and lazy loading

## 📱 Pages

- **Home**: Hero section with company overview and featured content
- **Gallery**: Interactive project showcase with flip animations
- **Contact**: Company information, hours, location, and Google Maps integration

## 🛠 Tech Stack

- **Framework**: Next.js 15.3.5 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + PrimeFlex
- **UI Components**: PrimeReact (Card, Button, Sidebar, Skeleton)
- **Icons**: PrimeIcons
- **Animations**: Anime.js
- **Deployment**: Netlify (dilbeck.netlify.app)

## 🎨 Design Features

- **Hamburger Menu**: Consistent navigation using PrimeReact Sidebar
- **Glass Effect**: Modern backdrop blur styling throughout
- **Card Animations**: Interactive project cards with flip effects
- **Professional Theme**: Lara Light Blue PrimeReact theme
- **Mobile-First**: Responsive design that works on all devices

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── contact/           # Contact page
│   ├── gallery/           # Gallery page
│   └── layout.tsx         # Root layout with PrimeReactProvider
├── components/            # Reusable components
│   ├── common/           # Shared components
│   ├── layout/           # Header, Footer
│   ├── home/             # Home page components
│   └── projectGallery/   # Gallery components
├── constants/            # Centralized data and types
│   ├── types.ts          # TypeScript interfaces
│   ├── companyInfo.ts    # Company information
│   ├── navigation.ts     # Navigation items
│   └── galleryList.ts    # Gallery data
└── styles/              # Global styles and utilities
    └── globals.css       # CSS variables and utilities
```

## 🚀 Getting Started

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Run development server**:

   ```bash
   npm run dev
   ```

3. **Build for production**:

   ```bash
   npm run build
   ```

4. **Export static files** (for Netlify):
   ```bash
   npm run export
   ```

## 🌐 Deployment

The site is configured for deployment on Netlify at [dilbeck.netlify.app](https://dilbeck.netlify.app).

- Static export configuration in `next.config.ts`
- Netlify configuration in `netlify.toml`
- Proper redirects and headers for production

## 📝 Version History

See [CHANGELOG.md](./CHANGELOG.md) for detailed version history and updates.

**Current Version**: 1.2.0 - Major UI improvements with hamburger menu, PrimeReact components, and Contact page

## 🎯 Key Improvements in v1.2.0

- **Hamburger Menu**: Consistent navigation experience across desktop and mobile
- **PrimeReact Components**: Enhanced theming with Card, Button, and Sidebar components
- **Contact Page**: New page with company information and Google Maps integration
- **Professional Styling**: Improved visual consistency and user experience
- **Better Accessibility**: Proper ARIA labels and semantic HTML structure

## 📞 Contact Information

- **Phone**: (555) 123-4567
- **Address**: 123 Construction Ave, Building City, BC 12345
- **Hours**: Monday-Friday 7:00 AM - 5:00 PM, Saturday 8:00 AM - 2:00 PM
- **Website**: [dilbeck.netlify.app](https://dilbeck.netlify.app)

---

Built with ❤️ using modern web technologies for a professional construction company website.
