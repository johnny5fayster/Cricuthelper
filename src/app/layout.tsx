import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CricutHelper - Troubleshooting & Material Settings for Cricut",
  description: "Free troubleshooting guides, material cut settings database, and tools for Cricut Maker, Explore, and Joy users. Fix issues fast and get perfect cuts every time.",
  keywords: "Cricut, troubleshooting, material settings, cut settings, Cricut Maker, Cricut Explore, vinyl, HTV, help",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-gradient-to-b from-pink-50 to-white min-h-screen`}>
        <Navigation />
        <main className="max-w-6xl mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
