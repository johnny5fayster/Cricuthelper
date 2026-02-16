import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "30 Easy Cricut Easter Projects for Beginners (2026) | CricutHelper",
  description: "DIY Easter decorations, baskets, shirts, and crafts with your Cricut. Free ideas for bunnies, eggs, spring decor, and party supplies.",
  keywords: "cricut easter projects, easter cricut ideas, easter bunny cricut, easter egg cricut, easter shirts cricut, easter basket cricut",
  openGraph: {
    title: "30 Easy Cricut Easter Projects for Beginners",
    description: "DIY bunnies, Easter eggs, spring decor, and festive crafts with your Cricut machine.",
    type: 'article',
  },
};

const projects = [
  {
    category: "Shirts & Apparel",
    items: [
      { name: "Bunny Ears T-Shirt", difficulty: "Easy", material: "HTV", time: "20 min" },
      { name: "Easter Egg Hunt Crew Tee", difficulty: "Easy", material: "HTV", time: "20 min" },
      { name: "Baby's First Easter Onesie", difficulty: "Easy", material: "HTV", time: "15 min" },
      { name: "Some Bunny Loves Me Sweatshirt", difficulty: "Easy", material: "HTV", time: "25 min" },
      { name: "Bunny Ear Headband", difficulty: "Medium", material: "Felt + Faux Fur", time: "30 min" },
      { name: "Hip Hop Easter Tee", difficulty: "Easy", material: "HTV", time: "20 min" },
    ]
  },
  {
    category: "Home Decor",
    items: [
      { name: "Happy Easter Door Sign", difficulty: "Easy", material: "Vinyl", time: "30 min" },
      { name: "Spring Bunny Banner", difficulty: "Easy", material: "Cardstock", time: "45 min" },
      { name: "Easter Egg Wreath", difficulty: "Medium", material: "Cardstock", time: "1 hr" },
      { name: "Bunny Window Clings", difficulty: "Easy", material: "Window Cling", time: "20 min" },
      { name: "He Is Risen Wood Sign", difficulty: "Medium", material: "Vinyl on Wood", time: "45 min" },
      { name: "Spring Flower Centerpiece", difficulty: "Medium", material: "Cardstock", time: "1 hr" },
    ]
  },
  {
    category: "Baskets & Gift Packaging",
    items: [
      { name: "Personalized Easter Basket Tags", difficulty: "Easy", material: "Cardstock", time: "15 min" },
      { name: "Bunny Treat Boxes", difficulty: "Medium", material: "Cardstock", time: "30 min" },
      { name: "Easter Egg Gift Boxes", difficulty: "Medium", material: "Cardstock", time: "35 min" },
      { name: "Carrot Treat Bags", difficulty: "Easy", material: "Vinyl + Cellophane", time: "20 min" },
      { name: "Basket Name Labels", difficulty: "Easy", material: "Vinyl", time: "15 min" },
    ]
  },
  {
    category: "Party Supplies",
    items: [
      { name: "Easter Egg Cupcake Toppers", difficulty: "Easy", material: "Cardstock", time: "20 min" },
      { name: "Bunny Cake Topper", difficulty: "Medium", material: "Cardstock", time: "30 min" },
      { name: "Easter Egg Hunt Signs", difficulty: "Easy", material: "Cardstock", time: "25 min" },
      { name: "Spring Photo Props", difficulty: "Easy", material: "Cardstock", time: "30 min" },
      { name: "Pastel Place Cards", difficulty: "Easy", material: "Cardstock", time: "20 min" },
    ]
  },
  {
    category: "Kids & Classroom",
    items: [
      { name: "Easter Egg Coloring Cards", difficulty: "Easy", material: "Cardstock", time: "15 min" },
      { name: "Bunny Bookmarks", difficulty: "Easy", material: "Cardstock", time: "15 min" },
      { name: "Peeps Name Tags", difficulty: "Easy", material: "Cardstock", time: "20 min" },
      { name: "Easter Hunt Clue Cards", difficulty: "Easy", material: "Cardstock", time: "25 min" },
      { name: "Chick Finger Puppets", difficulty: "Medium", material: "Felt", time: "30 min" },
    ]
  },
  {
    category: "Drinkware & Accessories",
    items: [
      { name: "Easter Bunny Tumbler", difficulty: "Easy", material: "Vinyl", time: "20 min" },
      { name: "Pastel Egg Wine Glass", difficulty: "Easy", material: "Vinyl", time: "15 min" },
      { name: "Spring Coffee Mug", difficulty: "Easy", material: "Vinyl or Infusible Ink", time: "25 min" },
      { name: "Glitter Bunny Tumbler", difficulty: "Medium", material: "Glitter + Epoxy", time: "2 hr" },
    ]
  },
];

const faqs = [
  {
    question: "What are the best pastel vinyl colors for Easter projects?",
    answer: "For that classic Easter look, stock up on soft pink, lavender, mint green, baby blue, and pale yellow. Oracal 651 and Cricut Premium Vinyl both have great pastel options. Mix with white and gold accents for extra pop."
  },
  {
    question: "Where can I find free Easter SVGs for Cricut?",
    answer: "Cricut Design Space has hundreds of free Easter images (search 'Easter', 'bunny', or 'spring'). You can also find free SVGs on Creative Fabrica, Design Bundles free section, and many craft bloggers share Easter freebies in March/April."
  },
  {
    question: "How do I make bunny ears in Design Space?",
    answer: "Search 'bunny ears' or 'rabbit' in Images for free options. To make your own, use the oval shape tool to create two elongated ovals, add pink inner ears with smaller ovals, and weld them together. Easy and customizable!"
  },
  {
    question: "What Cricut settings work best for glitter cardstock Easter eggs?",
    answer: "Use the 'Glitter Cardstock' setting or Medium Cardstock with More pressure. Do a test cut first—glitter cardstock can be tricky. If it's not cutting through, try the 'Intricate Cuts' setting or increase pressure."
  },
  {
    question: "How early should I start making Easter crafts?",
    answer: "Start 2-4 weeks before Easter for best results. This gives you time to order materials, test designs, and fix any issues. If you're selling, start even earlier—crafters buy Easter items in early March!"
  }
];

export default function EasterProjectsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "30 Easy Cricut Easter Projects for Beginners",
    "description": "DIY Easter decorations, baskets, shirts, and crafts with your Cricut.",
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
      
      <main className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-white py-12">
        <article className="max-w-4xl mx-auto px-4">
          <header className="mb-8">
            <Link href="/guides" className="text-purple-600 hover:text-purple-700">← Back to Guides</Link>
            <h1 className="text-4xl font-bold text-gray-900 mt-4 mb-4">
              🐰 30 Easy Cricut Easter Projects for Beginners
            </h1>
            <p className="text-xl text-gray-600">
              Hop into spring with these adorable DIY Easter crafts! From bunny shirts to egg hunt 
              decorations, these beginner-friendly projects work on all Cricut machines.
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
              <span>📖 15 min read</span>
              <span>•</span>
              <span>Updated February 2026</span>
            </div>
          </header>

          {/* Quick Jump */}
          <nav className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="font-bold text-gray-900 mb-4">📋 Jump To</h2>
            <div className="flex flex-wrap gap-2">
              {projects.map((section) => (
                <a 
                  key={section.category}
                  href={`#${section.category.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm hover:bg-purple-200 transition-colors"
                >
                  {section.category}
                </a>
              ))}
            </div>
          </nav>

          {/* Intro */}
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 border-l-4 border-purple-400 p-4 mb-8 rounded-r-lg">
            <p className="text-purple-800">
              <strong>🐣 Easter is April 20, 2026!</strong> Crafters start shopping 2-4 weeks early, 
              so now's the perfect time to start your projects. We've got 30 ideas organized by category—most 
              take under 30 minutes!
            </p>
          </div>

          {/* Projects by Category */}
          {projects.map((section) => (
            <section 
              key={section.category}
              id={section.category.toLowerCase().replace(/\s+/g, '-')}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {section.category === "Shirts & Apparel" && "👕 "}
                {section.category === "Home Decor" && "🏠 "}
                {section.category === "Baskets & Gift Packaging" && "🧺 "}
                {section.category === "Party Supplies" && "🎉 "}
                {section.category === "Kids & Classroom" && "🧒 "}
                {section.category === "Drinkware & Accessories" && "☕ "}
                {section.category}
              </h2>
              
              <div className="grid gap-4">
                {section.items.map((item, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-xl shadow p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <h3 className="font-semibold text-gray-900">{item.name}</h3>
                        <p className="text-sm text-gray-500">{item.material}</p>
                      </div>
                      <div className="flex gap-2">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          item.difficulty === 'Easy' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {item.difficulty}
                        </span>
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          ⏱ {item.time}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Tips Section */}
          <section className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">💡 Pro Tips for Easter Crafting</h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex gap-3">
                <span className="text-purple-500 text-xl">✓</span>
                <div>
                  <strong>Embrace pastels.</strong> Soft pinks, lavenders, mint greens, and baby blues 
                  scream Easter. Mix 3-4 pastel shades for visual interest.
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-purple-500 text-xl">✓</span>
                <div>
                  <strong>Add texture.</strong> Combine glitter vinyl with matte, or use faux fur 
                  for bunny accents. Layering materials makes projects pop.
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-purple-500 text-xl">✓</span>
                <div>
                  <strong>Personalize everything.</strong> Adding names to basket tags, shirts, and 
                  decorations makes them gift-worthy and sell-worthy.
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-purple-500 text-xl">✓</span>
                <div>
                  <strong>Batch by material.</strong> Cut all your pink vinyl projects together, 
                  then move to cardstock. Reduces material waste and setup time.
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-purple-500 text-xl">✓</span>
                <div>
                  <strong>Start early.</strong> Easter crafts sell best 2-4 weeks before the holiday. 
                  Start making inventory now if you plan to sell!
                </div>
              </div>
            </div>
          </section>

          {/* Material Shopping */}
          <section className="bg-purple-50 rounded-2xl p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">🛒 Easter Crafting Essentials</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">For Shirts & HTV Projects</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Pastel HTV bundle (pink, lavender, mint)</li>
                  <li>• White and gold glitter HTV</li>
                  <li>• White blank shirts and onesies</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">For Paper Crafts</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Pastel cardstock variety pack</li>
                  <li>• Glitter cardstock (spring colors)</li>
                  <li>• White cardstock for bases</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">For Decor & Drinkware</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Permanent vinyl in pastels</li>
                  <li>• Gold and rose gold vinyl</li>
                  <li>• Transfer tape</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Fun Add-Ons</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Faux fur for bunny ears</li>
                  <li>• Felt sheets (pastel pack)</li>
                  <li>• Ribbon and twine</li>
                </ul>
              </div>
            </div>
            <div className="mt-4">
              <Link 
                href="/shop"
                className="inline-block bg-purple-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-600 transition-colors"
              >
                Shop Materials →
              </Link>
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
              <Link href="/guides/htv-peeling-after-washing" className="block bg-white rounded-xl shadow p-4 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900">HTV Peeling After Washing?</h3>
                <p className="text-sm text-gray-600">Keep your Easter shirts looking fresh</p>
              </Link>
              <Link href="/guides/cricut-st-patricks-day-projects" className="block bg-white rounded-xl shadow p-4 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900">St. Patrick's Day Projects</h3>
                <p className="text-sm text-gray-600">More seasonal inspiration</p>
              </Link>
              <Link href="/materials" className="block bg-white rounded-xl shadow p-4 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900">Material Settings Database</h3>
                <p className="text-sm text-gray-600">Find perfect cut settings</p>
              </Link>
              <Link href="/heat-press" className="block bg-white rounded-xl shadow p-4 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900">Heat Press Temperature Guide</h3>
                <p className="text-sm text-gray-600">Get HTV temps right every time</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">🐰 Happy Easter Crafting!</h2>
            <p className="mb-6 opacity-90">
              Need help with your project? Our troubleshooting wizard can fix any Cricut issue.
            </p>
            <Link
              href="/troubleshoot"
              className="inline-block bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors"
            >
              Start Troubleshooting →
            </Link>
          </section>
        </article>
      </main>
    </>
  );
}
