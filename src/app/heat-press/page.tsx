"use client";

import Link from "next/link";
import { useState } from "react";

const heatPressGuides = [
  {
    id: "basics",
    title: "Heat Press Basics",
    icon: "🔥",
    content: [
      {
        question: "What temperature should I use?",
        answer: "Most HTV requires 305-320°F (150-160°C). Glitter and specialty vinyls often need 320°F. Always check the manufacturer's recommendations for your specific material.",
      },
      {
        question: "How long should I press?",
        answer: "Standard HTV: 10-15 seconds. Glitter HTV: 15-20 seconds. Foil: 10-12 seconds. Always do a test press on scrap fabric first!",
      },
      {
        question: "How much pressure?",
        answer: "Medium-firm pressure. You should need to use some effort to close the press. Too light = peeling. Too heavy = can damage fabric or cause HTV to look shiny/flat.",
      },
      {
        question: "Hot peel or cold peel?",
        answer: "Check your HTV packaging! Most standard HTV is warm peel. Glitter is usually cold peel. Foil is typically hot peel. When in doubt, wait until warm/cool.",
      },
    ],
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting",
    icon: "🔧",
    content: [
      {
        question: "HTV is peeling off after washing",
        answer: "Common causes: 1) Not enough pressure during pressing 2) Not enough time 3) Fabric wasn't pre-pressed to remove moisture 4) Washing too soon (wait 24-48 hours). Try increasing pressure and time by 5 seconds.",
      },
      {
        question: "HTV won't stick at all",
        answer: "Check: 1) Did you mirror the design? 2) Is the shiny carrier side UP when pressing? 3) Is your temperature correct? 4) Is the fabric compatible (avoid waterproof/moisture-wicking)?",
      },
      {
        question: "HTV looks scorched or shiny",
        answer: "Temperature too high or pressed too long. Use a pressing sheet/parchment paper between the iron and HTV. Reduce temp by 10°F and try again.",
      },
      {
        question: "Design has wrinkles or bubbles",
        answer: "Fabric wasn't flat or had moisture. Pre-press your fabric for 3-5 seconds before applying HTV. Make sure there are no seams or buttons under the design area.",
      },
      {
        question: "Carrier sheet won't peel off",
        answer: "HTV didn't adhere properly. Re-press for 5-10 more seconds. If using cold peel vinyl, make sure it's fully cooled before peeling.",
      },
    ],
  },
  {
    id: "settings",
    title: "Settings by Material",
    icon: "📋",
    content: [
      {
        question: "Standard HTV (Siser EasyWeed, Cricut Everyday)",
        answer: "Temperature: 305°F (150°C) | Time: 10-15 sec | Pressure: Medium | Peel: Warm",
      },
      {
        question: "Glitter HTV",
        answer: "Temperature: 320°F (160°C) | Time: 15-20 sec | Pressure: Firm | Peel: Cold",
      },
      {
        question: "Foil HTV",
        answer: "Temperature: 300°F (150°C) | Time: 10-12 sec | Pressure: Light-Medium | Peel: Hot",
      },
      {
        question: "Holographic/Shimmer HTV",
        answer: "Temperature: 310°F (155°C) | Time: 10-15 sec | Pressure: Medium | Peel: Cold",
      },
      {
        question: "Puff/3D HTV",
        answer: "Temperature: 300-320°F | Time: 12-15 sec | Pressure: LIGHT (important!) | Peel: Cold | Note: NO pressure on second press",
      },
      {
        question: "Flock HTV",
        answer: "Temperature: 305°F (150°C) | Time: 15-20 sec | Pressure: Firm | Peel: Cold",
      },
      {
        question: "Infusible Ink",
        answer: "Temperature: 385-400°F | Time: 40-60 sec | Pressure: Light | Note: Only for polyester/poly-coated blanks!",
      },
      {
        question: "Sublimation",
        answer: "Temperature: 380-400°F | Time: 45-60 sec | Pressure: Medium | Note: Polyester only, mirror your design!",
      },
    ],
  },
  {
    id: "fabrics",
    title: "Fabric Guide",
    icon: "👕",
    content: [
      {
        question: "100% Cotton",
        answer: "✅ Great for HTV! Pre-wash without fabric softener. Can handle high temps. Most forgiving fabric for beginners.",
      },
      {
        question: "100% Polyester",
        answer: "✅ Works but be careful! Use lower temps (280-300°F) to avoid scorching. Required for Infusible Ink and sublimation.",
      },
      {
        question: "Cotton/Poly Blends",
        answer: "✅ Works well. Use medium temps (300-315°F). Test first as blend ratios vary.",
      },
      {
        question: "Nylon",
        answer: "⚠️ Use caution. Low temps only (275°F max). Test on hidden area. Can melt or scorch easily.",
      },
      {
        question: "Moisture-Wicking/Dri-Fit",
        answer: "⚠️ Tricky! The coating can prevent adhesion. Use lower temps, SportFlex HTV, and always test first.",
      },
      {
        question: "Canvas/Denim",
        answer: "✅ Works great but may need extra time (15-20 sec) due to thickness. Pre-press to flatten.",
      },
      {
        question: "Leather/Faux Leather",
        answer: "⚠️ Very low temp only (225-250°F) for 10 sec. Test first! Real leather can be damaged.",
      },
    ],
  },
  {
    id: "tips",
    title: "Pro Tips",
    icon: "💡",
    content: [
      {
        question: "Always pre-press your fabric",
        answer: "3-5 seconds before applying HTV removes moisture and wrinkles. This one step prevents most adhesion failures!",
      },
      {
        question: "Use a pressing pillow for uneven surfaces",
        answer: "Hoodies with zippers, baby onesies with snaps, bags with seams - a pressing pillow ensures even pressure.",
      },
      {
        question: "Invest in a good pressing sheet",
        answer: "Teflon sheets protect your HTV and heat press. Replace when they get stained or torn.",
      },
      {
        question: "Let it cure before washing",
        answer: "Wait 24-48 hours before the first wash. Wash inside out, cold water, no fabric softener. Tumble dry low or hang dry.",
      },
      {
        question: "Layer HTV correctly",
        answer: "Bottom layer: press at full time. Additional layers: press 5-10 sec less. Cover bottom layers with pressing sheet when adding new layers.",
      },
      {
        question: "Keep a settings notebook",
        answer: "Write down what works! Every press is slightly different. Your notebook becomes your personal cheat sheet.",
      },
      {
        question: "Buy a temperature gun",
        answer: "Heat press displays can be off by 10-20°F. A $15 infrared thermometer lets you verify actual temperature.",
      },
    ],
  },
];

export default function HeatPressPage() {
  const [activeSection, setActiveSection] = useState("basics");
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setExpandedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const activeGuide = heatPressGuides.find(g => g.id === activeSection);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Link href="/" className="text-pink-500 hover:underline">← Home</Link>
        <h1 className="text-3xl font-bold text-gray-800 mt-4">🔥 Heat Press Guide</h1>
        <p className="text-gray-600 mt-2">Everything you need to know about heat pressing HTV, Infusible Ink, and more.</p>
      </div>

      {/* Section Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {heatPressGuides.map((guide) => (
          <button
            key={guide.id}
            onClick={() => setActiveSection(guide.id)}
            className={`px-4 py-2 rounded-full font-medium transition-all ${
              activeSection === guide.id
                ? "bg-orange-500 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {guide.icon} {guide.title}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeGuide && (
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span>{activeGuide.icon}</span>
            {activeGuide.title}
          </h2>
          
          <div className="space-y-4">
            {activeGuide.content.map((item, index) => {
              const itemId = `${activeGuide.id}-${index}`;
              const isExpanded = expandedItems[itemId];
              
              return (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleItem(itemId)}
                    className="w-full px-4 py-3 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
                  >
                    <span className="font-medium text-gray-800">{item.question}</span>
                    <span className="text-gray-400">{isExpanded ? "−" : "+"}</span>
                  </button>
                  {isExpanded && (
                    <div className="px-4 py-3 bg-white">
                      <p className="text-gray-700 whitespace-pre-line">{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Quick Reference Card */}
      <div className="mt-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl p-6 text-white">
        <h3 className="text-xl font-bold mb-4">⚡ Quick Reference</h3>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="bg-white/20 rounded-xl p-4">
            <p className="font-bold">Standard HTV</p>
            <p className="text-sm">305°F • 10-15 sec • Warm peel</p>
          </div>
          <div className="bg-white/20 rounded-xl p-4">
            <p className="font-bold">Glitter HTV</p>
            <p className="text-sm">320°F • 15-20 sec • Cold peel</p>
          </div>
          <div className="bg-white/20 rounded-xl p-4">
            <p className="font-bold">Infusible Ink</p>
            <p className="text-sm">385°F • 40-60 sec • Polyester only</p>
          </div>
        </div>
      </div>
    </div>
  );
}
