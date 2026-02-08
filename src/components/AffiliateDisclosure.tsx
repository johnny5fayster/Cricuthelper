export function AffiliateDisclosure() {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-xs text-gray-600 mb-6">
      <strong>Affiliate Disclosure:</strong> As an Amazon Associate, we earn from qualifying purchases. 
      This helps support CricutHelper at no extra cost to you. We only recommend products we trust.
    </div>
  );
}

export function AffiliateLink({ 
  href, 
  children, 
  className = "" 
}: { 
  href: string; 
  children: React.ReactNode; 
  className?: string;
}) {
  // Append affiliate tag if not present
  const affiliateUrl = href.includes('tag=') ? href : 
    href.includes('?') ? `${href}&tag=cricuthelpe03-20` : `${href}?tag=cricuthelpe03-20`;
  
  return (
    <a 
      href={affiliateUrl}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={`text-pink-600 hover:text-pink-700 underline ${className}`}
    >
      {children}
    </a>
  );
}

interface ProductCardProps {
  title: string;
  asin: string;
  rating: string;
  reviews: string;
  price?: string;
  note?: string;
  tag?: string;
}

export function ProductCard({ title, asin, rating, reviews, price, note, tag = "cricuthelpe03-20" }: ProductCardProps) {
  const url = `https://www.amazon.com/dp/${asin}?tag=${tag}`;
  
  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="block bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg hover:border-pink-300 transition-all"
    >
      <h4 className="font-semibold text-gray-900 text-sm mb-2 line-clamp-2">{title}</h4>
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
        <span className="text-yellow-500">★</span>
        <span>{rating}</span>
        <span className="text-gray-400">({reviews} reviews)</span>
      </div>
      {price && <p className="text-green-600 font-medium text-sm">{price}</p>}
      {note && <p className="text-gray-500 text-xs mt-2">{note}</p>}
      <p className="text-pink-600 text-xs mt-2 font-medium">View on Amazon →</p>
    </a>
  );
}
