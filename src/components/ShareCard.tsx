"use client";

export type PrivacyLevel = "full" | "percentages" | "achievement";

export interface ShareCardProps {
  productType: string;
  sellingPrice: number;
  totalCosts: number;
  profit: number;
  profitMargin: number;
  marketplace: string;
  privacyLevel: PrivacyLevel;
  message: string;
}

export const SHARE_MESSAGES = [
  "Stop underpricing your work! 💪",
  "Know your worth. Price it. 💰",
  "Your time has value. Your art has value. 🎨",
  "Profitable crafting = sustainable crafting ✨",
  "Finally pricing like a boss! 👑",
  "Crafter math for the win! 🧮",
  "I did the math. You should too. 📊",
  "Hobby to hustle, one calculation at a time 🚀",
];

export default function ShareCard({
  productType,
  sellingPrice,
  totalCosts,
  profit,
  profitMargin,
  marketplace,
  privacyLevel,
  message,
}: ShareCardProps) {
  // Helper to get margin tier
  const getMarginTier = (margin: number) => {
    if (margin >= 50) return { label: "Excellent", emoji: "🔥", color: "text-green-600" };
    if (margin >= 30) return { label: "Healthy", emoji: "💚", color: "text-green-500" };
    if (margin >= 15) return { label: "Okay", emoji: "⚠️", color: "text-yellow-500" };
    return { label: "Low", emoji: "📉", color: "text-red-500" };
  };

  const marginTier = getMarginTier(profitMargin);

  return (
    <div
      id="share-card"
      className="w-full aspect-square max-w-[400px] bg-gradient-to-br from-purple-600 via-[#9CAF88] to-orange-400 rounded-2xl p-1"
    >
      <div className="w-full h-full bg-white rounded-xl p-6 flex flex-col justify-between">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-2xl">✂️</span>
            <span className="font-bold text-gray-800">
              Cricut<span className="text-[#9CAF88]">Helper</span>
            </span>
          </div>
          <p className="text-xs text-gray-400 uppercase tracking-wide">Profit Calculator</p>
        </div>

        {/* Content based on privacy level */}
        <div className="flex-1 flex flex-col items-center justify-center py-4">
          {privacyLevel === "full" && (
            <>
              <p className="text-sm text-gray-500 mb-1">{productType || "My Product"}</p>
              <div className="text-center mb-4">
                <p className="text-4xl font-bold text-green-600">${profit.toFixed(2)}</p>
                <p className="text-sm text-gray-500">profit per item</p>
              </div>
              <div className="grid grid-cols-3 gap-4 w-full max-w-xs text-center">
                <div>
                  <p className="text-lg font-semibold text-gray-800">${sellingPrice.toFixed(2)}</p>
                  <p className="text-xs text-gray-400">Price</p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-800">${totalCosts.toFixed(2)}</p>
                  <p className="text-xs text-gray-400">Costs</p>
                </div>
                <div>
                  <p className={`text-lg font-semibold ${marginTier.color}`}>{profitMargin.toFixed(0)}%</p>
                  <p className="text-xs text-gray-400">Margin</p>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-3">via {marketplace}</p>
            </>
          )}

          {privacyLevel === "percentages" && (
            <>
              <p className="text-sm text-gray-500 mb-1">{productType || "My Product"}</p>
              <div className="text-center mb-4">
                <p className={`text-5xl font-bold ${marginTier.color}`}>{profitMargin.toFixed(0)}%</p>
                <p className="text-lg text-gray-600">profit margin</p>
              </div>
              <div className="flex items-center gap-2 text-xl">
                <span>{marginTier.emoji}</span>
                <span className={`font-semibold ${marginTier.color}`}>{marginTier.label} Margins!</span>
              </div>
            </>
          )}

          {privacyLevel === "achievement" && (
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-5xl">🏆</span>
              </div>
              <p className="text-2xl font-bold text-gray-800 mb-1">
                {profitMargin >= 30 ? "Pricing Pro!" : "Margin Master!"}
              </p>
              <p className="text-gray-500">
                {profitMargin >= 50
                  ? "Crushing it with 50%+ margins"
                  : profitMargin >= 30
                  ? "Healthy margins achieved!"
                  : "Calculated my true costs!"}
              </p>
            </div>
          )}
        </div>

        {/* Message */}
        <div className="text-center">
          <p className="text-sm font-medium text-gray-700 mb-3 italic">"{message}"</p>
          <div className="bg-gradient-to-r from-purple-100 to-[#F5E6E6] rounded-lg py-2 px-4">
            <p className="text-xs text-purple-700 font-medium">
              Try it free → cricuthelper.com/profit-calculator
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
