"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

export default function SimpleCalculatorPage() {
  const [sellingPrice, setSellingPrice] = useState<string>("25");
  const [materialCost, setMaterialCost] = useState<string>("8");
  const [laborMinutes, setLaborMinutes] = useState<string>("30");
  const [hourlyRate, setHourlyRate] = useState<string>("15");
  const [shippingCharged, setShippingCharged] = useState<string>("5");
  const [shippingCost, setShippingCost] = useState<string>("4");

  // Etsy fees only for simple version
  const etsyTransactionFee = 0.065;
  const etsyPaymentFee = 0.03;
  const etsyListingFee = 0.20;

  const calculations = useMemo(() => {
    const price = parseFloat(sellingPrice) || 0;
    const materials = parseFloat(materialCost) || 0;
    const minutes = parseFloat(laborMinutes) || 0;
    const hourly = parseFloat(hourlyRate) || 0;
    const shipCharged = parseFloat(shippingCharged) || 0;
    const shipCost = parseFloat(shippingCost) || 0;

    const totalRevenue = price + shipCharged;
    const laborCost = (minutes / 60) * hourly;
    
    // Etsy fees
    const transactionFee = price * etsyTransactionFee;
    const paymentFee = totalRevenue * etsyPaymentFee;
    const fees = transactionFee + paymentFee + etsyListingFee;

    const totalCosts = materials + laborCost + shipCost + fees;
    const profit = totalRevenue - totalCosts;
    const profitMargin = totalRevenue > 0 ? (profit / totalRevenue) * 100 : 0;

    // Suggested price for 30% margin
    const baseCosts = materials + laborCost + shipCost;
    const suggestedPrice = baseCosts / 0.60; // Account for ~10% fees + 30% margin

    return {
      totalRevenue,
      materials,
      laborCost,
      shipCost,
      fees,
      totalCosts,
      profit,
      profitMargin,
      suggestedPrice,
    };
  }, [sellingPrice, materialCost, laborMinutes, hourlyRate, shippingCharged, shippingCost]);

  return (
    <div className="max-w-xl mx-auto">
      <div className="mb-6">
        <Link href="/" className="text-pink-500 hover:underline text-sm">← Home</Link>
        <h1 className="text-2xl font-bold text-gray-800 mt-3">💰 Quick Profit Check</h1>
        <p className="text-gray-600 text-sm mt-1">See if you're making money on Etsy</p>
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
              className="w-full pl-8 pr-4 py-2.5 border border-gray-200 rounded-lg focus:border-pink-400 focus:ring-2 focus:ring-pink-100 outline-none"
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
              className="w-full pl-8 pr-4 py-2.5 border border-gray-200 rounded-lg focus:border-pink-400 focus:ring-2 focus:ring-pink-100 outline-none"
            />
          </div>
          <p className="text-xs text-gray-400 mt-1">Include blank, vinyl, and any extras</p>
        </div>

        {/* Labor */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Time (minutes)</label>
            <input
              type="number"
              value={laborMinutes}
              onChange={(e) => setLaborMinutes(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:border-pink-400 focus:ring-2 focus:ring-pink-100 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Rate ($/hr)</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
              <input
                type="number"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(e.target.value)}
                className="w-full pl-8 pr-4 py-2.5 border border-gray-200 rounded-lg focus:border-pink-400 focus:ring-2 focus:ring-pink-100 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Shipping */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Shipping Charged</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
              <input
                type="number"
                step="0.01"
                value={shippingCharged}
                onChange={(e) => setShippingCharged(e.target.value)}
                className="w-full pl-8 pr-4 py-2.5 border border-gray-200 rounded-lg focus:border-pink-400 focus:ring-2 focus:ring-pink-100 outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Actual Shipping</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
              <input
                type="number"
                step="0.01"
                value={shippingCost}
                onChange={(e) => setShippingCost(e.target.value)}
                className="w-full pl-8 pr-4 py-2.5 border border-gray-200 rounded-lg focus:border-pink-400 focus:ring-2 focus:ring-pink-100 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Marketplace indicator */}
        <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 rounded-lg px-3 py-2">
          <span>📍 Etsy fees included</span>
          <span className="text-gray-300">|</span>
          <span className="text-gray-400">6.5% + 3% + $0.20</span>
        </div>
      </div>

      {/* Results */}
      <div className={`mt-4 rounded-xl shadow-lg p-5 ${calculations.profit >= 0 ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
        <div className="flex items-center justify-between mb-3">
          <span className="text-gray-700 font-medium">Your Profit:</span>
          <span className={`text-3xl font-bold ${calculations.profit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
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

        {calculations.profitMargin < 30 && (
          <div className="mt-3 pt-3 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              💡 For 30% margin, price at: <span className="font-bold text-purple-600">${calculations.suggestedPrice.toFixed(2)}</span>
            </p>
          </div>
        )}
      </div>

      {/* Quick breakdown */}
      <div className="mt-4 bg-white rounded-xl shadow p-4">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Quick Breakdown</h3>
        <div className="space-y-1 text-sm">
          <div className="flex justify-between text-gray-600">
            <span>Revenue</span>
            <span className="text-green-600">+${calculations.totalRevenue.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Materials</span>
            <span className="text-red-500">-${calculations.materials.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Labor ({laborMinutes} min)</span>
            <span className="text-red-500">-${calculations.laborCost.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Shipping</span>
            <span className="text-red-500">-${calculations.shipCost.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Etsy Fees</span>
            <span className="text-red-500">-${calculations.fees.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Pro Upsell */}
      <div className="mt-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-5 text-white">
        <h3 className="font-bold text-lg mb-2">Need More?</h3>
        <ul className="text-sm space-y-1 mb-4 text-purple-100">
          <li>✓ Save unlimited projects</li>
          <li>✓ Multiple materials & labor types</li>
          <li>✓ Compare all marketplaces (Amazon, Shopify, eBay...)</li>
          <li>✓ Export professional PDF quotes</li>
          <li>✓ Batch pricing for bulk orders</li>
        </ul>
        <Link 
          href="/profit-calculator"
          className="inline-block bg-white text-purple-600 font-semibold px-5 py-2 rounded-lg hover:bg-purple-50 transition-colors"
        >
          Try Pro Calculator →
        </Link>
      </div>
    </div>
  );
}
