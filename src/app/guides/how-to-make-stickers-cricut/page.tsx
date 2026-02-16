import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Make Stickers with Cricut: Complete Beginner Guide | CricutHelper',
  description: 'Step-by-step guide to making perfect stickers with your Cricut. Print Then Cut tutorial, best sticker papers, laminating tips, and selling your stickers.',
  keywords: 'how to make stickers cricut, cricut stickers, print then cut stickers, cricut sticker paper, diy stickers cricut',
  openGraph: {
    title: 'How to Make Stickers with Cricut: Complete Beginner Guide',
    description: 'Make professional stickers at home with your Cricut. Step-by-step tutorial.',
    type: 'article',
  },
};

const faqs = [
  {
    question: "What Cricut machines can make stickers?",
    answer: "Explore Air 2, Explore 3, Maker, and Maker 3 all support Print Then Cut for stickers. Cricut Joy does NOT support Print Then Cut. Joy Xtra does support it with some limitations."
  },
  {
    question: "Do I need special paper for Cricut stickers?",
    answer: "Yes. Use printable sticker paper (matte or glossy) designed for your printer type (inkjet or laser). Regular paper won't work—stickers need an adhesive backing. Popular brands: Cricut, Avery, Online Labels, Koala."
  },
  {
    question: "Why is my Print Then Cut not aligning?",
    answer: "Usually a sensor or lighting issue. Ensure good lighting (no glare), clean sensor lens, use white/light sticker paper with the black registration box fully visible. Recalibrate if still off."
  },
  {
    question: "Can I sell stickers made with Cricut?",
    answer: "Yes! But use designs you created or have commercial licenses for. Cricut Access images have limited commercial rights. Most sellers create original designs or buy commercial-use graphics."
  },
  {
    question: "How do I make my stickers waterproof?",
    answer: "Print on waterproof/vinyl sticker paper, OR apply a clear laminate sheet before cutting, OR seal with spray sealant after cutting. Laminate sheets give the most durable, professional result."
  },
  {
    question: "What's the best sticker paper for Cricut?",
    answer: "For beginners: Cricut Printable Sticker Paper (reliable but pricey). For volume: Online Labels, Koala, or Sticker Mule paper. Matte for writing on, glossy for vibrant colors."
  }
];

export default function HowToMakeStickersCricutPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Make Stickers with Cricut",
    "description": "Complete guide to making stickers with Print Then Cut on Cricut machines.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Create or import your sticker designs",
        "text": "Design stickers in Design Space, Canva, or import PNG files with transparent backgrounds."
      },
      {
        "@type": "HowToStep",
        "name": "Set up Print Then Cut",
        "text": "Flatten your design and set operation to Print Then Cut. Cricut will add registration marks."
      },
      {
        "@type": "HowToStep",
        "name": "Print your stickers",
        "text": "Print the design on sticker paper using your home printer. Don't scale or resize."
      },
      {
        "@type": "HowToStep",
        "name": "Load and cut",
        "text": "Place printed sheet on mat, load into Cricut. The sensor reads the marks and cuts around each sticker."
      },
      {
        "@type": "HowToStep",
        "name": "Peel and enjoy",
        "text": "Remove stickers from sheet. Apply laminate for durability if desired."
      }
    ]
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
              How to Make Stickers with Cricut: Complete Beginner Guide
            </h1>
            <p className="text-xl text-gray-600">
              Making stickers with your Cricut is easier than you think. This guide covers 
              everything from design to printing to cutting—plus tips for selling your stickers.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
              <span>📖 16 min read</span>
              <span>•</span>
              <span>Updated February 2026</span>
            </div>
          </header>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 rounded-r-lg">
            <p className="font-semibold text-yellow-800">What You'll Need</p>
            <p className="text-yellow-700">
              Cricut Explore/Maker • Inkjet printer • Printable sticker paper • LightGrip mat • 
              Weeding tools (optional) • Laminate sheets (optional for waterproofing)
            </p>
          </div>

          {/* Table of Contents */}
          <nav className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="font-bold text-gray-900 mb-4">📋 In This Guide</h2>
            <ul className="space-y-2 text-[#9CAF88]">
              <li><a href="#overview" className="hover:underline">→ How Cricut Stickers Work (Print Then Cut)</a></li>
              <li><a href="#supplies" className="hover:underline">→ Best Sticker Supplies</a></li>
              <li><a href="#design" className="hover:underline">→ Creating Your Sticker Designs</a></li>
              <li><a href="#setup" className="hover:underline">→ Setting Up Print Then Cut</a></li>
              <li><a href="#printing" className="hover:underline">→ Printing Your Stickers</a></li>
              <li><a href="#cutting" className="hover:underline">→ Cutting & Finishing</a></li>
              <li><a href="#waterproof" className="hover:underline">→ Making Stickers Waterproof</a></li>
              <li><a href="#troubleshooting" className="hover:underline">→ Fixing Common Problems</a></li>
              <li><a href="#selling" className="hover:underline">→ Tips for Selling Stickers</a></li>
              <li><a href="#faqs" className="hover:underline">→ FAQs</a></li>
            </ul>
          </nav>

          {/* Overview */}
          <section id="overview" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              How Cricut Stickers Work (Print Then Cut)
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              <p>
                Cricut makes stickers using a feature called <strong>Print Then Cut</strong>. 
                Here's how it works:
              </p>
              
              <ol className="list-decimal list-inside space-y-3 bg-white rounded-xl shadow p-6">
                <li>You create or import a sticker design</li>
                <li>Cricut adds registration marks (black box) around your design</li>
                <li>You print the sheet on your home printer (NOT the Cricut—it doesn't print!)</li>
                <li>You place the printed sheet on your Cricut mat</li>
                <li>Cricut's sensor reads the registration marks</li>
                <li>Cricut cuts precisely around each sticker design</li>
              </ol>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="text-blue-800">
                  <strong>💡 Key point:</strong> Your Cricut is a cutting machine, not a printer. 
                  You need a separate inkjet or laser printer to print your designs first.
                </p>
              </div>
            </div>
          </section>

          {/* Supplies */}
          <section id="supplies" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Best Sticker Supplies
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Sticker Paper</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Matte Sticker Paper</h4>
                    <p className="text-gray-600 text-sm mb-2">
                      Smooth, non-reflective finish. Easy to write on. Best for:
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Planner stickers</li>
                      <li>• Labels</li>
                      <li>• Vintage/rustic aesthetic</li>
                    </ul>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Glossy Sticker Paper</h4>
                    <p className="text-gray-600 text-sm mb-2">
                      Shiny, vibrant colors. More durable. Best for:
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Character stickers</li>
                      <li>• Photo stickers</li>
                      <li>• Die-cut decals</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Recommended Brands</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li><strong>Cricut Printable Sticker Paper</strong> — Reliable, works great, but expensive</li>
                    <li><strong>Online Labels</strong> — Excellent quality, good prices, bulk options</li>
                    <li><strong>Koala Paper</strong> — Budget-friendly, decent quality</li>
                    <li><strong>Avery Printable Sticker Paper</strong> — Available at office stores</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Printer Requirements</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border border-green-200 bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2">✅ Inkjet Printers</h4>
                    <p className="text-green-700 text-sm">
                      Most sticker papers are designed for inkjet. Any basic inkjet works. 
                      Popular: Canon PIXMA, HP Envy, Epson EcoTank.
                    </p>
                  </div>
                  <div className="border border-yellow-200 bg-yellow-50 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Laser Printers</h4>
                    <p className="text-yellow-700 text-sm">
                      Require special laser-compatible sticker paper. Don't use inkjet paper 
                      in laser printers—it will melt and damage the printer.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Other Supplies</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>LightGrip Mat (blue)</strong> — Best for sticker paper. Standard grip can damage prints.</li>
                  <li><strong>Fine Point Blade</strong> — Standard blade works perfectly for sticker paper.</li>
                  <li><strong>Weeding Tools</strong> — Helpful for removing small stickers from sheet.</li>
                  <li><strong>Clear Laminate Sheets</strong> — For waterproofing (optional but recommended for water bottles, etc.)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Design */}
          <section id="design" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Creating Your Sticker Designs
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Option 1: Design in Cricut Design Space</h3>
                <ol className="space-y-3 text-gray-700">
                  <li><strong>1.</strong> Open Design Space and click "New Project"</li>
                  <li><strong>2.</strong> Use Images, Text, or Shapes to create your design</li>
                  <li><strong>3.</strong> For a solid sticker look, add a shape behind your design</li>
                  <li><strong>4.</strong> Select all elements and click "Flatten" — this is critical!</li>
                  <li><strong>5.</strong> "Flatten" converts your design to a single printable image</li>
                </ol>
                <div className="mt-4 bg-[#F5FAF3] border border-[#B8C9A9] rounded-lg p-4">
                  <p className="text-[#6B7F5E] text-sm">
                    <strong>🎯 Pro tip:</strong> Add an offset (border) around your sticker for 
                    easier peeling. Select your design → Offset → set to 0.05-0.1 inches.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Option 2: Design in Canva (Free)</h3>
                <ol className="space-y-3 text-gray-700">
                  <li><strong>1.</strong> Go to Canva.com and search for "sticker" templates</li>
                  <li><strong>2.</strong> Customize or create from scratch</li>
                  <li><strong>3.</strong> Download as PNG with transparent background</li>
                  <li><strong>4.</strong> Upload PNG to Design Space</li>
                  <li><strong>5.</strong> Select "Complex" when asked about cut type</li>
                  <li><strong>6.</strong> The image is automatically set as Print Then Cut</li>
                </ol>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Option 3: Use Pre-Made Designs</h3>
                <p className="text-gray-700 mb-4">
                  Don't want to design? There are tons of ready-to-print sticker designs:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Cricut Access</strong> — Thousands of designs (subscription or individual purchase)</li>
                  <li><strong>Etsy</strong> — Search "Cricut sticker PNG" for digital downloads</li>
                  <li><strong>Creative Market</strong> — Professional design bundles</li>
                  <li><strong>Design Bundles</strong> — Often has free graphics</li>
                </ul>
                <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-yellow-800 text-sm">
                    <strong>⚠️ Commercial use:</strong> If you plan to sell stickers, make sure 
                    the designs you use have commercial licenses. Personal-use-only designs 
                    can't legally be sold.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Setup */}
          <section id="setup" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Setting Up Print Then Cut
            </h2>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">Print Then Cut Settings</h3>
              <ol className="space-y-4 text-gray-700">
                <li>
                  <strong>1. Flatten your design</strong>
                  <p className="text-gray-600 text-sm mt-1">
                    Select all elements → click "Flatten" in the Layers panel. The design becomes 
                    one layer with "Print Then Cut" as the operation.
                  </p>
                </li>
                <li>
                  <strong>2. Check the size</strong>
                  <p className="text-gray-600 text-sm mt-1">
                    Max Print Then Cut size: <strong>6.75" × 9.25"</strong> on letter paper. 
                    Keep your stickers within this area.
                  </p>
                </li>
                <li>
                  <strong>3. Add bleed (recommended)</strong>
                  <p className="text-gray-600 text-sm mt-1">
                    In the Make It screen, toggle "Add Bleed" ON. This extends colors slightly 
                    past the cut line for cleaner edges.
                  </p>
                </li>
                <li>
                  <strong>4. Arrange on the mat</strong>
                  <p className="text-gray-600 text-sm mt-1">
                    Design Space will show a black registration box around your stickers. 
                    Make sure everything fits on one page.
                  </p>
                </li>
              </ol>
            </div>
          </section>

          {/* Printing */}
          <section id="printing" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Printing Your Stickers
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Step-by-Step Printing</h3>
                <ol className="space-y-3 text-gray-700">
                  <li><strong>1.</strong> Click "Make It" → "Continue" → "Send to Printer"</li>
                  <li><strong>2.</strong> In the print dialog, check "Use System Dialog"</li>
                  <li><strong>3.</strong> Set paper type to "Glossy Photo Paper" or "Matte" (matching your sticker paper)</li>
                  <li><strong>4.</strong> Set quality to "Best" or "High" for vibrant colors</li>
                  <li><strong>5.</strong> Load sticker paper printable-side UP (usually the shinier side)</li>
                  <li><strong>6.</strong> Print! Do NOT resize or scale—keep at 100%</li>
                </ol>
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                <h3 className="font-bold text-red-800 mb-2">⚠️ Critical Print Tips</h3>
                <ul className="text-red-700 space-y-2">
                  <li>• <strong>Never scale the print</strong> — must be 100% for cuts to align</li>
                  <li>• <strong>The black box must print clearly</strong> — it's how Cricut aligns cuts</li>
                  <li>• <strong>Let ink dry 5-10 minutes</strong> before loading on mat</li>
                  <li>• <strong>Don't touch the printed area</strong> — oils can affect ink adhesion</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Cutting */}
          <section id="cutting" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Cutting & Finishing
            </h2>
            
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-4">Cutting Your Stickers</h3>
              <ol className="space-y-3 text-gray-700">
                <li><strong>1.</strong> Place printed sheet face-up on LightGrip (blue) mat</li>
                <li><strong>2.</strong> Align top-left corner of paper with top-left of mat</li>
                <li><strong>3.</strong> Select your material: "Printable Sticker Paper" or "Printable Vinyl"</li>
                <li><strong>4.</strong> Load mat and press the flashing Go button</li>
                <li><strong>5.</strong> Cricut reads the registration marks first, then cuts</li>
                <li><strong>6.</strong> Unload and carefully peel stickers from sheet</li>
              </ol>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <h3 className="font-bold text-green-800 mb-2">✅ Kiss Cut vs Die Cut</h3>
                <p className="text-green-700 text-sm">
                  <strong>Kiss cut:</strong> Cuts through sticker layer only, leaving backing intact. 
                  Best for sticker sheets you peel from.
                  <br/><br/>
                  <strong>Die cut:</strong> Cuts through everything. Individual stickers, no backing 
                  to peel from.
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <h3 className="font-bold text-blue-800 mb-2">💡 Choosing the Right Cut</h3>
                <p className="text-blue-700 text-sm">
                  For most stickers, use kiss cut settings. Design Space's "Sticker Paper" 
                  material setting is already optimized for kiss cuts.
                </p>
              </div>
            </div>
          </section>

          {/* Waterproofing */}
          <section id="waterproof" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Making Stickers Waterproof
            </h2>
            
            <div className="space-y-4">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Option 1: Laminate Sheets (Best Results)</h3>
                <ol className="space-y-2 text-gray-700">
                  <li><strong>1.</strong> Print your stickers as normal</li>
                  <li><strong>2.</strong> Apply self-adhesive laminate sheet over the entire printed sheet</li>
                  <li><strong>3.</strong> Smooth out bubbles with a scraper tool</li>
                  <li><strong>4.</strong> Load laminated sheet on mat and cut as normal</li>
                  <li><strong>5.</strong> The laminate protects from water, scratches, and UV</li>
                </ol>
                <p className="text-sm text-gray-500 mt-4">
                  Recommended: Cricut Printable Vinyl with Laminate, or separate laminate sheets from Amazon.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Option 2: Printable Vinyl</h3>
                <p className="text-gray-700 mb-3">
                  Use waterproof printable vinyl instead of sticker paper. More durable out of the box.
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Cricut Printable Vinyl</li>
                  <li>• PPD Inkjet Vinyl Sticker Paper</li>
                  <li>• Oracal Printable Vinyl</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Option 3: Spray Sealant</h3>
                <p className="text-gray-700 mb-3">
                  Apply clear spray sealant after cutting. Less durable than laminate but works in a pinch.
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Mod Podge Clear Acrylic Sealer</li>
                  <li>• Krylon UV-Resistant Clear Coat</li>
                  <li>• Apply 2-3 light coats, letting each dry completely</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Troubleshooting */}
          <section id="troubleshooting" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Fixing Common Problems
            </h2>
            
            <div className="space-y-4">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">Cuts are off / not aligned</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Recalibrate Print Then Cut: Settings → Calibration</li>
                  <li>• Clean the sensor lens with a soft cloth</li>
                  <li>• Ensure good, even lighting (no glare on the black box)</li>
                  <li>• Make sure paper is aligned to top-left of mat</li>
                  <li>• Don't use transparent or dark sticker paper</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">Not cutting through sticker paper</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Increase pressure to "More"</li>
                  <li>• Check if blade is dull (replace if over 3 months old)</li>
                  <li>• Try 2x cut setting</li>
                  <li>• Make sure mat is still sticky</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">Cutting through the backing too</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Decrease pressure to "Less"</li>
                  <li>• Use "Sticker Paper" material, not "Cardstock"</li>
                  <li>• Custom setting: reduce pressure until just cutting sticker layer</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">Colors look dull or different from screen</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Use "Best" quality print setting</li>
                  <li>• Set paper type correctly (photo/glossy for glossy paper)</li>
                  <li>• Check ink levels</li>
                  <li>• Glossy paper shows more vibrant colors than matte</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Selling */}
          <section id="selling" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Tips for Selling Stickers
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">Sticker Selling Basics</h3>
                <p className="text-gray-700 mb-4">
                  Cricut stickers are one of the most popular items on Etsy. Here's how to get started:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Create original designs</strong> — Or buy commercial-use graphics</li>
                  <li><strong>Find your niche</strong> — Planner stickers, laptop decals, water bottle stickers, etc.</li>
                  <li><strong>Quality matters</strong> — Use laminate for waterproof claims, good paper for colors</li>
                  <li><strong>Packaging</strong> — Clear sleeves, branded backing cards add perceived value</li>
                  <li><strong>Photography</strong> — Lifestyle shots sell better than flat lays</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Where to Sell</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Etsy</strong> — Best platform for handmade/craft items, built-in audience</li>
                  <li><strong>Your own website</strong> — Shopify, Squarespace, or WooCommerce</li>
                  <li><strong>Local markets</strong> — Craft fairs, farmers markets, pop-ups</li>
                  <li><strong>Instagram/TikTok</strong> — Build a following, link to shop</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                <h3 className="font-bold text-yellow-800 mb-2">⚠️ Licensing Warning</h3>
                <p className="text-yellow-700">
                  Cricut Access designs have LIMITED commercial use (up to 200 units for most images). 
                  For high-volume selling, create original designs or purchase commercial licenses 
                  from sites like Creative Market or Design Bundles.
                </p>
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

          {/* Summary */}
          <section className="bg-gradient-to-r from-[#F5E6E6] to-purple-100 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Quick Reference
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <h3 className="font-bold mb-2">Basic Steps</h3>
                <ol className="list-decimal list-inside space-y-1 text-sm">
                  <li>Design or import stickers</li>
                  <li>Flatten to Print Then Cut</li>
                  <li>Print on sticker paper</li>
                  <li>Apply laminate (optional)</li>
                  <li>Cut with Cricut</li>
                  <li>Peel and enjoy!</li>
                </ol>
              </div>
              <div>
                <h3 className="font-bold mb-2">Settings Cheat Sheet</h3>
                <ul className="space-y-1 text-sm">
                  <li><strong>Mat:</strong> LightGrip (blue)</li>
                  <li><strong>Blade:</strong> Fine Point</li>
                  <li><strong>Material:</strong> Printable Sticker Paper</li>
                  <li><strong>Max size:</strong> 6.75" × 9.25"</li>
                  <li><strong>Bleed:</strong> ON (recommended)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Related Guides */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Guides</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link 
                href="/guides/print-then-cut-not-lining-up"
                className="block bg-white rounded-xl shadow p-4 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-bold text-gray-900">Print Then Cut Not Lining Up?</h3>
                <p className="text-sm text-gray-600">Fix alignment issues</p>
              </Link>
              <Link 
                href="/guides/best-cricut-for-beginners"
                className="block bg-white rounded-xl shadow p-4 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-bold text-gray-900">Best Cricut for Beginners</h3>
                <p className="text-sm text-gray-600">Which machine to buy first</p>
              </Link>
              <Link 
                href="/guides/cricut-blade-guide"
                className="block bg-white rounded-xl shadow p-4 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-bold text-gray-900">Cricut Blade Guide</h3>
                <p className="text-sm text-gray-600">Which blade for every material</p>
              </Link>
              <Link 
                href="/guides/how-to-weed-vinyl"
                className="block bg-white rounded-xl shadow p-4 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-bold text-gray-900">How to Weed Vinyl</h3>
                <p className="text-sm text-gray-600">Pro techniques for clean results</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Having Trouble with Your Stickers?
            </h2>
            <p className="text-gray-600 mb-6">
              Our troubleshooting wizard can help diagnose Print Then Cut problems.
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
