import Link from "next/link";

export default function GuidesPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Link href="/" className="text-pink-500 hover:underline">← Home</Link>
        <h1 className="text-3xl font-bold text-gray-800 mt-4">📚 Guides & Tutorials</h1>
        <p className="text-gray-600 mt-2">Learn how to get the most out of your Cricut machine.</p>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8 text-center mb-8">
        <h2 className="text-2xl font-bold text-yellow-800 mb-2">🚧 Coming Soon!</h2>
        <p className="text-yellow-700">
          We're working on comprehensive guides for every skill level. 
          Check back soon!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <GuidePreview
          title="Getting Started with Your Cricut"
          description="Brand new to Cricut? Start here. We'll walk you through setup, your first cut, and essential tips."
          level="Beginner"
          comingSoon
        />
        <GuidePreview
          title="Mastering Iron-On/HTV"
          description="Everything you need to know about heat transfer vinyl: cutting, weeding, pressing, and troubleshooting."
          level="Beginner"
          comingSoon
        />
        <GuidePreview
          title="Design Space Deep Dive"
          description="Unlock the full power of Cricut Design Space. Layers, welding, slicing, and more."
          level="Intermediate"
          comingSoon
        />
        <GuidePreview
          title="Print Then Cut Like a Pro"
          description="Create custom stickers, labels, and more. Tips for perfect registration every time."
          level="Intermediate"
          comingSoon
        />
        <GuidePreview
          title="Working with Fabric"
          description="Rotary blade, bonded fabric, stabilizers - learn when and how to use each method."
          level="Intermediate"
          comingSoon
        />
        <GuidePreview
          title="Knife Blade Mastery (Maker)"
          description="Cut thick materials like leather, balsa wood, and chipboard. Safety tips included."
          level="Advanced"
          comingSoon
        />
      </div>

      {/* Newsletter signup placeholder */}
      <div className="mt-12 bg-pink-100 rounded-2xl p-8 text-center">
        <h3 className="text-xl font-bold text-pink-800 mb-2">📬 Get Notified</h3>
        <p className="text-pink-700 mb-4">
          Want to know when new guides are published? Join our mailing list!
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 px-4 py-3 rounded-full border border-pink-200 focus:border-pink-400 outline-none"
            disabled
          />
          <button 
            className="bg-pink-500 text-white px-6 py-3 rounded-full font-semibold opacity-50 cursor-not-allowed"
            disabled
          >
            Subscribe
          </button>
        </div>
        <p className="text-xs text-pink-600 mt-2">Newsletter coming soon!</p>
      </div>
    </div>
  );
}

function GuidePreview({ 
  title, 
  description, 
  level, 
  comingSoon 
}: { 
  title: string; 
  description: string; 
  level: "Beginner" | "Intermediate" | "Advanced";
  comingSoon?: boolean;
}) {
  const levelColors = {
    Beginner: "bg-green-100 text-green-700",
    Intermediate: "bg-yellow-100 text-yellow-700",
    Advanced: "bg-red-100 text-red-700",
  };

  return (
    <div className={`bg-white rounded-xl border border-gray-200 p-6 ${comingSoon ? 'opacity-75' : 'hover:border-pink-300 hover:shadow-md cursor-pointer'} transition-all`}>
      <div className="flex items-start justify-between mb-3">
        <span className={`text-xs font-medium px-2 py-1 rounded-full ${levelColors[level]}`}>
          {level}
        </span>
        {comingSoon && (
          <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-full">
            Coming Soon
          </span>
        )}
      </div>
      <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
