"use client";

import { useState, useRef, useCallback } from "react";
import ShareCard, { PrivacyLevel, SHARE_MESSAGES, ShareCardProps } from "./ShareCard";

interface ShareMarginsModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: Omit<ShareCardProps, "privacyLevel" | "message">;
}

type ShareFormat = "image" | "text";

export default function ShareMarginsModal({ isOpen, onClose, data }: ShareMarginsModalProps) {
  const [privacyLevel, setPrivacyLevel] = useState<PrivacyLevel>("percentages");
  const [selectedMessage, setSelectedMessage] = useState(SHARE_MESSAGES[0]);
  const [shareFormat, setShareFormat] = useState<ShareFormat>("image");
  const [copySuccess, setCopySuccess] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const privacyOptions: { value: PrivacyLevel; label: string; description: string }[] = [
    { value: "full", label: "Full Details", description: "Show price, costs & profit" },
    { value: "percentages", label: "Percentages Only", description: "Show margin % only" },
    { value: "achievement", label: "Achievement", description: "Badge style, no numbers" },
  ];

  // Generate shareable text
  const generateShareText = useCallback(() => {
    const { productType, sellingPrice, profit, profitMargin, marketplace } = data;
    const product = productType || "my craft product";
    
    if (privacyLevel === "full") {
      return `${selectedMessage}\n\n💰 My ${product} breakdown:\n• Selling: $${sellingPrice.toFixed(2)}\n• Profit: $${profit.toFixed(2)}\n• Margin: ${profitMargin.toFixed(0)}%\n• Platform: ${marketplace}\n\nCalculate yours → cricuthelper.com/profit-calculator`;
    } else if (privacyLevel === "percentages") {
      return `${selectedMessage}\n\n📊 ${profitMargin.toFixed(0)}% profit margin on my ${product}!\n\nKnow your numbers → cricuthelper.com/profit-calculator`;
    } else {
      const achievement = profitMargin >= 30 ? "Pricing Pro" : "Margin Master";
      return `${selectedMessage}\n\n🏆 Just unlocked: ${achievement}!\n\nI calculated my true crafting costs and you should too.\n\nTry it → cricuthelper.com/profit-calculator`;
    }
  }, [data, privacyLevel, selectedMessage]);

  // Copy text to clipboard
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generateShareText());
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  // Download as image using html2canvas
  const downloadImage = async () => {
    const cardElement = document.getElementById("share-card");
    if (!cardElement) return;

    setDownloading(true);

    try {
      // Dynamic import html2canvas
      const html2canvas = (await import("html2canvas")).default;
      
      const canvas = await html2canvas(cardElement, {
        scale: 3, // Higher resolution
        backgroundColor: null,
        useCORS: true,
      });

      // Create download link
      const link = document.createElement("a");
      link.download = `cricuthelper-profit-${Date.now()}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (err) {
      console.error("Failed to generate image:", err);
      // Fallback: copy text
      copyToClipboard();
    } finally {
      setDownloading(false);
    }
  };

  // Native share (mobile)
  const nativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "My Profit Margins - CricutHelper",
          text: generateShareText(),
          url: "https://cricuthelper.com/profit-calculator",
        });
      } catch (err) {
        // User cancelled or error
        console.log("Share cancelled");
      }
    } else {
      copyToClipboard();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-lg w-full my-8 relative max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-100 p-4 flex items-center justify-between rounded-t-2xl z-10">
          <div>
            <h3 className="text-lg font-bold text-gray-800">Share Your Margins ✨</h3>
            <p className="text-sm text-gray-500">Inspire other crafters!</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-1"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-4 space-y-5">
          {/* Privacy Level */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              What to share?
            </label>
            <div className="space-y-2">
              {privacyOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setPrivacyLevel(option.value)}
                  className={`w-full p-3 rounded-xl border-2 text-left transition-all ${
                    privacyLevel === option.value
                      ? "border-pink-500 bg-pink-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        privacyLevel === option.value
                          ? "border-pink-500 bg-pink-500"
                          : "border-gray-300"
                      }`}
                    >
                      {privacyLevel === option.value && (
                        <div className="w-2 h-2 bg-white rounded-full" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{option.label}</p>
                      <p className="text-sm text-gray-500">{option.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Message Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your message
            </label>
            <select
              value={selectedMessage}
              onChange={(e) => setSelectedMessage(e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:border-pink-400 outline-none text-sm"
            >
              {SHARE_MESSAGES.map((msg) => (
                <option key={msg} value={msg}>
                  {msg}
                </option>
              ))}
            </select>
          </div>

          {/* Preview */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preview
            </label>
            <div ref={cardRef} className="flex justify-center bg-gray-100 rounded-xl p-4">
              <ShareCard
                {...data}
                privacyLevel={privacyLevel}
                message={selectedMessage}
              />
            </div>
          </div>

          {/* Format Tabs */}
          <div>
            <div className="flex gap-2 mb-3">
              <button
                onClick={() => setShareFormat("image")}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                  shareFormat === "image"
                    ? "bg-pink-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                🖼️ Image
              </button>
              <button
                onClick={() => setShareFormat("text")}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                  shareFormat === "text"
                    ? "bg-pink-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                📝 Text
              </button>
            </div>

            {shareFormat === "text" && (
              <div className="bg-gray-50 rounded-xl p-3 text-sm text-gray-600 whitespace-pre-wrap border border-gray-200">
                {generateShareText()}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="space-y-2">
            {shareFormat === "image" ? (
              <button
                onClick={downloadImage}
                disabled={downloading}
                className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {downloading ? "Generating..." : "📥 Download Image"}
              </button>
            ) : (
              <button
                onClick={copyToClipboard}
                className={`w-full py-3 font-semibold rounded-xl transition-all ${
                  copySuccess
                    ? "bg-green-500 text-white"
                    : "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90"
                }`}
              >
                {copySuccess ? "✓ Copied!" : "📋 Copy Text"}
              </button>
            )}

            {typeof navigator !== "undefined" && "share" in navigator && (
              <button
                onClick={nativeShare}
                className="w-full py-3 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-colors"
              >
                📤 Share...
              </button>
            )}
          </div>

          {/* Tip */}
          <p className="text-xs text-gray-400 text-center">
            Share on Instagram, Facebook, Pinterest, or your favorite craft groups!
          </p>
        </div>
      </div>
    </div>
  );
}
