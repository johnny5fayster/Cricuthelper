'use client';

const seasons = [
  {
    name: "Christmas",
    icon: "🎄",
    color: "red",
    projects: ["Ornaments", "Gift tags", "Stockings", "Tree toppers", "Cards", "Door signs", "Advent calendars"],
    timing: "Start Sept, peak Nov-Dec",
  },
  {
    name: "Halloween",
    icon: "🎃",
    color: "orange",
    projects: ["Trick-or-treat bags", "Costumes", "Yard signs", "Door decor", "Party supplies", "Shirts"],
    timing: "Start Aug, peak Sept-Oct",
  },
  {
    name: "Valentine's Day",
    icon: "💝",
    color: "pink",
    projects: ["Cards", "Gift boxes", "Shirts", "Mugs", "Classroom valentines", "Decor"],
    timing: "Start Dec, peak Jan-Feb",
  },
  {
    name: "Easter",
    icon: "🐰",
    color: "purple",
    projects: ["Basket tags", "Egg hunt signs", "Shirts", "Bunny decor", "Cards", "Table decor"],
    timing: "Start Feb, peak Mar-Apr",
  },
  {
    name: "4th of July",
    icon: "🇺🇸",
    color: "blue",
    projects: ["Patriotic shirts", "Yard signs", "Party decor", "Koozies", "Tumblers"],
    timing: "Start May, peak June-July",
  },
  {
    name: "Back to School",
    icon: "📚",
    color: "yellow",
    projects: ["Teacher gifts", "Labels", "Lunchbox notes", "Shirts", "Backpack tags"],
    timing: "Start July, peak Aug",
  },
  {
    name: "Thanksgiving",
    icon: "🦃",
    color: "amber",
    projects: ["Place cards", "Table runners", "Door signs", "Gratitude jars", "Shirts"],
    timing: "Start Oct, peak Nov",
  },
  {
    name: "St. Patrick's Day",
    icon: "☘️",
    color: "green",
    projects: ["Shirts", "Party decor", "Cards", "Lucky signs", "Drink koozies"],
    timing: "Start Feb, peak March",
  },
];

export default function SeasonalPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-6xl mb-4 block">🎄</span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cricut Seasonal Selling Calendar</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Know what to make and when. Seasonal items drive 60%+ of craft sales for many sellers.
          </p>
        </div>

        {/* Pro Tip */}
        <div className="bg-emerald-100 border-2 border-emerald-300 rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-bold text-emerald-800 mb-2">⏰ Timing is Everything</h2>
          <p className="text-emerald-700">
            Start creating seasonal items <strong>2-3 months before</strong> the holiday. Etsy's algorithm 
            favors listings with sales history, so early listings rank higher when peak season hits.
          </p>
        </div>

        {/* Seasonal Grid */}
        <section className="space-y-6">
          {seasons.map((season) => (
            <div key={season.name} className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">{season.icon}</span>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{season.name}</h2>
                  <p className="text-gray-500">{season.timing}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {season.projects.map((project) => (
                  <span 
                    key={project} 
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {project}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Year Calendar */}
        <section className="bg-white rounded-2xl shadow-lg p-6 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📅 Annual Production Calendar</h2>
          <div className="grid grid-cols-4 md:grid-cols-6 gap-2 text-center text-sm">
            {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((month, i) => (
              <div key={month} className="bg-gray-50 rounded-lg p-2">
                <div className="font-bold text-gray-900">{month}</div>
                <div className="text-xs text-gray-500 mt-1">
                  {i === 0 && "Valentine's"}
                  {i === 1 && "Valentine's, Easter prep"}
                  {i === 2 && "Easter, St. Pat's"}
                  {i === 3 && "Easter, Mother's Day"}
                  {i === 4 && "Mother's Day, Memorial"}
                  {i === 5 && "Father's Day, July 4th"}
                  {i === 6 && "July 4th, B2S"}
                  {i === 7 && "Back to School"}
                  {i === 8 && "Halloween, Fall"}
                  {i === 9 && "Halloween"}
                  {i === 10 && "Thanksgiving, Xmas"}
                  {i === 11 && "Christmas peak"}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tips */}
        <section className="bg-emerald-100 rounded-2xl p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">💡 Seasonal Selling Tips</h2>
          <ul className="space-y-3 text-gray-700">
            <li>• <strong>Batch production:</strong> Make 10-20 of each design before listing</li>
            <li>• <strong>Year-round listing:</strong> Keep seasonal items active all year for algorithm</li>
            <li>• <strong>Clearance strategy:</strong> Discount after holiday, don't remove listings</li>
            <li>• <strong>Personalization:</strong> Adding names/dates increases value 30-50%</li>
            <li>• <strong>Bundle deals:</strong> "Holiday party pack" bundles sell better than singles</li>
            <li>• <strong>Photo prep:</strong> Take product photos in advance, not during rush</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
