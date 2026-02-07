'use client';

const projects = [
  { name: "Pet Bandanas", materials: "HTV on fabric", icon: "🐕", tips: "Use stretchy HTV for comfort, cold wash only" },
  { name: "Food Bowl Labels", materials: "Permanent vinyl", icon: "🍖", tips: "Dishwasher-safe vinyl for durability" },
  { name: "Treat Jar Labels", materials: "Vinyl", icon: "🦴", tips: "Names, 'Treats', cute paw prints" },
  { name: "Pet Portraits", materials: "Layered vinyl", icon: "🖼️", tips: "Convert photo to SVG, layer colors" },
  { name: "Car Decals", materials: "Outdoor vinyl", icon: "🚗", tips: "'Dog Mom', breed silhouettes, names" },
  { name: "Collar Tags", materials: "Faux leather, Infusible Ink", icon: "🏷️", tips: "Add phone number, durable materials" },
  { name: "Pet Beds", materials: "HTV on fabric", icon: "🛏️", tips: "Personalize store-bought beds" },
  { name: "Memorial Items", materials: "Various", icon: "🌈", tips: "Rainbow bridge tributes, paw prints" },
  { name: "Toy Box Labels", materials: "Vinyl", icon: "📦", tips: "Organize pet supplies" },
  { name: "Costume Pieces", materials: "Felt, fabric", icon: "🎃", tips: "Halloween, holidays, photos" },
];

const breeds = [
  "German Shepherd", "Golden Retriever", "Labrador", "French Bulldog", "Bulldog",
  "Poodle", "Beagle", "Rottweiler", "Dachshund", "Corgi", "Husky", "Boxer",
  "Great Dane", "Chihuahua", "Pomeranian", "Shih Tzu", "Boston Terrier",
  "Cat silhouettes", "Paw prints", "Pet bones"
];

export default function PetsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-6xl mb-4 block">🐕</span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cricut for Pet Lovers</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Personalized pet bandanas, bowl labels, car decals, and memorial items for fur parents.
          </p>
        </div>

        {/* Market Note */}
        <div className="bg-amber-100 border-2 border-amber-300 rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-bold text-amber-800 mb-2">📈 Pet Market Opportunity</h2>
          <p className="text-amber-700">
            Pet owners spend <strong>$136 billion annually</strong> on their pets. Personalized pet items 
            are huge on Etsy — bandanas, portraits, and memorial items especially.
          </p>
        </div>

        {/* Projects */}
        <section className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🦴 Pet Projects</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((project) => (
              <div key={project.name} className="bg-amber-50 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{project.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-900">{project.name}</h3>
                    <p className="text-xs text-gray-500">{project.materials}</p>
                    <p className="text-sm text-amber-600 mt-1">💡 {project.tips}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Breeds */}
        <section className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🐾 Popular Breed Silhouettes</h2>
          <p className="text-gray-600 mb-4">Breed-specific designs are bestsellers. Stock up on these SVGs:</p>
          <div className="flex flex-wrap gap-2">
            {breeds.map((breed) => (
              <span key={breed} className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm">
                {breed}
              </span>
            ))}
          </div>
        </section>

        {/* Tips */}
        <section className="bg-amber-100 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">💡 Pet-Safe Tips</h2>
          <ul className="space-y-3 text-gray-700">
            <li>• <strong>Bandana HTV:</strong> Use soft, stretchy HTV. Stiff vinyl can irritate pets.</li>
            <li>• <strong>Placement:</strong> Keep designs away from edges pets might chew.</li>
            <li>• <strong>Food bowls:</strong> Use dishwasher-safe vinyl or apply to OUTSIDE only.</li>
            <li>• <strong>Collar safety:</strong> Avoid anything that could catch or snag.</li>
            <li>• <strong>Memorial items:</strong> Rainbow bridge, paw prints, and "forever in my heart" sell well.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
