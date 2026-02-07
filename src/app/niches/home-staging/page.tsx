'use client';

const projects = [
  { name: "Welcome Signs", materials: "Vinyl on wood", icon: "🚪", tips: "Clean, neutral fonts sell homes" },
  { name: "Address Numbers", materials: "Vinyl on plaques", icon: "🏠", tips: "Modern, visible from street" },
  { name: "Room Labels", materials: "Removable vinyl", icon: "🏷️", tips: "Nursery, Office, Guest Room for staging" },
  { name: "Pantry Labels", materials: "Vinyl", icon: "🫙", tips: "Organized pantries impress buyers" },
  { name: "Laundry Signs", materials: "Vinyl on wood", icon: "🧺", tips: "Wash, Dry, Fold, Repeat" },
  { name: "Bathroom Signs", materials: "Vinyl", icon: "🚿", tips: "Guest towels, soap dispensers" },
  { name: "Open House Signs", materials: "Vinyl on foam board", icon: "🏘️", tips: "Arrows, directional signs" },
  { name: "Doormats", materials: "Stencil + paint", icon: "🚶", tips: "Welcome mats, custom addresses" },
  { name: "Pillow Covers", materials: "HTV on fabric", icon: "🛋️", tips: "Home Sweet Home, seasonal themes" },
  { name: "Table Numbers", materials: "Vinyl on acrylic", icon: "🪧", tips: "For staging furniture markers" },
  { name: "Kitchen Labels", materials: "Vinyl", icon: "🍳", tips: "Canister labels, drawer labels" },
  { name: "Realtor Gifts", materials: "Various", icon: "🎁", tips: "Closing gifts, client appreciation" },
];

const realtorBranding = [
  "Sold signs with custom branding",
  "Just Listed door hangers",
  "Business card holders",
  "Car decals (agent name, brokerage)",
  "Open house welcome signs",
  "Listing presentation folders",
  "Client gift tags",
  "Social media props",
];

export default function HomeStagingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-teal-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-6xl mb-4 block">🏠</span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cricut for Home Staging & Realtors</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional signage, staging decor, and realtor branding. Stand out in the real estate market.
          </p>
        </div>

        {/* Market Note */}
        <div className="bg-teal-100 border-2 border-teal-300 rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-bold text-teal-800 mb-2">💼 B2B Opportunity</h2>
          <p className="text-teal-700">
            Realtors and home stagers are <strong>repeat customers</strong>. One realtor might order 
            signs for every listing. Build relationships for recurring revenue.
          </p>
        </div>

        {/* Staging Projects */}
        <section className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🏡 Home Staging Projects</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((project) => (
              <div key={project.name} className="bg-teal-50 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{project.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-900">{project.name}</h3>
                    <p className="text-xs text-gray-500">{project.materials}</p>
                    <p className="text-sm text-teal-600 mt-1">💡 {project.tips}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Realtor Branding */}
        <section className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🏘️ Realtor Branding Items</h2>
          <p className="text-gray-600 mb-4">Offer these as a package deal to local realtors:</p>
          <div className="grid md:grid-cols-2 gap-2">
            {realtorBranding.map((item) => (
              <div key={item} className="flex items-center gap-2 p-2">
                <span className="text-teal-500">✓</span>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Design Tips */}
        <section className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🎨 Design Tips for Real Estate</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border-l-4 border-teal-400 pl-4">
              <h3 className="font-bold text-gray-900">Color Palette</h3>
              <p className="text-gray-600">Stick to neutrals: black, white, gray, navy, sage. They match any home decor.</p>
            </div>
            <div className="border-l-4 border-teal-400 pl-4">
              <h3 className="font-bold text-gray-900">Fonts</h3>
              <p className="text-gray-600">Modern, clean sans-serif or elegant scripts. Avoid trendy or novelty fonts.</p>
            </div>
            <div className="border-l-4 border-teal-400 pl-4">
              <h3 className="font-bold text-gray-900">Sizing</h3>
              <p className="text-gray-600">Signs should be readable from 10+ feet. Test visibility before installing.</p>
            </div>
            <div className="border-l-4 border-teal-400 pl-4">
              <h3 className="font-bold text-gray-900">Quality</h3>
              <p className="text-gray-600">Use premium materials. Realtors care about presentation and durability.</p>
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="bg-teal-100 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">💡 Selling to Realtors</h2>
          <ul className="space-y-3 text-gray-700">
            <li>• <strong>Bulk pricing:</strong> Offer discounts for 5+, 10+, 20+ items</li>
            <li>• <strong>Quick turnaround:</strong> Realtors often need signs within 48-72 hours</li>
            <li>• <strong>Local focus:</strong> Target realtors in your area, offer delivery</li>
            <li>• <strong>Brand consistency:</strong> Match their existing branding colors exactly</li>
            <li>• <strong>Closing gifts:</strong> Custom cutting boards, wine boxes, house ornaments</li>
            <li>• <strong>Samples:</strong> Give a free sample to top-producing realtors</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
