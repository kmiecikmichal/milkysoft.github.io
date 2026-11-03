import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The CSP in index.html carries upgrade-insecure-requests for production. Safari
// applies it to http://localhost too, rewrites every script to https:// and the dev
// page stays blank, so drop the directive while serving locally.
const devCsp = {
  name: 'dev-csp',
  apply: 'serve',
  transformIndexHtml: (html) => html.replace(/;\s*upgrade-insecure-requests/, ''),
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), devCsp],
  base: '/',
})
