import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cricut Blade Guide: Which Blade for Every Material | CricutHelper',
  description: 'Complete guide to every Cricut blade. Fine Point, Deep Point, Rotary, Knife, and more. Learn which blade to use for vinyl, cardstock, fabric, leather, and 50+ materials.',
  keywords: 'cricut blades, cricut blade guide, which cricut blade, fine point blade, deep point blade, rotary blade, knife blade, cricut blade for vinyl',
  openGraph: {
    title: 'Cricut Blade Guide: Which Blade for Every Material',
    description: 'Master every Cricut blade. Know exactly which blade to use for any material.',
    type: 'article',
  },
};

const faqs = [
  {
    question: "How often should I change my Cricut blade?",
    answer: "Replace your Fine Point blade every 2-4 months with regular use, or when you notice tearing, incomplete cuts, or dragging. Heavy users may need monthly replacements. Premium blades last 2-3x longer."
  },
  {
    question: "Can I use third-party blades in my Cricut?",
    answer: "Yes, many crafters use compatible third-party blades like those from Cricut Joy or Amazon. They're often cheaper and work well, though quality varies. Stick with well-reviewed brands."
  },
  {
    question: "Why is my Cricut blade not cutting through?",
    answer: "Common causes: dull blade, wrong blade for the material, incorrect pressure setting, blade not seated properly, or debris in the housing. Try a new blade first—it's usually the issue."
  },
  {
    question: "What blade comes with Cricut machines?",
    answer: "Explore Air 2/3 includes the Fine Point blade. Maker/Maker 3 includes Fine Point and Rotary blades. Joy includes the Joy blade. Venture includes Fine Point."
  },
  {
    question: "Can I use a Deep Point blade for vinyl?",
    answer: "You can, but it's overkill. Deep Point is for thicker materials. For regular vinyl, the Fine Point blade gives cleaner cuts and extends blade life."
  }
];

export default function CricutBladeGuidePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Cricut Blade Guide: Which Blade for Every Material",
    "description": "Complete guide to all Cricut blades with material compatibility charts.",
    "author": { "@type": "Organization", "name": "CricutHelper" },
    "publisher": { "@type": "Organization", "name": "CricutHelper" },
    "datePublished": "2026-02-08",
    "dateModified": "2026-02-08"
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <main className="min-h-screen bg-gradient-to-b from-[#FAF8F5] to-white py-12">
        <article className="max-w-4xl mx-auto px-4">
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/guides" className="text-[#9CAF88] hover:text-[#6B7F5E]">
                ← Back to Guides
              </Link>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Cricut Blade Guide: Which Blade for Every Material
            </h1>
            <p className="text-xl text-gray-600">
              Stop guessing. This complete guide covers every Cricut blade—what it does, 
              which machines support it, and exactly when to use it.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
              <span>📖 18 min read</span>
              <span>•</span>
              <span>Updated February 2026</span>
            </div>
          </header>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 rounded-r-lg">
            <p className="font-semibold text-yellow-800">Quick Answer</p>
            <p className="text-yellow-700">
              For 90% of projects, you only need the <strong>Fine Point blade</strong> (vinyl, cardstock, paper). 
              Add the <strong>Deep Point blade</strong> for thicker materials and the <strong>Rotary blade</strong> 
              for fabric. Everything else is specialized.
            </p>
          </div>

          {/* Table of Contents */}
          <nav className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="font-bold text-gray-900 mb-4">📋 What's in This Guide</h2>
            <ul className="space-y-2 text-[#9CAF88]">
              <li><a href="#overview" className="hover:underline">→ Blade Overview Chart</a></li>
              <li><a href="#fine-point" className="hover:underline">→ Fine Point Blade (The Essential)</a></li>
              <li><a href="#deep-point" className="hover:underline">→ Deep Point Blade (Thick Materials)</a></li>
              <li><a href="#rotary" className="hover:underline">→ Rotary Blade (Fabric)</a></li>
              <li><a href="#knife" className="hover:underline">→ Knife Blade (Heavy Duty)</a></li>
              <li><a href="#specialty" className="hover:underline">→ Specialty Blades & Tools</a></li>
              <li><a href="#material-chart" className="hover:underline">→ Material → Blade Quick Reference</a></li>
              <li><a href="#maintenance" className="hover:underline">→ Blade Maintenance & Replacement</a></li>
              <li><a href="#faqs" className="hover:underline">→ FAQs</a></li>
            </ul>
          </nav>

          {/* Blade Overview */}
          <section id="overview" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Cricut Blade Overview
            </h2>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-[#F5FAF3]">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">Blade</th>
                      <th className="px-4 py-3 text-left font-semibold">Best For</th>
                      <th className="px-4 py-3 text-left font-semibold">Machines</th>
                      <th className="px-4 py-3 text-left font-semibold">Housing</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">Fine Point</td>
                      <td className="px-4 py-3">Vinyl, paper, cardstock (up to 80lb)</td>
                      <td className="px-4 py-3">All Explore & Maker</td>
                      <td className="px-4 py-3">Silver</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">Deep Point</td>
                      <td className="px-4 py-3">Thick cardstock, magnet, foam, chipboard</td>
                      <td className="px-4 py-3">All Explore & Maker</td>
                      <td className="px-4 py-3">Black/Purple</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">Rotary</td>
                      <td className="px-4 py-3">Fabric (unbonded), felt, tissue paper</td>
                      <td className="px-4 py-3">Maker only</td>
                      <td className="px-4 py-3">Pink (gear icon)</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">Knife</td>
                      <td className="px-4 py-3">Balsa wood, leather, matboard (up to 2.4mm)</td>
                      <td className="px-4 py-3">Maker only</td>
                      <td className="px-4 py-3">Gray (gear icon)</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">Bonded Fabric</td>
                      <td className="px-4 py-3">Fabric with iron-on backing</td>
                      <td className="px-4 py-3">All Explore & Maker</td>
                      <td className="px-4 py-3">Pink (standard)</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">Joy Blade</td>
                      <td className="px-4 py-3">All Joy-compatible materials</td>
                      <td className="px-4 py-3">Joy only</td>
                      <td className="px-4 py-3">Joy housing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Fine Point Blade */}
          <section id="fine-point" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Fine Point Blade: The Essential
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              <p>
                The <strong>Fine Point blade</strong> is your workhorse. It comes with every Explore 
                and Maker machine and handles 90% of common crafting materials. If you only buy 
                one blade type, this is it.
              </p>
              
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="font-bold text-green-800 mb-3">✅ Fine Point Works Great For:</h3>
                <div className="grid md:grid-cols-2 gap-2 text-green-700">
                  <div>• Adhesive vinyl (permanent & removable)</div>
                  <div>• Heat transfer vinyl (HTV)</div>
                  <div>• Cardstock (up to 80lb)</div>
                  <div>• Copy paper & printer paper</div>
                  <div>• Patterned paper</div>
                  <div>• Sticker paper</div>
                  <div>• Vellum</div>
                  <div>• Washi sheets</div>
                  <div>• Faux leather (thin)</div>
                  <div>• Poster board</div>
                </div>
              </div>

              <div className="bg-gray-100 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3">Blade Specs</h3>
                <ul className="space-y-2">
                  <li><strong>Angle:</strong> 45 degrees</li>
                  <li><strong>Housing:</strong> Silver (standard clamp)</li>
                  <li><strong>Max thickness:</strong> ~0.5mm</li>
                  <li><strong>Lifespan:</strong> 2-4 months with regular use</li>
                </ul>
              </div>

              <h3 className="font-bold text-gray-900">Premium vs. Standard Fine Point</h3>
              <p>
                Cricut sells both a standard Fine Point blade ($7-10) and a <strong>Premium Fine Point 
                blade</strong> ($15-20). The premium version uses German carbide steel and lasts 
                significantly longer—typically 2-3x as many cuts.
              </p>
              <p>
                <strong>Our take:</strong> If you craft frequently (3+ times per week), the premium 
                blade pays for itself. For occasional crafters, the standard blade is fine.
              </p>
            </div>
          </section>

          {/* Deep Point Blade */}
          <section id="deep-point" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Deep Point Blade: For Thick Materials
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              <p>
                The <strong>Deep Point blade</strong> has a steeper 60-degree angle (vs. 45 degrees) 
                that lets it cut through thicker, denser materials that would overwhelm the Fine Point.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="font-bold text-blue-800 mb-3">✅ Deep Point Works Great For:</h3>
                <div className="grid md:grid-cols-2 gap-2 text-blue-700">
                  <div>• Thick cardstock (100lb+)</div>
                  <div>• Magnet sheets</div>
                  <div>• Chipboard</div>
                  <div>• Foam sheets (thin)</div>
                  <div>• Stiffened felt</div>
                  <div>• Stamp material</div>
                  <div>• Craft foam</div>
                  <div>• Cardboard (thin)</div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <h3 className="font-bold text-yellow-800 mb-3">⚠️ When NOT to Use Deep Point</h3>
                <p className="text-yellow-700">
                  Don't use Deep Point for regular vinyl or thin paper—it's overkill and will 
                  cut into your mat. Use Fine Point for everyday materials and save Deep Point 
                  for thick stuff.
                </p>
              </div>

              <div className="bg-gray-100 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3">Blade Specs</h3>
                <ul className="space-y-2">
                  <li><strong>Angle:</strong> 60 degrees</li>
                  <li><strong>Housing:</strong> Black or Purple (standard clamp)</li>
                  <li><strong>Max thickness:</strong> ~1.5mm</li>
                  <li><strong>Multi-pass:</strong> Often needs 2-3 passes for thick materials</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Rotary Blade */}
          <section id="rotary" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Rotary Blade: The Fabric Game-Changer
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              <div className="bg-[#F5FAF3] border border-[#B8C9A9] rounded-xl p-6 mb-4">
                <p className="text-[#6B7F5E] font-medium">
                  🎯 <strong>Maker Only:</strong> The Rotary blade requires the Maker's Adaptive Tool 
                  System. It won't work on Explore machines.
                </p>
              </div>

              <p>
                The <strong>Rotary blade</strong> is why many crafters choose Maker over Explore. 
                It's a rolling blade (like a tiny pizza cutter) that cuts fabric without backing—no 
                iron-on stabilizer needed.
              </p>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="font-bold text-green-800 mb-3">✅ Rotary Works Great For:</h3>
                <div className="grid md:grid-cols-2 gap-2 text-green-700">
                  <div>• Cotton & cotton blends</div>
                  <div>• Denim (thin to medium)</div>
                  <div>• Felt (unbonded)</div>
                  <div>• Silk & satin</div>
                  <div>• Crepe paper</div>
                  <div>• Tissue paper</div>
                  <div>• Cork (thin)</div>
                  <div>• Burlap</div>
                </div>
              </div>

              <h3 className="font-bold text-gray-900">Design Size Requirement</h3>
              <p>
                The Rotary blade needs designs at least <strong>3/4 inch (19mm)</strong> at the 
                narrowest point. It can't do small, intricate cuts—for that, use the Bonded Fabric 
                blade with stabilized fabric.
              </p>

              <div className="bg-gray-100 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3">Blade Specs</h3>
                <ul className="space-y-2">
                  <li><strong>Type:</strong> Rolling rotary cutter</li>
                  <li><strong>Housing:</strong> Pink (gear drive system)</li>
                  <li><strong>Mat:</strong> Use FabricGrip (pink) mat</li>
                  <li><strong>Minimum design size:</strong> 3/4 inch</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Knife Blade */}
          <section id="knife" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Knife Blade: Heavy Duty Cutting
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              <div className="bg-[#F5FAF3] border border-[#B8C9A9] rounded-xl p-6 mb-4">
                <p className="text-[#6B7F5E] font-medium">
                  🎯 <strong>Maker Only:</strong> The Knife blade uses the Adaptive Tool System and 
                  only works on Maker machines.
                </p>
              </div>

              <p>
                The <strong>Knife blade</strong> is essentially an X-ACTO knife that makes multiple 
                passes to cut through thick materials up to 2.4mm (3/32 inch). It's for serious 
                materials that no other blade can handle.
              </p>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="font-bold text-green-800 mb-3">✅ Knife Blade Works Great For:</h3>
                <div className="grid md:grid-cols-2 gap-2 text-green-700">
                  <div>• Balsa wood (1/16" to 3/32")</div>
                  <div>• Basswood (1/32")</div>
                  <div>• Tooling leather (2-3oz)</div>
                  <div>• Matboard</div>
                  <div>• Heavy chipboard</div>
                  <div>• Thick craft foam</div>
                  <div>• Corrugated cardboard</div>
                  <div>• 3mm acrylic (engraving only)</div>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="font-bold text-red-800 mb-3">⚠️ Knife Blade Tips</h3>
                <ul className="text-red-700 space-y-2">
                  <li>• <strong>Tape down material</strong> with masking tape—it will shift otherwise</li>
                  <li>• <strong>Use StrongGrip mat</strong> (purple) and tape edges</li>
                  <li>• <strong>Move star wheels</strong> to the side to prevent marks</li>
                  <li>• <strong>Expect long cut times</strong>—20+ passes for thick materials</li>
                  <li>• <strong>Stay nearby</strong>—cuts can take 30+ minutes</li>
                </ul>
              </div>

              <div className="bg-gray-100 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3">Blade Specs</h3>
                <ul className="space-y-2">
                  <li><strong>Type:</strong> Drag blade (like X-ACTO)</li>
                  <li><strong>Housing:</strong> Gray (gear drive system)</li>
                  <li><strong>Max thickness:</strong> 2.4mm (3/32 inch)</li>
                  <li><strong>Cut method:</strong> Multiple passes (10-20+)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Specialty Tools */}
          <section id="specialty" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Specialty Blades & Tools
            </h2>
            <div className="space-y-6">
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Bonded Fabric Blade</h3>
                <p className="text-gray-700 mb-3">
                  A specialized Fine Point for cutting fabric that's been backed with Heat'n Bond 
                  or similar stabilizer. Use with Explore machines or when you need intricate 
                  fabric cuts on Maker.
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Works on:</strong> All Explore & Maker | <strong>Housing:</strong> Pink (standard)
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Scoring Stylus / Scoring Wheel</h3>
                <p className="text-gray-700 mb-3">
                  Creates fold lines for cards, boxes, and 3D projects. The <strong>Scoring Stylus</strong> 
                  (Explore & Maker) uses pressure; the <strong>Scoring Wheel</strong> (Maker only) gives 
                  deeper, more precise score lines.
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Stylus:</strong> All machines | <strong>Wheel:</strong> Maker only
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Foil Transfer Tool</h3>
                <p className="text-gray-700 mb-3">
                  Transfers metallic foil onto paper, cardstock, and other smooth surfaces. Creates 
                  beautiful gold, silver, and colored foil effects for invitations and cards.
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Works on:</strong> Explore 3, Maker, Maker 3 | <strong>Tips:</strong> Fine, Medium, Bold
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Engraving Tip & Debossing Tip</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Engraving:</strong> Etches into aluminum, leather, acrylic, and more. 
                  <strong>Debossing:</strong> Creates pressed-in designs on paper, leather, and foil. 
                  Both are Maker-only tools.
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Works on:</strong> Maker only | <strong>Housing:</strong> QuickSwap
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Wavy Blade & Perforation Blade</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Wavy:</strong> Decorative wavy edge cuts for paper crafts. 
                  <strong>Perforation:</strong> Creates tear-away lines for tickets, coupons, and 
                  tear-off sheets. Both are Maker-only QuickSwap tools.
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Works on:</strong> Maker only | <strong>Housing:</strong> QuickSwap
                </p>
              </div>
            </div>
          </section>

          {/* Material Chart */}
          <section id="material-chart" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Material → Blade Quick Reference
            </h2>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-[#F5FAF3]">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">Material</th>
                      <th className="px-4 py-3 text-left font-semibold">Blade</th>
                      <th className="px-4 py-3 text-left font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-gray-50 bg-blue-50">
                      <td className="px-4 py-2 font-medium" colSpan={3}>Vinyl</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-2 pl-8">Adhesive vinyl</td>
                      <td className="px-4 py-2">Fine Point</td>
                      <td className="px-4 py-2 text-gray-600">Light to medium pressure</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-2 pl-8">HTV / Iron-on</td>
                      <td className="px-4 py-2">Fine Point</td>
                      <td className="px-4 py-2 text-gray-600">Mirror your design!</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-2 pl-8">Glitter vinyl</td>
                      <td className="px-4 py-2">Fine Point</td>
                      <td className="px-4 py-2 text-gray-600">More pressure, slower speed</td>
                    </tr>
                    
                    <tr className="hover:bg-gray-50 bg-blue-50">
                      <td className="px-4 py-2 font-medium" colSpan={3}>Paper</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-2 pl-8">Cardstock (up to 80lb)</td>
                      <td className="px-4 py-2">Fine Point</td>
                      <td className="px-4 py-2 text-gray-600">Standard settings work</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-2 pl-8">Heavy cardstock (100lb+)</td>
                      <td className="px-4 py-2">Deep Point</td>
                      <td className="px-4 py-2 text-gray-600">May need 2 passes</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-2 pl-8">Poster board</td>
                      <td className="px-4 py-2">Fine Point</td>
                      <td className="px-4 py-2 text-gray-600">Medium to more pressure</td>
                    </tr>
                    
                    <tr className="hover:bg-gray-50 bg-blue-50">
                      <td className="px-4 py-2 font-medium" colSpan={3}>Fabric</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-2 pl-8">Cotton (unbonded)</td>
                      <td className="px-4 py-2">Rotary</td>
                      <td className="px-4 py-2 text-gray-600">Maker only, 3/4" min</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-2 pl-8">Fabric (with backing)</td>
                      <td className="px-4 py-2">Bonded Fabric</td>
                      <td className="px-4 py-2 text-gray-600">Fine intricate cuts OK</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-2 pl-8">Felt (thin)</td>
                      <td className="px-4 py-2">Rotary or Deep</td>
                      <td className="px-4 py-2 text-gray-600">Rotary cleaner, Deep works</td>
                    </tr>
                    
                    <tr className="hover:bg-gray-50 bg-blue-50">
                      <td className="px-4 py-2 font-medium" colSpan={3}>Specialty</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-2 pl-8">Leather (thin/faux)</td>
                      <td className="px-4 py-2">Deep Point</td>
                      <td className="px-4 py-2 text-gray-600">2-3 passes usually needed</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-2 pl-8">Leather (tooling 2-3oz)</td>
                      <td className="px-4 py-2">Knife</td>
                      <td className="px-4 py-2 text-gray-600">Maker only, tape edges</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-2 pl-8">Balsa wood</td>
                      <td className="px-4 py-2">Knife</td>
                      <td className="px-4 py-2 text-gray-600">Maker only, up to 3/32"</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-2 pl-8">Chipboard</td>
                      <td className="px-4 py-2">Deep or Knife</td>
                      <td className="px-4 py-2 text-gray-600">Thin: Deep, Thick: Knife</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-2 pl-8">Magnet sheets</td>
                      <td className="px-4 py-2">Deep Point</td>
                      <td className="px-4 py-2 text-gray-600">2-3 passes</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-2 pl-8">Craft foam</td>
                      <td className="px-4 py-2">Deep Point</td>
                      <td className="px-4 py-2 text-gray-600">Works great</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Maintenance */}
          <section id="maintenance" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Blade Maintenance & Replacement
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">When to Replace Your Blade</h3>
                <p className="text-gray-700 mb-4">
                  Replace your blade when you notice any of these signs:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Tearing instead of clean cuts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Not cutting all the way through (even with more pressure)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Dragging or pulling the material</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Ragged edges on letters and shapes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Small details not cutting cleanly</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">How to Clean Blade Housings</h3>
                <ol className="space-y-3 text-gray-700">
                  <li><strong>1.</strong> Remove blade from housing using the push mechanism</li>
                  <li><strong>2.</strong> Blow out debris with compressed air</li>
                  <li><strong>3.</strong> Use a dry brush to remove stuck vinyl or paper bits</li>
                  <li><strong>4.</strong> Wipe housing with a dry cloth (no water!)</li>
                  <li><strong>5.</strong> Never lubricate—blades should stay dry</li>
                </ol>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">The Foil Ball Trick (Blade Refresh)</h3>
                <p className="text-gray-700 mb-4">
                  This popular hack can extend blade life slightly:
                </p>
                <ol className="space-y-2 text-gray-700">
                  <li><strong>1.</strong> Ball up aluminum foil to golf ball size</li>
                  <li><strong>2.</strong> Poke blade into foil ball 50+ times</li>
                  <li><strong>3.</strong> The foil helps remove tiny debris and can restore minor sharpness</li>
                </ol>
                <p className="text-sm text-gray-500 mt-4">
                  <strong>Reality check:</strong> This is a temporary fix. A truly dull blade needs replacing. 
                  Good for squeezing a few more cuts, not a long-term solution.
                </p>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section id="faqs" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Summary */}
          <section className="bg-gradient-to-r from-[#F5FAF3] to-purple-100 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Bottom Line
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                <strong>For most crafters:</strong> The Fine Point blade handles 90% of projects. 
                Add a Deep Point for thick materials if you work with cardboard, chipboard, or magnets.
              </p>
              <p>
                <strong>For sewers/quilters:</strong> The Maker's Rotary blade is a game-changer for 
                cutting fabric without backing. It's the main reason to choose Maker over Explore.
              </p>
              <p>
                <strong>For advanced projects:</strong> The Knife blade opens up leather, wood, and 
                matboard. Just prepare for longer cut times and more setup.
              </p>
            </div>
          </section>

          {/* Related Guides */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Guides</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link 
                href="/guides/cricut-maker-vs-explore"
                className="block bg-white rounded-xl shadow p-4 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-bold text-gray-900">Cricut Maker vs Explore</h3>
                <p className="text-sm text-gray-600">Which machine is right for you?</p>
              </Link>
              <Link 
                href="/guides/cricut-not-cutting-vinyl"
                className="block bg-white rounded-xl shadow p-4 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-bold text-gray-900">Cricut Not Cutting Through?</h3>
                <p className="text-sm text-gray-600">7 fixes that actually work</p>
              </Link>
              <Link 
                href="/guides/cricut-mat-not-sticky"
                className="block bg-white rounded-xl shadow p-4 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-bold text-gray-900">Mat Not Sticky Anymore?</h3>
                <p className="text-sm text-gray-600">How to clean and restick</p>
              </Link>
              <Link 
                href="/guides/cutting-cardstock-cricut"
                className="block bg-white rounded-xl shadow p-4 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-bold text-gray-900">Cutting Cardstock</h3>
                <p className="text-sm text-gray-600">Settings for every weight</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Still Having Cutting Issues?
            </h2>
            <p className="text-gray-600 mb-6">
              Try our troubleshooting wizard to diagnose the problem step-by-step.
            </p>
            <Link
              href="/troubleshoot"
              className="inline-block bg-[#9CAF88] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#6B7F5E] transition-colors"
            >
              Start Troubleshooting →
            </Link>
          </section>
        </article>
      </main>
    </>
  );
}
