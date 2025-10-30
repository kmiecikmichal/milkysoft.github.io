import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Polityka Prywatności - MilkySoft',
  description: 'Polityka prywatności i ochrony danych osobowych MILKYSOFT Sp. z o.o.',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Polityka Prywatności',
  },
  other: {
    'msapplication-TileColor': '#403d39',
  },
};

export const viewport = {
  themeColor: "#403d39",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-[#403d39] text-white font-sans">
      {children}
    </div>
  )
}

