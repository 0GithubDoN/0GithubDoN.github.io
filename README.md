# Void Dash - Official Website

Modern, responsive single-page website for the Void Dash mobile game. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🎮 About Void Dash

Void Dash is a fast, hypnotic, one-tap arcade runner. Dash through the neon void as far as you dare. Available on Google Play.

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Navigate to the website directory:
```bash
cd E:\Void_Dash\website
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

## 📦 Build for Production

### Static Export (Recommended)

The website is configured for static export, perfect for hosting on GitHub Pages, Netlify, Vercel, or any static hosting service.

```bash
npm run build
```

This creates an `out` directory with static HTML/CSS/JS files ready for deployment.

## 🌐 Deployment Options

### Option 1: Vercel (Easiest)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

### Option 2: Netlify

1. Build the site: `npm run build`
2. Drag and drop the `out` folder to [netlify.com/drop](https://app.netlify.com/drop)

Or connect your GitHub repository for automatic deployments.

### Option 3: GitHub Pages

1. Build the site: `npm run build`
2. Push the `out` directory to a `gh-pages` branch
3. Enable GitHub Pages in repository settings

### Option 4: Any Static Host

Upload the contents of the `out` directory to any web server or CDN.

## 📁 Project Structure

```
website/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   ├── globals.css         # Global styles
│   ├── privacy-policy/     # Privacy policy page
│   │   └── page.tsx
│   └── terms/              # Terms of service page
│       └── page.tsx
├── public/                 # Static assets (add images here)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.mjs
└── README.md
```

## 🎨 Customization

### Adding Game Screenshots

1. Add your game screenshots to the `public` folder:
   - `public/hero-image.png` - Main hero image
   - `public/screenshot-1.png` - Gameplay screenshot 1
   - `public/screenshot-2.png` - Gameplay screenshot 2
   - `public/screenshot-3.png` - Gameplay screenshot 3
   - `public/icon.png` - Game icon

2. Update the placeholder sections in `app/page.tsx`:
   - Replace the placeholder div in the hero section with: `<Image src="/hero-image.png" alt="Void Dash" />`
   - Replace screenshot placeholders in the gameplay section
   - Replace the "VD" placeholder with the actual game icon

### Updating Content

- **Game description**: Edit `app/page.tsx`
- **Privacy policy**: Edit `app/privacy-policy/page.tsx`
- **Terms of service**: Edit `app/terms/page.tsx`
- **Metadata (SEO)**: Edit `app/layout.tsx`

### Changing Colors

The neon color scheme is defined in `tailwind.config.ts`:

```typescript
colors: {
  void: {
    dark: "#0a0a0f",      // Background
    purple: "#1a0a2e",    // Secondary background
    cyan: "#00f5ff",      // Primary accent
    magenta: "#ff00ff",   // Secondary accent
    gold: "#ffd700",      // Tertiary accent
  },
}
```

### Adding Google Play Link

Update the Google Play link in `app/page.tsx`:

```tsx
<a href="https://play.google.com/store/apps/details?id=com.doncode.voiddash">
```

Replace with your actual Google Play Store URL once published.

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (creates `out` folder)
- `npm run start` - Start production server (not needed for static export)
- `npm run lint` - Run ESLint

## 📱 Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Smooth animations with Framer Motion
- ✅ Neon glow effects and gradients
- ✅ SEO optimized with proper metadata
- ✅ Privacy policy and terms of service pages
- ✅ Static export ready for any hosting
- ✅ Fast loading and performance optimized
- ✅ Accessible navigation and content

## 🎯 SEO Checklist

Before deploying:

1. ✅ Update metadata in `app/layout.tsx`
2. ✅ Add Open Graph images to `public` folder
3. ✅ Update Google Play Store link
4. ✅ Add actual game screenshots
5. ✅ Test on mobile devices
6. ✅ Run Lighthouse audit
7. ✅ Submit sitemap to Google Search Console

## 📄 Legal Pages

The website includes:

- **Privacy Policy** (`/privacy-policy`) - Based on your existing privacy policy document
- **Terms of Service** (`/terms`) - Comprehensive terms covering usage, purchases, and liability

Both pages are fully responsive and styled to match the main site.

## 🐛 Troubleshooting

### Build fails

```bash
# Clear cache and reinstall
rm -rf node_modules .next out
npm install
npm run build
```

### Images not loading

- Ensure images are in the `public` folder
- Use paths starting with `/` (e.g., `/icon.png`)
- Check file names match exactly (case-sensitive)

### Animations not working

- Ensure Framer Motion is installed: `npm install framer-motion`
- Check browser console for errors

## 📞 Support

For questions or issues:
- Email: lucian3boy@gmail.com
- Game documentation: See `E:\Void_Dash\PLAN.md`

## 📝 License

This website is part of the Void Dash game project.
© 2026 DoN [George Lucian]. All rights reserved.
