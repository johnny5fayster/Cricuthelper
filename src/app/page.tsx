import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Cricut Problems? <span className="text-pink-500">We've Got Answers.</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Free troubleshooting guides, material cut settings, and tools to help you 
          get perfect cuts every time. No more guessing!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/troubleshoot" 
            className="bg-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-600 transition-colors shadow-lg hover:shadow-xl"
          >
            🔧 Fix a Problem
          </Link>
          <Link 
            href="/materials" 
            className="bg-white text-pink-500 border-2 border-pink-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-50 transition-colors"
          >
            📋 Find Cut Settings
          </Link>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="grid md:grid-cols-3 gap-8">
        <FeatureCard
          emoji="🔧"
          title="Troubleshooting Wizard"
          description="Step-by-step diagnostic to identify and fix your Cricut issues. Works for Maker, Explore, and Joy."
          href="/troubleshoot"
          color="pink"
        />
        <FeatureCard
          emoji="📋"
          title="Material Settings Database"
          description="Search 100+ materials to find the perfect blade, pressure, and speed settings for your cuts."
          href="/materials"
          color="purple"
        />
        <FeatureCard
          emoji="🧮"
          title="Cut Calculator"
          description="Calculate exactly how much vinyl, HTV, or other material you need. No more waste!"
          href="/calculator"
          color="blue"
        />
      </section>

      {/* Common Problems Section */}
      <section className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Common Problems We Solve
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <ProblemLink title="Not cutting through" href="/troubleshoot?issue=not-cutting" />
          <ProblemLink title="Mat not gripping" href="/troubleshoot?issue=mat-grip" />
          <ProblemLink title="Vinyl tearing" href="/troubleshoot?issue=tearing" />
          <ProblemLink title="Bluetooth won't connect" href="/troubleshoot?issue=bluetooth" />
          <ProblemLink title="Blade not detected" href="/troubleshoot?issue=blade" />
          <ProblemLink title="Design Space errors" href="/troubleshoot?issue=software" />
          <ProblemLink title="Uneven cuts" href="/troubleshoot?issue=uneven" />
          <ProblemLink title="Material shifting" href="/troubleshoot?issue=shifting" />
        </div>
      </section>

      {/* Popular Materials Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Popular Material Settings
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <MaterialCard name="Premium Vinyl (Oracal 651)" machine="All" />
          <MaterialCard name="Glitter Iron-On (HTV)" machine="Maker, Explore" />
          <MaterialCard name="Cardstock (65 lb)" machine="All" />
          <MaterialCard name="Faux Leather" machine="Maker" />
          <MaterialCard name="Infusible Ink" machine="All" />
          <MaterialCard name="Smart Vinyl" machine="Maker 3, Explore 3" />
        </div>
        <div className="text-center mt-6">
          <Link href="/materials" className="text-pink-500 font-semibold hover:underline">
            View all 100+ materials →
          </Link>
        </div>
      </section>

      {/* Trust Section */}
      <section className="text-center py-8 bg-pink-50 rounded-2xl">
        <p className="text-gray-600 mb-2">🎉 Helping crafters since 2026</p>
        <p className="text-2xl font-bold text-gray-800">
          Stop guessing. Start crafting.
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
  color: "pink" | "purple" | "blue";
}) {
  const colorClasses = {
    pink: "bg-pink-100 border-pink-200 hover:border-pink-400",
    purple: "bg-purple-100 border-purple-200 hover:border-purple-400",
    blue: "bg-blue-100 border-blue-200 hover:border-blue-400",
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
      className="flex items-center gap-2 p-3 rounded-lg bg-gray-50 hover:bg-pink-50 transition-colors text-gray-700 hover:text-pink-600"
    >
      <span className="text-pink-500">→</span>
      {title}
    </Link>
  );
}

function MaterialCard({ name, machine }: { name: string; machine: string }) {
  return (
    <Link 
      href={`/materials?search=${encodeURIComponent(name)}`}
      className="block p-4 bg-white rounded-xl border border-gray-200 hover:border-pink-300 hover:shadow-md transition-all"
    >
      <h4 className="font-semibold text-gray-800">{name}</h4>
      <p className="text-sm text-gray-500">Compatible: {machine}</p>
    </Link>
  );
}
