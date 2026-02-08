"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function CheatSheetPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'cheatsheet' }),
      });
      
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    }
    
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <Link href="/" className="text-pink-500 hover:underline">← Home</Link>
        
        <div className="mt-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            📋 Free Cricut Cheat Sheet
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            One-page reference with blade settings, pressure guides, and quick troubleshooting tips. 
            Print it and keep it by your machine!
          </p>
        </div>

        {/* Preview */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl p-8 border-2 border-pink-200">
          <div className="text-center mb-6">
            <span className="text-6xl">📄</span>
            <h2 className="text-2xl font-bold text-gray-900 mt-4">What's Inside</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-pink-50 rounded-xl p-4">
              <h3 className="font-bold text-pink-800 mb-2">🔪 Blade Quick Reference</h3>
              <ul className="text-sm text-pink-700 space-y-1">
                <li>• Which blade for every material</li>
                <li>• Fine Point vs Deep Point vs Knife</li>
                <li>• When to replace your blade</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-4">
              <h3 className="font-bold text-purple-800 mb-2">⬇️ Pressure Settings</h3>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• Vinyl: 175-200</li>
                <li>• Cardstock: 175-275</li>
                <li>• HTV: 185-230</li>
                <li>• And more...</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-4">
              <h3 className="font-bold text-blue-800 mb-2">📋 Mat Guide</h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• LightGrip (Blue) → Paper, vellum</li>
                <li>• StandardGrip (Green) → Vinyl, cardstock</li>
                <li>• StrongGrip (Purple) → Leather, thick materials</li>
                <li>• FabricGrip (Pink) → Fabric</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-xl p-4">
              <h3 className="font-bold text-green-800 mb-2">🔧 Quick Fixes</h3>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Not cutting through? → Increase pressure</li>
                <li>• Tearing? → New blade or less pressure</li>
                <li>• HTV peeling? → More time/pressure</li>
                <li>• Print Then Cut off? → Recalibrate</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-yellow-50 rounded-xl p-4">
            <h3 className="font-bold text-yellow-800 mb-2">🔥 Heat Press Quick Reference</h3>
            <div className="grid grid-cols-3 gap-4 text-sm text-yellow-700">
              <div>
                <p className="font-medium">Standard HTV</p>
                <p>305°F • 10-15 sec</p>
              </div>
              <div>
                <p className="font-medium">Glitter HTV</p>
                <p>320°F • 15-20 sec</p>
              </div>
              <div>
                <p className="font-medium">Infusible Ink</p>
                <p>385°F • 40 sec</p>
              </div>
            </div>
          </div>
        </div>

        {/* Download Form */}
        <div className="mt-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-8 text-center text-white">
          {!submitted ? (
            <>
              <h2 className="text-2xl font-bold mb-4">Get Your Free Cheat Sheet</h2>
              <p className="mb-6 opacity-90">
                Enter your email and we'll send you the printable PDF instantly.
                Plus, get weekly Cricut tips (unsubscribe anytime).
              </p>
              
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="flex-1 px-4 py-3 rounded-xl text-gray-800 outline-none focus:ring-2 focus:ring-white"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-white text-pink-600 px-6 py-3 rounded-xl font-semibold hover:bg-pink-50 transition-colors disabled:opacity-50"
                  >
                    {loading ? 'Sending...' : 'Send It! →'}
                  </button>
                </div>
                {error && <p className="mt-2 text-red-200 text-sm">{error}</p>}
              </form>
              
              <p className="mt-4 text-sm opacity-75">
                No spam, ever. Unsubscribe with one click.
              </p>
            </>
          ) : (
            <div className="py-8">
              <span className="text-6xl">🎉</span>
              <h2 className="text-2xl font-bold mt-4 mb-2">Check Your Inbox!</h2>
              <p className="opacity-90">
                Your cheat sheet is on its way. While you wait, check out our guides:
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Link href="/guides" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition-colors">
                  Browse Guides →
                </Link>
                <Link href="/materials" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition-colors">
                  Material Settings →
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Trust indicators */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>Join 0 crafters who've downloaded the cheat sheet</p>
          <p className="mt-1">⭐⭐⭐⭐⭐ "This is exactly what I needed by my Cricut!" — Sarah M.</p>
        </div>
      </div>
    </main>
  );
}
