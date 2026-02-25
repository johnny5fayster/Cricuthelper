import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Cut Thick Cardstock & Heavy Materials with Cricut: Settings & Techniques',
  description: 'Master cutting 65lb+ cardstock, chipboard, balsa wood, and heavy materials. Pressure settings, blade selection, multi-pass techniques, and troubleshooting tearing & dragging.',
  keywords: [
    'cricut thick cardstock settings',
    'cricut heavy material cutting',
    'cricut chipboard settings',
    'cricut 100lb cardstock',
    'cricut deep cut blade',
    'cricut knife blade',
    'cricut balsa wood',
    'cricut thick material pressure'
  ],
  openGraph: {
    title: 'How to Cut Thick Cardstock & Heavy Materials with Cricut',
    description: 'Complete guide to cutting 65lb+ cardstock, chipboard, balsa wood, and heavy materials with Cricut.',
    type: 'article',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What pressure setting should I use for thick cardstock on Cricut?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For 65-80lb cardstock, use 'Medium Cardstock - 80lb' setting. For 100lb+ cardstock, use 'Heavy Cardstock - 100lb' and increase to 'More Pressure.' Some thick materials require the Deep Cut blade instead of Fine Point, which handles up to 1.5mm thickness."
      }
    },
    {
      "@type": "Question",
      "name": "When should I use the Deep Cut blade vs the Knife blade for thick materials?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use Deep Cut blade (60° angle) for materials up to 1.5mm like 100lb+ cardstock, chipboard, magnet sheets, and craft foam. Use Knife blade (drag blade) for materials up to 2.4mm like balsa wood, leather, and heavy matboard. Knife blade requires multiple passes and works only on Maker machines."
      }
    },
    {
      "@type": "Question",
      "name": "Why is my thick cardstock tearing instead of cutting cleanly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Thick cardstock tears because of dull blades, incorrect blade type for the material thickness, pressure too high/low, mat not sticky enough, or designs too intricate for the material weight. Try cleaning/replacing blade, using Deep Cut blade for heavy stock, and adding a second pass."
      }
    },
    {
      "@type": "Question",
      "name": "Should I use a multi-pass technique for thick cardstock?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Multi-pass cutting is essential for thick materials. Use 2-3 passes for heavy cardstock (100lb+) and chipboard. Set to 'No' when Design Space asks 'Does your cut look complete?' to repeat without moving the mat. This prevents blade overheating and extends blade life."
      }
    },
    {
      "@type": "Question",
      "name": "Which mat should I use for thick cardstock and heavy materials?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use Green StandardGrip mat (medium stickiness) for 65-110lb cardstock. For very thick materials or Knife blade cuts, use Purple StrongGrip mat for maximum hold. Never use LightGrip for thick materials—the paper will shift during cutting and tear."
      }
    }
  ]
};

export default function CuttingThickCardstockGuide() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-[#FAF8F5] to-white">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="text-sm mb-6">
            <ol className="flex items-center space-x-2 text-gray-500">
              <li><Link href="/" className="hover:text-[#9CAF88]">Home</Link></li>
              <li>/</li>
              <li><Link href="/guides" className="hover:text-[#9CAF88]">Guides</Link></li>
              <li>/</li>
              <li className="text-gray-900">Cutting Thick Cardstock & Heavy Materials</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                Advanced Materials
              </span>
              <span className="text-gray-500 text-sm">Updated February 2026</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Cut Thick Cardstock & Heavy Materials with Cricut: Settings & Techniques
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              65lb cardstock, chipboard, balsa wood, and matboard demand different techniques than regular 
              paper. Learn exactly which blade to use, what pressure settings work, how to prevent tearing, 
              and when to use multi-pass cutting.
            </p>
          </header>

          {/* Quick Settings Box */}
          <div className="bg-gradient-to-r from-red-100 to-orange-100 rounded-xl p-6 mb-8 border-l-4 border-red-500">
            <h2 className="font-bold text-lg text-gray-900 mb-3">📋 Quick Settings Reference</h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium text-gray-900">65-80lb cardstock:</p>
                <p className="text-gray-700">→ Deep Cut blade (or Fine Point + more pressure), StandardGrip mat, 2 passes</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">100lb+ cardstock:</p>
                <p className="text-gray-700">→ Deep Cut blade, StandardGrip or StrongGrip, 2-3 passes, increase pressure</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">Chipboard (thin):</p>
                <p className="text-gray-700">→ Deep Cut blade, StandardGrip, 2 passes, default/less pressure</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">Balsa wood (1/16"-3/32"):</p>
                <p className="text-gray-700">→ Knife blade, StrongGrip + tape, 15-25 passes, Maker only</p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="font-bold text-lg mb-4">📋 In This Guide</h2>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#understanding" className="text-[#9CAF88] hover:underline">→ Understanding material thickness</a></li>
              <li><a href="#blade-selection" className="text-[#9CAF88] hover:underline">→ Blade selection guide</a></li>
              <li><a href="#pressure-settings" className="text-[#9CAF88] hover:underline">→ Pressure settings by material</a></li>
              <li><a href="#multi-pass" className="text-[#9CAF88] hover:underline">→ Multi-pass cutting technique</a></li>
              <li><a href="#mat-selection" className="text-[#9CAF88] hover:underline">→ Mat selection for thick materials</a></li>
              <li><a href="#tearing-fix" className="text-[#9CAF88] hover:underline">→ Fix: Material is tearing</a></li>
              <li><a href="#dragging-fix" className="text-[#9CAF88] hover:underline">→ Fix: Blade dragging & rough edges</a></li>
              <li><a href="#material-guide" className="text-[#9CAF88] hover:underline">→ Specific material settings</a></li>
              <li><a href="#troubleshooting" className="text-[#9CAF88] hover:underline">→ Advanced troubleshooting</a></li>
            </ul>
          </div>

          {/* Main Content */}
          <article className="prose prose-lg max-w-none">
            
            {/* Understanding Material Thickness */}
            <section id="understanding" className="mb-10 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900">Understanding Material Thickness & Weight</h2>
              <p>
                Your Cricut can cut materials up to 2.4mm (3/32 inch) thick, but different materials require 
                different blades and techniques. The key is understanding the relationship between weight, 
                thickness, and density.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-4">
                <p className="text-blue-800">
                  <strong>📌 Key Concept:</strong> "Thick cardstock" starts at 65lb. Standard copy paper is 20lb, 
                  card stock is 60-110lb, and cardboard/chip board is 100lb+. The higher the number, the thicker 
                  and denser the material.
                </p>
              </div>

              <h3 className="font-bold text-lg text-gray-900 mt-6">Weight vs. Thickness Guide</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-3 py-2 text-left">Material</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Weight</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Thickness (mm)</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Category</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Blade</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2">Cardstock (light)</td>
                      <td className="border border-gray-300 px-3 py-2">50-60lb</td>
                      <td className="border border-gray-300 px-3 py-2">~0.15mm</td>
                      <td className="border border-gray-300 px-3 py-2">Light</td>
                      <td className="border border-gray-300 px-3 py-2">Fine Point</td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-300 px-3 py-2 font-medium">Cardstock (medium)</td>
                      <td className="border border-gray-300 px-3 py-2">65-80lb</td>
                      <td className="border border-gray-300 px-3 py-2">~0.18-0.22mm</td>
                      <td className="border border-gray-300 px-3 py-2">Thick</td>
                      <td className="border border-gray-300 px-3 py-2">Deep Cut / Fine Point+</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2">Cardstock (heavy)</td>
                      <td className="border border-gray-300 px-3 py-2">100-110lb</td>
                      <td className="border border-gray-300 px-3 py-2">~0.27-0.30mm</td>
                      <td className="border border-gray-300 px-3 py-2">Very Thick</td>
                      <td className="border border-gray-300 px-3 py-2">Deep Cut + 2-3 passes</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2">Chipboard (thin)</td>
                      <td className="border border-gray-300 px-3 py-2">~100lb equivalent</td>
                      <td className="border border-gray-300 px-3 py-2">~0.5-0.8mm</td>
                      <td className="border border-gray-300 px-3 py-2">Very Thick</td>
                      <td className="border border-gray-300 px-3 py-2">Deep Cut + 2-3 passes</td>
                    </tr>
                    <tr className="bg-red-50">
                      <td className="border border-gray-300 px-3 py-2 font-medium">Chipboard (thick)</td>
                      <td className="border border-gray-300 px-3 py-2">~200lb equivalent</td>
                      <td className="border border-gray-300 px-3 py-2">~1.5mm+</td>
                      <td className="border border-gray-300 px-3 py-2">Heavy Duty</td>
                      <td className="border border-gray-300 px-3 py-2">Knife blade (Maker)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2">Balsa wood (1/16")</td>
                      <td className="border border-gray-300 px-3 py-2">N/A</td>
                      <td className="border border-gray-300 px-3 py-2">~1.6mm</td>
                      <td className="border border-gray-300 px-3 py-2">Heavy Duty</td>
                      <td className="border border-gray-300 px-3 py-2">Knife blade (Maker)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2">Balsa wood (3/32")</td>
                      <td className="border border-gray-300 px-3 py-2">N/A</td>
                      <td className="border border-gray-300 px-3 py-2">~2.4mm (max)</td>
                      <td className="border border-gray-300 px-3 py-2">Heavy Duty</td>
                      <td className="border border-gray-300 px-3 py-2">Knife blade (Maker)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 my-4">
                <p className="text-yellow-800">
                  <strong>⚠️ Important:</strong> Don't force your machine. If material isn't cutting all the way through 
                  after 3 passes, it's too thick for your blade. Switch to a more powerful blade (Deep Cut → Knife) instead.
                </p>
              </div>
            </section>

            {/* Blade Selection */}
            <section id="blade-selection" className="mb-10 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900">Blade Selection Guide for Thick Materials</h2>
              <p>
                Choosing the right blade is the single most important factor for cutting thick materials. 
                The wrong blade = torn material, frustrated cuts, and burned-out motors.
              </p>

              <div className="space-y-6 my-6">
                <div className="bg-white border-l-4 border-blue-400 pl-4 py-3">
                  <h3 className="font-bold text-gray-900">Fine Point Blade (Silver Housing)</h3>
                  <p className="text-gray-600 mb-2"><strong>Max thickness:</strong> ~0.5mm (up to 80lb cardstock)</p>
                  <p className="text-gray-600 mb-2">
                    The standard blade that comes with all machines. Works for regular cardstock up to 80lb, 
                    but struggles with heavier stock. Not recommended for materials thicker than 80lb.
                  </p>
                  <p className="text-gray-800">
                    <strong>Use for:</strong> Regular cardstock, 60-80lb. Not for heavy materials. See below for heavier options.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-purple-400 pl-4 py-3">
                  <h3 className="font-bold text-gray-900">Deep Cut Blade (Black/Purple Housing) ⭐ BEST for thick cardstock</h3>
                  <p className="text-gray-600 mb-2"><strong>Max thickness:</strong> ~1.5mm</p>
                  <p className="text-gray-600 mb-2">
                    The workhorse for heavy materials. 60° angle (vs 45° for Fine Point) gives it more cutting power. 
                    Handles 100lb+ cardstock, chipboard, magnet sheets, craft foam, and more.
                  </p>
                  <p className="text-gray-800">
                    <strong>Use for:</strong> Heavy cardstock (100lb+), chipboard, magnet sheets, craft foam, and dense papers. 
                    Best blade for most thick cardstock projects.
                  </p>
                  <p className="text-gray-800 mt-2">
                    <strong>Works on:</strong> All Explore and Maker machines
                  </p>
                </div>

                <div className="bg-white border-l-4 border-red-400 pl-4 py-3">
                  <h3 className="font-bold text-gray-900">Knife Blade (Gray Housing) - For Very Thick Materials</h3>
                  <p className="text-gray-600 mb-2"><strong>Max thickness:</strong> 2.4mm (3/32 inch) - Up to 25 passes</p>
                  <p className="text-gray-600 mb-2">
                    A drag blade that works like an X-ACTO knife, making multiple passes to cut through 
                    extremely thick materials. For balsa wood, heavy leather, and matboard.
                  </p>
                  <p className="text-gray-800">
                    <strong>Use for:</strong> Balsa wood, tooling leather (2-3oz), matboard, very heavy chipboard. Requires Maker machine only.
                  </p>
                  <p className="text-gray-800 mt-2">
                    <strong>⚠️ Important:</strong> Tape material down with masking tape. Cuts take 20-30+ minutes. Stay nearby. 
                    Not for delicate designs.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-4 border-l-4 border-green-500 my-6">
                <h3 className="font-bold text-gray-900">🎯 Quick Decision: Which Blade?</h3>
                <ul className="text-gray-700 space-y-2 mt-3">
                  <li>✅ <strong>65-80lb cardstock?</strong> → Deep Cut blade (or Fine Point if you have patience)</li>
                  <li>✅ <strong>100lb+ cardstock or chipboard?</strong> → Deep Cut blade, 2-3 passes</li>
                  <li>✅ <strong>Balsa wood or heavy leather?</strong> → Knife blade (Maker only)</li>
                  <li>❌ <strong>Don't use:</strong> Fine Point for thick materials (won't cut through, will tear)</li>
                </ul>
              </div>
            </section>

            {/* Pressure Settings */}
            <section id="pressure-settings" className="mb-10 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900">Pressure Settings by Material Type</h2>
              <p>
                Pressure is critical for thick materials. Too little = incomplete cuts. Too much = tearing and blade damage. 
                Use these as starting points, then adjust.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900">65-80lb Cardstock</h3>
                  <p className="text-gray-700 mb-2"><strong>Settings:</strong> "Medium Cardstock - 80lb" + "More Pressure"</p>
                  <p className="text-gray-700 mb-2">
                    Start with the preset, then bump to "More Pressure" if cuts aren't clean. Most crafters find this works 
                    for 65lb. Use 2 passes if still not cutting through.
                  </p>
                  <p className="text-gray-700"><strong>Mat:</strong> Green StandardGrip</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900">100lb+ Cardstock</h3>
                  <p className="text-gray-700 mb-2"><strong>Settings:</strong> "Heavy Cardstock - 100lb" + "More Pressure" + Deep Cut blade + 2-3 passes</p>
                  <p className="text-gray-700 mb-2">
                    Use "Heavy Cardstock" preset with "More Pressure." Deep Cut blade is essential. Plan for 2-3 passes 
                    without moving the mat between passes.
                  </p>
                  <p className="text-gray-700"><strong>Mat:</strong> Green StandardGrip (or Purple StrongGrip for maximum hold)</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900">Chipboard (Thin - under 1mm)</h3>
                  <p className="text-gray-700 mb-2"><strong>Settings:</strong> Deep Cut blade + "Default" pressure (or "More") + 2-3 passes</p>
                  <p className="text-gray-700 mb-2">
                    Use standard or more pressure. Chipboard is denser than cardstock, so you might need slightly more pressure. 
                    Definitely requires 2-3 passes.
                  </p>
                  <p className="text-gray-700"><strong>Mat:</strong> Green StandardGrip</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900">Thick Chipboard (1-1.5mm) or Craft Foam</h3>
                  <p className="text-gray-700 mb-2"><strong>Settings:</strong> Deep Cut blade + "Default" or "More" pressure + 3-5 passes</p>
                  <p className="text-gray-700 mb-2">
                    Don't use maximum pressure—can damage material and blade. Go with 3-5 passes instead. More passes = cleaner cuts than max pressure.
                  </p>
                  <p className="text-gray-700"><strong>Mat:</strong> Green StandardGrip or Purple StrongGrip</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900">Balsa Wood (1/16" to 3/32")</h3>
                  <p className="text-gray-700 mb-2"><strong>Settings:</strong> Knife blade + "Default" pressure + 15-25 passes + tape edges</p>
                  <p className="text-gray-700 mb-2">
                    Tape material down with masking tape on all edges. Use purple StrongGrip mat. Don't increase pressure beyond default—
                    multiple passes are better than force. Cut time: 20-40 minutes. <strong>Maker machine only.</strong>
                  </p>
                  <p className="text-gray-700"><strong>Mat:</strong> Purple StrongGrip (taped)</p>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 my-4">
                <p className="text-yellow-800">
                  <strong>💡 Pro tip:</strong> "More passes, less pressure" is the golden rule for thick materials. 
                  Multiple gentle passes beat one aggressive pass every time. You'll get cleaner cuts, longer blade life, and less damage to your machine.
                </p>
              </div>
            </section>

            {/* Multi-Pass Technique */}
            <section id="multi-pass" className="mb-10 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900">Multi-Pass Cutting Technique (The Secret Weapon)</h2>
              <p>
                Multi-pass cutting is essential for any material thicker than 80lb. Instead of one aggressive pass, 
                you cut the same design 2-3 times with the mat stationary. This is how professional crafters handle thick stock.
              </p>

              <h3 className="font-bold text-lg text-gray-900 mt-6">How Multi-Pass Works</h3>
              <div className="bg-blue-50 rounded-lg p-4 my-4">
                <ol className="list-decimal list-inside space-y-3 text-gray-700">
                  <li>Load your material on the mat as normal</li>
                  <li>Send design to cut in Design Space</li>
                  <li>After the first pass, Design Space asks: <strong>"Does your cut look complete?"</strong></li>
                  <li>Click <strong>"No"</strong> (this is the key!) to run another pass</li>
                  <li>The mat stays in place. The blade resets and cuts again</li>
                  <li>After the second pass, Design Space asks again. Still not done? Click "No" again</li>
                  <li>Repeat until cuts are clean all the way through (usually 2-3 times)</li>
                  <li>When done, click "Yes" to release the mat</li>
                </ol>
              </div>

              <h3 className="font-bold text-lg text-gray-900 mt-6">Why Multi-Pass Works Better Than One Strong Pass</h3>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900">❌ One Strong Pass</h3>
                  <ul className="text-gray-700 space-y-1 text-sm mt-2">
                    <li>• Blade overheats from friction</li>
                    <li>• More tearing & rough edges</li>
                    <li>• Can damage material</li>
                    <li>• Shortens blade life</li>
                    <li>• Stresses machine motor</li>
                  </ul>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900">✅ Multi-Pass (2-3 Gentle Passes)</h3>
                  <ul className="text-gray-700 space-y-1 text-sm mt-2">
                    <li>• Blade stays cool</li>
                    <li>• Cleaner, sharper cuts</li>
                    <li>• Material stays intact</li>
                    <li>• Extends blade life</li>
                    <li>• Less wear on motor</li>
                  </ul>
                </div>
              </div>

              <h3 className="font-bold text-lg text-gray-900 mt-6">When to Use Multi-Pass</h3>
              <div className="space-y-2 text-gray-700 my-4">
                <p><strong>2 passes:</strong> 65-80lb cardstock</p>
                <p><strong>2-3 passes:</strong> 100lb+ cardstock, thin chipboard</p>
                <p><strong>3-5 passes:</strong> Thick chipboard (1mm+), craft foam</p>
                <p><strong>15-25 passes:</strong> Balsa wood, leather (Knife blade only)</p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4 my-4">
                <p className="text-green-800">
                  <strong>💡 Pro tip:</strong> If it takes more than 5 passes with the Deep Cut blade, 
                  the material is probably too thick. Consider switching to the Knife blade, or the material 
                  might be too dense for your machine.
                </p>
              </div>
            </section>

            {/* Mat Selection */}
            <section id="mat-selection" className="mb-10 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900">Mat Selection for Thick Materials</h2>
              <p>
                Thick materials need extra grip. Wrong mat = material shifts during cutting = torn, uneven cuts.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white border-l-4 border-blue-400 pl-4 py-3">
                  <h3 className="font-bold text-gray-900">🔵 Blue LightGrip Mat - For Thin Materials</h3>
                  <p className="text-gray-700 mb-2"><strong>Stickiness:</strong> Low | <strong>Size:</strong> 12" × 24"</p>
                  <p className="text-gray-700">
                    <strong>❌ NOT for thick materials.</strong> Too much adhesion can tear thin paper on removal. 
                    Will cause shifting with heavy stock.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-green-400 pl-4 py-3">
                  <h3 className="font-bold text-gray-900">🟢 Green StandardGrip Mat - STANDARD for Thick Cardstock</h3>
                  <p className="text-gray-700 mb-2"><strong>Stickiness:</strong> Medium | <strong>Size:</strong> 12" × 24"</p>
                  <p className="text-gray-700">
                    <strong>✅ Perfect for 65-110lb cardstock and light chipboard.</strong> Holds material securely 
                    without tearing. This is your go-to mat for most thick cardstock projects.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-purple-400 pl-4 py-3">
                  <h3 className="font-bold text-gray-900">🟣 Purple StrongGrip Mat - For Very Heavy Materials</h3>
                  <p className="text-gray-700 mb-2"><strong>Stickiness:</strong> Maximum | <strong>Size:</strong> 12" × 24"</p>
                  <p className="text-gray-700">
                    <strong>✅ Use for heavy chipboard, balsa wood, leather, and Knife blade cuts.</strong> Keeps material 
                    locked in place. Also required when using masking tape with Knife blade cuts.
                  </p>
                  <p className="text-gray-700 mt-2">
                    <strong>Caution:</strong> May be too sticky for delicate papers. Use StandardGrip when possible.
                  </p>
                </div>
              </div>

              <h3 className="font-bold text-lg text-gray-900 mt-6">How to Refresh a Worn Mat</h3>
              <div className="bg-gray-50 rounded-lg p-4 my-4">
                <p className="text-gray-700 mb-3">Mats lose stickiness over time. Before buying a new one, try these refreshes:</p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Clean off all visible debris with compressed air and dry brush</li>
                  <li>Wipe with lightly damp cloth, let dry completely</li>
                  <li>If still not sticky enough, use Cricut Mat Refresh Spray (or clear acrylic spray + light adhesive)</li>
                  <li>Let dry fully before use</li>
                </ol>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4 my-4">
                <p className="text-red-800">
                  <strong>⚠️ Warning:</strong> Never use water or soap on mats for thick materials. 
                  Only use recommended cleaners. Water can affect the adhesive formula.
                </p>
              </div>
            </section>

            {/* Tearing Fix */}
            <section id="tearing-fix" className="mb-10 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900">Fix: Thick Cardstock is Tearing</h2>
              <p>
                Tearing is the #1 problem with thick materials. Here are the causes and how to fix each:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white border-l-4 border-red-400 pl-4 py-3">
                  <h3 className="font-bold text-gray-900">🔪 Cause: Using Fine Point blade instead of Deep Cut</h3>
                  <p className="text-gray-600 mb-2">
                    The Fine Point blade is designed for thin materials. It will push and tear thick cardstock.
                  </p>
                  <p className="text-gray-800">
                    <strong>Fix:</strong> Switch to <Link href="/guides/cricut-blade-guide" className="text-[#9CAF88] hover:underline">Deep Cut blade</Link>. 
                    It's the proper tool for 80lb+ cardstock.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-red-400 pl-4 py-3">
                  <h3 className="font-bold text-gray-900">⚡ Cause: Pressure too high or too low</h3>
                  <p className="text-gray-600 mb-2">
                    Too much pressure forces the blade through aggressively, tearing delicate fibers. Too little leaves it uncut, 
                    which also tears when you remove it.
                  </p>
                  <p className="text-gray-800">
                    <strong>Fix:</strong> Use correct pressure for your material (see chart above). Use multi-pass instead of increasing pressure. 
                    Always start with "Default" or "More", never "Much More" for thick cardstock.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-red-400 pl-4 py-3">
                  <h3 className="font-bold text-gray-900">📌 Cause: Mat not sticky enough or material shifted</h3>
                  <p className="text-gray-600 mb-2">
                    If material shifts during cutting, the blade can tear instead of cut cleanly.
                  </p>
                  <p className="text-gray-800">
                    <strong>Fix:</strong> Use a stickier mat (upgrade to StandardGrip or StrongGrip). Use a brayer or roller 
                    to press cardstock firmly onto mat before cutting. Consider rotating your mat so the sticky area wears evenly.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-red-400 pl-4 py-3">
                  <h3 className="font-bold text-gray-900">🔍 Cause: Design has tiny details or thin lines</h3>
                  <p className="text-gray-600 mb-2">
                    Thin lines and small details are difficult to cut in thick materials—they just tear and collapse.
                  </p>
                  <p className="text-gray-800">
                    <strong>Fix:</strong> Use a simpler design, increase minimum line width to 0.25 inches, or size the design larger. 
                    Thick materials are better for bold, simple shapes.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-red-400 pl-4 py-3">
                  <h3 className="font-bold text-gray-900">🧹 Cause: Dull or dirty blade</h3>
                  <p className="text-gray-600 mb-2">
                    Dull blades push and tear. Debris in the housing prevents smooth rotation.
                  </p>
                  <p className="text-gray-800">
                    <strong>Fix:</strong> Clean blade by stabbing into aluminum foil ball 20-30 times. Remove blade, blow out housing with 
                    compressed air. If still tearing, replace the blade—they're inexpensive.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-red-400 pl-4 py-3">
                  <h3 className="font-bold text-gray-900">❄️ Cause: Material is curled or warped</h3>
                  <p className="text-gray-600 mb-2">
                    Curled cardstock doesn't sit flat on the mat, causing uneven cutting and tearing.
                  </p>
                  <p className="text-gray-800">
                    <strong>Fix:</strong> Store cardstock flat, away from humidity. If already curled, press it flat with books 
                    for 24 hours before cutting. Let material come to room temperature.
                  </p>
                </div>
              </div>
            </section>

            {/* Dragging Fix */}
            <section id="dragging-fix" className="mb-10 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900">Fix: Blade Dragging & Rough Edges</h2>
              <p>
                Dragging happens when the blade pushes through material instead of slicing cleanly. This results in rough, 
                unfinished edges and potential damage.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900">Diagnose First</h3>
                  <ul className="text-gray-700 space-y-1 text-sm mt-2">
                    <li>• Is the blade visibly dull?</li>
                    <li>• Is there debris or paper dust in the housing?</li>
                    <li>• Is the blade seated completely in the housing?</li>
                    <li>• Is the mat sticky (not smooth/shiny)?</li>
                    <li>• Are you using the correct blade for the material?</li>
                  </ul>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900">Quick Fixes</h3>
                  <ul className="text-gray-700 space-y-1 text-sm mt-2">
                    <li>• Clean blade: Stab foil ball 20-30 times</li>
                    <li>• Remove & blow out blade housing</li>
                    <li>• Reseat blade firmly in housing</li>
                    <li>• Clean mat with compressed air</li>
                    <li>• Use brayer to press material to mat</li>
                    <li>• If still dragging: Replace blade</li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 my-4">
                <p className="text-purple-800">
                  <strong>💡 Note:</strong> If your blade is clean and seated correctly but still drags, 
                  the blade is dull. Cardstock and thick materials dull blades quickly. A replacement blade is cheaper than re-doing a project.
                </p>
              </div>
            </section>

            {/* Specific Material Guide */}
            <section id="material-guide" className="mb-10 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900">Detailed Settings for Specific Heavy Materials</h2>

              <div className="space-y-6 my-6">
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="font-bold text-gray-900">65lb Cardstock (Thick but Manageable)</h3>
                  <div className="grid md:grid-cols-2 gap-3 mt-3 text-sm">
                    <div>
                      <p className="text-gray-600"><strong>Blade:</strong> Deep Cut (or Fine Point + more pressure)</p>
                      <p className="text-gray-600"><strong>Pressure:</strong> "More Pressure"</p>
                      <p className="text-gray-600"><strong>Passes:</strong> 2</p>
                      <p className="text-gray-600"><strong>Mat:</strong> Green StandardGrip</p>
                    </div>
                    <div>
                      <p className="text-gray-600"><strong>Tip:</strong> Some crafters can get away with Fine Point if they're patient, but Deep Cut is faster and cleaner.</p>
                      <p className="text-gray-600 mt-2"><strong>Link:</strong> See our <Link href="/guides/cutting-cardstock-cricut" className="text-[#9CAF88] hover:underline">regular cardstock guide</Link> for lighter weights.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="font-bold text-gray-900">100lb Cardstock (Heavy)</h3>
                  <div className="grid md:grid-cols-2 gap-3 mt-3 text-sm">
                    <div>
                      <p className="text-gray-600"><strong>Blade:</strong> Deep Cut (Required)</p>
                      <p className="text-gray-600"><strong>Pressure:</strong> "More Pressure"</p>
                      <p className="text-gray-600"><strong>Passes:</strong> 2-3</p>
                      <p className="text-gray-600"><strong>Mat:</strong> Green StandardGrip</p>
                    </div>
                    <div>
                      <p className="text-gray-600"><strong>Tip:</strong> This is poster board weight. Very dense. Don't push it with pressure—use multi-pass instead. If still incomplete after 3 passes, it's too thick.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="font-bold text-gray-900">Chipboard (Thin - under 0.8mm)</h3>
                  <div className="grid md:grid-cols-2 gap-3 mt-3 text-sm">
                    <div>
                      <p className="text-gray-600"><strong>Blade:</strong> Deep Cut (Required)</p>
                      <p className="text-gray-600"><strong>Pressure:</strong> "Default" to "More"</p>
                      <p className="text-gray-600"><strong>Passes:</strong> 2-3</p>
                      <p className="text-gray-600"><strong>Mat:</strong> Green StandardGrip</p>
                    </div>
                    <div>
                      <p className="text-gray-600"><strong>Tip:</strong> Chipboard is denser than cardstock. Don't use maximum pressure. Multi-pass always. Chipboard dulls blades faster than paper—plan for replacement.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="font-bold text-gray-900">Chipboard (Thick - 1-1.5mm)</h3>
                  <div className="grid md:grid-cols-2 gap-3 mt-3 text-sm">
                    <div>
                      <p className="text-gray-600"><strong>Blade:</strong> Deep Cut or Knife</p>
                      <p className="text-gray-600"><strong>Pressure:</strong> "Default" (don't exceed)</p>
                      <p className="text-gray-600"><strong>Passes:</strong> 3-5 (Deep) or 15-25 (Knife)</p>
                      <p className="text-gray-600"><strong>Mat:</strong> Purple StrongGrip</p>
                    </div>
                    <div>
                      <p className="text-gray-600"><strong>Tip:</strong> Use Deep Cut first. If it takes more than 5 passes, switch to Knife blade. Knife blade takes longer but handles extreme thickness.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="font-bold text-gray-900">Magnet Sheets</h3>
                  <div className="grid md:grid-cols-2 gap-3 mt-3 text-sm">
                    <div>
                      <p className="text-gray-600"><strong>Blade:</strong> Deep Cut (Required)</p>
                      <p className="text-gray-600"><strong>Pressure:</strong> "More Pressure"</p>
                      <p className="text-gray-600"><strong>Passes:</strong> 2-3</p>
                      <p className="text-gray-600"><strong>Mat:</strong> Green StandardGrip (or backup paper mat)</p>
                    </div>
                    <div>
                      <p className="text-gray-600"><strong>Tip:</strong> Magnet sheets dull blades very quickly. Have a fresh blade ready. They're metal-backed, so expect slower cutting. The metal can interact with your machine, so use backup mats if possible.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="font-bold text-gray-900">Craft Foam (thin)</h3>
                  <div className="grid md:grid-cols-2 gap-3 mt-3 text-sm">
                    <div>
                      <p className="text-gray-600"><strong>Blade:</strong> Deep Cut</p>
                      <p className="text-gray-600"><strong>Pressure:</strong> "Default"</p>
                      <p className="text-gray-600"><strong>Passes:</strong> 1-2</p>
                      <p className="text-gray-600"><strong>Mat:</strong> Green StandardGrip</p>
                    </div>
                    <div>
                      <p className="text-gray-600"><strong>Tip:</strong> Foam is softer than cardstock, so it needs less pressure. Goes through faster with Deep Cut. Good test material for blade sharpness.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="font-bold text-gray-900">Balsa Wood (1/16" = ~1.6mm)</h3>
                  <div className="grid md:grid-cols-2 gap-3 mt-3 text-sm">
                    <div>
                      <p className="text-gray-600"><strong>Blade:</strong> Knife Blade (REQUIRED - Maker only)</p>
                      <p className="text-gray-600"><strong>Pressure:</strong> "Default" (20-25 passes typical)</p>
                      <p className="text-gray-600"><strong>Passes:</strong> 15-25</p>
                      <p className="text-gray-600"><strong>Mat:</strong> Purple StrongGrip + masking tape</p>
                    </div>
                    <div>
                      <p className="text-gray-600"><strong>Tip:</strong> Tape all edges down with masking tape. Move star wheels to the side. This will take 30-40 minutes. Don't touch or move anything during cutting. Not for intricate designs.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="font-bold text-gray-900">Balsa Wood (3/32" = 2.4mm - MAXIMUM)</h3>
                  <div className="grid md:grid-cols-2 gap-3 mt-3 text-sm">
                    <div>
                      <p className="text-gray-600"><strong>Blade:</strong> Knife Blade (REQUIRED - Maker only)</p>
                      <p className="text-gray-600"><strong>Pressure:</strong> "Default" (20-25 passes typical)</p>
                      <p className="text-gray-600"><strong>Passes:</strong> 20-25+</p>
                      <p className="text-gray-600"><strong>Mat:</strong> Purple StrongGrip + masking tape</p>
                    </div>
                    <div>
                      <p className="text-gray-600"><strong>Tip:</strong> This is the maximum thickness. Simple shapes only. Tape heavily. Expect 45+ minutes cut time. If exceeding 25 passes without success, material is too thick for your machine.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Troubleshooting */}
            <section id="troubleshooting" className="mb-10 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900">Advanced Troubleshooting</h2>

              <div className="space-y-4 my-6">
                <div className="bg-white rounded-lg border border-gray-200 p-4">
                  <h3 className="font-bold text-gray-900">❌ Problem: Even after 3 passes with Deep Cut, cardstock isn't cutting through</h3>
                  <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 text-sm">
                    <li>Check blade depth (should extend slightly past housing)</li>
                    <li>Is the blade actually a Deep Cut blade? (Black/purple housing)</li>
                    <li>Replace blade—it's probably dull</li>
                    <li>Try increasing pressure to "More Pressure"</li>
                    <li>If still not working after 5 passes, material may be too thick (needs Knife blade)</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-4">
                  <h3 className="font-bold text-gray-900">❌ Problem: Cardstock is cutting but edges are rough/jagged</h3>
                  <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 text-sm">
                    <li>Blade is dull. Clean with foil ball or replace</li>
                    <li>Reduce pressure (less aggressive = cleaner edges)</li>
                    <li>Use multi-pass technique (gentler than single aggressive pass)</li>
                    <li>Check that material isn't curled (press flat first)</li>
                    <li>Consider using a finer/smoother cardstock brand</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-4">
                  <h3 className="font-bold text-gray-900">❌ Problem: Material is shifting during the cut</h3>
                  <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 text-sm">
                    <li>Mat isn't sticky enough. Switch to StandardGrip or StrongGrip</li>
                    <li>Clean mat to restore adhesion (compressed air, dry brush)</li>
                    <li>Refresh mat with Cricut spray or acrylic adhesive spray</li>
                    <li>Use brayer/roller to press cardstock firmly onto mat before cutting</li>
                    <li>Store cardstock flat so it doesn't curve and lose contact</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-4">
                  <h3 className="font-bold text-gray-900">❌ Problem: Blade is getting dull very quickly</h3>
                  <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 text-sm">
                    <li>Thick materials dull blades 3-5x faster than vinyl. This is normal</li>
                    <li>Budget for frequent blade replacement if cutting thick stock regularly</li>
                    <li>Consider premium blades (German carbide steel) for frequent users—they last 2-3x longer</li>
                    <li>Always use multi-pass instead of max pressure to extend blade life</li>
                    <li>Clean blade regularly (foil ball trick) to remove debris</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-4">
                  <h3 className="font-bold text-gray-900">❌ Problem: Machine sounds different or smells hot</h3>
                  <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 text-sm">
                    <li>⚠️ STOP immediately. Turn off machine and let it cool for 15 minutes</li>
                    <li>Check that material thickness matches your blade (not overstressed)</li>
                    <li>Reduce pressure or use more passes instead of one aggressive cut</li>
                    <li>Make sure you're using the correct blade for the material</li>
                    <li>If sounds persist after cooling, contact Cricut support</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Pro Tips */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900">Pro Tips for Perfect Thick Cardstock Cuts</h2>

              <div className="space-y-4 my-6">
                <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-4 border-l-4 border-green-500">
                  <h3 className="font-bold text-gray-900">🎯 Always use a test cut first</h3>
                  <p className="text-gray-700">
                    Before committing expensive cardstock to a full project, cut a small test on the Design Space 
                    "Test" button. Wastes tiny bit, saves entire projects.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-4 border-l-4 border-green-500">
                  <h3 className="font-bold text-gray-900">📏 Use a brayer every time</h3>
                  <p className="text-gray-700">
                    After placing cardstock on mat, roll a brayer (craft roller) firmly across the surface. This ensures 
                    maximum adhesion and prevents shifting that causes tearing.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-4 border-l-4 border-green-500">
                  <h3 className="font-bold text-gray-900">⬇️ More passes = better results</h3>
                  <p className="text-gray-700">
                    Instead of cranking pressure to maximum, run 3 gentle passes. You'll get cleaner cuts, less tearing, 
                    longer blade life, and less machine stress. This is pro-level technique.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-4 border-l-4 border-green-500">
                  <h3 className="font-bold text-gray-900">🔄 Rotate your mat placement</h3>
                  <p className="text-gray-700">
                    Don't always cut in the same spot. Rotate material placement so the mat wears evenly and stays stickier longer.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-4 border-l-4 border-green-500">
                  <h3 className="font-bold text-gray-900">❄️ Let cold cardstock warm up</h3>
                  <p className="text-gray-700">
                    Cold materials are stiffer and tear more easily. Let cardstock sit for 30 minutes in your craft room 
                    before cutting if it came from a cool space.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-4 border-l-4 border-green-500">
                  <h3 className="font-bold text-gray-900">📦 Store cardstock flat</h3>
                  <p className="text-gray-700">
                    Standing cardstock on edge will curl it. Store flat in a dry place (humidity causes warping). 
                    Flat = better adhesion to mat = better cuts.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-4 border-l-4 border-green-500">
                  <h3 className="font-bold text-gray-900">💰 Keep extra blades in stock</h3>
                  <p className="text-gray-700">
                    Thick materials dull blades quickly. Buy blades in bulk online (cheaper) so you always have a sharp blade ready.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-4 border-l-4 border-green-500">
                  <h3 className="font-bold text-gray-900">🎨 Use bold, simple designs</h3>
                  <p className="text-gray-700">
                    Tiny details don't work well in thick materials. Keep minimum line width at 0.25 inches. Thick cardstock 
                    is best for bold statements, not intricate designs.
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
              
              <div className="space-y-6 mt-4">
                <div>
                  <h3 className="font-bold text-gray-900">What's the difference between 65lb and 100lb cardstock on a Cricut?</h3>
                  <p className="text-gray-600">
                    65lb is about 0.18mm thick; 100lb is about 0.27mm. That doesn't sound like much, but it requires 
                    different blade (Deep Cut instead of Fine Point), different pressure settings, and usually 2-3 passes instead of 1. 
                    100lb is much stiffer and denser.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900">Can I use the Fine Point blade for 100lb cardstock if I increase pressure?</h3>
                  <p className="text-gray-600">
                    You can technically, but it's not recommended. Fine Point blades aren't designed for thick materials. 
                    You'll need maximum pressure, the blade will dull quickly, edges will be rough, and you'll stress your machine. 
                    Better to use the <Link href="/guides/cricut-blade-guide" className="text-[#9CAF88] hover:underline">Deep Cut blade</Link> designed for this task.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900">How many times should I run the multi-pass for thick cardstock?</h3>
                  <p className="text-gray-600">
                    65-80lb: 2 passes. 100lb+: 2-3 passes. If it's not cutting all the way through after 3 passes, 
                    the material is too thick for your blade (consider Knife blade). More than 5 passes with Deep Cut blade 
                    indicates the material is beyond that blade's capabilities.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900">Can I cut 65lb cardstock with the LightGrip mat?</h3>
                  <p className="text-gray-600">
                    Not recommended. LightGrip is too sticky for thin paper but not sticky enough for thick materials. 
                    65lb+ cardstock needs StandardGrip (green) or StrongGrip (purple) for proper hold. Using the wrong mat 
                    will cause shifting and tearing.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">Why does thick cardstock dull my blade so fast?</h3>
                  <p className="text-gray-600">
                    Thick, dense materials require more blade pressure and contact time. This friction heats the blade 
                    and dulls it 3-5x faster than vinyl or thin paper. Budget for frequent blade replacement if you regularly 
                    cut thick cardstock. Premium blades with carbide steel last longer.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">What should I do if cardstock is curled when I receive it?</h3>
                  <p className="text-gray-600">
                    Press it flat with heavy books or weights for 24 hours. Curled cardstock won't sit flat on the mat, 
                    causing uneven cuts and tears. If pressure doesn't work, try the opposite: roll it the other direction 
                    to counteract the curl.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">Is the Knife blade worth it for thick cardstock?</h3>
                  <p className="text-gray-600">
                    Only if you're cutting materials 1.5mm+ thick (balsa wood, heavy matboard, thick leather). 
                    For cardstock up to 100lb, the Deep Cut blade is all you need. Knife blade is for extreme thickness and requires 
                    a Maker machine (not Explore).
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">Can I cut chipboard on an Explore, or do I need a Maker?</h3>
                  <p className="text-gray-600">
                    Explore machines can cut chipboard with the Deep Cut blade. However, if the chipboard is very thick (1.5mm+) 
                    or you need the Knife blade, you'll need a Maker machine. For most thin chipboard (under 1mm), Explore + Deep Cut works fine.
                  </p>
                </div>
              </div>
            </section>
          </article>

          {/* Related Guides */}
          <section className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link 
                href="/guides/cricut-blade-guide"
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-[#9CAF88] hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900">Cricut Blade Guide</h3>
                <p className="text-gray-600 text-sm mt-1">Master every blade type. Deep Cut, Fine Point, Knife, and more.</p>
              </Link>
              <Link 
                href="/guides/cutting-cardstock-cricut"
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-[#9CAF88] hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900">Cutting Regular Cardstock</h3>
                <p className="text-gray-600 text-sm mt-1">Guide for lighter cardstock (60lb and under).</p>
              </Link>
              <Link 
                href="/guides/cricut-mat-not-sticky"
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-[#9CAF88] hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900">Mat Not Sticky Enough?</h3>
                <p className="text-gray-600 text-sm mt-1">How to restore or refresh your cutting mats for better hold.</p>
              </Link>
              <Link 
                href="/shop"
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-[#9CAF88] hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900">Shop Recommended Tools</h3>
                <p className="text-gray-600 text-sm mt-1">Blades, mats, brayers, and cardstock (affiliate links).</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">Still Having Issues?</h2>
            <p className="text-red-100 mb-6">
              Our troubleshooting wizard can help diagnose your cutting problems step-by-step.
            </p>
            <Link
              href="/troubleshoot"
              className="inline-block bg-white text-red-600 font-bold py-3 px-8 rounded-full hover:bg-red-50 transition-colors"
            >
              Start Troubleshooting
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
