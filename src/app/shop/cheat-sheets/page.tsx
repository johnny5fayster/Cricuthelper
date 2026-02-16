import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cricut Cheat Sheet Bundle - 4 Printable PDFs | $4.99',
  description: 'Stop Googling settings every project! Get 4 printable cheat sheets: Material Settings, Blade Guide, Heat Press Temps, and Troubleshooting Quick Reference.',
  keywords: ['Cricut cheat sheet', 'Cricut settings PDF', 'Cricut printable', 'heat press temperature chart', 'Cricut blade guide'],
  openGraph: {
    title: 'Cricut Cheat Sheet Bundle - 4 Printable PDFs',
    description: 'Stop Googling settings every project! Material Settings, Blade Guide, Heat Press Temps, and Troubleshooting Quick Reference.',
    type: 'website',
  },
};

export default function CheatSheetsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF8F5] to-white">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        
        {/* Breadcrumb */}
        <nav className="text-sm mb-8">
          <ol className="flex items-center space-x-2 text-gray-500">
            <li><Link href="/" className="hover:text-[#9CAF88]">Home</Link></li>
            <li>/</li>
            <li className="text-gray-900">Cheat Sheet Bundle</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-[#B8C9A9]">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#F5E6E6] to-purple-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📋</div>
                  <div className="text-2xl font-bold text-gray-800">4 Cheat Sheets</div>
                  <div className="text-gray-600">Printable PDFs</div>
                </div>
              </div>
            </div>
            
            {/* Preview thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {['📊 Material Settings', '🔪 Blade Guide', '🔥 Heat Press', '🔧 Troubleshooting'].map((item, i) => (
                <div key={i} className="bg-white rounded-lg p-3 text-center border border-gray-200 text-xs">
                  <div className="text-xl mb-1">{item.split(' ')[0]}</div>
                  <div className="text-gray-600">{item.split(' ').slice(1).join(' ')}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-4">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                Instant Download
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cricut Cheat Sheet Bundle
            </h1>
            
            <p className="text-xl text-gray-600 mb-6">
              Stop Googling settings every project. Print these, keep them by your machine, 
              and save hours of frustration.
            </p>

            {/* Price */}
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">$4.99</span>
              <span className="text-gray-500 ml-2 line-through">$9.99</span>
              <span className="ml-2 bg-red-100 text-red-700 px-2 py-1 rounded text-sm font-medium">
                50% OFF
              </span>
            </div>

            {/* Buy Button - Will be replaced with Gumroad link */}
            <a
              href="#coming-soon"
              id="buy"
              className="block w-full bg-gradient-to-r from-[#9CAF88] to-purple-500 text-white text-center font-bold py-4 px-8 rounded-xl text-lg hover:from-[#6B7F5E] hover:to-purple-600 transition-all shadow-lg hover:shadow-xl mb-6"
            >
              Buy Now — Instant Download
            </a>
            <p className="text-center text-xs text-orange-600 mb-4 bg-orange-50 rounded-lg py-2">
              🚧 Payment system launching this week! Bookmark this page.
            </p>

            <p className="text-center text-sm text-gray-500 mb-8">
              ✓ PDF format ✓ Print at home ✓ Lifetime access
            </p>

            {/* What's Included */}
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h2 className="font-bold text-lg text-gray-900 mb-4">📦 What's Included</h2>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="text-2xl">📊</div>
                  <div>
                    <h3 className="font-bold text-gray-900">Material Settings Cheat Sheet</h3>
                    <p className="text-gray-600 text-sm">
                      Cut settings for 30+ materials — vinyl, HTV, cardstock, fabric, and more. 
                      Includes which mat to use.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="text-2xl">🔪</div>
                  <div>
                    <h3 className="font-bold text-gray-900">Blade Guide</h3>
                    <p className="text-gray-600 text-sm">
                      Which blade for which material. Fine Point, Deep Point, Rotary, Knife — 
                      plus when to replace.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="text-2xl">🔥</div>
                  <div>
                    <h3 className="font-bold text-gray-900">Heat Press Temperature Guide</h3>
                    <p className="text-gray-600 text-sm">
                      Temps and times for every Cricut HTV type. Plus fabric max temps and 
                      hot vs cold peel reference.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="text-2xl">🔧</div>
                  <div>
                    <h3 className="font-bold text-gray-900">Troubleshooting Quick Reference</h3>
                    <p className="text-gray-600 text-sm">
                      Common problems & instant fixes on one page. Cutting issues, connection 
                      issues, HTV peeling — all covered.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <span className="text-gray-600 text-sm">From fellow crafters</span>
              </div>
              <p className="text-gray-700 italic text-sm">
                "I printed these and laminated them. They live next to my Cricut and I use 
                them every single project. So much better than searching every time!"
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">How do I get my files?</h3>
              <p className="text-gray-600 text-sm">
                Instantly! After purchase, you'll receive a download link via email. You can 
                also access your files anytime from your account.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">What format are the files?</h3>
              <p className="text-gray-600 text-sm">
                PDF format, sized for standard US Letter (8.5" x 11"). Print at home on any 
                printer. Works great laminated!
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Which machines are covered?</h3>
              <p className="text-gray-600 text-sm">
                All current Cricut machines: Joy, Explore Air 2, Explore 3, Maker, Maker 3, 
                and Venture. Settings work across the whole lineup.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Can I share these?</h3>
              <p className="text-gray-600 text-sm">
                These are for personal use only. Please don't redistribute. But we'd love it 
                if you told your crafting friends about CricutHelper!
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-[#9CAF88] to-purple-500 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to craft smarter?</h2>
          <p className="text-white/80 mb-6 max-w-xl mx-auto">
            Stop wasting time looking up settings. Get the cheat sheets and spend more time 
            actually making things.
          </p>
          <a
            href="#buy"
            className="inline-block bg-white text-[#9CAF88] font-bold py-3 px-8 rounded-full hover:bg-[#F5FAF3] transition-colors"
          >
            Get the Bundle — $4.99
          </a>
        </div>
      </div>
    </div>
  );
}
