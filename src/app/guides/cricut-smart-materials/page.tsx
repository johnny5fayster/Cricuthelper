import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cricut Smart Materials Guide: Matless Cutting Explained | CricutHelper',
  description: 'Everything about Cricut Smart Materials. What they are, how they work, Smart Vinyl vs regular vinyl, and whether they\'re worth the extra cost.',
  keywords: 'cricut smart materials, smart vinyl, smart iron on, matless cutting cricut, cricut 3 smart materials',
  openGraph: {
    title: 'Cricut Smart Materials Guide: Matless Cutting Explained',
    description: 'Complete guide to Smart Materials. Worth the upgrade? We break it down.',
    type: 'article',
  },
};

const faqs = [
  {
    question: "What machines work with Smart Materials?",
    answer: "Cricut Joy, Joy Xtra, Explore 3, Maker 3, and Venture support Smart Materials. Explore Air 2, original Maker, and older machines do NOT support matless cutting."
  },
  {
    question: "Are Smart Materials better quality than regular?",
    answer: "The material quality is identical. 'Smart' just means it has a stiffer backing that feeds through without a mat. The vinyl/iron-on itself is the same."
  },
  {
    question: "Can I use Smart Materials with a mat?",
    answer: "Yes! You can use Smart Materials on a mat if you prefer. You just have the option to go matless."
  },
  {
    question: "Why are Smart Materials more expensive?",
    answer: "The extra cost is for the reinforced liner that enables matless feeding. You're paying for convenience, not better quality material."
  },
  {
    question: "How long can Smart Materials cut?",
    answer: "Up to 4 feet on Joy, and up to 12 feet on Explore 3, Maker 3, and Venture. Great for long banners, signs, and continuous designs."
  },
  {
    question: "Do Smart Materials save time?",
    answer: "Yes, in two ways: faster cutting speed (2X on supported machines) and no mat prep/cleanup. For production work, the time savings add up."
  }
];

export default function CricutSmartMaterialsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Cricut Smart Materials Guide: Matless Cutting Explained",
    "description": "Complete guide to Cricut Smart Materials and matless cutting.",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <main className="min-h-screen bg-gradient-to-b from-[#FAF8F5] to-white py-12">
        <article className="max-w-4xl mx-auto px-4">
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/guides" className="text-[#9CAF88] hover:text-[#6B7F5E]">← Back to Guides</Link>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Cricut Smart Materials: The Complete Guide
            </h1>
            <p className="text-xl text-gray-600">
              Smart Materials let you cut without a mat—up to 12 feet long. But are they worth 
              the extra cost? Here's everything you need to know.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
              <span>📖 12 min read</span>
              <span>•</span>
              <span>Updated February 2026</span>
            </div>
          </header>

          <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-8 rounded-r-lg">
            <p className="font-semibold text-green-800">Quick Answer</p>
            <p className="text-green-700">
              Smart Materials are regular Cricut materials with a stiffer backing that feeds without a mat. 
              Same quality, more convenience, higher price. Worth it for long cuts and high-volume work.
            </p>
          </div>

          {/* TOC */}
          <nav className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="font-bold text-gray-900 mb-4">📋 In This Guide</h2>
            <ul className="space-y-2 text-[#9CAF88]">
              <li><a href="#what" className="hover:underline">→ What Are Smart Materials?</a></li>
              <li><a href="#types" className="hover:underline">→ All Smart Material Types</a></li>
              <li><a href="#how" className="hover:underline">→ How to Use Smart Materials</a></li>
              <li><a href="#comparison" className="hover:underline">→ Smart vs Regular: Price Comparison</a></li>
              <li><a href="#worth" className="hover:underline">→ Are They Worth It?</a></li>
              <li><a href="#faqs" className="hover:underline">→ FAQs</a></li>
            </ul>
          </nav>

          {/* What */}
          <section id="what" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What Are Smart Materials?</h2>
            
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <p className="text-gray-700 mb-4">
                Smart Materials are Cricut's line of materials designed for <strong>matless cutting</strong>. 
                They have a reinforced liner/backing that's stiff enough to feed through the machine 
                without needing a cutting mat.
              </p>
              
              <h3 className="font-bold text-gray-900 mb-3">Key Benefits:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✅ <strong>No mat required</strong> — Load material directly into machine</li>
                <li>✅ <strong>Cut up to 12 feet long</strong> — Great for banners, long quotes, borders</li>
                <li>✅ <strong>2X faster cutting</strong> — On Explore 3 and Maker 3</li>
                <li>✅ <strong>Less mat wear</strong> — Mats last longer when you don't use them</li>
                <li>✅ <strong>Faster workflow</strong> — No mat prep or cleanup</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-blue-800">
                <strong>Important:</strong> The actual vinyl/iron-on material is the same quality as 
                regular Cricut materials. "Smart" refers only to the backing that enables matless feeding.
              </p>
            </div>
          </section>

          {/* Types */}
          <section id="types" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">All Smart Material Types</h2>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
              <table className="w-full text-sm">
                <thead className="bg-[#F5E6E6]">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Material</th>
                    <th className="px-4 py-3 text-left font-semibold">Width</th>
                    <th className="px-4 py-3 text-left font-semibold">Max Length</th>
                    <th className="px-4 py-3 text-left font-semibold">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Smart Vinyl (Permanent)</td>
                    <td className="px-4 py-3">13" or 25"</td>
                    <td className="px-4 py-3">12 ft</td>
                    <td className="px-4 py-3">Outdoor decals, mugs, tumblers</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Smart Vinyl (Removable)</td>
                    <td className="px-4 py-3">13"</td>
                    <td className="px-4 py-3">12 ft</td>
                    <td className="px-4 py-3">Wall decals, temporary signage</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Smart Iron-On</td>
                    <td className="px-4 py-3">13"</td>
                    <td className="px-4 py-3">9 ft</td>
                    <td className="px-4 py-3">T-shirts, bags, fabric items</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Smart Iron-On Glitter</td>
                    <td className="px-4 py-3">13"</td>
                    <td className="px-4 py-3">3 ft</td>
                    <td className="px-4 py-3">Sparkly apparel designs</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Smart Paper (Sticker Cardstock)</td>
                    <td className="px-4 py-3">13"</td>
                    <td className="px-4 py-3">12 ft</td>
                    <td className="px-4 py-3">Labels, planner stickers</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">Smart Label (Writable)</td>
                    <td className="px-4 py-3">Joy size</td>
                    <td className="px-4 py-3">4 ft</td>
                    <td className="px-4 py-3">Organization labels</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <h3 className="font-bold text-purple-800 mb-2">Joy-Specific Smart Materials</h3>
                <p className="text-purple-700 text-sm">
                  Cricut Joy has its own sized Smart Materials (5.5" wide). Joy Xtra uses 
                  the standard 13" Smart Materials.
                </p>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                <h3 className="font-bold text-orange-800 mb-2">Venture Smart Materials</h3>
                <p className="text-orange-700 text-sm">
                  Venture uses 25" wide Smart Materials for large-format cutting. 
                  Same matless concept, bigger scale.
                </p>
              </div>
            </div>
          </section>

          {/* How to Use */}
          <section id="how" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Use Smart Materials</h2>
            
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-4">Step-by-Step</h3>
              <ol className="space-y-4 text-gray-700">
                <li>
                  <strong>1. Select your material in Design Space</strong>
                  <p className="text-gray-600 text-sm mt-1">
                    Choose "Smart Vinyl" or "Smart Iron-On" etc. The software knows it's matless.
                  </p>
                </li>
                <li>
                  <strong>2. Load material directly into machine</strong>
                  <p className="text-gray-600 text-sm mt-1">
                    Align the left edge with the guides. The machine will grab and feed it automatically.
                  </p>
                </li>
                <li>
                  <strong>3. Press the Load button</strong>
                  <p className="text-gray-600 text-sm mt-1">
                    The rollers pull the material through. No mat needed.
                  </p>
                </li>
                <li>
                  <strong>4. Cut as normal</strong>
                  <p className="text-gray-600 text-sm mt-1">
                    The machine cuts at 2X speed (on 3-series machines). Weeding and application are the same.
                  </p>
                </li>
              </ol>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
              <h3 className="font-bold text-yellow-800 mb-2">Tips for Best Results</h3>
              <ul className="text-yellow-700 space-y-2">
                <li>• Cut the material straight across before loading (clean edge)</li>
                <li>• Keep material roll tension light—don't pull against the machine</li>
                <li>• For Iron-On, remember to mirror your design</li>
                <li>• You can still use Smart Materials on a mat if you prefer</li>
              </ul>
            </div>
          </section>

          {/* Price Comparison */}
          <section id="comparison" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Smart vs Regular: Price Comparison</h2>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
              <table className="w-full text-sm">
                <thead className="bg-[#F5E6E6]">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Material</th>
                    <th className="px-4 py-3 text-left font-semibold">Regular Price</th>
                    <th className="px-4 py-3 text-left font-semibold">Smart Price</th>
                    <th className="px-4 py-3 text-left font-semibold">Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3">Permanent Vinyl (per ft)</td>
                    <td className="px-4 py-3">~$1.00</td>
                    <td className="px-4 py-3">~$1.25</td>
                    <td className="px-4 py-3 text-red-600">+25%</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3">Iron-On (per ft)</td>
                    <td className="px-4 py-3">~$1.50</td>
                    <td className="px-4 py-3">~$2.00</td>
                    <td className="px-4 py-3 text-red-600">+33%</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3">Glitter Iron-On (per ft)</td>
                    <td className="px-4 py-3">~$3.00</td>
                    <td className="px-4 py-3">~$4.00</td>
                    <td className="px-4 py-3 text-red-600">+33%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">The Math</h3>
              <p className="text-gray-700">
                Smart Materials cost roughly <strong>25-35% more</strong> than equivalent regular materials. 
                The question is whether time savings and convenience justify the premium for your workflow.
              </p>
            </div>
          </section>

          {/* Worth It */}
          <section id="worth" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Are Smart Materials Worth It?</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 border-l-4 border-green-500 rounded-r-xl p-6">
                <h3 className="font-bold text-green-800 mb-3">✅ Worth It If You...</h3>
                <ul className="text-green-700 space-y-2">
                  <li>• Cut long designs (banners, borders, signs)</li>
                  <li>• Run a small business with high volume</li>
                  <li>• Value your time over material cost</li>
                  <li>• Hate mat maintenance</li>
                  <li>• Have an Explore 3 or Maker 3 (2X speed)</li>
                  <li>• Do production/batch cutting</li>
                </ul>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-6">
                <h3 className="font-bold text-red-800 mb-3">❌ Skip If You...</h3>
                <ul className="text-red-700 space-y-2">
                  <li>• Mostly make small projects</li>
                  <li>• Are budget-conscious</li>
                  <li>• Already have regular vinyl in stock</li>
                  <li>• Have an older machine (no 2X speed benefit)</li>
                  <li>• Don't mind using mats</li>
                  <li>• Craft casually (not production)</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">Our Take</h3>
              <p className="text-gray-700">
                For hobbyists making occasional projects, regular materials + mats work fine. 
                The 25-35% premium adds up if you're not benefiting from matless convenience.
              </p>
              <p className="text-gray-700 mt-2">
                For sellers and high-volume crafters, Smart Materials often pay for themselves in 
                time savings. If you value your time at $15+/hour, the faster workflow matters.
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Best hybrid approach:</strong> Use Smart Materials for long cuts and production runs. 
                Use regular materials (+ third-party brands) for small projects and experimentation.
              </p>
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
          <section className="bg-gradient-to-r from-[#F5E6E6] to-purple-100 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Bottom Line</h2>
            <div className="text-gray-700 space-y-2">
              <p>• Smart Materials = same quality material + stiffer backing for matless cutting</p>
              <p>• Cost 25-35% more than regular materials</p>
              <p>• Cut up to 12 feet without a mat</p>
              <p>• 2X faster on Explore 3, Maker 3, Venture</p>
              <p>• Worth it for production work, optional for hobbyists</p>
            </div>
          </section>

          {/* Related */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Guides</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/guides/best-cricut-for-beginners" className="block bg-white rounded-xl shadow p-4 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900">Best Cricut for Beginners</h3>
                <p className="text-sm text-gray-600">Which machine should you start with?</p>
              </Link>
              <Link href="/guides/cricut-maker-vs-explore" className="block bg-white rounded-xl shadow p-4 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900">Maker vs Explore</h3>
                <p className="text-sm text-gray-600">Both support Smart Materials</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Having Trouble with Your Cricut?</h2>
            <p className="text-gray-600 mb-6">Our troubleshooting wizard helps solve problems fast.</p>
            <Link href="/troubleshoot" className="inline-block bg-[#9CAF88] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#6B7F5E] transition-colors">
              Start Troubleshooting →
            </Link>
          </section>
        </article>
      </main>
    </>
  );
}
