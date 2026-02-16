import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Infusible Ink: Complete Beginner Guide (2025)',
  description: 'Learn how to use Cricut Infusible Ink with this step-by-step guide. Transfer sheets, markers, compatible blanks, temperature settings, and common mistakes to avoid.',
  keywords: ['Infusible Ink', 'Cricut Infusible Ink', 'infusible ink tutorial', 'how to use infusible ink', 'infusible ink blanks', 'infusible ink temperature'],
  openGraph: {
    title: 'Infusible Ink: Complete Beginner Guide',
    description: 'Learn how to use Cricut Infusible Ink with transfer sheets and markers. Step-by-step tutorial.',
    type: 'article',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Infusible Ink?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Infusible Ink is Cricut's sublimation-style transfer system. Unlike HTV that sits on top of fabric, Infusible Ink actually infuses INTO the material, becoming part of it. The result is a smooth, no-peel finish that won't crack, fade, or peel off even after many washes."
      }
    },
    {
      "@type": "Question",
      "name": "What can you use Infusible Ink on?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Infusible Ink only works on polyester or poly-coated surfaces. This includes: polyester t-shirts (65%+ poly), Cricut blanks (coasters, bags, onesies), poly-coated ceramics, and certain hardwoods. It does NOT work on 100% cotton, dark fabrics, or uncoated materials."
      }
    },
    {
      "@type": "Question",
      "name": "What temperature do you use for Infusible Ink?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Infusible Ink requires high heat: 400°F (205°C) for most transfers. Press time varies: 40 seconds for fabric/apparel, 60 seconds for coasters, 240 seconds for ceramic mugs. Always check Cricut's Heat Guide for your specific blank."
      }
    },
    {
      "@type": "Question",
      "name": "Do you mirror Infusible Ink?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Always mirror your design in Design Space before cutting. The transfer sheet goes face DOWN on your blank, so if you don't mirror, your design will be backwards."
      }
    },
    {
      "@type": "Question",
      "name": "Why is my Infusible Ink faded or washed out?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Faded results usually mean: not enough heat (check temperature), not enough time (press longer), wrong blank material (needs high poly content), or moisture in the blank (pre-press to remove moisture first)."
      }
    }
  ]
};

export default function InfusibleInkGuide() {
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
              <li className="text-gray-900">Infusible Ink Guide</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-gradient-to-r from-[#9CAF88] to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Tutorial
              </span>
              <span className="text-gray-500 text-sm">Updated February 2025</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Infusible Ink: Complete Beginner Guide
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Vibrant, permanent designs that never peel, crack, or fade. Here's everything you 
              need to know about Cricut's Infusible Ink system.
            </p>
          </header>

          {/* What Is Box */}
          <div className="bg-gradient-to-r from-[#F5FAF3] via-purple-100 to-orange-100 rounded-xl p-6 mb-8 border-l-4 border-[#9CAF88]">
            <h2 className="font-bold text-lg text-gray-900 mb-3">✨ What Is Infusible Ink?</h2>
            <p className="text-gray-700 mb-3">
              Unlike HTV that sits <em>on top</em> of fabric, Infusible Ink <strong>infuses INTO</strong> the 
              material. The ink becomes part of the fabric/surface permanently.
            </p>
            <div className="grid md:grid-cols-2 gap-3 mt-4">
              <div className="bg-white/60 rounded-lg p-3">
                <p className="font-medium text-gray-900">✅ The result:</p>
                <ul className="text-sm text-gray-700 mt-1">
                  <li>• No peeling ever</li>
                  <li>• Ultra-bright colors</li>
                  <li>• Smooth, "no feel" finish</li>
                  <li>• Wash-proof forever</li>
                </ul>
              </div>
              <div className="bg-white/60 rounded-lg p-3">
                <p className="font-medium text-gray-900">⚠️ The catch:</p>
                <ul className="text-sm text-gray-700 mt-1">
                  <li>• Only works on polyester</li>
                  <li>• Only light-colored blanks</li>
                  <li>• Requires high heat (400°F)</li>
                  <li>• More expensive than HTV</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="font-bold text-lg mb-4">📋 In This Guide</h2>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#types" className="text-[#9CAF88] hover:underline">→ Types of Infusible Ink (sheets vs markers)</a></li>
              <li><a href="#blanks" className="text-[#9CAF88] hover:underline">→ Compatible blanks</a></li>
              <li><a href="#step-by-step" className="text-[#9CAF88] hover:underline">→ Step-by-step tutorial</a></li>
              <li><a href="#settings" className="text-[#9CAF88] hover:underline">→ Temperature & time settings</a></li>
              <li><a href="#troubleshooting" className="text-[#9CAF88] hover:underline">→ Troubleshooting common problems</a></li>
            </ul>
          </div>

          {/* Main Content */}
          <article className="prose prose-lg max-w-none">
            
            {/* Types Section */}
            <section id="types" className="mb-10 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900">Types of Infusible Ink</h2>
              
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white border-2 border-[#B8C9A9] rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">📄 Transfer Sheets</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Pre-printed sheets you cut with your Cricut. Available in solid colors, 
                    patterns, and designs. Cut, weed, and press.
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>✓ Best for: Solid shapes, text, cut designs</li>
                    <li>✓ Easiest to use</li>
                    <li>✓ Most vibrant results</li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-purple-200 rounded-xl p-5">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">🖊️ Pens & Markers</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Draw designs on laser copy paper, then transfer. Works with Cricut's 
                    draw feature or hand-drawing.
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>✓ Best for: Hand-lettering, illustrations</li>
                    <li>✓ More color options</li>
                    <li>✓ Draw your own designs</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-4">
                <p className="text-blue-800">
                  <strong>💡 Starting out?</strong> Begin with transfer sheets — they're more 
                  forgiving for beginners. Once you're comfortable, try the markers for more 
                  creative freedom.
                </p>
              </div>
            </section>

            {/* Compatible Blanks */}
            <section id="blanks" className="mb-10 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900">What Can You Use Infusible Ink On?</h2>
              <p>
                This is the #1 source of frustration — Infusible Ink is picky about surfaces!
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-green-50 rounded-lg p-5 border border-green-200">
                  <h3 className="font-bold text-green-800 mb-3">✅ Works Great</h3>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li><strong>Polyester fabric</strong> (65%+ polyester)</li>
                    <li><strong>Cricut blanks</strong> (designed for Infusible Ink)</li>
                    <li><strong>Poly-coated ceramics</strong> (mugs, coasters)</li>
                    <li><strong>Poly-coated hardboard</strong> (coasters, puzzles)</li>
                    <li><strong>White/light colors only</strong></li>
                  </ul>
                </div>

                <div className="bg-red-50 rounded-lg p-5 border border-red-200">
                  <h3 className="font-bold text-red-800 mb-3">❌ Won't Work</h3>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li><strong>100% cotton</strong> (no poly = no transfer)</li>
                    <li><strong>Dark colors</strong> (ink is transparent)</li>
                    <li><strong>Uncoated wood/ceramics</strong></li>
                    <li><strong>Low-poly blends</strong> (under 50%)</li>
                    <li><strong>Textured surfaces</strong></li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 my-4">
                <p className="text-yellow-800">
                  <strong>⚠️ Most common mistake:</strong> Using a regular cotton t-shirt. The ink 
                  needs polyester to bond with. Either use poly shirts or Cricut's compatible blanks.
                </p>
              </div>

              <h3 className="font-bold text-gray-900 mt-6">Best Blanks for Beginners:</h3>
              <ul className="list-disc list-inside space-y-1 my-4">
                <li><strong>Cricut ceramic coasters</strong> — easy, forgiving, great results</li>
                <li><strong>Cricut tote bags</strong> — larger surface, room for error</li>
                <li><strong>Cricut baby bodysuits</strong> — popular for gifts</li>
                <li><strong>White poly t-shirts</strong> — check for 65%+ polyester content</li>
              </ul>
            </section>

            {/* Step by Step Tutorial */}
            <section id="step-by-step" className="mb-10 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900">Step-by-Step Tutorial (Transfer Sheets)</h2>

              <div className="space-y-6 my-6">
                <div className="bg-gradient-to-r from-[#F5FAF3] to-[#FFFBF0] rounded-xl p-6 border-l-4 border-[#9CAF88]">
                  <h3 className="font-bold text-xl text-gray-900 flex items-center gap-2">
                    <span className="bg-[#9CAF88] text-white w-8 h-8 rounded-full flex items-center justify-center">1</span>
                    Design & Mirror
                  </h3>
                  <p className="text-gray-700 mt-2">
                    Create your design in Design Space. <strong>Toggle MIRROR on</strong> before 
                    cutting. Your design will transfer backwards, so mirroring is essential!
                  </p>
                </div>

                <div className="bg-gradient-to-r from-[#F5FAF3] to-[#FFFBF0] rounded-xl p-6 border-l-4 border-[#9CAF88]">
                  <h3 className="font-bold text-xl text-gray-900 flex items-center gap-2">
                    <span className="bg-[#9CAF88] text-white w-8 h-8 rounded-full flex items-center justify-center">2</span>
                    Load & Cut
                  </h3>
                  <p className="text-gray-700 mt-2">
                    Place the Infusible Ink sheet <strong>ink side UP</strong> (colored/patterned side 
                    facing you) on a StandardGrip mat. Load and cut with the Infusible Ink setting.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-[#F5FAF3] to-[#FFFBF0] rounded-xl p-6 border-l-4 border-[#9CAF88]">
                  <h3 className="font-bold text-xl text-gray-900 flex items-center gap-2">
                    <span className="bg-[#9CAF88] text-white w-8 h-8 rounded-full flex items-center justify-center">3</span>
                    Weed Carefully
                  </h3>
                  <p className="text-gray-700 mt-2">
                    Remove the excess material around your design. <strong>Don't touch the ink 
                    side</strong> with bare fingers — oils from your skin can affect the transfer.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-[#F5FAF3] to-[#FFFBF0] rounded-xl p-6 border-l-4 border-[#9CAF88]">
                  <h3 className="font-bold text-xl text-gray-900 flex items-center gap-2">
                    <span className="bg-[#9CAF88] text-white w-8 h-8 rounded-full flex items-center justify-center">4</span>
                    Pre-Press Your Blank
                  </h3>
                  <p className="text-gray-700 mt-2">
                    Heat your EasyPress to the correct temperature. Pre-press your blank for 10-15 
                    seconds to remove moisture and wrinkles. This step prevents ghosting!
                  </p>
                </div>

                <div className="bg-gradient-to-r from-[#F5FAF3] to-[#FFFBF0] rounded-xl p-6 border-l-4 border-[#9CAF88]">
                  <h3 className="font-bold text-xl text-gray-900 flex items-center gap-2">
                    <span className="bg-[#9CAF88] text-white w-8 h-8 rounded-full flex items-center justify-center">5</span>
                    Position Your Design
                  </h3>
                  <p className="text-gray-700 mt-2">
                    Place your design <strong>INK SIDE DOWN</strong> on the blank. The carrier 
                    sheet should be facing up. Use heat-resistant tape to secure if needed.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-[#F5FAF3] to-[#FFFBF0] rounded-xl p-6 border-l-4 border-[#9CAF88]">
                  <h3 className="font-bold text-xl text-gray-900 flex items-center gap-2">
                    <span className="bg-[#9CAF88] text-white w-8 h-8 rounded-full flex items-center justify-center">6</span>
                    Press!
                  </h3>
                  <p className="text-gray-700 mt-2">
                    Apply firm, even pressure for the specified time (usually 40-60 seconds). 
                    <strong>Don't move the press</strong> — movement causes ghosting.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-[#F5FAF3] to-[#FFFBF0] rounded-xl p-6 border-l-4 border-[#9CAF88]">
                  <h3 className="font-bold text-xl text-gray-900 flex items-center gap-2">
                    <span className="bg-[#9CAF88] text-white w-8 h-8 rounded-full flex items-center justify-center">7</span>
                    Remove & Admire
                  </h3>
                  <p className="text-gray-700 mt-2">
                    Remove the carrier sheet while still hot. Your design is now permanently 
                    infused! The colors will be more vibrant than they looked on the sheet.
                  </p>
                </div>
              </div>
            </section>

            {/* Settings Section */}
            <section id="settings" className="mb-10 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900">Temperature & Time Settings</h2>
              
              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-gray-900 text-white">
                      <th className="px-4 py-3 text-left">Blank Type</th>
                      <th className="px-4 py-3 text-center">Temperature</th>
                      <th className="px-4 py-3 text-center">Time</th>
                      <th className="px-4 py-3 text-center">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-4 py-3">T-shirts / Apparel</td>
                      <td className="px-4 py-3 text-center font-bold text-[#9CAF88]">400°F</td>
                      <td className="px-4 py-3 text-center font-bold">40 sec</td>
                      <td className="px-4 py-3 text-center text-xs">Pre-press 15 sec</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="px-4 py-3">Coasters (ceramic)</td>
                      <td className="px-4 py-3 text-center font-bold text-[#9CAF88]">400°F</td>
                      <td className="px-4 py-3 text-center font-bold">60 sec</td>
                      <td className="px-4 py-3 text-center text-xs">Use EasyPress Mat</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3">Tote Bags</td>
                      <td className="px-4 py-3 text-center font-bold text-[#9CAF88]">400°F</td>
                      <td className="px-4 py-3 text-center font-bold">40 sec</td>
                      <td className="px-4 py-3 text-center text-xs">Protect inside</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="px-4 py-3">Mugs (ceramic)</td>
                      <td className="px-4 py-3 text-center font-bold text-[#9CAF88]">400°F</td>
                      <td className="px-4 py-3 text-center font-bold">240 sec (4 min)</td>
                      <td className="px-4 py-3 text-center text-xs">Use Mug Press</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3">Baby Bodysuits</td>
                      <td className="px-4 py-3 text-center font-bold text-[#9CAF88]">385°F</td>
                      <td className="px-4 py-3 text-center font-bold">40 sec</td>
                      <td className="px-4 py-3 text-center text-xs">Lower temp for delicates</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 my-4">
                <p className="text-purple-800">
                  <strong>📱 Always check:</strong> Cricut's Heat Guide (in Design Space or at 
                  cricut.com/heatguide) has the most up-to-date settings for every blank.
                </p>
              </div>
            </section>

            {/* Troubleshooting Section */}
            <section id="troubleshooting" className="mb-10 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900">Troubleshooting Common Problems</h2>

              <div className="space-y-4 my-6">
                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900">❌ Colors are faded/washed out</h3>
                  <ul className="text-gray-700 mt-2 space-y-1 text-sm">
                    <li>• <strong>Not enough heat</strong> — verify temperature is accurate</li>
                    <li>• <strong>Not enough time</strong> — don't rush the press</li>
                    <li>• <strong>Wrong blank</strong> — needs 65%+ polyester</li>
                    <li>• <strong>Moisture</strong> — pre-press to dry the blank first</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900">❌ Ghosting (shadow/blur around design)</h3>
                  <ul className="text-gray-700 mt-2 space-y-1 text-sm">
                    <li>• <strong>Movement during press</strong> — don't shift the EasyPress</li>
                    <li>• <strong>Design moved</strong> — tape it down with heat-resistant tape</li>
                    <li>• <strong>Too much pressure</strong> — firm but not excessive</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900">❌ Design didn't transfer completely</h3>
                  <ul className="text-gray-700 mt-2 space-y-1 text-sm">
                    <li>• <strong>Uneven pressure</strong> — press flat, check for gaps</li>
                    <li>• <strong>Blank wasn't flat</strong> — use EasyPress mat underneath</li>
                    <li>• <strong>Cold spots</strong> — EasyPress might not cover entire design</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900">❌ Lines or marks in the transfer</h3>
                  <ul className="text-gray-700 mt-2 space-y-1 text-sm">
                    <li>• <strong>Touched the ink</strong> — oils transfer; use gloves or tweezers</li>
                    <li>• <strong>Debris on blank</strong> — lint-roll before pressing</li>
                    <li>• <strong>Scratched transfer sheet</strong> — handle carefully</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Tips Section */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900">Pro Tips for Best Results</h2>
              
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-[#F5FAF3] rounded-lg p-4 border-l-4 border-[#9CAF88]">
                  <h3 className="font-bold text-gray-900">Use butcher paper</h3>
                  <p className="text-gray-700 text-sm">
                    Place butcher paper inside shirts (between layers) to prevent bleed-through 
                    and under/over your design to protect your press.
                  </p>
                </div>

                <div className="bg-[#F5FAF3] rounded-lg p-4 border-l-4 border-[#9CAF88]">
                  <h3 className="font-bold text-gray-900">Lint roll everything</h3>
                  <p className="text-gray-700 text-sm">
                    Any lint, dust, or debris will show in your transfer. Lint roll your blank 
                    AND your work surface.
                  </p>
                </div>

                <div className="bg-[#F5FAF3] rounded-lg p-4 border-l-4 border-[#9CAF88]">
                  <h3 className="font-bold text-gray-900">Don't reposition</h3>
                  <p className="text-gray-700 text-sm">
                    Once the transfer sheet touches the heated blank, it starts transferring. 
                    Position carefully BEFORE heating.
                  </p>
                </div>

                <div className="bg-[#F5FAF3] rounded-lg p-4 border-l-4 border-[#9CAF88]">
                  <h3 className="font-bold text-gray-900">Test on scraps first</h3>
                  <p className="text-gray-700 text-sm">
                    Before your final project, test your settings on a scrap piece of the same 
                    material. Infusible Ink is too pricey for guesswork.
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
              
              <div className="space-y-6 mt-4">
                <div>
                  <h3 className="font-bold text-gray-900">Can I use Infusible Ink on cotton?</h3>
                  <p className="text-gray-600">
                    No. Infusible Ink needs polyester to bond with. Use HTV/iron-on for cotton 
                    shirts instead.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900">Is Infusible Ink the same as sublimation?</h3>
                  <p className="text-gray-600">
                    Very similar! Both use heat to infuse ink into polyester. Infusible Ink is 
                    Cricut's version, designed to work with their machines and blanks.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900">Will Infusible Ink crack or peel?</h3>
                  <p className="text-gray-600">
                    No! That's the beauty of it. The ink becomes part of the material, so there's 
                    nothing on top to crack or peel, ever.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900">Can I layer Infusible Ink?</h3>
                  <p className="text-gray-600">
                    Not really. Since the ink infuses into the material, layering doesn't work 
                    like HTV. You can layer colors in your design before cutting though.
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
                href="/guides/htv-peeling-after-washing"
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-[#9CAF88] hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900">HTV Peeling After Washing</h3>
                <p className="text-gray-600 text-sm mt-1">For when you're using iron-on instead.</p>
              </Link>
              <Link 
                href="/heat-press"
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-[#9CAF88] hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900">Heat Press Temperature Guide</h3>
                <p className="text-gray-600 text-sm mt-1">Settings for all heat transfer materials.</p>
              </Link>
              <Link 
                href="/guides/how-to-weed-vinyl"
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-[#9CAF88] hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900">How to Weed Like a Pro</h3>
                <p className="text-gray-600 text-sm mt-1">Weeding tips that work for Infusible Ink too.</p>
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
          <section className="mt-12 bg-gradient-to-r from-[#9CAF88] to-orange-500 rounded-xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">Ready to Try Infusible Ink?</h2>
            <p className="text-white/80 mb-6">
              Start with coasters — they're the most forgiving and make great gifts!
            </p>
            <Link
              href="/materials"
              className="inline-block bg-white text-[#9CAF88] font-bold py-3 px-8 rounded-full hover:bg-[#F5FAF3] transition-colors"
            >
              View Material Settings
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
