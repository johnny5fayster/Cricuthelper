import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cricut Mat Not Sticky? How to Clean & Restick Like New',
  description: 'Your Cricut mat lost its grip? Learn 4 cleaning methods plus 3 ways to restick your mat. Save money and extend mat life with these proven techniques.',
  keywords: ['Cricut mat not sticky', 'clean Cricut mat', 'restick Cricut mat', 'Cricut mat care', 'mat cleaning', 'make mat sticky again', 'Cricut mat maintenance'],
  openGraph: {
    title: 'Cricut Mat Not Sticky? How to Clean & Restick Like New',
    description: 'Your Cricut mat lost its grip? Learn 4 cleaning methods plus 3 ways to restick your mat.',
    type: 'article',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can you make a Cricut mat sticky again?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Most mats can be restored to like-new stickiness. First, clean the mat with baby wipes or dish soap and water. If still not sticky enough, apply repositionable adhesive spray like Krylon Easy-Tack or use a Zig glue pen to add a fresh adhesive layer."
      }
    },
    {
      "@type": "Question",
      "name": "How do you clean a Cricut mat?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gently wash with lukewarm water and a drop of dish soap. Use a plastic scraper or old gift card to remove debris. Rinse well and let air dry completely (don't use a towel). For tough residue, spray glass cleaner and use an old toothbrush in circular motions."
      }
    },
    {
      "@type": "Question",
      "name": "How long should a Cricut mat last?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "With proper care, a Cricut mat can last 25-40 uses or more. Mats used for paper and cardstock wear faster than those used for vinyl. Cleaning regularly and using the correct mat for each material extends mat life significantly."
      }
    },
    {
      "@type": "Question",
      "name": "Can you use Windex to clean a Cricut mat?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Windex or any ammonia-free glass cleaner works well for cleaning Cricut mats. Spray it on, let it sit for a minute, then use an old toothbrush to gently scrub in circular motions. Rinse with water and air dry."
      }
    },
    {
      "@type": "Question",
      "name": "What adhesive can I use to restick a Cricut mat?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Krylon Easy-Tack is the most popular choice — it's repositionable and won't damage materials. Other options include Spray n Bond (for fabric mats), Zig 2-Way Glue Pen for small areas, or specialized mat restick spray from craft stores."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Clean and Restick a Cricut Mat",
  "description": "Step-by-step guide to clean your Cricut mat and restore its stickiness.",
  "supply": [
    {"@type": "HowToSupply", "name": "Dish soap"},
    {"@type": "HowToSupply", "name": "Plastic scraper"},
    {"@type": "HowToSupply", "name": "Soft brush or old toothbrush"},
    {"@type": "HowToSupply", "name": "Krylon Easy-Tack (optional for resticking)"}
  ],
  "step": [
    {
      "@type": "HowToStep",
      "name": "Remove Debris",
      "text": "Use a plastic scraper or old gift card to gently remove any paper bits, vinyl backing, or fibers from the mat surface."
    },
    {
      "@type": "HowToStep",
      "name": "Wash the Mat",
      "text": "Run lukewarm water over the mat. Add a drop of dish soap and gently scrub with a soft brush in circular motions."
    },
    {
      "@type": "HowToStep",
      "name": "Rinse Thoroughly",
      "text": "Rinse all soap residue from the mat. Any leftover soap will reduce stickiness."
    },
    {
      "@type": "HowToStep",
      "name": "Air Dry",
      "text": "Let the mat air dry completely. Do not use paper towels or cloth as they leave fibers. Stickiness returns as the mat dries."
    },
    {
      "@type": "HowToStep",
      "name": "Restick If Needed",
      "text": "If still not sticky enough, apply a light coat of Krylon Easy-Tack spray from 12 inches away. Let dry before use."
    }
  ]
};

export default function MatNotStickyGuide() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="text-sm mb-6">
            <ol className="flex items-center space-x-2 text-gray-500">
              <li><Link href="/" className="hover:text-pink-600">Home</Link></li>
              <li>/</li>
              <li><Link href="/guides" className="hover:text-pink-600">Guides</Link></li>
              <li>/</li>
              <li className="text-gray-900">Mat Not Sticky</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                Mat Care
              </span>
              <span className="text-gray-500 text-sm">Updated February 2025</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cricut Mat Not Sticky? How to Clean & Restick Like New
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Materials sliding around or not sticking at all? Don't throw that mat away yet — 
              most mats can be restored to like-new condition with a simple cleaning. Here's exactly how.
            </p>
          </header>

          {/* Quick Answer Box */}
          <div className="bg-gradient-to-r from-green-100 to-teal-100 rounded-xl p-6 mb-8 border-l-4 border-green-500">
            <h2 className="font-bold text-lg text-gray-900 mb-3">💰 Before You Buy a New Mat...</h2>
            <p className="text-gray-700 mb-3">
              Clean it first! 90% of "dead" mats just need a wash. Most mats can be cleaned 10+ times 
              before they truly need replacing.
            </p>
            <p className="text-gray-600 text-sm">
              <strong>Quick clean:</strong> Rinse with warm water + dish soap → scrub gently → air dry. 
              Stickiness usually comes right back.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="font-bold text-lg mb-4">📋 Jump To...</h2>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#why-sticky" className="text-pink-600 hover:underline">→ Why mats lose stickiness</a></li>
              <li><a href="#daily-care" className="text-pink-600 hover:underline">→ Daily care tips (prevent the problem)</a></li>
              <li><a href="#cleaning-methods" className="text-pink-600 hover:underline">→ 4 cleaning methods ranked</a></li>
              <li><a href="#resticking" className="text-pink-600 hover:underline">→ How to restick a mat</a></li>
              <li><a href="#mat-types" className="text-pink-600 hover:underline">→ Care by mat type (green, blue, purple, pink)</a></li>
            </ul>
          </div>

          {/* Main Content */}
          <article className="prose prose-lg max-w-none">
            
            {/* Why Mats Lose Stickiness */}
            <section id="why-sticky" className="mb-10 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900">Why Your Mat Lost Its Stickiness</h2>
              <p>
                Understanding the problem helps you fix it. Mats lose grip because of:
              </p>
              <ul className="list-disc list-inside space-y-2 my-4">
                <li><strong>Debris buildup</strong> — Paper fibers, vinyl backing, dust, and lint cover the adhesive</li>
                <li><strong>Oils from your hands</strong> — Touching the sticky surface transfers skin oils that repel materials</li>
                <li><strong>Using the wrong mat</strong> — Heavy materials on light-grip mats wear them out faster</li>
                <li><strong>Leaving materials on overnight</strong> — Extended contact transfers adhesive to your material</li>
                <li><strong>Storing without the cover</strong> — Dust and pet hair stick to exposed mats</li>
              </ul>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-4">
                <p className="text-blue-800">
                  <strong>💡 Good news:</strong> Most of these issues are fixable with a simple wash. 
                  The adhesive is still there — it's just covered up.
                </p>
              </div>
            </section>

            {/* Daily Care */}
            <section id="daily-care" className="mb-10 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900">Daily Care Tips (Prevention)</h2>
              <p>
                A little maintenance after each use keeps mats sticky longer:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">✅ Do This</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Use the plastic scraper after every cut</li>
                    <li>• Roll a lint roller across the mat surface</li>
                    <li>• Store with the clear cover on</li>
                    <li>• Wash hands before handling</li>
                    <li>• Remove materials promptly after cutting</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">❌ Avoid This</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Touching the sticky surface directly</li>
                    <li>• Leaving material overnight</li>
                    <li>• Using paper towels to clean (leaves fibers)</li>
                    <li>• Storing mats near pet areas</li>
                    <li>• Using old, gunky mats (clean them!)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Cleaning Methods */}
            <section id="cleaning-methods" className="mb-10 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900">4 Cleaning Methods (Ranked)</h2>
              <p>
                Start with the gentlest method and work up if needed. Most mats only need Method 1.
              </p>

              {/* Method 1 */}
              <div className="bg-white border-2 border-green-200 rounded-xl p-6 my-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">Method 1</span>
                  <span className="text-green-700 font-medium">Gentle — Try This First</span>
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">Dish Soap & Water</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Run lukewarm water over the mat (not hot — heat damages adhesive)</li>
                  <li>Add ONE small drop of dish soap (Dawn works great)</li>
                  <li>Use a soft brush or your fingertips to gently scrub in circles</li>
                  <li>Rinse thoroughly until no soap bubbles remain</li>
                  <li>Shake off excess water</li>
                  <li>Let air dry completely — <strong>this is crucial!</strong></li>
                </ol>
                <p className="text-gray-600 mt-3 text-sm">
                  ⏱️ Drying takes 15-30 minutes. The mat will look cloudy when wet but sticky when dry.
                </p>
              </div>

              {/* Method 2 */}
              <div className="bg-white border-2 border-blue-200 rounded-xl p-6 my-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">Method 2</span>
                  <span className="text-blue-700 font-medium">Moderate Buildup</span>
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">Glass Cleaner Method</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Lay mat flat on a protected surface</li>
                  <li>Spray Windex or ammonia-free glass cleaner evenly</li>
                  <li>Let sit for 1-2 minutes to loosen debris</li>
                  <li>Scrub with an old toothbrush in circular motions</li>
                  <li>Wipe with damp cloth, then rinse under water</li>
                  <li>Air dry completely</li>
                </ol>
                <p className="text-gray-600 mt-3 text-sm">
                  💡 The toothbrush gets into the texture better than fingers.
                </p>
              </div>

              {/* Method 3 */}
              <div className="bg-white border-2 border-yellow-200 rounded-xl p-6 my-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold">Method 3</span>
                  <span className="text-yellow-700 font-medium">Stubborn Residue</span>
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">LA's Totally Awesome / Goo Gone</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Apply adhesive remover to problem areas only</li>
                  <li>Let sit 2-3 minutes (don't soak the whole mat)</li>
                  <li>Scrub with plastic scraper or toothbrush</li>
                  <li>Wash entire mat with dish soap and water</li>
                  <li>Rinse VERY thoroughly — residue will prevent sticking</li>
                  <li>Air dry</li>
                </ol>
                <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-3 mt-3">
                  <p className="text-yellow-800 text-sm">
                    ⚠️ Use sparingly — these products can strip adhesive if overused.
                  </p>
                </div>
              </div>

              {/* Method 4 */}
              <div className="bg-white border-2 border-purple-200 rounded-xl p-6 my-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">Method 4</span>
                  <span className="text-purple-700 font-medium">Quick Refresh</span>
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">Baby Wipes</h3>
                <p className="text-gray-700 mb-3">
                  For light cleaning between deep washes:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Use an unscented, alcohol-free baby wipe</li>
                  <li>Wipe across the mat surface gently</li>
                  <li>Let air dry for 5-10 minutes</li>
                </ol>
                <p className="text-gray-600 mt-3 text-sm">
                  💡 Great for between projects when you notice minor stickiness loss.
                </p>
              </div>
            </section>

            {/* Resticking Section */}
            <section id="resticking" className="mb-10 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900">How to Restick Your Mat</h2>
              <p>
                If cleaning didn't restore enough stickiness, you can add new adhesive. Here are the best options:
              </p>

              {/* Krylon Easy-Tack */}
              <div className="bg-gray-50 rounded-lg p-6 my-4">
                <h3 className="font-bold text-gray-900 mb-3">🥇 Best Option: Krylon Easy-Tack Spray</h3>
                <p className="text-gray-700 mb-3">
                  This repositionable adhesive is the gold standard for mat resticking. About $8-10 at craft stores.
                </p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Clean mat thoroughly first (adhesive won't stick to debris)</li>
                  <li>Let mat dry completely</li>
                  <li>Work outdoors or in ventilated area — protect surroundings with newspaper</li>
                  <li>Hold can 10-12 inches away from mat</li>
                  <li>Spray in light, even coats — <strong>less is more!</strong></li>
                  <li>Let dry 10-15 minutes until tacky, not wet</li>
                  <li>Test with scrap material before cutting</li>
                </ol>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 mt-3">
                  <p className="text-green-800 text-sm">
                    ✅ One can resticks 15-20+ mats. Much cheaper than buying new mats!
                  </p>
                </div>
              </div>

              {/* Zig Glue Pen */}
              <div className="bg-gray-50 rounded-lg p-6 my-4">
                <h3 className="font-bold text-gray-900 mb-3">🥈 For Small Areas: Zig 2-Way Glue Pen</h3>
                <p className="text-gray-700 mb-3">
                  Perfect for resticking specific worn spots without redoing the whole mat.
                </p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Apply glue directly to worn areas</li>
                  <li>Spread with finger (wear gloves)</li>
                  <li>Let dry until clear and tacky (blue turns clear when ready)</li>
                </ol>
              </div>

              {/* Spray n Bond */}
              <div className="bg-gray-50 rounded-lg p-6 my-4">
                <h3 className="font-bold text-gray-900 mb-3">🥉 For Fabric Mats: Spray n Bond</h3>
                <p className="text-gray-700">
                  This works better than Easy-Tack on pink fabric mats. Apply the same way as Krylon.
                </p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 my-4">
                <p className="text-yellow-800">
                  <strong>⚠️ What NOT to use:</strong> Regular craft glue, rubber cement, or permanent spray adhesive. 
                  These will ruin your mat and damage materials.
                </p>
              </div>
            </section>

            {/* Mat Types Section */}
            <section id="mat-types" className="mb-10 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900">Care by Mat Type</h2>
              <p>
                Each mat color has different stickiness levels and needs different care:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                  <h3 className="font-bold text-gray-900">🟢 Green (StandardGrip)</h3>
                  <p className="text-gray-700 text-sm">
                    <strong>Best for:</strong> Vinyl, cardstock, patterned paper<br/>
                    <strong>Care:</strong> Most forgiving — can handle all cleaning methods<br/>
                    <strong>Tip:</strong> Clean after every 3-5 uses with vinyl, after every use with paper
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                  <h3 className="font-bold text-gray-900">🔵 Blue (LightGrip)</h3>
                  <p className="text-gray-700 text-sm">
                    <strong>Best for:</strong> Copy paper, thin cardstock, vellum<br/>
                    <strong>Care:</strong> Most delicate — stick to dish soap method only<br/>
                    <strong>Tip:</strong> These lose stickiness fastest with paper. Clean frequently.
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                  <h3 className="font-bold text-gray-900">🟣 Purple (StrongGrip)</h3>
                  <p className="text-gray-700 text-sm">
                    <strong>Best for:</strong> Thick cardstock, chipboard, leather, basswood<br/>
                    <strong>Care:</strong> Very durable — can handle aggressive cleaning<br/>
                    <strong>Tip:</strong> Often TOO sticky for delicate materials when new
                  </p>
                </div>

                <div className="bg-pink-50 rounded-lg p-4 border-l-4 border-pink-500">
                  <h3 className="font-bold text-gray-900">🩷 Pink (FabricGrip)</h3>
                  <p className="text-gray-700 text-sm">
                    <strong>Best for:</strong> Fabric, felt, bonded fabric<br/>
                    <strong>Care:</strong> DON'T use water! Use lint roller only, or Spray n Bond to restick<br/>
                    <strong>Tip:</strong> Fabric fibers are the enemy — lint roll after EVERY cut
                  </p>
                </div>
              </div>
            </section>

            {/* When to Replace */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900">When to Actually Replace Your Mat</h2>
              <p>
                Even with great care, mats don't last forever. It's time for a new one when:
              </p>
              <ul className="list-disc list-inside space-y-2 my-4">
                <li><strong>Deep grooves or cuts</strong> — The blade has carved channels that affect cutting quality</li>
                <li><strong>Warping</strong> — Mat won't lay flat anymore</li>
                <li><strong>Cleaned 10+ times and resticked twice</strong> — Diminishing returns at this point</li>
                <li><strong>Adhesive is completely gone</strong> — Some areas just won't hold anything</li>
              </ul>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 my-4">
                <p className="text-purple-800">
                  <strong>💡 Pro tip:</strong> Don't throw away worn mats completely. Keep old mats for 
                  testing cuts or as sacrificial surfaces for gluing.
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
              
              <div className="space-y-6 mt-4">
                <div>
                  <h3 className="font-bold text-gray-900">Can you make a Cricut mat sticky again?</h3>
                  <p className="text-gray-600">
                    Absolutely! Clean the mat with dish soap and water, air dry completely, and most mats 
                    regain their stickiness. For truly worn mats, apply Krylon Easy-Tack repositionable spray adhesive.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900">How long should a Cricut mat last?</h3>
                  <p className="text-gray-600">
                    With proper care (cleaning, covering, using the right mat for each material), a mat can 
                    last 25-40+ uses. Paper and cardstock wear mats faster than vinyl.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900">Can I put my Cricut mat in the dishwasher?</h3>
                  <p className="text-gray-600">
                    No! The heat will destroy the adhesive and may warp the mat. Always hand wash with 
                    lukewarm water only.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900">Why is my NEW mat too sticky?</h3>
                  <p className="text-gray-600">
                    New mats (especially purple StrongGrip) are often too sticky. Press a clean cotton 
                    t-shirt onto the mat a few times to reduce the grip before cutting delicate materials.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900">Can I use rubbing alcohol to clean my mat?</h3>
                  <p className="text-gray-600">
                    Not recommended — alcohol can break down the adhesive over time. Stick to dish soap, 
                    glass cleaner, or baby wipes for safest results.
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
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-pink-300 hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900">Cricut Not Cutting Vinyl Properly</h3>
                <p className="text-gray-600 text-sm mt-1">Blade, pressure, and material settings solutions.</p>
              </Link>
              <Link 
                href="/guides/htv-peeling-after-washing"
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-pink-300 hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900">HTV Peeling After Washing</h3>
                <p className="text-gray-600 text-sm mt-1">Why iron-on won't stay and how to fix it.</p>
              </Link>
              <Link 
                href="/materials"
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-pink-300 hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900">Material Settings Database</h3>
                <p className="text-gray-600 text-sm mt-1">Find the right settings for any material.</p>
              </Link>
              <Link 
                href="/troubleshoot"
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-pink-300 hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900">Troubleshooting Wizard</h3>
                <p className="text-gray-600 text-sm mt-1">Diagnose any Cricut issue step by step.</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">More Mat Problems?</h2>
            <p className="text-green-100 mb-6">
              If your mat is clean and sticky but cuts still aren't right, the issue might be 
              elsewhere. Try our troubleshooting wizard.
            </p>
            <Link
              href="/troubleshoot"
              className="inline-block bg-white text-green-600 font-bold py-3 px-8 rounded-full hover:bg-green-50 transition-colors"
            >
              Start Troubleshooting
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
