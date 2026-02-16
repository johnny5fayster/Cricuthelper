"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const moreDropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (moreDropdownRef.current && !moreDropdownRef.current.contains(event.target as Node)) {
        setMoreDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <nav className="bg-white shadow-sm border-b border-[#B8C9A9]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">✂️</span>
            <span className="font-bold text-xl text-[#3D3D3D]">
              Cricut<span className="text-[#9CAF88]">Helper</span>
            </span>
          </Link>

          {/* Desktop Nav - 6 items max */}
          <div className="hidden md:flex items-center gap-5">
            <Link href="/guides" className="text-[#6B7F5E] hover:text-[#9CAF88] transition-colors font-semibold">
              📚 Guides
            </Link>
            <Link href="/troubleshoot" className="text-[#3D3D3D] hover:text-[#9CAF88] transition-colors font-medium">
              🔧 Troubleshoot
            </Link>
            <Link href="/materials" className="text-[#3D3D3D] hover:text-[#9CAF88] transition-colors font-medium">
              📋 Materials
            </Link>
            <Link href="/profit-calculator" className="text-[#6B7F5E] hover:text-[#9CAF88] transition-colors font-semibold">
              💰 Profit Calc
            </Link>
            <Link href="/shop" className="text-[#C9A962] hover:text-[#B89A52] transition-colors font-semibold">
              🛒 Shop
            </Link>
            
            {/* More Dropdown */}
            <div className="relative" ref={moreDropdownRef}>
              <button
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                className="text-[#3D3D3D] hover:text-[#9CAF88] transition-colors font-medium flex items-center gap-1"
              >
                More
                <svg 
                  className={`w-4 h-4 transition-transform ${moreDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {moreDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-[#B8C9A9] py-2 z-50">
                  <Link 
                    href="/heat-press" 
                    className="block px-4 py-2 text-[#3D3D3D] hover:bg-[#F5FAF3] hover:text-[#6B7F5E] transition-colors"
                    onClick={() => setMoreDropdownOpen(false)}
                  >
                    🔥 Heat Press
                  </Link>
                  <Link 
                    href="/app" 
                    className="block px-4 py-2 text-[#C9A962] hover:bg-[#F5FAF3] hover:text-[#B89A52] transition-colors font-semibold"
                    onClick={() => setMoreDropdownOpen(false)}
                  >
                    📱 CraftCalc App
                  </Link>
                  <Link 
                    href="/niches" 
                    className="block px-4 py-2 text-[#3D3D3D] hover:bg-[#F5FAF3] hover:text-[#6B7F5E] transition-colors"
                    onClick={() => setMoreDropdownOpen(false)}
                  >
                    🎯 Niches
                  </Link>
                  <Link 
                    href="/creators" 
                    className="block px-4 py-2 text-[#3D3D3D] hover:bg-[#F5FAF3] hover:text-[#6B7F5E] transition-colors"
                    onClick={() => setMoreDropdownOpen(false)}
                  >
                    ⭐ Creators
                  </Link>
                  <Link 
                    href="/guides/error-codes-reference" 
                    className="block px-4 py-2 text-[#3D3D3D] hover:bg-[#F5FAF3] hover:text-[#6B7F5E] transition-colors"
                    onClick={() => setMoreDropdownOpen(false)}
                  >
                    ⚠️ Error Codes
                  </Link>
                </div>
              )}
            </div>

            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-[#3D3D3D] hover:text-[#9CAF88] transition-colors p-1"
              aria-label="Search"
            >
              🔍
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-lg hover:bg-[#F5FAF3]"
              aria-label="Search"
            >
              🔍
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-[#F5FAF3]"
            >
              <svg className="w-6 h-6 text-[#3D3D3D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="py-3 border-t border-[#B8C9A9]">
            <form onSubmit={handleSearch} className="relative">
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search guides, problems, materials..."
                className="w-full px-4 py-2 pl-10 rounded-lg border border-[#B8C9A9] focus:border-[#9CAF88] focus:ring-2 focus:ring-[#B8C9A9] outline-none"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9CAF88]">🔍</span>
              <button 
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#9CAF88] text-white px-3 py-1 rounded-md text-sm font-medium hover:bg-[#6B7F5E]"
              >
                Search
              </button>
            </form>
          </div>
        )}

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#B8C9A9]">
            <div className="flex flex-col gap-3">
              <Link href="/guides" className="text-[#6B7F5E] hover:text-[#9CAF88] py-2 font-semibold min-h-[44px] flex items-center">
                📚 Guides
              </Link>
              <Link href="/troubleshoot" className="text-[#3D3D3D] hover:text-[#9CAF88] py-2 font-medium min-h-[44px] flex items-center">
                🔧 Troubleshoot
              </Link>
              <Link href="/materials" className="text-[#3D3D3D] hover:text-[#9CAF88] py-2 font-medium min-h-[44px] flex items-center">
                📋 Materials
              </Link>
              <Link href="/heat-press" className="text-[#3D3D3D] hover:text-[#9CAF88] py-2 font-medium min-h-[44px] flex items-center">
                🔥 Heat Press
              </Link>
              <Link href="/profit-calculator" className="text-[#3D3D3D] hover:text-[#9CAF88] py-2 font-medium min-h-[44px] flex items-center">
                💰 Profit Calculator
              </Link>
              <Link href="/app" className="text-[#C9A962] hover:text-[#B89A52] py-2 font-semibold min-h-[44px] flex items-center">
                📱 CraftCalc App
              </Link>
              <Link href="/niches" className="text-[#3D3D3D] hover:text-[#9CAF88] py-2 font-medium min-h-[44px] flex items-center">
                🎯 Craft Niches
              </Link>
              <Link href="/creators" className="text-[#3D3D3D] hover:text-[#9CAF88] py-2 font-medium min-h-[44px] flex items-center">
                ⭐ Creators We Love
              </Link>
              <Link href="/guides/error-codes-reference" className="text-[#3D3D3D] hover:text-[#9CAF88] py-2 font-medium min-h-[44px] flex items-center">
                ⚠️ Error Codes
              </Link>
              <Link href="/shop" className="text-[#C9A962] hover:text-[#B89A52] py-2 font-semibold min-h-[44px] flex items-center">
                🛒 Shop
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
