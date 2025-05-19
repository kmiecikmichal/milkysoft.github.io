# MilkySoft Website

A modern and minimalistic website for MilkySoft, a web product-oriented startup.

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- ESLint

## Development

1. Clone the repository:
```bash
git clone https://github.com/kmiecikmichal/milkysoft.github.io.git
cd milkysoft.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This website is deployed using GitHub Pages. The deployment process is automated using GitHub Actions.

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Export the static files:
```bash
npm run export
```

3. Push the changes to the `gh-pages` branch:
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
```

## Project Structure

```
src/
├── app/              # App router pages and layouts
├── components/       # Reusable components
├── styles/          # Global styles and Tailwind config
├── lib/             # Utility functions and shared logic
└── types/           # TypeScript type definitions
```

## License

MIT License - feel free to use this project for your own purposes.

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `