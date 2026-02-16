import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { WebsiteSchema, OrganizationSchema } from "@/components/SchemaMarkup";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Providers } from "@/components/Providers";

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

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
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "CricutHelper",
  },
  formatDetection: {
    telephone: false,
  },
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
    images: [
      {
        url: "https://cricuthelper.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CricutHelper - Free Cricut Troubleshooting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CricutHelper - Free Cricut Troubleshooting",
    description: "Free troubleshooting guides and material settings for Cricut users.",
    images: ["https://cricuthelper.com/og-image.jpg"],
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
      <head>
        <meta name="application-name" content="CricutHelper" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="CricutHelper" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#9CAF88" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <link rel="icon" type="image/svg+xml" href="/icons/icon.svg" />
      </head>
      <body className={`${montserrat.variable} ${cormorant.variable} font-sans antialiased bg-gradient-to-b from-[#FAF8F5] to-white min-h-screen`}>
        <Providers>
          <WebsiteSchema />
          <OrganizationSchema />
          <Navigation />
          <main className="max-w-6xl mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </Providers>
        <Analytics />
        <GoogleAnalytics />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                navigator.serviceWorker.getRegistrations().then(function(registrations) {
                  for (let registration of registrations) {
                    registration.unregister();
                  }
                });
                if ('caches' in window) {
                  caches.keys().then(function(names) {
                    for (let name of names) caches.delete(name);
                  });
                }
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
