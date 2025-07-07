# Dilbeck & Sons Construction

A modern, professional website for Dilbeck & Sons Construction - a family-owned general contracting company serving Monterey, CA since 1978.

## 🏗️ About

Dilbeck & Sons Construction is a trusted name in the Monterey community, delivering quality construction services with integrity and craftsmanship. This website showcases our projects, services, and commitment to excellence.

## ✨ Features

### 🎨 Modern Design

- **Light Blue Professional Theme**: Clean, modern design with professional blue color palette
- **Glass Morphism Effects**: Beautiful glass-effect backgrounds with transparency and blur
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Smooth Animations**: Crane animations and interactive elements powered by Anime.js

### 📱 User Experience

- **Animated Crane Navigation**: Unique crane-themed hamburger menu with smooth animations
- **Interactive Contact**: Clickable phone numbers and location routing
- **Project Gallery**: Showcase of completed construction projects with flip animations
- **Professional Layout**: Clean, organized content structure across all pages

### 🏠 Pages

- **Home**: Hero section with office image, mission statement, and services overview
- **Gallery**: Project portfolio with carousel and grid layout
- **Contact**: Streamlined contact information and business hours

## 🛠️ Technology Stack

- **Framework**: Next.js 15.3.5 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS for utility-first styling
- **UI Components**: PrimeReact for professional component library
- **Animations**: Anime.js for smooth, performant animations
- **Icons**: PrimeIcons for consistent iconography
- **Layout**: PrimeFlex for responsive grid system

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd dilbeck-construction
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── gallery/           # Gallery page
│   ├── contact/           # Contact page
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── common/            # Shared components
│   │   ├── CraneHamburger.tsx
│   │   └── ConstructionBackground.tsx
│   ├── home/              # Home page components
│   │   ├── Hero.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   └── HomeContent.tsx
│   ├── layout/            # Layout components
│   │   ├── AppShell.tsx
│   │   └── Footer.tsx
│   ├── projectGallery/    # Gallery components
│   │   ├── GalleryCarousel.tsx
│   │   ├── ProjectGrid.tsx
│   │   ├── ProjectCard.tsx
│   │   └── GalleryContent.tsx
│   └── contact/           # Contact components
│       └── ContactInfo.tsx
├── constants/             # Application constants
│   ├── companyInfo.ts
│   └── navigation.ts
└── styles/               # Global styles
    └── globals.css
```

## 🎨 Design System

### Color Palette

- **Primary Blue**: `#1e40af` (Blue-800)
- **Secondary Blue**: `#3b82f6` (Blue-500)
- **Accent Blue**: `#60a5fa` (Blue-400)
- **Background**: `#f8fafc` (Slate-50)
- **Text**: `#1e3a8a` (Blue-900)

### Typography

- **Font Family**: Inter (system font stack)
- **Headings**: Bold weights with blue color scheme
- **Body Text**: Regular weight with proper contrast

### Components

- **Glass Effect**: Semi-transparent backgrounds with blur
- **Cards**: Rounded corners with subtle shadows
- **Buttons**: Gradient backgrounds with hover effects
- **Navigation**: Animated crane hamburger menu

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

### Code Style

- **TypeScript**: Strict mode enabled
- **ESLint**: Next.js recommended configuration
- **Prettier**: Consistent code formatting
- **Components**: Functional components with TypeScript interfaces

## 📱 Responsive Design

The website is built with a mobile-first approach:

- **Mobile**: Optimized for touch interactions
- **Tablet**: Enhanced layout for medium screens
- **Desktop**: Full-featured experience with hover effects

## 🎭 Animations

### Anime.js Integration

- **Background Elements**: Rotating gears, floating bolts, crane lines
- **Crane Animation**: Moving crane with dirt pickup animation
- **Interactive Elements**: Smooth hover transitions and button effects
- **Page Transitions**: Subtle loading and state changes

### Performance

- **Optimized Animations**: 60fps smooth animations
- **Reduced Motion**: Respects user preferences
- **Lazy Loading**: Images and components load efficiently

## 📞 Contact Information

- **Phone**: +1 (831) 422-8213
- **Address**: Monterey, CA
- **Business Hours**: Monday - Friday, 8:00 AM - 5:00 PM

## 🤝 Contributing

This is a private project for Dilbeck & Sons Construction. For questions or support, please contact the development team.

## 📄 License

This project is proprietary and confidential. All rights reserved by Dilbeck & Sons Construction.

---

**Built with ❤️ for Dilbeck & Sons Construction**
