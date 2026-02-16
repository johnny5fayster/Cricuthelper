'use client';

export function CommunityStats() {
  // These will be dynamic from database later
  const stats = {
    craftersHelped: "2,847",
    problemsSolved: "12,500+",
    materialsInDb: "127",
    avgResponseTime: "< 60 sec",
  };

  return (
    <div className="bg-gradient-to-r from-[#9CAF88] to-purple-500 rounded-2xl p-8 text-white">
      <h2 className="text-2xl font-bold text-center mb-8">
        Join the Community That Gets It Done
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <StatCard 
          number={stats.craftersHelped} 
          label="Crafters Helped" 
          icon="👩‍🎨"
        />
        <StatCard 
          number={stats.problemsSolved} 
          label="Problems Solved" 
          icon="✅"
        />
        <StatCard 
          number={stats.materialsInDb} 
          label="Material Settings" 
          icon="📋"
        />
        <StatCard 
          number={stats.avgResponseTime} 
          label="To Find Your Fix" 
          icon="⚡"
        />
      </div>

      <p className="text-center mt-8 text-white/80">
        Real help from real crafters. No subscription required.
      </p>
    </div>
  );
}

function StatCard({ number, label, icon }: { number: string; label: string; icon: string }) {
  return (
    <div className="text-center">
      <span className="text-3xl mb-2 block">{icon}</span>
      <div className="text-3xl md:text-4xl font-bold mb-1">{number}</div>
      <div className="text-white/80 text-sm">{label}</div>
    </div>
  );
}
