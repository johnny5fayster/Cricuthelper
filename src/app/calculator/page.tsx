"use client";

import { useState } from "react";
import Link from "next/link";

export default function CalculatorPage() {
  const [designWidth, setDesignWidth] = useState<string>("");
  const [designHeight, setDesignHeight] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("1");
  const [materialWidth, setMaterialWidth] = useState<string>("12");
  const [materialType, setMaterialType] = useState<"roll" | "sheet">("roll");
  const [materialLength, setMaterialLength] = useState<string>("12");
  const [pricePerUnit, setPricePerUnit] = useState<string>("");

  const calculate = () => {
    const dw = parseFloat(designWidth) || 0;
    const dh = parseFloat(designHeight) || 0;
    const qty = parseInt(quantity) || 1;
    const mw = parseFloat(materialWidth) || 12;
    const ml = materialType === "sheet" ? parseFloat(materialLength) || 12 : Infinity;

    if (dw === 0 || dh === 0) return null;

    // Add 0.5" margin around each design
    const itemWidth = dw + 0.5;
    const itemHeight = dh + 0.5;

    // How many fit across?
    const acrossCount = Math.floor(mw / itemWidth);
    if (acrossCount === 0) return { error: "Design too wide for material" };

    // How many rows needed?
    const rowsNeeded = Math.ceil(qty / acrossCount);
    const totalLength = rowsNeeded * itemHeight + 0.5; // Extra margin at top

    // For sheets, check if it fits
    if (materialType === "sheet" && totalLength > ml) {
      const sheetsNeeded = Math.ceil(totalLength / ml);
      return {
        totalLength: totalLength.toFixed(1),
        sheetsNeeded,
        itemsPerSheet: Math.floor((ml / itemHeight) * acrossCount),
        pricePerUnit,
      };
    }

    return {
      totalLength: totalLength.toFixed(1),
      acrossCount,
      rowsNeeded,
      pricePerUnit,
    };
  };

  const result = calculate();

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <Link href="/" className="text-pink-500 hover:underline">← Home</Link>
        <h1 className="text-3xl font-bold text-gray-800 mt-4">🧮 Cut Calculator</h1>
        <p className="text-gray-600 mt-2">Calculate how much material you need. No more waste!</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
        {/* Design Size */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Design Size</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Width (inches)</label>
              <input
                type="number"
                step="0.1"
                value={designWidth}
                onChange={(e) => setDesignWidth(e.target.value)}
                placeholder="e.g., 3.5"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-pink-400 focus:ring-2 focus:ring-pink-100 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Height (inches)</label>
              <input
                type="number"
                step="0.1"
                value={designHeight}
                onChange={(e) => setDesignHeight(e.target.value)}
                placeholder="e.g., 2.5"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-pink-400 focus:ring-2 focus:ring-pink-100 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">How many do you need?</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-pink-400 focus:ring-2 focus:ring-pink-100 outline-none"
          />
        </div>

        {/* Material Type */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Material</h3>
          <div className="flex gap-4 mb-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                checked={materialType === "roll"}
                onChange={() => setMaterialType("roll")}
                className="text-pink-500"
              />
              <span>Roll (continuous)</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                checked={materialType === "sheet"}
                onChange={() => setMaterialType("sheet")}
                className="text-pink-500"
              />
              <span>Sheets</span>
            </label>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Material Width (inches)</label>
              <select
                value={materialWidth}
                onChange={(e) => setMaterialWidth(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-pink-400 focus:ring-2 focus:ring-pink-100 outline-none"
              >
                <option value="5.5">5.5" (Joy)</option>
                <option value="12">12" (Standard)</option>
                <option value="24">24" (Wide)</option>
              </select>
            </div>
            {materialType === "sheet" && (
              <div>
                <label className="block text-sm text-gray-600 mb-1">Sheet Length (inches)</label>
                <select
                  value={materialLength}
                  onChange={(e) => setMaterialLength(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-pink-400 focus:ring-2 focus:ring-pink-100 outline-none"
                >
                  <option value="12">12" (Standard mat)</option>
                  <option value="24">24" (Long mat)</option>
                </select>
              </div>
            )}
          </div>
        </div>

        {/* Cost (optional) */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">Price per {materialType === "roll" ? "foot" : "sheet"} (optional)</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
            <input
              type="number"
              step="0.01"
              value={pricePerUnit}
              onChange={(e) => setPricePerUnit(e.target.value)}
              placeholder="0.00"
              className="w-full pl-8 pr-4 py-2 border border-gray-200 rounded-lg focus:border-pink-400 focus:ring-2 focus:ring-pink-100 outline-none"
            />
          </div>
        </div>

        {/* Results */}
        {result && !('error' in result) && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <h3 className="font-bold text-green-800 text-lg mb-4">📏 You'll Need:</h3>
            <div className="space-y-3">
              {materialType === "roll" ? (
                <>
                  <p className="text-green-700">
                    <span className="font-bold text-2xl text-green-800">{result.totalLength}</span> inches
                    <span className="text-green-600"> ({(parseFloat(result.totalLength as string) / 12).toFixed(1)} feet)</span>
                  </p>
                  <p className="text-sm text-green-600">
                    {result.acrossCount} across × {result.rowsNeeded} rows (includes 0.5" margins)
                  </p>
                </>
              ) : (
                <>
                  <p className="text-green-700">
                    <span className="font-bold text-2xl text-green-800">{result.sheetsNeeded}</span> sheet{result.sheetsNeeded !== 1 ? 's' : ''}
                  </p>
                  <p className="text-sm text-green-600">
                    ~{result.itemsPerSheet} items fit per sheet
                  </p>
                </>
              )}
              
              {pricePerUnit && parseFloat(pricePerUnit) > 0 && (
                <div className="pt-3 border-t border-green-200">
                  <p className="text-green-700">
                    Estimated cost: <span className="font-bold text-green-800">
                      ${(materialType === "roll" 
                        ? (parseFloat(result.totalLength as string) / 12) * parseFloat(pricePerUnit)
                        : ((result as any).sheetsNeeded || 1) * parseFloat(pricePerUnit)
                      ).toFixed(2)}
                    </span>
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {result && 'error' in result && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <p className="text-red-700">⚠️ {result.error}</p>
          </div>
        )}

        {!designWidth && !designHeight && (
          <div className="bg-gray-50 rounded-xl p-6 text-center text-gray-500">
            Enter your design dimensions above to calculate material needed
          </div>
        )}
      </div>

      {/* Tips */}
      <div className="mt-8 bg-pink-50 rounded-xl p-6">
        <h3 className="font-semibold text-pink-800 mb-3">💡 Tips for Less Waste</h3>
        <ul className="text-pink-700 space-y-2 text-sm">
          <li>• We add 0.5" margin around each design for weeding room</li>
          <li>• Rotate designs 90° if they fit better across the width</li>
          <li>• Group small designs together on one cut</li>
          <li>• Save scraps for smaller projects!</li>
        </ul>
      </div>
    </div>
  );
}
