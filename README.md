# MilkySoft - React Landing Page

A modern, fully animated React landing page for MilkySoft - an AI consulting and software development company specializing in Agentic AI solutions.

## 🎨 Features

### Design
- **Pastel Color Scheme**: Beautiful purple, blue, and pink pastels
- **Modern Layout**: Clean, professional design with smooth transitions
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile
- **Custom SVG Graphics**: Unique milk box logo and illustrations

### Animations
- **Milk Drops**: Continuous falling milk drops animation across the page
- **Milk Spilling**: Animated wave effect in the CTA section
- **Hero Animation**: Floating milk box with 3D tilt effect on mouse movement
- **Scroll Animations**: Fade-in effects as sections come into view
- **Interactive Cards**: 3D hover effects on service cards
- **Parallax Shapes**: Background shapes move at different speeds

### Tech Stack
- **React 18**: Latest React with hooks
- **Vite**: Lightning-fast build tool
- **CSS3**: Modern animations and transitions
- **Google Fonts**: Inter & Space Grotesk typography

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

1. Navigate to the project directory:
```bash
cd milkysoft-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
milkysoft-react/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar
│   │   ├── Navbar.css
│   │   ├── Hero.jsx             # Hero section with milk box
│   │   ├── Hero.css
│   │   ├── Services.jsx         # Services cards
│   │   ├── Services.css
│   │   ├── Expertise.jsx        # Expertise areas
│   │   ├── Expertise.css
│   │   ├── Technologies.jsx     # Tech stack
│   │   ├── Technologies.css
│   │   ├── CTA.jsx              # Call-to-action section
│   │   ├── CTA.css
│   │   ├── Footer.jsx           # Footer
│   │   ├── Footer.css
│   │   ├── MilkDrops.jsx        # Milk drops animation
│   │   └── MilkDrops.css
│   ├── App.jsx                  # Main app component
│   ├── App.css                  # Global styles
│   ├── main.jsx                 # App entry point
│   └── index.css                # Base CSS
├── index.html
├── package.json
└── README.md
```

## 🎯 Components

### Navbar
- Sticky navigation with scroll effects
- Mobile hamburger menu
- Smooth scroll to sections

### Hero
- Animated title with gradient text
- 3D tilt effect on mouse movement
- Animated milk box SVG
- Stats with counters

### Services
- Three main service cards
- Custom icons with animations
- Scroll-triggered fade-in effects

### Expertise
- Three specialized areas with numbered cards
- Tags for key technologies
- Hover effects

### Technologies
- Grid of technology names
- Staggered animation entrance
- Hover effects

### CTA
- Email capture form with validation
- Animated wave background
- Success/error notifications

### Footer
- Company information
- Quick navigation links
- Social media links

### MilkDrops
- Continuous falling milk drops
- Random positions, sizes, and colors
- Non-intrusive background effect

## 🎨 Customization

### Colors
Edit CSS variables in `src/App.css`:
```css
:root {
  --color-primary: #E8D4F2;
  --color-accent: #6B4E9E;
  /* ... more colors */
}
```

### Content
Edit component files in `src/components/` to update:
- Company name and tagline
- Service descriptions
- Expertise areas
- Technology stack
- Contact information

### Animations
Adjust animation speeds in component CSS files by modifying:
- `@keyframes` rules
- `animation` properties
- `transition` durations

## 📱 Responsive Breakpoints

- Desktop: 1024px+
- Tablet: 768px - 1024px
- Mobile: < 768px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📦 Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload the dist folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Configure GitHub Pages to serve from dist folder
```

## 🎭 Interactive Features

- **Smooth Scrolling**: Click navigation links for smooth scroll
- **Form Validation**: Real-time email validation
- **Notifications**: Success/error messages
- **3D Effects**: Mouse-responsive tilt on hero
- **Hover States**: Interactive card and button effects

## 🔧 Development

### Hot Module Replacement
Vite provides instant HMR - changes appear immediately without full page reload.

### Component Development
Each component is self-contained with its own CSS file for easy maintenance.

### Performance
- Optimized animations using CSS transforms
- Lazy loading for better initial load time
- Minimal dependencies

## 📄 License

Feel free to use and modify for your needs.

---

**MilkySoft** - Pouring Innovation into AI Solutions 🥛
