"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import ShareMarginsModal from "@/components/ShareMarginsModal";

type Platform = "etsy" | "amazon" | "local" | "shopify" | "ebay" | "facebook";

const platformFees: Record<Platform, { transaction: number; payment: number; listing: number; label: string }> = {
  etsy: { transaction: 6.5, payment: 3, listing: 0.20, label: "Etsy" },
  amazon: { transaction: 15, payment: 0, listing: 0, label: "Amazon Handmade" },
  shopify: { transaction: 0, payment: 2.9, listing: 0, label: "Shopify" },
  ebay: { transaction: 13.25, payment: 0, listing: 0, label: "eBay" },
  facebook: { transaction: 5, payment: 0, listing: 0, label: "Facebook Marketplace" },
  local: { transaction: 0, payment: 0, listing: 0, label: "Local/Cash" },
};

export default function ProfitCalculatorPage() {
  const [sellingPrice, setSellingPrice] = useState<string>("25");
  const [materialCost, setMaterialCost] = useState<string>("8");
  const [timeMinutes, setTimeMinutes] = useState<string>("30");
  const [hourlyRate, setHourlyRate] = useState<string>("15");
  const [platform, setPlatform] = useState<Platform>("etsy");
  const [showShareModal, setShowShareModal] = useState(false);

  const calculations = useMemo(() => {
    const price = parseFloat(sellingPrice) || 0;
    const materials = parseFloat(materialCost) || 0;
    const minutes = parseFloat(timeMinutes) || 0;
    const hourly = parseFloat(hourlyRate) || 0;

    const laborCost = (minutes / 60) * hourly;
    
    // Platform fees
    const fees = platformFees[platform];
    const transactionFee = price * (fees.transaction / 100);
    const paymentFee = price * (fees.payment / 100);
    const totalFees = transactionFee + paymentFee + fees.listing;

    const totalCosts = materials + laborCost + totalFees;
    const profit = price - totalCosts;
    const profitMargin = price > 0 ? (profit / price) * 100 : 0;

    // Suggested price for 30% margin
    const baseCosts = materials + laborCost;
    const suggestedPrice = baseCosts / (1 - 0.30 - (fees.transaction + fees.payment) / 100);

    return {
      price,
      materials,
      laborCost,
      totalFees,
      totalCosts,
      profit,
      profitMargin,
      suggestedPrice,
    };
  }, [sellingPrice, materialCost, timeMinutes, hourlyRate, platform]);

  return (
    <div className="max-w-xl mx-auto">
      <div className="mb-6">
        <Link href="/" className="text-pink-500 hover:underline text-sm">← Home</Link>
        <h1 className="text-2xl font-bold text-gray-800 mt-3">💰 Profit Calculator</h1>
        <p className="text-gray-600 text-sm mt-1">Quick check — are you actually making money?</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-5 space-y-4">
        {/* Selling Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Selling Price</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
            <input
              type="number"
              step="0.01"
              value={sellingPrice}
              onChange={(e) => setSellingPrice(e.target.value)}
              className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-lg focus:border-pink-400 focus:ring-2 focus:ring-pink-100 outline-none text-lg"
            />
          </div>
        </div>

        {/* Material Cost */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Total Material Cost</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
            <input
              type="number"
              step="0.01"
              value={materialCost}
              onChange={(e) => setMaterialCost(e.target.value)}
              placeholder="Blank + vinyl + extras"
              className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-lg focus:border-pink-400 focus:ring-2 focus:ring-pink-100 outline-none"
            />
          </div>
          <p className="text-xs text-gray-400 mt-1">Include blank, vinyl, packaging — everything</p>
        </div>

        {/* Time Spent */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Time Spent (minutes)</label>
            <input
              type="number"
              value={timeMinutes}
              onChange={(e) => setTimeMinutes(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-pink-400 focus:ring-2 focus:ring-pink-100 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Hourly Rate</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
              <input
                type="number"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(e.target.value)}
                className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-lg focus:border-pink-400 focus:ring-2 focus:ring-pink-100 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Platform */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Where are you selling?</label>
          <select
            value={platform}
            onChange={(e) => setPlatform(e.target.value as Platform)}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-pink-400 focus:ring-2 focus:ring-pink-100 outline-none bg-white"
          >
            {Object.entries(platformFees).map(([key, { label }]) => (
              <option key={key} value={key}>{label}</option>
            ))}
          </select>
          <p className="text-xs text-gray-400 mt-1">
            {platform !== "local" ? (
              <>Fees: {platformFees[platform].transaction > 0 && `${platformFees[platform].transaction}% transaction`}
              {platformFees[platform].payment > 0 && ` + ${platformFees[platform].payment}% payment`}
              {platformFees[platform].listing > 0 && ` + $${platformFees[platform].listing} listing`}</>
            ) : (
              "No platform fees"
            )}
          </p>
        </div>
      </div>

      {/* Results */}
      <div className={`mt-4 rounded-xl shadow-lg p-5 ${calculations.profit >= 0 ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
        <div className="flex items-center justify-between mb-3">
          <span className="text-gray-700 font-medium">Your Profit:</span>
          <span className={`text-4xl font-bold ${calculations.profit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            ${calculations.profit.toFixed(2)}
          </span>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Profit Margin:</span>
          <span className={`font-medium ${calculations.profitMargin >= 30 ? 'text-green-600' : calculations.profitMargin >= 15 ? 'text-yellow-600' : 'text-red-600'}`}>
            {calculations.profitMargin.toFixed(1)}%
            {calculations.profitMargin < 30 && <span className="text-gray-400 ml-1">(aim for 30%+)</span>}
          </span>
        </div>

        {calculations.profitMargin < 30 && calculations.suggestedPrice > 0 && (
          <div className="mt-3 pt-3 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              💡 For 30% margin, price at: <span className="font-bold text-purple-600">${calculations.suggestedPrice.toFixed(2)}</span>
            </p>
          </div>
        )}

        {/* Share Button */}
        {calculations.profit > 0 && (
          <button
            onClick={() => setShowShareModal(true)}
            className="mt-4 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 px-4 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all flex items-center justify-center gap-2"
          >
            <span>✨</span> Share My Margins
          </button>
        )}
      </div>

      {/* Quick breakdown */}
      <div className="mt-4 bg-white rounded-xl shadow p-4">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Breakdown</h3>
        <div className="space-y-1 text-sm">
          <div className="flex justify-between text-gray-600">
            <span>Selling Price</span>
            <span className="text-green-600">+${calculations.price.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Materials</span>
            <span className="text-red-500">-${calculations.materials.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Labor ({timeMinutes} min @ ${hourlyRate}/hr)</span>
            <span className="text-red-500">-${calculations.laborCost.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>{platformFees[platform].label} Fees</span>
            <span className="text-red-500">-${calculations.totalFees.toFixed(2)}</span>
          </div>
          <div className="flex justify-between pt-2 border-t border-gray-100 font-medium">
            <span>Net Profit</span>
            <span className={calculations.profit >= 0 ? 'text-green-600' : 'text-red-600'}>
              ${calculations.profit.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      {/* Advanced Calculator Link */}
      <div className="mt-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-5 text-white">
        <h3 className="font-bold text-lg mb-2">Need more detail?</h3>
        <p className="text-sm text-purple-100 mb-4">
          Track multiple materials, compare all marketplaces, add overhead costs, and more.
        </p>
        <Link 
          href="/profit-calculator/advanced"
          className="inline-block bg-white text-purple-600 font-semibold px-5 py-2 rounded-lg hover:bg-purple-50 transition-colors"
        >
          Try Advanced Calculator →
        </Link>
      </div>

      {/* Share Modal */}
      <ShareMarginsModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        data={{
          productType: "My Craft Product",
          sellingPrice: calculations.price,
          totalCosts: calculations.totalCosts,
          profit: calculations.profit,
          profitMargin: calculations.profitMargin,
          marketplace: platformFees[platform].label,
        }}
      />
    </div>
  );
}
