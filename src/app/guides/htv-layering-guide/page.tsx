import { Metadata } from 'next';
import Link from 'next/link';
import { FAQSchema, HowToSchema } from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'HTV Layering Guide: How to Layer Iron-On Vinyl Like a Pro [2026]',
  description: 'Master HTV layering with our complete guide. Learn the correct order, temperatures, timing, and pro tips for multi-color iron-on vinyl designs that last.',
  keywords: 'htv layering, layer iron on vinyl, multi color htv, layering heat transfer vinyl, cricut htv layers, how to layer vinyl',
  openGraph: {
    title: 'HTV Layering Guide: How to Layer Iron-On Vinyl Like a Pro',
    description: 'Complete guide to layering HTV for multi-color designs. Temperature settings, order of operations, and troubleshooting tips.',
    type: 'article',
  },
};

const faqData = [
  {
    question: "Can you layer HTV on top of HTV?",
    answer: "Yes! You can layer HTV on top of HTV to create multi-color designs. The key is using the right temperature (about 10-15°F lower for the second layer), pressing for less time (5-7 seconds vs 10-15), and layering from bottom to top. Most standard HTV brands can handle 2-3 layers."
  },
  {
    question: "What order do you layer HTV?",
    answer: "Layer HTV from bottom to top: apply the largest/background layer first, then add smaller detail layers on top. When cutting, mirror each layer and use registration marks to align them. Always press the bottom layer first, let it cool, then add the next layer."
  },
  {
    question: "Do you have to let HTV cool between layers?",
    answer: "Yes, always let each layer cool completely before adding the next one. This typically takes 30-60 seconds. Pressing a new layer onto warm HTV can cause the bottom layer to shift or the layers to bond poorly."
  },
  {
    question: "What temperature for layering HTV?",
    answer: "For the first/bottom layer, use standard HTV temperature (305-320°F). For each additional layer, reduce temperature by 10-15°F (so second layer at 290-305°F). This prevents the bottom layers from overheating and shifting."
  },
  {
    question: "How many layers of HTV can you do?",
    answer: "Most projects work well with 2-3 layers of HTV. You can technically do more, but each additional layer adds thickness and reduces flexibility. For designs with 4+ colors, consider using printed HTV or sublimation instead."
  },
  {
    question: "Why is my layered HTV peeling?",
    answer: "Layered HTV peels for several reasons: pressing at too high temperature (melting bottom layers), not enough pressure, layers not aligned properly, or not allowing cooling time between layers. Make sure each layer is fully adhered before adding the next."
  },
  {
    question: "Can you layer different brands of HTV?",
    answer: "Yes, but stick to the same type (all standard HTV or all stretch HTV). Different brands have similar adhesion properties. Avoid mixing specialty HTV (like glitter or foil) on top of each other—glitter works better as a base layer."
  },
  {
    question: "What is the best HTV for layering?",
    answer: "Siser EasyWeed is widely considered the best for layering due to its thin profile and reliable adhesion. Cricut Everyday Iron-On also layers well. Avoid thick HTV like glitter for top layers—it doesn't bond as well to other vinyl."
  }
];

const howToSteps = [
  { name: "Design Your Layers", text: "Create your multi-color design in Design Space. Separate each color onto its own layer. Add registration marks (small + shapes) in the corners of each layer to help with alignment." },
  { name: "Cut Each Color", text: "Cut each color of HTV separately. REMEMBER: Mirror all layers before cutting (HTV is always cut face-down). Use the same mat placement for each color to maintain registration." },
  { name: "Weed All Layers", text: "Weed each color carefully, removing excess vinyl while leaving your design on the carrier sheet. Keep registration marks if you added them." },
  { name: "Pre-Press Your Garment", text: "Press your blank shirt for 3-5 seconds to remove moisture and wrinkles. This creates a flat, dry surface for better adhesion." },
  { name: "Position Bottom Layer", text: "Place your first (bottom/background) layer on the garment. This should be your largest piece. Use a ruler or alignment tool to center it." },
  { name: "Press First Layer", text: "Press at standard temperature (305-320°F) for 10-15 seconds with firm pressure. Peel carrier warm or cold based on your HTV type." },
  { name: "Let It Cool Completely", text: "Wait 30-60 seconds for the first layer to cool completely. This is crucial—don't rush this step or layers will shift." },
  { name: "Align Second Layer", text: "Position your second layer on top of the first. Use registration marks or visual alignment. Take your time—once pressed, you can't reposition." },
  { name: "Press Second Layer", text: "Cover with parchment paper or Teflon sheet. Reduce temperature by 10-15°F (290-305°F). Press for only 5-7 seconds." },
  { name: "Repeat for Additional Layers", text: "Continue the cool-align-press cycle for each additional layer. Reduce time slightly for each (layer 3: 4-5 seconds). Always cover previous layers with parchment." },
  { name: "Final Press", text: "After all layers are applied, do one final press for 5 seconds with parchment paper covering everything. This ensures all layers are fully bonded." },
  { name: "Final Cool Down", text: "Let the finished design cool completely before handling. Wait 24-48 hours before the first wash for best durability." }
];

export default function HTVLayeringGuidePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sage-50 to-white">
      <FAQSchema data={faqData} />
      <HowToSchema 
        name="How to Layer HTV (Heat Transfer Vinyl)"
        description="Step-by-step guide to layering multiple colors of iron-on vinyl for professional multi-color designs."
        steps={howToSteps}
        totalTime="PT30M"
      />
      
      {/* Hero Section */}
      <section className="relative py-16 px-4 bg-gradient-to-r from-dusty-rose-500 to-dusty-rose-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm mb-4">
            Complete Guide
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            HTV Layering Guide: Multi-Color Designs That Last
          </h1>
          <p className="text-xl text-white/90 mb-6">
            Master the art of layering iron-on vinyl for stunning multi-color projects
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded-full">⏱️ 30 min read</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">🎯 All skill levels</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">📅 Updated Feb 2026</span>
          </div>
        </div>
      </section>

      {/* Quick Answer Box */}
      <section className="max-w-4xl mx-auto px-4 -mt-8 relative z-10">
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-sage-500">
          <h2 className="font-bold text-lg text-sage-700 mb-2">🎯 Quick Answer</h2>
          <p className="text-gray-700">
            <strong>Yes, you can layer HTV!</strong> The key is: press bottom layers first at standard temp (305-320°F), 
            let each layer cool completely, then add the next layer at 10-15°F lower temperature for less time (5-7 sec). 
            Most designs work best with 2-3 layers maximum.
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-sage-50 rounded-xl p-6">
          <h2 className="font-bold text-xl mb-4 text-sage-800">📋 What You&apos;ll Learn</h2>
          <ul className="grid md:grid-cols-2 gap-2">
            <li><a href="#basics" className="text-sage-600 hover:text-sage-800">→ HTV Layering Basics</a></li>
            <li><a href="#temperature" className="text-sage-600 hover:text-sage-800">→ Temperature Settings</a></li>
            <li><a href="#step-by-step" className="text-sage-600 hover:text-sage-800">→ Step-by-Step Process</a></li>
            <li><a href="#alignment" className="text-sage-600 hover:text-sage-800">→ Alignment Tips</a></li>
            <li><a href="#troubleshooting" className="text-sage-600 hover:text-sage-800">→ Troubleshooting</a></li>
            <li><a href="#best-htv" className="text-sage-600 hover:text-sage-800">→ Best HTV for Layering</a></li>
          </ul>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 py-8 prose prose-lg">
        
        <section id="basics">
          <h2>HTV Layering Basics: Can You Really Layer Iron-On?</h2>
          <p>
            Layering HTV (heat transfer vinyl) lets you create multi-color designs without expensive 
            printed vinyl or sublimation equipment. Instead of printing, you cut each color separately 
            and press them in layers.
          </p>
          
          <div className="bg-dusty-rose-50 p-6 rounded-xl my-6 not-prose">
            <h3 className="font-bold text-dusty-rose-800 mb-3">✅ HTV Layering Works Best For:</h3>
            <ul className="space-y-2 text-dusty-rose-900">
              <li>• 2-4 color designs</li>
              <li>• Bold, simple graphics</li>
              <li>• Designs with distinct color boundaries</li>
              <li>• Small batch or one-off projects</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl my-6 not-prose">
            <h3 className="font-bold text-gray-800 mb-3">❌ Consider Other Methods For:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• 5+ color designs (use printable HTV)</li>
              <li>• Photographic images (use sublimation)</li>
              <li>• Very fine details (layers add thickness)</li>
              <li>• Large production runs (too time-consuming)</li>
            </ul>
          </div>
        </section>

        <section id="temperature">
          <h2>Temperature Settings for Layered HTV</h2>
          <p>
            This is where most people go wrong. Each layer needs slightly different settings to 
            prevent over-pressing the layers beneath.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full bg-white border rounded-lg">
              <thead className="bg-sage-100">
                <tr>
                  <th className="px-4 py-3 text-left font-bold text-sage-800">Layer</th>
                  <th className="px-4 py-3 text-left font-bold text-sage-800">Temperature</th>
                  <th className="px-4 py-3 text-left font-bold text-sage-800">Time</th>
                  <th className="px-4 py-3 text-left font-bold text-sage-800">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="px-4 py-3 font-semibold">1st (Bottom)</td>
                  <td className="px-4 py-3">305-320°F</td>
                  <td className="px-4 py-3">10-15 sec</td>
                  <td className="px-4 py-3">Standard settings</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-semibold">2nd Layer</td>
                  <td className="px-4 py-3">290-305°F</td>
                  <td className="px-4 py-3">5-7 sec</td>
                  <td className="px-4 py-3">Cover with parchment</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold">3rd Layer</td>
                  <td className="px-4 py-3">280-295°F</td>
                  <td className="px-4 py-3">4-5 sec</td>
                  <td className="px-4 py-3">Cover with parchment</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-semibold">Final Press</td>
                  <td className="px-4 py-3">290°F</td>
                  <td className="px-4 py-3">5 sec</td>
                  <td className="px-4 py-3">All layers, with cover</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
            <p className="font-bold text-yellow-800">⚠️ Pro Tip</p>
            <p className="text-yellow-900">
              Always cover previously pressed layers with parchment paper or a Teflon sheet. 
              Direct heat on already-pressed HTV can cause it to shift, shrink, or get a shiny finish.
            </p>
          </div>
        </section>

        <section id="step-by-step">
          <h2>Step-by-Step: How to Layer HTV</h2>
          
          <div className="space-y-6 my-8 not-prose">
            {howToSteps.map((step, index) => (
              <div key={index} className="flex gap-4 p-4 bg-white rounded-lg shadow-sm border">
                <div className="flex-shrink-0 w-10 h-10 bg-sage-500 text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{step.name}</h3>
                  <p className="text-gray-600">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="alignment">
          <h2>Alignment Tips for Perfect Layers</h2>
          
          <p>Getting layers to line up perfectly is the trickiest part. Here are proven methods:</p>

          <h3>Method 1: Registration Marks</h3>
          <p>
            Add small cross (+) marks in the corners of your design in Design Space. Cut these with 
            each color layer. Position your first layer, then use the marks to align subsequent layers 
            before removing them.
          </p>

          <h3>Method 2: Tape Hinge Method</h3>
          <p>
            After positioning a layer, tape one edge to the garment before removing the carrier sheet. 
            This creates a &quot;hinge&quot; so you can lift, remove the carrier, and lay it back down in the 
            exact same position.
          </p>

          <h3>Method 3: Grid/Ruler Method</h3>
          <p>
            Use a quilting ruler or gridded mat underneath your garment. Mark center lines with 
            heat-safe tape. Align each layer to the grid for consistent placement.
          </p>

          <div className="bg-sage-50 p-6 rounded-xl my-6 not-prose">
            <h3 className="font-bold text-sage-800 mb-3">🎯 Alignment Best Practice</h3>
            <p className="text-sage-900">
              For complex designs, do a &quot;dry fit&quot; first. Lay all your cut layers on the garment 
              (without pressing) to check alignment. Take a photo to reference during pressing.
            </p>
          </div>
        </section>

        <section id="troubleshooting">
          <h2>Troubleshooting Layered HTV</h2>

          <div className="space-y-4 my-6 not-prose">
            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <h3 className="font-bold text-red-800">Problem: Bottom layer shifted when pressing top layer</h3>
              <p className="text-red-700 mt-1">
                <strong>Fix:</strong> Your temperature is too high or you&apos;re pressing too long. 
                Reduce temp by 15°F and cut time to 5 seconds. Always use a cover sheet.
              </p>
            </div>

            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <h3 className="font-bold text-red-800">Problem: Layers aren&apos;t bonding to each other</h3>
              <p className="text-red-700 mt-1">
                <strong>Fix:</strong> You may not be pressing hard enough, or the bottom layer has 
                a matte finish that resists adhesion. Try pressing with more pressure, or lightly 
                sand glossy HTV with fine sandpaper before adding layers.
              </p>
            </div>

            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <h3 className="font-bold text-red-800">Problem: Design looks bulky/thick</h3>
              <p className="text-red-700 mt-1">
                <strong>Fix:</strong> Use thinner HTV (Siser EasyWeed is excellent). Limit to 2-3 
                layers max. For 4+ colors, switch to printable HTV instead.
              </p>
            </div>

            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <h3 className="font-bold text-red-800">Problem: Top layer is peeling</h3>
              <p className="text-red-700 mt-1">
                <strong>Fix:</strong> The adhesive on HTV bonds better to fabric than to other vinyl. 
                Make sure you&apos;re pressing with enough heat and pressure. Do a final press of 
                all layers together at the end.
              </p>
            </div>
          </div>
        </section>

        <section id="best-htv">
          <h2>Best HTV for Layering</h2>

          <p>Not all HTV layers equally well. Here&apos;s what works best:</p>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full bg-white border rounded-lg">
              <thead className="bg-sage-100">
                <tr>
                  <th className="px-4 py-3 text-left font-bold text-sage-800">HTV Type</th>
                  <th className="px-4 py-3 text-left font-bold text-sage-800">Layering Rating</th>
                  <th className="px-4 py-3 text-left font-bold text-sage-800">Best Position</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="px-4 py-3">Siser EasyWeed</td>
                  <td className="px-4 py-3 text-green-600 font-bold">⭐⭐⭐⭐⭐ Excellent</td>
                  <td className="px-4 py-3">Any layer</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">Cricut Everyday Iron-On</td>
                  <td className="px-4 py-3 text-green-600 font-bold">⭐⭐⭐⭐ Good</td>
                  <td className="px-4 py-3">Any layer</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Glitter HTV</td>
                  <td className="px-4 py-3 text-yellow-600 font-bold">⭐⭐⭐ Fair</td>
                  <td className="px-4 py-3">Bottom layer only</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">Foil HTV</td>
                  <td className="px-4 py-3 text-yellow-600 font-bold">⭐⭐⭐ Fair</td>
                  <td className="px-4 py-3">Top layer only</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Puff/3D HTV</td>
                  <td className="px-4 py-3 text-red-600 font-bold">⭐⭐ Not Recommended</td>
                  <td className="px-4 py-3">Don&apos;t layer</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">Stretch/Athletic HTV</td>
                  <td className="px-4 py-3 text-green-600 font-bold">⭐⭐⭐⭐ Good</td>
                  <td className="px-4 py-3">Any layer</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-sage-50 p-6 rounded-xl my-6 not-prose">
            <h3 className="font-bold text-sage-800 mb-3">💡 Pro Tip: Glitter on Bottom</h3>
            <p className="text-sage-900">
              If using glitter HTV in a layered design, always put it as the bottom layer. 
              The textured surface of glitter HTV makes it hard for other vinyl to bond on top. 
              Smooth HTV bonds well to the glitter surface when layered above it.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="my-12">
          <h2>Frequently Asked Questions</h2>
          <div className="space-y-4 not-prose">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white border rounded-lg p-4">
                <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Guides */}
        <section className="my-12 not-prose">
          <h2 className="text-2xl font-bold mb-6">Related Guides</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/guides/htv-peeling-after-washing" className="block p-4 bg-white border rounded-lg hover:shadow-md transition">
              <h3 className="font-bold text-sage-700">HTV Peeling After Washing?</h3>
              <p className="text-gray-600 text-sm">9 fixes for iron-on that won&apos;t stay</p>
            </Link>
            <Link href="/guides/how-to-weed-vinyl" className="block p-4 bg-white border rounded-lg hover:shadow-md transition">
              <h3 className="font-bold text-sage-700">How to Weed Vinyl</h3>
              <p className="text-gray-600 text-sm">Tips for clean, easy weeding</p>
            </Link>
            <Link href="/guides/how-to-use-transfer-tape" className="block p-4 bg-white border rounded-lg hover:shadow-md transition">
              <h3 className="font-bold text-sage-700">How to Use Transfer Tape</h3>
              <p className="text-gray-600 text-sm">Master transfer tape techniques</p>
            </Link>
            <Link href="/heat-press" className="block p-4 bg-white border rounded-lg hover:shadow-md transition">
              <h3 className="font-bold text-sage-700">Heat Press Temperature Guide</h3>
              <p className="text-gray-600 text-sm">Settings for every material</p>
            </Link>
          </div>
        </section>

      </article>

      {/* CTA Section */}
      <section className="bg-sage-100 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-sage-800 mb-4">
            Need help with your HTV projects?
          </h2>
          <p className="text-sage-600 mb-6">
            Join our community for tips, troubleshooting help, and inspiration.
          </p>
          <Link 
            href="/community" 
            className="inline-block bg-sage-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-sage-700 transition"
          >
            Join the Community
          </Link>
        </div>
      </section>
    </main>
  );
}
