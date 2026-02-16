'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const questions = [
  { q: "Why is my Cricut not cutting through vinyl?", link: "/troubleshoot?issue=not-cutting", time: "2 min ago" },
  { q: "HTV keeps peeling off after washing", link: "/troubleshoot?issue=htv-problems", time: "5 min ago" },
  { q: "Design Space is so slow after the update", link: "/troubleshoot?issue=design-space", time: "8 min ago" },
  { q: "Print then cut is cutting way off center", link: "/troubleshoot?issue=print-then-cut", time: "12 min ago" },
  { q: "My mat isn't sticky anymore", link: "/troubleshoot?issue=mat-grip", time: "15 min ago" },
  { q: "Bluetooth won't connect to my Mac", link: "/troubleshoot?issue=bluetooth", time: "18 min ago" },
  { q: "What settings for glitter iron-on?", link: "/materials", time: "22 min ago" },
  { q: "Weeding small letters is impossible", link: "/troubleshoot?issue=weeding", time: "25 min ago" },
  { q: "Infusible ink colors are coming out faded", link: "/troubleshoot?issue=adhesion", time: "28 min ago" },
  { q: "Error 1007 won't go away", link: "/error-codes", time: "32 min ago" },
];

export function LiveQuestions() {
  const [visibleQuestions, setVisibleQuestions] = useState(questions.slice(0, 4));
  
  useEffect(() => {
    // Rotate questions every 10 seconds to simulate live activity
    const timer = setInterval(() => {
      setVisibleQuestions(prev => {
        const currentIndex = questions.findIndex(q => q.q === prev[0].q);
        const nextIndex = (currentIndex + 1) % (questions.length - 3);
        return questions.slice(nextIndex, nextIndex + 4);
      });
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#F5FAF3] to-[#F5FAF3] rounded-2xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">
          💬 What Crafters Are Asking
        </h2>
        <span className="flex items-center gap-2 text-sm text-green-600">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Live
        </span>
      </div>
      
      <div className="space-y-3">
        {visibleQuestions.map((item, i) => (
          <Link 
            key={item.q}
            href={item.link}
            className="flex items-center justify-between p-3 bg-white rounded-xl hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3">
              <span className="text-[#C9A962]">❓</span>
              <span className="text-gray-700">{item.q}</span>
            </div>
            <span className="text-xs text-gray-400 whitespace-nowrap">{item.time}</span>
          </Link>
        ))}
      </div>
      
      <div className="mt-4 text-center">
        <Link href="/problems" className="text-[#9CAF88] font-medium hover:underline">
          View all common questions →
        </Link>
      </div>
    </div>
  );
}
