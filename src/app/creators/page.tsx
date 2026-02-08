import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cricut Creators We Love | CricutHelper',
  description: 'Our favorite Cricut YouTubers, bloggers, and influencers. Learn from the best in the crafting community.',
  keywords: 'cricut youtubers, cricut influencers, cricut bloggers, cricut tutorials, best cricut channels',
};

interface Creator {
  name: string;
  handle: string;
  specialty: string;
  description: string;
  youtube?: string;
  website?: string;
  instagram?: string;
  pinterest?: string;
  image?: string;
}

const creators: Creator[] = [
  {
    name: "Angie Holden",
    handle: "@countrychiccottage",
    specialty: "Home Decor & Farmhouse Style",
    description: "Country Chic Cottage focuses on beautiful farmhouse-style Cricut projects. Angie's aesthetic is clean and her tutorials are easy to follow.",
    youtube: "https://www.youtube.com/c/CountryChicCottage",
    website: "https://www.thecountrychiccottage.net",
    instagram: "https://www.instagram.com/countrychiccottage",
    pinterest: "https://www.pinterest.com/countrychiccottage",
  },
  {
    name: "Sweet Red Poppy",
    handle: "@sweetredpoppy",
    specialty: "Sewing & Fabric Projects",
    description: "Alicia combines Cricut with sewing for amazing fabric projects. Great resource if you have a Maker and want to explore fabric cutting.",
    youtube: "https://www.youtube.com/c/SweetRedPoppy",
    website: "https://sweetredpoppy.com",
    instagram: "https://www.instagram.com/sweetredpoppy",
    pinterest: "https://www.pinterest.com/sweetredpoppy",
  },
  {
    name: "Melody Lane",
    handle: "@melodylane",
    specialty: "Card Making & Paper Crafts",
    description: "Specializes in beautiful card making with Cricut. Her designs are elegant and she shares great tips for paper crafting.",
    youtube: "https://www.youtube.com/c/MelodyLaneCrafts",
    website: "https://www.melodylanecrafts.com",
    instagram: "https://www.instagram.com/melodylanecrafts",
  },
  {
    name: "The Homes I Have Made",
    handle: "@thehomesihavemade",
    specialty: "Home Organization & Decor",
    description: "Megan uses her Cricut primarily for home organization and decor. Great inspiration for practical, everyday Cricut projects.",
    website: "https://thehomesihavemade.com",
    instagram: "https://www.instagram.com/thehomesihavemade",
    pinterest: "https://www.pinterest.com/thehomesihavemade",
  },
  {
    name: "100 Directions",
    handle: "@100directions",
    specialty: "Quick Projects & Printables",
    description: "Jen Goode shares quick, fun projects that are perfect when you want to make something without a huge time commitment.",
    website: "https://www.100directions.com",
    instagram: "https://www.instagram.com/100directions",
    pinterest: "https://www.pinterest.com/100directions",
  },
  {
    name: "Crafts by Amanda",
    handle: "@craftsbyamanda",
    specialty: "Family & Kids Crafts",
    description: "Amanda focuses on family-friendly crafts that are perfect for making with kids. Great resource for parents who craft.",
    website: "https://craftsbyamanda.com",
    instagram: "https://www.instagram.com/craftsbyamanda",
    pinterest: "https://www.pinterest.com/amandaformaro",
  },
];

export default function CreatorsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="text-pink-500 hover:underline">← Home</Link>
          <h1 className="text-4xl font-bold text-gray-900 mt-4">
            ❤️ Cricut Creators We Love
          </h1>
          <p className="text-xl text-gray-600 mt-2">
            Amazing YouTubers, bloggers, and makers who inspire the Cricut community. 
            We learn from them, and we think you will too!
          </p>
        </div>

        {/* Note */}
        <div className="bg-pink-50 border border-pink-200 rounded-xl p-4 mb-8">
          <p className="text-pink-800">
            <strong>Note:</strong> We're not affiliated with these creators — we just think they're awesome! 
            These are independent recommendations based on content quality and helpfulness to the community.
          </p>
        </div>

        {/* Creators Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {creators.map((creator) => (
            <div 
              key={creator.handle}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shrink-0">
                  {creator.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-900">{creator.name}</h2>
                  <p className="text-pink-600 text-sm">{creator.handle}</p>
                  <span className="inline-block mt-1 text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">
                    {creator.specialty}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                {creator.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {creator.youtube && (
                  <a
                    href={creator.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm bg-red-100 text-red-700 px-3 py-1.5 rounded-full hover:bg-red-200 transition-colors"
                  >
                    ▶️ YouTube
                  </a>
                )}
                {creator.website && (
                  <a
                    href={creator.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full hover:bg-blue-200 transition-colors"
                  >
                    🌐 Website
                  </a>
                )}
                {creator.instagram && (
                  <a
                    href={creator.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm bg-pink-100 text-pink-700 px-3 py-1.5 rounded-full hover:bg-pink-200 transition-colors"
                  >
                    📷 Instagram
                  </a>
                )}
                {creator.pinterest && (
                  <a
                    href={creator.pinterest}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm bg-red-100 text-red-600 px-3 py-1.5 rounded-full hover:bg-red-200 transition-colors"
                  >
                    📌 Pinterest
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Know a Creator We Should Feature?</h2>
          <p className="mb-6 opacity-90">
            We're always looking for amazing Cricut creators to highlight. 
            If you know someone (or you ARE someone!) making great content, let us know!
          </p>
          <a 
            href="mailto:hello@cricuthelper.com?subject=Creator Suggestion"
            className="inline-block bg-white text-pink-600 px-6 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors"
          >
            Suggest a Creator
          </a>
        </div>

        {/* Back to resources */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">Looking for help with your Cricut?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/guides" className="text-pink-600 hover:underline">
              → Browse Our Guides
            </Link>
            <Link href="/troubleshoot" className="text-pink-600 hover:underline">
              → Troubleshoot a Problem
            </Link>
            <Link href="/materials" className="text-pink-600 hover:underline">
              → Material Settings
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
