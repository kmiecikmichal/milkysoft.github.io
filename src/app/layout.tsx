import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MilkySoft - Modern Software Solutions",
  description: "Transform your ideas into digital reality with MilkySoft. We build innovative software solutions that help businesses grow and succeed in the digital age.",
  keywords: "software development, web applications, digital solutions, technology consulting",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
