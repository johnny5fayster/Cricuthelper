import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Weed Vinyl Like a Pro: 12 Tips for Perfect Results',
  description: 'Struggling with weeding vinyl? Learn pro techniques for small letters, intricate designs, and stubborn materials. Plus the reverse weeding trick that changes everything.',
  keywords: ['weed vinyl', 'weeding vinyl tips', 'how to weed vinyl', 'weeding small letters', 'Cricut weeding', 'vinyl weeding tools', 'reverse weeding', 'weeding intricate designs'],
  openGraph: {
    title: 'How to Weed Vinyl Like a Pro: 12 Tips for Perfect Results',
    description: 'Struggling with weeding vinyl? Learn pro techniques for small letters, intricate designs, and stubborn materials.',
    type: 'article',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is weeding in Cricut?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Weeding is the process of removing the excess vinyl from around your cut design, leaving only the parts you want to transfer. You use a weeding tool (a small hook-like pick) to peel away the negative space while keeping your design intact on the backing."
      }
    },
    {
      "@type": "Question",
      "name": "Why is my vinyl so hard to weed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hard-to-weed vinyl usually means your cut settings are wrong. If the blade isn't cutting deep enough, the vinyl won't separate cleanly. Try increasing pressure or doing a second pass. Also check that your blade isn't dull and your mat is sticky enough to hold the vinyl in place."
      }
    },
    {
      "@type": "Question",
      "name": "How do you weed small letters without ruining them?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For small letters: 1) Use a light pad to see cut lines clearly, 2) Use a fine-point weeding tool or pin, 3) Weed from the back using reverse weeding technique, 4) Go slowly and work in sections, 5) Use tweezers to hold down small pieces while weeding around them."
      }
    },
    {
      "@type": "Question",
      "name": "What is reverse weeding?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Reverse weeding means applying transfer tape to your cut vinyl BEFORE weeding, then peeling away the backing paper and weeding from the back. This keeps small pieces in place and is much easier for intricate designs and tiny letters."
      }
    },
    {
      "@type": "Question",
      "name": "Do you weed vinyl before or after transfer tape?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For standard designs, weed first, then apply transfer tape. For intricate designs with small pieces, use reverse weeding: apply transfer tape first, flip it over, peel off the backing, and weed from behind. The transfer tape holds everything in place."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Weed Vinyl",
  "description": "Step-by-step guide to weeding vinyl for Cricut projects.",
  "tool": [
    {"@type": "HowToTool", "name": "Weeding tool"},
    {"@type": "HowToTool", "name": "Transfer tape"},
    {"@type": "HowToTool", "name": "Scraper"},
    {"@type": "HowToTool", "name": "Light pad (optional)"}
  ],
  "step": [
    {
      "@type": "HowToStep",
      "name": "Start at a Corner",
      "text": "Use your weeding tool to lift a corner of the excess vinyl. Start from the edge, not the middle of your design."
    },
    {
      "@type": "HowToStep",
      "name": "Peel at an Angle",
      "text": "Pull the excess vinyl away at a 45-degree angle, slowly and steadily. Don't yank or pull straight up."
    },
    {
      "@type": "HowToStep",
      "name": "Work in Sections",
      "text": "For large designs, weed in sections rather than trying to remove all excess vinyl at once."
    },
    {
      "@type": "HowToStep",
      "name": "Remove Interior Pieces",
      "text": "Use the point of your weeding tool to pop out the centers of letters (like O, A, B, D, etc.) and small interior cutouts."
    },
    {
      "@type": "HowToStep",
      "name": "Apply Transfer Tape",
      "text": "Once weeding is complete, apply transfer tape over your design, burnish well, then peel to transfer."
    }
  ]
};

export default function WeedingVinylGuide() {
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
      
      <div className="min-h-screen bg-gradient-to-b from-[#FAF8F5] to-white">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="text-sm mb-6">
            <ol className="flex items-center space-x-2 text-gray-500">
              <li><Link href="/" className="hover:text-[#9CAF88]">Home</Link></li>
              <li>/</li>
              <li><Link href="/guides" className="hover:text-[#9CAF88]">Guides</Link></li>
              <li>/</li>
              <li className="text-gray-900">How to Weed Vinyl</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                Technique
              </span>
              <span className="text-gray-500 text-sm">Updated February 2025</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Weed Vinyl Like a Pro: 12 Tips for Perfect Results
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Weeding doesn't have to be frustrating. Whether you're dealing with tiny letters, 
              intricate designs, or stubborn vinyl, these techniques will save your sanity.
            </p>
          </header>

          {/* Quick Tips Box */}
          <div className="bg-gradient-to-r from-purple-100 to-[#F5FAF3] rounded-xl p-6 mb-8 border-l-4 border-purple-500">
            <h2 className="font-bold text-lg text-gray-900 mb-3">⚡ Quick Weeding Wins</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-purple-600">•</span>
                <span><strong>Warm it up</strong> — Heat makes vinyl more pliable and easier to weed</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600">•</span>
                <span><strong>Use a light pad</strong> — See every cut line, even on dark vinyl</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600">•</span>
                <span><strong>Try reverse weeding</strong> — Game changer for small letters (see below)</span>
              </li>
            </ul>
          </div>

          {/* Table of Contents */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="font-bold text-lg mb-4">📋 In This Guide</h2>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#basics" className="text-[#9CAF88] hover:underline">→ Weeding basics (if you're new)</a></li>
              <li><a href="#tools" className="text-[#9CAF88] hover:underline">→ Essential tools</a></li>
              <li><a href="#techniques" className="text-[#9CAF88] hover:underline">→ 12 pro techniques</a></li>
              <li><a href="#reverse-weeding" className="text-[#9CAF88] hover:underline">→ Reverse weeding tutorial</a></li>
              <li><a href="#troubleshooting" className="text-[#9CAF88] hover:underline">→ Troubleshooting common problems</a></li>
            </ul>
          </div>

          {/* Main Content */}
          <article className="prose prose-lg max-w-none">
            
            {/* Basics Section */}
            <section id="basics" className="mb-10 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900">What is Weeding?</h2>
              <p>
                Weeding is removing the parts of vinyl you <em>don't</em> want. After your Cricut cuts 
                a design, you're left with a sheet that has cut lines but everything's still attached. 
                Weeding is peeling away the negative space to leave just your design.
              </p>
              <p>
                Think of it like a sticker sheet — you're removing everything except the stickers you want to use.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-4 my-4">
                <h3 className="font-bold text-gray-900 mb-2">Basic Weeding Steps:</h3>
                <ol className="list-decimal list-inside space-y-1 text-gray-700">
                  <li>Use weeding tool to lift corner of excess vinyl</li>
                  <li>Peel away excess at 45° angle</li>
                  <li>Pop out centers of letters (O, A, B, D, R, etc.)</li>
                  <li>Remove any small interior pieces</li>
                  <li>Apply transfer tape when done</li>
                </ol>
              </div>
            </section>

            {/* Tools Section */}
            <section id="tools" className="mb-10 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900">Essential Weeding Tools</h2>
              
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900">🪝 Weeding Tool</h3>
                  <p className="text-gray-600 text-sm">
                    The hook-shaped pick that comes with most Cricut tool sets. Essential for lifting 
                    vinyl edges and popping out small pieces.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900">🔦 Light Pad</h3>
                  <p className="text-gray-600 text-sm">
                    A backlit surface that makes cut lines visible through vinyl. The Cricut BrightPad 
                    works, or any LED tracing pad.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900">🥢 Fine-Tip Tweezers</h3>
                  <p className="text-gray-600 text-sm">
                    For grabbing tiny pieces and holding down small letters while weeding around them.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900">📌 Straight Pin</h3>
                  <p className="text-gray-600 text-sm">
                    For ultra-fine detail work. Sometimes better than a weeding tool for microscopic pieces.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-4">
                <p className="text-blue-800">
                  <strong>💡 Pro tip:</strong> The weeding tool angle matters. A steep hook (like Cricut's) 
                  is great for lifting edges. A spear-shaped tool is better for stabbing and removing tiny centers.
                </p>
              </div>
            </section>

            {/* 12 Techniques */}
            <section id="techniques" className="mb-10 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900">12 Pro Weeding Techniques</h2>

              <div className="space-y-6 my-6">
                <div className="bg-white border-l-4 border-purple-500 pl-4 py-2">
                  <h3 className="font-bold text-gray-900">1. Always Start from the Outside</h3>
                  <p className="text-gray-600">
                    Begin weeding from an outside corner or edge, not from the middle of your design. 
                    This prevents accidentally lifting pieces you want to keep.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-purple-500 pl-4 py-2">
                  <h3 className="font-bold text-gray-900">2. Peel at a 45° Angle</h3>
                  <p className="text-gray-600">
                    Pull excess vinyl away at a 45-degree angle — not straight up. This reduces the 
                    chance of lifting your design pieces and gives you more control.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-purple-500 pl-4 py-2">
                  <h3 className="font-bold text-gray-900">3. Work in Sections</h3>
                  <p className="text-gray-600">
                    For large designs, don't try to weed everything at once. Work in small sections, 
                    removing excess vinyl piece by piece.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-purple-500 pl-4 py-2">
                  <h3 className="font-bold text-gray-900">4. Warm It Up</h3>
                  <p className="text-gray-600">
                    Slightly warm vinyl is easier to weed. Use a heat gun on low, a hair dryer, or 
                    even leave the vinyl in sunlight for a few minutes. Don't overdo it — warm, not hot.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-purple-500 pl-4 py-2">
                  <h3 className="font-bold text-gray-900">5. Use a Light Pad for Dark Vinyl</h3>
                  <p className="text-gray-600">
                    Can't see your cut lines? Place vinyl on a light pad or hold it up to a window. 
                    The light shines through the cuts, making them visible.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-purple-500 pl-4 py-2">
                  <h3 className="font-bold text-gray-900">6. Pop Centers Before Removing Surround</h3>
                  <p className="text-gray-600">
                    For letters with centers (O, A, D, P, Q, R, B), pop out the center pieces BEFORE 
                    removing the vinyl around the letter. Easier to control.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-purple-500 pl-4 py-2">
                  <h3 className="font-bold text-gray-900">7. Hold Down Small Pieces</h3>
                  <p className="text-gray-600">
                    When weeding around tiny letters or details, use tweezers or your finger to hold 
                    them down while peeling away the surrounding excess.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-purple-500 pl-4 py-2">
                  <h3 className="font-bold text-gray-900">8. Go Slow Near Details</h3>
                  <p className="text-gray-600">
                    Speed up on large open areas, slow down near intricate sections. Rushing near 
                    small pieces is how designs get ruined.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-purple-500 pl-4 py-2">
                  <h3 className="font-bold text-gray-900">9. Use Transfer Tape for Stability</h3>
                  <p className="text-gray-600">
                    If pieces keep lifting, apply transfer tape over your partially-weeded design. 
                    It holds everything in place while you finish.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-purple-500 pl-4 py-2">
                  <h3 className="font-bold text-gray-900">10. Try Reverse Weeding for Intricate Designs</h3>
                  <p className="text-gray-600">
                    Apply transfer tape FIRST, flip it over, remove the backing, and weed from behind. 
                    This keeps small pieces locked in place. (Full tutorial below!)
                  </p>
                </div>

                <div className="bg-white border-l-4 border-purple-500 pl-4 py-2">
                  <h3 className="font-bold text-gray-900">11. Check Your Cut Settings</h3>
                  <p className="text-gray-600">
                    If vinyl won't separate cleanly, the problem might be your cut, not your weeding. 
                    Increase pressure or do a second pass for cleaner cuts.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-purple-500 pl-4 py-2">
                  <h3 className="font-bold text-gray-900">12. Use the Stab-and-Lift Technique</h3>
                  <p className="text-gray-600">
                    For stubborn tiny pieces, stab the center with your weeding tool, then lift 
                    straight up. Creates a little "flag" you can grab.
                  </p>
                </div>
              </div>
            </section>

            {/* Reverse Weeding Tutorial */}
            <section id="reverse-weeding" className="mb-10 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900">🔄 Reverse Weeding Tutorial</h2>
              <p>
                Reverse weeding is a game-changer for intricate designs, tiny letters, and anything 
                that would normally be a nightmare to weed. Here's exactly how to do it:
              </p>

              <div className="bg-gradient-to-r from-purple-50 to-[#FAF8F5] rounded-xl p-6 my-6">
                <h3 className="font-bold text-xl text-gray-900 mb-4">Step-by-Step Reverse Weeding</h3>
                
                <ol className="list-decimal list-inside space-y-4 text-gray-700">
                  <li>
                    <strong>Cut your design as normal</strong> — Don't weed yet!
                  </li>
                  <li>
                    <strong>Apply transfer tape directly over the cut vinyl</strong> — Burnish well 
                    with a scraper so everything sticks to the transfer tape.
                  </li>
                  <li>
                    <strong>Flip the whole thing over</strong> — You're now looking at the back of 
                    the vinyl backing paper.
                  </li>
                  <li>
                    <strong>Peel off the backing paper</strong> — Your design is now stuck to the 
                    transfer tape, with the adhesive side facing you.
                  </li>
                  <li>
                    <strong>Weed from behind</strong> — Push the excess vinyl away from the back. 
                    Small pieces stay locked to the transfer tape.
                  </li>
                  <li>
                    <strong>Apply as normal</strong> — Place design on surface, burnish, peel transfer tape.
                  </li>
                </ol>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4 my-4">
                <p className="text-green-800">
                  <strong>✅ Why this works:</strong> The transfer tape holds all your design pieces 
                  in place from the front while you push away excess from the back. No more chasing 
                  tiny letters around or accidentally lifting pieces.
                </p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 my-4">
                <p className="text-yellow-800">
                  <strong>⚠️ Best for:</strong> Intricate designs, small text, distressed fonts, 
                  thin script, anything with lots of tiny pieces. Not necessary for simple large designs.
                </p>
              </div>
            </section>

            {/* Troubleshooting */}
            <section id="troubleshooting" className="mb-10 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900">Troubleshooting Weeding Problems</h2>

              <div className="space-y-6 my-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900">❌ Vinyl won't separate at all</h3>
                  <p className="text-gray-600">
                    <strong>Fix:</strong> Your blade isn't cutting deep enough. Increase pressure, 
                    check blade sharpness, or do a second pass. The vinyl should lift cleanly along cut lines.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900">❌ Design lifts up with the excess</h3>
                  <p className="text-gray-600">
                    <strong>Fix:</strong> Mat isn't sticky enough, or you're pulling at the wrong angle. 
                    Peel slowly at 45° and hold down pieces with tweezers. Or try reverse weeding.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900">❌ Small letters keep coming off</h3>
                  <p className="text-gray-600">
                    <strong>Fix:</strong> Make letters larger (at least 0.5" for most fonts), use a 
                    bolder font, or use reverse weeding. Some fonts just won't work at tiny sizes.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900">❌ Can't see the cut lines</h3>
                  <p className="text-gray-600">
                    <strong>Fix:</strong> Use a light pad, hold vinyl up to a window, or add a 
                    weeding box/border around your design in Design Space before cutting.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900">❌ Vinyl is stretching while weeding</h3>
                  <p className="text-gray-600">
                    <strong>Fix:</strong> You're pulling too hard or the vinyl is too warm. Work more 
                    gently and let vinyl cool if you've been heating it.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900">❌ Centers of letters won't pop out</h3>
                  <p className="text-gray-600">
                    <strong>Fix:</strong> Use the tip of your weeding tool to stab into the center, 
                    then lift. Or try a straight pin for better control on tiny centers.
                  </p>
                </div>
              </div>
            </section>

            {/* Minimum Sizes */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900">Font Size Guidelines</h2>
              <p>
                Some fonts just don't work at small sizes. Here are rough minimums for weedable text:
              </p>
              
              <div className="overflow-x-auto my-4">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">Font Style</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Min Height</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Bold sans-serif</td>
                      <td className="border border-gray-300 px-4 py-2">0.25"</td>
                      <td className="border border-gray-300 px-4 py-2">Easiest to weed</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Regular sans-serif</td>
                      <td className="border border-gray-300 px-4 py-2">0.4"</td>
                      <td className="border border-gray-300 px-4 py-2">Watch thin strokes</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Serif fonts</td>
                      <td className="border border-gray-300 px-4 py-2">0.5"</td>
                      <td className="border border-gray-300 px-4 py-2">Serifs can break off</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Script fonts</td>
                      <td className="border border-gray-300 px-4 py-2">0.75"</td>
                      <td className="border border-gray-300 px-4 py-2">Thin connectors need height</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Distressed/grunge</td>
                      <td className="border border-gray-300 px-4 py-2">1"+</td>
                      <td className="border border-gray-300 px-4 py-2">Nightmare at small sizes</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 my-4">
                <p className="text-purple-800">
                  <strong>💡 Pro tip:</strong> If you MUST use a thin font at small sizes, try it 
                  in HTV instead of adhesive vinyl. HTV is easier to weed because it's bonded to 
                  a stable carrier sheet.
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
              
              <div className="space-y-6 mt-4">
                <div>
                  <h3 className="font-bold text-gray-900">What is weeding in Cricut?</h3>
                  <p className="text-gray-600">
                    Weeding is removing the excess vinyl from around your cut design, leaving only 
                    the parts you want to transfer to your surface.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900">Why is my vinyl so hard to weed?</h3>
                  <p className="text-gray-600">
                    Usually a cutting issue — blade not deep enough or dull. Check cut settings, 
                    increase pressure, replace blade if needed.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900">Is it easier to weed HTV or adhesive vinyl?</h3>
                  <p className="text-gray-600">
                    HTV is generally easier because it's bonded to a carrier sheet that keeps 
                    everything stable. Adhesive vinyl's backing can be more slippery.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900">Can I use a regular pin for weeding?</h3>
                  <p className="text-gray-600">
                    Yes! A straight pin works great for tiny details that are too small for a 
                    standard weeding tool.
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
                <h3 className="font-bold text-gray-900">Cricut Not Cutting Vinyl Properly</h3>
                <p className="text-gray-600 text-sm mt-1">Fix cutting issues before they become weeding nightmares.</p>
              </Link>
              <Link 
                href="/guides/htv-peeling-after-washing"
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-[#9CAF88] hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900">HTV Peeling After Washing</h3>
                <p className="text-gray-600 text-sm mt-1">Make sure your weeded HTV stays on the shirt.</p>
              </Link>
              <Link 
                href="/guides/cricut-mat-not-sticky"
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-[#9CAF88] hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900">Mat Not Sticky?</h3>
                <p className="text-gray-600 text-sm mt-1">A slipping mat makes weeding harder. Fix it.</p>
              </Link>
              <Link 
                href="/materials"
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-[#9CAF88] hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900">Material Settings Database</h3>
                <p className="text-gray-600 text-sm mt-1">Get the right cut settings for cleaner weeding.</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-12 bg-gradient-to-r from-purple-500 to-[#6B7F5E] rounded-xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">Still Having Trouble?</h2>
            <p className="text-purple-100 mb-6">
              If weeding is a nightmare, the problem might be with your cut. Our troubleshooting 
              wizard can diagnose cutting issues.
            </p>
            <Link
              href="/troubleshoot"
              className="inline-block bg-white text-purple-600 font-bold py-3 px-8 rounded-full hover:bg-purple-50 transition-colors"
            >
              Start Troubleshooting
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
