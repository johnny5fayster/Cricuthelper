import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "25 Easy Cricut St. Patrick's Day Projects (2026) | CricutHelper",
  description: "DIY St. Patrick's Day decorations, shirts, and crafts with your Cricut. Free ideas for shamrocks, lucky signs, green decor, and party supplies.",
  keywords: "cricut st patricks day, st patricks day cricut projects, shamrock cricut, lucky svg cricut, st patricks day shirts cricut",
  openGraph: {
    title: "25 Easy Cricut St. Patrick's Day Projects",
    description: "DIY shamrocks, lucky shirts, and festive decor with your Cricut machine.",
    type: 'article',
  },
};

const projects = [
  {
    category: "Shirts & Apparel",
    items: [
      { name: "Lucky Clover T-Shirt", difficulty: "Easy", material: "HTV", time: "20 min" },
      { name: "Kiss Me I'm Irish Tee", difficulty: "Easy", material: "HTV", time: "20 min" },
      { name: "Shamrock Baby Onesie", difficulty: "Easy", material: "HTV", time: "15 min" },
      { name: "Feeling Lucky Sweatshirt", difficulty: "Easy", material: "HTV", time: "25 min" },
      { name: "Leprechaun Hat Headband", difficulty: "Medium", material: "Felt + HTV", time: "30 min" },
    ]
  },
  {
    category: "Home Decor",
    items: [
      { name: "Lucky Shamrock Door Sign", difficulty: "Easy", material: "Vinyl", time: "30 min" },
      { name: "St. Paddy's Day Banner", difficulty: "Easy", material: "Cardstock", time: "45 min" },
      { name: "Pot of Gold Centerpiece", difficulty: "Medium", material: "Cardstock", time: "1 hr" },
      { name: "Shamrock Window Clings", difficulty: "Easy", material: "Window Cling", time: "20 min" },
      { name: "Lucky Wood Sign", difficulty: "Medium", material: "Vinyl on Wood", time: "45 min" },
    ]
  },
  {
    category: "Party Supplies",
    items: [
      { name: "Shamrock Cupcake Toppers", difficulty: "Easy", material: "Cardstock", time: "20 min" },
      { name: "Green Beer Labels", difficulty: "Easy", material: "Sticker Paper", time: "15 min" },
      { name: "Lucky Charm Treat Bags", difficulty: "Easy", material: "Vinyl", time: "25 min" },
      { name: "St. Patrick's Day Photo Props", difficulty: "Easy", material: "Cardstock", time: "30 min" },
      { name: "Rainbow Place Cards", difficulty: "Easy", material: "Cardstock", time: "20 min" },
    ]
  },
  {
    category: "Drinkware & Accessories",
    items: [
      { name: "Lucky Tumbler", difficulty: "Easy", material: "Vinyl", time: "20 min" },
      { name: "Shamrock Wine Glass", difficulty: "Easy", material: "Vinyl", time: "15 min" },
      { name: "Irish Coffee Mug", difficulty: "Easy", material: "Vinyl or Infusible Ink", time: "25 min" },
      { name: "Green Glitter Tumbler", difficulty: "Medium", material: "Glitter + Epoxy", time: "2 hr" },
      { name: "Beer Koozie", difficulty: "Easy", material: "HTV", time: "15 min" },
    ]
  },
  {
    category: "Kids & Classroom",
    items: [
      { name: "Leprechaun Trap Box", difficulty: "Medium", material: "Cardstock", time: "45 min" },
      { name: "Shamrock Bookmarks", difficulty: "Easy", material: "Cardstock", time: "15 min" },
      { name: "Rainbow Name Tags", difficulty: "Easy", material: "Cardstock", time: "20 min" },
      { name: "Lucky Penny Card", difficulty: "Easy", material: "Cardstock", time: "15 min" },
      { name: "Pot of Gold Treat Boxes", difficulty: "Medium", material: "Cardstock", time: "30 min" },
    ]
  },
];

const faqs = [
  {
    question: "What's the best green vinyl for St. Patrick's Day projects?",
    answer: "For permanent outdoor projects, use Oracal 651 in kelly green or shamrock green. For removable indoor decor, Oracal 631 works great. For shirts, Siser EasyWeed in green is the top choice."
  },
  {
    question: "Where can I find free St. Patrick's Day SVGs?",
    answer: "Cricut Design Space has free shamrock and St. Patrick's Day images (search 'St Patrick'). You can also find free SVGs on Creative Fabrica, Design Bundles (free section), and many craft bloggers offer freebies."
  },
  {
    question: "How do I make shamrock shapes in Design Space?",
    answer: "Search 'shamrock' or 'clover' in Images. You can also make one by welding 3 heart shapes together with a stem. There are many free options in the Cricut library."
  },
  {
    question: "What Cricut settings for glitter HTV shamrock shirts?",
    answer: "Use 320°F, 15-20 seconds, medium-firm pressure. Remember to MIRROR your design and place the glitter HTV shiny side DOWN on the mat. Cold peel after pressing."
  }
];

export default function StPatricksDayProjectsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "25 Easy Cricut St. Patrick's Day Projects",
    "description": "DIY St. Patrick's Day decorations, shirts, and crafts with your Cricut.",
    "author": { "@type": "Organization", "name": "CricutHelper" },
    "publisher": { "@type": "Organization", "name": "CricutHelper" },
    "datePublished": "2026-02-08",
    "dateModified": "2026-02-08"
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
      
      <main className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12">
        <article className="max-w-4xl mx-auto px-4">
          <header className="mb-8">
            <Link href="/guides" className="text-green-600 hover:text-green-700">← Back to Guides</Link>
            <h1 className="text-4xl font-bold text-gray-900 mt-4 mb-4">
              🍀 25 Easy Cricut St. Patrick's Day Projects
            </h1>
            <p className="text-xl text-gray-600">
              Get lucky with these DIY shamrock crafts, festive shirts, and green-themed decorations. 
              All skill levels, all Cricut machines!
            </p>
            <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
              <span>📖 12 min read</span>
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
                  className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm hover:bg-green-200 transition-colors"
                >
                  {section.category}
                </a>
              ))}
            </div>
          </nav>

          {/* Intro */}
          <div className="bg-green-100 border-l-4 border-green-500 p-4 mb-8 rounded-r-lg">
            <p className="text-green-800">
              <strong>🎯 March 17 is coming!</strong> Whether you're decorating for a party, 
              making shirts for the family, or crafting with kids, we've got 25 projects 
              organized by category. Most take under 30 minutes!
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
                {section.category === "Party Supplies" && "🎉 "}
                {section.category === "Drinkware & Accessories" && "🍺 "}
                {section.category === "Kids & Classroom" && "🧒 "}
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">💡 Pro Tips for St. Patrick's Day Crafting</h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <strong>Use multiple greens.</strong> Mix kelly green, emerald, lime, and forest green 
                  for more visual interest. Monochrome looks flat.
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <strong>Add gold accents.</strong> Gold vinyl or foil pairs perfectly with green. 
                  Think pot of gold, lucky coins, and metallic shamrocks.
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <strong>Batch your cutting.</strong> If making multiple projects, cut all your 
                  green vinyl at once, then all your gold. Saves time on material switches.
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <strong>Test your settings.</strong> Green glitter vinyl can be tricky. Always 
                  do a test cut before your main project.
                </div>
              </div>
            </div>
          </section>

          {/* Material Shopping */}
          <section className="bg-green-50 rounded-2xl p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">🛒 What You'll Need</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">For Shirts</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Green HTV (Siser EasyWeed recommended)</li>
                  <li>• Gold glitter or foil HTV</li>
                  <li>• White or black blank shirts</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">For Decor</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Green adhesive vinyl (permanent)</li>
                  <li>• Gold vinyl</li>
                  <li>• Green and white cardstock</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">For Drinkware</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Permanent vinyl (dishwasher safe)</li>
                  <li>• Blank tumblers or mugs</li>
                  <li>• Transfer tape</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Tools</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Weeding tools</li>
                  <li>• Heat press or EasyPress</li>
                  <li>• StandardGrip mat</li>
                </ul>
              </div>
            </div>
            <div className="mt-4">
              <Link 
                href="/shop"
                className="inline-block bg-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors"
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
                <p className="text-sm text-gray-600">Fix your iron-on projects</p>
              </Link>
              <Link href="/materials" className="block bg-white rounded-xl shadow p-4 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900">Material Settings Database</h3>
                <p className="text-sm text-gray-600">Find the perfect settings</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">☘️ Happy St. Patrick's Day Crafting!</h2>
            <p className="mb-6 opacity-90">
              Need help with a project? Our troubleshooting wizard is here for you.
            </p>
            <Link
              href="/troubleshoot"
              className="inline-block bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors"
            >
              Start Troubleshooting →
            </Link>
          </section>
        </article>
      </main>
    </>
  );
}
