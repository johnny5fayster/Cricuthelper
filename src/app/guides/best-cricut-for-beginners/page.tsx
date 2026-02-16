import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Cricut for Beginners 2026: Which Machine to Buy First | CricutHelper',
  description: 'Confused about which Cricut to buy? We compare Joy, Explore, and Maker for beginners. Honest recommendations based on your budget and project types.',
  keywords: 'best cricut for beginners, first cricut machine, cricut for beginners, which cricut to buy, cricut joy vs explore vs maker',
  openGraph: {
    title: 'Best Cricut for Beginners 2026: Which Machine to Buy First',
    description: 'Which Cricut should you start with? Honest guide for first-time buyers.',
    type: 'article',
  },
};

const faqs = [
  {
    question: "Is Cricut hard to learn for beginners?",
    answer: "Cricut has a learning curve, but it's manageable. Design Space (the software) takes 2-4 hours to get comfortable with. Most beginners are making simple vinyl projects within their first day. The community has tons of free tutorials."
  },
  {
    question: "Should I buy Cricut Joy as my first machine?",
    answer: "Only if you have limited space or just want simple labels, cards, and small decals. For most beginners, Explore 3 offers much better value—more materials, larger cuts, and room to grow."
  },
  {
    question: "Is Cricut Maker worth the extra money for beginners?",
    answer: "For most beginners, no. Unless you specifically want to cut fabric without backing, or plan to work with leather and wood, the Explore 3 does everything you need at a lower price."
  },
  {
    question: "Do I need Cricut Access as a beginner?",
    answer: "Not essential. You can use 100% free designs from the community, upload your own, or buy individual designs. Try the free tier first. Cricut Access is nice to have, not need to have."
  },
  {
    question: "What should I buy with my first Cricut?",
    answer: "Essential: Replacement blade, weeding tools, vinyl sampler pack, transfer tape. Nice to have: Extra mats (LightGrip and StandardGrip), scraper tool, heat press if doing HTV. Skip the overpriced bundles—buy what you need as you need it."
  },
  {
    question: "Cricut Explore 3 or Explore Air 2?",
    answer: "Explore 3 if you can afford it—it's faster with Smart Materials and more future-proof. Explore Air 2 is fine if you find it on sale for under $180, but the 3 is worth the upgrade."
  }
];

export default function BestCricutForBeginnersPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Cricut for Beginners 2026: Which Machine to Buy First",
    "description": "Complete beginner's buying guide for Cricut machines.",
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
              Best Cricut for Beginners 2026: Which Machine to Buy First
            </h1>
            <p className="text-xl text-gray-600">
              Buying your first Cricut is exciting (and overwhelming). This guide cuts through 
              the marketing to help you pick the right machine for your budget and goals.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
              <span>📖 15 min read</span>
              <span>•</span>
              <span>Updated February 2026</span>
            </div>
          </header>

          <div className="bg-[#F5E6E6] border-l-4 border-[#9CAF88] p-4 mb-8 rounded-r-lg">
            <p className="font-semibold text-[#6B7F5E]">🎯 Quick Answer</p>
            <p className="text-[#6B7F5E]">
              <strong>For most beginners: Cricut Explore 3</strong> (~$300). Best balance of 
              capability, price, and room to grow. Only consider Maker if you need fabric cutting.
            </p>
          </div>

          {/* Table of Contents */}
          <nav className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="font-bold text-gray-900 mb-4">📋 In This Guide</h2>
            <ul className="space-y-2 text-[#9CAF88]">
              <li><a href="#overview" className="hover:underline">→ All Cricut Machines at a Glance</a></li>
              <li><a href="#joy" className="hover:underline">→ Cricut Joy: The Compact One</a></li>
              <li><a href="#explore" className="hover:underline">→ Cricut Explore 3: The Sweet Spot</a></li>
              <li><a href="#maker" className="hover:underline">→ Cricut Maker 3: The Powerhouse</a></li>
              <li><a href="#comparison" className="hover:underline">→ Side-by-Side Comparison</a></li>
              <li><a href="#recommendation" className="hover:underline">→ Our Recommendations by Project Type</a></li>
              <li><a href="#avoid" className="hover:underline">→ Mistakes to Avoid</a></li>
              <li><a href="#accessories" className="hover:underline">→ Essential First Accessories</a></li>
              <li><a href="#faqs" className="hover:underline">→ Beginner FAQs</a></li>
            </ul>
          </nav>

          {/* Overview */}
          <section id="overview" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              All Cricut Machines at a Glance
            </h2>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-[#F5E6E6]">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">Machine</th>
                      <th className="px-4 py-3 text-left font-semibold">Price (2026)</th>
                      <th className="px-4 py-3 text-left font-semibold">Max Cut Size</th>
                      <th className="px-4 py-3 text-left font-semibold">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">Joy</td>
                      <td className="px-4 py-3">$180</td>
                      <td className="px-4 py-3">5.5" × 4ft</td>
                      <td className="px-4 py-3">Labels, cards, small decals</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">Joy Xtra</td>
                      <td className="px-4 py-3">$250</td>
                      <td className="px-4 py-3">8.5" × 4ft</td>
                      <td className="px-4 py-3">Small crafts, Print Then Cut</td>
                    </tr>
                    <tr className="hover:bg-gray-50 bg-green-50">
                      <td className="px-4 py-3 font-medium">Explore 3 ⭐</td>
                      <td className="px-4 py-3">$300</td>
                      <td className="px-4 py-3">11.5" × 12ft</td>
                      <td className="px-4 py-3">Most crafts, vinyl, paper, HTV</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">Maker 3</td>
                      <td className="px-4 py-3">$400</td>
                      <td className="px-4 py-3">11.5" × 12ft</td>
                      <td className="px-4 py-3">Everything + fabric, leather, wood</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">Venture</td>
                      <td className="px-4 py-3">$1,000+</td>
                      <td className="px-4 py-3">24" × 12ft</td>
                      <td className="px-4 py-3">Large projects, professional use</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
              <p className="text-yellow-800">
                <strong>💡 Skip the old models:</strong> Explore Air 2 and Maker (non-3) are still 
                sold but are slower and don't support Smart Materials. The 3-series machines are 
                worth the small price difference.
              </p>
            </div>
          </section>

          {/* Joy */}
          <section id="joy" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Cricut Joy & Joy Xtra: The Compact Options
            </h2>
            
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">📱</span>
                <div>
                  <h3 className="font-bold text-xl text-gray-900">Cricut Joy</h3>
                  <p className="text-gray-600">~$180 | 5.5" max width</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">✅ Pros</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Super compact (fits in a drawer)</li>
                    <li>• Quiet operation</li>
                    <li>• Quick setup for simple projects</li>
                    <li>• Great for labels and organization</li>
                    <li>• Card making with Insert Cards</li>
                    <li>• Matless cutting with Smart Materials</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-700 mb-2">❌ Cons</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Very limited cut width (5.5")</li>
                    <li>• No Print Then Cut</li>
                    <li>• Can't cut most craft materials</li>
                    <li>• You'll likely outgrow it quickly</li>
                    <li>• Less value per dollar</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-blue-800">
                <strong>Our take:</strong> Joy is great as a second machine for quick labels, 
                but it's too limited for most beginners. Joy Xtra adds Print Then Cut but is 
                close to Explore 3 pricing. Skip both unless space is your main constraint.
              </p>
            </div>
          </section>

          {/* Explore */}
          <section id="explore" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Cricut Explore 3: The Sweet Spot for Beginners
            </h2>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">⭐</span>
                <div>
                  <h3 className="font-bold text-xl text-gray-900">Cricut Explore 3</h3>
                  <p className="text-gray-600">~$300 | 11.5" width | Our #1 Pick</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">✅ Pros</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Cuts 100+ materials (vinyl, paper, HTV, etc.)</li>
                    <li>• Full 11.5" × 11.5" cut area (12ft with Smart)</li>
                    <li>• Print Then Cut for stickers</li>
                    <li>• 2X faster with Smart Materials</li>
                    <li>• Works with all standard accessories</li>
                    <li>• Great community support</li>
                    <li>• Room to grow your skills</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-700 mb-2">❌ Cons</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• No unbonded fabric cutting</li>
                    <li>• Can't cut thick leather or wood</li>
                    <li>• No Adaptive Tool System</li>
                    <li>• Needs stabilizer for fabric</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">What Can Explore 3 Cut?</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-medium text-gray-900 mb-2">Vinyl & Iron-On</p>
                  <ul className="space-y-1 text-gray-600">
                    <li>✓ Adhesive vinyl</li>
                    <li>✓ HTV / Iron-on</li>
                    <li>✓ Glitter vinyl</li>
                    <li>✓ Holographic vinyl</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-gray-900 mb-2">Paper & Cardstock</p>
                  <ul className="space-y-1 text-gray-600">
                    <li>✓ Cardstock (all weights)</li>
                    <li>✓ Sticker paper</li>
                    <li>✓ Poster board</li>
                    <li>✓ Vellum</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-gray-900 mb-2">Specialty</p>
                  <ul className="space-y-1 text-gray-600">
                    <li>✓ Bonded fabric</li>
                    <li>✓ Faux leather (thin)</li>
                    <li>✓ Craft foam</li>
                    <li>✓ Cork</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Maker */}
          <section id="maker" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Cricut Maker 3: The Powerhouse
            </h2>
            
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">💪</span>
                <div>
                  <h3 className="font-bold text-xl text-gray-900">Cricut Maker 3</h3>
                  <p className="text-gray-600">~$400 | 11.5" width | Maximum capability</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-700 mb-2">✅ Pros</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Everything Explore 3 does, plus...</li>
                    <li>• Cuts fabric WITHOUT backing (Rotary blade)</li>
                    <li>• Cuts leather, balsa wood, matboard</li>
                    <li>• Adaptive Tool System (10lb force)</li>
                    <li>• Engraving and debossing</li>
                    <li>• Wavy and perforation blades</li>
                    <li>• Best for quilting/sewing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-700 mb-2">❌ Cons</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• $100 more than Explore 3</li>
                    <li>• Specialty blades cost extra ($30-50 each)</li>
                    <li>• Overkill for vinyl-only crafters</li>
                    <li>• Same learning curve as Explore</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
              <p className="text-purple-800">
                <strong>Our take:</strong> Maker 3 is worth it IF you sew, quilt, or want to work 
                with leather/wood. If you're mainly doing vinyl, HTV, and paper, save the $100 and 
                get Explore 3. You can always upgrade later.
              </p>
            </div>
          </section>

          {/* Comparison */}
          <section id="comparison" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Side-by-Side Comparison
            </h2>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-[#F5E6E6]">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">Feature</th>
                      <th className="px-4 py-3 text-center font-semibold">Joy</th>
                      <th className="px-4 py-3 text-center font-semibold bg-green-100">Explore 3</th>
                      <th className="px-4 py-3 text-center font-semibold">Maker 3</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">Price</td>
                      <td className="px-4 py-3 text-center">$180</td>
                      <td className="px-4 py-3 text-center bg-green-50">$300</td>
                      <td className="px-4 py-3 text-center">$400</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">Max Width</td>
                      <td className="px-4 py-3 text-center">5.5"</td>
                      <td className="px-4 py-3 text-center bg-green-50">11.5"</td>
                      <td className="px-4 py-3 text-center">11.5"</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">Materials</td>
                      <td className="px-4 py-3 text-center">50+</td>
                      <td className="px-4 py-3 text-center bg-green-50">100+</td>
                      <td className="px-4 py-3 text-center">300+</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">Print Then Cut</td>
                      <td className="px-4 py-3 text-center">❌</td>
                      <td className="px-4 py-3 text-center bg-green-50">✅</td>
                      <td className="px-4 py-3 text-center">✅</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">Unbonded Fabric</td>
                      <td className="px-4 py-3 text-center">❌</td>
                      <td className="px-4 py-3 text-center bg-green-50">❌</td>
                      <td className="px-4 py-3 text-center">✅</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">Leather/Wood</td>
                      <td className="px-4 py-3 text-center">❌</td>
                      <td className="px-4 py-3 text-center bg-green-50">Thin only</td>
                      <td className="px-4 py-3 text-center">✅</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">Smart Materials</td>
                      <td className="px-4 py-3 text-center">✅</td>
                      <td className="px-4 py-3 text-center bg-green-50">✅</td>
                      <td className="px-4 py-3 text-center">✅</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">Cutting Force</td>
                      <td className="px-4 py-3 text-center">~4lb</td>
                      <td className="px-4 py-3 text-center bg-green-50">~4lb</td>
                      <td className="px-4 py-3 text-center">10lb</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">Beginner Rating</td>
                      <td className="px-4 py-3 text-center">⭐⭐</td>
                      <td className="px-4 py-3 text-center bg-green-50">⭐⭐⭐⭐⭐</td>
                      <td className="px-4 py-3 text-center">⭐⭐⭐⭐</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Recommendations */}
          <section id="recommendation" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Our Recommendations by Project Type
            </h2>
            
            <div className="space-y-4">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">🏠 Home Organization & Labels</h3>
                <p className="text-gray-700 mb-2">
                  Pantry labels, bin labels, home decor signs
                </p>
                <p className="text-[#9CAF88] font-medium">
                  → Cricut Joy or Explore 3 (Joy if you want compact)
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">👕 T-Shirts & HTV Projects</h3>
                <p className="text-gray-700 mb-2">
                  Custom shirts, hoodies, bags with iron-on vinyl
                </p>
                <p className="text-[#9CAF88] font-medium">
                  → Cricut Explore 3 (best value for HTV work)
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">🎁 Cards & Paper Crafts</h3>
                <p className="text-gray-700 mb-2">
                  Greeting cards, invitations, party decorations
                </p>
                <p className="text-[#9CAF88] font-medium">
                  → Cricut Explore 3 (paper is its sweet spot)
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">🪡 Sewing & Quilting</h3>
                <p className="text-gray-700 mb-2">
                  Cutting fabric for quilts, appliqué, sewing patterns
                </p>
                <p className="text-[#9CAF88] font-medium">
                  → Cricut Maker 3 (Rotary blade is essential)
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">🏪 Small Business / Etsy Seller</h3>
                <p className="text-gray-700 mb-2">
                  Stickers, decals, custom products for sale
                </p>
                <p className="text-[#9CAF88] font-medium">
                  → Cricut Explore 3 (start here, upgrade to Maker if needed)
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">🎨 Mixed Crafts / "I Want to Do Everything"</h3>
                <p className="text-gray-700 mb-2">
                  Not sure yet, want maximum flexibility
                </p>
                <p className="text-[#9CAF88] font-medium">
                  → Cricut Maker 3 (if budget allows) or Explore 3 (better value)
                </p>
              </div>
            </div>
          </section>

          {/* Mistakes to Avoid */}
          <section id="avoid" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              5 Mistakes Beginners Make (And How to Avoid Them)
            </h2>
            
            <div className="space-y-4">
              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                <h3 className="font-bold text-red-800 mb-2">1. Buying Too Small</h3>
                <p className="text-red-700">
                  Joy's 5.5" width feels limiting fast. You'll want to make a 12" decal and can't. 
                  Unless space is critical, start with Explore 3.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                <h3 className="font-bold text-red-800 mb-2">2. Overspending on Bundles</h3>
                <p className="text-red-700">
                  Cricut bundles often include materials you don't need at inflated prices. 
                  Buy the machine, then buy supplies as you need them.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                <h3 className="font-bold text-red-800 mb-2">3. Thinking Maker is "Better"</h3>
                <p className="text-red-700">
                  Maker isn't universally better—it's specialized. For vinyl and paper, 
                  Explore 3 performs identically. Maker only wins for fabric/leather/wood.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                <h3 className="font-bold text-red-800 mb-2">4. Subscribing to Cricut Access Immediately</h3>
                <p className="text-red-700">
                  Wait until you know what designs you need. The free community has thousands 
                  of designs. You might not need Access at all.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                <h3 className="font-bold text-red-800 mb-2">5. Only Buying Cricut-Brand Materials</h3>
                <p className="text-red-700">
                  Cricut vinyl works great, but costs 2-3x more than quality alternatives like 
                  Oracal or Siser. Learn to use Custom settings with third-party materials.
                </p>
              </div>
            </div>
          </section>

          {/* Accessories */}
          <section id="accessories" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Essential First Accessories
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="font-bold text-green-800 mb-4">✅ Buy These First</h3>
                <ul className="space-y-2 text-green-700">
                  <li><strong>Extra blades</strong> — You'll need replacements ($10)</li>
                  <li><strong>Weeding tools</strong> — Basic set for $10-15</li>
                  <li><strong>Vinyl sampler pack</strong> — Learn with variety ($15)</li>
                  <li><strong>Transfer tape</strong> — Essential for vinyl ($8)</li>
                  <li><strong>Scraper tool</strong> — Burnishing and cleanup ($5)</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <h3 className="font-bold text-yellow-800 mb-4">⏳ Wait On These</h3>
                <ul className="space-y-2 text-yellow-700">
                  <li><strong>Heat press</strong> — Iron works for learning HTV</li>
                  <li><strong>Extra mats</strong> — Stock mat works for basics</li>
                  <li><strong>EasyPress</strong> — Nice but not essential ($100+)</li>
                  <li><strong>Specialty blades</strong> — Only when you need them</li>
                  <li><strong>Cricut Access</strong> — Try free designs first</li>
                </ul>
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

          {/* Final Recommendation */}
          <section className="bg-gradient-to-r from-[#F5E6E6] to-purple-100 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Our Final Recommendation
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>
                <strong>For 80% of beginners:</strong> Get the <strong>Cricut Explore 3</strong> at ~$300. 
                It handles vinyl, paper, HTV, stickers, and most popular crafts. You won't outgrow it.
              </p>
              <p>
                <strong>If you sew or quilt:</strong> Spend the extra $100 for <strong>Maker 3</strong>. 
                The Rotary blade for unbonded fabric is worth it.
              </p>
              <p>
                <strong>Tight budget or limited space:</strong> Wait for sales. Explore 3 often drops 
                to $250 during holidays. Don't settle for Joy unless space is critical.
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
                <h3 className="font-bold text-gray-900">Maker vs Explore Deep Dive</h3>
                <p className="text-sm text-gray-600">Detailed comparison of both machines</p>
              </Link>
              <Link 
                href="/guides/is-cricut-access-worth-it"
                className="block bg-white rounded-xl shadow p-4 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-bold text-gray-900">Is Cricut Access Worth It?</h3>
                <p className="text-sm text-gray-600">Honest review of the subscription</p>
              </Link>
              <Link 
                href="/guides/cricut-blade-guide"
                className="block bg-white rounded-xl shadow p-4 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-bold text-gray-900">Complete Blade Guide</h3>
                <p className="text-sm text-gray-600">Which blade for every material</p>
              </Link>
              <Link 
                href="/guides/cricut-not-cutting-vinyl"
                className="block bg-white rounded-xl shadow p-4 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-bold text-gray-900">Cutting Not Working?</h3>
                <p className="text-sm text-gray-600">First troubleshooting steps</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Got Your Cricut and Need Help?
            </h2>
            <p className="text-gray-600 mb-6">
              Our troubleshooting wizard helps you solve problems fast.
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
