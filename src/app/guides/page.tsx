import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cricut Guides & Tutorials | CricutHelper',
  description: 'Free Cricut guides and tutorials. Learn how to fix common problems, master materials, and get the most out of your Cricut machine.',
  keywords: 'cricut guides, cricut tutorials, cricut help, cricut troubleshooting, cricut tips',
};

const guides = [
  {
    title: "Cricut Design Space Not Working? 11 Fixes That Actually Work",
    description: "Design Space frozen, slow, or showing a blank screen? Fix loading issues, lag, crashes, and connection problems.",
    href: "/guides/cricut-design-space-not-working",
    category: "Software",
    readTime: "14 min",
    featured: true,
  },
  {
    title: "Print Then Cut Not Lining Up? 9 Proven Fixes",
    description: "Cricut cutting off-center from your printed design? Step-by-step guide to fix alignment issues.",
    href: "/guides/print-then-cut-not-lining-up",
    category: "Troubleshooting",
    readTime: "12 min",
    featured: true,
  },
  {
    title: "Cricut Not Cutting Through Vinyl? 7 Fixes That Actually Work",
    description: "The most common Cricut problem, solved. Step-by-step guide to fix cutting issues with vinyl.",
    href: "/guides/cricut-not-cutting-vinyl",
    category: "Troubleshooting",
    readTime: "10 min",
    featured: true,
  },
  {
    title: "Cricut Bluetooth Not Connecting? 8 Fixes That Actually Work",
    description: "Cricut won't connect? Step-by-step solutions for Windows, Mac, iPhone, iPad, and Android.",
    href: "/guides/cricut-bluetooth-not-connecting",
    category: "Troubleshooting",
    readTime: "12 min",
    featured: false,
  },
  {
    title: "HTV Peeling After Washing? 9 Fixes for Iron-On That Won't Stay",
    description: "Why your iron-on vinyl is peeling and exactly how to fix it. Temperature, pressure, and wash care secrets.",
    href: "/guides/htv-peeling-after-washing",
    category: "Troubleshooting",
    readTime: "15 min",
    featured: false,
  },
  {
    title: "Cricut Mat Not Sticky? How to Clean & Restick Like New",
    description: "Don't throw out that mat! 4 cleaning methods plus 3 ways to restick. Save money and extend mat life.",
    href: "/guides/cricut-mat-not-sticky",
    category: "Mat Care",
    readTime: "12 min",
    featured: false,
  },
  {
    title: "How to Weed Vinyl Like a Pro: 12 Tips for Perfect Results",
    description: "Master weeding with pro techniques for small letters, intricate designs, and the reverse weeding trick.",
    href: "/guides/how-to-weed-vinyl",
    category: "Technique",
    readTime: "14 min",
    featured: false,
  },
  {
    title: "How to Cut Cardstock on Cricut: Settings, Tips & Fixing Tears",
    description: "Get the right settings for any cardstock weight plus fixes for tearing, dragging, and incomplete cuts.",
    href: "/guides/cutting-cardstock-cricut",
    category: "Materials",
    readTime: "12 min",
    featured: false,
  },
  {
    title: "Cricut Won't Turn On? 8 Fixes for Power Problems",
    description: "No lights? Red light? Step-by-step troubleshooting for all power issues on Explore, Maker, and Joy.",
    href: "/guides/cricut-wont-turn-on",
    category: "Power",
    readTime: "10 min",
    featured: false,
  },
  {
    title: "How to Use Transfer Tape: Complete Guide for Vinyl Decals",
    description: "Master transfer tape with our step-by-step tutorial. Fixes for bubbles, sticking issues, and more.",
    href: "/guides/how-to-use-transfer-tape",
    category: "Technique",
    readTime: "12 min",
    featured: false,
  },
  {
    title: "Is Cricut Access Worth It? Honest Review + Who Should Skip It",
    description: "Should you pay $120/year? Honest breakdown of what you get and who should skip it.",
    href: "/guides/is-cricut-access-worth-it",
    category: "Buying Guide",
    readTime: "14 min",
    featured: false,
  },
  {
    title: "Cricut Maker vs Explore: Which Should You Buy?",
    description: "The honest comparison. Maker or Explore? We tell you exactly which is right for YOUR projects.",
    href: "/guides/cricut-maker-vs-explore",
    category: "Buying Guide",
    readTime: "15 min",
    featured: true,
  },
  {
    title: "Infusible Ink: Complete Beginner Guide",
    description: "Vibrant, permanent designs that never peel. Transfer sheets, markers, blanks, and troubleshooting.",
    href: "/guides/infusible-ink-guide",
    category: "Tutorial",
    readTime: "16 min",
    featured: false,
  },
];

const upcomingGuides = [
  "Cricut Smart Materials: What You Need to Know",
];

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cricut Guides & Tutorials
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            In-depth guides to help you troubleshoot problems, master materials, 
            and get the most out of your Cricut machine.
          </p>
        </header>

        {/* Featured Guides */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Guides</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {guides.map((guide) => (
              <Link 
                key={guide.href}
                href={guide.href}
                className="block bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold bg-pink-100 text-pink-700 px-2 py-1 rounded-full">
                      {guide.category}
                    </span>
                    <span className="text-xs text-gray-500">{guide.readTime} read</span>
                    {guide.featured && (
                      <span className="text-xs font-semibold bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">
                        ⭐ Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{guide.title}</h3>
                  <p className="text-gray-600">{guide.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Coming Soon */}
        <section className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon</h2>
          <p className="text-gray-600 mb-6">
            We're working on more in-depth guides. Here's what's next:
          </p>
          <ul className="space-y-3">
            {upcomingGuides.map((guide, index) => (
              <li key={index} className="flex items-center gap-3 text-gray-700">
                <span className="text-pink-400">📝</span>
                {guide}
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="mt-12 bg-pink-100 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need Help Right Now?
          </h2>
          <p className="text-gray-700 mb-6">
            Try our interactive troubleshooting wizard for step-by-step diagnosis.
          </p>
          <Link
            href="/troubleshoot"
            className="inline-block bg-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-600 transition-colors"
          >
            Start Troubleshooting →
          </Link>
        </section>
      </div>
    </main>
  );
}
