"use client";

import { useState } from "react";

interface EmailCaptureProps {
  variant?: "inline" | "banner" | "popup";
  title?: string;
  description?: string;
}

export function EmailCapture({ 
  variant = "inline",
  title = "Get Cricut Tips & Updates",
  description = "Be first to get new troubleshooting guides, material settings, and Cricut tips when we launch our newsletter."
}: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className={`bg-green-50 border border-green-200 rounded-xl p-6 text-center ${variant === "banner" ? "w-full" : ""}`}>
        <p className="text-green-800 font-medium">🎉 You're on the list!</p>
        <p className="text-green-700 text-sm mt-1">We're setting up our newsletter now — you'll hear from us soon with Cricut tips and updates.</p>
      </div>
    );
  }

  if (variant === "banner") {
    return (
      <div className="bg-gradient-to-r from-[#9CAF88] to-purple-500 rounded-xl p-6 text-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-white/80 text-sm">{description}</p>
          </div>
          <form onSubmit={handleSubmit} className="flex gap-2 w-full md:w-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 md:w-64 px-4 py-2 rounded-lg text-gray-800 border-0 focus:ring-2 focus:ring-white outline-none"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-white text-[#9CAF88] px-6 py-2 rounded-lg font-semibold hover:bg-[#F5FAF3] transition-colors disabled:opacity-50"
            >
              {status === "loading" ? "..." : "Subscribe"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Inline variant (default)
  return (
    <div className="bg-[#F5FAF3] border border-[#B8C9A9] rounded-xl p-6">
      <h3 className="font-bold text-gray-800 text-lg mb-1">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="flex-1 px-4 py-2 rounded-lg border border-[#B8C9A9] focus:border-[#9CAF88] focus:ring-2 focus:ring-[#B8C9A9] outline-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-[#9CAF88] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#6B7F5E] transition-colors disabled:opacity-50"
        >
          {status === "loading" ? "Subscribing..." : "Get Free Tips"}
        </button>
      </form>
      {status === "error" && (
        <p className="text-red-500 text-sm mt-2">Something went wrong. Please try again.</p>
      )}
      <p className="text-xs text-gray-400 mt-2">No spam, unsubscribe anytime.</p>
    </div>
  );
}
