import Link from "next/link";

interface CraftCalcCTAProps {
  variant?: "default" | "compact";
  context?: "cut-calculator" | "profit-calculator" | "general";
}

export default function CraftCalcCTA({ variant = "default", context = "general" }: CraftCalcCTAProps) {
  const contextMessages = {
    "cut-calculator": "Take your material planning to the next level",
    "profit-calculator": "Level up your pricing game",
    "general": "Take your crafting business further",
  };

  if (variant === "compact") {
    return (
      <div className="bg-gradient-to-r from-[#F5F0E8] to-[#FAF5F5] border border-[#D4A5A5]/30 rounded-xl p-5 mt-6">
        <div className="flex items-center gap-4">
          <div className="text-3xl">📱</div>
          <div className="flex-1">
            <h3 className="font-bold text-gray-800">Want more? Get CraftCalc</h3>
            <p className="text-sm text-gray-600 mt-0.5">
              Batch pricing • Marketplace fees • Offline access
            </p>
          </div>
          <Link
            href="/app"
            className="bg-gradient-to-r from-[#9CAF88] to-[#6B7F5E] text-white font-semibold px-5 py-2.5 rounded-lg hover:shadow-lg transition-all whitespace-nowrap"
          >
            Get the App →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-[#F5F0E8] via-white to-[#FAF5F5] border border-[#C9A962]/20 rounded-2xl p-6 mt-8 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="bg-gradient-to-br from-[#9CAF88] to-[#6B7F5E] w-14 h-14 rounded-xl flex items-center justify-center text-2xl shadow-md flex-shrink-0">
          📱
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold text-gray-800">Want more? Get CraftCalc</h3>
            <span className="bg-[#C9A962] text-white text-xs font-bold px-2 py-0.5 rounded-full">
              FREE
            </span>
          </div>
          <p className="text-gray-600 mt-1">
            {contextMessages[context]}
          </p>
          
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="flex items-center gap-2">
              <span className="text-[#9CAF88]">✓</span>
              <span className="text-sm text-gray-700">Batch pricing for orders</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#9CAF88]">✓</span>
              <span className="text-sm text-gray-700">Etsy, Amazon & Shopify fees</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#9CAF88]">✓</span>
              <span className="text-sm text-gray-700">Works offline anywhere</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#9CAF88]">✓</span>
              <span className="text-sm text-gray-700">40+ heat press settings</span>
            </div>
          </div>

          <div className="mt-5 flex items-center gap-4">
            <Link
              href="/app"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#9CAF88] to-[#6B7F5E] text-white font-semibold px-6 py-3 rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all"
            >
              <span>Get CraftCalc Free</span>
              <span>→</span>
            </Link>
            <div className="flex items-center gap-1.5 text-sm text-gray-500">
              <span className="text-[#C9A962]">★★★★★</span>
              <span>Loved by crafters</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
