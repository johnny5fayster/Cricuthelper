import { Metadata } from 'next';
import Link from 'next/link';
import { FAQSchema, HowToSchema } from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'How to Print Then Cut on Holographic Sticker Paper (The Trick That Actually Works) | CricutHelper',
  description: 'Cricut sensor can\'t read holographic or shiny sticker paper? Learn the matte laminate workaround, reverse method, and exact settings to make holographic stickers that actually cut correctly.',
  keywords: 'holographic sticker paper cricut, print then cut holographic, cricut sensor marks holographic, shiny sticker paper cricut, holographic overlay stickers, cricut reflective paper',
  openGraph: {
    title: 'How to Print Then Cut on Holographic Sticker Paper (The Trick That Actually Works)',
    description: 'The Cricut sensor fails on holographic paper—here\'s how to work around it with two proven methods.',
    type: 'article',
  },
};

const faqData = [
  {
    question: "Why won't my Cricut cut holographic sticker paper?",
    answer: "The Cricut sensor uses infrared light to read the black registration marks around your design. Holographic, glitter, and reflective papers scatter this light unpredictably, making the sensor unable to detect the marks. This is a hardware limitation—the sensor literally cannot see the marks on shiny surfaces."
  },
  {
    question: "Can I put tape over the sensor marks on holographic paper?",
    answer: "Matte tape (like Scotch Magic Tape) can help with slightly glossy papers, but typically doesn't work well enough on true holographic paper. The holographic pattern still interferes with the sensor through the tape. The laminate-first method is more reliable for genuinely holographic materials."
  },
  {
    question: "What's the best method for holographic Cricut stickers?",
    answer: "There are two reliable methods: (1) Apply matte laminate OVER your holographic paper before printing—the sensor reads the matte laminate surface, or (2) Print on matte sticker paper first, cut it, then apply a holographic overlay/laminate after. Method 2 is more popular and gives more consistent results."
  },
  {
    question: "Does the laminate-first method damage my printer?",
    answer: "No, as long as you use laminate designed for inkjet printing (most self-adhesive laminates are). The laminate surface accepts ink just like photo paper. Make sure the laminate is fully adhered with no bubbles before printing."
  },
  {
    question: "What holographic overlay works best for Cricut stickers?",
    answer: "Self-adhesive holographic laminate sheets work best. Popular options include holographic cold laminate from Amazon, Cricut holographic vinyl (applied as overlay), or holographic self-adhesive sheets from craft stores. Avoid heat-lamination pouches—they require a laminator machine."
  },
  {
    question: "Can I use holographic printable vinyl in my Cricut?",
    answer: "Holographic printable vinyl has the same sensor problem as holographic sticker paper. You'll need to use the same workarounds: laminate-first method or print-then-overlay method. The reflective surface will always confuse the Print Then Cut sensor."
  },
  {
    question: "My Cricut says 'Please check the sensor marks' on holographic paper—what do I do?",
    answer: "This error means the sensor cannot read the registration marks due to the reflective surface. Don't keep retrying—it won't suddenly work. You need to use one of the workaround methods: apply matte laminate first, use matte paper with holographic overlay after, or use matte sticker paper and accept a non-holographic finish."
  },
  {
    question: "What settings should I use for cutting laminated sticker paper?",
    answer: "Use 'Printable Sticker Paper' as your base material, then adjust: increase pressure to 'More' or add a second cut pass. The laminate layer adds thickness that requires slightly more cutting force. Test on a small area first."
  }
];

const howToSteps = [
  { name: "Choose Your Method", text: "Decide between the laminate-first method (matte laminate over holographic paper before printing) or the print-then-overlay method (print on matte paper, apply holographic overlay after cutting)." },
  { name: "Prepare Your Materials", text: "For laminate-first: Apply matte laminate to holographic sticker paper. For print-then-overlay: Use matte printable sticker paper and have holographic overlay sheets ready." },
  { name: "Design Your Stickers", text: "Create or import your designs in Design Space. Flatten to Print Then Cut. Enable bleed for cleaner edges." },
  { name: "Print Your Design", text: "Print at 100% scale (never Fit to Page). Use 'Best' quality setting. Let ink dry 5-10 minutes before handling." },
  { name: "Apply Overlay (If Using Method 2)", text: "For print-then-overlay: Apply holographic laminate sheet over the printed design before cutting. Smooth out all bubbles." },
  { name: "Set Material and Cut", text: "Select 'Printable Sticker Paper' and increase pressure to 'More'. Load mat with printed/laminated sheet and cut." },
  { name: "Finish Your Stickers", text: "Peel stickers from backing. If using laminate-first method, your stickers are complete. For print-then-overlay, the holographic finish is already applied." }
];

export default function HolographicStickerPrintCutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <FAQSchema faqs={faqData} />
      <HowToSchema 
        name="How to Print Then Cut on Holographic Sticker Paper"
        description="Step-by-step guide to making holographic stickers with Cricut using workaround methods for the sensor limitation"
        steps={howToSteps}
        totalTime="PT30M"
      />
      
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-pink-500">Home</Link>
          <span className="mx-2">→</span>
          <Link href="/guides" className="hover:text-pink-500">Guides</Link>
          <span className="mx-2">→</span>
          <span className="text-gray-700">Holographic Sticker Print Then Cut</span>
        </nav>

        {/* Hero */}
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            How to Print Then Cut on Holographic Sticker Paper (The Trick That Actually Works)
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            You bought beautiful holographic sticker paper, printed your designs, loaded the mat... 
            and your Cricut just sits there blinking. "Please check sensor marks." Over and over. 
            Here's why it happens and exactly how to fix it.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>Updated: February 2026</span>
            <span>•</span>
            <span>15 min read</span>
            <span>•</span>
            <span>Works for: Maker, Explore Air 2, Explore 3, Maker 3</span>
          </div>
        </header>

        {/* The Problem Box */}
        <div className="bg-red-50 border-l-4 border-red-400 rounded-r-xl p-6 mb-10">
          <h2 className="text-xl font-bold text-red-800 mb-3">🚨 The Hard Truth About Holographic Paper</h2>
          <p className="text-red-700 mb-3">
            <strong>Your Cricut cannot Print Then Cut directly on holographic, glitter, or highly reflective 
            sticker paper.</strong> This isn't a settings issue or user error—it's a hardware limitation.
          </p>
          <p className="text-red-700">
            The sensor uses infrared light to read the black registration marks. Holographic surfaces 
            scatter this light chaotically, making the marks invisible to the sensor. No amount of 
            recalibration, lighting adjustment, or retry attempts will fix this.
          </p>
        </div>

        {/* The Good News */}
        <div className="bg-green-50 border-l-4 border-green-400 rounded-r-xl p-6 mb-10">
          <h2 className="text-xl font-bold text-green-800 mb-3">✅ The Good News: There Are Workarounds</h2>
          <p className="text-green-700 mb-3">
            Crafters have developed two reliable methods to get that holographic look with Print Then Cut:
          </p>
          <ul className="text-green-700 space-y-2">
            <li><strong>Method 1:</strong> Apply matte laminate OVER holographic paper BEFORE printing</li>
            <li><strong>Method 2:</strong> Print on matte paper, apply holographic overlay AFTER cutting</li>
          </ul>
          <p className="text-green-700 mt-3">
            Both work. Method 2 is more popular and gives more consistent results. We'll cover both in detail.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-10">
          <h2 className="text-lg font-bold text-gray-900 mb-3">📋 What We'll Cover</h2>
          <ul className="space-y-1 text-gray-600">
            <li><a href="#why-fails" className="hover:text-pink-500">→ Why the Sensor Fails on Holographic Paper (The Science)</a></li>
            <li><a href="#method-comparison" className="hover:text-pink-500">→ Which Method Should You Use?</a></li>
            <li><a href="#method-1" className="hover:text-pink-500">→ Method 1: Laminate-First (Matte Over Holographic)</a></li>
            <li><a href="#method-2" className="hover:text-pink-500">→ Method 2: Print-Then-Overlay (Most Popular)</a></li>
            <li><a href="#settings" className="hover:text-pink-500">→ Cricut Settings for Laminated Sticker Paper</a></li>
            <li><a href="#materials" className="hover:text-pink-500">→ Recommended Materials</a></li>
            <li><a href="#troubleshooting" className="hover:text-pink-500">→ Troubleshooting Common Problems</a></li>
            <li><a href="#faqs" className="hover:text-pink-500">→ FAQs</a></li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          
          {/* Why It Fails */}
          <section id="why-fails" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why the Sensor Fails on Holographic Paper</h2>
            <p className="text-gray-700 mb-4">
              Understanding why this happens helps you understand why certain workarounds work (and others don't).
            </p>
            
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-3">How Print Then Cut Normally Works:</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Your printer prints the design plus black registration marks</li>
                <li>The Cricut's infrared sensor shines light onto the paper</li>
                <li>The black marks absorb the light; white paper reflects it back</li>
                <li>The sensor detects this contrast and calculates mark positions</li>
                <li>The machine knows exactly where your design is and cuts accordingly</li>
              </ol>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-3">What Happens with Holographic Paper:</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>The holographic surface has microscopic prisms that scatter light in all directions</li>
                <li>When the sensor shines infrared light, it bounces back chaotically</li>
                <li>The sensor can't distinguish between the marks and the background</li>
                <li>It might detect light from completely wrong angles</li>
                <li>The machine either gives up ("check sensor marks") or cuts in the wrong place</li>
              </ol>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
              <p className="text-purple-800">
                <strong>💡 Think of it this way:</strong> Imagine trying to read a book while someone 
                shines a disco ball in your face. The words are still there, but the random light 
                patterns make them impossible to see. That's what holographic paper does to the Cricut sensor.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="font-bold text-gray-900 mb-3">Materials That Cause This Problem:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Holographic sticker paper</li>
                <li>Holographic printable vinyl</li>
                <li>Glitter sticker paper</li>
                <li>Metallic/foil papers</li>
                <li>Mirror-finish papers</li>
                <li>Iridescent materials</li>
                <li>Some glossy photo papers (depending on finish)</li>
              </ul>
            </div>
          </section>

          {/* Method Comparison */}
          <section id="method-comparison" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Which Method Should You Use?</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Method 1</span>
                  Laminate First
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Apply matte laminate over holographic paper, then print, then cut
                </p>
                <div className="space-y-2">
                  <p className="text-green-600 text-sm"><strong>✅ Pros:</strong></p>
                  <ul className="text-sm text-gray-600 space-y-1 mb-3">
                    <li>• True holographic background visible through design</li>
                    <li>• Holographic effect around the edges</li>
                    <li>• Fewer steps after printing</li>
                  </ul>
                  <p className="text-red-600 text-sm"><strong>❌ Cons:</strong></p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Matte laminate dulls holographic effect slightly</li>
                    <li>• Ink may not adhere as well to laminate</li>
                    <li>• Laminate must be perfectly smooth (bubbles = problems)</li>
                    <li>• More expensive per sticker</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-pink-300">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded text-sm">Method 2</span>
                  Print Then Overlay
                  <span className="text-xs text-pink-500 ml-auto">⭐ RECOMMENDED</span>
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Print on matte paper, apply holographic overlay, then cut
                </p>
                <div className="space-y-2">
                  <p className="text-green-600 text-sm"><strong>✅ Pros:</strong></p>
                  <ul className="text-sm text-gray-600 space-y-1 mb-3">
                    <li>• Full holographic shine over entire sticker</li>
                    <li>• More consistent results</li>
                    <li>• Better ink adhesion</li>
                    <li>• Easier to troubleshoot</li>
                    <li>• More material options</li>
                  </ul>
                  <p className="text-red-600 text-sm"><strong>❌ Cons:</strong></p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Holographic is on top, not behind design</li>
                    <li>• Extra step of applying overlay</li>
                    <li>• Must align overlay carefully</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
              <p className="text-yellow-800">
                <strong>🎯 Our Recommendation:</strong> Start with <strong>Method 2 (Print Then Overlay)</strong>. 
                It's more forgiving for beginners, gives better results, and most of the viral TikTok/Reddit 
                success stories use this method. Once you're comfortable, try Method 1 for specific designs 
                where you want the holographic effect behind the image.
              </p>
            </div>
          </section>

          {/* Method 1 */}
          <section id="method-1" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Method 1: Laminate-First (Matte Over Holographic)</h2>
            <p className="text-gray-700 mb-4">
              This method creates a sensor-readable matte surface over your holographic paper. The holographic 
              pattern shows through your design's transparent areas.
            </p>
            
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-4">What You'll Need:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Holographic sticker paper</strong> (any brand)</li>
                <li>• <strong>Matte self-adhesive laminate</strong> (must be MATTE, not glossy)</li>
                <li>• Scraper or credit card</li>
                <li>• LightGrip mat (blue)</li>
                <li>• Inkjet printer</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-4">Step-by-Step Instructions:</h3>
              <ol className="space-y-4 text-gray-700">
                <li>
                  <strong>Step 1: Apply Matte Laminate to Holographic Paper</strong>
                  <p className="text-gray-600 text-sm mt-1">
                    Cut a piece of matte laminate slightly larger than your holographic sheet. 
                    Peel the backing and carefully apply it to the holographic side (the shiny side). 
                    Work slowly from one edge, using a scraper to push out all air bubbles. 
                    The laminate MUST be perfectly smooth—any bubbles or wrinkles will show in the print.
                  </p>
                </li>
                <li>
                  <strong>Step 2: Design in Cricut Design Space</strong>
                  <p className="text-gray-600 text-sm mt-1">
                    Create your sticker designs. Keep in mind that white/light areas will show the 
                    holographic background through the matte laminate. Flatten your design to set it 
                    as Print Then Cut.
                  </p>
                </li>
                <li>
                  <strong>Step 3: Print on the Laminated Side</strong>
                  <p className="text-gray-600 text-sm mt-1">
                    Load the laminated holographic paper into your printer with the matte laminate 
                    side facing UP (this is the side the printer prints on). Print at 100% scale, 
                    best quality. The sensor marks print onto the matte surface.
                  </p>
                </li>
                <li>
                  <strong>Step 4: Let Ink Dry Completely</strong>
                  <p className="text-gray-600 text-sm mt-1">
                    This is crucial! Ink takes longer to dry on laminate than regular paper. 
                    Wait at least 10-15 minutes. Test by touching a corner—if any ink transfers 
                    to your finger, keep waiting.
                  </p>
                </li>
                <li>
                  <strong>Step 5: Load and Cut</strong>
                  <p className="text-gray-600 text-sm mt-1">
                    Place the printed sheet on your LightGrip mat, laminate side UP. 
                    Select "Sticker Paper" and set pressure to "More" (the laminate adds thickness). 
                    The sensor should now read the marks on the matte surface.
                  </p>
                </li>
              </ol>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <p className="text-red-800">
                <strong>⚠️ Common Mistakes with Method 1:</strong>
              </p>
              <ul className="text-red-700 mt-2 space-y-1 text-sm">
                <li>• Using glossy laminate instead of matte (sensor still can't read it)</li>
                <li>• Air bubbles in the laminate (causes print defects and sensor issues)</li>
                <li>• Not waiting long enough for ink to dry (smears when loading on mat)</li>
                <li>• Printing on the wrong side (laminate side is what faces up)</li>
              </ul>
            </div>
          </section>

          {/* Method 2 */}
          <section id="method-2" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Method 2: Print-Then-Overlay (The Popular Method)</h2>
            <p className="text-gray-700 mb-4">
              This is the method most crafters prefer. You print on regular matte sticker paper 
              (which works perfectly with the sensor), then apply a holographic overlay before cutting. 
              The holographic effect goes OVER your design.
            </p>
            
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-4">What You'll Need:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Matte printable sticker paper</strong> (Cricut, Online Labels, Koala, etc.)</li>
                <li>• <strong>Holographic self-adhesive laminate/overlay</strong> (various patterns available)</li>
                <li>• Scraper or credit card</li>
                <li>• LightGrip mat (blue)</li>
                <li>• Inkjet printer</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-4">Step-by-Step Instructions:</h3>
              <ol className="space-y-4 text-gray-700">
                <li>
                  <strong>Step 1: Design Your Stickers</strong>
                  <p className="text-gray-600 text-sm mt-1">
                    Create your designs in Design Space (or import from Canva, etc.). 
                    Remember that a holographic overlay will go on top, so bold colors and 
                    high contrast work best. Flatten to Print Then Cut. Enable bleed.
                  </p>
                </li>
                <li>
                  <strong>Step 2: Print on Matte Sticker Paper</strong>
                  <p className="text-gray-600 text-sm mt-1">
                    Print your designs on matte sticker paper at 100% scale, best quality. 
                    This will work normally because matte paper doesn't confuse the sensor. 
                    Let the ink dry for 5-10 minutes.
                  </p>
                </li>
                <li>
                  <strong>Step 3: Apply Holographic Overlay</strong>
                  <p className="text-gray-600 text-sm mt-1">
                    Cut a piece of holographic laminate to cover your entire printed design 
                    (including sensor marks). Peel the backing and apply it over the printed 
                    stickers, starting from one edge. Use a scraper to remove all bubbles. 
                    The overlay should cover everything including the black registration box.
                  </p>
                </li>
                <li>
                  <strong>Step 4: Load and Cut</strong>
                  <p className="text-gray-600 text-sm mt-1">
                    Place the laminated sheet on your LightGrip mat. Select "Sticker Paper" 
                    and set pressure to "More" to cut through the added laminate layer. 
                    The sensor reads through the holographic overlay to see the marks underneath.
                  </p>
                </li>
                <li>
                  <strong>Step 5: Peel Your Holographic Stickers</strong>
                  <p className="text-gray-600 text-sm mt-1">
                    Carefully remove your cut stickers from the backing. Each sticker now 
                    has a beautiful holographic finish over the design!
                  </p>
                </li>
              </ol>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
              <p className="text-green-800">
                <strong>✅ Why This Method Works:</strong> The sensor marks are printed on matte paper, 
                which the sensor reads easily. The holographic overlay is thin and transparent enough 
                that infrared light can still penetrate and read the marks underneath. It's the best 
                of both worlds!
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-blue-800">
                <strong>💡 Pro Tips for Method 2:</strong>
              </p>
              <ul className="text-blue-700 mt-2 space-y-1 text-sm">
                <li>• Choose your holographic pattern (rainbow, stars, hearts, plain holographic, etc.)</li>
                <li>• Press firmly with the scraper—bubbles under holographic film are very visible</li>
                <li>• If sensor still struggles, the overlay might be too thick—try a different brand</li>
                <li>• Trim excess overlay from the edges of your sheet before loading</li>
              </ul>
            </div>
          </section>

          {/* Settings */}
          <section id="settings" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cricut Settings for Laminated Sticker Paper</h2>
            <p className="text-gray-700 mb-4">
              Adding laminate or overlay changes the thickness of your material. Here are the 
              recommended settings:
            </p>
            
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-4">Recommended Settings</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Base Material</h4>
                  <p className="text-gray-600 text-sm">Printable Sticker Paper</p>
                  <p className="text-gray-500 text-xs mt-1">or "Sticker Paper" on older machines</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Pressure</h4>
                  <p className="text-gray-600 text-sm">More (+)</p>
                  <p className="text-gray-500 text-xs mt-1">Laminate adds thickness—need more force</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Blade</h4>
                  <p className="text-gray-600 text-sm">Fine Point Blade</p>
                  <p className="text-gray-500 text-xs mt-1">Standard blade works fine</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Mat</h4>
                  <p className="text-gray-600 text-sm">LightGrip (Blue)</p>
                  <p className="text-gray-500 text-xs mt-1">Easier to remove finished stickers</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-4">If Still Not Cutting Through:</h3>
              <ol className="space-y-2 text-gray-700">
                <li><strong>1.</strong> Try "2x" or double-cut in the settings</li>
                <li><strong>2.</strong> Create a custom material with higher pressure (320-350)</li>
                <li><strong>3.</strong> Check if your blade needs replacing (dull blades struggle with laminate)</li>
                <li><strong>4.</strong> Try "Glossy Sticker Paper" which has slightly higher default pressure</li>
              </ol>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
              <p className="text-yellow-800">
                <strong>⚠️ Test First:</strong> Always do a test cut on a corner of your material 
                before cutting the full design. Different laminate brands have different thicknesses. 
                Dial in your settings on scrap before cutting your good stickers.
              </p>
            </div>
          </section>

          {/* Materials */}
          <section id="materials" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Recommended Materials</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Matte Sticker Paper (For Method 2)</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li><strong>Cricut Printable Sticker Paper</strong> — Reliable, works great, good for testing</li>
                  <li><strong>Online Labels</strong> — Excellent quality, bulk pricing, professional results</li>
                  <li><strong>Koala Matte Sticker Paper</strong> — Budget-friendly, good for beginners</li>
                  <li><strong>Avery Printable Sticker Paper</strong> — Available at office stores</li>
                  <li><strong>HTVRONT Sticker Paper</strong> — Good Amazon option, consistent quality</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Holographic Overlay/Laminate</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li><strong>Holographic Self-Adhesive Laminate Sheets</strong> — Amazon, various patterns (stars, hearts, plain rainbow)</li>
                  <li><strong>Cricut Holographic Vinyl (as overlay)</strong> — Not printable, but works as overlay</li>
                  <li><strong>Oracal Holographic Vinyl</strong> — High quality, great rainbow effect</li>
                  <li><strong>TECKWRAP Holographic Cold Laminate</strong> — Popular on TikTok, good results</li>
                  <li><strong>PPD Holographic Laminating Sheets</strong> — Specifically for inkjet printing</li>
                </ul>
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-gray-600 text-sm">
                    <strong>Search terms for Amazon/craft stores:</strong> "holographic cold laminate sheets," 
                    "holographic self-adhesive overlay," "holographic laminating film self-adhesive"
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Matte Laminate (For Method 1)</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li><strong>Scotch Self-Seal Laminating Sheets (Matte)</strong> — Easy to find, reliable</li>
                  <li><strong>Avery Self-Adhesive Laminating Sheets</strong> — Office supply stores</li>
                  <li><strong>Any matte cold laminate</strong> — Must be self-adhesive, NOT heat laminate pouches</li>
                </ul>
                <div className="mt-4 p-3 bg-red-50 rounded-lg">
                  <p className="text-red-700 text-sm">
                    <strong>⚠️ Important:</strong> Do NOT use glossy laminate for Method 1—the sensor 
                    still won't be able to read through it!
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Holographic Sticker Paper (For Method 1)</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li><strong>Hayes Paper Co Holographic Sticker Paper</strong></li>
                  <li><strong>Koala Holographic Sticker Paper</strong></li>
                  <li><strong>Any holographic/rainbow sticker paper</strong> — Brand matters less since you're covering it with laminate</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Troubleshooting */}
          <section id="troubleshooting" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Troubleshooting Common Problems</h2>
            
            <div className="space-y-4">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">"Please check the sensor marks" even with overlay applied</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Overlay too thick:</strong> Some holographic films are too opaque. Try a thinner brand.</li>
                  <li>• <strong>Bubbles in overlay:</strong> Air bubbles scatter light. Remove overlay, reapply more carefully.</li>
                  <li>• <strong>Overlay doesn't cover marks:</strong> Laminate MUST cover the entire registration box.</li>
                  <li>• <strong>Lighting issue:</strong> Even with overlay, direct sunlight can cause problems. Move machine.</li>
                  <li>• <strong>Try standard troubleshooting:</strong> <Link href="/guides/print-then-cut-not-lining-up" className="text-pink-500 hover:underline">See our Print Then Cut alignment guide</Link></li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">Cuts not going through all layers</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Increase pressure:</strong> Set to "More" or try double-cut</li>
                  <li>• <strong>Check blade:</strong> Dull blades can't cut through laminate well</li>
                  <li>• <strong>Create custom setting:</strong> Try pressure 320-350, depth 300</li>
                  <li>• <strong>Laminate too thick:</strong> Some laminates are thicker than others</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">Ink smearing or not drying</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Wait longer:</strong> Ink on laminate takes 15+ minutes to dry</li>
                  <li>• <strong>Use correct printer settings:</strong> "Glossy Photo Paper" setting often works better for laminate</li>
                  <li>• <strong>Don't touch the printed area:</strong> Oils from fingers affect ink adhesion</li>
                  <li>• <strong>Try a different laminate:</strong> Some accept ink better than others</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">Bubbles under holographic overlay</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Work slowly:</strong> Peel backing gradually, smooth as you go</li>
                  <li>• <strong>Use a scraper:</strong> A credit card or squeegee pushes bubbles out</li>
                  <li>• <strong>Start from center:</strong> Apply center first, work outward</li>
                  <li>• <strong>Poke stubborn bubbles:</strong> Tiny needle poke, then smooth flat</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">Holographic effect looks dull</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Method 1 issue:</strong> Matte laminate naturally dulls the holographic—switch to Method 2</li>
                  <li>• <strong>Try clearer overlay:</strong> Some holographic films are more transparent than others</li>
                  <li>• <strong>Clean the overlay surface:</strong> Fingerprints dull the effect</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">Stickers peeling apart (layers separating)</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>Laminate not adhered:</strong> Press more firmly when applying</li>
                  <li>• <strong>Low-quality laminate:</strong> Cheap laminates have weak adhesive</li>
                  <li>• <strong>Applied over wet ink:</strong> Ink must be completely dry before laminating</li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section id="faqs" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Quick Summary */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Summary</h2>
            <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">The Problem:</h3>
                  <p className="text-gray-700 text-sm">
                    Cricut's sensor cannot read registration marks on holographic/reflective paper. 
                    The light scatters unpredictably, making cuts impossible or inaccurate.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">The Solution:</h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li><strong>Method 1:</strong> Matte laminate OVER holographic, then print & cut</li>
                    <li><strong>Method 2:</strong> Print on matte paper, apply holographic overlay, then cut (recommended)</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-pink-200">
                <h3 className="font-bold text-gray-900 mb-2">Key Settings:</h3>
                <p className="text-gray-700 text-sm">
                  Material: Printable Sticker Paper | Pressure: More | Mat: LightGrip | Blade: Fine Point
                </p>
              </div>
            </div>
          </section>

        </div>

        {/* Related Guides */}
        <section className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/guides/how-to-make-stickers-cricut" className="block p-4 bg-white rounded-xl border border-gray-200 hover:border-pink-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-gray-900 mb-1">How to Make Stickers with Cricut</h3>
              <p className="text-sm text-gray-600">Complete beginner guide to Print Then Cut stickers</p>
            </Link>
            <Link href="/guides/print-then-cut-not-lining-up" className="block p-4 bg-white rounded-xl border border-gray-200 hover:border-pink-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-gray-900 mb-1">Print Then Cut Not Lining Up?</h3>
              <p className="text-sm text-gray-600">9 proven fixes for alignment issues</p>
            </Link>
            <Link href="/guides/how-to-calibrate-cricut" className="block p-4 bg-white rounded-xl border border-gray-200 hover:border-pink-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-gray-900 mb-1">How to Calibrate Your Cricut</h3>
              <p className="text-sm text-gray-600">Step-by-step calibration guide for all machines</p>
            </Link>
            <Link href="/guides/cricut-blade-guide" className="block p-4 bg-white rounded-xl border border-gray-200 hover:border-pink-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-gray-900 mb-1">Cricut Blade Guide</h3>
              <p className="text-sm text-gray-600">Which blade for every material</p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Still Having Trouble?</h2>
          <p className="mb-4 opacity-90">
            Our troubleshooting wizard can help diagnose your specific Print Then Cut issue.
          </p>
          <Link 
            href="/troubleshoot" 
            className="inline-block bg-white text-pink-500 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
          >
            Start Troubleshooting →
          </Link>
        </section>
      </article>
    </main>
  );
}
