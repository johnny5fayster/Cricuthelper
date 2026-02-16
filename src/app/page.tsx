import Link from "next/link";
import { EmailCapture } from "@/components/EmailCapture";
import { Testimonials } from "@/components/Testimonials";
import { InstallPrompt, IOSInstallPrompt } from "@/components/InstallPrompt";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* PWA Install Prompts - PRIMARY */}
      <InstallPrompt />
      <IOSInstallPrompt />

      {/* Sticky Mobile CTA */}
      <StickyMobileCTA />

      {/* Hero Section */}
      <section className="text-center py-12 animate-fade-in-up">
        <p className="text-[#9CAF88] font-semibold mb-4 text-lg">
          🎉 The Cricut community that actually helps
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#6B7F5E] mb-6 font-serif">
          Get Unstuck Fast. <span className="text-[#C9A962]">For Free.</span>
        </h1>
        <p className="text-xl text-[#3D3D3D] max-w-2xl mx-auto mb-8">
          Real answers from real crafters. No corporate scripts. No 15-minute YouTube videos. 
          Just solutions that work — in seconds.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/troubleshoot" 
            className="bg-[#9CAF88] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#6B7F5E] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            🔧 Fix My Problem
          </Link>
          <Link 
            href="/community" 
            className="bg-white text-[#6B7F5E] border-2 border-[#9CAF88] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#F5FAF3] transition-all"
          >
            ✨ Join the Community
          </Link>
        </div>
      </section>

      {/* Main Tools */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <FeatureCard
          emoji="💰"
          title="Profit Calculator"
          description="Know your REAL profit. Materials, labor, Etsy fees — all included. Stop underpricing!"
          href="/profit-calculator"
          color="sage"
        />
        <FeatureCard
          emoji="🔧"
          title="Troubleshooting Wizard"
          description="Click through and find your fix in 60 seconds. Works for Maker, Explore, and Joy."
          href="/troubleshoot"
          color="gold"
        />
        <FeatureCard
          emoji="📋"
          title="Material Settings"
          description="100+ materials with exact blade, pressure, and speed settings. Stop guessing."
          href="/materials"
          color="sage"
        />
        <FeatureCard
          emoji="🔥"
          title="Heat Press Guide"
          description="Temperature and time for every HTV type. Plus why it's not sticking."
          href="/heat-press"
          color="gold"
        />
      </section>

      {/* CraftCalc App Promo - NEW */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#9CAF88] to-[#6B7F5E] p-8 md:p-12 text-white">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
              📱 New App
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-white">
              CraftCalc
            </h2>
            <p className="text-lg text-white/90 mb-6">
              Your complete crafting companion. Heat settings, profit calculator, 
              material guides, and trivia — all in your pocket.
            </p>
            <ul className="space-y-2 mb-6 text-white/90">
              <li className="flex items-center gap-2">
                <span className="text-[#C9A962]">✓</span> 40+ heat press materials
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#C9A962]">✓</span> Built-in timer with haptic feedback
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#C9A962]">✓</span> Profit calculator with marketplace fees
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#C9A962]">✓</span> Works offline
              </li>
            </ul>
            <Link 
              href="/app"
              className="inline-flex items-center gap-2 bg-white text-[#6B7F5E] px-6 py-3 rounded-full font-semibold hover:bg-[#F5FAF3] transition-all"
            >
              Learn More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          <div className="hidden md:flex justify-center">
            <div className="relative">
              {/* Phone mockup */}
              <div className="w-64 h-[500px] bg-[#3D3D3D] rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-[#FAF8F5] rounded-[2.5rem] overflow-hidden flex flex-col">
                  {/* App header */}
                  <div className="bg-[#9CAF88] p-4 text-white text-center">
                    <p className="font-serif font-bold text-lg">CraftCalc</p>
                  </div>
                  {/* Feature cards */}
                  <div className="p-4 space-y-3 flex-1">
                    <div className="bg-white rounded-xl p-3 shadow-sm border border-[#B8C9A9]">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">🔥</span>
                        <span className="font-medium text-[#3D3D3D] text-sm">Heat Guide</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-3 shadow-sm border border-[#B8C9A9]">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">💰</span>
                        <span className="font-medium text-[#3D3D3D] text-sm">Profit Calculator</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-3 shadow-sm border border-[#B8C9A9]">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">✂️</span>
                        <span className="font-medium text-[#3D3D3D] text-sm">Cut Settings</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-3 shadow-sm border border-[#B8C9A9]">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">🎵</span>
                        <span className="font-medium text-[#3D3D3D] text-sm">Decades Trivia</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative sparkles */}
              <span className="absolute -top-4 -right-4 text-2xl">✨</span>
              <span className="absolute -bottom-2 -left-4 text-xl">✨</span>
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems - Quick Links (STAR FEATURE) */}
      <section className="bg-white rounded-2xl shadow-lg p-8 border border-[#B8C9A9]">
        <h2 className="text-2xl font-bold text-[#6B7F5E] mb-2 text-center font-serif">
          What's going wrong?
        </h2>
        <p className="text-[#6B7F5E] text-center mb-6">Click your problem. Get the fix.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <ProblemLink title="Not cutting through" href="/troubleshoot?issue=not-cutting" />
          <ProblemLink title="HTV peeling off" href="/troubleshoot?issue=htv-problems" />
          <ProblemLink title="Design Space crashing" href="/troubleshoot?issue=design-space" />
          <ProblemLink title="Bluetooth won't connect" href="/troubleshoot?issue=bluetooth" />
          <ProblemLink title="Print Then Cut off" href="/troubleshoot?issue=print-then-cut" />
          <ProblemLink title="Mat not sticky" href="/troubleshoot?issue=mat-grip" />
          <ProblemLink title="Weeding is hard" href="/troubleshoot?issue=weeding" />
          <ProblemLink title="Vinyl won't stick" href="/troubleshoot?issue=adhesion" />
        </div>
        <div className="text-center mt-6">
          <Link href="/problems" className="text-[#9CAF88] font-semibold hover:text-[#6B7F5E] transition-colors">
            See all common problems →
          </Link>
        </div>
      </section>

      {/* Testimonials - Social Proof */}
      <section>
        <Testimonials />
      </section>

      {/* Email Capture - Right after trust is at peak */}
      <section>
        <EmailCapture variant="banner" />
      </section>

      {/* Browse by Project Type - Collapsed from full grid */}
      <section className="text-center py-6">
        <p className="text-[#3D3D3D] mb-3">Making something specific?</p>
        <Link 
          href="/niches" 
          className="inline-flex items-center gap-2 text-[#9CAF88] font-semibold hover:text-[#6B7F5E] transition-colors"
        >
          Browse guides by project type →
        </Link>
      </section>

      {/* Trust Section */}
      <section className="text-center py-8 bg-[#F5FAF3] rounded-2xl">
        <p className="text-[#6B7F5E] mb-2">
          Made by crafters, for crafters 💕
        </p>
        <p className="text-2xl font-bold text-[#6B7F5E] mb-4 font-serif">
          Where crafters help crafters.
        </p>
        <p className="text-[#6B7F5E]">
          No subscription required. No corporate BS. Just help.
        </p>
      </section>
    </div>
  );
}

function FeatureCard({ 
  emoji, 
  title, 
  description, 
  href, 
  color 
}: { 
  emoji: string; 
  title: string; 
  description: string; 
  href: string;
  color: "sage" | "gold";
}) {
  const colorClasses = {
    sage: "bg-[#F5FAF3] border-[#B8C9A9] hover:border-[#9CAF88] hover:shadow-[0_10px_40px_rgba(156,175,136,0.15)]",
    gold: "bg-[#FFFBF0] border-[#E5D4A1] hover:border-[#C9A962] hover:shadow-[0_10px_40px_rgba(201,169,98,0.15)]",
  };

  return (
    <Link href={href} className={`block p-6 rounded-2xl border-2 transition-all ${colorClasses[color]}`}>
      <div className="text-4xl mb-4">{emoji}</div>
      <h3 className="text-xl font-bold text-[#6B7F5E] mb-2 font-serif">{title}</h3>
      <p className="text-[#3D3D3D]">{description}</p>
    </Link>
  );
}

function ProblemLink({ title, href }: { title: string; href: string }) {
  return (
    <Link 
      href={href} 
      className="flex items-center gap-2 p-4 min-h-[44px] rounded-lg bg-[#FAF8F5] hover:bg-[#F5FAF3] transition-colors text-[#3D3D3D] hover:text-[#6B7F5E] border border-transparent hover:border-[#C9A962]"
    >
      <span className="text-[#9CAF88]">→</span>
      {title}
    </Link>
  );
}
