"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useMemo, Suspense } from "react";

// Searchable content database
const searchableContent = [
  // Guides
  {
    title: "Cricut Not Cutting Through Vinyl? 7 Fixes That Actually Work",
    description: "Step-by-step guide to fix your Cricut when it won't cut through vinyl.",
    href: "/guides/cricut-not-cutting-vinyl",
    category: "Guide",
    keywords: ["vinyl", "cutting", "not cutting", "blade", "pressure", "mat"],
  },
  {
    title: "Cricut Bluetooth Not Connecting? 8 Fixes That Actually Work",
    description: "Fix Bluetooth connection issues on Windows, Mac, iPhone, iPad, and Android.",
    href: "/guides/cricut-bluetooth-not-connecting",
    category: "Guide",
    keywords: ["bluetooth", "connection", "not connecting", "wireless", "pairing", "wifi"],
  },
  {
    title: "HTV Peeling After Washing? 9 Fixes for Iron-On That Won't Stay",
    description: "Why your iron-on vinyl is peeling and exactly how to fix it.",
    href: "/guides/htv-peeling-after-washing",
    category: "Guide",
    keywords: ["htv", "iron-on", "peeling", "washing", "heat transfer", "vinyl", "temperature", "pressure"],
  },
  // Tools
  {
    title: "Troubleshooting Wizard",
    description: "Interactive step-by-step diagnosis for any Cricut problem.",
    href: "/troubleshoot",
    category: "Tool",
    keywords: ["troubleshoot", "wizard", "fix", "problem", "help", "diagnose"],
  },
  {
    title: "Error Codes Lookup",
    description: "Look up any Cricut Design Space error code and get solutions.",
    href: "/error-codes",
    category: "Tool",
    keywords: ["error", "code", "1001", "1002", "1006", "design space", "message"],
  },
  {
    title: "Material Settings Database",
    description: "Find the perfect cut settings for any material.",
    href: "/materials",
    category: "Tool",
    keywords: ["material", "settings", "vinyl", "cardstock", "leather", "fabric", "cut settings"],
  },
  {
    title: "Heat Press Temperature Guide",
    description: "Temperature, time, and pressure settings for HTV and sublimation.",
    href: "/heat-press",
    category: "Tool",
    keywords: ["heat press", "temperature", "htv", "iron-on", "sublimation", "time", "pressure"],
  },
  {
    title: "Cut Calculator",
    description: "Calculate how many cuts fit on your material.",
    href: "/calculator",
    category: "Tool",
    keywords: ["calculator", "cut", "material", "size", "fit", "layout"],
  },
  {
    title: "Profit Calculator",
    description: "Calculate pricing and profit margins for your Cricut business.",
    href: "/profit-calculator",
    category: "Tool",
    keywords: ["profit", "calculator", "pricing", "business", "cost", "margin", "sell"],
  },
  // Problem Categories
  {
    title: "Not Cutting Through Material",
    description: "Blade, pressure, and mat issues that prevent clean cuts.",
    href: "/troubleshoot?issue=not-cutting",
    category: "Problem",
    keywords: ["not cutting", "blade", "dull", "pressure", "mat", "vinyl", "cardstock"],
  },
  {
    title: "Mat Grip Issues",
    description: "Mat too sticky, not sticky enough, or warped.",
    href: "/troubleshoot?issue=mat-grip",
    category: "Problem",
    keywords: ["mat", "sticky", "grip", "warped", "cleaning", "replace"],
  },
  {
    title: "Bluetooth Connection Problems",
    description: "Machine won't connect or keeps disconnecting.",
    href: "/troubleshoot?issue=bluetooth",
    category: "Problem",
    keywords: ["bluetooth", "connection", "disconnect", "pairing", "not found"],
  },
  {
    title: "HTV/Iron-On Not Sticking",
    description: "Heat transfer vinyl peeling or not adhering to fabric.",
    href: "/troubleshoot?issue=adhesion",
    category: "Problem",
    keywords: ["htv", "iron-on", "peeling", "not sticking", "adhesion", "heat press"],
  },
  {
    title: "Design Space Issues",
    description: "Software crashes, slow performance, or login problems.",
    href: "/troubleshoot?issue=design-space",
    category: "Problem",
    keywords: ["design space", "crash", "slow", "login", "freeze", "not working"],
  },
  {
    title: "Print Then Cut Problems",
    description: "Sensor marks, calibration, and alignment issues.",
    href: "/troubleshoot?issue=print-then-cut",
    category: "Problem",
    keywords: ["print then cut", "sensor", "calibration", "alignment", "offset", "marks"],
  },
  {
    title: "Weeding Difficulties",
    description: "Small pieces, tearing vinyl, or hard to see cuts.",
    href: "/troubleshoot?issue=weeding",
    category: "Problem",
    keywords: ["weeding", "small pieces", "tearing", "lifting", "vinyl", "htv"],
  },
  // Niches
  {
    title: "Wedding & Bridal Crafts",
    description: "Signs, invitations, favors, and decorations for weddings.",
    href: "/niches/wedding",
    category: "Niche",
    keywords: ["wedding", "bridal", "signs", "invitations", "favors", "bride"],
  },
  {
    title: "Baby & Nursery Crafts",
    description: "Onesies, nursery decor, and baby shower projects.",
    href: "/niches/baby-nursery",
    category: "Niche",
    keywords: ["baby", "nursery", "onesie", "shower", "newborn", "kids"],
  },
  {
    title: "Pet Projects",
    description: "Pet tags, bowls, bandanas, and memorial items.",
    href: "/niches/pets",
    category: "Niche",
    keywords: ["pet", "dog", "cat", "bandana", "bowl", "tag", "memorial"],
  },
  {
    title: "Seasonal & Holiday Crafts",
    description: "Christmas, Halloween, Easter, and holiday decorations.",
    href: "/niches/seasonal",
    category: "Niche",
    keywords: ["christmas", "halloween", "easter", "holiday", "seasonal", "ornament"],
  },
];

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const results = useMemo(() => {
    if (!query.trim()) return [];
    
    const searchTerms = query.toLowerCase().split(" ");
    
    return searchableContent
      .map((item) => {
        const searchableText = [
          item.title,
          item.description,
          ...item.keywords,
        ].join(" ").toLowerCase();
        
        let score = 0;
        for (const term of searchTerms) {
          if (searchableText.includes(term)) {
            score += 1;
            // Boost for title matches
            if (item.title.toLowerCase().includes(term)) score += 2;
            // Boost for keyword matches
            if (item.keywords.some(k => k.includes(term))) score += 1;
          }
        }
        
        return { ...item, score };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score);
  }, [query]);

  const categoryColors: Record<string, string> = {
    Guide: "bg-pink-100 text-pink-700",
    Tool: "bg-blue-100 text-blue-700",
    Problem: "bg-yellow-100 text-yellow-700",
    Niche: "bg-green-100 text-green-700",
  };

  return (
    <main className="min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-pink-500 hover:underline">← Home</Link>
          <h1 className="text-3xl font-bold text-gray-800 mt-4">
            🔍 Search Results
          </h1>
          {query && (
            <p className="text-gray-600 mt-2">
              {results.length} result{results.length !== 1 ? "s" : ""} for "{query}"
            </p>
          )}
        </div>

        {!query ? (
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <p className="text-gray-500 text-lg">Enter a search term to find guides, tools, and solutions.</p>
            <div className="mt-6">
              <h3 className="font-semibold text-gray-700 mb-3">Popular Searches</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {["not cutting", "bluetooth", "htv peeling", "design space slow", "heat press temperature"].map((term) => (
                  <Link
                    key={term}
                    href={`/search?q=${encodeURIComponent(term)}`}
                    className="px-3 py-1 bg-pink-50 text-pink-600 rounded-full text-sm hover:bg-pink-100"
                  >
                    {term}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ) : results.length === 0 ? (
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <p className="text-gray-500 text-lg mb-4">No results found for "{query}"</p>
            <p className="text-gray-400">Try different keywords or check out these popular pages:</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/troubleshoot" className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600">
                Troubleshoot
              </Link>
              <Link href="/guides" className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
                Guides
              </Link>
              <Link href="/materials" className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
                Materials
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {results.map((result) => (
              <Link
                key={result.href}
                href={result.href}
                className="block bg-white rounded-xl shadow hover:shadow-md transition-shadow p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${categoryColors[result.category]}`}>
                        {result.category}
                      </span>
                    </div>
                    <h2 className="text-lg font-semibold text-gray-900 hover:text-pink-600">
                      {result.title}
                    </h2>
                    <p className="text-gray-600 mt-1">{result.description}</p>
                  </div>
                  <span className="text-pink-400 text-xl">→</span>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Quick Links */}
        <div className="mt-12 bg-pink-50 rounded-xl p-6">
          <h3 className="font-bold text-gray-800 mb-4">Can't find what you're looking for?</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/troubleshoot" className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
              <span className="text-2xl">🔧</span>
              <div>
                <div className="font-semibold text-gray-800">Troubleshooting Wizard</div>
                <div className="text-sm text-gray-500">Step-by-step problem diagnosis</div>
              </div>
            </Link>
            <Link href="/problems" className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
              <span className="text-2xl">❓</span>
              <div>
                <div className="font-semibold text-gray-800">Common Problems</div>
                <div className="text-sm text-gray-500">Browse all known issues</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-500">Loading search...</div>
      </div>
    }>
      <SearchResults />
    </Suspense>
  );
}
