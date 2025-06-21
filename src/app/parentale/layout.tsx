import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parentale Program - MilkySoft",
  description: "Apply to the Parentale Program.",
  icons: {
    icon: '/favicon.ico',
  },
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
  );
} 