"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import CraftCalcCTA from "@/components/CraftCalcCTA";

interface MaterialCost {
  name: string;
  cost: string;
  quantity: string;
}

interface LaborItem {
  name: string;
  minutes: string;
  rate: string;
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
  { name: "eBay", transactionPercent: 13.25, paymentPercent: 0, listingFee: 0, enabled: false },
  { name: "Square (in-person)", transactionPercent: 2.6, paymentPercent: 0, listingFee: 0, enabled: false },
  { name: "Cash/Local", transactionPercent: 0, paymentPercent: 0, listingFee: 0, enabled: false },
];

export default function AdvancedProfitCalculatorPage() {
  const [sellingPrice, setSellingPrice] = useState<string>("25");
  const [quantity, setQuantity] = useState<string>("1");
  const [shippingCharged, setShippingCharged] = useState<string>("5");
  const [shippingCost, setShippingCost] = useState<string>("4");
  const [packagingCost, setPackagingCost] = useState<string>("1");
  const [wasteFactor, setWasteFactor] = useState<string>("5");
  
  const [materials, setMaterials] = useState<MaterialCost[]>([
    { name: "Blank (shirt, tumbler, etc)", cost: "5", quantity: "1" },
    { name: "HTV/Vinyl", cost: "0.50", quantity: "1" },
  ]);

  const [laborItems, setLaborItems] = useState<LaborItem[]>([
    { name: "Design", minutes: "10", rate: "15" },
    { name: "Cut & Weed", minutes: "15", rate: "15" },
    { name: "Press/Apply", minutes: "5", rate: "15" },
  ]);

  const [overheadEnabled, setOverheadEnabled] = useState(false);
  const [machineDepreciation, setMachineDepreciation] = useState<string>("0.50");
  const [matWear, setMatWear] = useState<string>("0.10");
  const [bladeWear, setBladeWear] = useState<string>("0.05");
  
  const [marketplaces, setMarketplaces] = useState<MarketplaceFees[]>(defaultMarketplaces);
  const [showComparison, setShowComparison] = useState(false);
  const [showSaveModal, setShowSaveModal] = useState(false);

  // Material handlers
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

  // Labor handlers
  const addLaborItem = () => {
    setLaborItems([...laborItems, { name: "", minutes: "0", rate: "15" }]);
  };

  const updateLaborItem = (index: number, field: keyof LaborItem, value: string) => {
    const updated = [...laborItems];
    updated[index][field] = value;
    setLaborItems(updated);
  };

  const removeLaborItem = (index: number) => {
    setLaborItems(laborItems.filter((_, i) => i !== index));
  };

  // Marketplace handler
  const selectMarketplace = (index: number) => {
    const updated = marketplaces.map((m, i) => ({
      ...m,
      enabled: i === index
    }));
    setMarketplaces(updated);
  };

  // Calculate for a specific marketplace
  const calculateForMarketplace = (mp: MarketplaceFees) => {
    const price = parseFloat(sellingPrice) || 0;
    const qty = parseInt(quantity) || 1;
    const shipCharged = parseFloat(shippingCharged) || 0;
    const shipCost = parseFloat(shippingCost) || 0;
    const packaging = parseFloat(packagingCost) || 0;
    const waste = parseFloat(wasteFactor) || 0;

    const totalRevenue = (price + shipCharged) * qty;
    
    const materialsCost = materials.reduce((sum, m) => {
      return sum + (parseFloat(m.cost) || 0) * (parseFloat(m.quantity) || 1);
    }, 0) * qty * (1 + waste / 100);

    const laborCost = laborItems.reduce((sum, l) => {
      const minutes = parseFloat(l.minutes) || 0;
      const rate = parseFloat(l.rate) || 0;
      return sum + (minutes / 60) * rate;
    }, 0) * qty;

    let overheadCost = 0;
    if (overheadEnabled) {
      overheadCost = (
        (parseFloat(machineDepreciation) || 0) +
        (parseFloat(matWear) || 0) +
        (parseFloat(bladeWear) || 0)
      ) * qty;
    }

    const baseCosts = materialsCost + laborCost + (shipCost * qty) + (packaging * qty) + overheadCost;

    const transactionFee = (price * qty) * (mp.transactionPercent / 100);
    const paymentFee = totalRevenue * (mp.paymentPercent / 100);
    const listingFee = mp.listingFee * qty;
    const fees = transactionFee + paymentFee + listingFee;

    const totalCosts = baseCosts + fees;
    const profit = totalRevenue - totalCosts;
    const profitMargin = totalRevenue > 0 ? (profit / totalRevenue) * 100 : 0;
    const profitPerItem = qty > 0 ? profit / qty : 0;

    return {
      totalRevenue,
      materialsCost,
      laborCost,
      overheadCost,
      shipCost: shipCost * qty,
      packaging: packaging * qty,
      fees,
      totalCosts,
      profit,
      profitMargin,
      profitPerItem,
    };
  };

  const enabledMarketplace = marketplaces.find(m => m.enabled) || marketplaces[0];
  const calculations = calculateForMarketplace(enabledMarketplace);

  // Calculate suggested prices
  const baseCostsForSuggestion = calculations.materialsCost + calculations.laborCost + calculations.shipCost + calculations.packaging + calculations.overheadCost;
  const suggestedPrice30 = baseCostsForSuggestion / (parseInt(quantity) || 1) / 0.60;
  const suggestedPrice50 = baseCostsForSuggestion / (parseInt(quantity) || 1) / 0.40;

  // Marketplace comparison
  const marketplaceComparison = marketplaces.map(mp => ({
    ...mp,
    ...calculateForMarketplace(mp),
  })).sort((a, b) => b.profit - a.profit);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-6">
        <Link href="/" className="text-[#9CAF88] hover:underline text-sm">← Home</Link>
        <div className="flex items-center gap-3 mt-3">
          <h1 className="text-2xl font-bold text-gray-800">💰 Advanced Profit Calculator</h1>
          <span className="bg-gradient-to-r from-purple-500 to-[#6B7F5E] text-white text-xs font-bold px-2 py-1 rounded-full">
            PRO
          </span>
        </div>
        <p className="text-gray-600 text-sm mt-1">
          Calculate your true profit with materials, labor, overhead, and marketplace fees
        </p>
        <Link href="/profit-calculator" className="text-[#9CAF88] hover:underline text-sm">
          ← Back to Simple Calculator
        </Link>
      </div>

      <div className="grid lg:grid-cols-5 gap-6">
        {/* Input Section - 3 columns */}
        <div className="lg:col-span-3 space-y-4">
          
          {/* Pricing & Quantity */}
          <div className="bg-white rounded-xl shadow-lg p-5">
            <h2 className="text-base font-bold text-gray-800 mb-3">💵 Pricing</h2>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-xs text-gray-600 mb-1">Selling Price</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                  <input
                    type="number"
                    step="0.01"
                    value={sellingPrice}
                    onChange={(e) => setSellingPrice(e.target.value)}
                    className="w-full pl-7 pr-3 py-2 border border-gray-200 rounded-lg focus:border-[#9CAF88] outline-none text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Quantity</label>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-[#9CAF88] outline-none text-sm"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Waste Factor</label>
                <div className="relative">
                  <input
                    type="number"
                    step="1"
                    value={wasteFactor}
                    onChange={(e) => setWasteFactor(e.target.value)}
                    className="w-full px-3 pr-7 py-2 border border-gray-200 rounded-lg focus:border-[#9CAF88] outline-none text-sm"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Materials */}
          <div className="bg-white rounded-xl shadow-lg p-5">
            <h2 className="text-base font-bold text-gray-800 mb-3">🛒 Materials</h2>
            <div className="space-y-2">
              {materials.map((material, index) => (
                <div key={index} className="flex gap-2 items-center">
                  <input
                    type="text"
                    placeholder="Material name"
                    value={material.name}
                    onChange={(e) => updateMaterial(index, "name", e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:border-[#9CAF88] outline-none text-sm"
                  />
                  <div className="relative w-20">
                    <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs">$</span>
                    <input
                      type="number"
                      step="0.01"
                      placeholder="Cost"
                      value={material.cost}
                      onChange={(e) => updateMaterial(index, "cost", e.target.value)}
                      className="w-full pl-5 pr-2 py-2 border border-gray-200 rounded-lg focus:border-[#9CAF88] outline-none text-sm"
                    />
                  </div>
                  <input
                    type="number"
                    min="1"
                    placeholder="Qty"
                    value={material.quantity}
                    onChange={(e) => updateMaterial(index, "quantity", e.target.value)}
                    className="w-14 px-2 py-2 border border-gray-200 rounded-lg focus:border-[#9CAF88] outline-none text-sm text-center"
                  />
                  <button
                    onClick={() => removeMaterial(index)}
                    className="text-red-400 hover:text-red-600 px-1"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
            <button
              onClick={addMaterial}
              className="mt-2 text-[#9CAF88] hover:text-[#9CAF88] text-sm font-medium"
            >
              + Add material
            </button>
          </div>

          {/* Labor */}
          <div className="bg-white rounded-xl shadow-lg p-5">
            <h2 className="text-base font-bold text-gray-800 mb-3">⏱️ Labor</h2>
            <div className="space-y-2">
              {laborItems.map((item, index) => (
                <div key={index} className="flex gap-2 items-center">
                  <input
                    type="text"
                    placeholder="Task"
                    value={item.name}
                    onChange={(e) => updateLaborItem(index, "name", e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:border-[#9CAF88] outline-none text-sm"
                  />
                  <div className="relative w-20">
                    <input
                      type="number"
                      placeholder="Min"
                      value={item.minutes}
                      onChange={(e) => updateLaborItem(index, "minutes", e.target.value)}
                      className="w-full px-2 pr-8 py-2 border border-gray-200 rounded-lg focus:border-[#9CAF88] outline-none text-sm"
                    />
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs">min</span>
                  </div>
                  <div className="relative w-20">
                    <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs">$</span>
                    <input
                      type="number"
                      placeholder="Rate"
                      value={item.rate}
                      onChange={(e) => updateLaborItem(index, "rate", e.target.value)}
                      className="w-full pl-5 pr-6 py-2 border border-gray-200 rounded-lg focus:border-[#9CAF88] outline-none text-sm"
                    />
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs">/hr</span>
                  </div>
                  <button
                    onClick={() => removeLaborItem(index)}
                    className="text-red-400 hover:text-red-600 px-1"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
            <button
              onClick={addLaborItem}
              className="mt-2 text-[#9CAF88] hover:text-[#9CAF88] text-sm font-medium"
            >
              + Add task
            </button>
          </div>

          {/* Shipping & Packaging */}
          <div className="bg-white rounded-xl shadow-lg p-5">
            <h2 className="text-base font-bold text-gray-800 mb-3">📦 Shipping & Packaging</h2>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-xs text-gray-600 mb-1">Shipping Charged</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                  <input
                    type="number"
                    step="0.01"
                    value={shippingCharged}
                    onChange={(e) => setShippingCharged(e.target.value)}
                    className="w-full pl-7 pr-3 py-2 border border-gray-200 rounded-lg focus:border-[#9CAF88] outline-none text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Actual Shipping</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                  <input
                    type="number"
                    step="0.01"
                    value={shippingCost}
                    onChange={(e) => setShippingCost(e.target.value)}
                    className="w-full pl-7 pr-3 py-2 border border-gray-200 rounded-lg focus:border-[#9CAF88] outline-none text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Packaging</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                  <input
                    type="number"
                    step="0.01"
                    value={packagingCost}
                    onChange={(e) => setPackagingCost(e.target.value)}
                    className="w-full pl-7 pr-3 py-2 border border-gray-200 rounded-lg focus:border-[#9CAF88] outline-none text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Overhead (collapsible) */}
          <div className="bg-white rounded-xl shadow-lg p-5">
            <button 
              onClick={() => setOverheadEnabled(!overheadEnabled)}
              className="flex items-center justify-between w-full"
            >
              <h2 className="text-base font-bold text-gray-800">🔧 Overhead Costs</h2>
              <span className={`text-sm ${overheadEnabled ? 'text-green-600' : 'text-gray-400'}`}>
                {overheadEnabled ? '✓ Enabled' : 'Click to add'}
              </span>
            </button>
            
            {overheadEnabled && (
              <div className="mt-3 grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Machine (per item)</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                    <input
                      type="number"
                      step="0.01"
                      value={machineDepreciation}
                      onChange={(e) => setMachineDepreciation(e.target.value)}
                      className="w-full pl-7 pr-3 py-2 border border-gray-200 rounded-lg focus:border-[#9CAF88] outline-none text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Mat wear</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                    <input
                      type="number"
                      step="0.01"
                      value={matWear}
                      onChange={(e) => setMatWear(e.target.value)}
                      className="w-full pl-7 pr-3 py-2 border border-gray-200 rounded-lg focus:border-[#9CAF88] outline-none text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Blade wear</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                    <input
                      type="number"
                      step="0.01"
                      value={bladeWear}
                      onChange={(e) => setBladeWear(e.target.value)}
                      className="w-full pl-7 pr-3 py-2 border border-gray-200 rounded-lg focus:border-[#9CAF88] outline-none text-sm"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Marketplace */}
          <div className="bg-white rounded-xl shadow-lg p-5">
            <h2 className="text-base font-bold text-gray-800 mb-3">🏪 Marketplace</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {marketplaces.map((mp, index) => (
                <button
                  key={mp.name}
                  onClick={() => selectMarketplace(index)}
                  className={`p-2 rounded-lg text-xs font-medium transition-all ${
                    mp.enabled 
                      ? 'bg-[#9CAF88] text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {mp.name}
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-2">
              {enabledMarketplace.transactionPercent > 0 && `${enabledMarketplace.transactionPercent}% transaction`}
              {enabledMarketplace.paymentPercent > 0 && ` + ${enabledMarketplace.paymentPercent}% payment`}
              {enabledMarketplace.listingFee > 0 && ` + $${enabledMarketplace.listingFee} listing`}
              {enabledMarketplace.transactionPercent === 0 && enabledMarketplace.paymentPercent === 0 && enabledMarketplace.listingFee === 0 && "No fees"}
            </p>
          </div>
        </div>

        {/* Results Section - 2 columns */}
        <div className="lg:col-span-2 space-y-4">
          {/* Profit Summary */}
          <div className={`rounded-xl shadow-lg p-5 ${calculations.profit >= 0 ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
            <h2 className="text-sm font-medium text-gray-600 mb-1">
              {parseInt(quantity) > 1 ? `Profit (${quantity} items)` : 'Your Profit'}
            </h2>
            <p className={`text-4xl font-bold ${calculations.profit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              ${calculations.profit.toFixed(2)}
            </p>
            {parseInt(quantity) > 1 && (
              <p className={`text-sm ${calculations.profit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                ${calculations.profitPerItem.toFixed(2)} per item
              </p>
            )}
            <p className={`text-sm mt-1 ${calculations.profitMargin >= 30 ? 'text-green-600' : 'text-orange-500'}`}>
              {calculations.profitMargin.toFixed(1)}% margin
              {calculations.profitMargin < 30 && <span className="text-gray-400"> (aim for 30%+)</span>}
            </p>
          </div>

          {/* Breakdown */}
          <div className="bg-white rounded-xl shadow-lg p-5">
            <h2 className="text-base font-bold text-gray-800 mb-3">📊 Breakdown</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-1.5 border-b border-gray-100">
                <span className="text-gray-600">Revenue</span>
                <span className="font-medium text-green-600">+${calculations.totalRevenue.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-gray-100">
                <span className="text-gray-600">Materials {parseInt(wasteFactor) > 0 && `(+${wasteFactor}% waste)`}</span>
                <span className="font-medium text-red-500">-${calculations.materialsCost.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-gray-100">
                <span className="text-gray-600">Labor</span>
                <span className="font-medium text-red-500">-${calculations.laborCost.toFixed(2)}</span>
              </div>
              {overheadEnabled && calculations.overheadCost > 0 && (
                <div className="flex justify-between py-1.5 border-b border-gray-100">
                  <span className="text-gray-600">Overhead</span>
                  <span className="font-medium text-red-500">-${calculations.overheadCost.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between py-1.5 border-b border-gray-100">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium text-red-500">-${calculations.shipCost.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-gray-100">
                <span className="text-gray-600">Packaging</span>
                <span className="font-medium text-red-500">-${calculations.packaging.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-gray-100">
                <span className="text-gray-600">{enabledMarketplace.name} fees</span>
                <span className="font-medium text-red-500">-${calculations.fees.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-2 pt-3 border-t-2 border-gray-200">
                <span className="font-bold text-gray-800">Net Profit</span>
                <span className={`font-bold ${calculations.profit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  ${calculations.profit.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {/* Suggested Pricing */}
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
            <h2 className="text-base font-bold text-purple-800 mb-3">💡 Suggested Pricing</h2>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-purple-700 text-sm">For 30% margin:</span>
                <span className="font-bold text-purple-800">${suggestedPrice30.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-purple-700 text-sm">For 50% margin:</span>
                <span className="font-bold text-purple-800">${suggestedPrice50.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Marketplace Comparison */}
          <div className="bg-white rounded-xl shadow-lg p-5">
            <button 
              onClick={() => setShowComparison(!showComparison)}
              className="flex items-center justify-between w-full"
            >
              <h2 className="text-base font-bold text-gray-800">🔄 Compare Marketplaces</h2>
              <span className="text-[#9CAF88] text-sm">{showComparison ? 'Hide' : 'Show'}</span>
            </button>
            
            {showComparison && (
              <div className="mt-3 space-y-2">
                {marketplaceComparison.map((mp, index) => (
                  <div 
                    key={mp.name}
                    className={`flex justify-between items-center p-2 rounded-lg ${
                      index === 0 ? 'bg-green-50 border border-green-200' : 'bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {index === 0 && <span className="text-green-600">👑</span>}
                      <span className={`text-sm ${index === 0 ? 'font-medium text-green-800' : 'text-gray-600'}`}>
                        {mp.name}
                      </span>
                    </div>
                    <span className={`font-medium ${mp.profit >= 0 ? 'text-green-600' : 'text-red-500'}`}>
                      ${mp.profit.toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Pro Actions */}
          <div className="bg-gradient-to-r from-purple-500 to-[#6B7F5E] rounded-xl p-5 text-white">
            <h3 className="font-bold mb-3">Pro Actions</h3>
            <div className="space-y-2">
              <button 
                onClick={() => setShowSaveModal(true)}
                className="w-full bg-white/20 hover:bg-white/30 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm"
              >
                💾 Save Project
              </button>
              <button 
                onClick={() => setShowSaveModal(true)}
                className="w-full bg-white/20 hover:bg-white/30 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm"
              >
                📄 Export PDF Quote
              </button>
            </div>
            <p className="text-xs text-white/70 mt-3 text-center">
              Coming soon: Save unlimited projects & export quotes
            </p>
          </div>

          {/* Tips */}
          <div className="bg-gray-50 rounded-xl p-4">
            <h3 className="font-medium text-gray-700 mb-2 text-sm">💡 Pricing Tips</h3>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• Aim for at least 30% profit margin</li>
              <li>• Don't forget overhead (mats, blades wear out!)</li>
              <li>• Account for 5-10% material waste</li>
              <li>• Round up to .99 or .95 endings</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CraftCalc CTA - Compact for advanced page since there's already a lot of content */}
      <div className="mt-8">
        <CraftCalcCTA variant="compact" context="profit-calculator" />
      </div>

      {/* Save Modal (placeholder for subscription) */}
      {showSaveModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full">
            <h3 className="text-xl font-bold text-gray-800 mb-2">🔒 Pro Feature</h3>
            <p className="text-gray-600 mb-4">
              Saving projects and exporting PDF quotes requires a Pro subscription.
            </p>
            <div className="bg-purple-50 rounded-xl p-4 mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-purple-800">Pro Monthly</span>
                <span className="text-2xl font-bold text-purple-800">$7/mo</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-purple-800">Pro Annual</span>
                <div className="text-right">
                  <span className="text-2xl font-bold text-purple-800">$49/yr</span>
                  <span className="text-xs text-green-600 ml-1">Save 42%</span>
                </div>
              </div>
            </div>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>✓ Save unlimited projects</li>
              <li>✓ Export professional PDF quotes</li>
              <li>✓ Material presets library</li>
              <li>✓ Price history tracking</li>
              <li>✓ Priority support</li>
            </ul>
            <div className="flex gap-2">
              <button
                onClick={() => setShowSaveModal(false)}
                className="flex-1 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 text-sm"
              >
                Maybe Later
              </button>
              <button
                className="flex-1 py-2 bg-gradient-to-r from-purple-500 to-[#6B7F5E] text-white rounded-lg font-medium hover:opacity-90 text-sm"
              >
                Start Free Trial
              </button>
            </div>
            <p className="text-xs text-gray-400 text-center mt-2">
              7-day free trial, cancel anytime
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
