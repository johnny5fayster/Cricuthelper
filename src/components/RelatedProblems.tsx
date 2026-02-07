'use client';

import Link from 'next/link';

interface RelatedProblemsProps {
  currentIssue: string;
}

const relatedMap: Record<string, { title: string; link: string; icon: string }[]> = {
  "not-cutting": [
    { title: "Mat not gripping material", link: "/troubleshoot?issue=mat-grip", icon: "📋" },
    { title: "Blade seems dull", link: "/materials", icon: "🔪" },
    { title: "Uneven or rough cuts", link: "/troubleshoot?issue=not-cutting", icon: "✂️" },
  ],
  "htv-problems": [
    { title: "Heat press temperature guide", link: "/heat-press", icon: "🔥" },
    { title: "Material adhesion issues", link: "/troubleshoot?issue=adhesion", icon: "💪" },
    { title: "Not cutting through HTV", link: "/troubleshoot?issue=not-cutting", icon: "✂️" },
  ],
  "design-space": [
    { title: "Bluetooth connection issues", link: "/troubleshoot?issue=bluetooth", icon: "📶" },
    { title: "Error codes explained", link: "/error-codes", icon: "🚨" },
    { title: "Machine not detected", link: "/troubleshoot?issue=bluetooth", icon: "🔍" },
  ],
  "bluetooth": [
    { title: "Design Space crashing", link: "/troubleshoot?issue=design-space", icon: "💻" },
    { title: "Machine won't turn on", link: "/troubleshoot?issue=design-space", icon: "🔌" },
    { title: "Error codes explained", link: "/error-codes", icon: "🚨" },
  ],
  "mat-grip": [
    { title: "Material shifting during cut", link: "/troubleshoot?issue=not-cutting", icon: "↔️" },
    { title: "Cuts not going through", link: "/troubleshoot?issue=not-cutting", icon: "✂️" },
    { title: "Best mats for each material", link: "/materials", icon: "📋" },
  ],
  "print-then-cut": [
    { title: "Calibration guide", link: "/troubleshoot?issue=print-then-cut", icon: "🎯" },
    { title: "Design Space issues", link: "/troubleshoot?issue=design-space", icon: "💻" },
    { title: "Material settings", link: "/materials", icon: "📋" },
  ],
  "weeding": [
    { title: "Cuts not clean enough", link: "/troubleshoot?issue=not-cutting", icon: "✂️" },
    { title: "Blade pressure settings", link: "/materials", icon: "🔪" },
    { title: "HTV application tips", link: "/heat-press", icon: "🔥" },
  ],
  "adhesion": [
    { title: "Heat press settings", link: "/heat-press", icon: "🔥" },
    { title: "HTV troubleshooting", link: "/troubleshoot?issue=htv-problems", icon: "👕" },
    { title: "Material compatibility", link: "/materials", icon: "📋" },
  ],
};

export function RelatedProblems({ currentIssue }: RelatedProblemsProps) {
  const related = relatedMap[currentIssue] || relatedMap["not-cutting"];

  return (
    <div className="bg-purple-50 rounded-xl p-6 mt-6">
      <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
        <span>🔗</span> Others with this problem also checked:
      </h3>
      <div className="space-y-2">
        {related.map((item) => (
          <Link
            key={item.title}
            href={item.link}
            className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow"
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-gray-700">{item.title}</span>
            <span className="ml-auto text-purple-400">→</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
