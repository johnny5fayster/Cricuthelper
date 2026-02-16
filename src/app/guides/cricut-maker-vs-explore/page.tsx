import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cricut Maker vs Explore: Which Should You Buy? (2025 Guide)',
  description: 'Maker or Explore? We compare features, materials, price, and tell you exactly which Cricut machine is right for YOUR projects. No fluff, just honest advice.',
  keywords: ['Cricut Maker vs Explore', 'which Cricut to buy', 'Cricut comparison', 'Maker 3 vs Explore 3', 'best Cricut machine', 'Cricut buying guide'],
  openGraph: {
    title: 'Cricut Maker vs Explore: Which Should You Buy?',
    description: 'Maker or Explore? Honest comparison to help you choose the right machine.',
    type: 'article',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What's the main difference between Cricut Maker and Explore?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Maker has an adaptive tool system that can use the rotary blade (for fabric without backing) and knife blade (for thick materials like leather and wood). The Explore only uses the fine point and deep point blades, limiting it to thinner materials. If you want to cut fabric or thick materials, get the Maker."
      }
    },
    {
      "@type": "Question",
      "name": "Is Cricut Maker worth the extra money?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Only if you'll use its exclusive features. The Maker is worth it if you plan to cut fabric (without backing), leather, basswood, or other thick materials. If you'll mainly cut vinyl, iron-on, and cardstock, the Explore does the same job for less money."
      }
    },
    {
      "@type": "Question",
      "name": "Can Cricut Explore cut fabric?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Explore can cut fabric, but only if it's bonded to a stabilizer backing first. The Maker's rotary blade can cut unbonded fabric (no backing needed), which is faster and works with more fabric types including delicates like silk."
      }
    },
    {
      "@type": "Question",
      "name": "Should I get the Maker 3 or regular Maker?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Maker 3 cuts 2x faster with Smart Materials and can do matless cutting. If you do high-volume projects, the speed boost is nice. But the original Maker does everything the Maker 3 does (just slower) and is often cheaper. For most crafters, the original Maker is the better value."
      }
    },
    {
      "@type": "Question",
      "name": "What about Cricut Joy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Joy is a compact, portable machine for quick small projects. It has a smaller cutting area (4.5\" wide) and fewer features. Great as a second machine or for beginners with simple needs, but not a replacement for Maker or Explore if you want full capabilities."
      }
    }
  ]
};

export default function MakerVsExploreGuide() {
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
              <li className="text-gray-900">Maker vs Explore</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                Buying Guide
              </span>
              <span className="text-gray-500 text-sm">Updated February 2025</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cricut Maker vs Explore: Which Should You Buy?
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              The #1 question new Cricut buyers ask. Here's the honest answer — no affiliate bias, 
              just practical advice based on what you'll actually make.
            </p>
          </header>

          {/* Quick Answer Box */}
          <div className="bg-gradient-to-r from-purple-100 to-[#F5FAF3] rounded-xl p-6 mb-8 border-l-4 border-purple-500">
            <h2 className="font-bold text-lg text-gray-900 mb-4">🎯 The 30-Second Answer</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="bg-purple-500 text-white px-2 py-1 rounded text-xs font-bold">MAKER</span>
                <p className="text-gray-700">
                  Get the <strong>Maker</strong> if you want to cut <strong>fabric, leather, or wood</strong>. 
                  Its rotary and knife blades handle materials the Explore can't touch.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">EXPLORE</span>
                <p className="text-gray-700">
                  Get the <strong>Explore</strong> if you'll mainly cut <strong>vinyl, iron-on, and cardstock</strong>. 
                  It does these just as well as the Maker for less money.
                </p>
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="px-4 py-3 text-left">Feature</th>
                    <th className="px-4 py-3 text-center bg-blue-900">Explore 3</th>
                    <th className="px-4 py-3 text-center bg-purple-900">Maker 3</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Price (2025)</td>
                    <td className="px-4 py-3 text-center text-blue-700 font-bold">~$300</td>
                    <td className="px-4 py-3 text-center text-purple-700 font-bold">~$400</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="px-4 py-3 font-medium">Vinyl & Iron-On</td>
                    <td className="px-4 py-3 text-center text-green-600">✅ Yes</td>
                    <td className="px-4 py-3 text-center text-green-600">✅ Yes</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Cardstock & Paper</td>
                    <td className="px-4 py-3 text-center text-green-600">✅ Yes</td>
                    <td className="px-4 py-3 text-center text-green-600">✅ Yes</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="px-4 py-3 font-medium">Bonded Fabric</td>
                    <td className="px-4 py-3 text-center text-green-600">✅ Yes</td>
                    <td className="px-4 py-3 text-center text-green-600">✅ Yes</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Unbonded Fabric (Rotary Blade)</td>
                    <td className="px-4 py-3 text-center text-red-500">❌ No</td>
                    <td className="px-4 py-3 text-center text-green-600">✅ Yes</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="px-4 py-3 font-medium">Leather & Thick Materials (Knife Blade)</td>
                    <td className="px-4 py-3 text-center text-red-500">❌ No</td>
                    <td className="px-4 py-3 text-center text-green-600">✅ Yes</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Basswood / Balsa Wood</td>
                    <td className="px-4 py-3 text-center text-red-500">❌ No</td>
                    <td className="px-4 py-3 text-center text-green-600">✅ Yes</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="px-4 py-3 font-medium">Smart Materials (Matless)</td>
                    <td className="px-4 py-3 text-center text-green-600">✅ Yes</td>
                    <td className="px-4 py-3 text-center text-green-600">✅ Yes</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Max Cut Width</td>
                    <td className="px-4 py-3 text-center">11.5"</td>
                    <td className="px-4 py-3 text-center">11.5"</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="px-4 py-3 font-medium">Cut Force</td>
                    <td className="px-4 py-3 text-center">~400g</td>
                    <td className="px-4 py-3 text-center">4kg (10x more!)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Scoring Wheel</td>
                    <td className="px-4 py-3 text-center text-red-500">❌ No</td>
                    <td className="px-4 py-3 text-center text-green-600">✅ Yes</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Engraving/Debossing Tools</td>
                    <td className="px-4 py-3 text-center text-red-500">❌ No</td>
                    <td className="px-4 py-3 text-center text-green-600">✅ Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Main Content */}
          <article className="prose prose-lg max-w-none">
            
            {/* Key Difference Section */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900">The ONE Key Difference</h2>
              <p>
                Forget the marketing fluff. Here's what actually matters:
              </p>
              <p>
                The <strong>Maker has the Adaptive Tool System</strong>. This means it can use 
                special tools that the Explore physically cannot accept:
              </p>
              <ul className="list-disc list-inside space-y-2 my-4">
                <li><strong>Rotary Blade:</strong> Cuts fabric WITHOUT backing (cotton, denim, felt, silk)</li>
                <li><strong>Knife Blade:</strong> Cuts thick materials (leather, basswood, chipboard, matboard)</li>
                <li><strong>Scoring Wheel:</strong> Creates crisp fold lines for cards and boxes</li>
                <li><strong>Engraving Tip:</strong> Engraves metal, leather, acrylic</li>
                <li><strong>Debossing Tip:</strong> Creates pressed designs in leather/paper</li>
              </ul>
              <p>
                The Explore uses standard blades (fine point, deep point) which handle vinyl, iron-on, 
                and cardstock beautifully — but can't do the specialty materials above.
              </p>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 my-6">
                <p className="text-purple-800">
                  <strong>💡 The simple test:</strong> Will you cut fabric without backing, leather, 
                  or wood? If yes → Maker. If no (or you're not sure) → Explore.
                </p>
              </div>
            </section>

            {/* Who Should Get Maker */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900">Get the Maker If...</h2>
              
              <div className="space-y-4 my-6">
                <div className="bg-white border-l-4 border-purple-500 pl-4 py-3">
                  <h3 className="font-bold text-gray-900">You want to sew with your Cricut</h3>
                  <p className="text-gray-600">
                    The rotary blade cuts fabric patterns with seam allowances. No stabilizer needed. 
                    Cut pattern pieces from cotton, denim, fleece, felt — even delicates like silk.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-purple-500 pl-4 py-3">
                  <h3 className="font-bold text-gray-900">Leather crafting interests you</h3>
                  <p className="text-gray-600">
                    The knife blade cuts genuine leather up to 2.4mm thick. Make keychains, earrings, 
                    wallets, bookmarks. Great for Etsy sellers.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-purple-500 pl-4 py-3">
                  <h3 className="font-bold text-gray-900">You want to work with wood</h3>
                  <p className="text-gray-600">
                    Balsa wood and basswood up to 2.4mm. Make ornaments, cake toppers, puzzle pieces, 
                    3D models. Nothing the Explore can touch.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-purple-500 pl-4 py-3">
                  <h3 className="font-bold text-gray-900">You make intricate cards and boxes</h3>
                  <p className="text-gray-600">
                    The scoring wheel creates sharper fold lines than the scoring stylus. If you're 
                    serious about card making or 3D paper projects, it's a nice upgrade.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-purple-500 pl-4 py-3">
                  <h3 className="font-bold text-gray-900">You want maximum flexibility</h3>
                  <p className="text-gray-600">
                    If you're not sure what you'll make in the future, the Maker gives you options. 
                    You may never use the knife blade — but it's there if you want it.
                  </p>
                </div>
              </div>
            </section>

            {/* Who Should Get Explore */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900">Get the Explore If...</h2>
              
              <div className="space-y-4 my-6">
                <div className="bg-white border-l-4 border-blue-500 pl-4 py-3">
                  <h3 className="font-bold text-gray-900">Vinyl is your main thing</h3>
                  <p className="text-gray-600">
                    Decals, car stickers, wall quotes, tumblers — the Explore cuts vinyl just as 
                    well as the Maker. No difference in quality.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-blue-500 pl-4 py-3">
                  <h3 className="font-bold text-gray-900">You make t-shirts and apparel</h3>
                  <p className="text-gray-600">
                    Iron-on/HTV cuts identically on both machines. The Explore is the smart choice 
                    if shirts are your focus.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-blue-500 pl-4 py-3">
                  <h3 className="font-bold text-gray-900">Budget matters</h3>
                  <p className="text-gray-600">
                    The $100+ difference can buy a lot of materials. If you're not sure you'll use 
                    Maker-only features, save the money.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-blue-500 pl-4 py-3">
                  <h3 className="font-bold text-gray-900">You're a beginner</h3>
                  <p className="text-gray-600">
                    Start with the Explore. If you outgrow it (unlikely for most crafters), upgrade 
                    later. Most people never need the Maker's specialty tools.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-blue-500 pl-4 py-3">
                  <h3 className="font-bold text-gray-900">Paper and cardstock are your jam</h3>
                  <p className="text-gray-600">
                    Cards, scrapbooking, party decorations — the Explore handles all paper weights 
                    that matter. The Maker's extra power is overkill here.
                  </p>
                </div>
              </div>
            </section>

            {/* Version Comparison */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900">What About the "3" Versions?</h2>
              <p>
                Cricut has regular and "3" versions of both machines. Here's what the 3 adds:
              </p>

              <div className="bg-gray-50 rounded-lg p-6 my-6">
                <h3 className="font-bold text-gray-900 mb-3">Explore 3 / Maker 3 vs Regular:</h3>
                <ul className="space-y-2">
                  <li><strong>✅ 2x faster cutting</strong> with Smart Materials</li>
                  <li><strong>✅ Matless cutting</strong> with Smart Materials (up to 12 feet long!)</li>
                  <li><strong>❌ Same cut quality</strong> — not better, just faster</li>
                  <li><strong>❌ Same materials</strong> — no new capabilities</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 my-4">
                <p className="text-yellow-800">
                  <strong>💡 Our take:</strong> The "3" versions are nice but not essential. If you 
                  find a regular Maker or Explore on sale, it's a great value. The speed boost only 
                  matters for high-volume work.
                </p>
              </div>
            </section>

            {/* What About Joy */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900">What About Cricut Joy?</h2>
              <p>
                The Joy is different — it's a compact machine for quick, small projects:
              </p>
              <ul className="list-disc list-inside space-y-2 my-4">
                <li><strong>Smaller:</strong> 4.5" wide cuts (vs 11.5" on Maker/Explore)</li>
                <li><strong>Portable:</strong> Great for taking to classes or crop nights</li>
                <li><strong>Limited materials:</strong> Vinyl, iron-on, cardstock — no fabric or thick materials</li>
                <li><strong>No Print Then Cut:</strong> Can't do printed designs (regular Joy)</li>
              </ul>
              <p>
                The Joy is great as a <strong>second machine</strong> for quick projects, or for 
                beginners with simple needs. But it's not a replacement for Maker or Explore if 
                you want full capabilities.
              </p>
            </section>

            {/* Verdict */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900">Our Recommendation</h2>
              
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-blue-100 rounded-xl p-6 border-2 border-blue-300">
                  <h3 className="font-bold text-xl text-blue-800 mb-3">🏆 Best for Most People</h3>
                  <p className="text-2xl font-bold text-blue-900 mb-2">Cricut Explore 3</p>
                  <p className="text-blue-700">
                    Handles 90% of what most crafters do (vinyl, iron-on, cardstock) at a lower 
                    price. Start here unless you KNOW you need fabric or leather cutting.
                  </p>
                </div>

                <div className="bg-purple-100 rounded-xl p-6 border-2 border-purple-300">
                  <h3 className="font-bold text-xl text-purple-800 mb-3">🎨 Best for Makers</h3>
                  <p className="text-2xl font-bold text-purple-900 mb-2">Cricut Maker 3</p>
                  <p className="text-purple-700">
                    For sewists, leather crafters, and those who want maximum material flexibility. 
                    The rotary and knife blades unlock projects Explore can't touch.
                  </p>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4 my-4">
                <p className="text-green-800">
                  <strong>💰 Budget tip:</strong> Watch for sales! Black Friday, Prime Day, and 
                  Cricut's own sales often drop prices significantly. A Maker at Explore prices 
                  is a no-brainer.
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
              
              <div className="space-y-6 mt-4">
                <div>
                  <h3 className="font-bold text-gray-900">Can I upgrade from Explore to Maker later?</h3>
                  <p className="text-gray-600">
                    No upgrade path — you'd buy a new machine. But many crafters happily use their 
                    Explore for years without needing to upgrade.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900">Do they use the same mats and blades?</h3>
                  <p className="text-gray-600">
                    Mostly yes. Standard mats and fine/deep point blades work on both. Only the 
                    Maker-exclusive tools (rotary, knife, etc.) are different.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900">Can Explore cut fabric at all?</h3>
                  <p className="text-gray-600">
                    Yes, but only bonded fabric (with stabilizer backing). The Maker's rotary blade 
                    cuts unbonded fabric — no backing needed.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900">Is Cricut Maker overkill for beginners?</h3>
                  <p className="text-gray-600">
                    Possibly. Many beginners never use the specialty blades. Start with Explore 
                    unless you already know you want fabric/leather capabilities.
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
                href="/guides/is-cricut-access-worth-it"
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-[#9CAF88] hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900">Is Cricut Access Worth It?</h3>
                <p className="text-gray-600 text-sm mt-1">Decide if you need the subscription too.</p>
              </Link>
              <Link 
                href="/guides/cricut-not-cutting-vinyl"
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-[#9CAF88] hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900">Vinyl Cutting Problems</h3>
                <p className="text-gray-600 text-sm mt-1">Fix common issues on any machine.</p>
              </Link>
              <Link 
                href="/materials"
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-[#9CAF88] hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900">Material Settings Database</h3>
                <p className="text-gray-600 text-sm mt-1">Settings for both Maker and Explore.</p>
              </Link>
              <Link 
                href="/troubleshoot"
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-[#9CAF88] hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900">Troubleshooting Wizard</h3>
                <p className="text-gray-600 text-sm mt-1">Diagnose any Cricut issue.</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-12 bg-gradient-to-r from-purple-500 to-[#6B7F5E] rounded-xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">Ready to Get Started?</h2>
            <p className="text-purple-100 mb-6">
              Whichever machine you choose, our guides and troubleshooting tools will help you 
              get the most out of it.
            </p>
            <Link
              href="/troubleshoot"
              className="inline-block bg-white text-purple-600 font-bold py-3 px-8 rounded-full hover:bg-purple-50 transition-colors"
            >
              Explore Our Tools
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
