import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Use Transfer Tape: Complete Guide for Vinyl Decals',
  description: 'Master transfer tape for perfect vinyl applications. Step-by-step tutorial plus fixes for bubbles, sticking issues, and mistakes.',
  keywords: ['transfer tape', 'how to use transfer tape', 'vinyl transfer tape', 'Cricut transfer tape', 'transfer tape tutorial', 'vinyl decal application', 'transfer paper vinyl'],
  openGraph: {
    title: 'How to Use Transfer Tape: Complete Guide for Vinyl Decals',
    description: 'Master transfer tape for perfect vinyl applications. Step-by-step tutorial plus fixes for common problems.',
    type: 'article',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is transfer tape used for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Transfer tape is used to move adhesive vinyl from its backing paper to your project surface. It picks up your weeded design, keeps all the pieces aligned, and allows you to apply the entire design at once rather than placing each piece individually."
      }
    },
    {
      "@type": "Question",
      "name": "Do you use transfer tape on HTV/iron-on vinyl?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. HTV (heat transfer vinyl) already comes on a carrier sheet that acts like transfer tape. You don't need (and shouldn't use) additional transfer tape with iron-on vinyl."
      }
    },
    {
      "@type": "Question",
      "name": "Why won't my vinyl stick to transfer tape?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Usually the transfer tape isn't sticky enough or you didn't burnish well enough. Try pressing harder with your scraper, use a stickier transfer tape, or lightly mist the vinyl backing with water before applying transfer tape."
      }
    },
    {
      "@type": "Question",
      "name": "Can I reuse transfer tape?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Transfer tape can be reused multiple times until it loses its tack. Just stick it back on its backing paper between uses to keep it clean and sticky."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between transfer tape and transfer paper?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Transfer tape is clear with a grid, best for precise placement. Transfer paper is opaque white, slightly less sticky, and better for textured vinyl like glitter vinyl. Both do the same job."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Use Transfer Tape with Vinyl",
  "description": "Step-by-step guide to applying vinyl decals using transfer tape.",
  "tool": [
    {"@type": "HowToTool", "name": "Transfer tape"},
    {"@type": "HowToTool", "name": "Scraper or credit card"},
    {"@type": "HowToTool", "name": "Scissors"},
    {"@type": "HowToTool", "name": "Rubbing alcohol (for cleaning)"}
  ],
  "step": [
    {
      "@type": "HowToStep",
      "name": "Weed Your Design",
      "text": "Remove all excess vinyl around your design, leaving only the pieces you want to apply."
    },
    {
      "@type": "HowToStep",
      "name": "Cut Transfer Tape",
      "text": "Cut a piece of transfer tape slightly larger than your design."
    },
    {
      "@type": "HowToStep",
      "name": "Apply Transfer Tape",
      "text": "Peel backing from transfer tape and lay it over your weeded design. Burnish firmly with a scraper."
    },
    {
      "@type": "HowToStep",
      "name": "Remove Backing",
      "text": "Slowly peel away the vinyl backing paper at a 45-degree angle. The design should stick to the transfer tape."
    },
    {
      "@type": "HowToStep",
      "name": "Apply to Surface",
      "text": "Position design on cleaned surface, press down, and burnish from center outward."
    },
    {
      "@type": "HowToStep",
      "name": "Remove Transfer Tape",
      "text": "Slowly peel transfer tape away at 45-degree angle. Vinyl should stay on surface."
    }
  ]
};

export default function TransferTapeGuide() {
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
              <li className="text-gray-900">Transfer Tape</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">
                Technique
              </span>
              <span className="text-gray-500 text-sm">Updated February 2025</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Use Transfer Tape: Complete Guide for Vinyl Decals
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Transfer tape is the bridge between your cutting mat and your finished project. Here's 
              how to use it perfectly every time — plus fixes for when things go wrong.
            </p>
          </header>

          {/* Quick Tip Box */}
          <div className="bg-gradient-to-r from-teal-100 to-cyan-100 rounded-xl p-6 mb-8 border-l-4 border-teal-500">
            <h2 className="font-bold text-lg text-gray-900 mb-3">⚡ Transfer Tape Basics</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-teal-600">✓</span>
                <span>Use for <strong>adhesive vinyl only</strong> (NOT for HTV/iron-on)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600">✓</span>
                <span>Always burnish firmly — most problems come from not pressing hard enough</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600">✓</span>
                <span>Peel at 45° angle, slowly — never yank straight up</span>
              </li>
            </ul>
          </div>

          {/* Table of Contents */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="font-bold text-lg mb-4">📋 In This Guide</h2>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#what-is" className="text-[#9CAF88] hover:underline">→ What is transfer tape?</a></li>
              <li><a href="#types" className="text-[#9CAF88] hover:underline">→ Types of transfer tape</a></li>
              <li><a href="#step-by-step" className="text-[#9CAF88] hover:underline">→ Step-by-step tutorial</a></li>
              <li><a href="#problems" className="text-[#9CAF88] hover:underline">→ Troubleshooting common problems</a></li>
              <li><a href="#tips" className="text-[#9CAF88] hover:underline">→ Pro tips</a></li>
            </ul>
          </div>

          {/* Main Content */}
          <article className="prose prose-lg max-w-none">
            
            {/* What Is Section */}
            <section id="what-is" className="mb-10 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900">What is Transfer Tape?</h2>
              <p>
                Transfer tape is a sticky sheet (or roll) that picks up your weeded vinyl design and 
                transfers it to your project surface. Without it, you'd have to place each tiny piece 
                of vinyl individually — nightmare!
              </p>
              <p>
                Think of it as a carrier that keeps your whole design together and aligned while you 
                move it from the backing paper to the final surface.
              </p>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 my-4">
                <p className="text-yellow-800">
                  <strong>⚠️ Important:</strong> Transfer tape is ONLY for adhesive vinyl (permanent and 
                  removable). Do NOT use it for HTV/iron-on vinyl — that already has a carrier sheet built in.
                </p>
              </div>
            </section>

            {/* Types Section */}
            <section id="types" className="mb-10 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900">Types of Transfer Tape</h2>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900">Clear Transfer Tape (with grid)</h3>
                  <ul className="text-gray-600 text-sm space-y-1 mt-2">
                    <li>• See-through for precise placement</li>
                    <li>• Grid lines help with alignment</li>
                    <li>• Medium tack — good for most vinyl</li>
                    <li>• Best for: Most projects, multi-color layering</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900">Transfer Paper (white/opaque)</h3>
                  <ul className="text-gray-600 text-sm space-y-1 mt-2">
                    <li>• Lower tack than clear tape</li>
                    <li>• Better for textured vinyl (glitter)</li>
                    <li>• Can write notes on it</li>
                    <li>• Best for: Glitter vinyl, delicate designs</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900">Strong Grip Transfer Tape</h3>
                  <ul className="text-gray-600 text-sm space-y-1 mt-2">
                    <li>• Extra sticky for stubborn vinyl</li>
                    <li>• Good for thick/outdoor vinyl</li>
                    <li>• Can be TOO sticky for thin vinyl</li>
                    <li>• Best for: Thick vinyl, oracal 651</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900">Painter's Tape (budget hack)</h3>
                  <ul className="text-gray-600 text-sm space-y-1 mt-2">
                    <li>• Works in a pinch</li>
                    <li>• Very low tack</li>
                    <li>• May need multiple overlapping pieces</li>
                    <li>• Best for: Quick projects, testing</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Step by Step Section */}
            <section id="step-by-step" className="mb-10 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900">Step-by-Step Tutorial</h2>

              <div className="space-y-6 my-6">
                {/* Step 1 */}
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500">
                  <h3 className="font-bold text-xl text-gray-900 flex items-center gap-2">
                    <span className="bg-teal-500 text-white w-8 h-8 rounded-full flex items-center justify-center">1</span>
                    Weed Your Design
                  </h3>
                  <p className="text-gray-700 mt-2">
                    Remove all excess vinyl from around and inside your design. Leave only the pieces 
                    you want on the final project. Your design should still be on its original backing paper.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500">
                  <h3 className="font-bold text-xl text-gray-900 flex items-center gap-2">
                    <span className="bg-teal-500 text-white w-8 h-8 rounded-full flex items-center justify-center">2</span>
                    Cut Your Transfer Tape
                  </h3>
                  <p className="text-gray-700 mt-2">
                    Cut a piece of transfer tape about 1 inch larger than your design on all sides. 
                    This gives you something to hold onto and room for adjustment.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500">
                  <h3 className="font-bold text-xl text-gray-900 flex items-center gap-2">
                    <span className="bg-teal-500 text-white w-8 h-8 rounded-full flex items-center justify-center">3</span>
                    Apply Transfer Tape to Vinyl
                  </h3>
                  <p className="text-gray-700 mt-2">
                    Peel the backing off your transfer tape. Starting from one edge, slowly lay it 
                    down over your weeded design, smoothing as you go to avoid bubbles.
                  </p>
                  <p className="text-gray-600 text-sm mt-2">
                    💡 <strong>Tip:</strong> Use a hinge method — tape one edge down, then lower the rest like closing a book.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500">
                  <h3 className="font-bold text-xl text-gray-900 flex items-center gap-2">
                    <span className="bg-teal-500 text-white w-8 h-8 rounded-full flex items-center justify-center">4</span>
                    Burnish Thoroughly
                  </h3>
                  <p className="text-gray-700 mt-2">
                    Use a scraper, credit card, or brayer to firmly press the transfer tape onto the 
                    vinyl. Go over the entire design multiple times, pressing hard.
                  </p>
                  <p className="text-gray-600 text-sm mt-2">
                    💡 <strong>This step is crucial!</strong> Most transfer problems come from not burnishing enough.
                  </p>
                </div>

                {/* Step 5 */}
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500">
                  <h3 className="font-bold text-xl text-gray-900 flex items-center gap-2">
                    <span className="bg-teal-500 text-white w-8 h-8 rounded-full flex items-center justify-center">5</span>
                    Flip and Burnish Again
                  </h3>
                  <p className="text-gray-700 mt-2">
                    Turn the whole thing over and burnish from the back (the vinyl backing paper side). 
                    This helps the vinyl release from its backing.
                  </p>
                </div>

                {/* Step 6 */}
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500">
                  <h3 className="font-bold text-xl text-gray-900 flex items-center gap-2">
                    <span className="bg-teal-500 text-white w-8 h-8 rounded-full flex items-center justify-center">6</span>
                    Peel Off Backing Paper
                  </h3>
                  <p className="text-gray-700 mt-2">
                    Slowly peel the vinyl backing paper away at a 45-degree angle. The vinyl design 
                    should stick to the transfer tape. If pieces lift with the backing, lay it back 
                    down and burnish more.
                  </p>
                </div>

                {/* Step 7 */}
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500">
                  <h3 className="font-bold text-xl text-gray-900 flex items-center gap-2">
                    <span className="bg-teal-500 text-white w-8 h-8 rounded-full flex items-center justify-center">7</span>
                    Clean Your Surface
                  </h3>
                  <p className="text-gray-700 mt-2">
                    Before applying, clean the target surface with rubbing alcohol (for glass, plastic, 
                    metal) or a damp cloth (for painted surfaces). Let it dry completely.
                  </p>
                </div>

                {/* Step 8 */}
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500">
                  <h3 className="font-bold text-xl text-gray-900 flex items-center gap-2">
                    <span className="bg-teal-500 text-white w-8 h-8 rounded-full flex items-center justify-center">8</span>
                    Apply to Surface
                  </h3>
                  <p className="text-gray-700 mt-2">
                    Position your design on the surface. Once placed, press down from the center and 
                    work outward to push out air bubbles. Burnish the entire design firmly.
                  </p>
                </div>

                {/* Step 9 */}
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border-l-4 border-teal-500">
                  <h3 className="font-bold text-xl text-gray-900 flex items-center gap-2">
                    <span className="bg-teal-500 text-white w-8 h-8 rounded-full flex items-center justify-center">9</span>
                    Remove Transfer Tape
                  </h3>
                  <p className="text-gray-700 mt-2">
                    Slowly peel the transfer tape away at a 45-degree angle. Go slow! If any vinyl 
                    lifts with the tape, press it back down and try again.
                  </p>
                  <p className="text-gray-600 text-sm mt-2">
                    💡 <strong>For stubborn tape:</strong> Use a hairdryer on low to warm it slightly — helps release.
                  </p>
                </div>
              </div>
            </section>

            {/* Troubleshooting Section */}
            <section id="problems" className="mb-10 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900">Troubleshooting Common Problems</h2>

              <div className="space-y-4 my-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900">❌ Vinyl won't stick to transfer tape</h3>
                  <p className="text-gray-600 text-sm mb-2">The vinyl stays on its backing when you peel.</p>
                  <p className="text-gray-800">
                    <strong>Fix:</strong> Burnish harder and longer. If still failing, your transfer tape may 
                    not be sticky enough — try a stronger grip version, or lightly mist the vinyl backing 
                    with water before applying transfer tape.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900">❌ Vinyl won't release from transfer tape</h3>
                  <p className="text-gray-600 text-sm mb-2">The vinyl comes up with the tape when you remove it.</p>
                  <p className="text-gray-800">
                    <strong>Fix:</strong> Your transfer tape is too sticky for this vinyl. Try using paper 
                    tape instead, or "de-tack" your transfer tape by pressing it against your shirt a few 
                    times first. Also try warming the tape slightly with a hairdryer.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900">❌ Air bubbles under the vinyl</h3>
                  <p className="text-gray-600 text-sm mb-2">Little pockets of air trapped beneath.</p>
                  <p className="text-gray-800">
                    <strong>Fix:</strong> Use a pin to poke a tiny hole in the bubble, then press flat. 
                    Prevent bubbles by burnishing from center outward and applying slowly.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900">❌ Design shifted during application</h3>
                  <p className="text-gray-600 text-sm mb-2">Pieces moved out of alignment.</p>
                  <p className="text-gray-800">
                    <strong>Fix:</strong> Use the hinge method — tape down one edge of the design, position 
                    perfectly, then lower the rest. This prevents shifting. For permanent vinyl on 
                    non-porous surfaces, you may be able to lift and reposition quickly.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900">❌ Transfer tape won't lay flat</h3>
                  <p className="text-gray-600 text-sm mb-2">The tape keeps curling or wrinkling.</p>
                  <p className="text-gray-800">
                    <strong>Fix:</strong> Cut a smaller piece. Apply from one end to the other (hinge method) 
                    rather than trying to lay down all at once. Store your transfer tape properly to 
                    prevent curling.
                  </p>
                </div>
              </div>
            </section>

            {/* Pro Tips Section */}
            <section id="tips" className="mb-10 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900">Pro Tips</h2>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-teal-50 rounded-lg p-4 border-l-4 border-teal-500">
                  <h3 className="font-bold text-gray-900">♻️ Reuse Your Transfer Tape</h3>
                  <p className="text-gray-700 text-sm">
                    Transfer tape can be used multiple times! Stick it back on its backing between 
                    uses. Replace when it stops picking up vinyl.
                  </p>
                </div>

                <div className="bg-teal-50 rounded-lg p-4 border-l-4 border-teal-500">
                  <h3 className="font-bold text-gray-900">👕 De-tack on Your Shirt</h3>
                  <p className="text-gray-700 text-sm">
                    If transfer tape is too sticky, press it against your cotton t-shirt a few times. 
                    The fabric fibers reduce the tack.
                  </p>
                </div>

                <div className="bg-teal-50 rounded-lg p-4 border-l-4 border-teal-500">
                  <h3 className="font-bold text-gray-900">🎯 Use the Grid</h3>
                  <p className="text-gray-700 text-sm">
                    Clear transfer tape with grid lines is amazing for centering designs. Use the 
                    lines to align with edges of your project surface.
                  </p>
                </div>

                <div className="bg-teal-50 rounded-lg p-4 border-l-4 border-teal-500">
                  <h3 className="font-bold text-gray-900">📏 Wet Application Method</h3>
                  <p className="text-gray-700 text-sm">
                    For large decals, mist the surface with soapy water. Apply vinyl, slide into 
                    position, then squeegee out water. Allows repositioning.
                  </p>
                </div>

                <div className="bg-teal-50 rounded-lg p-4 border-l-4 border-teal-500">
                  <h3 className="font-bold text-gray-900">⏰ Wait Before Removing</h3>
                  <p className="text-gray-700 text-sm">
                    After applying to surface, wait 1-2 minutes before removing transfer tape. Gives 
                    the vinyl adhesive time to bond.
                  </p>
                </div>

                <div className="bg-teal-50 rounded-lg p-4 border-l-4 border-teal-500">
                  <h3 className="font-bold text-gray-900">🌡️ Temperature Matters</h3>
                  <p className="text-gray-700 text-sm">
                    Transfer tape works better at room temperature. Cold tape is stiffer and less 
                    tacky. Warm it slightly if needed.
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
              
              <div className="space-y-6 mt-4">
                <div>
                  <h3 className="font-bold text-gray-900">What is transfer tape used for?</h3>
                  <p className="text-gray-600">
                    Transfer tape moves your weeded vinyl design from its backing paper to your project 
                    surface while keeping all pieces aligned.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900">Do I need transfer tape for HTV/iron-on?</h3>
                  <p className="text-gray-600">
                    No! HTV already has a carrier sheet. You only need transfer tape for adhesive vinyl 
                    (permanent and removable).
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900">Can I use packing tape or masking tape instead?</h3>
                  <p className="text-gray-600">
                    In a pinch, painter's tape or wide masking tape can work for simple designs. Packing 
                    tape is usually too sticky and can damage vinyl.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900">How long does transfer tape last?</h3>
                  <p className="text-gray-600">
                    A single piece can be reused 3-5 times typically. Rolls last years if stored 
                    properly (cool, dry place with the backing on).
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
                <p className="text-gray-600 text-sm mt-1">Fix cutting issues before you get to transfer.</p>
              </Link>
              <Link 
                href="/guides/how-to-weed-vinyl"
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-[#9CAF88] hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900">How to Weed Vinyl Like a Pro</h3>
                <p className="text-gray-600 text-sm mt-1">Weeding happens before transfer tape.</p>
              </Link>
              <Link 
                href="/guides/htv-peeling-after-washing"
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-[#9CAF88] hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900">HTV Peeling After Washing</h3>
                <p className="text-gray-600 text-sm mt-1">For iron-on projects (no transfer tape needed).</p>
              </Link>
              <Link 
                href="/materials"
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-[#9CAF88] hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900">Material Settings Database</h3>
                <p className="text-gray-600 text-sm mt-1">Find the right settings for any vinyl.</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">Having Vinyl Problems?</h2>
            <p className="text-teal-100 mb-6">
              Transfer tape is just one piece of the puzzle. Our troubleshooting wizard can diagnose 
              any vinyl issue.
            </p>
            <Link
              href="/troubleshoot"
              className="inline-block bg-white text-teal-600 font-bold py-3 px-8 rounded-full hover:bg-teal-50 transition-colors"
            >
              Start Troubleshooting
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
