"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <nav className="bg-white shadow-sm border-b border-pink-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">✂️</span>
            <span className="font-bold text-xl text-gray-800">
              Cricut<span className="text-pink-500">Helper</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-5">
            <Link href="/guides" className="text-pink-600 hover:text-pink-700 transition-colors font-semibold">
              📚 Guides
            </Link>
            <Link href="/problems" className="text-gray-600 hover:text-pink-500 transition-colors font-medium">
              ❓ Problems
            </Link>
            <Link href="/troubleshoot" className="text-gray-600 hover:text-pink-500 transition-colors font-medium">
              🔧 Troubleshoot
            </Link>
            <Link href="/materials" className="text-gray-600 hover:text-pink-500 transition-colors font-medium">
              📋 Materials
            </Link>
            <Link href="/heat-press" className="text-gray-600 hover:text-pink-500 transition-colors font-medium">
              🔥 Heat Press
            </Link>
            <Link href="/calculator" className="text-gray-600 hover:text-pink-500 transition-colors font-medium">
              🧮 Calc
            </Link>
            <Link href="/niches" className="text-gray-600 hover:text-pink-500 transition-colors font-medium">
              🎯 Niches
            </Link>
            <Link href="/shop" className="text-green-600 hover:text-green-700 transition-colors font-semibold">
              🛒 Shop
            </Link>
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-gray-500 hover:text-pink-500 transition-colors p-1"
              aria-label="Search"
            >
              🔍
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-lg hover:bg-pink-50"
              aria-label="Search"
            >
              🔍
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-pink-50"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="py-3 border-t border-pink-100">
            <form onSubmit={handleSearch} className="relative">
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search guides, problems, materials..."
                className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-100 outline-none"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
              <button 
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-pink-500 text-white px-3 py-1 rounded-md text-sm font-medium hover:bg-pink-600"
              >
                Search
              </button>
            </form>
          </div>
        )}

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-pink-100">
            <div className="flex flex-col gap-3">
              <Link href="/guides" className="text-pink-600 hover:text-pink-700 py-2 font-semibold">
                📚 Guides
              </Link>
              <Link href="/problems" className="text-gray-600 hover:text-pink-500 py-2 font-medium">
                ❓ Common Problems
              </Link>
              <Link href="/troubleshoot" className="text-gray-600 hover:text-pink-500 py-2 font-medium">
                🔧 Troubleshoot
              </Link>
              <Link href="/error-codes" className="text-gray-600 hover:text-pink-500 py-2 font-medium">
                🚨 Error Codes
              </Link>
              <Link href="/materials" className="text-gray-600 hover:text-pink-500 py-2 font-medium">
                📋 Materials
              </Link>
              <Link href="/heat-press" className="text-gray-600 hover:text-pink-500 py-2 font-medium">
                🔥 Heat Press
              </Link>
              <Link href="/calculator" className="text-gray-600 hover:text-pink-500 py-2 font-medium">
                🧮 Cut Calculator
              </Link>
              <Link href="/profit-calculator" className="text-gray-600 hover:text-pink-500 py-2 font-medium">
                💰 Profit Calculator
              </Link>
              <Link href="/niches" className="text-gray-600 hover:text-pink-500 py-2 font-medium">
                🎯 Craft Niches
              </Link>
              <Link href="/shop" className="text-green-600 hover:text-green-700 py-2 font-semibold">
                🛒 Shop
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
