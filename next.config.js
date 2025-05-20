/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/milkysoft.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/milkysoft.github.io' : '',
  distDir: 'out',
};

module.exports = nextConfig; 