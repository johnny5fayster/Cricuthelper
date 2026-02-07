'use client';

const projects = [
  { name: "Wedding Signs", materials: "Vinyl on wood/acrylic", icon: "💒", tips: "Welcome signs, seating charts, bar menus" },
  { name: "Invitations", materials: "Cardstock", icon: "💌", tips: "Intricate cuts, foil quill accents" },
  { name: "Cake Toppers", materials: "Cardstock, acrylic", icon: "🎂", tips: "Names, dates, 'Mr & Mrs'" },
  { name: "Table Numbers", materials: "Cardstock, vinyl", icon: "🔢", tips: "Match your theme and colors" },
  { name: "Favor Tags", materials: "Cardstock", icon: "🏷️", tips: "Bulk cut saves hours" },
  { name: "Place Cards", materials: "Cardstock", icon: "📍", tips: "Tent fold or flat styles" },
  { name: "Koozies", materials: "HTV", icon: "🍺", tips: "Custom for wedding party gifts" },
  { name: "Tote Bags", materials: "HTV", icon: "👜", tips: "Bridesmaid gifts, welcome bags" },
  { name: "Wine Labels", materials: "Printable vinyl", icon: "🍷", tips: "Table wine, favors" },
  { name: "Photo Props", materials: "Cardstock", icon: "📸", tips: "Mustaches, lips, phrases" },
  { name: "Ring Bearer Box", materials: "Cardstock, wood", icon: "💍", tips: "Custom names and dates" },
  { name: "Vow Books", materials: "Cardstock covers", icon: "📖", tips: "Personalized covers" },
];

const timeline = [
  { time: "6+ months", tasks: "Save the dates, engagement party decor" },
  { time: "4-6 months", tasks: "Invitations, RSVP cards, envelopes" },
  { time: "2-3 months", tasks: "Signs, table numbers, seating chart" },
  { time: "1 month", tasks: "Favor tags, place cards, programs" },
  { time: "1-2 weeks", tasks: "Last minute signs, touch-ups" },
];

export default function WeddingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-6xl mb-4 block">💒</span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cricut for Weddings</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            DIY wedding decor, invitations, signage, and favors. Save thousands with Cricut.
          </p>
        </div>

        {/* Cost Savings */}
        <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-bold text-green-800 mb-2">💰 Average Savings</h2>
          <p className="text-green-700">
            DIY wedding signage and favors with Cricut saves <strong>$500-2,000+</strong> compared to 
            professional printing and Etsy purchases. Invitations alone can save $300+.
          </p>
        </div>

        {/* Projects */}
        <section className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">💐 Wedding Projects</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {projects.map((project) => (
              <div key={project.name} className="bg-rose-50 rounded-xl p-4">
                <span className="text-2xl">{project.icon}</span>
                <h3 className="font-bold text-gray-900 mt-2">{project.name}</h3>
                <p className="text-xs text-gray-500">{project.materials}</p>
                <p className="text-sm text-rose-600 mt-1">{project.tips}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📅 DIY Wedding Timeline</h2>
          <div className="space-y-4">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                  {item.time}
                </div>
                <p className="text-gray-700">{item.tasks}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tips */}
        <section className="bg-rose-100 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">💡 Wedding Cricut Tips</h2>
          <ul className="space-y-3 text-gray-700">
            <li>• <strong>Buy materials in bulk</strong> — cardstock, vinyl, and HTV are cheaper in large quantities</li>
            <li>• <strong>Test your designs first</strong> — do a full mock-up before cutting 100 invitations</li>
            <li>• <strong>Batch similar tasks</strong> — cut all cardstock, then all vinyl, etc.</li>
            <li>• <strong>Start early</strong> — Cricut projects take longer than expected</li>
            <li>• <strong>Have backup materials</strong> — mistakes happen, especially with intricate cuts</li>
            <li>• <strong>Consider a Cricut Access subscription</strong> — tons of wedding fonts and designs</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
