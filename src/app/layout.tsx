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
      </head>
      <body className="font-sabo">
        {children}
      </body>
    </html>
  );
}
