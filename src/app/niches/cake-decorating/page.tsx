'use client';

import Link from 'next/link';

const materials = [
  { name: "Gum Paste (rolled thin)", blade: "Fine-Point", pressure: "Light", notes: "Cut immediately after rolling, before it dries" },
  { name: "Fondant (firm)", blade: "Fine-Point", pressure: "Light-Medium", notes: "Chill slightly for cleaner cuts" },
  { name: "Wafer Paper", blade: "Fine-Point", pressure: "Very Light", notes: "Fragile! Test first, minimal pressure" },
  { name: "Frosting Sheets", blade: "Fine-Point", pressure: "Light", notes: "Edible ink printed sheets" },
  { name: "Sugar Sheets", blade: "Fine-Point", pressure: "Light", notes: "Keep covered until ready to use" },
  { name: "Food-Safe Stencil Vinyl", blade: "Fine-Point", pressure: "Default", notes: "For airbrush/dusting stencils" },
  { name: "Cardstock (templates)", blade: "Fine-Point", pressure: "Default", notes: "Make reusable cutting guides" },
];

const projects = [
  { name: "Cake Toppers", description: "Names, numbers, phrases cut from gum paste or fondant" },
  { name: "Fondant Flowers", description: "Petal shapes to assemble into roses, daisies, etc." },
  { name: "Character Cutouts", description: "Detailed fondant figures and shapes" },
  { name: "Lace Patterns", description: "Intricate edible lace from wafer paper" },
  { name: "Airbrush Stencils", description: "Reusable vinyl stencils for cake painting" },
  { name: "Cookie Stencils", description: "Royal icing stencil designs" },
  { name: "Cupcake Toppers", description: "Small decorative picks and wraps" },
  { name: "Number/Letter Cutters", description: "Custom fonts and sizes" },
];

const tips = [
  { title: "Food Safety", content: "Use a DEDICATED mat and blade for food items only. Never use the same mat you've cut vinyl on!" },
  { title: "Fondant Prep", content: "Roll to 2-3mm thickness. Too thin tears, too thick won't cut through. Chill 10 min for best results." },
  { title: "Wafer Paper", content: "Extremely delicate. Use absolute minimum pressure. Consider cutting 2-3 at once for stability." },
  { title: "Speed Matters", content: "Slow speed for intricate designs. Fast mode can tear delicate edibles." },
  { title: "Template Method", content: "Cut cardstock templates first, then hand-cut fondant using templates. Faster for multiples!" },
  { title: "Stencil Trick", content: "Cut vinyl stencils, apply to cake, dust with luster dust or airbrush. Remove for perfect design." },
];

export default function CakeDecoratingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-12">
          <span className="text-6xl mb-4 block">🎂</span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cricut for Cake Decorating
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cut fondant, gum paste, wafer paper, and stencils for stunning cake and cookie designs.
          </p>
        </div>

        {/* Food Safety Warning */}
        <div className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-bold text-yellow-800 mb-2">⚠️ Food Safety First!</h2>
          <ul className="text-yellow-700 space-y-2">
            <li>• Use a <strong>dedicated mat and blade</strong> for food items ONLY</li>
            <li>• Never use materials that have touched vinyl, HTV, or other crafts</li>
            <li>• Clean your machine's rollers before cutting edibles</li>
            <li>• Consider a separate blade housing for food use</li>
          </ul>
        </div>

        {/* Material Settings */}
        <section className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🍰 Edible Material Settings</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-pink-50">
                <tr>
                  <th className="text-left p-3 font-semibold">Material</th>
                  <th className="text-left p-3 font-semibold">Blade</th>
                  <th className="text-left p-3 font-semibold">Pressure</th>
                  <th className="text-left p-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {materials.map((mat, i) => (
                  <tr key={mat.name} className={i % 2 === 0 ? 'bg-gray-50' : ''}>
                    <td className="p-3 font-medium">{mat.name}</td>
                    <td className="p-3">{mat.blade}</td>
                    <td className="p-3">{mat.pressure}</td>
                    <td className="p-3 text-sm text-gray-600">{mat.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Project Ideas */}
        <section className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🧁 Project Ideas</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((project) => (
              <div key={project.name} className="bg-pink-50 rounded-xl p-4">
                <h3 className="font-bold text-gray-900 mb-1">{project.name}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pro Tips */}
        <section className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">💡 Pro Tips</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {tips.map((tip) => (
              <div key={tip.title} className="border border-pink-100 rounded-xl p-4">
                <h3 className="font-bold text-pink-600 mb-2">{tip.title}</h3>
                <p className="text-gray-600">{tip.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="bg-pink-100 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🔧 Common Issues</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-4">
              <h3 className="font-bold text-gray-900">Fondant sticking to mat?</h3>
              <p className="text-gray-600">Dust lightly with cornstarch before placing on mat. Don't overdo it or cuts won't stick together.</p>
            </div>
            <div className="bg-white rounded-xl p-4">
              <h3 className="font-bold text-gray-900">Wafer paper tearing?</h3>
              <p className="text-gray-600">Use absolute minimum pressure. Try stacking 2-3 sheets. Humidity makes it fragile — keep dry.</p>
            </div>
            <div className="bg-white rounded-xl p-4">
              <h3 className="font-bold text-gray-900">Fondant drying out during cut?</h3>
              <p className="text-gray-600">Work in small batches. Keep unused fondant wrapped. Intricate designs = faster drying.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
