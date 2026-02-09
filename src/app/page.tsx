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
      <section className="text-center py-12">
        <p className="text-pink-500 font-semibold mb-4 text-lg">
          🎉 The Cricut community that actually helps
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Get Unstuck Fast. <span className="text-pink-500">For Free.</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Real answers from real crafters. No corporate scripts. No 15-minute YouTube videos. 
          Just solutions that work — in seconds.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/troubleshoot" 
            className="bg-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-600 transition-colors shadow-lg hover:shadow-xl"
          >
            🔧 Fix My Problem
          </Link>
          <Link 
            href="/community" 
            className="bg-white text-pink-500 border-2 border-pink-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-50 transition-colors"
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
          color="green"
        />
        <FeatureCard
          emoji="🔧"
          title="Troubleshooting Wizard"
          description="Click through and find your fix in 60 seconds. Works for Maker, Explore, and Joy."
          href="/troubleshoot"
          color="pink"
        />
        <FeatureCard
          emoji="📋"
          title="Material Settings"
          description="100+ materials with exact blade, pressure, and speed settings. Stop guessing."
          href="/materials"
          color="purple"
        />
        <FeatureCard
          emoji="🔥"
          title="Heat Press Guide"
          description="Temperature and time for every HTV type. Plus why it's not sticking."
          href="/heat-press"
          color="pink"
        />
      </section>

      {/* Common Problems - Quick Links (STAR FEATURE) */}
      <section className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
          What's going wrong?
        </h2>
        <p className="text-gray-500 text-center mb-6">Click your problem. Get the fix.</p>
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
          <Link href="/problems" className="text-pink-500 font-semibold hover:underline">
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
        <p className="text-gray-600 mb-3">Making something specific?</p>
        <Link 
          href="/niches" 
          className="inline-flex items-center gap-2 text-pink-500 font-semibold hover:text-pink-600 transition-colors"
        >
          Browse guides by project type →
        </Link>
      </section>

      {/* Trust Section */}
      <section className="text-center py-8 bg-pink-50 rounded-2xl">
        <p className="text-gray-600 mb-2">
          Made by crafters, for crafters 💕
        </p>
        <p className="text-2xl font-bold text-gray-800 mb-4">
          Where crafters help crafters.
        </p>
        <p className="text-gray-500">
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
  color: "pink" | "purple" | "blue" | "green";
}) {
  const colorClasses = {
    pink: "bg-pink-100 border-pink-200 hover:border-pink-400",
    purple: "bg-purple-100 border-purple-200 hover:border-purple-400",
    blue: "bg-blue-100 border-blue-200 hover:border-blue-400",
    green: "bg-green-100 border-green-200 hover:border-green-400",
  };

  return (
    <Link href={href} className={`block p-6 rounded-2xl border-2 transition-all hover:shadow-lg ${colorClasses[color]}`}>
      <div className="text-4xl mb-4">{emoji}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
}

function ProblemLink({ title, href }: { title: string; href: string }) {
  return (
    <Link 
      href={href} 
      className="flex items-center gap-2 p-4 min-h-[44px] rounded-lg bg-gray-50 hover:bg-pink-50 transition-colors text-gray-700 hover:text-pink-600"
    >
      <span className="text-pink-500">→</span>
      {title}
    </Link>
  );
}
