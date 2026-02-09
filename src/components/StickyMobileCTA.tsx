"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(true); // Start true to prevent flash

  useEffect(() => {
    // Check localStorage on mount
    const dismissed = localStorage.getItem("stickyMobileCTA-dismissed");
    if (dismissed) {
      setIsDismissed(true);
      return;
    }
    setIsDismissed(false);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Check initial scroll position
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem("stickyMobileCTA-dismissed", "true");
  };

  if (isDismissed || !isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-gradient-to-r from-pink-500 to-purple-500 px-4 py-3 shadow-lg">
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/troubleshoot"
            className="flex-1 bg-white text-pink-600 px-4 py-3 rounded-full font-semibold text-center hover:bg-pink-50 transition-colors shadow-md"
          >
            Having a problem? 🔧 Get Help
          </Link>
          <button
            onClick={handleDismiss}
            aria-label="Dismiss"
            className="text-white/80 hover:text-white p-2 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Safe area padding for phones with home indicator */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-500 h-[env(safe-area-inset-bottom)]" />
    </div>
  );
}
