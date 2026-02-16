'use client';

import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: "Sarah M.",
    location: "Texas",
    text: "I was about to return my Maker because nothing would cut right. Found CricutHelper, followed the blade troubleshooting, and now it works perfectly! Saved me $400.",
    machine: "Cricut Maker",
    avatar: "👩‍🦰",
  },
  {
    name: "Michelle K.",
    location: "Ohio",
    text: "The material settings database is a LIFESAVER. No more guessing on pressure and speed. My cuts are perfect every time now.",
    machine: "Cricut Explore Air 2",
    avatar: "👩🏽",
  },
  {
    name: "Jennifer L.",
    location: "Florida",
    text: "Finally figured out why my HTV kept peeling! The troubleshooter walked me through it step by step. So much easier than scrolling through Facebook groups.",
    machine: "Cricut Maker 3",
    avatar: "👩🏻",
  },
  {
    name: "Amanda R.",
    location: "California",
    text: "I run an Etsy shop and the profit calculator has been incredible. I was underpricing everything! Now I actually make money on my projects.",
    machine: "Cricut Maker",
    avatar: "👩🏼‍🦱",
  },
  {
    name: "Lisa T.",
    location: "Georgia",
    text: "Design Space crashed on me mid-project. Followed the fix here and was back up in 5 minutes. Bookmark this site immediately!",
    machine: "Cricut Joy",
    avatar: "👩🏾",
  },
  {
    name: "Christina B.",
    location: "New York",
    text: "The heat press guide saved my daughter's dance team shirts. I was pressing at completely wrong temps. Now they look professional!",
    machine: "Cricut EasyPress",
    avatar: "👩",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const testimonial = testimonials[current];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">💕 What Crafters Are Saying</h2>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === current ? 'bg-[#9CAF88]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
      
      <div className="min-h-[160px]">
        <div className="flex items-start gap-4">
          <span className="text-4xl">{testimonial.avatar}</span>
          <div>
            <p className="text-gray-700 text-lg mb-4 italic">"{testimonial.text}"</p>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-900">{testimonial.name}</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-500">{testimonial.location}</span>
              <span className="text-gray-400">•</span>
              <span className="text-[#9CAF88] text-sm">{testimonial.machine}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-xl">★</span>
          ))}
        </div>
      </div>
    </div>
  );
}
