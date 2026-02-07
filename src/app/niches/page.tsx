'use client';

import Link from 'next/link';

const niches = [
  {
    slug: "cosplay",
    name: "Cosplay & Props",
    icon: "🎭",
    description: "EVA foam armor, Worbla thermoplastics, costume pieces, and prop building",
    color: "purple",
  },
  {
    slug: "cake-decorating",
    name: "Cake & Cookie Decorating",
    icon: "🎂",
    description: "Fondant cutting, cake toppers, cookie stencils, and edible decorations",
    color: "pink",
  },
  {
    slug: "baby-nursery",
    name: "Baby & Nursery",
    icon: "👶",
    description: "Onesies, wall decals, milestone blankets, and baby shower gifts",
    color: "blue",
  },
  {
    slug: "wedding",
    name: "Weddings",
    icon: "💒",
    description: "Invitations, signage, cake toppers, favors, and bridal party gifts",
    color: "rose",
  },
  {
    slug: "pets",
    name: "Pet Lovers",
    icon: "🐕",
    description: "Pet bandanas, bowl labels, car decals, and memorial items",
    color: "amber",
  },
  {
    slug: "memorial",
    name: "Memorial Items",
    icon: "🕊️",
    description: "Memory boxes, ornaments, grave markers, and tribute keepsakes",
    color: "slate",
  },
  {
    slug: "seasonal",
    name: "Seasonal & Holidays",
    icon: "🎄",
    description: "Christmas, Halloween, Easter, and year-round holiday crafts",
    color: "emerald",
  },
  {
    slug: "home-staging",
    name: "Home Staging & Realtors",
    icon: "🏠",
    description: "Welcome signs, address numbers, staging decor, and realtor branding",
    color: "teal",
  },
];

export default function NichesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cricut Project Niches
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized guides for different crafting communities. Find your niche and get 
            materials, settings, project ideas, and selling tips.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {niches.map((niche) => (
            <Link
              key={niche.slug}
              href={`/niches/${niche.slug}`}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow border-2 border-transparent hover:border-pink-200"
            >
              <div className="flex items-start gap-4">
                <span className="text-5xl">{niche.icon}</span>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{niche.name}</h2>
                  <p className="text-gray-600">{niche.description}</p>
                  <span className="inline-block mt-3 text-pink-500 font-medium">
                    Explore →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-pink-100 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Don't See Your Niche?
          </h2>
          <p className="text-gray-700 mb-4">
            We're always adding more! Check out our general guides or let us know what you'd like to see.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/materials"
              className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors"
            >
              📋 Material Settings
            </Link>
            <Link
              href="/troubleshoot"
              className="bg-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition-colors"
            >
              🔧 Troubleshooting
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
