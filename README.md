# Archv Website

The official website for Archv - The AI operating system for regulated industries.

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Add your visual assets to `public/visualcontent/`:
   - `ARCHVlogo.svg` - Logo for navbar
   - `logovid.mp4` - Logo animation for hero section

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `build/` folder.

## Project Structure

```
archv-website/
├── public/
│   ├── index.html
│   └── visualcontent/
│       ├── ARCHVlogo.svg
│       └── logovid.mp4
├── src/
│   ├── components/
│   │   ├── Accordion.js
│   │   ├── Footer.js
│   │   ├── Navbar.js
│   │   ├── ScrollToTop.js
│   │   ├── Timeline.js
│   │   └── VideoPlaceholder.js
│   ├── pages/
│   │   ├── Contact.js
│   │   ├── FAQ.js
│   │   ├── Home.js
│   │   ├── Investors.js
│   │   ├── Pricing.js
│   │   ├── Privacy.js
│   │   ├── Security.js
│   │   ├── Solutions.js
│   │   └── Terms.js
│   ├── styles/
│   │   ├── index.css (imports all styles)
│   │   ├── variables.css
│   │   ├── base.css
│   │   ├── navbar.css
│   │   ├── hero.css
│   │   ├── sections.css
│   │   ├── components.css
│   │   └── footer.css
│   ├── App.js
│   └── index.js
└── package.json
```

## CSS Organization

Styles are split into multiple files for easier maintenance:

- `variables.css` - CSS custom properties (colors, etc.)
- `base.css` - Reset and base styles
- `navbar.css` - Navigation styles
- `hero.css` - Hero section styles
- `sections.css` - Page section styles
- `components.css` - Reusable component styles
- `footer.css` - Footer styles

## Deployment

Build the project and deploy the `build/` folder to any static hosting:
- Vercel
- Netlify
- AWS S3 + CloudFront
- GitHub Pages

## License

© 2025 Archv AI. All rights reserved.
