"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Product {
  id: string;
  title: string;
  asin: string;
  category: string;
  rating: string;
  reviews: string;
  price?: string;
  note: string;
  tag?: string;
}

const products: Product[] = [
  // Machines
  {
    id: "explore3",
    title: "Cricut Explore 3",
    asin: "B095X86D23",
    category: "machines",
    rating: "4.7",
    reviews: "8,200+",
    note: "Best for beginners, 2X faster with Smart Materials"
  },
  {
    id: "maker3",
    title: "Cricut Maker 3",
    asin: "B08YKBQV6S",
    category: "machines",
    rating: "4.7",
    reviews: "5,400+",
    note: "Cuts 300+ materials including leather & wood"
  },
  {
    id: "joy",
    title: "Cricut Joy",
    asin: "B084LQYJPF",
    category: "machines",
    rating: "4.6",
    reviews: "11,000+",
    note: "Compact, great for labels & cards"
  },
  {
    id: "easypress2",
    title: "Cricut EasyPress 2 (12x10)",
    asin: "B08LNV4SJV",
    category: "machines",
    rating: "4.8",
    reviews: "15,000+",
    note: "Perfect heat transfers every time"
  },
  
  // Vinyl
  {
    id: "oracal651",
    title: "Oracal 651 Vinyl Bundle (63 Sheets)",
    asin: "B071CFH6MS",
    category: "vinyl",
    rating: "4.7",
    reviews: "18,500+",
    note: "Professional-grade permanent vinyl"
  },
  {
    id: "cricut-vinyl-sampler",
    title: "Cricut Premium Vinyl Sampler Pack",
    asin: "B01CTQKEK8",
    category: "vinyl",
    rating: "4.7",
    reviews: "12,400+",
    note: "Great starter pack with popular colors"
  },
  {
    id: "removable-vinyl",
    title: "Cricut Smart Vinyl Removable (13ft)",
    asin: "B097T6BN7Y",
    category: "vinyl",
    rating: "4.6",
    reviews: "3,200+",
    note: "Matless cutting, easy to remove"
  },
  {
    id: "glitter-vinyl",
    title: "HTVRONT Glitter HTV Bundle (16 Sheets)",
    asin: "B08CXSR6SZ",
    category: "vinyl",
    rating: "4.5",
    reviews: "6,700+",
    note: "Sparkly iron-on for apparel"
  },
  
  // HTV / Iron-On
  {
    id: "siser-easyweed",
    title: "Siser EasyWeed HTV Bundle (12 Sheets)",
    asin: "B0127RTOYQ",
    category: "htv",
    rating: "4.8",
    reviews: "8,900+",
    note: "Industry-standard, easy to weed"
  },
  {
    id: "caregy-htv",
    title: "CAREGY HTV Bundle (26 Sheets)",
    asin: "B07H7GZQX7",
    category: "htv",
    rating: "4.6",
    reviews: "15,200+",
    note: "Budget-friendly variety pack"
  },
  {
    id: "cricut-everyday-ironon",
    title: "Cricut Everyday Iron-On Sampler",
    asin: "B07D4KKHVD",
    category: "htv",
    rating: "4.7",
    reviews: "4,100+",
    note: "Official Cricut HTV, reliable"
  },
  
  // Tools
  {
    id: "weeding-tools",
    title: "Cricut Weeding Tool Set",
    asin: "B00BHWPR6S",
    category: "tools",
    rating: "4.8",
    reviews: "21,000+",
    note: "Essential for vinyl projects"
  },
  {
    id: "basic-tools",
    title: "Cricut Basic Tool Set (5-Piece)",
    asin: "B07TMK6SVK",
    category: "tools",
    rating: "4.9",
    reviews: "45,300+",
    note: "Scissors, scraper, spatula, tweezers, weeder"
  },
  {
    id: "trimmer",
    title: "Cricut Portable Trimmer",
    asin: "B01LYLJ49N",
    category: "tools",
    rating: "4.7",
    reviews: "7,800+",
    note: "Clean cuts for paper and vinyl"
  },
  {
    id: "brightpad",
    title: "Cricut BrightPad Go",
    asin: "B09MFQH8TJ",
    category: "tools",
    rating: "4.8",
    reviews: "2,900+",
    note: "Makes weeding so much easier"
  },
  
  // Mats
  {
    id: "standardgrip-mat",
    title: "Cricut StandardGrip Mats 12x12 (3-Pack)",
    asin: "B00BQ5GJKG",
    category: "mats",
    rating: "4.8",
    reviews: "24,000+",
    note: "Essential for most materials"
  },
  {
    id: "lightgrip-mat",
    title: "Cricut LightGrip Mat 12x12 (3-Pack)",
    asin: "B00BQ5K6Z0",
    category: "mats",
    rating: "4.7",
    reviews: "9,800+",
    note: "For thin paper and delicate materials"
  },
  {
    id: "stronggrip-mat",
    title: "Cricut StrongGrip Mat 12x12 (3-Pack)",
    asin: "B00BQ5K6UQ",
    category: "mats",
    rating: "4.7",
    reviews: "8,200+",
    note: "For thick materials and leather"
  },
  {
    id: "variety-mat",
    title: "Cricut Variety Mat Pack (6 Mats)",
    asin: "B0BC7JT8SH",
    category: "mats",
    rating: "4.8",
    reviews: "1,200+",
    note: "One of each type - great starter set"
  },
  
  // Accessories
  {
    id: "transfer-tape",
    title: "Cricut Transfer Tape (12ft Roll)",
    asin: "B00BQ5I0V0",
    category: "accessories",
    rating: "4.7",
    reviews: "13,400+",
    note: "Essential for vinyl application"
  },
  {
    id: "fine-point-blades",
    title: "Cricut Fine Point Blade + Housing",
    asin: "B01BHTWFDY",
    category: "accessories",
    rating: "4.8",
    reviews: "11,200+",
    note: "Replacement blade for everyday cutting"
  },
  {
    id: "easypress-mat",
    title: "Cricut EasyPress Mat (12x12)",
    asin: "B07BN2TXGJ",
    category: "accessories",
    rating: "4.8",
    reviews: "11,000+",
    note: "Protects surfaces during heat press"
  },
  {
    id: "infusible-ink",
    title: "Cricut Infusible Ink Sheets (4 Pack)",
    asin: "B07SQ4LNL8",
    category: "accessories",
    rating: "4.6",
    reviews: "3,800+",
    note: "Permanent, vibrant, no peeling"
  },
];

const categories = [
  { id: "all", label: "All Products" },
  { id: "machines", label: "Machines" },
  { id: "vinyl", label: "Vinyl" },
  { id: "htv", label: "Iron-On / HTV" },
  { id: "tools", label: "Tools" },
  { id: "mats", label: "Mats" },
  { id: "accessories", label: "Accessories" },
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [shoppingList, setShoppingList] = useState<string[]>([]);
  const [showList, setShowList] = useState(false);
  
  // Load shopping list from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("cricuthelper-shopping-list");
    if (saved) {
      setShoppingList(JSON.parse(saved));
    }
  }, []);
  
  // Save shopping list to localStorage
  useEffect(() => {
    localStorage.setItem("cricuthelper-shopping-list", JSON.stringify(shoppingList));
  }, [shoppingList]);
  
  const toggleItem = (productId: string) => {
    setShoppingList(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };
  
  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(p => p.category === selectedCategory);
    
  const listProducts = products.filter(p => shoppingList.includes(p.id));
  
  const copyListToClipboard = () => {
    const text = listProducts.map(p => 
      `${p.title}\nhttps://www.amazon.com/dp/${p.asin}?tag=cricuthelpe03-20\n`
    ).join("\n");
    navigator.clipboard.writeText(text);
    alert("Shopping list copied to clipboard!");
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="text-pink-500 hover:underline">← Home</Link>
          <h1 className="text-3xl font-bold text-gray-800 mt-4">🛒 Cricut Shopping Guide</h1>
          <p className="text-gray-600 mt-2">
            Top-rated supplies recommended by the community. Build your shopping list!
          </p>
        </div>
        
        {/* Affiliate Disclosure */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-xs text-gray-600 mb-6">
          <strong>Affiliate Disclosure:</strong> As an Amazon Associate, we earn from qualifying purchases. 
          This helps support CricutHelper at no extra cost to you. We only recommend products with 4+ stars 
          and significant review counts.
        </div>
        
        {/* Shopping List Toggle */}
        <div className="flex flex-wrap gap-4 items-center justify-between mb-6">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat.id
                    ? "bg-pink-500 text-white"
                    : "bg-white border border-gray-200 text-gray-600 hover:border-pink-300"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          
          <button
            onClick={() => setShowList(!showList)}
            className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 ${
              shoppingList.length > 0
                ? "bg-green-500 text-white"
                : "bg-gray-100 text-gray-500"
            }`}
          >
            📋 My List ({shoppingList.length})
          </button>
        </div>
        
        {/* Shopping List Panel */}
        {showList && (
          <div className="bg-white border-2 border-green-300 rounded-2xl p-6 mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">My Shopping List</h2>
              {listProducts.length > 0 && (
                <button
                  onClick={copyListToClipboard}
                  className="text-sm text-pink-600 hover:underline"
                >
                  📋 Copy List
                </button>
              )}
            </div>
            
            {listProducts.length === 0 ? (
              <p className="text-gray-500">Your list is empty. Click the + button on products to add them!</p>
            ) : (
              <div className="space-y-3">
                {listProducts.map(product => (
                  <div key={product.id} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                    <div>
                      <p className="font-medium text-gray-800">{product.title}</p>
                      <a
                        href={`https://www.amazon.com/dp/${product.asin}?tag=cricuthelpe03-20`}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="text-sm text-pink-600 hover:underline"
                      >
                        View on Amazon →
                      </a>
                    </div>
                    <button
                      onClick={() => toggleItem(product.id)}
                      className="text-red-500 hover:bg-red-50 p-2 rounded-full"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-lg hover:border-pink-300 transition-all relative flex flex-col h-full"
            >
              {/* Add to List Button */}
              <button
                onClick={() => toggleItem(product.id)}
                className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-lg transition-all ${
                  shoppingList.includes(product.id)
                    ? "bg-green-500 text-white"
                    : "bg-gray-100 text-gray-400 hover:bg-pink-100 hover:text-pink-500"
                }`}
              >
                {shoppingList.includes(product.id) ? "✓" : "+"}
              </button>
              
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                {categories.find(c => c.id === product.category)?.label}
              </span>
              
              <h3 className="font-bold text-gray-900 mt-3 mb-2 pr-10">{product.title}</h3>
              
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <span className="text-yellow-500">★</span>
                <span>{product.rating}</span>
                <span className="text-gray-400">({product.reviews} reviews)</span>
              </div>
              
              <p className="text-gray-500 text-sm mb-4 flex-grow">{product.note}</p>
              
              <a
                href={`https://www.amazon.com/dp/${product.asin}?tag=cricuthelpe03-20`}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="block w-full bg-pink-500 text-white text-center py-2 rounded-xl font-medium hover:bg-pink-600 transition-colors mt-auto"
              >
                View on Amazon
              </a>
            </div>
          ))}
        </div>
        
        {/* Back to guides */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Not sure what you need?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/guides/best-cricut-for-beginners"
              className="text-pink-600 hover:underline"
            >
              → Best Cricut for Beginners
            </Link>
            <Link
              href="/guides/cricut-blade-guide"
              className="text-pink-600 hover:underline"
            >
              → Which Blade Do I Need?
            </Link>
            <Link
              href="/materials"
              className="text-pink-600 hover:underline"
            >
              → Material Settings
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
