'use client';

import { useState } from 'react';

export default function CommunityPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show success message
    // Later: connect to Supabase or email
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FAF8F5] to-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-6xl mb-4 block">✨</span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Community Spotlight
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Share your Cricut projects and get featured! We love celebrating our community's creativity.
          </p>
        </div>

        {/* Featured Projects - Placeholder */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🌟 Recently Featured</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-[#D4A5A5] to-purple-200 flex items-center justify-center">
                <span className="text-6xl">🎨</span>
              </div>
              <div className="p-4">
                <p className="font-semibold text-gray-900">Your project could be here!</p>
                <p className="text-sm text-gray-500">Submit below to be featured</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-200 to-teal-200 flex items-center justify-center">
                <span className="text-6xl">✂️</span>
              </div>
              <div className="p-4">
                <p className="font-semibold text-gray-900">Show off your skills!</p>
                <p className="text-sm text-gray-500">All skill levels welcome</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-amber-200 to-orange-200 flex items-center justify-center">
                <span className="text-6xl">🏆</span>
              </div>
              <div className="p-4">
                <p className="font-semibold text-gray-900">Get recognized!</p>
                <p className="text-sm text-gray-500">We share features on social media</p>
              </div>
            </div>
          </div>
        </section>

        {/* Submission Form */}
        <section className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📸 Submit Your Project</h2>
          
          {submitted ? (
            <div className="text-center py-8">
              <span className="text-6xl mb-4 block">🎉</span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Thanks for sharing!</h3>
              <p className="text-gray-600">
                We'll review your submission and reach out if we'd like to feature you.
                Keep crafting! ✂️
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name or Handle
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9CAF88] focus:border-[#9CAF88]"
                  placeholder="@craftymama or Sarah J."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email (for us to contact you)
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9CAF88] focus:border-[#9CAF88]"
                  placeholder="you@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Photo URL
                </label>
                <input
                  type="url"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9CAF88] focus:border-[#9CAF88]"
                  placeholder="Link to your photo (Instagram, Imgur, etc.)"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Share a link to your project photo. Instagram, Pinterest, or Imgur links work great!
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us about your project
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9CAF88] focus:border-[#9CAF88]"
                  placeholder="What did you make? What materials did you use? Any tips for others trying this?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Which machine did you use?
                </label>
                <select
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9CAF88] focus:border-[#9CAF88]"
                >
                  <option value="">Select your machine</option>
                  <option value="maker3">Cricut Maker 3</option>
                  <option value="maker">Cricut Maker</option>
                  <option value="explore3">Cricut Explore 3</option>
                  <option value="exploreair2">Cricut Explore Air 2</option>
                  <option value="joy">Cricut Joy</option>
                  <option value="joyxtra">Cricut Joy Xtra</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  required
                  id="permission"
                  className="mt-1"
                />
                <label htmlFor="permission" className="text-sm text-gray-600">
                  I give CricutHelper permission to feature my project on the website and social media, 
                  with credit to my name/handle.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#9CAF88] text-white py-3 rounded-lg font-semibold hover:bg-[#6B7F5E] transition-colors"
              >
                Submit My Project ✨
              </button>
            </form>
          )}
        </section>

        {/* Why Submit */}
        <section className="mt-12 bg-[#F5E6E6] rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Get Featured?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <span className="text-4xl mb-2 block">📣</span>
              <h3 className="font-bold text-gray-900">Exposure</h3>
              <p className="text-gray-600 text-sm">We share features on our social channels</p>
            </div>
            <div className="text-center">
              <span className="text-4xl mb-2 block">🤝</span>
              <h3 className="font-bold text-gray-900">Community</h3>
              <p className="text-gray-600 text-sm">Connect with other Cricut crafters</p>
            </div>
            <div className="text-center">
              <span className="text-4xl mb-2 block">💪</span>
              <h3 className="font-bold text-gray-900">Inspiration</h3>
              <p className="text-gray-600 text-sm">Inspire others with your creativity</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
