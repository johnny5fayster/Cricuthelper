"use client";

import Link from "next/link";
import { useState } from "react";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          <div className="hidden md:flex items-center gap-6">
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
              🧮 Cut Calc
            </Link>
            <Link href="/profit-calculator" className="text-gray-600 hover:text-pink-500 transition-colors font-medium">
              💰 Profit Calc
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-pink-50"
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

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-pink-100">
            <div className="flex flex-col gap-3">
              <Link href="/troubleshoot" className="text-gray-600 hover:text-pink-500 py-2 font-medium">
                🔧 Troubleshoot
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
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
