import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Cut Cardstock on Cricut: Settings, Tips & Fixing Tears',
  description: 'Cardstock tearing, not cutting through, or dragging? Get the right settings for any cardstock weight plus fixes for the most common problems.',
  keywords: ['Cricut cardstock settings', 'cardstock tearing Cricut', 'cut cardstock Cricut', 'Cricut not cutting cardstock', 'cardstock ripping', 'best cardstock for Cricut'],
  openGraph: {
    title: 'How to Cut Cardstock on Cricut: Settings, Tips & Fixing Tears',
    description: 'Cardstock tearing, not cutting through, or dragging? Get the right settings for any cardstock weight.',
    type: 'article',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What setting should I use for cardstock on Cricut?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For standard 65lb cardstock, use 'Medium Cardstock - 80lb' setting. For 80-100lb cardstock, use 'Heavy Cardstock - 100lb'. For lighter paper, use 'Light Cardstock' or 'Copy Paper'. When in doubt, start lighter and increase pressure — it's easier to re-cut than fix tears."
      }
    },
    {
      "@type": "Question",
      "name": "Why does my Cricut tear cardstock instead of cutting it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tearing usually means the blade is dull, pressure is too high, mat isn't sticky enough, or the design is too intricate for the paper weight. Try reducing pressure, cleaning/replacing the blade, using a stickier mat, or simplifying your design."
      }
    },
    {
      "@type": "Question",
      "name": "Which Cricut mat is best for cardstock?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use the Green StandardGrip mat for most cardstock (65lb-100lb). Use the Blue LightGrip mat for thin paper and light cardstock under 60lb. Using a mat that's too sticky for delicate paper can cause tearing when you try to remove it."
      }
    },
    {
      "@type": "Question",
      "name": "Why is my Cricut dragging through cardstock?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dragging happens when the blade pushes through the paper instead of slicing cleanly. Causes: blade is too dull, blade depth is set too deep, or the paper isn't sticking to the mat properly. Clean or replace your blade and ensure your mat is sticky."
      }
    },
    {
      "@type": "Question",
      "name": "What's the best cardstock brand for Cricut?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Popular choices: Recollections (Michaels), Neenah, Bazzill, and Cricut brand. Look for 65-80lb smooth cardstock for best results. Avoid textured or glittery cardstock for intricate designs — the texture can interfere with cutting."
      }
    }
  ]
};

export default function CuttingCardstockGuide() {
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
              <li className="text-gray-900">Cutting Cardstock</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                Materials
              </span>
              <span className="text-gray-500 text-sm">Updated February 2025</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Cut Cardstock on Cricut: Settings, Tips & Fixing Tears
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Cardstock should cut like butter. If it's tearing, dragging, or not cutting through, 
              something's off. Here's how to fix it and get clean cuts every time.
            </p>
          </header>

          {/* Quick Settings Box */}
          <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-xl p-6 mb-8 border-l-4 border-orange-500">
            <h2 className="font-bold text-lg text-gray-900 mb-3">📋 Quick Settings Reference</h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium text-gray-900">Light paper (copy paper, 20-60lb):</p>
                <p className="text-gray-700">→ Blue LightGrip mat, "Light Cardstock" setting</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">Medium cardstock (65-80lb):</p>
                <p className="text-gray-700">→ Green StandardGrip mat, "Medium Cardstock" setting</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">Heavy cardstock (100lb+):</p>
                <p className="text-gray-700">→ Green StandardGrip mat, "Heavy Cardstock" setting</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">Glitter/specialty cardstock:</p>
                <p className="text-gray-700">→ Green mat, "Glitter Cardstock" or +pressure</p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="font-bold text-lg mb-4">📋 In This Guide</h2>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#settings" className="text-[#9CAF88] hover:underline">→ Cardstock settings by weight</a></li>
              <li><a href="#tearing" className="text-[#9CAF88] hover:underline">→ Fix: Cardstock is tearing</a></li>
              <li><a href="#not-cutting" className="text-[#9CAF88] hover:underline">→ Fix: Not cutting through</a></li>
              <li><a href="#dragging" className="text-[#9CAF88] hover:underline">→ Fix: Blade is dragging</a></li>
              <li><a href="#tips" className="text-[#9CAF88] hover:underline">→ Pro tips for perfect cuts</a></li>
              <li><a href="#brands" className="text-[#9CAF88] hover:underline">→ Best cardstock brands</a></li>
            </ul>
          </div>

          {/* Main Content */}
          <article className="prose prose-lg max-w-none">
            
            {/* Settings Section */}
            <section id="settings" className="mb-10 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900">Cardstock Settings by Weight</h2>
              <p>
                Not all cardstock is the same. The weight (measured in pounds or GSM) determines 
                which setting to use. Here's a complete reference:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-3 py-2 text-left">Cardstock Type</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Weight</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Design Space Setting</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Mat</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2">Copy paper</td>
                      <td className="border border-gray-300 px-3 py-2">20lb / 75gsm</td>
                      <td className="border border-gray-300 px-3 py-2">Copy Paper</td>
                      <td className="border border-gray-300 px-3 py-2">🔵 LightGrip</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2">Light cardstock</td>
                      <td className="border border-gray-300 px-3 py-2">50-60lb / 135-160gsm</td>
                      <td className="border border-gray-300 px-3 py-2">Light Cardstock</td>
                      <td className="border border-gray-300 px-3 py-2">🔵 LightGrip</td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="border border-gray-300 px-3 py-2 font-medium">Medium cardstock</td>
                      <td className="border border-gray-300 px-3 py-2">65-80lb / 175-215gsm</td>
                      <td className="border border-gray-300 px-3 py-2">Medium Cardstock - 80lb</td>
                      <td className="border border-gray-300 px-3 py-2">🟢 StandardGrip</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2">Heavy cardstock</td>
                      <td className="border border-gray-300 px-3 py-2">100-110lb / 270-300gsm</td>
                      <td className="border border-gray-300 px-3 py-2">Heavy Cardstock - 100lb</td>
                      <td className="border border-gray-300 px-3 py-2">🟢 StandardGrip</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2">Glitter cardstock</td>
                      <td className="border border-gray-300 px-3 py-2">Varies</td>
                      <td className="border border-gray-300 px-3 py-2">Glitter Cardstock</td>
                      <td className="border border-gray-300 px-3 py-2">🟢 StandardGrip</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2">Poster board</td>
                      <td className="border border-gray-300 px-3 py-2">~100lb</td>
                      <td className="border border-gray-300 px-3 py-2">Poster Board</td>
                      <td className="border border-gray-300 px-3 py-2">🟢 StandardGrip</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-4">
                <p className="text-blue-800">
                  <strong>💡 Don't know the weight?</strong> Most craft store cardstock is 65lb. 
                  Start with "Medium Cardstock" and adjust from there.
                </p>
              </div>
            </section>

            {/* Tearing Section */}
            <section id="tearing" className="mb-10 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900">Fix: Cardstock is Tearing</h2>
              <p>
                Tearing is the most common cardstock problem. Here's what causes it and how to fix each:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white border-l-4 border-red-400 pl-4 py-3">
                  <h3 className="font-bold text-gray-900">🔪 Cause: Dull blade</h3>
                  <p className="text-gray-600 mb-2">
                    A dull blade pushes through paper instead of slicing cleanly, causing tears.
                  </p>
                  <p className="text-gray-800">
                    <strong>Fix:</strong> Clean blade by stabbing into aluminum foil ball 10-15 times, or replace it. 
                    Cardstock dulls blades faster than vinyl.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-red-400 pl-4 py-3">
                  <h3 className="font-bold text-gray-900">⚡ Cause: Pressure too high</h3>
                  <p className="text-gray-600 mb-2">
                    Too much pressure forces the blade through aggressively, tearing delicate areas.
                  </p>
                  <p className="text-gray-800">
                    <strong>Fix:</strong> Reduce pressure. Try "Less" or "Default" instead of "More." 
                    Do a test cut first.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-red-400 pl-4 py-3">
                  <h3 className="font-bold text-gray-900">📌 Cause: Mat not sticky enough</h3>
                  <p className="text-gray-600 mb-2">
                    If paper shifts during cutting, it tears instead of cutting cleanly.
                  </p>
                  <p className="text-gray-800">
                    <strong>Fix:</strong> Clean your mat or use a stickier one. Use a brayer to press 
                    cardstock firmly onto the mat before cutting.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-red-400 pl-4 py-3">
                  <h3 className="font-bold text-gray-900">🔍 Cause: Design too intricate</h3>
                  <p className="text-gray-600 mb-2">
                    Tiny details and thin lines are difficult to cut in paper — it just tears.
                  </p>
                  <p className="text-gray-800">
                    <strong>Fix:</strong> Increase design size, use a simpler design, or switch to 
                    heavier cardstock that holds up better.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-red-400 pl-4 py-3">
                  <h3 className="font-bold text-gray-900">🧹 Cause: Debris in blade housing</h3>
                  <p className="text-gray-600 mb-2">
                    Paper dust builds up in the blade housing, preventing smooth blade rotation.
                  </p>
                  <p className="text-gray-800">
                    <strong>Fix:</strong> Remove blade, blow out housing with compressed air, clean any 
                    visible debris.
                  </p>
                </div>
              </div>
            </section>

            {/* Not Cutting Through Section */}
            <section id="not-cutting" className="mb-10 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900">Fix: Not Cutting Through</h2>
              <p>
                If your Cricut is only scoring the surface instead of cutting all the way through:
              </p>

              <div className="bg-gray-50 rounded-lg p-6 my-4">
                <h3 className="font-bold text-gray-900 mb-3">Try These Fixes (In Order):</h3>
                <ol className="list-decimal list-inside space-y-3 text-gray-700">
                  <li>
                    <strong>Increase pressure:</strong> Add "More Pressure" in Design Space, or bump 
                    up to the next heavier material setting.
                  </li>
                  <li>
                    <strong>Do a second pass:</strong> When it asks if your cut looks good, select "No" 
                    to run another pass without moving the mat.
                  </li>
                  <li>
                    <strong>Check blade depth:</strong> The blade should extend slightly past the housing. 
                    Adjust the dial on the blade housing if needed.
                  </li>
                  <li>
                    <strong>Replace the blade:</strong> A new blade makes a huge difference. Blades 
                    are cheap — don't be stingy.
                  </li>
                  <li>
                    <strong>Flatten your cardstock:</strong> Curled or warped paper doesn't cut evenly. 
                    Store flat and press with books if needed.
                  </li>
                </ol>
              </div>
            </section>

            {/* Dragging Section */}
            <section id="dragging" className="mb-10 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900">Fix: Blade is Dragging</h2>
              <p>
                Dragging means the blade is pushing through the paper instead of slicing, leaving 
                rough edges and potentially tearing the design.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">Check These:</h3>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Is the blade dull? (most common)</li>
                    <li>• Is there debris in the housing?</li>
                    <li>• Is the mat sticky enough?</li>
                    <li>• Is the blade seated properly?</li>
                  </ul>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">Quick Fixes:</h3>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Stab blade into foil ball to clean</li>
                    <li>• Remove blade, blow out housing</li>
                    <li>• Use brayer to secure paper to mat</li>
                    <li>• Remove and reseat blade firmly</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Pro Tips Section */}
            <section id="tips" className="mb-10 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900">Pro Tips for Perfect Cardstock Cuts</h2>

              <div className="space-y-4 my-6">
                <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-4 border-l-4 border-green-500">
                  <h3 className="font-bold text-gray-900">🎯 Always do a test cut</h3>
                  <p className="text-gray-700">
                    Before cutting a full project, use the test cut feature in Design Space. Wastes a 
                    tiny bit of cardstock, saves entire projects.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-4 border-l-4 border-green-500">
                  <h3 className="font-bold text-gray-900">📏 Use a brayer</h3>
                  <p className="text-gray-700">
                    Roll a brayer (or rolling pin) over your cardstock after placing it on the mat. 
                    This ensures perfect adhesion and prevents shifting.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-4 border-l-4 border-green-500">
                  <h3 className="font-bold text-gray-900">⬇️ Start lighter, increase if needed</h3>
                  <p className="text-gray-700">
                    It's easier to run a second pass than to fix a torn project. Start with less 
                    pressure and increase if cuts aren't clean.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-4 border-l-4 border-green-500">
                  <h3 className="font-bold text-gray-900">🔄 Rotate your mat</h3>
                  <p className="text-gray-700">
                    Don't always cut in the same area. Rotate where you place cardstock so the mat 
                    wears evenly and stays stickier longer.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-4 border-l-4 border-green-500">
                  <h3 className="font-bold text-gray-900">❄️ Cold room? Warm your cardstock</h3>
                  <p className="text-gray-700">
                    Cold cardstock can be stiffer and more prone to tearing. Let it come to room 
                    temperature before cutting.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-4 border-l-4 border-green-500">
                  <h3 className="font-bold text-gray-900">📦 Store cardstock flat</h3>
                  <p className="text-gray-700">
                    Curled or warped cardstock doesn't stick to the mat properly. Store flat in a 
                    dry place, away from humidity.
                  </p>
                </div>
              </div>
            </section>

            {/* Best Brands Section */}
            <section id="brands" className="mb-10 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900">Best Cardstock Brands for Cricut</h2>
              <p>
                Not all cardstock is created equal. Here are the brands that crafters consistently recommend:
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900">🏆 Top Picks</h3>
                  <ul className="text-gray-700 space-y-2 text-sm mt-2">
                    <li><strong>Recollections</strong> (Michaels) — Affordable, consistent, wide color range</li>
                    <li><strong>Neenah</strong> — Premium quality, smooth finish, great for invitations</li>
                    <li><strong>Bazzill</strong> — Durable, lots of textures, holds up to intricate cuts</li>
                    <li><strong>Cricut brand</strong> — Designed for Cricut, reliable but pricier</li>
                  </ul>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900">⚠️ Avoid for Intricate Cuts</h3>
                  <ul className="text-gray-700 space-y-2 text-sm mt-2">
                    <li><strong>Dollar store cardstock</strong> — Inconsistent thickness, tears easily</li>
                    <li><strong>Heavy texture</strong> — Texture interferes with blade</li>
                    <li><strong>Foil cardstock</strong> — Needs different blade (fine point, not standard)</li>
                    <li><strong>Cheap glitter cardstock</strong> — Glitter clogs blade</li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 my-4">
                <p className="text-purple-800">
                  <strong>💡 Pro tip:</strong> 65lb smooth cardstock is the sweet spot for most projects. 
                  Heavy enough to hold up, light enough to cut cleanly.
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
              
              <div className="space-y-6 mt-4">
                <div>
                  <h3 className="font-bold text-gray-900">What setting should I use for cardstock on Cricut?</h3>
                  <p className="text-gray-600">
                    For standard 65lb cardstock, use "Medium Cardstock - 80lb." For heavier stock, use 
                    "Heavy Cardstock - 100lb." For light paper, use "Light Cardstock."
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900">Why does my Cricut tear cardstock?</h3>
                  <p className="text-gray-600">
                    Usually a dull blade, too much pressure, or mat not sticky enough. Clean/replace 
                    blade, reduce pressure, and ensure mat holds the paper firmly.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900">Can I use the deep cut blade for cardstock?</h3>
                  <p className="text-gray-600">
                    No — the deep cut blade is for thick materials like chipboard and leather. For 
                    cardstock, use the standard fine point blade.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900">How often should I replace my blade for cardstock?</h3>
                  <p className="text-gray-600">
                    Cardstock dulls blades faster than vinyl. Replace when you notice tearing or 
                    rough edges, typically every few projects or when cuts stop being clean.
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
                href="/guides/cricut-not-cutting-vinyl"
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-[#9CAF88] hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900">Cricut Not Cutting Properly</h3>
                <p className="text-gray-600 text-sm mt-1">General cutting troubleshooting for all materials.</p>
              </Link>
              <Link 
                href="/guides/cricut-mat-not-sticky"
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-[#9CAF88] hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900">Mat Not Sticky?</h3>
                <p className="text-gray-600 text-sm mt-1">Paper needs a sticky mat. Here's how to restore it.</p>
              </Link>
              <Link 
                href="/guides/how-to-weed-vinyl"
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-[#9CAF88] hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900">How to Weed Like a Pro</h3>
                <p className="text-gray-600 text-sm mt-1">Same techniques work for paper projects.</p>
              </Link>
              <Link 
                href="/materials"
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-[#9CAF88] hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900">Material Settings Database</h3>
                <p className="text-gray-600 text-sm mt-1">Find settings for any material type.</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">Still Having Trouble?</h2>
            <p className="text-orange-100 mb-6">
              Our troubleshooting wizard can diagnose exactly what's going wrong with your cuts.
            </p>
            <Link
              href="/troubleshoot"
              className="inline-block bg-white text-orange-600 font-bold py-3 px-8 rounded-full hover:bg-orange-50 transition-colors"
            >
              Start Troubleshooting
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
