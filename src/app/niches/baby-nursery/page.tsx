'use client';

import Link from 'next/link';

const projects = [
  { name: "Wall Decals", materials: "Removable Vinyl", tips: "Use removable vinyl for easy changes as baby grows", icon: "🏠" },
  { name: "Onesie Designs", materials: "Infant-safe HTV", tips: "Use infant-safe, CPSIA-compliant HTV only", icon: "👶" },
  { name: "Milestone Blankets", materials: "HTV on cotton", tips: "Light pressure, wash inside out", icon: "📅" },
  { name: "Name Signs", materials: "Cardstock, Wood", tips: "Layer cardstock or use wood with Maker", icon: "✨" },
  { name: "Closet Dividers", materials: "Cardstock", tips: "Laminate for durability", icon: "👕" },
  { name: "Growth Charts", materials: "Vinyl on wood", tips: "Use outdoor vinyl for durability", icon: "📏" },
  { name: "Mobile Pieces", materials: "Cardstock, Felt", tips: "Double-layer for sturdiness", icon: "🌙" },
  { name: "Diaper Cake Toppers", materials: "Cardstock", tips: "Great for baby showers", icon: "🎀" },
  { name: "Bib Decorations", materials: "HTV", tips: "Check bib material compatibility", icon: "🍼" },
  { name: "Nursery Bunting", materials: "Fabric, Felt", tips: "Use rotary blade for fabric", icon: "🎏" },
];

const safetyTips = [
  { title: "HTV Safety", content: "Only use CPSIA-compliant, phthalate-free HTV for baby clothes. Check product labels!" },
  { title: "Placement", content: "Keep HTV designs away from baby's face and mouth area. Center chest or back is best." },
  { title: "Testing", content: "Always wash test items before gifting. Some HTV isn't truly infant-safe despite claims." },
  { title: "Wall Decals", content: "Use removable vinyl in nursery. Easy to remove without damage as styles change." },
  { title: "Small Parts", content: "Avoid small cutouts that could become choking hazards if they come off." },
];

const popularDesigns = [
  "Baby name with birth stats (weight, date, time)",
  "Monthly milestone numbers (1-12)",
  "Woodland animals (fox, deer, bear, owl)",
  "Safari animals (elephant, giraffe, lion)",
  "Floral wreaths and botanical elements",
  "Rainbow and cloud designs",
  "Moon and stars nursery theme",
  "Custom family name signs",
  "\"Worth the wait\" and announcement phrases",
  "Footprint and handprint outlines",
];

export default function BabyNurseryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-12">
          <span className="text-6xl mb-4 block">👶</span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cricut for Baby & Nursery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create adorable onesies, wall decals, milestone blankets, and nursery decor. 
            Safety tips included for baby-safe crafting.
          </p>
        </div>

        {/* Safety Warning */}
        <div className="bg-blue-100 border-2 border-blue-300 rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-bold text-blue-800 mb-2">👶 Baby Safety First!</h2>
          <p className="text-blue-700">
            When making items for infants, always use <strong>CPSIA-compliant, infant-safe materials</strong>. 
            Standard HTV may contain chemicals not safe for babies. Look for products specifically labeled 
            "infant safe" or "CPSIA compliant."
          </p>
        </div>

        {/* Project Ideas */}
        <section className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🎀 Project Ideas</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((project) => (
              <div key={project.name} className="bg-blue-50 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{project.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-900">{project.name}</h3>
                    <p className="text-sm text-gray-500">{project.materials}</p>
                    <p className="text-sm text-blue-600 mt-1">💡 {project.tips}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Designs */}
        <section className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">⭐ Popular Design Ideas</h2>
          <div className="grid md:grid-cols-2 gap-2">
            {popularDesigns.map((design) => (
              <div key={design} className="flex items-center gap-2 p-2">
                <span className="text-blue-400">•</span>
                <span className="text-gray-700">{design}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Safety Tips */}
        <section className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🛡️ Safety Tips</h2>
          <div className="space-y-4">
            {safetyTips.map((tip) => (
              <div key={tip.title} className="border-l-4 border-blue-400 pl-4">
                <h3 className="font-bold text-gray-900">{tip.title}</h3>
                <p className="text-gray-600">{tip.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Selling Tips */}
        <section className="bg-blue-100 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">💰 Selling Baby Items?</h2>
          <div className="space-y-3 text-gray-700">
            <p>Baby items are a <strong>huge market</strong> on Etsy and at craft fairs. Tips for success:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Always list materials and safety certifications</li>
              <li>Offer customization (names, colors, dates)</li>
              <li>Bundle items (onesie + blanket + bib sets)</li>
              <li>Target baby showers with gift-ready packaging</li>
              <li>Seasonal themes sell well (first Christmas, first Easter)</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
