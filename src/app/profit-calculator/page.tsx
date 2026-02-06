"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

interface MaterialCost {
  name: string;
  cost: string;
  quantity: string;
}

interface MarketplaceFees {
  name: string;
  transactionPercent: number;
  paymentPercent: number;
  listingFee: number;
  enabled: boolean;
}

const defaultMarketplaces: MarketplaceFees[] = [
  { name: "Etsy", transactionPercent: 6.5, paymentPercent: 3, listingFee: 0.20, enabled: true },
  { name: "Amazon Handmade", transactionPercent: 15, paymentPercent: 0, listingFee: 0, enabled: false },
  { name: "Facebook/Local", transactionPercent: 0, paymentPercent: 0, listingFee: 0, enabled: false },
  { name: "Shopify", transactionPercent: 0, paymentPercent: 2.9, listingFee: 0, enabled: false },
];

export default function ProfitCalculatorPage() {
  const [sellingPrice, setSellingPrice] = useState<string>("25");
  const [shippingCharged, setShippingCharged] = useState<string>("5");
  const [shippingCost, setShippingCost] = useState<string>("4");
  const [laborMinutes, setLaborMinutes] = useState<string>("30");
  const [hourlyRate, setHourlyRate] = useState<string>("15");
  const [packagingCost, setPackagingCost] = useState<string>("1");
  const [materials, setMaterials] = useState<MaterialCost[]>([
    { name: "Blank (shirt, tumbler, etc)", cost: "5", quantity: "1" },
    { name: "HTV/Vinyl", cost: "0.50", quantity: "1" },
  ]);
  const [marketplaces, setMarketplaces] = useState<MarketplaceFees[]>(defaultMarketplaces);

  const addMaterial = () => {
    setMaterials([...materials, { name: "", cost: "0", quantity: "1" }]);
  };

  const updateMaterial = (index: number, field: keyof MaterialCost, value: string) => {
    const updated = [...materials];
    updated[index][field] = value;
    setMaterials(updated);
  };

  const removeMaterial = (index: number) => {
    setMaterials(materials.filter((_, i) => i !== index));
  };

  const toggleMarketplace = (index: number) => {
    const updated = [...marketplaces];
    updated[index].enabled = !updated[index].enabled;
    setMarketplaces(updated);
  };

  const calculations = useMemo(() => {
    const price = parseFloat(sellingPrice) || 0;
    const shipCharged = parseFloat(shippingCharged) || 0;
    const shipCost = parseFloat(shippingCost) || 0;
    const minutes = parseFloat(laborMinutes) || 0;
    const hourly = parseFloat(hourlyRate) || 0;
    const packaging = parseFloat(packagingCost) || 0;

    const totalRevenue = price + shipCharged;
    
    const materialsCost = materials.reduce((sum, m) => {
      return sum + (parseFloat(m.cost) || 0) * (parseFloat(m.quantity) || 1);
    }, 0);

    const laborCost = (minutes / 60) * hourly;
    
    const baseCosts = materialsCost + laborCost + shipCost + packaging;

    const enabledMarketplace = marketplaces.find(m => m.enabled);
    
    let fees = 0;
    let feesBreakdown = "";
    if (enabledMarketplace) {
      const transactionFee = price * (enabledMarketplace.transactionPercent / 100);
      const paymentFee = totalRevenue * (enabledMarketplace.paymentPercent / 100);
      const listingFee = enabledMarketplace.listingFee;
      fees = transactionFee + paymentFee + listingFee;
      feesBreakdown = `${enabledMarketplace.name}: $${transactionFee.toFixed(2)} transaction + $${paymentFee.toFixed(2)} payment + $${listingFee.toFixed(2)} listing`;
    }

    const totalCosts = baseCosts + fees;
    const profit = totalRevenue - totalCosts;
    const profitMargin = totalRevenue > 0 ? (profit / totalRevenue) * 100 : 0;
    const markupPercent = baseCosts > 0 ? ((price - baseCosts) / baseCosts) * 100 : 0;

    // Suggested pricing
    const suggestedPrice30 = baseCosts / 0.70; // 30% margin
    const suggestedPrice50 = baseCosts / 0.50; // 50% margin

    return {
      totalRevenue,
      materialsCost,
      laborCost,
      shipCost,
      packaging,
      fees,
      feesBreakdown,
      totalCosts,
      profit,
      profitMargin,
      markupPercent,
      suggestedPrice30,
      suggestedPrice50,
    };
  }, [sellingPrice, shippingCharged, shippingCost, laborMinutes, hourlyRate, packagingCost, materials, marketplaces]);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Link href="/" className="text-pink-500 hover:underline">← Home</Link>
        <h1 className="text-3xl font-bold text-gray-800 mt-4">💰 Profit Calculator</h1>
        <p className="text-gray-600 mt-2">Calculate your true profit per item including materials, labor, and marketplace fees.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          {/* Pricing */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">💵 Pricing</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Selling Price</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                  <input
                    type="number"
                    step="0.01"
                    value={sellingPrice}
                    onChange={(e) => setSellingPrice(e.target.value)}
                    className="w-full pl-8 pr-4 py-2 border border-gray-200 rounded-lg focus:border-pink-400 outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Shipping Charged</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                  <input
                    type="number"
                    step="0.01"
                    value={shippingCharged}
                    onChange={(e) => setShippingCharged(e.target.value)}
                    className="w-full pl-8 pr-4 py-2 border border-gray-200 rounded-lg focus:border-pink-400 outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Materials */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">🛒 Materials</h2>
            <div className="space-y-3">
              {materials.map((material, index) => (
                <div key={index} className="flex gap-2 items-center">
                  <input
                    type="text"
                    placeholder="Material name"
                    value={material.name}
                    onChange={(e) => updateMaterial(index, "name", e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:border-pink-400 outline-none text-sm"
                  />
                  <div className="relative w-24">
                    <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                    <input
                      type="number"
                      step="0.01"
                      placeholder="Cost"
                      value={material.cost}
                      onChange={(e) => updateMaterial(index, "cost", e.target.value)}
                      className="w-full pl-6 pr-2 py-2 border border-gray-200 rounded-lg focus:border-pink-400 outline-none text-sm"
                    />
                  </div>
                  <input
                    type="number"
                    min="1"
                    placeholder="Qty"
                    value={material.quantity}
                    onChange={(e) => updateMaterial(index, "quantity", e.target.value)}
                    className="w-16 px-2 py-2 border border-gray-200 rounded-lg focus:border-pink-400 outline-none text-sm text-center"
                  />
                  <button
                    onClick={() => removeMaterial(index)}
                    className="text-red-400 hover:text-red-600 px-2"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
            <button
              onClick={addMaterial}
              className="mt-3 text-pink-500 hover:text-pink-600 text-sm font-medium"
            >
              + Add material
            </button>
          </div>

          {/* Labor & Shipping */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">⏱️ Labor & Shipping</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Time per item (min)</label>
                <input
                  type="number"
                  value={laborMinutes}
                  onChange={(e) => setLaborMinutes(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-pink-400 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Your hourly rate</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                  <input
                    type="number"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(e.target.value)}
                    className="w-full pl-8 pr-4 py-2 border border-gray-200 rounded-lg focus:border-pink-400 outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Actual shipping cost</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                  <input
                    type="number"
                    step="0.01"
                    value={shippingCost}
                    onChange={(e) => setShippingCost(e.target.value)}
                    className="w-full pl-8 pr-4 py-2 border border-gray-200 rounded-lg focus:border-pink-400 outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Packaging cost</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                  <input
                    type="number"
                    step="0.01"
                    value={packagingCost}
                    onChange={(e) => setPackagingCost(e.target.value)}
                    className="w-full pl-8 pr-4 py-2 border border-gray-200 rounded-lg focus:border-pink-400 outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Marketplace */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">🏪 Marketplace Fees</h2>
            <div className="space-y-2">
              {marketplaces.map((mp, index) => (
                <label key={mp.name} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input
                    type="radio"
                    name="marketplace"
                    checked={mp.enabled}
                    onChange={() => {
                      const updated = marketplaces.map((m, i) => ({
                        ...m,
                        enabled: i === index
                      }));
                      setMarketplaces(updated);
                    }}
                    className="text-pink-500"
                  />
                  <span className="flex-1 font-medium">{mp.name}</span>
                  <span className="text-sm text-gray-500">
                    {mp.transactionPercent > 0 && `${mp.transactionPercent}% + `}
                    {mp.paymentPercent > 0 && `${mp.paymentPercent}% + `}
                    {mp.listingFee > 0 && `$${mp.listingFee}`}
                    {mp.transactionPercent === 0 && mp.paymentPercent === 0 && mp.listingFee === 0 && "No fees"}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {/* Profit Summary */}
          <div className={`rounded-xl shadow-lg p-6 ${calculations.profit >= 0 ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
            <h2 className="text-lg font-bold text-gray-800 mb-2">Your Profit</h2>
            <p className={`text-4xl font-bold ${calculations.profit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              ${calculations.profit.toFixed(2)}
            </p>
            <p className={`text-sm ${calculations.profitMargin >= 30 ? 'text-green-600' : 'text-orange-500'}`}>
              {calculations.profitMargin.toFixed(1)}% profit margin
            </p>
          </div>

          {/* Breakdown */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">📊 Breakdown</h2>
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Revenue (price + shipping)</span>
                <span className="font-medium text-green-600">+${calculations.totalRevenue.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Materials</span>
                <span className="font-medium text-red-500">-${calculations.materialsCost.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Labor ({laborMinutes} min @ ${hourlyRate}/hr)</span>
                <span className="font-medium text-red-500">-${calculations.laborCost.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Shipping cost</span>
                <span className="font-medium text-red-500">-${calculations.shipCost.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Packaging</span>
                <span className="font-medium text-red-500">-${calculations.packaging.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Marketplace fees</span>
                <span className="font-medium text-red-500">-${calculations.fees.toFixed(2)}</span>
              </div>
              {calculations.feesBreakdown && (
                <p className="text-xs text-gray-400">{calculations.feesBreakdown}</p>
              )}
              <div className="flex justify-between py-2 pt-4 border-t-2 border-gray-200">
                <span className="font-bold text-gray-800">Net Profit</span>
                <span className={`font-bold ${calculations.profit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  ${calculations.profit.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {/* Suggested Pricing */}
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
            <h2 className="text-lg font-bold text-purple-800 mb-4">💡 Suggested Pricing</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-purple-700">For 30% profit margin:</span>
                <span className="font-bold text-purple-800 text-lg">${calculations.suggestedPrice30.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-purple-700">For 50% profit margin:</span>
                <span className="font-bold text-purple-800 text-lg">${calculations.suggestedPrice50.toFixed(2)}</span>
              </div>
            </div>
            <p className="text-xs text-purple-600 mt-3">
              Based on your costs (before marketplace fees)
            </p>
          </div>

          {/* Tips */}
          <div className="bg-gray-50 rounded-xl p-4">
            <h3 className="font-medium text-gray-700 mb-2">💡 Pricing Tips</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Aim for at least 30% profit margin</li>
              <li>• Don't forget to pay yourself (labor)!</li>
              <li>• Round up pricing to .99 or .95</li>
              <li>• Consider offering free shipping (build into price)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
