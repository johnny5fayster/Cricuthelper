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
  description = "Join 1,000+ crafters getting weekly tips, new material settings, and troubleshooting guides."
}: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // For now, store in localStorage and log - will connect to email service later
    try {
      const subscribers = JSON.parse(localStorage.getItem("cricuthelper_subscribers") || "[]");
      subscribers.push({ email, date: new Date().toISOString() });
      localStorage.setItem("cricuthelper_subscribers", JSON.stringify(subscribers));
      
      // TODO: Connect to ConvertKit/Mailchimp/Buttondown
      console.log("New subscriber:", email);
      
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className={`bg-green-50 border border-green-200 rounded-xl p-6 text-center ${variant === "banner" ? "w-full" : ""}`}>
        <p className="text-green-800 font-medium">🎉 You're in! Check your inbox for a welcome email.</p>
      </div>
    );
  }

  if (variant === "banner") {
    return (
      <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl p-6 text-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-pink-100 text-sm">{description}</p>
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
              className="bg-white text-pink-600 px-6 py-2 rounded-lg font-semibold hover:bg-pink-50 transition-colors disabled:opacity-50"
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
    <div className="bg-pink-50 border border-pink-200 rounded-xl p-6">
      <h3 className="font-bold text-gray-800 text-lg mb-1">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="flex-1 px-4 py-2 rounded-lg border border-pink-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-100 outline-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-pink-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-pink-600 transition-colors disabled:opacity-50"
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
