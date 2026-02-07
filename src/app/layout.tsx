import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "CricutHelper - Free Troubleshooting & Material Settings for Cricut",
    template: "%s | CricutHelper",
  },
  description: "Free troubleshooting guides, material cut settings database, and tools for Cricut Maker, Explore, and Joy users. Fix issues fast and get perfect cuts every time.",
  keywords: ["Cricut troubleshooting", "Cricut material settings", "Cricut cut settings", "Cricut Maker help", "Cricut Explore help", "vinyl settings", "HTV settings", "heat press settings", "Cricut not cutting"],
  authors: [{ name: "CricutHelper" }],
  creator: "CricutHelper",
  publisher: "CricutHelper",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cricuthelper.com",
    siteName: "CricutHelper",
    title: "CricutHelper - Free Troubleshooting & Material Settings",
    description: "Free troubleshooting guides and material settings for Cricut Maker, Explore, and Joy. Fix issues fast!",
  },
  twitter: {
    card: "summary_large_image",
    title: "CricutHelper - Free Cricut Troubleshooting",
    description: "Free troubleshooting guides and material settings for Cricut users.",
  },
  verification: {
    // Add these when you have them:
    // google: "your-google-verification-code",
    // bing: "your-bing-verification-code",
  },
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
