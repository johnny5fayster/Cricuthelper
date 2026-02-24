import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cricut Machine Comparison Guide 2026: Which Is Right for You?',
  description: 'Complete comparison of all Cricut machines: Joy, Explore, Maker, and Venture. Compare prices, cutting sizes, materials, and features. Find the perfect machine for your needs.',
  keywords: ['cricut machine comparison', 'which cricut should I buy', 'cricut maker vs explore', 'best cricut for beginners 2026', 'cricut joy vs explore', 'cricut venture specs'],
  openGraph: {
    title: 'Cricut Machine Comparison Guide 2026',
    description: 'Find the perfect Cricut machine for your crafting needs with our detailed specifications and recommendations.',
    type: 'article',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the difference between Cricut Joy and Explore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Cricut Joy is smaller and more affordable ($99-129) with a 4.25\" x 12\" cutting area, perfect for small projects and beginners. The Explore has a larger 11.5\" x 23.5\" cutting area, more material options, and advanced features like Print Then Cut."
      }
    },
    {
      "@type": "Question",
      "name": "Should I buy Cricut Maker or Explore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Choose Explore ($279-329) if you cut mostly paper, vinyl, and light materials. Choose Maker ($349-429) if you want to cut 300+ materials including thick materials like leather, basswood, and fabric with the rotary blade."
      }
    },
    {
      "@type": "Question",
      "name": "What can you cut with Cricut Joy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cricut Joy cuts paper, cardstock, vinyl, iron-on, Smart Materials, and lighter craft materials. It cannot cut fabric, thick materials, or deep-cut materials that require the Explore or Maker."
      }
    },
    {
      "@type": "Question",
      "name": "Is Cricut Venture worth the money?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Cricut Venture ($1,999+) is designed for small businesses and serious crafters who need a wide-format machine. It cuts up to 24\" wide and is worth it if you're selling products or making large projects regularly."
      }
    },
    {
      "@type": "Question",
      "name": "Which Cricut machine is best for beginners?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Cricut Joy Xtra or Explore Air 2 are best for beginners. The Joy Xtra is affordable and compact. The Explore Air 2 offers more features and materials at a slightly higher price point."
      }
    }
  ]
};

export default function CricutMachineComparison() {
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
              <li className="text-gray-900">Cricut Machine Comparison</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-gradient-to-r from-[#9CAF88] to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Buying Guide
              </span>
              <span className="text-gray-500 text-sm">Updated February 2026</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cricut Machine Comparison: Which Is Right for You?
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Cricut makes eight different machines, each designed for different crafters. 
              This comprehensive guide breaks down every model so you can choose the perfect one.
            </p>
          </header>

          {/* Quick Answer Box */}
          <div className="bg-gradient-to-r from-[#F5FAF3] via-purple-100 to-orange-100 rounded-xl p-6 mb-8 border-l-4 border-[#9CAF88]">
            <h2 className="font-bold text-lg text-gray-900 mb-3">🎯 Quick Answer</h2>
            <div className="space-y-2 text-sm text-gray-700">
              <p><strong>Just starting out?</strong> → Cricut Joy Xtra or Explore Air 2</p>
              <p><strong>Want to cut everything?</strong> → Cricut Maker 3 or Maker 4</p>
              <p><strong>Making large projects?</strong> → Cricut Explore 3 or Venture</p>
              <p><strong>Running a small business?</strong> → Cricut Venture or Venture 2</p>
              <p><strong>Limited space/budget?</strong> → Cricut Joy</p>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="font-bold text-lg mb-4">📋 In This Guide</h2>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li><a href="#joy" className="text-[#9CAF88] hover:underline">→ Cricut Joy (Entry Level)</a></li>
              <li><a href="#joy-xtra" className="text-[#9CAF88] hover:underline">→ Cricut Joy Xtra (Entry Level+)</a></li>
              <li><a href="#explore-air" className="text-[#9CAF88] hover:underline">→ Cricut Explore Air 2 (Beginner)</a></li>
              <li><a href="#explore-3" className="text-[#9CAF88] hover:underline">→ Cricut Explore 3 (Intermediate)</a></li>
              <li><a href="#maker" className="text-[#9CAF88] hover:underline">→ Cricut Maker (Advanced)</a></li>
              <li><a href="#maker-3" className="text-[#9CAF88] hover:underline">→ Cricut Maker 3 & 4 (Professional)</a></li>
              <li><a href="#venture" className="text-[#9CAF88] hover:underline">→ Cricut Venture (Business)</a></li>
              <li><a href="#comparison-table" className="text-[#9CAF88] hover:underline">→ Full Comparison Table</a></li>
              <li><a href="#which-machine" className="text-[#9CAF88] hover:underline">→ Which Machine Is Right for You?</a></li>
            </ul>
          </div>

          {/* Main Content */}
          <article className="prose prose-lg max-w-none">
            
            {/* Entry Level */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900">Entry Level: Cricut Joy</h2>
              
              <section id="joy" className="scroll-mt-20 mb-6">
                <div className="bg-white border-2 border-[#B8C9A9] rounded-xl p-6 mb-4">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-xl text-gray-900">Cricut Joy</h3>
                    <span className="text-orange-600 font-bold text-lg">$99-129</span>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600 font-bold mb-2">SPECIFICATIONS</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>🔪 Cutting Area: 4.25" × 12" (matted)</li>
                        <li>📏 Can cut matte vinyl up to 4.5' continuously</li>
                        <li>⚡ Cutting Speed: Standard</li>
                        <li>🔌 Bluetooth only (no USB)</li>
                        <li>🎯 Tools: Fine Point Blade only</li>
                        <li>📚 Materials: 50+ types</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-bold mb-2">BEST FOR</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>✅ First-time crafters</li>
                        <li>✅ Small projects (cards, labels)</li>
                        <li>✅ Limited space/budget</li>
                        <li>✅ Portability</li>
                        <li>✅ Casual hobbyists</li>
                        <li>✅ Gift-makers</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <p className="font-bold text-gray-900 mb-2">What It Can Cut:</p>
                    <p className="text-sm text-gray-700 mb-3">
                      Paper, cardstock, vinyl, iron-on, Smart Materials, light fabrics, vellum, 
                      foil, glitter paper, and more.
                    </p>
                    
                    <p className="font-bold text-gray-900 mb-2">What It Can't Cut:</p>
                    <p className="text-sm text-gray-700">
                      Thick materials (leather, wood), unbacked fabric, requires cutting mat for most materials.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="font-bold text-green-800 mb-2">✅ Pros</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Extremely affordable</li>
                      <li>• Compact (great for small spaces)</li>
                      <li>• Easy to learn</li>
                      <li>• Perfect second machine</li>
                      <li>• Bluetooth connectivity</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 rounded-lg p-4">
                    <p className="font-bold text-red-800 mb-2">❌ Cons</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Very small cutting area</li>
                      <li>• Limited tool compatibility</li>
                      <li>• Single tool holder only</li>
                      <li>• No USB option</li>
                      <li>• Fewer materials than Explore</li>
                    </ul>
                  </div>
                </div>
              </section>
            </section>

            {/* Entry Level+ */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900">Entry Level+: Cricut Joy Xtra</h2>
              
              <section id="joy-xtra" className="scroll-mt-20">
                <div className="bg-white border-2 border-[#B8C9A9] rounded-xl p-6 mb-4">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-xl text-gray-900">Cricut Joy Xtra</h3>
                    <span className="text-orange-600 font-bold text-lg">$179-199</span>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600 font-bold mb-2">SPECIFICATIONS</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>🔪 Cutting Area: Up to 8.5" × 11" and A4 paper</li>
                        <li>📏 Can cut vinyl/iron-on matte up to 4.5' continuously</li>
                        <li>⚡ Cutting Speed: Standard</li>
                        <li>🔌 Bluetooth only</li>
                        <li>🎯 Tools: Fine Point Blade, compatible Joy tools</li>
                        <li>📚 Materials: 50+ types</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-bold mb-2">BEST FOR</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>✅ Upgrading from Joy</li>
                        <li>✅ Small to medium projects</li>
                        <li>✅ Crafters with limited space</li>
                        <li>✅ Makers who travel</li>
                        <li>✅ Print Then Cut users</li>
                        <li>✅ Budget-conscious crafters</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <p className="font-bold text-gray-900 mb-2">What It Can Cut:</p>
                    <p className="text-sm text-gray-700 mb-3">
                      Everything Joy cuts, PLUS Print Then Cut on any color, foiling, larger paper sizes, 
                      standard sticker sheets, and more materials overall (50+ vs Joy's limited set).
                    </p>
                    
                    <p className="font-bold text-gray-900 mb-2">What It Can't Cut:</p>
                    <p className="text-sm text-gray-700">
                      Thick materials, unbacked fabric, deep cuts. Can't use scoring tool or deep cut blade.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="font-bold text-green-800 mb-2">✅ Pros</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Better value than Joy</li>
                      <li>• Larger cutting area</li>
                      <li>• Print Then Cut support</li>
                      <li>• Still compact and portable</li>
                      <li>• All Joy tools compatible</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 rounded-lg p-4">
                    <p className="font-bold text-red-800 mb-2">❌ Cons</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• No scoring blade</li>
                      <li>• No deep cut option</li>
                      <li>• Still only one tool slot</li>
                      <li>• Bluetooth only</li>
                      <li>• Limited vs Explore</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                  <p className="text-blue-800">
                    <strong>💡 Tip:</strong> The Joy Xtra bridges the gap perfectly between tiny and full-sized. 
                    If you want more than the Joy but don't need Maker capabilities, this is your sweet spot.
                  </p>
                </div>
              </section>
            </section>

            {/* Beginner/Standard */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900">Standard Level: Cricut Explore Family</h2>
              
              <section id="explore-air" className="scroll-mt-20 mb-6">
                <div className="bg-white border-2 border-[#B8C9A9] rounded-xl p-6 mb-4">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-xl text-gray-900">Cricut Explore Air 2</h3>
                    <span className="text-orange-600 font-bold text-lg">$249-299</span>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600 font-bold mb-2">SPECIFICATIONS</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>🔪 Cutting Area: 11.5" × 23.5" (with mat)</li>
                        <li>⚡ Cutting Speed: Standard (Fast Mode available)</li>
                        <li>🔌 Bluetooth + USB connectivity</li>
                        <li>🎯 Tools: Fine Point, Deep Cut, Scoring Stylus</li>
                        <li>📚 Materials: 100+ types</li>
                        <li>🖨️ Print Then Cut (white paper only)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-bold mb-2">BEST FOR</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>✅ Beginners (full-sized)</li>
                        <li>✅ DIY crafters</li>
                        <li>✅ Card makers</li>
                        <li>✅ Vinyl & iron-on projects</li>
                        <li>✅ Hobbyists with variety</li>
                        <li>✅ Budget-conscious</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <p className="font-bold text-gray-900 mb-2">What It Can Cut:</p>
                    <p className="text-sm text-gray-700 mb-3">
                      100+ materials: cardstock, vinyl, iron-on, paper, glitter paper, bonded fabric, 
                      thin wood veneer, leather, specialty materials, and more.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="font-bold text-green-800 mb-2">✅ Pros</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Great price point</li>
                      <li>• Generous cutting area</li>
                      <li>• Versatile tool options</li>
                      <li>• USB + Bluetooth</li>
                      <li>• Often on sale</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 rounded-lg p-4">
                    <p className="font-bold text-red-800 mb-2">❌ Cons</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Can't cut thick materials</li>
                      <li>• Limited fabric options</li>
                      <li>• Older machine (newer 3 available)</li>
                      <li>• Slower than Explore 3</li>
                      <li>• Only white paper Print Then Cut</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="explore-3" className="scroll-mt-20">
                <div className="bg-white border-2 border-[#B8C9A9] rounded-xl p-6 mb-4">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-xl text-gray-900">Cricut Explore 3</h3>
                    <span className="text-orange-600 font-bold text-lg">$279-329</span>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600 font-bold mb-2">SPECIFICATIONS</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>🔪 Cutting Area: 11.5" × 23.5" (with mat)</li>
                        <li>⚡ Cutting Speed: 2X faster with Smart Materials</li>
                        <li>🔌 Bluetooth + USB connectivity</li>
                        <li>🎯 Tools: Fine Point, Deep Cut, Scoring Stylus</li>
                        <li>📚 Materials: 100+ types + Smart Materials</li>
                        <li>🖨️ Print Then Cut (any color paper)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-bold mb-2">BEST FOR</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>✅ Intermediate crafters</li>
                        <li>✅ High-volume projects</li>
                        <li>✅ Small business makers</li>
                        <li>✅ Speed matters</li>
                        <li>✅ Smart Material users</li>
                        <li>✅ Vinyl cutters</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <p className="font-bold text-gray-900 mb-2">What It Can Cut:</p>
                    <p className="text-sm text-gray-700 mb-3">
                      Everything Explore Air 2 cuts, PLUS Smart Materials (vinyl, iron-on, paper) 
                      matless up to 12' continuously without a mat!
                    </p>
                    
                    <p className="font-bold text-gray-900 mb-2">Key Difference from Air 2:</p>
                    <p className="text-sm text-gray-700">
                      Smart Material matless cutting, 2X faster speed, colored paper Print Then Cut.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="font-bold text-green-800 mb-2">✅ Pros</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 2X faster speed</li>
                      <li>• Smart Material support</li>
                      <li>• Long continuous cuts</li>
                      <li>• Color Print Then Cut</li>
                      <li>• Worth upgrade from Air 2</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 rounded-lg p-4">
                    <p className="font-bold text-red-800 mb-2">❌ Cons</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Still can't cut thick materials</li>
                      <li>• Higher price than Air 2</li>
                      <li>• Smart Materials cost more</li>
                      <li>• Limited fabric options</li>
                      <li>• No thick wood/leather</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                  <p className="text-blue-800">
                    <strong>✨ Smart Materials Game Changer:</strong> Cut up to 12 feet of vinyl 
                    in one go without a mat. No prep, no alignment issues. This is what makes Explore 3 
                    perfect for small businesses.
                  </p>
                </div>
              </section>
            </section>

            {/* Advanced/Premium */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900">Advanced: Cricut Maker Family</h2>
              
              <section id="maker" className="scroll-mt-20 mb-6">
                <div className="bg-white border-2 border-[#B8C9A9] rounded-xl p-6 mb-4">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-xl text-gray-900">Cricut Maker (Original)</h3>
                    <span className="text-orange-600 font-bold text-lg">$349-399</span>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600 font-bold mb-2">SPECIFICATIONS</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>🔪 Cutting Area: 11.5" × 23.5" (with mat)</li>
                        <li>⚡ Cutting Speed: Standard</li>
                        <li>🔌 Bluetooth + USB connectivity</li>
                        <li>🎯 Tools: 6 tools included (Fine Point, Rotary, Scoring, etc.)</li>
                        <li>🔧 Compatible with 13+ Adaptive Tools</li>
                        <li>📚 Materials: 300+ types</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-bold mb-2">BEST FOR</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>✅ Serious crafters</li>
                        <li>✅ Fabric & sewing</li>
                        <li>✅ Wood working</li>
                        <li>✅ Mixed media projects</li>
                        <li>✅ Advanced users</li>
                        <li>✅ Customization enthusiasts</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <p className="font-bold text-gray-900 mb-2">What It Can Cut (300+ Materials):</p>
                    <p className="text-sm text-gray-700 mb-3">
                      Everything Explore cuts PLUS: leather, felt, fabric (with rotary blade), 
                      balsa wood (up to 2mm), chipboard, vellum, tissue paper, glitter cardstock, 
                      and specialty materials. The rotary blade cuts unbacked fabric — something 
                      Explore can't do.
                    </p>
                    
                    <p className="font-bold text-gray-900 mb-2">Adaptive Tool System:</p>
                    <p className="text-sm text-gray-700">
                      Knife Blade (thick materials), Engraving Tip, Debossing Tip, Foiling Tool, 
                      Scoring Wheel, Wavy Blade, and more.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="font-bold text-green-800 mb-2">✅ Pros</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 300+ materials</li>
                      <li>• Rotary blade = unbacked fabric</li>
                      <li>• Knife blade for thick cuts</li>
                      <li>• Expandable tool system</li>
                      <li>• Most versatile machine</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 rounded-lg p-4">
                    <p className="font-bold text-red-800 mb-2">❌ Cons</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Higher price</li>
                      <li>• Slower than Maker 3/4</li>
                      <li>• Learning curve steeper</li>
                      <li>• More tools = more cost</li>
                      <li>• Overkill for basic crafts</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="maker-3" className="scroll-mt-20">
                <div className="bg-white border-2 border-[#B8C9A9] rounded-xl p-6 mb-4">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-xl text-gray-900">Cricut Maker 3 & Maker 4</h3>
                    <span className="text-orange-600 font-bold text-lg">$379-449</span>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600 font-bold mb-2">SPECIFICATIONS</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>🔪 Cutting Area: 11.5" × 23.5" (with mat)</li>
                        <li>⚡ Speed: 2X faster with Smart Materials (Maker 4 even better)</li>
                        <li>🔌 Bluetooth + USB connectivity</li>
                        <li>🎯 13+ Adaptive Tools compatible</li>
                        <li>📚 Materials: 300+ types + Smart Materials</li>
                        <li>📏 Smart cuts up to 12' matless</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-bold mb-2">BEST FOR</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>✅ Most versatile users</li>
                        <li>✅ Small business owners</li>
                        <li>✅ Professional crafters</li>
                        <li>✅ Want everything possible</li>
                        <li>✅ Speed + versatility</li>
                        <li>✅ Premium investment</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <p className="font-bold text-gray-900 mb-2">What It Can Cut:</p>
                    <p className="text-sm text-gray-700 mb-3">
                      Everything original Maker cuts PLUS Smart Materials matless up to 12 feet! 
                      This is the Maker with future-proof upgrades.
                    </p>
                    
                    <p className="font-bold text-gray-900 mb-2">Maker 3 vs Maker 4:</p>
                    <p className="text-sm text-gray-700">
                      Maker 4 (2025 release) is faster and more efficient than Maker 3, but both 
                      cut the same materials. If budget allows, Maker 4 is the best home/small 
                      business machine available.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="font-bold text-green-800 mb-2">✅ Pros</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 300+ materials</li>
                      <li>• Smart Material support</li>
                      <li>• 2X faster (Maker 4: even more)</li>
                      <li>• 12' continuous cuts</li>
                      <li>• Best all-around machine</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 rounded-lg p-4">
                    <p className="font-bold text-red-800 mb-2">❌ Cons</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Most expensive (non-Venture)</li>
                      <li>• Large footprint</li>
                      <li>• Steep learning curve</li>
                      <li>• Tools are pricey</li>
                      <li>• Overkill for casual use</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                  <p className="text-blue-800">
                    <strong>👑 Best Overall Home Machine:</strong> The Maker 3 is the machine that 
                    serious crafters and small business owners choose. You can literally cut 300+ 
                    materials, and with Maker 4 you get incredible speed.
                  </p>
                </div>
              </section>
            </section>

            {/* Business */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900">Business Level: Cricut Venture</h2>
              
              <section id="venture" className="scroll-mt-20">
                <div className="bg-white border-2 border-orange-400 rounded-xl p-6 mb-4">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-xl text-gray-900">Cricut Venture / Venture 2</h3>
                    <span className="text-orange-600 font-bold text-lg">$1,999-2,499</span>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600 font-bold mb-2">SPECIFICATIONS</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>🔪 Cutting Width: 24" (wide format)</li>
                        <li>📏 Cutting Length: Up to 10' for some materials</li>
                        <li>⚡ Cutting Speed: Fast</li>
                        <li>🔌 USB + Bluetooth connectivity</li>
                        <li>🎯 Multiple tool compatibility</li>
                        <li>📚 Materials: 300+ types</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-bold mb-2">BEST FOR</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>✅ Professional businesses</li>
                        <li>✅ High-volume production</li>
                        <li>✅ Large format projects</li>
                        <li>✅ Wide vinyl applications</li>
                        <li>✅ Apparel customization</li>
                        <li>✅ Home business scaling</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <p className="font-bold text-gray-900 mb-2">What It Can Cut:</p>
                    <p className="text-sm text-gray-700 mb-3">
                      All Maker materials (300+), plus wide-format applications: 24" wide vinyl 
                      for wall decals, t-shirt designs, signage, and more. Can cut continuous 
                      designs up to 10 feet long.
                    </p>
                    
                    <p className="font-bold text-gray-900 mb-2">Why It's Different:</p>
                    <p className="text-sm text-gray-700">
                      The Venture/Venture 2 is a wide-format production machine. It's not for crafters 
                      — it's for people making products to sell. Venture 2 is the newer model with 
                      improved performance.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="font-bold text-green-800 mb-2">✅ Pros</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 24" cutting width</li>
                      <li>• Production speed</li>
                      <li>• Long continuous cuts</li>
                      <li>• Business-grade features</li>
                      <li>• ROI for businesses</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 rounded-lg p-4">
                    <p className="font-bold text-red-800 mb-2">❌ Cons</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Very expensive</li>
                      <li>• Requires dedicated space</li>
                      <li>• Not for casual use</li>
                      <li>• Special mats needed</li>
                      <li>• Overkill for hobbyists</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
                  <p className="text-yellow-800">
                    <strong>💼 Business Question:</strong> The Venture pays for itself if you're 
                    making 50+ vinyl decals per month or similar volume. Not for hobby use!
                  </p>
                </div>
              </section>
            </section>

            {/* Comparison Table */}
            <section id="comparison-table" className="scroll-mt-20 mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Full Specification Comparison Table</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-xs md:text-sm">
                  <thead>
                    <tr className="bg-gray-900 text-white">
                      <th className="px-2 py-3 text-left">Machine</th>
                      <th className="px-2 py-3 text-center">Price</th>
                      <th className="px-2 py-3 text-center">Cutting Width</th>
                      <th className="px-2 py-3 text-center">Materials</th>
                      <th className="px-2 py-3 text-center">Speed</th>
                      <th className="px-2 py-3 text-center">Tools</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b bg-white">
                      <td className="px-2 py-3 font-bold">Cricut Joy</td>
                      <td className="px-2 py-3 text-center">$99-129</td>
                      <td className="px-2 py-3 text-center">4.25"</td>
                      <td className="px-2 py-3 text-center">50+</td>
                      <td className="px-2 py-3 text-center">Standard</td>
                      <td className="px-2 py-3 text-center">1</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="px-2 py-3 font-bold">Joy Xtra</td>
                      <td className="px-2 py-3 text-center">$179-199</td>
                      <td className="px-2 py-3 text-center">8.5"</td>
                      <td className="px-2 py-3 text-center">50+</td>
                      <td className="px-2 py-3 text-center">Standard</td>
                      <td className="px-2 py-3 text-center">1</td>
                    </tr>
                    <tr className="border-b bg-white">
                      <td className="px-2 py-3 font-bold">Explore Air 2</td>
                      <td className="px-2 py-3 text-center">$249-299</td>
                      <td className="px-2 py-3 text-center">11.5"</td>
                      <td className="px-2 py-3 text-center">100+</td>
                      <td className="px-2 py-3 text-center">Standard</td>
                      <td className="px-2 py-3 text-center">3</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="px-2 py-3 font-bold">Explore 3</td>
                      <td className="px-2 py-3 text-center">$279-329</td>
                      <td className="px-2 py-3 text-center">11.5"</td>
                      <td className="px-2 py-3 text-center">100+</td>
                      <td className="px-2 py-3 text-center">2X Fast</td>
                      <td className="px-2 py-3 text-center">3</td>
                    </tr>
                    <tr className="border-b bg-white">
                      <td className="px-2 py-3 font-bold">Maker (Original)</td>
                      <td className="px-2 py-3 text-center">$349-399</td>
                      <td className="px-2 py-3 text-center">11.5"</td>
                      <td className="px-2 py-3 text-center">300+</td>
                      <td className="px-2 py-3 text-center">Standard</td>
                      <td className="px-2 py-3 text-center">13+</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="px-2 py-3 font-bold">Maker 3</td>
                      <td className="px-2 py-3 text-center">$379-429</td>
                      <td className="px-2 py-3 text-center">11.5"</td>
                      <td className="px-2 py-3 text-center">300+</td>
                      <td className="px-2 py-3 text-center">2X Fast</td>
                      <td className="px-2 py-3 text-center">13+</td>
                    </tr>
                    <tr className="border-b bg-white">
                      <td className="px-2 py-3 font-bold">Maker 4</td>
                      <td className="px-2 py-3 text-center">$399-449</td>
                      <td className="px-2 py-3 text-center">11.5"</td>
                      <td className="px-2 py-3 text-center">300+</td>
                      <td className="px-2 py-3 text-center">Fastest</td>
                      <td className="px-2 py-3 text-center">13+</td>
                    </tr>
                    <tr className="bg-orange-50">
                      <td className="px-2 py-3 font-bold">Venture 2</td>
                      <td className="px-2 py-3 text-center">$2,199+</td>
                      <td className="px-2 py-3 text-center">24"</td>
                      <td className="px-2 py-3 text-center">300+</td>
                      <td className="px-2 py-3 text-center">Fast</td>
                      <td className="px-2 py-3 text-center">Business</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Which Machine Section */}
            <section id="which-machine" className="scroll-mt-20 mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Which Cricut Machine Is Right for You?</h2>
              
              <div className="space-y-4 mb-6">
                <div className="bg-gradient-to-r from-[#F5FAF3] to-[#FFFBF0] rounded-xl p-6 border-l-4 border-[#9CAF88]">
                  <h3 className="font-bold text-lg text-gray-900 mb-3">🎯 Complete Beginner / Budget</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Choose: Cricut Joy Xtra or Explore Air 2</strong>
                  </p>
                  <p className="text-sm text-gray-600">
                    Joy Xtra if space/budget is tight. Explore Air 2 if you want more materials and features. 
                    Both are affordable and won't overwhelm you.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-[#F5FAF3] to-[#FFFBF0] rounded-xl p-6 border-l-4 border-[#9CAF88]">
                  <h3 className="font-bold text-lg text-gray-900 mb-3">🚀 Intermediate Crafter / Speed Matters</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Choose: Cricut Explore 3</strong>
                  </p>
                  <p className="text-sm text-gray-600">
                    You cut lots of vinyl/iron-on and need speed. The 2X faster speed and Smart Material 
                    support are game-changers. Great for T-shirt businesses too.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-[#F5FAF3] to-[#FFFBF0] rounded-xl p-6 border-l-4 border-[#9CAF88]">
                  <h3 className="font-bold text-lg text-gray-900 mb-3">💯 Serious Crafter / Want Everything</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Choose: Cricut Maker 3 or Maker 4</strong>
                  </p>
                  <p className="text-sm text-gray-600">
                    You want to cut 300+ materials including leather, fabric, wood, and specialty items. 
                    Maker 3 is proven; Maker 4 is faster. This is the investment machine.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-[#F5FAF3] to-[#FFFBF0] rounded-xl p-6 border-l-4 border-[#9CAF88]">
                  <h3 className="font-bold text-lg text-gray-900 mb-3">💼 Small Business / Professional</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Choose: Cricut Venture 2</strong>
                  </p>
                  <p className="text-sm text-gray-600">
                    You're making products to sell. Need 24" width, high volume, and production features. 
                    This pays for itself when you're doing 50+ items/month.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-[#F5FAF3] to-[#FFFBF0] rounded-xl p-6 border-l-4 border-[#9CAF88]">
                  <h3 className="font-bold text-lg text-gray-900 mb-3">👛 Limited Space / Portability</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Choose: Cricut Joy or Joy Xtra</strong>
                  </p>
                  <p className="text-sm text-gray-600">
                    You need something you can tuck away or take to classes. The Joy is mighty despite 
                    its small size.
                  </p>
                </div>
              </div>
            </section>

            {/* Pro Tips */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900">Pro Tips Before You Buy</h2>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-[#F5FAF3] rounded-lg p-4 border-l-4 border-[#9CAF88]">
                  <h3 className="font-bold text-gray-900">Check for Sales</h3>
                  <p className="text-gray-700 text-sm">
                    Cricut machines frequently go on sale at Michaels, Amazon, and Cricut's official 
                    site. You can often save $50-100.
                  </p>
                </div>

                <div className="bg-[#F5FAF3] rounded-lg p-4 border-l-4 border-[#9CAF88]">
                  <h3 className="font-bold text-gray-900">Consider Cricut Access</h3>
                  <p className="text-gray-700 text-sm">
                    Worth it if you cut regularly. You get 150,000+ designs, 500+ fonts, AND 10% 
                    discount on machines/materials.
                  </p>
                </div>

                <div className="bg-[#F5FAF3] rounded-lg p-4 border-l-4 border-[#9CAF88]">
                  <h3 className="font-bold text-gray-900">Start Small, Upgrade Later</h3>
                  <p className="text-gray-700 text-sm">
                    No harm starting with Joy Xtra or Explore Air 2. If you outgrow it, upgrade to 
                    Maker 3 later.
                  </p>
                </div>

                <div className="bg-[#F5FAF3] rounded-lg p-4 border-l-4 border-[#9CAF88]">
                  <h3 className="font-bold text-gray-900">Factor in Accessories</h3>
                  <p className="text-gray-700 text-sm">
                    Budget $50-150 for essential tools: mats, weeding set, EasyPress if doing heat 
                    transfer work.
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
              
              <div className="space-y-4 mt-6">
                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900">Can I use Joy tools on Explore?</h3>
                  <p className="text-gray-700 text-sm mt-2">
                    Joy tools are compatible with Joy Xtra. Explore has its own tools. They're different systems.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900">What's the difference between Maker and Explore?</h3>
                  <p className="text-gray-700 text-sm mt-2">
                    Maker cuts 300+ materials and has expandable tools. Explore cuts 100+ and is simpler. Maker is 
                    for advanced crafters; Explore for beginners/intermediate.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900">Is Maker 3 worth upgrading from Air 2?</h3>
                  <p className="text-gray-700 text-sm mt-2">
                    Yes, if you want to cut fabric, thick materials, or use specialty tools. No, if you're happy with 
                    vinyl and cardstock.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900">Can I return a Cricut if I don't like it?</h3>
                  <p className="text-gray-700 text-sm mt-2">
                    Yes! Most retailers offer 30-day returns. Cricut's official site has a return policy too. Always 
                    check before buying.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900">Do I need WiFi for my Cricut?</h3>
                  <p className="text-gray-700 text-sm mt-2">
                    You need internet to set up and use Design Space initially. After that, Bluetooth/USB connects 
                    to your machine (no WiFi needed for cutting).
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
                href="/guides/materials-cricut-can-cut"
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-[#9CAF88] hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900">What Materials Can Cricut Cut?</h3>
                <p className="text-gray-600 text-sm mt-1">Complete material reference for all machines.</p>
              </Link>
              <Link 
                href="/guides/cricut-design-space-tutorial"
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-[#9CAF88] hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900">Design Space Beginner Guide</h3>
                <p className="text-gray-600 text-sm mt-1">Master the software that controls your machine.</p>
              </Link>
              <Link 
                href="/guides/smart-materials-guide"
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-[#9CAF88] hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900">Smart Materials: Complete Guide</h3>
                <p className="text-gray-600 text-sm mt-1">Matless cutting with Smart Vinyl and Paper.</p>
              </Link>
              <Link 
                href="/guides/infusible-ink-guide"
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-[#9CAF88] hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900">Infusible Ink: Complete Guide</h3>
                <p className="text-gray-600 text-sm mt-1">Permanent sublimation transfers.</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-12 bg-gradient-to-r from-[#9CAF88] to-orange-500 rounded-xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">Ready to Choose Your Machine?</h2>
            <p className="text-white/80 mb-6">
              Start with our beginner's guide to Design Space, and you'll be cutting in minutes.
            </p>
            <Link
              href="/guides"
              className="inline-block bg-white text-[#9CAF88] font-bold py-3 px-8 rounded-full hover:bg-[#F5FAF3] transition-colors"
            >
              Explore All Guides
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}