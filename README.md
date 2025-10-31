# MilkySoft

A modern React application built with Vite, featuring a responsive website for MilkySoft with multiple sections including Hero, Services, Expertise, Technologies, and more.

## 🚀 Technologies

- **React 18.3.1** - UI library
- **Vite 7.1.7** - Build tool and dev server
- **React Router DOM 7.9.5** - Client-side routing
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **TypeScript 5.4.5** - Type definitions

## 📦 Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd milkysoft-react
```

2. Install dependencies:
```bash
npm install
```

## 🎯 Available Scripts

- `npm run dev` - Start the development server (runs on http://localhost:5173 by default)
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code issues
- `npm run deploy` - Build and deploy to GitHub Pages

## 📁 Project Structure

```
milkysoft-react/
├── src/
│   ├── components/
│   │   ├── CTA.jsx / CTA.css
│   │   ├── Expertise.jsx / Expertise.css
│   │   ├── Footer.jsx / Footer.css
│   │   ├── Hero.jsx / Hero.css
│   │   ├── Navbar.jsx / Navbar.css
│   │   ├── PrivacyPolicy.jsx / PrivacyPolicy.css
│   │   ├── Services.jsx / Services.css
│   │   └── Technologies.jsx / Technologies.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── dist/           # Production build output
├── index.html
├── package.json
├── vite.config.js
└── postcss.config.js
```

## 🎨 Components

- **Navbar** - Navigation bar component
- **Hero** - Hero section with main call-to-action
- **Services** - Services showcase
- **Expertise** - Expertise and skills display
- **Technologies** - Technology stack showcase
- **CTA** - Call-to-action component
- **Footer** - Footer with links and information
- **PrivacyPolicy** - Privacy policy page

## 🚀 Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## 🏗️ Building for Production

To create a production build:

```bash
npm run build
```

The optimized files will be generated in the `dist/` directory.

## 📤 Deployment

The project is configured to deploy to GitHub Pages. To deploy:

```bash
npm run deploy
```

This command will:
1. Build the application for production
2. Deploy the `dist/` folder to the `gh-pages` branch

Make sure to configure the `base` path in `vite.config.js` if your repository is not at the root of your GitHub Pages site.

## 📝 License

This project is private and proprietary.

## 👨‍💻 Development Notes

- The project uses React Router for client-side routing
- Styles are organized with component-specific CSS files
- Tailwind CSS is configured via PostCSS
- The application is optimized for modern browsers

