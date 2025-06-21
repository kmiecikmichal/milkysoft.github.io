import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local';

const sabo = localFont({
  src: '../../public/fonts/Sabo-Filled.otf',
  variable: '--font-sabo',
});

export const metadata: Metadata = {
  title: "MilkySoft - Modern Software Solutions",
  description: "Transform your ideas into digital reality with MilkySoft. We build innovative software solutions that help businesses grow and succeed in the digital age.",
  keywords: "software development, web applications, digital solutions, technology consulting",
  icons: {
    icon: '/favicon.ico',
  },
  themeColor: '#403d39', // Grey theme for main page
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'MilkySoft',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  other: {
    'msapplication-TileColor': '#403d39',
    'msapplication-config': '/browserconfig.xml',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${sabo.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        
        {/* Theme color for browser UI - Main page */}
        <meta name="theme-color" content="#403d39" />
        <meta name="msapplication-TileColor" content="#403d39" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </head>
      <body className="font-sabo">
        {children}
      </body>
    </html>
  );
}
