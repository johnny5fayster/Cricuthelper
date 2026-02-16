import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Cut Leather with Cricut: Complete Guide | CricutHelper',
  description: 'Cut leather perfectly with your Cricut. Settings for faux leather, genuine leather, tooling leather. Which blade, what settings, and pro tips.',
  keywords: 'cut leather cricut, cricut leather settings, faux leather cricut, genuine leather cricut, knife blade leather',
  openGraph: {
    title: 'How to Cut Leather with Cricut: Complete Guide',
    description: 'Master leather cutting on Cricut. Faux, genuine, and tooling leather settings.',
    type: 'article',
  },
};

const faqs = [
  {
    question: "Can Cricut Explore cut leather?",
    answer: "Explore can cut thin faux leather and bonded leather with the Deep Point blade. For genuine leather or thick faux leather, you need a Maker with the Knife blade."
  },
  {
    question: "What blade do I need to cut leather on Cricut?",
    answer: "Faux leather (thin): Fine Point or Deep Point. Faux leather (thick): Deep Point with multiple passes. Genuine leather: Knife blade (Maker only). Tooling leather: Knife blade (Maker only)."
  },
  {
    question: "Why is my Cricut tearing the leather instead of cutting?",
    answer: "Usually a dull blade or wrong settings. Try: new blade, slower speed, StrongGrip mat, tape edges down, and make sure leather is grain-side up."
  },
  {
    question: "Do I need to mirror leather designs?",
    answer: "Only if there's a right/wrong side and you're cutting from the back. Most leather is cut grain-side up (pretty side up), so no mirroring needed."
  },
  {
    question: "What mat should I use for leather?",
    answer: "StrongGrip (purple) for genuine leather and thick faux. StandardGrip (green) for thin faux leather. Tape edges for thick materials."
  }
];

export default function HowToCutLeatherCricutPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Cut Leather with Cricut",
    "description": "Complete guide to cutting faux and genuine leather with Cricut machines.",
    "step": [
      { "@type": "HowToStep", "name": "Choose the right leather", "text": "Thin faux leather works on all machines. Genuine leather requires Maker with Knife blade." },
      { "@type": "HowToStep", "name": "Select correct blade", "text": "Fine/Deep Point for faux, Knife blade for genuine leather." },
      { "@type": "HowToStep", "name": "Prepare material", "text": "Place leather grain-side up on StrongGrip mat. Tape edges for thick leather." },
      { "@type": "HowToStep", "name": "Set material settings", "text": "Use Faux Leather or Genuine Leather presets, or create custom settings." },
      { "@type": "HowToStep", "name": "Cut and finish", "text": "Run cut, keep leather on mat until fully cut. Use multiple passes if needed." }
    ]
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <main className="min-h-screen bg-gradient-to-b from-[#FAF8F5] to-white py-12">
        <article className="max-w-4xl mx-auto px-4">
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/guides" className="text-[#9CAF88] hover:text-[#6B7F5E]">← Back to Guides</Link>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              How to Cut Leather with Cricut: Complete Guide
            </h1>
            <p className="text-xl text-gray-600">
              Leather is one of the most rewarding materials to cut with Cricut—earrings, 
              keychains, journal covers, and more. Here's how to get perfect cuts every time.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
              <span>📖 14 min read</span>
              <span>•</span>
              <span>Updated February 2026</span>
            </div>
          </header>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 rounded-r-lg">
            <p className="font-semibold text-yellow-800">Quick Answer</p>
            <p className="text-yellow-700">
              <strong>Faux leather:</strong> Works on Explore & Maker with Deep Point blade.
              <strong> Genuine leather:</strong> Requires Maker with Knife blade. Tape edges, use StrongGrip mat, expect multiple passes.
            </p>
          </div>

          {/* TOC */}
          <nav className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="font-bold text-gray-900 mb-4">📋 In This Guide</h2>
            <ul className="space-y-2 text-[#9CAF88]">
              <li><a href="#types" className="hover:underline">→ Types of Leather & What Cuts What</a></li>
              <li><a href="#faux" className="hover:underline">→ Cutting Faux Leather (All Machines)</a></li>
              <li><a href="#genuine" className="hover:underline">→ Cutting Genuine Leather (Maker Only)</a></li>
              <li><a href="#settings" className="hover:underline">→ Settings Cheat Sheet</a></li>
              <li><a href="#tips" className="hover:underline">→ Pro Tips for Clean Cuts</a></li>
              <li><a href="#projects" className="hover:underline">→ Popular Leather Projects</a></li>
              <li><a href="#faqs" className="hover:underline">→ FAQs</a></li>
            </ul>
          </nav>

          {/* Types */}
          <section id="types" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Types of Leather & What Cuts What</h2>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
              <table className="w-full text-sm">
                <thead className="bg-[#F5FAF3]">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Leather Type</th>
                    <th className="px-4 py-3 text-left font-semibold">Machine</th>
                    <th className="px-4 py-3 text-left font-semibold">Blade</th>
                    <th className="px-4 py-3 text-left font-semibold">Difficulty</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3">Faux Leather (thin)</td>
                    <td className="px-4 py-3 text-green-600">All Explore & Maker</td>
                    <td className="px-4 py-3">Fine Point</td>
                    <td className="px-4 py-3">Easy</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3">Faux Leather (thick/textured)</td>
                    <td className="px-4 py-3 text-green-600">All Explore & Maker</td>
                    <td className="px-4 py-3">Deep Point</td>
                    <td className="px-4 py-3">Medium</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3">Bonded Leather</td>
                    <td className="px-4 py-3 text-green-600">All Explore & Maker</td>
                    <td className="px-4 py-3">Deep Point</td>
                    <td className="px-4 py-3">Medium</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3">Genuine Leather (1-2oz)</td>
                    <td className="px-4 py-3 text-purple-600">Maker Only</td>
                    <td className="px-4 py-3">Knife Blade</td>
                    <td className="px-4 py-3">Advanced</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3">Tooling Leather (2-3oz)</td>
                    <td className="px-4 py-3 text-purple-600">Maker Only</td>
                    <td className="px-4 py-3">Knife Blade</td>
                    <td className="px-4 py-3">Advanced</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3">Thick Leather (4oz+)</td>
                    <td className="px-4 py-3 text-red-600">Too thick for Cricut</td>
                    <td className="px-4 py-3">—</td>
                    <td className="px-4 py-3">N/A</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-blue-800">
                <strong>Leather weight explained:</strong> 1oz ≈ 0.4mm, 2oz ≈ 0.8mm, 3oz ≈ 1.2mm. 
                Cricut Maker can cut up to ~3oz (1.2mm) with the Knife blade. Anything thicker requires 
                a leather-specific cutting machine or hand tools.
              </p>
            </div>
          </section>

          {/* Faux Leather */}
          <section id="faux" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Cutting Faux Leather (All Machines)</h2>
            
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-4">Step-by-Step</h3>
              <ol className="space-y-3 text-gray-700">
                <li><strong>1. Choose your leather.</strong> Thin, smooth faux leather works best. Avoid heavily textured or very thick sheets.</li>
                <li><strong>2. Prepare your mat.</strong> Use StandardGrip (green) for thin faux, StrongGrip (purple) for thicker. If mat isn't sticky enough, use masking tape on edges.</li>
                <li><strong>3. Place leather grain-side UP.</strong> The pretty/textured side faces up.</li>
                <li><strong>4. Select material in Design Space.</strong> Choose "Faux Leather (Paper Thin)" or "Faux Leather" depending on thickness.</li>
                <li><strong>5. Load and cut.</strong> Fine Point blade for thin, Deep Point for thick. Use "More" pressure if not cutting through.</li>
                <li><strong>6. Carefully remove.</strong> Use a spatula to lift edges without stretching.</li>
              </ol>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <h3 className="font-bold text-green-800 mb-2">✅ Best Faux Leather</h3>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Cricut Faux Leather</li>
                  <li>• Sizzix Surfacez</li>
                  <li>• Dollar Tree sheets (test first)</li>
                  <li>• Faux leather with fabric backing</li>
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <h3 className="font-bold text-red-800 mb-2">❌ Avoid</h3>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• Very thick/rigid faux leather</li>
                  <li>• Heavily glittered (clogs blade)</li>
                  <li>• Patent leather (tears easily)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Genuine Leather */}
          <section id="genuine" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Cutting Genuine Leather (Maker Only)</h2>
            
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 mb-6">
              <p className="text-purple-800">
                <strong>⚠️ Maker Required:</strong> Genuine leather requires the Knife blade and 
                Maker's Adaptive Tool System (10lb cutting force). Explore machines cannot cut real leather.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-4">Genuine Leather Setup</h3>
              <ol className="space-y-3 text-gray-700">
                <li><strong>1. Choose leather weight.</strong> 1-2oz for earrings/delicate items, 2-3oz for keychains/bracelets.</li>
                <li><strong>2. Use StrongGrip mat.</strong> Essential—leather is heavy and will shift on weaker mats.</li>
                <li><strong>3. Tape all edges.</strong> Masking tape or painter's tape along all 4 edges. This prevents shifting during long cuts.</li>
                <li><strong>4. Move star wheels.</strong> Shift them to the sides to prevent marks on leather.</li>
                <li><strong>5. Select "Genuine Leather" material.</strong> Or use custom settings for your specific thickness.</li>
                <li><strong>6. Expect 10-20+ passes.</strong> Knife blade cuts gradually. Don't rush—let it complete all passes.</li>
                <li><strong>7. Stay nearby.</strong> Cuts can take 15-30+ minutes. Watch for issues.</li>
              </ol>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
              <h3 className="font-bold text-yellow-800 mb-2">⚠️ Critical Tips for Genuine Leather</h3>
              <ul className="text-yellow-700 space-y-2">
                <li>• <strong>Don't skip the tape.</strong> Leather WILL shift without it.</li>
                <li>• <strong>Simple designs only.</strong> Avoid tiny details—leather doesn't cut as precisely as vinyl.</li>
                <li>• <strong>New blade matters.</strong> Dull knife blades struggle with leather.</li>
                <li>• <strong>Test on scraps first.</strong> Always test your settings before cutting your project.</li>
              </ul>
            </div>
          </section>

          {/* Settings */}
          <section id="settings" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Settings Cheat Sheet</h2>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-[#F5FAF3]">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Material</th>
                    <th className="px-4 py-3 text-left font-semibold">Blade</th>
                    <th className="px-4 py-3 text-left font-semibold">Pressure</th>
                    <th className="px-4 py-3 text-left font-semibold">Passes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3">Faux Leather (Paper Thin)</td>
                    <td className="px-4 py-3">Fine Point</td>
                    <td className="px-4 py-3">Default/More</td>
                    <td className="px-4 py-3">1</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3">Faux Leather (Standard)</td>
                    <td className="px-4 py-3">Deep Point</td>
                    <td className="px-4 py-3">More</td>
                    <td className="px-4 py-3">1-2</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3">Genuine Leather (1-2oz)</td>
                    <td className="px-4 py-3">Knife</td>
                    <td className="px-4 py-3">Default</td>
                    <td className="px-4 py-3">10-15</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3">Tooling Leather (2-3oz)</td>
                    <td className="px-4 py-3">Knife</td>
                    <td className="px-4 py-3">More</td>
                    <td className="px-4 py-3">15-20+</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Pro Tips */}
          <section id="tips" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pro Tips for Clean Leather Cuts</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">🎯 Design Tips</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Avoid designs smaller than 1/2 inch</li>
                  <li>• Round corners cut better than sharp</li>
                  <li>• Leave space between cuts (1/4" minimum)</li>
                  <li>• Simple shapes = cleaner cuts</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">🔧 Blade Tips</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Dedicate a blade to leather only</li>
                  <li>• Replace more often (leather dulls fast)</li>
                  <li>• Clean between cuts</li>
                  <li>• Deep Point for faux, Knife for genuine</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">📋 Mat Tips</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Always use StrongGrip for genuine</li>
                  <li>• Tape edges even on StrongGrip</li>
                  <li>• Clean mat residue with baby wipes</li>
                  <li>• Leather can reduce mat stickiness—clean after</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">✨ Finishing Tips</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Sand edges gently for smooth finish</li>
                  <li>• Apply leather conditioner or sealant</li>
                  <li>• Use edge paint for professional look</li>
                  <li>• Burnish edges with slicker tool</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Leather Projects</h2>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <span className="text-3xl">👂</span>
                <h3 className="font-bold text-gray-900 mt-2">Earrings</h3>
                <p className="text-gray-600 text-sm mt-1">Faux or thin genuine leather. Best seller on Etsy!</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <span className="text-3xl">🔑</span>
                <h3 className="font-bold text-gray-900 mt-2">Keychains</h3>
                <p className="text-gray-600 text-sm mt-1">2-3oz leather for durability. Add snaps or rivets.</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <span className="text-3xl">📔</span>
                <h3 className="font-bold text-gray-900 mt-2">Journal Covers</h3>
                <p className="text-gray-600 text-sm mt-1">Wrap-around style. Cut slots for elastic closure.</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <span className="text-3xl">💼</span>
                <h3 className="font-bold text-gray-900 mt-2">Bookmarks</h3>
                <p className="text-gray-600 text-sm mt-1">Faux leather works great. Add tassels!</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <span className="text-3xl">🏷️</span>
                <h3 className="font-bold text-gray-900 mt-2">Luggage Tags</h3>
                <p className="text-gray-600 text-sm mt-1">Genuine leather + hardware. Great gifts.</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <span className="text-3xl">⌚</span>
                <h3 className="font-bold text-gray-900 mt-2">Watch Bands</h3>
                <p className="text-gray-600 text-sm mt-1">2oz genuine leather. Need precise measurements.</p>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section id="faqs" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Reference</h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <h3 className="font-bold mb-2">Faux Leather (All Machines)</h3>
                <ul className="text-sm space-y-1">
                  <li>• Blade: Fine or Deep Point</li>
                  <li>• Mat: StandardGrip or StrongGrip</li>
                  <li>• Material: "Faux Leather"</li>
                  <li>• Passes: 1-2</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">Genuine Leather (Maker Only)</h3>
                <ul className="text-sm space-y-1">
                  <li>• Blade: Knife blade</li>
                  <li>• Mat: StrongGrip + tape edges</li>
                  <li>• Material: "Genuine Leather"</li>
                  <li>• Passes: 10-20+</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Related */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Guides</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/guides/cricut-blade-guide" className="block bg-white rounded-xl shadow p-4 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900">Cricut Blade Guide</h3>
                <p className="text-sm text-gray-600">Which blade for every material</p>
              </Link>
              <Link href="/guides/cricut-maker-vs-explore" className="block bg-white rounded-xl shadow p-4 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900">Maker vs Explore</h3>
                <p className="text-sm text-gray-600">Which machine cuts leather?</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Leather Not Cutting Right?</h2>
            <p className="text-gray-600 mb-6">Our troubleshooting wizard can help diagnose the problem.</p>
            <Link href="/troubleshoot" className="inline-block bg-[#9CAF88] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#6B7F5E] transition-colors">
              Start Troubleshooting →
            </Link>
          </section>
        </article>
      </main>
    </>
  );
}
