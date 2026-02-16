import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Calibrate Your Cricut: Print Then Cut & Knife Blade | CricutHelper',
  description: 'Step-by-step Cricut calibration guide. Fix Print Then Cut alignment and Knife blade accuracy. Works for Explore, Maker, and Joy.',
  keywords: 'calibrate cricut, cricut calibration, print then cut calibration, knife blade calibration, cricut alignment',
  openGraph: {
    title: 'How to Calibrate Your Cricut: Print Then Cut & Knife Blade',
    description: 'Fix misaligned cuts with proper calibration. Step-by-step guide for all Cricut machines.',
    type: 'article',
  },
};

const faqs = [
  {
    question: "How often should I calibrate my Cricut?",
    answer: "Calibrate when cuts are misaligned, after firmware updates, if you move your machine, or every few months as maintenance. You don't need to calibrate before every project."
  },
  {
    question: "Why does my Print Then Cut keep failing calibration?",
    answer: "Common causes: poor lighting (glare or shadows), dirty sensor lens, wrong paper (use plain white), not aligning paper to top-left corner, or printing at wrong scale."
  },
  {
    question: "Do I need to calibrate for regular cutting (not Print Then Cut)?",
    answer: "No, regular cutting doesn't require calibration. Calibration is only for Print Then Cut (sensor alignment) and Knife blade (on Maker). Standard cuts use the machine's built-in accuracy."
  },
  {
    question: "My calibration sheet printed wrong. What happened?",
    answer: "Make sure 'Actual Size' or '100%' is selected in print settings. Don't use 'Fit to Page' or 'Scale to Fit'. The calibration pattern must print at exact size to work."
  },
  {
    question: "Can I calibrate on my phone/tablet?",
    answer: "Print Then Cut calibration works on iOS and Android apps. Open Settings (gear icon) → Calibration → Print Then Cut. Follow the same steps as desktop."
  }
];

export default function HowToCalibrateCricutPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Calibrate Your Cricut",
    "description": "Step-by-step guide to calibrating Print Then Cut and Knife blade on Cricut machines.",
    "step": [
      { "@type": "HowToStep", "name": "Open calibration", "text": "In Design Space, go to Menu (☰) → Calibration → Select calibration type" },
      { "@type": "HowToStep", "name": "Print calibration sheet", "text": "Print at 100% scale on plain white paper. Do not resize." },
      { "@type": "HowToStep", "name": "Load and scan", "text": "Place sheet on mat aligned to top-left. Load into machine." },
      { "@type": "HowToStep", "name": "Cut calibration", "text": "Machine reads the printed pattern and cuts a test line." },
      { "@type": "HowToStep", "name": "Evaluate and adjust", "text": "Check if cut aligns with printed lines. Adjust if needed." }
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <main className="min-h-screen bg-gradient-to-b from-[#FAF8F5] to-white py-12">
        <article className="max-w-4xl mx-auto px-4">
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/guides" className="text-[#9CAF88] hover:text-[#6B7F5E]">← Back to Guides</Link>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              How to Calibrate Your Cricut: Complete Guide
            </h1>
            <p className="text-xl text-gray-600">
              Is your Cricut cutting off-center? Calibration fixes Print Then Cut alignment 
              and Knife blade accuracy. Here's how to do it right.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
              <span>📖 10 min read</span>
              <span>•</span>
              <span>Updated February 2026</span>
            </div>
          </header>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8 rounded-r-lg">
            <p className="font-semibold text-blue-800">Two Types of Calibration</p>
            <p className="text-blue-700">
              <strong>Print Then Cut:</strong> All machines with PTC (Explore, Maker, Joy Xtra).
              <strong> Knife Blade:</strong> Maker only. Both are in Settings → Calibration.
            </p>
          </div>

          {/* TOC */}
          <nav className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="font-bold text-gray-900 mb-4">📋 In This Guide</h2>
            <ul className="space-y-2 text-[#9CAF88]">
              <li><a href="#when" className="hover:underline">→ When You Need to Calibrate</a></li>
              <li><a href="#ptc" className="hover:underline">→ Print Then Cut Calibration</a></li>
              <li><a href="#knife" className="hover:underline">→ Knife Blade Calibration (Maker)</a></li>
              <li><a href="#troubleshooting" className="hover:underline">→ Calibration Troubleshooting</a></li>
              <li><a href="#faqs" className="hover:underline">→ FAQs</a></li>
            </ul>
          </nav>

          {/* When */}
          <section id="when" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">When You Need to Calibrate</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="font-bold text-green-800 mb-3">✅ Calibrate When:</h3>
                <ul className="text-green-700 space-y-2">
                  <li>• Print Then Cut is cutting off-center</li>
                  <li>• You just updated firmware</li>
                  <li>• You moved your machine</li>
                  <li>• Using Knife blade for first time</li>
                  <li>• Cuts have been drifting over time</li>
                  <li>• Every 2-3 months (maintenance)</li>
                </ul>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <h3 className="font-bold text-yellow-800 mb-3">⚠️ Don't Calibrate For:</h3>
                <ul className="text-yellow-700 space-y-2">
                  <li>• Regular cutting issues (check blade first)</li>
                  <li>• Vinyl not cutting through (pressure issue)</li>
                  <li>• Mat problems (clean or replace mat)</li>
                  <li>• Before every project (not needed)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Print Then Cut */}
          <section id="ptc" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Print Then Cut Calibration</h2>
            
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-4">Step-by-Step Instructions</h3>
              <ol className="space-y-4 text-gray-700">
                <li>
                  <strong>1. Open Calibration</strong>
                  <p className="text-gray-600 text-sm mt-1">
                    Design Space → Menu (☰ or ≡) → Settings → Calibration → Print Then Cut
                  </p>
                </li>
                <li>
                  <strong>2. Print the Calibration Sheet</strong>
                  <p className="text-gray-600 text-sm mt-1">
                    Click "Print" and send to your printer. <strong>Critical:</strong> Print at 100% / Actual Size. 
                    Never use "Fit to Page" or "Scale". Use plain white paper (not sticker paper).
                  </p>
                </li>
                <li>
                  <strong>3. Place on Mat</strong>
                  <p className="text-gray-600 text-sm mt-1">
                    Put the printed sheet on a LightGrip mat. Align the top-left corner of the 
                    paper to the top-left corner of the mat's grid.
                  </p>
                </li>
                <li>
                  <strong>4. Load and Scan</strong>
                  <p className="text-gray-600 text-sm mt-1">
                    Load the mat into your machine. Click "Continue" in Design Space. 
                    The machine will scan the printed calibration marks.
                  </p>
                </li>
                <li>
                  <strong>5. First Cut Test</strong>
                  <p className="text-gray-600 text-sm mt-1">
                    The machine cuts a small line. Remove the mat and check: Does the cut 
                    line up with the printed line? If yes, calibration succeeded!
                  </p>
                </li>
                <li>
                  <strong>6. Adjust if Needed</strong>
                  <p className="text-gray-600 text-sm mt-1">
                    If the cut is off, select the square that best represents where the cut 
                    actually landed. Click "Continue" to re-cut and check again. Repeat until aligned.
                  </p>
                </li>
              </ol>
            </div>

            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg mb-6">
              <h3 className="font-bold text-red-800 mb-2">⚠️ Common Print Then Cut Calibration Mistakes</h3>
              <ul className="text-red-700 space-y-2">
                <li>• <strong>Scaling the print</strong> — Must be 100%, not "Fit to Page"</li>
                <li>• <strong>Wrong paper</strong> — Use plain white, not glossy or colored</li>
                <li>• <strong>Poor lighting</strong> — Bright, even light, no glare or shadows</li>
                <li>• <strong>Paper not aligned</strong> — Top-left corner must match mat grid exactly</li>
                <li>• <strong>Dirty sensor</strong> — Clean the sensor lens with soft dry cloth</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">Optimal Lighting Setup</h3>
              <p className="text-gray-700 mb-4">
                The sensor uses a camera to read the calibration marks. Lighting matters:
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>✅ Bright, overhead lighting (like ceiling lights)</li>
                <li>✅ Diffused daylight works well</li>
                <li>❌ Avoid direct sunlight hitting the mat (causes glare)</li>
                <li>❌ Avoid shadows across the calibration sheet</li>
                <li>❌ Turn off colored lights (RGB strips, etc.)</li>
              </ul>
            </div>
          </section>

          {/* Knife Blade */}
          <section id="knife" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Knife Blade Calibration (Maker Only)</h2>
            
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 mb-6">
              <p className="text-purple-800">
                <strong>Maker Only:</strong> Knife blade calibration is only available on Cricut Maker 
                machines. It ensures the blade's multi-pass cuts stay aligned.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-4">Step-by-Step Knife Blade Calibration</h3>
              <ol className="space-y-4 text-gray-700">
                <li>
                  <strong>1. Insert Knife Blade</strong>
                  <p className="text-gray-600 text-sm mt-1">
                    Place the Knife blade in Clamp B (the one with the gear icon).
                  </p>
                </li>
                <li>
                  <strong>2. Open Calibration</strong>
                  <p className="text-gray-600 text-sm mt-1">
                    Design Space → Menu → Settings → Calibration → Knife Blade
                  </p>
                </li>
                <li>
                  <strong>3. Prepare Material</strong>
                  <p className="text-gray-600 text-sm mt-1">
                    Place a piece of heavy cardstock or chipboard on a StrongGrip mat. 
                    Tape the edges.
                  </p>
                </li>
                <li>
                  <strong>4. Load and Cut</strong>
                  <p className="text-gray-600 text-sm mt-1">
                    Load the mat and start calibration. The machine will make several test cuts.
                  </p>
                </li>
                <li>
                  <strong>5. Evaluate Cuts</strong>
                  <p className="text-gray-600 text-sm mt-1">
                    Check if the multiple passes align perfectly. If they overlap cleanly, 
                    calibration is complete. If not, Design Space will guide you through adjustments.
                  </p>
                </li>
              </ol>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
              <p className="text-yellow-800">
                <strong>When to recalibrate Knife blade:</strong> After dropping the machine, 
                replacing the blade, or if you notice multi-pass cuts don't align (looks like 
                "double cuts" or ragged edges).
              </p>
            </div>
          </section>

          {/* Troubleshooting */}
          <section id="troubleshooting" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Calibration Troubleshooting</h2>
            
            <div className="space-y-4">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">"Calibration Failed" Error</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Improve lighting (more even, no shadows)</li>
                  <li>• Clean sensor lens with microfiber cloth</li>
                  <li>• Reprint calibration sheet at 100%</li>
                  <li>• Use plain white paper (not glossy or cream)</li>
                  <li>• Check that all black registration marks printed clearly</li>
                  <li>• Try a different browser/device</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">Calibration Succeeds But Cuts Still Off</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Recalibrate from scratch (sometimes first calibration is imperfect)</li>
                  <li>• Make sure you're loading the mat the same way during actual cuts</li>
                  <li>• Check that your projects print at 100% too (same as calibration)</li>
                  <li>• Try on a different mat</li>
                  <li>• Contact Cricut support if persistently off</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">Machine Won't Read the Calibration Sheet</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Position directly under bright light</li>
                  <li>• Clean the sensor window (below the carriage)</li>
                  <li>• Make sure the black box (registration marks) printed fully</li>
                  <li>• Check your printer isn't low on black ink</li>
                  <li>• Try a different sheet of paper</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">Calibration Option is Grayed Out</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Make sure machine is connected via Bluetooth/USB</li>
                  <li>• Try turning machine off and on</li>
                  <li>• Update Design Space to latest version</li>
                  <li>• Update machine firmware if available</li>
                  <li>• Joy (original) doesn't have Print Then Cut—only Joy Xtra does</li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section id="faqs" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Reference</h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <h3 className="font-bold mb-2">Print Then Cut Calibration</h3>
                <ul className="text-sm space-y-1">
                  <li>• Location: Settings → Calibration → PTC</li>
                  <li>• Print at 100% on white paper</li>
                  <li>• Use LightGrip mat</li>
                  <li>• Good lighting essential</li>
                  <li>• All machines with PTC support</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">Knife Blade Calibration</h3>
                <ul className="text-sm space-y-1">
                  <li>• Location: Settings → Calibration → Knife</li>
                  <li>• Maker machines only</li>
                  <li>• Use StrongGrip mat</li>
                  <li>• Heavy cardstock or chipboard</li>
                  <li>• Ensures multi-pass alignment</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Related */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Guides</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/guides/print-then-cut-not-lining-up" className="block bg-white rounded-xl shadow p-4 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900">Print Then Cut Not Lining Up?</h3>
                <p className="text-sm text-gray-600">More fixes for alignment issues</p>
              </Link>
              <Link href="/guides/cricut-blade-guide" className="block bg-white rounded-xl shadow p-4 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900">Cricut Blade Guide</h3>
                <p className="text-sm text-gray-600">Which blade for every material</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Having Alignment Issues?</h2>
            <p className="text-gray-600 mb-6">Our troubleshooting wizard can help diagnose the problem.</p>
            <Link href="/troubleshoot" className="inline-block bg-[#9CAF88] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#6B7F5E] transition-colors">
              Start Troubleshooting →
            </Link>
          </section>
        </article>
      </main>
    </>
  );
}
