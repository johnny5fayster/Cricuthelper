import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Cricut Pricing Calculator — Know Your REAL Profit [2026]",
  description: "How to price Cricut crafts for profit. Free calculator includes materials, labor, Etsy fees, shipping & packaging. Stop underpricing your handmade items!",
  keywords: [
    // Primary targets
    "cricut pricing calculator",
    "how to price cricut crafts", 
    "how to price handmade items",
    "etsy pricing calculator",
    "etsy profit calculator",
    "etsy fee calculator",
    // Product-specific
    "how much to charge for cricut shirts",
    "tumbler pricing calculator",
    "vinyl pricing calculator",
    "htv pricing calculator",
    // Intent-based
    "craft profit calculator",
    "handmade pricing formula",
    "craft business pricing",
    "cricut seller tools",
    "etsy seller calculator",
  ],
  openGraph: {
    title: "Free Cricut Pricing Calculator — How to Price Handmade Items",
    description: "Stop underpricing! Calculate true profit with materials, labor, Etsy/Amazon fees, and shipping included.",
    type: "website",
  },
  alternates: {
    canonical: "https://cricuthelper.com/profit-calculator",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I price my Cricut crafts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To price Cricut crafts: Add up all material costs (blanks, vinyl, HTV), calculate labor (time × hourly rate), add overhead (machine depreciation, blade wear, mat wear), then add marketplace fees (Etsy charges 6.5% + 3% payment processing + $0.20 listing fee). A good rule: your selling price should be at least 2.5-3x your total costs to ensure profit."
      }
    },
    {
      "@type": "Question", 
      "name": "What are Etsy fees for handmade items?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Etsy charges: $0.20 listing fee per item, 6.5% transaction fee on the sale price (including shipping), 3% + $0.25 payment processing fee. If you use Offsite Ads and make over $10K/year, there's an additional 12-15% fee on sales from those ads. Total fees typically run 12-15% of your sale price."
      }
    },
    {
      "@type": "Question",
      "name": "How much should I charge for a Cricut shirt?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A basic Cricut HTV shirt typically costs $5-8 for the blank + $1-3 for vinyl + 30-60 minutes of labor. At $15/hour labor, your cost is around $12-18. For Etsy, price at $25-35 to maintain healthy margins after fees. For local/craft fairs, $20-28 is competitive. Never price below your costs!"
      }
    },
    {
      "@type": "Question",
      "name": "How do I calculate vinyl cost per project?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Measure your design dimensions (width × height in inches). A 12\" roll of vinyl is 12\" wide. If your design is 6×4 inches, you're using 24 square inches. A 12\"×12\" sheet = 144 sq inches. If that sheet costs $1.50, your cost per square inch is ~$0.01. So your 24 sq inch design costs about $0.25 in vinyl. Add 10-15% for waste/mistakes."
      }
    },
    {
      "@type": "Question",
      "name": "What profit margin should I aim for on handmade items?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aim for 50-65% gross profit margin on handmade items. This means if you sell for $30, your total costs (materials + labor + fees) should be $10-15. For Etsy sellers, after all fees you should net at least 35-40% profit. If your margins are lower, you're underpricing — raise prices or reduce costs."
      }
    }
  ]
};

export default function ProfitCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
