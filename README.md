# Dilbeck & Sons Construction Website

Welcome to the official website for Dilbeck & Sons Construction!

**Version:** 1.1.0

## How to Use This Website

### Home Page (`/`)

- See the company logo and name at the top.
- Read a short mission statement and company history.
- View a team or office image.
- Find prominent contact information (phone, address) right on the home page.

### Project Gallery (`/gallery`)

- Browse a rotating carousel of top project images at the top of the page.
- Explore a grid of project cards, each showing a project image and name.
- Click a card to flip or reveal a project description with a smooth animation.
- Images load with a subtle skeleton loader for a polished experience.

### Contact Information

- Contact details are always easy to find on the home page and in the site footer.
- Reach out by phone or visit the office using the provided address.

## Features

- Mobile-first, responsive design for all devices
- Modern, professional look with subtle construction-themed animations
- Fast image loading and smooth transitions
- Easy navigation between Home and Gallery

Enjoy exploring our work and learning more about Dilbeck & Sons Construction!

## Development

This is a [Next.js](https://nextjs.org) project built with modern web technologies.

### Tech Stack

- **Framework:** Next.js 15.3.5 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + PrimeFlex
- **UI Components:** PrimeReact (Lara Light Blue theme)
- **Animations:** Anime.js
- **Icons:** PrimeIcons

### Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── gallery/page.tsx   # Gallery page
│   ├── layout.tsx         # Root layout
│   └── sitemap.xml        # SEO sitemap
├── components/            # Reusable components
│   ├── common/           # Shared components (Button, GearBackground)
│   ├── layout/           # Layout components (Header, Footer)
│   ├── home/             # Home page components (Hero, AboutSection)
│   ├── projectGallery/   # Gallery components (Carousel, ProjectGrid, ProjectCard)
│   └── inputs/           # Form input components (future)
├── constants/            # Centralized data and types
│   ├── types.ts          # TypeScript interfaces
│   ├── galleryList.ts    # Gallery items data
│   ├── companyInfo.ts    # Company information
│   ├── navigation.ts     # Navigation items
│   └── index.ts          # Barrel exports
└── styles/               # Global styles and CSS variables
    ├── globals.css       # Custom CSS variables and utilities
    └── index.ts          # Style exports
```

### Adding Images

Place your project images in `public/gallery/` using the naming convention:

- `g-1.png`, `g-2.png`, `g-3.png`, etc. (up to g-10.png)
- Update the gallery data in `src/constants/galleryList.ts` as needed

### Data Management

All data is centralized in the `constants/` folder:

- **Gallery items:** `src/constants/galleryList.ts`
- **Company info:** `src/constants/companyInfo.ts`
- **Navigation:** `src/constants/navigation.ts`
- **Types:** `src/constants/types.ts`

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [PrimeReact Documentation](https://primereact.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Anime.js Documentation](https://animejs.com/)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
