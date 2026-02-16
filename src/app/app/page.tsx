import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CraftCalc App - Your Complete Crafting Companion",
  description: "Heat settings, profit calculator, material guides, and more — all in your pocket. The essential app for Cricut crafters.",
};

export default function CraftCalcPage() {
  return (
    <div className="space-y-16 py-8">
      {/* Hero */}
      <section className="text-center">
        <span className="inline-block px-4 py-2 bg-[#F5E6E6] text-[#D4A5A5] rounded-full text-sm font-semibold mb-6">
          📱 Coming Soon to iOS & Android
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-[#6B7F5E] mb-6 font-serif">
          CraftCalc
        </h1>
        <p className="text-xl text-[#3D3D3D] max-w-2xl mx-auto mb-8">
          Your complete crafting companion. Everything you need to create perfect projects — 
          heat settings, profit calculations, troubleshooting, and more.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-[#9CAF88] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#6B7F5E] transition-all shadow-lg opacity-75 cursor-not-allowed">
            🍎 App Store (Coming Soon)
          </button>
          <button className="bg-[#3D3D3D] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#2D2D2D] transition-all shadow-lg opacity-75 cursor-not-allowed">
            🤖 Google Play (Coming Soon)
          </button>
        </div>
      </section>

      {/* Features Grid */}
      <section>
        <h2 className="text-3xl font-bold text-[#6B7F5E] text-center mb-12 font-serif">
          Everything You Need
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon="🔥"
            title="Heat Guide"
            description="40+ materials with exact temperature, time, and pressure settings. Built-in timer with sound alerts."
          />
          <FeatureCard
            icon="💰"
            title="Profit Calculator"
            description="Know your real profit including materials, labor, and marketplace fees (Etsy, Amazon, Shopify, eBay)."
          />
          <FeatureCard
            icon="✂️"
            title="Cut Settings"
            description="Blade, pressure, and speed settings for every material. Stop the guesswork."
          />
          <FeatureCard
            icon="🔧"
            title="Troubleshooter"
            description="Fix common issues in 60 seconds. Step-by-step guides for Maker, Explore, and Joy."
          />
          <FeatureCard
            icon="📊"
            title="Vinyl Calculator"
            description="Calculate exactly how much vinyl you need. Optimize layouts. Reduce waste."
          />
          <FeatureCard
            icon="🎵"
            title="Decades Trivia"
            description="70s, 80s, 90s, 2000s trivia with celebration animations. Carlton would be proud! 🕺"
          />
          <FeatureCard
            icon="🏆"
            title="Achievements"
            description="21 badges to unlock. Track your crafting journey and share your progress."
          />
          <FeatureCard
            icon="📄"
            title="PDF Export"
            description="Print cheat sheets for your craft room. Quick reference cards for heat settings."
          />
          <FeatureCard
            icon="🌐"
            title="Works Offline"
            description="No internet needed. Your craft companion works everywhere — even in the basement."
          />
        </div>
      </section>

      {/* App Preview */}
      <section className="bg-gradient-to-br from-[#9CAF88] to-[#6B7F5E] rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="relative grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-white">
              Designed for Real Crafters
            </h2>
            <p className="text-lg text-white/90 mb-8">
              We built CraftCalc because we were tired of Googling the same heat settings over and over. 
              Now it's all in one place — beautiful, fast, and reliable.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-[#C9A962] text-xl">✓</span>
                <div>
                  <p className="font-semibold">Large Touch Targets</p>
                  <p className="text-white/70 text-sm">Designed for 35-50 demographic. No tiny buttons.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#C9A962] text-xl">✓</span>
                <div>
                  <p className="font-semibold">Haptic Feedback</p>
                  <p className="text-white/70 text-sm">Feel the timer. Know when it's done.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#C9A962] text-xl">✓</span>
                <div>
                  <p className="font-semibold">Dark Mode</p>
                  <p className="text-white/70 text-sm">Easy on the eyes during late-night crafting sessions.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="flex justify-center">
            {/* Phone mockup - larger */}
            <div className="w-72 h-[560px] bg-[#3D3D3D] rounded-[3rem] p-3 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="w-full h-full bg-[#FAF8F5] rounded-[2.5rem] overflow-hidden">
                {/* App content preview */}
                <div className="bg-[#9CAF88] p-5 text-white">
                  <p className="font-serif font-bold text-xl text-center">CraftCalc</p>
                </div>
                <div className="p-5 space-y-4">
                  <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#B8C9A9]">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">🔥</span>
                      <span className="font-semibold text-[#6B7F5E]">Heat Guide</span>
                    </div>
                    <p className="text-[#3D3D3D] text-sm">40+ materials</p>
                  </div>
                  <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#B8C9A9]">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">💰</span>
                      <span className="font-semibold text-[#6B7F5E]">Profit Calculator</span>
                    </div>
                    <p className="text-[#3D3D3D] text-sm">Know your margins</p>
                  </div>
                  <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#B8C9A9]">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">🎵</span>
                      <span className="font-semibold text-[#6B7F5E]">Decades Trivia</span>
                    </div>
                    <p className="text-[#3D3D3D] text-sm">🕺 Carlton approved</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-[#6B7F5E] mb-4 font-serif">
          Simple Pricing
        </h2>
        <p className="text-[#3D3D3D] mb-12 max-w-xl mx-auto">
          Try everything free. Upgrade when you're ready.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Free Tier */}
          <div className="bg-white rounded-2xl p-8 border-2 border-[#B8C9A9]">
            <h3 className="text-xl font-bold text-[#6B7F5E] mb-2 font-serif">Free</h3>
            <p className="text-4xl font-bold text-[#3D3D3D] mb-6">$0</p>
            <ul className="text-left space-y-3 mb-8">
              <li className="flex items-center gap-2 text-[#3D3D3D]">
                <span className="text-[#9CAF88]">✓</span> 8 calculations/day
              </li>
              <li className="flex items-center gap-2 text-[#3D3D3D]">
                <span className="text-[#9CAF88]">✓</span> Heat guide (all materials)
              </li>
              <li className="flex items-center gap-2 text-[#3D3D3D]">
                <span className="text-[#9CAF88]">✓</span> Troubleshooter
              </li>
              <li className="flex items-center gap-2 text-[#3D3D3D]">
                <span className="text-[#9CAF88]">✓</span> Trivia & achievements
              </li>
              <li className="flex items-center gap-2 text-[#6B7F5E]">
                <span className="text-[#C9A962]">★</span> Refer a friend = 12 calcs/day
              </li>
            </ul>
            <button className="w-full py-3 rounded-full border-2 border-[#9CAF88] text-[#6B7F5E] font-semibold hover:bg-[#F5E6E6] transition-colors">
              Get Started Free
            </button>
          </div>
          
          {/* Pro Tier */}
          <div className="bg-gradient-to-br from-[#9CAF88] to-[#6B7F5E] rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-[#C9A962] text-white text-xs font-bold px-3 py-1 rounded-full">
              BEST VALUE
            </div>
            <h3 className="text-xl font-bold mb-2 font-serif">Pro</h3>
            <p className="text-4xl font-bold mb-2">$4.99</p>
            <p className="text-white/70 mb-6">/year</p>
            <ul className="text-left space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-[#C9A962]">✓</span> Unlimited calculations
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#C9A962]">✓</span> Cloud sync across devices
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#C9A962]">✓</span> PDF export & printing
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#C9A962]">✓</span> Custom materials
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#C9A962]">✓</span> Priority support
              </li>
            </ul>
            <button className="w-full py-3 rounded-full bg-white text-[#6B7F5E] font-semibold hover:bg-[#F5E6E6] transition-colors">
              Start Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-[#F5E6E6] rounded-2xl p-12">
        <h2 className="text-3xl font-bold text-[#6B7F5E] mb-4 font-serif">
          Get Notified at Launch
        </h2>
        <p className="text-[#3D3D3D] mb-8 max-w-xl mx-auto">
          Be the first to know when CraftCalc hits the App Store. 
          Early adopters get 50% off Pro for life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 px-6 py-3 rounded-full border-2 border-[#B8C9A9] focus:border-[#9CAF88] focus:ring-2 focus:ring-[#B8C9A9] outline-none"
          />
          <button className="bg-[#9CAF88] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#6B7F5E] transition-all">
            Notify Me
          </button>
        </div>
      </section>

      {/* Back to home */}
      <div className="text-center">
        <Link href="/" className="text-[#9CAF88] hover:text-[#6B7F5E] font-medium transition-colors">
          ← Back to CricutHelper
        </Link>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-[#B8C9A9] hover:border-[#9CAF88] transition-all hover:shadow-[0_10px_40px_rgba(156,175,136,0.1)]">
      <span className="text-4xl mb-4 block">{icon}</span>
      <h3 className="text-lg font-bold text-[#6B7F5E] mb-2 font-serif">{title}</h3>
      <p className="text-[#3D3D3D] text-sm">{description}</p>
    </div>
  );
}
