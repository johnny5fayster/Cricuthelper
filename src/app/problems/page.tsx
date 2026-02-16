'use client';

import Link from 'next/link';
import { FAQSchema } from '@/components/SchemaMarkup';

// FAQ data for schema markup - these appear as rich snippets in Google
const faqData = [
  { question: "Why is my Cricut not cutting through vinyl?", answer: "The most common causes are a dull blade, incorrect pressure settings, or material not properly adhered to the mat. Try replacing your blade, increasing pressure, and using a brayer to firmly press material onto the mat." },
  { question: "Why does my Cricut Design Space keep crashing?", answer: "Design Space crashes are usually caused by corrupted cache, outdated software, or system resource issues. Clear the app cache, reinstall Design Space, and make sure your computer meets minimum requirements." },
  { question: "Why won't my Cricut connect to Bluetooth?", answer: "First, ensure Bluetooth is enabled on your device. Turn off your Cricut, wait 10 seconds, and turn it back on. Forget the device in Bluetooth settings and re-pair. If issues persist, try a USB connection." },
  { question: "Why is my HTV peeling off after washing?", answer: "HTV peeling is usually caused by incorrect temperature, insufficient pressure, or washing too soon. Ensure you're pressing at the right temperature for your HTV type, apply firm pressure, and wait 24-48 hours before first wash." },
  { question: "Why is my Cricut Print Then Cut misaligned?", answer: "Calibrate your machine in Design Space (Menu → Calibration). Make sure you're printing at 100% scale (not 'Fit to Page'), use matte white paper, and ensure good lighting so the sensor can read the registration marks." },
  { question: "How do I make my Cricut mat sticky again?", answer: "Clean your mat with baby wipes and let it air dry completely. For mats that have lost adhesive, you can use a repositionable spray adhesive or a glue stick applied in thin layers. Replace mats every 25-50 projects." },
];

const problemCategories = [
  {
    category: "Cutting Problems",
    icon: "✂️",
    problems: [
      { title: "Cricut not cutting through vinyl", slug: "not-cutting", keywords: ["won't cut", "blade not cutting", "not cutting deep enough"] },
      { title: "Cricut not cutting through cardstock", slug: "not-cutting", keywords: ["paper not cutting", "cardstock tears"] },
      { title: "Cricut blade not cutting", slug: "not-cutting", keywords: ["dull blade", "blade worn out", "replace blade"] },
      { title: "Cricut cutting too deep", slug: "not-cutting", keywords: ["cutting into mat", "blade too deep"] },
      { title: "Cricut cuts are uneven", slug: "not-cutting", keywords: ["incomplete cuts", "partial cuts", "jagged cuts"] },
    ]
  },
  {
    category: "Design Space Issues",
    icon: "💻",
    problems: [
      { title: "Cricut Design Space slow", slug: "design-space", keywords: ["lagging", "freezing", "running slow"] },
      { title: "Cricut Design Space crashing", slug: "design-space", keywords: ["keeps crashing", "crashes when cutting", "closes unexpectedly"] },
      { title: "Cricut Design Space won't open", slug: "design-space", keywords: ["blank screen", "won't load", "white screen"] },
      { title: "Can't log into Design Space", slug: "design-space", keywords: ["login failed", "password not working", "account locked"] },
      { title: "Design Space won't find machine", slug: "design-space", keywords: ["machine not detected", "can't connect"] },
    ]
  },
  {
    category: "Connection Problems",
    icon: "📶",
    problems: [
      { title: "Cricut won't connect to Bluetooth", slug: "bluetooth", keywords: ["Bluetooth pairing failed", "can't pair", "disconnects"] },
      { title: "Cricut Bluetooth keeps disconnecting", slug: "bluetooth", keywords: ["connection drops", "loses connection"] },
      { title: "Cricut not showing in Bluetooth", slug: "bluetooth", keywords: ["machine not found", "can't find Cricut"] },
      { title: "Cricut USB connection problems", slug: "bluetooth", keywords: ["USB not working", "try USB cable"] },
    ]
  },
  {
    category: "Print Then Cut Problems",
    icon: "🖨️",
    problems: [
      { title: "Cricut Print Then Cut misaligned", slug: "print-then-cut", keywords: ["cuts off center", "not aligned", "offset cuts"] },
      { title: "Cricut can't read sensor marks", slug: "print-then-cut", keywords: ["sensor error", "can't read registration marks"] },
      { title: "Print Then Cut calibration not working", slug: "print-then-cut", keywords: ["calibration fails", "can't calibrate"] },
      { title: "Print Then Cut size wrong", slug: "print-then-cut", keywords: ["prints too small", "shrinks when printing"] },
    ]
  },
  {
    category: "HTV/Iron-On Problems",
    icon: "👕",
    problems: [
      { title: "HTV not sticking to shirt", slug: "htv-problems", keywords: ["iron-on won't stick", "vinyl peeling off"] },
      { title: "HTV peeling after washing", slug: "htv-problems", keywords: ["comes off in wash", "peels after first wash"] },
      { title: "HTV cracking and flaking", slug: "htv-problems", keywords: ["vinyl cracking", "iron-on cracked"] },
      { title: "Cricut iron-on burning", slug: "htv-problems", keywords: ["scorched vinyl", "burnt HTV", "discolored"] },
      { title: "HTV on polyester not working", slug: "htv-problems", keywords: ["melting polyester", "poly blend problems"] },
    ]
  },
  {
    category: "Mat Issues",
    icon: "📋",
    problems: [
      { title: "Cricut mat not sticky", slug: "mat-grip", keywords: ["mat lost stickiness", "material won't stick to mat"] },
      { title: "Material stuck on Cricut mat", slug: "mat-grip", keywords: ["can't remove material", "paper stuck"] },
      { title: "Cricut mat too sticky", slug: "mat-grip", keywords: ["tears material", "rips paper"] },
      { title: "How to clean Cricut mat", slug: "mat-grip", keywords: ["restore mat stickiness", "restick mat"] },
    ]
  },
  {
    category: "Weeding Problems",
    icon: "🔍",
    problems: [
      { title: "Vinyl hard to weed", slug: "weeding", keywords: ["can't weed", "weeding tips", "small letters"] },
      { title: "Vinyl tearing when weeding", slug: "weeding", keywords: ["rips during weeding", "tears while weeding"] },
      { title: "Can't see cut lines", slug: "weeding", keywords: ["where to weed", "find cut lines"] },
      { title: "Intricate designs hard to weed", slug: "weeding", keywords: ["detailed weeding", "small pieces"] },
    ]
  },
  {
    category: "Adhesion Issues",
    icon: "🔥",
    problems: [
      { title: "Vinyl won't stick to tumbler", slug: "adhesion", keywords: ["cup vinyl peeling", "tumbler adhesion"] },
      { title: "Infusible Ink not transferring", slug: "adhesion", keywords: ["faded colors", "won't transfer"] },
      { title: "Sublimation not working", slug: "adhesion", keywords: ["faded sublimation", "colors wrong"] },
      { title: "Vinyl on wood not sticking", slug: "adhesion", keywords: ["wood signs", "painted wood"] },
    ]
  },
];

export default function ProblemsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FAF8F5] to-white py-12">
      <FAQSchema faqs={faqData} />
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Common Cricut Problems & Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Having issues with your Cricut? You're not alone! Click any problem below 
            to get step-by-step troubleshooting help.
          </p>
        </div>

        <div className="space-y-10">
          {problemCategories.map((cat) => (
            <section key={cat.category} className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">{cat.icon}</span>
                {cat.category}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {cat.problems.map((problem) => (
                  <Link
                    key={problem.title}
                    href={`/troubleshoot?issue=${problem.slug}`}
                    className="block p-4 rounded-xl bg-[#F5FAF3] hover:bg-[#F5FAF3] transition-colors border border-[#B8C9A9]"
                  >
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {problem.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {problem.keywords.map((kw) => (
                        <span 
                          key={kw}
                          className="text-xs bg-white text-gray-600 px-2 py-1 rounded-full"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 bg-[#F5FAF3] rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Can't Find Your Problem?
          </h2>
          <p className="text-gray-700 mb-6">
            Use our interactive troubleshooting wizard to diagnose your issue step-by-step.
          </p>
          <Link
            href="/troubleshoot"
            className="inline-block bg-[#9CAF88] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#6B7F5E] transition-colors"
          >
            Start Troubleshooting →
          </Link>
        </div>

        {/* SEO content block */}
        <div className="mt-12 prose prose-slate max-w-none">
          <h2>Why Is My Cricut Not Working?</h2>
          <p>
            Cricut machines are powerful crafting tools, but they can sometimes be finicky. 
            The most common issues crafters face include cutting problems, Design Space software 
            issues, Bluetooth connection drops, and HTV/iron-on adhesion failures.
          </p>
          <p>
            This troubleshooting guide covers solutions for all Cricut machines including 
            the Cricut Maker, Cricut Maker 3, Cricut Explore Air 2, Cricut Explore 3, 
            Cricut Joy, and Cricut Joy Xtra.
          </p>
          <h3>Quick Fixes to Try First</h3>
          <ul>
            <li><strong>Restart everything:</strong> Turn off your Cricut, close Design Space, and restart both</li>
            <li><strong>Check your blade:</strong> Dull blades cause 90% of cutting issues</li>
            <li><strong>Update Design Space:</strong> Outdated software causes many problems</li>
            <li><strong>Check mat stickiness:</strong> Material movement ruins cuts</li>
            <li><strong>Verify Bluetooth:</strong> Make sure your machine is paired in system settings</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
