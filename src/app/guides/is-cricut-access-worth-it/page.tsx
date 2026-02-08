import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Is Cricut Access Worth It? Honest Review + Who Should Skip It',
  description: 'Should you pay $120/year for Cricut Access? We break down what you get, what you don\'t, and give you the honest answer based on how you craft.',
  keywords: ['Cricut Access worth it', 'Cricut Access review', 'Cricut subscription', 'Cricut Access vs free', 'Cricut Access cost', 'Cricut membership'],
  openGraph: {
    title: 'Is Cricut Access Worth It? Honest Review + Who Should Skip It',
    description: 'Should you pay $120/year for Cricut Access? Honest breakdown of what you get and who should skip it.',
    type: 'article',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Cricut Access worth it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on how you craft. Cricut Access is worth it if you: make lots of different projects, don't want to search for free SVGs, value convenience over cost savings, or buy from Cricut.com regularly (10% discount). It's NOT worth it if you: mainly do your own designs, only make a few projects per year, or are comfortable finding free resources online."
      }
    },
    {
      "@type": "Question",
      "name": "How much does Cricut Access cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cricut Access has three tiers: Free (limited images/fonts), Standard at $7.99/month or $95.88/year, and Premium at $119.88/year ($9.99/month). Premium includes more images, fonts, and a 10% discount on Cricut.com purchases."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use Cricut without Access subscription?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Cricut Design Space is free to use. You can upload your own designs, use free images and fonts, and cut anything you want without paying for Access. The subscription just gives you access to Cricut's library of pre-made designs and premium fonts."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between Cricut Access Standard and Premium?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standard ($7.99/mo) includes 200,000+ images and 700+ fonts. Premium ($9.99/mo) adds more exclusive content, licensed designs, and a 10% discount on Cricut.com purchases. For most crafters, Standard is enough unless you shop frequently on Cricut.com."
      }
    },
    {
      "@type": "Question",
      "name": "Can I cancel Cricut Access anytime?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, you can cancel anytime. Monthly plans cancel at the end of your billing period. Annual plans can be cancelled but typically aren't refunded for remaining months. Any projects using Access images will still work, but you can't edit them or start new projects with Access content."
      }
    }
  ]
};

export default function CricutAccessGuide() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="text-sm mb-6">
            <ol className="flex items-center space-x-2 text-gray-500">
              <li><Link href="/" className="hover:text-pink-600">Home</Link></li>
              <li>/</li>
              <li><Link href="/guides" className="hover:text-pink-600">Guides</Link></li>
              <li>/</li>
              <li className="text-gray-900">Is Cricut Access Worth It?</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                Buying Guide
              </span>
              <span className="text-gray-500 text-sm">Updated February 2025</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Is Cricut Access Worth It? Honest Review + Who Should Skip It
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Cricut wants $120/year for their subscription. Is it worth it, or is it just a way to 
              squeeze more money out of crafters? Here's the honest breakdown.
            </p>
          </header>

          {/* Quick Answer Box */}
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl p-6 mb-8 border-l-4 border-blue-500">
            <h2 className="font-bold text-lg text-gray-900 mb-3">🎯 The Quick Answer</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="font-bold text-green-800 mb-2">✅ Worth It If You...</h3>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Make lots of different projects</li>
                  <li>• Don't want to hunt for free SVGs</li>
                  <li>• Buy materials from Cricut.com</li>
                  <li>• Value convenience over savings</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-4">
                <h3 className="font-bold text-red-800 mb-2">❌ Skip It If You...</h3>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• Create your own designs</li>
                  <li>• Only craft occasionally</li>
                  <li>• Are comfortable finding free SVGs</li>
                  <li>• Don't shop on Cricut.com</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="font-bold text-lg mb-4">📋 In This Guide</h2>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#what-is" className="text-pink-600 hover:underline">→ What is Cricut Access?</a></li>
              <li><a href="#pricing" className="text-pink-600 hover:underline">→ Pricing breakdown</a></li>
              <li><a href="#what-you-get" className="text-pink-600 hover:underline">→ What you actually get</a></li>
              <li><a href="#alternatives" className="text-pink-600 hover:underline">→ Free alternatives</a></li>
              <li><a href="#verdict" className="text-pink-600 hover:underline">→ Our verdict</a></li>
            </ul>
          </div>

          {/* Main Content */}
          <article className="prose prose-lg max-w-none">
            
            {/* What Is Section */}
            <section id="what-is" className="mb-10 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900">What is Cricut Access?</h2>
              <p>
                Cricut Access is a subscription service that gives you unlimited access to Cricut's 
                library of pre-made designs, fonts, and images within Design Space. Think of it like 
                Netflix, but for craft projects instead of movies.
              </p>
              <p>
                <strong>Important distinction:</strong> Cricut Access is NOT required to use your 
                Cricut machine. Design Space is free. You can upload your own designs, use free 
                fonts, and cut whatever you want without paying a subscription.
              </p>
              <p>
                Access just unlocks Cricut's pre-made content library — over 200,000 images and 
                700+ fonts that you'd otherwise have to pay for individually (usually $0.99-$4.99 each).
              </p>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="mb-10 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900">Cricut Access Pricing (2025)</h2>
              
              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left">Plan</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Monthly</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Annual</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Key Features</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">Free</td>
                      <td className="border border-gray-300 px-4 py-3">$0</td>
                      <td className="border border-gray-300 px-4 py-3">$0</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm">Limited free images, basic fonts, upload your own designs</td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Standard</td>
                      <td className="border border-gray-300 px-4 py-3">$7.99</td>
                      <td className="border border-gray-300 px-4 py-3">$95.88 ($7.99/mo)</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm">200,000+ images, 700+ fonts, Ready-to-Make projects</td>
                    </tr>
                    <tr className="bg-purple-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Premium</td>
                      <td className="border border-gray-300 px-4 py-3">$9.99</td>
                      <td className="border border-gray-300 px-4 py-3">$119.88 ($9.99/mo)</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm">Everything in Standard + licensed content + 10% off Cricut.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 my-4">
                <p className="text-yellow-800">
                  <strong>💡 Money math:</strong> If you'd normally buy 10+ individual images per year 
                  ($1-5 each), the subscription starts to make sense. The Premium 10% discount also 
                  helps if you spend $100+/year on Cricut.com (you'd save $10+ on the discount alone).
                </p>
              </div>
            </section>

            {/* What You Get Section */}
            <section id="what-you-get" className="mb-10 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900">What You Actually Get</h2>

              <div className="space-y-4 my-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 flex items-center gap-2">
                    <span className="text-xl">🖼️</span> 200,000+ Images
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Pre-made SVG designs for every occasion — holidays, quotes, monograms, patterns, 
                    and more. Quality varies from amazing to "why is this here?" but there's a lot 
                    to choose from.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 flex items-center gap-2">
                    <span className="text-xl">🔤</span> 700+ Fonts
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Includes writing fonts (for Cricut pens), multi-layer fonts, and regular cutting 
                    fonts. Many are exclusive to Cricut and work great for craft projects.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 flex items-center gap-2">
                    <span className="text-xl">📦</span> Ready-to-Make Projects
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Complete project files with instructions — cards, boxes, home decor, etc. Great 
                    for beginners who want step-by-step guidance.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 flex items-center gap-2">
                    <span className="text-xl">🏷️</span> 10% Discount (Premium only)
                  </h3>
                  <p className="text-gray-600 mt-2">
                    10% off everything on Cricut.com — machines, materials, tools. If you spend 
                    $1,200/year on Cricut.com, this discount alone pays for Premium.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 flex items-center gap-2">
                    <span className="text-xl">©️</span> Licensed Content (Premium only)
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Disney, Marvel, Star Wars, sports teams, and other licensed designs. These 
                    normally cost extra even with Standard subscription.
                  </p>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4 my-4">
                <h3 className="font-bold text-red-800 mb-2">⚠️ What You DON'T Get</h3>
                <ul className="text-red-700 space-y-1">
                  <li>• <strong>Ownership:</strong> If you cancel, you lose access to designs</li>
                  <li>• <strong>Commercial use (sometimes):</strong> Some images have restrictions</li>
                  <li>• <strong>Offline access:</strong> Need internet to use Access content</li>
                  <li>• <strong>Everything:</strong> Some premium images still cost extra</li>
                </ul>
              </div>
            </section>

            {/* Alternatives Section */}
            <section id="alternatives" className="mb-10 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900">Free Alternatives to Cricut Access</h2>
              <p>
                Before you subscribe, know that there's a huge world of free and cheap resources:
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">Free SVG Sites</h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• <strong>SVGCuts</strong> — Free weekly SVGs</li>
                    <li>• <strong>Love SVG</strong> — Large free library</li>
                    <li>• <strong>Design Bundles</strong> — Free section + cheap bundles</li>
                    <li>• <strong>Creative Fabrica</strong> — Free daily designs</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">Free Fonts</h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• <strong>Google Fonts</strong> — Thousands of free fonts</li>
                    <li>• <strong>DaFont</strong> — Huge variety</li>
                    <li>• <strong>Font Squirrel</strong> — Commercial-use fonts</li>
                    <li>• <strong>1001 Fonts</strong> — Categorized nicely</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">Create Your Own</h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• <strong>Canva</strong> — Free design tool</li>
                    <li>• <strong>Inkscape</strong> — Free vector editor</li>
                    <li>• <strong>Remove.bg</strong> — Free background removal</li>
                    <li>• <strong>Vectorizer.ai</strong> — Convert images to SVG</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">One-Time Purchase</h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• <strong>Etsy</strong> — Buy individual SVGs ($1-5)</li>
                    <li>• <strong>Design Bundles</strong> — Lifetime bundles</li>
                    <li>• <strong>So Fontsy</strong> — Craft-focused bundles</li>
                    <li>• <strong>Hungry JPEG</strong> — Monthly free bundle</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-4">
                <p className="text-blue-800">
                  <strong>💡 The real question:</strong> How much is your TIME worth? Finding, 
                  downloading, and organizing free SVGs takes time. If you value convenience and 
                  make lots of projects, the subscription saves hours of hunting. If you enjoy the 
                  hunt or rarely craft, free resources are plenty.
                </p>
              </div>
            </section>

            {/* Verdict Section */}
            <section id="verdict" className="mb-10 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900">Our Verdict</h2>

              <div className="space-y-6 my-6">
                <div className="bg-green-100 rounded-xl p-6 border-2 border-green-300">
                  <h3 className="font-bold text-xl text-green-800 mb-3">✅ Get Cricut Access If...</h3>
                  <ul className="text-green-700 space-y-2">
                    <li><strong>You're a new crafter</strong> — The Ready-to-Make projects and curated 
                    designs help you learn without getting overwhelmed by options.</li>
                    <li><strong>You make 2+ projects per week</strong> — The time saved finding designs 
                    adds up quickly at this volume.</li>
                    <li><strong>You hate hunting for SVGs</strong> — If searching free sites feels like 
                    work, the convenience is worth $8/month.</li>
                    <li><strong>You shop on Cricut.com</strong> — The 10% Premium discount pays for 
                    itself if you spend $100+/year there.</li>
                    <li><strong>You want licensed content</strong> — Disney, Marvel, etc. require 
                    Premium and aren't available elsewhere legally.</li>
                  </ul>
                </div>

                <div className="bg-red-100 rounded-xl p-6 border-2 border-red-300">
                  <h3 className="font-bold text-xl text-red-800 mb-3">❌ Skip Cricut Access If...</h3>
                  <ul className="text-red-700 space-y-2">
                    <li><strong>You design your own stuff</strong> — If you use Canva, Illustrator, 
                    or make original designs, you don't need their library.</li>
                    <li><strong>You craft occasionally</strong> — A few projects per year? Buy 
                    individual designs as needed for $1-5 each.</li>
                    <li><strong>You're good at finding free resources</strong> — There's amazing free 
                    content out there if you know where to look.</li>
                    <li><strong>You're on a tight budget</strong> — That $96-120/year is better spent 
                    on materials if money is tight.</li>
                    <li><strong>You mainly cut vinyl</strong> — Simple text and shapes don't need 
                    fancy pre-made designs.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-100 rounded-xl p-6">
                <h3 className="font-bold text-xl text-gray-900 mb-3">💡 The Smart Approach</h3>
                <ol className="text-gray-700 space-y-2">
                  <li><strong>1. Start free.</strong> Use Design Space's free content and find free 
                  SVGs online. See if you actually need more.</li>
                  <li><strong>2. Try monthly.</strong> If you find yourself wanting Access content 
                  often, try one month ($7.99) during a busy crafting period.</li>
                  <li><strong>3. Go annual if hooked.</strong> Once you know you'll use it, the 
                  annual plan saves money over monthly.</li>
                  <li><strong>4. Premium only if you shop at Cricut.com.</strong> The 10% discount 
                  is the main reason to upgrade from Standard.</li>
                </ol>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
              
              <div className="space-y-6 mt-4">
                <div>
                  <h3 className="font-bold text-gray-900">Can I use Cricut without Access?</h3>
                  <p className="text-gray-600">
                    Yes! Design Space is 100% free. You can upload your own designs, use free 
                    content, and cut anything without a subscription.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900">What happens if I cancel?</h3>
                  <p className="text-gray-600">
                    You lose access to the subscription content, but projects you've already made 
                    still work. You just can't edit them or create new projects with Access content.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900">Is there a free trial?</h3>
                  <p className="text-gray-600">
                    Sometimes. Cricut occasionally offers free trials with new machine purchases 
                    or during promotions. Check their website for current offers.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900">Standard vs Premium — which is better?</h3>
                  <p className="text-gray-600">
                    For most people, Standard is enough. Only get Premium if you want licensed 
                    content (Disney, etc.) or spend $100+/year on Cricut.com (the 10% discount helps).
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
                href="/guides/cricut-design-space-not-working"
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-pink-300 hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900">Design Space Not Working</h3>
                <p className="text-gray-600 text-sm mt-1">Troubleshoot the free software you'll use either way.</p>
              </Link>
              <Link 
                href="/guides/cricut-not-cutting-vinyl"
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-pink-300 hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900">Vinyl Cutting Problems</h3>
                <p className="text-gray-600 text-sm mt-1">Fix cutting issues regardless of subscription status.</p>
              </Link>
              <Link 
                href="/troubleshoot"
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-pink-300 hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900">Troubleshooting Wizard</h3>
                <p className="text-gray-600 text-sm mt-1">Diagnose any Cricut issue step by step.</p>
              </Link>
              <Link 
                href="/materials"
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-pink-300 hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900">Material Settings</h3>
                <p className="text-gray-600 text-sm mt-1">Free settings database — no subscription needed.</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">More Questions About Your Cricut?</h2>
            <p className="text-blue-100 mb-6">
              Our free troubleshooting wizard and guides help you get the most out of your machine 
              — no subscription required.
            </p>
            <Link
              href="/troubleshoot"
              className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition-colors"
            >
              Start Troubleshooting
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
