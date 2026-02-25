import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Easter Cricut Projects — 15+ Easy Ideas for 2026 | CricutHelper',
  description: 'Master 15+ easy Easter Cricut projects: bunny shirts, egg decals, basket tags, window clings, cards & more. Step-by-step instructions for beginners with design tips, material guides, and SVG recommendations.',
  keywords: 'cricut easter projects, easter cricut ideas, easter cricut crafts, bunny cricut designs, easter egg cricut, cricut easter shirts, easter basket tags cricut, cricut easter decorations 2026',
  openGraph: {
    title: 'Easter Cricut Projects — 15+ Easy Ideas for 2026',
    description: 'Easy Easter crafts with your Cricut machine. DIY bunny shirts, egg decorating, basket tags, window clings, cards, and festive home decor.',
    type: 'article',
  },
};

const faqData = [
  {
    question: "When should I start making Easter Cricut projects?",
    answer: "Start 2-4 weeks before Easter (April 20, 2026) for best results. This gives you time to order materials, test designs, and make inventory if selling. Early starters also avoid material shortages—pastel vinyl and cardstock sell out quickly in spring."
  },
  {
    question: "What materials do I need for Easter projects?",
    answer: "The essentials: HTV for shirts (pastel colors), permanent vinyl for decor, cardstock for paper crafts, and transfer tape for vinyl application. Add specialty items like glitter vinyl, faux fur, and felt for extra pizzazz. Most projects use just 1-2 materials."
  },
  {
    question: "Where can I find free Easter SVGs for Cricut?",
    answer: "Cricut Design Space has hundreds of free Easter images (search 'Easter', 'bunny', 'spring', or 'egg'). You can also find free packs on Creative Fabrica's free section, Design Bundles, and craft blogs. Many designers share Easter freebies in March."
  },
  {
    question: "How do I make a custom bunny design in Design Space?",
    answer: "Use the oval shape tool to create ears and head. For ears: make two tall ovals, add pink inner ears with smaller ovals, and weld together. Add circles for eyes and a triangle for nose. Or search 'bunny' in Images—Cricut has tons of free options ready to cut."
  },
  {
    question: "What Cricut settings work best for cardstock Easter projects?",
    answer: "Use the 'Cardstock' setting for standard cardstock, or 'Medium Cardstock' if cutting intricate designs. For glitter cardstock, use 'Glitter Cardstock' setting or increase pressure. If designs aren't cutting through, try 'Intricate Cuts' setting or test with a slower blade."
  },
  {
    question: "Can I use regular vinyl for Easter window clings?",
    answer: "No—regular permanent vinyl won't stick to windows well. Use window cling vinyl (removable, static-cling, or adhesive cling vinyl). It adheres smoothly without damaging glass and peels off cleanly. Oracal 8500 and Cricut Window Clings are both excellent choices."
  },
  {
    question: "How do I prevent HTV from peeling on Easter shirts?",
    answer: "Follow the HTV temperature rule: verify your heat press temperature with an infrared thermometer (it's often off by 20-50°F), apply firm pressure for full 10-15 seconds, pre-press the garment, wait 24-48 hours before washing, and always wash inside-out in cold water without fabric softener. See our HTV Peeling guide for complete troubleshooting."
  },
  {
    question: "What size should I cut Easter basket tags?",
    answer: "Standard tag size is 2\" x 3.5\" (like a business card). This fits nicely on basket handles and gifts. For larger baskets, try 3\" x 4\". Always leave 0.5\" margin around your design to avoid cutting into important elements."
  },
  {
    question: "Can I layer different colored vinyl for Easter designs?",
    answer: "Absolutely! Layering creates depth and visual interest. For example: cut a white bunny, then add pink inner ears and eyes as separate pieces. Use transfer tape to position each layer precisely. Build from back to front (farthest background to closest foreground)."
  },
  {
    question: "Do I need a heat press for HTV projects or can I use an EasyPress?",
    answer: "Both work! Heat presses are better for volume and precision (firm pressure, consistent temperature). EasyPress is great for small batches and flexibility. Cricut official info says EasyPress works, but temperature is less consistent. Use an infrared thermometer regardless."
  },
];

const projects = [
  {
    title: "Pastel Easter Egg Hunt Shirt",
    category: "Shirts & Apparel",
    difficulty: "Easy",
    time: "20 min",
    materials: "Pastel HTV (pink, lavender, mint, yellow), white blank shirt, heat press",
    description: "Create colorful eggs scattered across the chest using different pastel HTV colors. Layer eggs with speckles or patterns for extra detail.",
    instructions: [
      "Download or create 3-5 Easter egg designs in different pastel colors",
      "Arrange eggs in a scattered pattern on your shirt design",
      "Cut each color separately and weed",
      "Pre-press your shirt for 3-5 seconds",
      "Apply first egg color, press for 12 seconds at 315°F",
      "Repeat for each color",
      "Do a second press over the whole design with parchment paper",
      "Wait 24 hours before washing"
    ],
    tips: [
      "Mix solid and glitter HTV for texture",
      "Stagger egg positions for a natural look",
      "Use 'warm peel' technique for cleaner results",
      "Personalize by adding names to the design"
    ]
  },
  {
    title: "Bunny Ears Graphic T-Shirt",
    category: "Shirts & Apparel",
    difficulty: "Easy",
    time: "15 min",
    materials: "Pink HTV, white inner ear HTV, white or light gray shirt, heat press",
    description: "A simple but adorable design: pink bunny ears with white inner ears on the front or back of a shirt.",
    instructions: [
      "Search 'bunny ears' in Cricut Design Space",
      "Choose a design with separate ear and inner ear layers",
      "Cut pink HTV for outer ears",
      "Cut white HTV for inner ears",
      "Weed both designs carefully",
      "Press outer ears first for 10 seconds",
      "Immediately apply inner ears and press again",
      "Do a full press with parchment paper to seal"
    ],
    tips: [
      "Keep inner ears slightly smaller for a clean look",
      "Try rose gold or gold inner ears for luxury feel",
      "Pair with 'Some Bunny Loves You' text above",
      "Works on long sleeves too—different vibe"
    ]
  },
  {
    title: "Some Bunny Loves Me Sweatshirt",
    category: "Shirts & Apparel",
    difficulty: "Easy",
    time: "25 min",
    materials: "HTV in pastel pink and white, blank sweatshirt, heat press",
    description: "Playful text design with a small bunny graphic. Perfect for kids and adults alike.",
    instructions: [
      "In Design Space, add text: 'Some Bunny Loves Me' in a fun font (Comic Sans or script work great)",
      "Add a small bunny graphic below the text",
      "Cut pink HTV for the bunny, white HTV for the text",
      "Pre-press your sweatshirt (very important for thick fabric)",
      "Press the bunny first (small item, 12 seconds at 315°F)",
      "Press text below (watch for curved text—may need extra pressure on edges)",
      "Let cool, then peel",
      "Do a second press over everything"
    ],
    tips: [
      "Pre-pressing a sweatshirt is essential—they hold moisture",
      "Use heavier pressure than a regular t-shirt",
      "Consider using lower placement for easier access with heat press",
      "Glitter HTV on the text adds extra spring vibe"
    ]
  },
  {
    title: "Easter Egg Window Clings",
    category: "Home Decor & Window Clings",
    difficulty: "Easy",
    time: "20 min",
    materials: "Window cling vinyl (assorted pastels), Cricut EasyPress or low heat, glass cleaner, squeegee",
    description: "Colorful Easter eggs that stick to windows without residue. Perfect for home decor or shop windows.",
    instructions: [
      "Create or download simple Easter egg designs in various sizes (2-8 inches)",
      "Cut eggs from window cling vinyl",
      "Weed carefully—this vinyl is delicate",
      "Clean window with glass cleaner and let dry completely",
      "Peel backing from cling vinyl slowly",
      "Position on window and smooth out bubbles with squeegee",
      "Let cure for 24 hours before cleaning window again"
    ],
    tips: [
      "Window cling vinyl doesn't require a heat press—the static holds it",
      "Use a squeegee or old credit card to smooth bubbles",
      "Measure your window space first—create designs to fit",
      "Mix sizes (tiny eggs near large ones) for visual interest",
      "These last a season with proper care"
    ]
  },
  {
    title: "Personalized Easter Basket Tags",
    category: "Baskets & Gift Packaging",
    difficulty: "Easy",
    time: "15 min per batch",
    materials: "Cardstock (pastel colors), hole punch, ribbon or twine, scissors",
    description: "Custom name tags for Easter baskets. Each tag takes minutes and makes gifts extra special.",
    instructions: [
      "Create a 2\" x 3.5\" tag design in Design Space",
      "Add recipient's name in a cute font",
      "Add Easter graphics (bunny, eggs, flowers)",
      "Cut from pastel cardstock",
      "Punch hole in corner and add ribbon",
      "Optional: laminate for durability"
    ],
    tips: [
      "Batch-cut multiple tags at once to save time",
      "Use script fonts for elegance or playful fonts for kids",
      "Add metallic accents with gold or silver markers after cutting",
      "Make extras to sell—people love personalized gifts"
    ]
  },
  {
    title: "Easter Egg Decorating Stickers",
    category: "Baskets & Gift Packaging",
    difficulty: "Easy",
    time: "30 min",
    materials: "Vinyl (permanent or removable), printed Easter egg stickers, scissors",
    description: "DIY Easter egg decorating stickers that stick to real eggs without ink transfer.",
    instructions: [
      "Create egg-shaped stickers in Design Space (2-3 inches wide)",
      "Add patterns: stripes, dots, bunnies, text",
      "Cut from permanent vinyl (more durable than paper)",
      "Weed out the negative space carefully",
      "Store on backing until ready to use",
      "Peel and stick onto real eggs"
    ],
    tips: [
      "Use permanent vinyl so stickers don't peel during egg hunt",
      "Create simple, bold patterns—fine details get lost on small eggs",
      "Mix solid colors with patterned designs",
      "Make extras for sale or Easter parties"
    ]
  },
  {
    title: "Happy Easter Door Sign",
    category: "Home Decor & Signs",
    difficulty: "Easy",
    time: "30 min",
    materials: "Permanent vinyl (pastel colors), wooden sign or cardboard, transfer tape, heat gun (optional)",
    description: "Cheerful door sign that works year-round once Easter passes—store it for next year.",
    instructions: [
      "Design a door sign (12\" x 18\" is standard)",
      "Create text 'Happy Easter' with decorative elements",
      "Cut from pastel vinyl (main color) and white or gold (accents)",
      "Prepare your wooden or cardboard base",
      "Apply main color vinyl using transfer tape",
      "Layer accent colors on top",
      "Use a heat gun to apply vinyl smoothly (optional—vinyl will stick without)"
    ],
    tips: [
      "Leave space around edges for mounting hardware",
      "Test colors on paper first—pastels can look different on wood",
      "Add flowers or bunny graphics around the text",
      "Seal with clear vinyl on top for longevity"
    ]
  },
  {
    title: "Spring Bunny Banner",
    category: "Home Decor & Decorations",
    difficulty: "Easy",
    time: "45 min",
    materials: "Cardstock (pastel pack), string or ribbon, hole punch, scissors, optional: glitter or markers",
    description: "A festive banner with individual bunny cutouts strung together. Hangs above doorways or mantels.",
    instructions: [
      "Create bunny silhouette designs in 2-3 sizes",
      "Cut multiple bunnies from different pastel cardstock colors",
      "Punch hole at the top of each bunny",
      "String them on ribbon, spacing evenly",
      "Optional: add details with markers or glitter glue after cutting",
      "Hang with removable hooks"
    ],
    tips: [
      "Mix pastel colors for visual interest",
      "Add decorative elements between bunnies (eggs, flowers, dots)",
      "Make it large enough to see from across a room",
      "Store carefully in a flat box for next year"
    ]
  },
  {
    title: "Easter Egg Hunt Printable Cards",
    category: "Party Supplies & Cards",
    difficulty: "Easy",
    time: "20 min",
    materials: "Cardstock, ink, scissors, optional: plastic eggs or bags",
    description: "Clue cards kids find during an egg hunt, leading to the next egg or prize.",
    instructions: [
      "Create card design with clue text and Easter graphics",
      "Include space for handwritten clues if desired",
      "Cut to 3\" x 4\" size for pocket in plastic eggs",
      "Print and cut out",
      "Optionally laminate for durability",
      "Place inside plastic eggs"
    ],
    tips: [
      "Use puzzle-style clues ('Look where you sleep')",
      "Include an emoji or icon so kids recognize the clue style",
      "Batch-make clues for multiple kids",
      "Store template for next year"
    ]
  },
  {
    title: "Bunny Ears Headband",
    category: "Wearables & Accessories",
    difficulty: "Medium",
    time: "30 min",
    materials: "Felt (pink, white), faux fur (white), hot glue gun, plastic or felt headband base",
    description: "Adorable bunny ear headband perfect for kids or photo props.",
    instructions: [
      "Cut bunny ear shapes from pink felt (2 pieces per ear for structure)",
      "Cut white felt for inner ears",
      "Cut white faux fur for ear fluff",
      "Hot glue inner white ear to pink outer ear",
      "Hot glue faux fur to back of outer ear",
      "Attach completed ears to headband using hot glue or adhesive",
      "Let dry completely before wearing"
    ],
    tips: [
      "Use thick felt so ears stand upright",
      "Faux fur adds realism and texture",
      "Make ears adjustable for comfort",
      "Great for selling at Easter markets"
    ]
  },
  {
    title: "Pastel Easter Vinyl Tumbler",
    category: "Drinkware & Accessories",
    difficulty: "Easy",
    time: "20 min",
    materials: "Permanent vinyl (pastels), tumbler or insulated cup, transfer tape, heat tape (optional)",
    description: "Personalized tumbler with Easter design—great for coffee, hot chocolate, or cold drinks.",
    instructions: [
      "Create or download design (height: 3-4 inches, width: wrap around cup)",
      "Cut from permanent vinyl",
      "Weed negative space",
      "Measure your cup and wrap vinyl around it",
      "Use transfer tape to apply vinyl smoothly",
      "Press down firmly to ensure good adhesion",
      "Let cure 24 hours before using"
    ],
    tips: [
      "Temporary tattoo paper method works for curved surfaces",
      "Leave 0.5\" gap if vinyl wraps completely around",
      "Test on an old cup first if you're new to tumblers",
      "Use permanent vinyl for drinkware (removable vinyl will peel)"
    ]
  },
  {
    title: "Easter Greeting Cards (Cardstock)",
    category: "Cards & Stationery",
    difficulty: "Easy",
    time: "20 min per batch",
    materials: "Cardstock (white for base, pastels for design), scissors, optional: markers, stickers",
    description: "Handmade Easter cards with cut-out designs. Much more personal than store-bought.",
    instructions: [
      "Create card design with Easter elements (eggs, bunnies, flowers)",
      "Score and fold white cardstock in half",
      "Cut design pieces from pastel cardstock",
      "Layer and glue inside the folded card",
      "Add text by hand or with vinyl",
      "Let glue dry completely before mailing"
    ],
    tips: [
      "Use A2 (5.5\" x 8.5\") or A6 (4.25\" x 5.5\") card sizes",
      "Create a template for batch production",
      "Mix cut designs with hand-drawn elements",
      "Personalize each card with recipient names"
    ]
  },
  {
    title: "Spring Flower Centerpiece",
    category: "Home Decor & Table Settings",
    difficulty: "Medium",
    time: "1 hour",
    materials: "Cardstock (multiple colors), florist wire, tape, scissors, optional: tissue paper",
    description: "Dimensional paper flowers that brighten any Easter table. Stack and group for impact.",
    instructions: [
      "Create petal and leaf designs in Design Space",
      "Cut petals from various pastel cardstock colors",
      "Cut leaves from green cardstock",
      "Curl petals slightly using pencil",
      "Tape petals together to form flowers",
      "Tape leaves and flowers to florist wire",
      "Arrange in small vase or grouping"
    ],
    tips: [
      "Layer different-sized petals for dimension",
      "Mix solid colors with patterned cardstock",
      "Create multiple flowers for visual impact",
      "These last indefinitely—make them in advance"
    ]
  },
  {
    title: "Carrot Treat Bags",
    category: "Baskets & Gift Packaging",
    difficulty: "Easy",
    time: "20 min",
    materials: "Orange cardstock, orange tissue paper or cellophane, ribbon, scissors, hole punch",
    description: "Adorable carrot-shaped treat bags perfect for small gifts, candy, or crafts.",
    instructions: [
      "Create a carrot bag template (elongated triangle shape)",
      "Cut carrot shapes from orange cardstock (2 per bag for structure)",
      "Cut green leaves from green cardstock",
      "Glue sides of carrot together, leaving top open",
      "Glue leaves inside top",
      "Fill with treats",
      "Tie closed with ribbon"
    ],
    tips: [
      "Fill with orange candies (Reese's, gummies) for perfect color match",
      "Add printed label on front with recipient name",
      "Make in bulk for party favors",
      "Store flat when empty, fold before filling"
    ]
  },
  {
    title: "Easter Egg Chair Hangers",
    category: "Home Decor & Seasonal Decor",
    difficulty: "Medium",
    time: "25 min",
    materials: "Cardstock (pastel colors), scissors, string or ribbon, hole punch",
    description: "Oversized paper eggs that hang from chair backs—perfect for Easter dinner or brunch.",
    instructions: [
      "Create large egg shape design (6-8 inches tall)",
      "Add pattern or name to each egg",
      "Cut from pastel cardstock",
      "Punch hole at top",
      "String with ribbon or twine",
      "Hang on chair backs, one per seat"
    ],
    tips: [
      "Add guest names for assigned seating",
      "Create different patterns for each chair",
      "Laminate for durability if reusing",
      "Make extras for decor around room"
    ]
  },
];

const tips = [
  { emoji: "🎨", title: "Embrace Pastels", description: "Soft pinks, lavenders, mint greens, and baby blues are quintessential Easter colors. Mix 3-4 pastel shades in your projects for cohesive, professional-looking results." },
  { emoji: "✨", title: "Add Texture & Dimension", description: "Combine glitter vinyl with matte, use faux fur for bunny accents, or layer cardstock cuts. Texture makes projects memorable and sell-worthy." },
  { emoji: "🏷️", title: "Personalize Everything", description: "Adding names to shirts, basket tags, and decorations makes them gift-worthy and significantly more valuable if you're selling." },
  { emoji: "🎯", title: "Batch by Material", description: "Cut all your pink vinyl projects together, then switch to cardstock. This saves setup time and reduces material waste." },
  { emoji: "⏰", title: "Start ASAP", description: "Easter crafts peak 2-4 weeks before the holiday. Start now (late February) to have inventory ready when demand hits." },
  { emoji: "🌡️", title: "Verify Temperatures", description: "Use an infrared thermometer to check your heat press or EasyPress temperature. Most are off by 20-50°F—this single fix prevents 60% of HTV failures." },
  { emoji: "💎", title: "Mix Materials", description: "Combine permanent vinyl with cardstock, add ribbon accents, use glitter for highlights. Material mixing elevates even simple designs." },
  { emoji: "🔄", title: "Reuse Templates", description: "Save your best designs as templates. Next year, you'll be able to produce Easter inventory 10x faster." },
];

export default function EasterProjectsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Easter Cricut Projects — 15+ Easy Ideas for 2026",
    "description": "Complete guide to 15+ Easter Cricut projects with step-by-step instructions, design tips, and material recommendations.",
    "author": { "@type": "Organization", "name": "CricutHelper" },
    "publisher": { "@type": "Organization", "name": "CricutHelper" },
    "datePublished": "2026-02-25",
    "dateModified": "2026-02-25",
    "image": "https://cricuthelper.com/og-easter-projects.jpg"
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  const projectsByCategory = {
    "Shirts & Apparel": projects.filter(p => p.category === "Shirts & Apparel"),
    "Home Decor & Signs": projects.filter(p => p.category === "Home Decor & Decorations" || p.category === "Home Decor & Signs" || p.category === "Home Decor & Table Settings"),
    "Baskets & Packaging": projects.filter(p => p.category === "Baskets & Gift Packaging" || p.category === "Baskets & Packaging"),
    "Party & Cards": projects.filter(p => p.category === "Party Supplies & Cards" || p.category === "Cards & Stationery"),
    "Wearables & Drinkware": projects.filter(p => p.category === "Wearables & Accessories" || p.category === "Drinkware & Accessories"),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      
      <main className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-white">
        <article className="max-w-4xl mx-auto px-4 py-12">
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-[#9CAF88]">Home</Link>
            <span className="mx-2">→</span>
            <Link href="/guides" className="hover:text-[#9CAF88]">Guides</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-700">Easter Cricut Projects</span>
          </nav>

          {/* Hero Section */}
          <header className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              🐰 Easter Cricut Projects — 15+ Easy Ideas for 2026
            </h1>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Create adorable Easter crafts in minutes, not hours. Whether you're making personalized gifts, 
              selling Easter inventory, or decorating your home, these 15+ projects range from dead-easy 
              (bunny shirts) to impressive (dimensional centerpieces).
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 bg-white rounded-lg p-4">
              <span>🗓️ Easter: April 20, 2026</span>
              <span>•</span>
              <span>⏱️ 25 min average per project</span>
              <span>•</span>
              <span>📖 10 min read</span>
              <span>•</span>
              <span>👥 Beginner-friendly</span>
            </div>
          </header>

          {/* Warning/Urgency Box */}
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 border-l-4 border-pink-400 p-6 mb-8 rounded-r-lg">
            <p className="text-pink-900 font-semibold text-lg mb-2">⏰ Time to Act: Easter is 8 Weeks Away</p>
            <p className="text-pink-800">
              Crafters start buying Easter supplies 2-4 weeks before the holiday. If you're making projects to sell 
              or gift, <strong>start this week</strong>. Pastel vinyl and cardstock will sell out by mid-March.
            </p>
          </div>

          {/* Quick Stats Box */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What You'll Create</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-4xl font-bold text-pink-500 mb-2">15+</p>
                <p className="text-gray-700">Project Ideas</p>
                <p className="text-sm text-gray-500 mt-1">Shirts, decor, cards, baskets</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-purple-500 mb-2">5</p>
                <p className="text-gray-700">Material Types</p>
                <p className="text-sm text-gray-500 mt-1">HTV, vinyl, cardstock, felt, more</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-green-500 mb-2">10-60 min</p>
                <p className="text-gray-700">Time Per Project</p>
                <p className="text-sm text-gray-500 mt-1">Most take 15-30 minutes</p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <nav className="bg-white rounded-2xl shadow-lg p-8 mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-6">📋 Table of Contents</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-[#9CAF88]">
                <li><a href="#materials" className="hover:underline">✓ Essential Materials</a></li>
                <li><a href="#shirts" className="hover:underline">✓ Shirts & Apparel (3 projects)</a></li>
                <li><a href="#decor" className="hover:underline">✓ Home Decor (3 projects)</a></li>
                <li><a href="#baskets" className="hover:underline">✓ Baskets & Packaging (3 projects)</a></li>
              </ul>
              <ul className="space-y-2 text-[#9CAF88]">
                <li><a href="#party" className="hover:underline">✓ Party & Cards (3 projects)</a></li>
                <li><a href="#wearables" className="hover:underline">✓ Wearables & Drinkware (2 projects)</a></li>
                <li><a href="#tips" className="hover:underline">✓ Pro Tips & Techniques</a></li>
                <li><a href="#faqs" className="hover:underline">✓ FAQs & Troubleshooting</a></li>
              </ul>
            </div>
          </nav>

          {/* Materials Section */}
          <section id="materials" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential Materials for Easter Projects</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">For HTV Shirts</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 text-xl mt-0.5">→</span>
                    <span><strong>Pastel HTV Bundle</strong> (pink, lavender, mint, yellow)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 text-xl mt-0.5">→</span>
                    <span><strong>White & Gold Glitter HTV</strong> for accents</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 text-xl mt-0.5">→</span>
                    <span><strong>Blank Shirts</strong> (100% cotton recommended)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 text-xl mt-0.5">→</span>
                    <span><strong>Heat Press or EasyPress</strong></span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">For Cardstock Projects</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-500 text-xl mt-0.5">→</span>
                    <span><strong>Pastel Cardstock Variety Pack</strong> (12+ colors)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-500 text-xl mt-0.5">→</span>
                    <span><strong>Glitter Cardstock</strong> (spring colors)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-500 text-xl mt-0.5">→</span>
                    <span><strong>White Cardstock</strong> (for bases and layering)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-500 text-xl mt-0.5">→</span>
                    <span><strong>Scissors & Guillotine Cutter</strong> (for extras)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">For Vinyl & Decor</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl mt-0.5">→</span>
                    <span><strong>Permanent Vinyl</strong> (pastels for decor)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl mt-0.5">→</span>
                    <span><strong>Window Cling Vinyl</strong> (removable for windows)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl mt-0.5">→</span>
                    <span><strong>Transfer Tape</strong> (for vinyl application)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl mt-0.5">→</span>
                    <span><strong>Squeegee or Old Credit Card</strong></span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Optional Upgrades</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-xl mt-0.5">→</span>
                    <span><strong>Faux Fur & Felt</strong> (for bunny ears)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-xl mt-0.5">→</span>
                    <span><strong>Ribbon & Twine</strong> (pastels)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-xl mt-0.5">→</span>
                    <span><strong>Hot Glue Gun</strong> (for assemblies)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 text-xl mt-0.5">→</span>
                    <span><strong>Infrared Thermometer</strong> (verify HTV temps)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
              <p className="text-blue-900">
                <strong>💡 Pro Tip:</strong> Buy materials NOW. Pastel vinyl and cardstock sell out 2-3 weeks before Easter. 
                Stock up while selection is full. <Link href="/shop" className="text-blue-700 underline font-semibold">Shop materials →</Link>
              </p>
            </div>
          </section>

          {/* Projects by Category */}
          {Object.entries(projectsByCategory).map(([categoryName, categoryProjects]) => (
            <section key={categoryName} id={categoryName.toLowerCase().replace(/\s+/g, '-')} className="mb-14">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">{categoryName}</h2>
              <div className="space-y-8">
                {categoryProjects.map((project, idx) => (
                  <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="p-8">
                      {/* Project Header */}
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                          <div className="flex flex-wrap gap-2">
                            <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                              project.difficulty === 'Easy' 
                                ? 'bg-green-100 text-green-700' 
                                : 'bg-yellow-100 text-yellow-700'
                            }`}>
                              {project.difficulty}
                            </span>
                            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">⏱️ {project.time}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Materials */}
                      <div className="mb-6 pb-6 border-b border-gray-200">
                        <h4 className="font-bold text-gray-900 mb-2">What You Need</h4>
                        <p className="text-gray-600 text-sm">{project.materials}</p>
                      </div>

                      {/* Instructions */}
                      <div className="mb-6 pb-6 border-b border-gray-200">
                        <h4 className="font-bold text-gray-900 mb-4">Step-by-Step Instructions</h4>
                        <ol className="space-y-3">
                          {project.instructions.map((instruction, stepIdx) => (
                            <li key={stepIdx} className="flex gap-3">
                              <span className="font-bold text-[#9CAF88] text-lg flex-shrink-0">{stepIdx + 1}</span>
                              <span className="text-gray-700">{instruction}</span>
                            </li>
                          ))}
                        </ol>
                      </div>

                      {/* Tips */}
                      <div>
                        <h4 className="font-bold text-gray-900 mb-4">💡 Pro Tips</h4>
                        <ul className="space-y-2">
                          {project.tips.map((tip, tipIdx) => (
                            <li key={tipIdx} className="flex items-start gap-2 text-gray-700">
                              <span className="text-purple-500 font-bold mt-0.5">✓</span>
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Pro Tips Section */}
          <section id="tips" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">💡 8 Pro Tips for Easter Crafting Success</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {tips.map((tip, idx) => (
                <div key={idx} className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-6 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">{tip.emoji}</span>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{tip.title}</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">{tip.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Common Issues & Fixes */}
          <section className="mb-12 bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">⚠️ Common Easter Project Problems & Fixes</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-red-400 pl-6">
                <h3 className="font-bold text-gray-900 mb-2">HTV Peeling Off Shirts After Washing</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Cause:</strong> Temperature too low, not enough pressure, washing too soon, or fabric softener usage.
                </p>
                <p className="text-gray-700">
                  <strong>Fix:</strong> Verify your heat press temperature with an infrared thermometer (many are 20-50°F off). 
                  Use firm pressure. Wait 24-48 hours before washing. Never use fabric softener. 
                  <Link href="/guides/htv-peeling-after-washing" className="text-[#9CAF88] underline font-semibold"> See our full HTV guide →</Link>
                </p>
              </div>

              <div className="border-l-4 border-orange-400 pl-6">
                <h3 className="font-bold text-gray-900 mb-2">Cardstock Not Cutting Through</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Cause:</strong> Blade is dull, pressure setting too low, or thickness not set correctly.
                </p>
                <p className="text-gray-700">
                  <strong>Fix:</strong> Use fresh blade. Increase pressure to "More Pressure" or maximum. Ensure material 
                  setting is "Cardstock" or "Glitter Cardstock" (not "Paper"). Do a test cut on scrap first.
                </p>
              </div>

              <div className="border-l-4 border-yellow-400 pl-6">
                <h3 className="font-bold text-gray-900 mb-2">Vinyl Not Sticking to Windows or Glass</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Cause:</strong> Using wrong vinyl type (permanent instead of cling), or dirty window surface.
                </p>
                <p className="text-gray-700">
                  <strong>Fix:</strong> Use window cling vinyl (removable, not permanent). Clean window with glass cleaner 
                  and dry completely. Apply smoothly with squeegee, pressing out all bubbles. Let cure 24 hours.
                </p>
              </div>

              <div className="border-l-4 border-blue-400 pl-6">
                <h3 className="font-bold text-gray-900 mb-2">Transfer Tape Leaving Residue</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Cause:</strong> Low-quality tape, or tape left on too long after application.
                </p>
                <p className="text-gray-700">
                  <strong>Fix:</strong> Use quality transfer tape (Cricut official or similar). Apply vinyl, smooth down, 
                  then slowly peel tape off at a 45° angle. If residue remains, use a heat gun briefly to warm the tape 
                  and try again. <Link href="/guides/how-to-use-transfer-tape" className="text-[#9CAF88] underline font-semibold">See transfer tape guide →</Link>
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faqs" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqData.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow p-6 border-l-4 border-[#9CAF88]">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Guides */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides & Resources</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/guides/htv-peeling-after-washing" className="block bg-gradient-to-br from-pink-50 to-white rounded-xl shadow hover:shadow-lg transition-shadow p-6 border border-pink-100">
                <h3 className="font-bold text-gray-900 mb-2">HTV Peeling After Washing?</h3>
                <p className="text-gray-600 text-sm">9 fixes to keep your Easter shirts perfect through every wash</p>
              </Link>
              
              <Link href="/guides/how-to-use-transfer-tape" className="block bg-gradient-to-br from-blue-50 to-white rounded-xl shadow hover:shadow-lg transition-shadow p-6 border border-blue-100">
                <h3 className="font-bold text-gray-900 mb-2">Transfer Tape Mastery</h3>
                <p className="text-gray-600 text-sm">Perfect your vinyl application technique</p>
              </Link>

              <Link href="/guides/how-to-weed-vinyl" className="block bg-gradient-to-br from-purple-50 to-white rounded-xl shadow hover:shadow-lg transition-shadow p-6 border border-purple-100">
                <h3 className="font-bold text-gray-900 mb-2">How to Weed Vinyl Like a Pro</h3>
                <p className="text-gray-600 text-sm">Master the most important vinyl technique</p>
              </Link>

              <Link href="/guides/cutting-cardstock-cricut" className="block bg-gradient-to-br from-green-50 to-white rounded-xl shadow hover:shadow-lg transition-shadow p-6 border border-green-100">
                <h3 className="font-bold text-gray-900 mb-2">Cardstock Cutting Guide</h3>
                <p className="text-gray-600 text-sm">Perfect cuts for every cardstock type</p>
              </Link>

              <Link href="/materials" className="block bg-gradient-to-br from-yellow-50 to-white rounded-xl shadow hover:shadow-lg transition-shadow p-6 border border-yellow-100">
                <h3 className="font-bold text-gray-900 mb-2">Material Settings Database</h3>
                <p className="text-gray-600 text-sm">Find exact cut settings for 100+ materials</p>
              </Link>

              <Link href="/shop" className="block bg-gradient-to-br from-indigo-50 to-white rounded-xl shadow hover:shadow-lg transition-shadow p-6 border border-indigo-100">
                <h3 className="font-bold text-gray-900 mb-2">Easter Materials Shop</h3>
                <p className="text-gray-600 text-sm">Quality vinyl, HTV, cardstock & tools</p>
              </Link>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-8">
            <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 rounded-2xl p-8 text-white text-center shadow-xl">
              <h2 className="text-3xl font-bold mb-4">Ready to Create Easter Magic? 🐰</h2>
              <p className="text-lg mb-6 opacity-95 max-w-2xl mx-auto">
                You've got 15+ project ideas, pro tips, and step-by-step instructions. Now it's time to start creating. 
                Easter inventory makers are already getting ahead—will you?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/shop"
                  className="inline-block bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-purple-50 transition-colors"
                >
                  Shop Easter Materials
                </Link>
                <Link
                  href="/troubleshoot"
                  className="inline-block bg-purple-600 bg-opacity-50 text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-70 transition-colors border border-white"
                >
                  Troubleshooting Wizard
                </Link>
              </div>
            </div>
          </section>

          {/* Final Note */}
          <section className="bg-purple-50 rounded-xl p-6 text-center">
            <p className="text-gray-700 mb-3">
              <strong>Last Thing:</strong> These projects sell incredibly well if you're looking to turn your Cricut 
              into a side income. Easter crafts have high demand 2-4 weeks before the holiday, 
              and personalized items sell at premium prices.
            </p>
            <p className="text-gray-600 text-sm">
              Start batch-producing your favorites this week, and you'll have quality inventory ready 
              when demand peaks in mid-March. Happy crafting! 🐣
            </p>
          </section>

        </article>
      </main>
    </>
  );
}
