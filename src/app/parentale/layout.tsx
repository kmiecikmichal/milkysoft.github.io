import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Parentale Program - MilkySoft',
  description: 'Apply to our exclusive Parentale program by sharing your voice.',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Parentale Program',
  },
  other: {
    'msapplication-TileColor': '#3BA181',
  },
};

export const viewport = {
  themeColor: "#3BA181",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function ParentaleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-brand-green text-white font-sans">
      {children}
    </div>
  )
} 