'use client';

const projects = [
  { name: "Memorial Ornaments", materials: "Vinyl on clear acrylic", icon: "🎄", tips: "Photo + dates, 'Forever in our hearts'" },
  { name: "Memory Boxes", materials: "Vinyl on wood", icon: "📦", tips: "Store keepsakes, photos, mementos" },
  { name: "Grave Markers", materials: "Outdoor vinyl", icon: "🌹", tips: "Weather-resistant permanent vinyl" },
  { name: "Photo Frames", materials: "Vinyl", icon: "🖼️", tips: "Names, dates, meaningful quotes" },
  { name: "Memory Lanterns", materials: "Vinyl on glass", icon: "🕯️", tips: "Battery candles inside for vigils" },
  { name: "Garden Stones", materials: "Outdoor vinyl", icon: "🪨", tips: "Seal with outdoor Mod Podge" },
  { name: "Memory Books", materials: "Cardstock, vinyl", icon: "📖", tips: "Scrapbook covers and pages" },
  { name: "Wind Chimes", materials: "Vinyl", icon: "🎐", tips: "Names and dates on tubes" },
  { name: "Car Decals", materials: "Outdoor vinyl", icon: "🚗", tips: "'In Loving Memory' tributes" },
  { name: "Flower Vases", materials: "Vinyl on glass", icon: "💐", tips: "For graveside or home display" },
  { name: "Shadow Boxes", materials: "Vinyl, cardstock", icon: "🎁", tips: "Layer photos, flowers, mementos" },
  { name: "Angel Wings", materials: "Cardstock layers", icon: "👼", tips: "3D layered mandala style" },
];

const phrases = [
  "Forever in our hearts",
  "Gone but never forgotten",
  "Always in my heart",
  "Until we meet again",
  "Your wings were ready",
  "Forever loved",
  "In loving memory",
  "Gone too soon",
  "Always remembered",
  "Forever young",
  "Rest in peace",
  "Fly high",
];

export default function MemorialPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-6xl mb-4 block">🕊️</span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cricut for Memorial Items</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create meaningful tributes, keepsakes, and memorial items to honor loved ones.
          </p>
        </div>

        {/* Sensitivity Note */}
        <div className="bg-slate-100 border-2 border-slate-300 rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-2">💝 A Note on Memorial Crafts</h2>
          <p className="text-slate-700">
            Memorial items are deeply personal. When selling, offer customization and handle orders with 
            extra care and sensitivity. Many customers are grieving and appreciate compassionate service.
          </p>
        </div>

        {/* Projects */}
        <section className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🕯️ Memorial Projects</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((project) => (
              <div key={project.name} className="bg-slate-50 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{project.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-900">{project.name}</h3>
                    <p className="text-xs text-gray-500">{project.materials}</p>
                    <p className="text-sm text-slate-600 mt-1">💡 {project.tips}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Common Phrases */}
        <section className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">✨ Popular Memorial Phrases</h2>
          <div className="flex flex-wrap gap-2">
            {phrases.map((phrase) => (
              <span key={phrase} className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full">
                "{phrase}"
              </span>
            ))}
          </div>
        </section>

        {/* Tips */}
        <section className="bg-slate-100 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">💡 Memorial Craft Tips</h2>
          <ul className="space-y-3 text-gray-700">
            <li>• <strong>Outdoor items:</strong> Use permanent outdoor vinyl + sealant for weather resistance</li>
            <li>• <strong>Photo integration:</strong> Print photos on vinyl or use sublimation for permanence</li>
            <li>• <strong>Durability:</strong> Seal with UV-resistant clear coat for outdoor items</li>
            <li>• <strong>Selling tips:</strong> Offer rush orders — funerals come unexpectedly</li>
            <li>• <strong>Pet memorials:</strong> Rainbow bridge items are very popular</li>
            <li>• <strong>Fonts:</strong> Use elegant, easy-to-read fonts for names and dates</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
