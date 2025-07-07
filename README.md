![D_logo](https://github.com/user-attachments/assets/9ffd05ba-0e3d-49b9-985d-d647f44897f7)

05ea7d1c16640bf95668c9447eb71a348393a1

# Dilbeck & Sons Construction

A professional, modern website for Dilbeck & Sons Construction built with Next.js, TypeScript, and PrimeReact.

## 🏗️ Features

- **Modern Design**: Clean, professional construction company website
- **Responsive Layout**: Mobile-first design that works on all devices
- **Interactive Elements**: Animated crane hamburger menu with smooth CSS animations
- **PrimeReact Integration**: Professional UI components with consistent theming
- **Multi-page Structure**: Home, Gallery, and Contact pages with proper navigation
- **Gallery Showcase**: Organized project sections with detailed modal views
- **Contact Integration**: Phone and location links with Google Maps embed

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.5 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: PrimeReact with PrimeFlex and PrimeIcons
- **Animations**: CSS keyframe animations for smooth, reliable performance
- **Build Tool**: Next.js with optimized production builds

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd dilbeck-construction
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── contact/           # Contact page
│   ├── gallery/           # Gallery page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── common/            # Shared components
│   │   └── CraneHamburger.tsx  # Animated hamburger menu
│   ├── gallery/           # Gallery-specific components
│   │   ├── GalleryContent.tsx
│   │   └── GalleryProjectDisplay.tsx
│   ├── home/              # Home page components
│   │   ├── AboutSection.tsx
│   │   └── Hero.tsx
│   └── layout/            # Layout components
│       └── AppShell.tsx
├── constants/             # Application constants
│   ├── companyInfo.ts
│   ├── gallery.ts
│   └── navigation.ts
└── types/                 # TypeScript type definitions
    └── index.ts
```

## 🎨 Key Components

### CraneHamburger

- Animated SVG crane hook that swings smoothly
- CSS keyframe animations for reliable performance
- Responsive hamburger menu with PrimeReact Sidebar
- Contact information integration

### GalleryProjectDisplay

- Organized project sections (Residential, Commercial, Renovation)
- PrimeReact Card components with modal details
- Responsive grid layout with proper centering
- Call-to-action buttons for project inquiries

### Hero Section

- Animated background with construction elements
- Professional company introduction
- Mobile-first responsive design

## 🎯 Features

### Navigation

- **Animated Crane Menu**: Unique hamburger menu with swinging crane hook animation
- **Smooth Transitions**: CSS animations for all interactive elements
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop

### Gallery

- **Project Categories**: Organized by project type
- **Modal Details**: Comprehensive project information
- **Professional Cards**: PrimeReact Card components with hover effects
- **Contact Integration**: Direct links to contact page

### Contact

- **Company Information**: Complete business details
- **Interactive Elements**: Clickable phone and location links
- **Google Maps**: Embedded map for easy location finding

## 🚀 Deployment

The project is optimized for production deployment:

```bash
npm run build
npm start
```

## 📝 Recent Updates

### Version 1.7.7

- **Fixed**: Anime.js import issues by replacing with CSS animations
- **Improved**: Build stability and reliability
- **Enhanced**: Crane hook animation with proper CSS keyframes

### Version 1.7.6

- **Fixed**: Animation reliability and performance
- **Improved**: Visual balance and component sizing
- **Enhanced**: Code simplicity and maintainability

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and build checks
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Dilbeck & Sons Construction**

- Phone: +1 (831) 422-8213
- Address: [Company Address]
- Website: [Website URL]

---

Built with ❤️ using Next.js, TypeScript, and PrimeReact
