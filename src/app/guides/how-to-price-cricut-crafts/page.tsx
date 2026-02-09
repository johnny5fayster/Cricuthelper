import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Price Your Cricut Crafts: Complete Guide to Profitable Pricing | CricutHelper',
  description: 'Master the art of pricing handmade items with our Cricut pricing formula. Learn how much to charge for custom shirts, tumblers, stickers, and more. Stop underpricing your crafts!',
  keywords: 'how to price cricut crafts, how to price handmade items, cricut pricing formula, how much to charge for cricut shirts, pricing handmade items for etsy, craft pricing guide',
  openGraph: {
    title: 'How to Price Your Cricut Crafts: Complete Guide to Profitable Pricing',
    description: 'Stop underpricing! Learn the exact formula for pricing Cricut crafts profitably.',
    type: 'article',
  },
};

const faqs = [
  {
    question: "What is a good profit margin for Cricut crafts?",
    answer: "Aim for at least 30-50% profit margin after covering all costs (materials, labor, overhead, and fees). For custom/personalized items, you can often charge 50-100% markup because of the added value. Never go below 20% profit margin—at that point, you're barely covering unexpected costs."
  },
  {
    question: "How do I calculate the cost of vinyl per project?",
    answer: "Measure your vinyl roll dimensions and calculate cost per square inch. For example: a 12\" x 15ft roll ($15) = 12 × 180 = 2,160 sq in, so $15 ÷ 2,160 = $0.007/sq in. A 10\" × 8\" design uses 80 sq in = $0.56 in vinyl. Add 15-20% for waste and mistakes."
  },
  {
    question: "Should I charge the same prices on Etsy as at craft fairs?",
    answer: "Keep prices consistent across platforms, but factor in different costs. Etsy takes ~15% in fees; craft fairs have booth fees ($50-200) but no per-item fees. Adjust your overhead calculations per platform, but your final price should be similar so customers don't feel cheated."
  },
  {
    question: "How much should I charge per hour for my labor?",
    answer: "At minimum $15/hour, but $20-25/hour is more sustainable. Consider what you'd pay someone else to do this work. For specialized skills (custom design, complex weeding), charge $25-35/hour. Track your time accurately for a few projects to establish realistic estimates."
  },
  {
    question: "How do I price custom/personalized orders?",
    answer: "Add a customization fee on top of your base price: $2-5 for simple name/text changes, $5-15 for custom colors or layouts, $15-50+ for fully custom designs requiring design work. Always charge for the extra time and back-and-forth communication custom orders require."
  },
  {
    question: "When should I raise my prices?",
    answer: "Raise prices when: (1) material costs increase, (2) you're consistently selling out, (3) you've improved quality or added value, (4) it's been 12+ months since your last increase, or (5) you're working too many hours for the income. Raise by 10-15% at a time, and give existing customers 2-4 weeks notice."
  },
  {
    question: "How do I compete with cheap mass-produced items?",
    answer: "Don't try to compete on price with Amazon—you'll lose. Instead, emphasize what makes handmade valuable: customization, quality materials, small-batch uniqueness, supporting a real person, and local/sustainable business. Customers who only want cheap aren't your target market."
  },
  {
    question: "Should I offer discounts or sales?",
    answer: "Be strategic with discounts. Avoid training customers to wait for sales. Instead: offer bundle discounts (buy 3+), loyalty programs for repeat customers, or limited seasonal sales (Black Friday, shop anniversary). Never discount more than 20%—it devalues your work and attracts bargain hunters, not loyal customers."
  }
];

export default function HowToPriceCricutCraftsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Price Your Cricut Crafts: Complete Guide to Profitable Pricing",
    "description": "Learn the exact formula for pricing Cricut crafts profitably, including material costs, labor, overhead, and marketplace fees.",
    "author": {
      "@type": "Person",
      "name": "Maya Chen"
    },
    "contributor": {
      "@type": "Person", 
      "name": "Keisha Williams"
    }
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
      <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-12">
        <article className="max-w-4xl mx-auto px-4">
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/guides" className="text-pink-600 hover:text-pink-700">
                ← Back to Guides
              </Link>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              How to Price Your Cricut Crafts: Complete Guide to Profitable Pricing
            </h1>
            <p className="text-xl text-gray-600">
              Stop leaving money on the table. This craft pricing guide breaks down the exact formula 
              for pricing handmade items—so you can run a real business, not an expensive hobby.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
              <span>📖 20 min read</span>
              <span>•</span>
              <span>Updated February 2026</span>
            </div>
            <div className="flex items-center gap-2 mt-4 text-sm">
              <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full">By Maya Chen</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">With Keisha Williams</span>
            </div>
          </header>

          {/* Author Box */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="text-4xl">👩🏾‍💼</div>
              <div>
                <p className="font-bold text-gray-900">Meet Your Co-Author: Keisha Williams</p>
                <p className="text-gray-700 text-sm">
                  Etsy business strategist who built a $200K/year custom tumbler shop from scratch. 
                  Throughout this guide, you'll see "Keisha's Take" callouts with real-world business 
                  advice from someone who's been in the trenches.
                </p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <nav className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="font-bold text-gray-900 mb-4">📋 In This Guide</h2>
            <ul className="space-y-2 text-pink-600">
              <li><a href="#why-underpricing" className="hover:underline">→ Why Most Crafters Underprice (And Why It's Killing Your Business)</a></li>
              <li><a href="#pricing-formula" className="hover:underline">→ The True Cost Formula</a></li>
              <li><a href="#material-costs" className="hover:underline">→ How to Calculate Material Costs</a></li>
              <li><a href="#valuing-time" className="hover:underline">→ Valuing Your Time (Why $15/hr Minimum)</a></li>
              <li><a href="#hidden-costs" className="hover:underline">→ Hidden Costs Most Crafters Forget</a></li>
              <li><a href="#marketplace-fees" className="hover:underline">→ Marketplace Fees Breakdown</a></li>
              <li><a href="#pricing-examples" className="hover:underline">→ Real Pricing Examples with Numbers</a></li>
              <li><a href="#raising-prices" className="hover:underline">→ When (And How) to Raise Your Prices</a></li>
              <li><a href="#faqs" className="hover:underline">→ FAQs</a></li>
            </ul>
          </nav>

          {/* Why Underpricing */}
          <section id="why-underpricing" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Why Most Crafters Underprice (And Why It's Killing Your Business)
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              <p>
                Let's get uncomfortable for a second.
              </p>
              <p>
                If you're reading this guide on <strong>how to price Cricut crafts</strong>, there's a good 
                chance you've already made one of these classic mistakes:
              </p>
              
              <ul className="list-disc list-inside space-y-2 bg-white rounded-xl shadow p-6">
                <li>Charging $15 for a custom t-shirt that took 2 hours to make</li>
                <li>Pricing "what feels fair" instead of doing actual math</li>
                <li>Matching (or undercutting) competitors without knowing their costs</li>
                <li>Feeling guilty about charging "too much" for handmade items</li>
                <li>Saying "I'd do this anyway, so the money is just extra"</li>
              </ul>

              <p>
                Here's the truth: <strong>underpricing isn't humble—it's harmful.</strong> It harms you 
                (burnout, resentment, financial stress). It harms other crafters (race to the bottom). 
                And it harms customers (they associate handmade with cheap, not valuable).
              </p>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                <p className="text-red-800">
                  <strong>🚨 Real talk:</strong> If you're working 40 hours a week on crafts and making 
                  less than minimum wage, you don't have a business—you have a very expensive, 
                  time-consuming hobby that happens to generate a little cash.
                </p>
              </div>

              <p>
                The good news? Learning <strong>how to price handmade items</strong> correctly isn't complicated. 
                It just requires doing the math and getting comfortable with charging what you're worth.
              </p>
            </div>

            {/* Keisha's Take */}
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 border-l-4 border-purple-500 p-6 rounded-r-xl mt-6">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💜</span>
                <div>
                  <p className="font-bold text-purple-900">Keisha's Take</p>
                  <p className="text-purple-800">
                    "When I started selling tumblers, I charged $25 because that's what I saw others charging. 
                    I was losing money on every sale and didn't even know it. Once I did the real math, 
                    I realized my minimum price needed to be $45. I raised prices, lost some bargain hunters, 
                    and my profit went up 300%. The customers who stayed? Way easier to work with."
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* The True Cost Formula */}
          <section id="pricing-formula" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              The True Cost Formula: Your Cricut Pricing Formula
            </h2>
            
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <p className="text-gray-700 mb-6">
                Every craft pricing guide will give you some version of this formula. Here's the one that actually works:
              </p>

              <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-6 text-center mb-6">
                <p className="text-2xl font-bold text-gray-900 mb-2">The Cricut Pricing Formula</p>
                <p className="text-3xl font-mono text-green-800">
                  (Materials + Labor + Overhead) × Profit Multiplier = Price
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <span className="text-2xl">📦</span>
                  <div>
                    <p className="font-bold text-gray-900">Materials</p>
                    <p className="text-gray-600">Every physical thing that goes into the product: vinyl, blanks, ink, packaging, shipping supplies</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <span className="text-2xl">⏱️</span>
                  <div>
                    <p className="font-bold text-gray-900">Labor</p>
                    <p className="text-gray-600">Your time × your hourly rate. ALL your time: design, cutting, weeding, pressing, packaging, communicating</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <span className="text-2xl">🏠</span>
                  <div>
                    <p className="font-bold text-gray-900">Overhead</p>
                    <p className="text-gray-600">The hidden costs: machine depreciation, blades, mats, electricity, software, workspace, internet</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <span className="text-2xl">💰</span>
                  <div>
                    <p className="font-bold text-gray-900">Profit Multiplier</p>
                    <p className="text-gray-600">Multiply by 1.3-1.5 (30-50% profit margin). This is your actual business profit—what lets you grow and survive unexpected costs</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
              <p className="font-semibold text-yellow-800">⚠️ Common Mistake</p>
              <p className="text-yellow-700">
                Many crafters just double their material costs and call it a day. That ignores labor 
                and overhead—two categories that often cost MORE than materials. A $10 blank doesn't 
                mean your price should be $20.
              </p>
            </div>
          </section>

          {/* Material Costs */}
          <section id="material-costs" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              How to Calculate Material Costs
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-700">
                This is where most people wing it. Don't. Get exact numbers for every material you use.
              </p>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Vinyl Cost Calculator</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-900 mb-2">Step 1: Find cost per square inch</p>
                    <p className="text-gray-600 text-sm mb-2">Roll price ÷ total square inches = cost per sq in</p>
                    <div className="bg-white rounded border p-3 font-mono text-sm">
                      <p>12" × 15ft roll of HTV = $18</p>
                      <p>12" × 180" = 2,160 square inches</p>
                      <p>$18 ÷ 2,160 = <strong>$0.0083/sq in</strong></p>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-900 mb-2">Step 2: Calculate per-project cost</p>
                    <p className="text-gray-600 text-sm mb-2">Design dimensions × cost per sq in × waste factor (1.2)</p>
                    <div className="bg-white rounded border p-3 font-mono text-sm">
                      <p>10" × 8" design = 80 sq in</p>
                      <p>80 × $0.0083 = $0.66</p>
                      <p>$0.66 × 1.2 (waste) = <strong>$0.80 in vinyl</strong></p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Quick Material Cost Reference</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-pink-50">
                      <tr>
                        <th className="p-3 font-semibold">Material</th>
                        <th className="p-3 font-semibold">Typical Cost</th>
                        <th className="p-3 font-semibold">Per Project Est.</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr>
                        <td className="p-3">HTV (heat transfer vinyl)</td>
                        <td className="p-3">$0.008-0.015/sq in</td>
                        <td className="p-3">$0.50-2.00</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="p-3">Adhesive vinyl</td>
                        <td className="p-3">$0.005-0.010/sq in</td>
                        <td className="p-3">$0.25-1.50</td>
                      </tr>
                      <tr>
                        <td className="p-3">Printable sticker paper</td>
                        <td className="p-3">$0.40-0.80/sheet</td>
                        <td className="p-3">$0.40-0.80</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="p-3">Blank t-shirt (Bella+Canvas)</td>
                        <td className="p-3">$4-8 each</td>
                        <td className="p-3">$4-8</td>
                      </tr>
                      <tr>
                        <td className="p-3">Blank tumbler (20oz)</td>
                        <td className="p-3">$3-7 each</td>
                        <td className="p-3">$3-7</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="p-3">Wood sign blank</td>
                        <td className="p-3">$2-15 each</td>
                        <td className="p-3">$2-15</td>
                      </tr>
                      <tr>
                        <td className="p-3">Transfer tape</td>
                        <td className="p-3">$0.002-0.005/sq in</td>
                        <td className="p-3">$0.10-0.30</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="p-3">Packaging (box + tissue + card)</td>
                        <td className="p-3">$1-3 per order</td>
                        <td className="p-3">$1-3</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="text-blue-800">
                  <strong>💡 Pro tip:</strong> Create a spreadsheet with all your material costs calculated 
                  per unit. Update it whenever prices change. This saves hours of recalculating and ensures 
                  you never forget a cost.
                </p>
              </div>
            </div>
          </section>

          {/* Valuing Your Time */}
          <section id="valuing-time" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Valuing Your Time: Why $15/Hour Minimum
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-700">
                This is where most crafters massively underprice. Your time has value—and you need to 
                charge for ALL of it.
              </p>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">What Counts as "Labor"?</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900">Production Time</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Creating/editing designs</li>
                      <li>• Setting up cuts</li>
                      <li>• Cutting</li>
                      <li>• Weeding</li>
                      <li>• Pressing/applying</li>
                      <li>• Quality inspection</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900">Business Time</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Customer communication</li>
                      <li>• Processing orders</li>
                      <li>• Packaging</li>
                      <li>• Shipping/trips to post office</li>
                      <li>• Photography/listing creation</li>
                      <li>• Social media marketing</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">Hourly Rate Guidelines</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="font-semibold">Absolute minimum</span>
                    <span className="text-green-700 font-bold">$15/hour</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="font-semibold">Sustainable rate</span>
                    <span className="text-green-700 font-bold">$20-25/hour</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="font-semibold">Skilled/custom work</span>
                    <span className="text-green-700 font-bold">$30-50/hour</span>
                  </div>
                </div>
                <p className="text-green-700 text-sm mt-4">
                  Ask yourself: what would you pay someone else to do this work? That's your minimum.
                </p>
              </div>

              {/* Keisha's Take */}
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 border-l-4 border-purple-500 p-6 rounded-r-xl">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💜</span>
                  <div>
                    <p className="font-bold text-purple-900">Keisha's Take</p>
                    <p className="text-purple-800">
                      "I used to think 'I'm fast at weeding, so I shouldn't charge much for time.' Wrong. 
                      My speed came from YEARS of practice. That's called skill, and skill is worth money. 
                      The faster you are, the more you should charge per hour—not less."
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Time Tracking Exercise</h3>
                <p className="text-gray-700 mb-4">
                  For your next 5 orders, track your time in detail:
                </p>
                <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
                  <p>Custom t-shirt order breakdown:</p>
                  <p className="mt-2">Customer messages: 15 min</p>
                  <p>Design creation: 20 min</p>
                  <p>Design revisions: 10 min</p>
                  <p>Cutting: 5 min</p>
                  <p>Weeding: 12 min</p>
                  <p>Pressing: 5 min</p>
                  <p>Quality check: 3 min</p>
                  <p>Packaging: 5 min</p>
                  <p>Creating shipping label: 3 min</p>
                  <p className="mt-2 font-bold">Total: 78 minutes = 1.3 hours</p>
                  <p className="text-green-700">At $20/hour = $26 in labor</p>
                </div>
              </div>
            </div>
          </section>

          {/* Hidden Costs */}
          <section id="hidden-costs" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Hidden Costs Most Crafters Forget
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-700">
                These are the "overhead" costs that eat into your profits if you don't account for them. 
                Most crafters completely ignore these—which is why they're confused when they're not making money.
              </p>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Equipment Depreciation</h3>
                <p className="text-gray-600 mb-4">
                  Your Cricut won't last forever. Budget for replacement.
                </p>
                <div className="space-y-3">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-900">Cricut Machine</p>
                    <div className="font-mono text-sm text-gray-600 mt-2">
                      <p>Cricut Maker 3: $400 ÷ 3 years ÷ 12 months = $11/month</p>
                      <p>If you make 50 items/month: <strong>$0.22/item</strong></p>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-900">Heat Press</p>
                    <div className="font-mono text-sm text-gray-600 mt-2">
                      <p>Heat press: $300 ÷ 4 years ÷ 12 months = $6.25/month</p>
                      <p>If you make 50 items/month: <strong>$0.13/item</strong></p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Consumables (Easy to Forget)</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Blades</h4>
                    <p className="text-gray-600 text-sm">Fine point blade: $8-12, lasts ~500 cuts</p>
                    <p className="text-green-700 text-sm font-mono">≈ $0.02/project</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Cutting Mats</h4>
                    <p className="text-gray-600 text-sm">StandardGrip mat: $12, lasts ~50 uses</p>
                    <p className="text-green-700 text-sm font-mono">≈ $0.24/project</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Weeding Tools</h4>
                    <p className="text-gray-600 text-sm">Tool set: $15, lasts ~6 months</p>
                    <p className="text-green-700 text-sm font-mono">≈ $0.05/project</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Heat Press Sheets</h4>
                    <p className="text-gray-600 text-sm">Teflon sheets: $10, last ~200 presses</p>
                    <p className="text-green-700 text-sm font-mono">≈ $0.05/project</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Operational Costs</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex justify-between p-3 bg-gray-50 rounded-lg">
                    <span>Electricity (machines, lighting)</span>
                    <span className="font-mono">$10-30/month</span>
                  </li>
                  <li className="flex justify-between p-3 bg-gray-50 rounded-lg">
                    <span>Cricut Access subscription</span>
                    <span className="font-mono">$12/month</span>
                  </li>
                  <li className="flex justify-between p-3 bg-gray-50 rounded-lg">
                    <span>Design software (Canva Pro, etc.)</span>
                    <span className="font-mono">$0-15/month</span>
                  </li>
                  <li className="flex justify-between p-3 bg-gray-50 rounded-lg">
                    <span>Printer ink (for stickers)</span>
                    <span className="font-mono">$20-50/month</span>
                  </li>
                  <li className="flex justify-between p-3 bg-gray-50 rounded-lg">
                    <span>Workspace/storage</span>
                    <span className="font-mono">Varies</span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <h3 className="font-bold text-yellow-800 mb-2">Simplified Overhead Calculation</h3>
                <p className="text-yellow-700 mb-4">
                  Don't want to track every penny? Use this shortcut:
                </p>
                <p className="text-yellow-800 font-bold text-lg">
                  Add 15-20% to your (Materials + Labor) total to cover overhead.
                </p>
                <p className="text-yellow-700 text-sm mt-2">
                  This isn't as accurate as itemizing, but it's better than ignoring overhead completely.
                </p>
              </div>
            </div>
          </section>

          {/* Marketplace Fees */}
          <section id="marketplace-fees" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Marketplace Fees Breakdown
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-700">
                Where you sell affects your profits significantly. If you're pricing handmade items for Etsy, 
                you MUST factor in fees—they can eat 15%+ of your sale price.
              </p>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-orange-500">●</span> Etsy Fees (2026)
                </h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between p-3 bg-orange-50 rounded-lg">
                    <span>Listing fee</span>
                    <span className="font-mono">$0.20/listing</span>
                  </div>
                  <div className="flex justify-between p-3 bg-orange-50 rounded-lg">
                    <span>Transaction fee</span>
                    <span className="font-mono">6.5% of sale</span>
                  </div>
                  <div className="flex justify-between p-3 bg-orange-50 rounded-lg">
                    <span>Payment processing</span>
                    <span className="font-mono">3% + $0.25</span>
                  </div>
                  <div className="flex justify-between p-3 bg-orange-50 rounded-lg">
                    <span>Offsite ads (if applicable)</span>
                    <span className="font-mono">12-15% of sale</span>
                  </div>
                  <div className="flex justify-between p-3 bg-orange-100 rounded-lg font-bold">
                    <span>Total without ads</span>
                    <span className="font-mono">~11-13% + $0.45</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Example: $40 sale → ~$5.20-5.65 in fees → you keep $34.35-34.80
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-blue-500">●</span> Amazon Handmade Fees
                </h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between p-3 bg-blue-50 rounded-lg">
                    <span>Referral fee</span>
                    <span className="font-mono">15% of sale</span>
                  </div>
                  <div className="flex justify-between p-3 bg-blue-50 rounded-lg">
                    <span>No listing fees</span>
                    <span className="font-mono">$0</span>
                  </div>
                  <div className="flex justify-between p-3 bg-blue-100 rounded-lg font-bold">
                    <span>Total</span>
                    <span className="font-mono">15%</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Higher fee, but access to Amazon's massive customer base.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-purple-500">●</span> Shopify
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between p-2 bg-purple-50 rounded">
                      <span>Monthly fee</span>
                      <span className="font-mono">$29-79/mo</span>
                    </div>
                    <div className="flex justify-between p-2 bg-purple-50 rounded">
                      <span>Payment processing</span>
                      <span className="font-mono">2.9% + $0.30</span>
                    </div>
                    <div className="flex justify-between p-2 bg-purple-50 rounded">
                      <span>Transaction fees</span>
                      <span className="font-mono">0% (with Shopify Payments)</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-3">
                    Better margins at high volume. Need to drive your own traffic.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-green-500">●</span> Craft Fairs
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between p-2 bg-green-50 rounded">
                      <span>Booth fee</span>
                      <span className="font-mono">$50-300/event</span>
                    </div>
                    <div className="flex justify-between p-2 bg-green-50 rounded">
                      <span>Square/card processing</span>
                      <span className="font-mono">2.6% + $0.10</span>
                    </div>
                    <div className="flex justify-between p-2 bg-green-50 rounded">
                      <span>Cash sales</span>
                      <span className="font-mono">0%</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-3">
                    Great for local presence. Calculate min sales to cover booth fee.
                  </p>
                </div>
              </div>

              {/* Keisha's Take */}
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 border-l-4 border-purple-500 p-6 rounded-r-xl">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💜</span>
                  <div>
                    <p className="font-bold text-purple-900">Keisha's Take</p>
                    <p className="text-purple-800">
                      "I started on Etsy, scaled to $200K/year, then moved to Shopify and kept Etsy as 
                      a 'discovery' channel. On Etsy, I price 15% higher to cover fees. My Shopify prices 
                      are my 'real' prices. Customers from Etsy eventually find my website and get better 
                      deals there. Both channels feed each other."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Examples */}
          <section id="pricing-examples" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Real Pricing Examples: How Much to Charge for Cricut Projects
            </h2>
            
            <p className="text-gray-700 mb-6">
              Let's apply the cricut pricing formula to real products. These examples show exactly 
              how to price handmade items profitably.
            </p>

            <div className="space-y-8">
              {/* T-Shirt Example */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-4">
                  <h3 className="font-bold text-xl">Example 1: Custom T-Shirt with HTV</h3>
                  <p className="text-pink-100">Answering: "How much to charge for Cricut shirts?"</p>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">📦 Materials</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex justify-between">
                          <span>Bella+Canvas 3001 blank</span>
                          <span className="font-mono">$6.50</span>
                        </li>
                        <li className="flex justify-between">
                          <span>HTV vinyl (10"×8" design)</span>
                          <span className="font-mono">$1.20</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Packaging (poly mailer + tissue)</span>
                          <span className="font-mono">$0.80</span>
                        </li>
                        <li className="flex justify-between font-semibold border-t pt-2">
                          <span>Materials Total</span>
                          <span className="font-mono">$8.50</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">⏱️ Labor (@ $20/hr)</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex justify-between">
                          <span>Design/setup (15 min)</span>
                          <span className="font-mono">$5.00</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Cut + weed (12 min)</span>
                          <span className="font-mono">$4.00</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Press + package (10 min)</span>
                          <span className="font-mono">$3.33</span>
                        </li>
                        <li className="flex justify-between font-semibold border-t pt-2">
                          <span>Labor Total</span>
                          <span className="font-mono">$12.33</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-green-50 rounded-lg">
                    <div className="space-y-2 text-gray-700">
                      <div className="flex justify-between">
                        <span>Materials + Labor</span>
                        <span className="font-mono">$20.83</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Overhead (15%)</span>
                        <span className="font-mono">$3.12</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span className="font-mono">$23.95</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Profit margin (×1.4)</span>
                        <span className="font-mono">$33.53</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Etsy fees (add 15%)</span>
                        <span className="font-mono">$38.56</span>
                      </div>
                      <div className="flex justify-between text-xl font-bold text-green-800 border-t-2 border-green-300 pt-2">
                        <span>Final Price</span>
                        <span className="font-mono">$39-42</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tumbler Example */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4">
                  <h3 className="font-bold text-xl">Example 2: 20oz Tumbler with Vinyl</h3>
                  <p className="text-blue-100">Popular item with great margins</p>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">📦 Materials</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex justify-between">
                          <span>20oz skinny tumbler blank</span>
                          <span className="font-mono">$5.00</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Permanent vinyl (wrap design)</span>
                          <span className="font-mono">$2.50</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Transfer tape</span>
                          <span className="font-mono">$0.30</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Gift box + tissue + ribbon</span>
                          <span className="font-mono">$2.00</span>
                        </li>
                        <li className="flex justify-between font-semibold border-t pt-2">
                          <span>Materials Total</span>
                          <span className="font-mono">$9.80</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">⏱️ Labor (@ $22/hr)</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex justify-between">
                          <span>Design/customize (20 min)</span>
                          <span className="font-mono">$7.33</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Cut + weed (15 min)</span>
                          <span className="font-mono">$5.50</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Apply vinyl (10 min)</span>
                          <span className="font-mono">$3.67</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Package + shipping (10 min)</span>
                          <span className="font-mono">$3.67</span>
                        </li>
                        <li className="flex justify-between font-semibold border-t pt-2">
                          <span>Labor Total</span>
                          <span className="font-mono">$20.17</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <div className="space-y-2 text-gray-700">
                      <div className="flex justify-between">
                        <span>Materials + Labor</span>
                        <span className="font-mono">$29.97</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Overhead (15%)</span>
                        <span className="font-mono">$4.50</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Profit margin (×1.5)</span>
                        <span className="font-mono">$51.70</span>
                      </div>
                      <div className="flex justify-between text-xl font-bold text-blue-800 border-t-2 border-blue-300 pt-2">
                        <span>Final Price</span>
                        <span className="font-mono">$52-58</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sticker Sheets Example */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-4">
                  <h3 className="font-bold text-xl">Example 3: Sticker Sheet (20 stickers)</h3>
                  <p className="text-yellow-100">High-margin product with repeat customers</p>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">📦 Materials</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex justify-between">
                          <span>Glossy sticker paper</span>
                          <span className="font-mono">$0.60</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Printer ink (estimated)</span>
                          <span className="font-mono">$0.40</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Laminate sheet</span>
                          <span className="font-mono">$0.35</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Clear sleeve + backing card</span>
                          <span className="font-mono">$0.25</span>
                        </li>
                        <li className="flex justify-between font-semibold border-t pt-2">
                          <span>Materials Total</span>
                          <span className="font-mono">$1.60</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">⏱️ Labor (@ $20/hr)</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex justify-between">
                          <span>Design creation (one-time, amortized)</span>
                          <span className="font-mono">$0.50</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Print + laminate (5 min)</span>
                          <span className="font-mono">$1.67</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Cut + package (5 min)</span>
                          <span className="font-mono">$1.67</span>
                        </li>
                        <li className="flex justify-between font-semibold border-t pt-2">
                          <span>Labor Total</span>
                          <span className="font-mono">$3.84</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                    <div className="space-y-2 text-gray-700">
                      <div className="flex justify-between">
                        <span>Materials + Labor</span>
                        <span className="font-mono">$5.44</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Overhead (15%)</span>
                        <span className="font-mono">$0.82</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Profit margin (×1.5)</span>
                        <span className="font-mono">$9.39</span>
                      </div>
                      <div className="flex justify-between text-xl font-bold text-yellow-800 border-t-2 border-yellow-300 pt-2">
                        <span>Final Price</span>
                        <span className="font-mono">$10-12</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-3">
                    💡 Stickers have great margins because design time is amortized across many sales. 
                    Learn more in our <Link href="/guides/how-to-make-stickers-cricut" className="text-pink-600 hover:underline">complete sticker-making guide</Link>.
                  </p>
                </div>
              </div>

              {/* Wood Sign Example */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-amber-600 to-orange-700 text-white p-4">
                  <h3 className="font-bold text-xl">Example 4: Wood Sign (12"×16")</h3>
                  <p className="text-amber-100">Premium product with higher perceived value</p>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">📦 Materials</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex justify-between">
                          <span>Wood plaque blank</span>
                          <span className="font-mono">$8.00</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Paint/stain</span>
                          <span className="font-mono">$1.50</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Adhesive vinyl (large design)</span>
                          <span className="font-mono">$3.00</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Transfer tape</span>
                          <span className="font-mono">$0.40</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Sealant</span>
                          <span className="font-mono">$0.75</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Sawtooth hanger + packaging</span>
                          <span className="font-mono">$2.00</span>
                        </li>
                        <li className="flex justify-between font-semibold border-t pt-2">
                          <span>Materials Total</span>
                          <span className="font-mono">$15.65</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">⏱️ Labor (@ $22/hr)</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex justify-between">
                          <span>Design/layout (20 min)</span>
                          <span className="font-mono">$7.33</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Sand + paint/stain (25 min)</span>
                          <span className="font-mono">$9.17</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Cut + weed (20 min)</span>
                          <span className="font-mono">$7.33</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Apply + seal (15 min)</span>
                          <span className="font-mono">$5.50</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Package (10 min)</span>
                          <span className="font-mono">$3.67</span>
                        </li>
                        <li className="flex justify-between font-semibold border-t pt-2">
                          <span>Labor Total</span>
                          <span className="font-mono">$33.00</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                    <div className="space-y-2 text-gray-700">
                      <div className="flex justify-between">
                        <span>Materials + Labor</span>
                        <span className="font-mono">$48.65</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Overhead (15%)</span>
                        <span className="font-mono">$7.30</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Profit margin (×1.4)</span>
                        <span className="font-mono">$78.33</span>
                      </div>
                      <div className="flex justify-between text-xl font-bold text-amber-800 border-t-2 border-amber-300 pt-2">
                        <span>Final Price</span>
                        <span className="font-mono">$78-95</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Keisha's Take */}
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 border-l-4 border-purple-500 p-6 rounded-r-xl mt-8">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💜</span>
                <div>
                  <p className="font-bold text-purple-900">Keisha's Take</p>
                  <p className="text-purple-800">
                    "Notice how the more steps a product has, the more labor costs add up. That's why 
                    simple products (stickers, decals) often have better profit margins than complex ones 
                    (wood signs, tumblers). When I was scaling my business, I focused on products where 
                    I could batch production—cutting 20 designs at once, pressing 10 shirts in a row. 
                    That efficiency is where the real money is."
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* When to Raise Prices */}
          <section id="raising-prices" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              When (And How) to Raise Your Prices
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Signs It's Time to Raise Prices</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                    <span className="text-green-600">✓</span>
                    <span className="text-gray-700">You're consistently selling out or have a long waitlist</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                    <span className="text-green-600">✓</span>
                    <span className="text-gray-700">Material costs have increased since you set prices</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                    <span className="text-green-600">✓</span>
                    <span className="text-gray-700">You've improved quality, packaging, or added value</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                    <span className="text-green-600">✓</span>
                    <span className="text-gray-700">It's been 12+ months since your last price increase</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                    <span className="text-green-600">✓</span>
                    <span className="text-gray-700">You're working too many hours for the income you're making</span>
                  </li>
                  <li className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                    <span className="text-green-600">✓</span>
                    <span className="text-gray-700">Competitors with similar quality are charging more</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">How to Raise Prices (Without Losing Customers)</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-pink-400 pl-4">
                    <p className="font-semibold text-gray-900">1. Raise by 10-15% at a time</p>
                    <p className="text-gray-600 text-sm">Large jumps shock customers. Gradual increases feel natural.</p>
                  </div>
                  <div className="border-l-4 border-pink-400 pl-4">
                    <p className="font-semibold text-gray-900">2. Give advance notice (2-4 weeks)</p>
                    <p className="text-gray-600 text-sm">"Prices will increase on [date]. Order now at current rates!"</p>
                  </div>
                  <div className="border-l-4 border-pink-400 pl-4">
                    <p className="font-semibold text-gray-900">3. Explain the value (not the cost)</p>
                    <p className="text-gray-600 text-sm">Don't apologize or over-explain. Focus on quality and what they're getting.</p>
                  </div>
                  <div className="border-l-4 border-pink-400 pl-4">
                    <p className="font-semibold text-gray-900">4. Consider grandfathering repeat customers</p>
                    <p className="text-gray-600 text-sm">"Returning customers get 10% off for the next 60 days" softens the transition.</p>
                  </div>
                  <div className="border-l-4 border-pink-400 pl-4">
                    <p className="font-semibold text-gray-900">5. Add value with the increase</p>
                    <p className="text-gray-600 text-sm">Upgrade packaging, add a small freebie, or improve quality alongside the increase.</p>
                  </div>
                </div>
              </div>

              <div className="bg-pink-50 border border-pink-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">Sample Price Increase Announcement</h3>
                <div className="bg-white rounded-lg p-4 text-gray-700 italic">
                  "Hey craft fam! 💕 Quick heads up: prices will be going up by 15% starting March 1st. 
                  Material costs have risen, and I want to keep delivering the same quality you love. 
                  If you've been eyeing something, now's a great time to grab it! Thanks for supporting 
                  my small business—it means the world. 🙏"
                </div>
              </div>

              {/* Keisha's Take */}
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 border-l-4 border-purple-500 p-6 rounded-r-xl">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💜</span>
                  <div>
                    <p className="font-bold text-purple-900">Keisha's Take</p>
                    <p className="text-purple-800">
                      "I raise prices every January and every time material costs jump. You know what happens? 
                      I lose about 5-10% of customers each time—and they're always the high-maintenance 
                      bargain hunters. The customers who stay? They're the dream: they trust my quality, 
                      don't haggle, and often become repeat buyers. Raising prices is natural selection 
                      for better customers."
                    </p>
                  </div>
                </div>
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

          {/* Quick Reference */}
          <section className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Quick Pricing Checklist
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <h3 className="font-bold mb-2">The Formula</h3>
                <p className="text-lg font-mono bg-white p-3 rounded-lg">
                  (Materials + Labor + 15% Overhead) × 1.3-1.5
                </p>
                <p className="text-sm mt-2">Then add marketplace fees if selling on Etsy, etc.</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Don't Forget</h3>
                <ul className="space-y-1 text-sm">
                  <li>✓ Track ALL your time (design, cutting, packaging, shipping)</li>
                  <li>✓ Include packaging and shipping materials</li>
                  <li>✓ Account for blade/mat replacement</li>
                  <li>✓ Add customization fees for custom orders</li>
                  <li>✓ Review and raise prices annually</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-white rounded-2xl shadow-lg p-8 text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Take the Guesswork Out of Pricing
            </h2>
            <p className="text-gray-600 mb-6">
              Use our free Profit Calculator to run the numbers for any Cricut project. 
              Enter your materials, time, and costs—get your profitable price instantly.
            </p>
            <Link
              href="/profit-calculator"
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:from-pink-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-lg"
            >
              Open Profit Calculator →
            </Link>
          </section>

          {/* Related Guides */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Guides</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link 
                href="/guides/how-to-make-stickers-cricut"
                className="block bg-white rounded-xl shadow p-4 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-bold text-gray-900">How to Make Stickers with Cricut</h3>
                <p className="text-sm text-gray-600">Complete beginner guide to Print Then Cut</p>
              </Link>
              <Link 
                href="/guides/htv-peeling-after-washing"
                className="block bg-white rounded-xl shadow p-4 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-bold text-gray-900">HTV Peeling After Washing?</h3>
                <p className="text-sm text-gray-600">Make shirts that last</p>
              </Link>
              <Link 
                href="/guides/best-cricut-for-beginners"
                className="block bg-white rounded-xl shadow p-4 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-bold text-gray-900">Best Cricut for Beginners</h3>
                <p className="text-sm text-gray-600">Which machine to start your business with</p>
              </Link>
              <Link 
                href="/guides/infusible-ink-guide"
                className="block bg-white rounded-xl shadow p-4 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-bold text-gray-900">Infusible Ink Guide</h3>
                <p className="text-sm text-gray-600">Premium products with higher margins</p>
              </Link>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
