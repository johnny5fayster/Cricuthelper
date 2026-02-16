"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  feature?: string;
}

export default function SubscriptionModal({ isOpen, onClose, feature }: SubscriptionModalProps) {
  const [selectedPlan, setSelectedPlan] = useState<"monthly" | "annual">("annual");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const { user } = useAuth();
  const router = useRouter();

  if (!isOpen) return null;

  const handleSubscribe = async () => {
    if (!user) {
      // Redirect to auth with plan in query
      router.push(`/auth?plan=${selectedPlan}&redirect=/profit-calculator`);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: selectedPlan, trial: true }),
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      // Redirect to Stripe Checkout
      window.location.href = data.url;
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        <div className="text-center mb-4">
          <span className="text-4xl">🔒</span>
          <h3 className="text-xl font-bold text-gray-800 mt-2">Unlock Pro Features</h3>
          {feature && (
            <p className="text-gray-600 text-sm mt-1">
              {feature} requires a Pro subscription
            </p>
          )}
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
            {error}
          </div>
        )}

        {/* Plan Selection */}
        <div className="space-y-3 mb-4">
          <button
            onClick={() => setSelectedPlan("annual")}
            className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
              selectedPlan === "annual"
                ? "border-purple-500 bg-purple-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <div className="flex justify-between items-center">
              <div>
                <span className="font-semibold text-gray-800">Pro Annual</span>
                <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                  Save 42%
                </span>
              </div>
              <span className="text-xl font-bold text-purple-600">$49/yr</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">Best value • Just $4.08/month</p>
          </button>

          <button
            onClick={() => setSelectedPlan("monthly")}
            className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
              selectedPlan === "monthly"
                ? "border-purple-500 bg-purple-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-800">Pro Monthly</span>
              <span className="text-xl font-bold text-purple-600">$7/mo</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">Flexible • Cancel anytime</p>
          </button>
        </div>

        {/* Features */}
        <div className="bg-gray-50 rounded-xl p-4 mb-4">
          <p className="font-medium text-gray-700 mb-2 text-sm">Everything in Pro:</p>
          <ul className="text-sm text-gray-600 space-y-1.5">
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span> Save unlimited projects
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span> Export professional PDF quotes
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span> Material presets library
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span> Batch pricing for bulk orders
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span> Price history tracking
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span> Priority support
            </li>
          </ul>
        </div>

        {/* CTA */}
        <button
          onClick={handleSubscribe}
          disabled={loading}
          className="w-full py-3 bg-gradient-to-r from-purple-500 to-[#6B7F5E] text-white font-semibold rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {loading ? "Loading..." : "Start 7-Day Free Trial"}
        </button>

        <p className="text-xs text-gray-400 text-center mt-3">
          No charge for 7 days. Cancel anytime.
        </p>

        <button
          onClick={onClose}
          className="w-full mt-3 py-2 text-gray-500 text-sm hover:text-gray-700"
        >
          Maybe later
        </button>
      </div>
    </div>
  );
}
