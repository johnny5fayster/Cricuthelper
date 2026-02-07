'use client';

import Link from 'next/link';

const materials = [
  { name: "EVA Foam (2mm)", blade: "Deep-Point", pressure: "320-340", passes: "2-3", notes: "Go slow, clean blade often" },
  { name: "EVA Foam (4mm)", blade: "Knife Blade", pressure: "350+", passes: "4-8", notes: "Tape to mat, patience required" },
  { name: "EVA Foam (6mm+)", blade: "Knife Blade", pressure: "Max", passes: "8-15", notes: "May need manual finishing" },
  { name: "Craft Foam (thin)", blade: "Fine-Point", pressure: "280-300", passes: "1-2", notes: "Easy to cut, great for details" },
  { name: "Worbla (thermoplastic)", blade: "Deep-Point", pressure: "300-320", passes: "2-3", notes: "Cut before heating" },
  { name: "Sintra/PVC Board", blade: "Knife Blade", pressure: "Max", passes: "6-10", notes: "Maker only, ventilate!" },
  { name: "Vinyl for Stencils", blade: "Fine-Point", pressure: "Default", passes: "1", notes: "For painting details" },
  { name: "Fabric (cotton/poly)", blade: "Rotary/Bonded", pressure: "Default", passes: "1", notes: "Use fabric stabilizer" },
  { name: "Faux Leather", blade: "Deep-Point", pressure: "340", passes: "2", notes: "Great for armor accents" },
  { name: "Cardstock (templates)", blade: "Fine-Point", pressure: "Default", passes: "1", notes: "Pattern making" },
];

const projects = [
  { name: "Armor Pieces", difficulty: "Advanced", materials: ["EVA Foam", "Worbla"], tips: "Score fold lines, don't cut through" },
  { name: "Weapon Props", difficulty: "Advanced", materials: ["EVA Foam", "PVC"], tips: "Layer foam for dimension" },
  { name: "Fabric Appliques", difficulty: "Beginner", materials: ["HTV", "Fabric"], tips: "Mirror your design!" },
  { name: "Detail Stencils", difficulty: "Beginner", materials: ["Vinyl"], tips: "Use for painting armor details" },
  { name: "LED Channels", difficulty: "Intermediate", materials: ["EVA Foam"], tips: "Cut channels for LED strips" },
  { name: "Helmet Pieces", difficulty: "Advanced", materials: ["EVA Foam", "Worbla"], tips: "Use pepakura patterns" },
  { name: "Wings/Accessories", difficulty: "Intermediate", materials: ["Craft Foam", "Fabric"], tips: "Reinforce with wire" },
  { name: "Weathering Stencils", difficulty: "Beginner", materials: ["Vinyl", "Cardstock"], tips: "Create damage patterns" },
];

const tips = [
  { title: "Blade Life", content: "EVA foam dulls blades FAST. Keep 5-10 extra blades on hand. Switch when cuts get rough." },
  { title: "Mat Protection", content: "Use StrongGrip mats only. Put painter's tape on mat surface to extend life with foam." },
  { title: "Heat Shaping", content: "Cut Worbla BEFORE heating. Heat gun at 250°F to shape. It re-hardens when cool." },
  { title: "Scaling Patterns", content: "Use Design Space's resize tool. Measure your body, scale patterns to match." },
  { title: "Score Lines", content: "Create fold lines by doing a partial cut (reduce pressure 50%). Don't cut through!" },
  { title: "Intricate Details", content: "Cut details separately in thin craft foam, glue on top of base foam pieces." },
  { title: "Registration Marks", content: "Add small circles at corners of multi-piece patterns for alignment." },
  { title: "Smooth Edges", content: "Use a heat gun briefly on EVA edges to seal and smooth cut marks." },
];

export default function CosplayPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-12">
          <span className="text-6xl mb-4 block">🎭</span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cricut for Cosplay
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cut EVA foam, Worbla, fabric, and more for your next costume build. 
            Settings, tips, and troubleshooting for cosplay crafters.
          </p>
        </div>

        {/* Material Settings */}
        <section className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">⚔️ Material Cut Settings</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-purple-50">
                <tr>
                  <th className="text-left p-3 font-semibold">Material</th>
                  <th className="text-left p-3 font-semibold">Blade</th>
                  <th className="text-left p-3 font-semibold">Pressure</th>
                  <th className="text-left p-3 font-semibold">Passes</th>
                  <th className="text-left p-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {materials.map((mat, i) => (
                  <tr key={mat.name} className={i % 2 === 0 ? 'bg-gray-50' : ''}>
                    <td className="p-3 font-medium">{mat.name}</td>
                    <td className="p-3">{mat.blade}</td>
                    <td className="p-3">{mat.pressure}</td>
                    <td className="p-3">{mat.passes}</td>
                    <td className="p-3 text-sm text-gray-600">{mat.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            ⚠️ EVA foam and Worbla require Cricut Maker or Maker 3. Explore machines can handle thin craft foam only.
          </p>
        </section>

        {/* Project Ideas */}
        <section className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🛡️ Project Ideas</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((project) => (
              <div key={project.name} className="bg-purple-50 rounded-xl p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-gray-900">{project.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    project.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                    project.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {project.difficulty}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Materials:</strong> {project.materials.join(', ')}
                </p>
                <p className="text-sm text-purple-700">💡 {project.tips}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pro Tips */}
        <section className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">⚡ Cosplay Pro Tips</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {tips.map((tip) => (
              <div key={tip.title} className="border border-purple-100 rounded-xl p-4">
                <h3 className="font-bold text-purple-700 mb-2">{tip.title}</h3>
                <p className="text-gray-600">{tip.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="bg-purple-100 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🔧 Common Cosplay Cutting Problems</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-4">
              <h3 className="font-bold text-gray-900">EVA foam tearing instead of cutting clean?</h3>
              <p className="text-gray-600">Blade is dull. Replace it — foam destroys blades fast. Also try slower speed and more passes.</p>
            </div>
            <div className="bg-white rounded-xl p-4">
              <h3 className="font-bold text-gray-900">Foam pieces won't stay on mat?</h3>
              <p className="text-gray-600">Use StrongGrip mat + painter's tape on edges. For thick foam, tape directly to mat surface.</p>
            </div>
            <div className="bg-white rounded-xl p-4">
              <h3 className="font-bold text-gray-900">Cuts not going all the way through?</h3>
              <p className="text-gray-600">Increase passes (not pressure). 6mm foam needs 8-15 passes. Be patient!</p>
            </div>
            <div className="bg-white rounded-xl p-4">
              <h3 className="font-bold text-gray-900">Details coming out rough?</h3>
              <p className="text-gray-600">Cut details separately in thinner foam (2mm or craft foam) and glue onto base pieces.</p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link 
              href="/troubleshoot"
              className="inline-block bg-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-600 transition-colors"
            >
              More Troubleshooting Help →
            </Link>
          </div>
        </section>

        {/* Machine Recommendation */}
        <section className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 Which Cricut for Cosplay?</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-bold text-gray-900 mb-2">Cricut Joy</h3>
              <p className="text-red-600 font-medium">❌ Not Recommended</p>
              <p className="text-sm text-gray-600 mt-2">Too small, can't cut foam or thick materials.</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-bold text-gray-900 mb-2">Cricut Explore 3</h3>
              <p className="text-yellow-600 font-medium">⚠️ Limited</p>
              <p className="text-sm text-gray-600 mt-2">Good for vinyl stencils, fabric, thin craft foam only.</p>
            </div>
            <div className="border border-purple-300 rounded-xl p-4 bg-purple-50">
              <h3 className="font-bold text-gray-900 mb-2">Cricut Maker 3</h3>
              <p className="text-green-600 font-medium">✅ Best Choice</p>
              <p className="text-sm text-gray-600 mt-2">Knife blade for EVA foam, rotary for fabric, 10x cutting force.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
