import Link from "next/link";
import { EmailCapture } from "@/components/EmailCapture";
import { Testimonials } from "@/components/Testimonials";
import { LiveQuestions } from "@/components/LiveQuestions";
import { CommunityStats } from "@/components/CommunityStats";
import { InstallPrompt, IOSInstallPrompt } from "@/components/InstallPrompt";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* PWA Install Prompts - PRIMARY */}
      <InstallPrompt />
      <IOSInstallPrompt />

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

      {/* Community Stats - Social Proof */}
      <section>
        <CommunityStats />
      </section>

      {/* Live Questions - Shows Activity */}
      <section>
        <LiveQuestions />
      </section>

      {/* Why Us Section */}
      <section className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl p-8 md:p-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          Why crafters choose CricutHelper
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="font-bold text-gray-800 mb-2">Answers in Seconds</h3>
            <p className="text-gray-600">Not a 20-minute video. Not scrolling through 50 Facebook comments. Just the fix.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">💯</div>
            <h3 className="font-bold text-gray-800 mb-2">Honest & Real</h3>
            <p className="text-gray-600">We tell you when Cricut products suck. We recommend what actually works.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🆓</div>
            <h3 className="font-bold text-gray-800 mb-2">Free Forever</h3>
            <p className="text-gray-600">No subscription required. Core help is always free. We're crafters, not a corporation.</p>
          </div>
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

      {/* Common Problems - Quick Links */}
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

      {/* Niche Guides */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
          What are you making?
        </h2>
        <p className="text-gray-500 text-center mb-6">Specialized guides for your craft</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <NicheCard emoji="💒" name="Weddings" href="/niches/wedding" />
          <NicheCard emoji="👶" name="Baby & Nursery" href="/niches/baby-nursery" />
          <NicheCard emoji="🎭" name="Cosplay" href="/niches/cosplay" />
          <NicheCard emoji="🐕" name="Pet Items" href="/niches/pets" />
          <NicheCard emoji="🎂" name="Cake Decorating" href="/niches/cake-decorating" />
          <NicheCard emoji="🎄" name="Seasonal" href="/niches/seasonal" />
          <NicheCard emoji="🏠" name="Home Staging" href="/niches/home-staging" />
          <NicheCard emoji="🕊️" name="Memorial" href="/niches/memorial" />
        </div>
      </section>

      {/* More Tools */}
      <section className="grid md:grid-cols-2 gap-8">
        <FeatureCard
          emoji="🧮"
          title="Material Calculator"
          description="Calculate exactly how much vinyl or HTV you need. No more expensive mistakes."
          href="/calculator"
          color="blue"
        />
        <FeatureCard
          emoji="⚠️"
          title="Error Codes Lookup"
          description="Got an error code? Find out what it means and how to fix it instantly."
          href="/guides/error-codes-reference"
          color="purple"
        />
      </section>

      {/* Community Spotlight Teaser */}
      <section className="bg-gradient-to-r from-amber-50 to-pink-50 rounded-3xl p-8 text-center">
        <span className="text-5xl mb-4 block">✨</span>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Community Spotlight
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          Show off your projects and get featured! We celebrate our community's creativity 
          every week. Your project could be next.
        </p>
        <Link 
          href="/community"
          className="inline-block bg-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition-colors"
        >
          Submit Your Project →
        </Link>
      </section>

      {/* Email Capture */}
      <section>
        <EmailCapture variant="banner" />
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

function NicheCard({ emoji, name, href }: { emoji: string; name: string; href: string }) {
  return (
    <Link 
      href={href}
      className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-pink-300 hover:shadow-md transition-all"
    >
      <span className="text-2xl">{emoji}</span>
      <span className="font-medium text-gray-800">{name}</span>
    </Link>
  );
}
