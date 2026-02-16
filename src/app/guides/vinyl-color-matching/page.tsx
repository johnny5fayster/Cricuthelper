import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "How to Match Vinyl Colors Accurately (Stop Guessing!) | CricutHelper",
  description: "Get exact vinyl color matches every time. Learn why screen colors lie, how to use swatch books, and pro tips for matching vinyl to logos, photos, and Pantone colors.",
  keywords: "cricut vinyl color matching, vinyl color chart, how to match vinyl colors, oracal color chart, siser color matching, vinyl swatch book",
  openGraph: {
    title: "How to Match Vinyl Colors Accurately",
    description: "Stop guessing at vinyl colors. Learn pro techniques for perfect matches.",
    type: 'article',
  },
};

const colorMatchingMethods = [
  {
    title: "Physical Swatch Books (Best Method)",
    accuracy: "95%+",
    description: "The only way to truly know what a color looks like is to see it in person.",
    pros: ["Most accurate", "See actual vinyl finish", "Compare multiple colors at once"],
    cons: ["Costs $15-50", "Need separate books per brand", "Can get outdated"],
    howTo: [
      "Buy swatch books from Oracal, Siser, or your preferred brand",
      "Hold swatches up to your source material in natural light",
      "Check glossy vs matte finish matches",
      "Order samples if still unsure",
    ],
  },
  {
    title: "Order Sample Packs",
    accuracy: "95%+",
    description: "Most vinyl suppliers sell small sample packs of their colors.",
    pros: ["Cheap ($5-15)", "See actual material", "Test cuts before big orders"],
    cons: ["Takes time to ship", "Not all colors included", "One-time use"],
    howTo: [
      "Check your vinyl supplier for sample packs",
      "Look for 'color ring' or 'swatch pack' listings",
      "Order multiple brands to compare",
      "Save samples for future reference",
    ],
  },
  {
    title: "Use Pantone Color Codes",
    accuracy: "80-90%",
    description: "Many vinyl brands list Pantone equivalents for their colors.",
    pros: ["Standardized system", "Works for logo matching", "Free Pantone app available"],
    cons: ["Not exact match", "Need source's Pantone code", "Vinyl finish affects perception"],
    howTo: [
      "Find the Pantone code of your target color",
      "Search '[Brand] Pantone color chart' online",
      "Match to closest vinyl color",
      "Verify with swatch if possible",
    ],
  },
  {
    title: "Brand Color Charts (Online)",
    accuracy: "60-70%",
    description: "Most brands publish color charts, but screen colors are unreliable.",
    pros: ["Free", "See all available colors", "Good for narrowing options"],
    cons: ["Screen colors vary wildly", "Lighting affects perception", "Not reliable for exact matches"],
    howTo: [
      "Visit brand's official website",
      "Find their color chart/catalog",
      "Narrow down to 2-3 options",
      "Order samples of your top picks",
    ],
  },
];

const commonMistakes = [
  {
    mistake: "Trusting your monitor",
    fix: "Every screen displays colors differently. Your phone, laptop, and desktop will all show the same vinyl differently. Never order based solely on screen color.",
  },
  {
    mistake: "Matching in artificial light",
    fix: "Fluorescent and LED lights change color perception. Always compare colors in natural daylight when possible.",
  },
  {
    mistake: "Ignoring finish differences",
    fix: "Glossy vinyl looks different than matte, even in the same color. A gloss red will appear more vibrant than matte red.",
  },
  {
    mistake: "Assuming brands match",
    fix: "'Red' from Oracal, Siser, and Cricut are three different colors. Stick to one brand per project for consistency.",
  },
  {
    mistake: "Not accounting for substrate",
    fix: "Vinyl on white vs black surfaces looks different. Translucent colors change completely on different backgrounds.",
  },
];

const proTips = [
  {
    title: "Build a Personal Swatch Library",
    description: "Save a small piece of every vinyl color you buy. Label it with brand, color name, and color code. After a year, you'll have an incredible reference collection.",
  },
  {
    title: "Use the Pantone Connect App",
    description: "Free app that lets you scan real-world colors and find the closest Pantone match. Then cross-reference to vinyl color charts.",
  },
  {
    title: "Ask the Community",
    description: "Post a photo in Cricut Facebook groups asking 'What vinyl matches this?' Experienced crafters often know exactly which color to use.",
  },
  {
    title: "Buy White + Print",
    description: "For exact color matches (especially for logos), consider printable vinyl. Print the exact color you need instead of hunting for vinyl.",
  },
  {
    title: "Layer for Custom Colors",
    description: "Can't find the perfect color? Layer transparent or translucent vinyl over another color to create custom shades.",
  },
];

const brandResources = [
  { brand: "Oracal 651", url: "https://www.orafol.com/", note: "Download their official color fan deck PDF" },
  { brand: "Oracal 631", url: "https://www.orafol.com/", note: "Matte finish, slightly different color range" },
  { brand: "Siser EasyWeed", url: "https://www.siserna.com/", note: "HTV color guide available" },
  { brand: "Cricut Premium Vinyl", url: "https://cricut.com/", note: "Limited but consistent colors" },
  { brand: "StarCraft HD", url: "https://www.starcraftvinyls.com/", note: "Good budget option with color charts" },
];

const faqs = [
  {
    question: "Why doesn't the vinyl look like it did on my screen?",
    answer: "Every monitor, phone, and tablet displays colors differently based on its calibration, brightness settings, and the type of display technology. Additionally, the ambient lighting in your room affects color perception. The vinyl color is accurate—your screen is the variable!",
  },
  {
    question: "How do I match vinyl to a specific brand color (like Coca-Cola red)?",
    answer: "Search for the brand's official Pantone color code (Coca-Cola red is Pantone 484). Then find a vinyl color that matches that Pantone. For brand-critical work, order samples and get client approval before the final project.",
  },
  {
    question: "Can I mix vinyl brands in one project?",
    answer: "Yes, but be aware that 'red' from different brands won't match. This is fine for designs where colors don't touch. For layered designs where colors need to coordinate, stick to one brand.",
  },
  {
    question: "What's the best way to match vinyl to a photo?",
    answer: "Use the Pantone Connect app to scan the photo and get a Pantone code. Then cross-reference with vinyl color charts. For critical matches, order 2-3 similar samples and compare in person.",
  },
];

export default function VinylColorMatchingPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Match Vinyl Colors Accurately",
    "description": "Stop guessing at vinyl colors. Learn pro techniques for perfect matches.",
    "author": { "@type": "Organization", "name": "CricutHelper" },
    "publisher": { "@type": "Organization", "name": "CricutHelper" },
    "datePublished": "2026-02-16",
    "dateModified": "2026-02-16"
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
      
      <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12">
        <article className="max-w-4xl mx-auto px-4">
          <header className="mb-8">
            <Link href="/guides" className="text-indigo-600 hover:text-indigo-700">← Back to Guides</Link>
            <h1 className="text-4xl font-bold text-gray-900 mt-4 mb-4">
              🎨 How to Match Vinyl Colors Accurately
            </h1>
            <p className="text-xl text-gray-600">
              Stop ordering vinyl that looks nothing like your screen. Here's how to get 
              perfect color matches every time.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
              <span>📖 12 min read</span>
              <span>•</span>
              <span>Updated February 2026</span>
            </div>
          </header>

          {/* The Problem */}
          <div className="bg-amber-100 border-l-4 border-amber-500 p-4 mb-8 rounded-r-lg">
            <p className="text-amber-800">
              <strong>⚠️ Important:</strong> Your screen lies to you. The color you see on your 
              monitor is NOT what the vinyl will look like in person. Every device displays colors 
              differently. This guide will teach you how to get accurate matches despite this.
            </p>
          </div>

          {/* Color Matching Methods */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">🎯 Color Matching Methods (Ranked by Accuracy)</h2>
            <div className="space-y-6">
              {colorMatchingMethods.map((method, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-bold text-gray-900 text-xl">{method.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      method.accuracy.includes('95') ? 'bg-green-100 text-green-700' :
                      method.accuracy.includes('80') ? 'bg-blue-100 text-blue-700' :
                      'bg-amber-100 text-amber-700'
                    }`}>
                      {method.accuracy} accurate
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">✓ Pros</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        {method.pros.map((pro, i) => (
                          <li key={i}>• {pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-700 mb-2">✗ Cons</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        {method.cons.map((con, i) => (
                          <li key={i}>• {con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">How to do it:</h4>
                    <ol className="list-decimal list-inside text-gray-700 space-y-1 text-sm">
                      {method.howTo.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">❌ Common Color Matching Mistakes</h2>
            <div className="grid gap-4">
              {commonMistakes.map((item, index) => (
                <div key={index} className="bg-white rounded-xl shadow p-4 border-l-4 border-red-400">
                  <h3 className="font-semibold text-gray-900 mb-1">{item.mistake}</h3>
                  <p className="text-gray-700 text-sm">{item.fix}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pro Tips */}
          <section className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">💡 Pro Tips</h2>
            <div className="space-y-6">
              {proTips.map((tip, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{tip.title}</h3>
                    <p className="text-gray-600">{tip.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Brand Resources */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">📚 Brand Color Chart Resources</h2>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="space-y-3">
                {brandResources.map((resource, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                    <div>
                      <span className="font-semibold text-gray-900">{resource.brand}</span>
                      <span className="text-gray-500 text-sm ml-2">— {resource.note}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-4">
                💡 Search "[brand name] color chart PDF" to find downloadable color references.
              </p>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-700 text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Guides</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/materials" className="block bg-white rounded-xl shadow p-4 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900">Material Settings Database</h3>
                <p className="text-sm text-gray-600">Find perfect cut settings for any vinyl</p>
              </Link>
              <Link href="/guides/how-to-use-transfer-tape" className="block bg-white rounded-xl shadow p-4 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900">How to Use Transfer Tape</h3>
                <p className="text-sm text-gray-600">Apply your perfectly matched vinyl</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">🎨 Happy Color Matching!</h2>
            <p className="mb-6 opacity-90">
              Having cutting issues with your new vinyl? We can help.
            </p>
            <Link
              href="/troubleshoot"
              className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-colors"
            >
              Start Troubleshooting →
            </Link>
          </section>
        </article>
      </main>
    </>
  );
}
