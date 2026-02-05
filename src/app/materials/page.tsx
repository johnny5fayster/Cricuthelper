"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { 
  materials, 
  Material,
  categoryLabels, 
  machineLabels, 
  bladeLabels, 
  matLabels,
  MaterialCategory,
  searchMaterials,
  getPopularMaterials,
} from "@/data/materials";

function MaterialsContent() {
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get("search") || "";
  
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState<MaterialCategory | "all" | "popular">("popular");
  const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(null);

  const filteredMaterials = useMemo(() => {
    if (searchQuery) {
      return searchMaterials(searchQuery);
    }
    if (selectedCategory === "popular") {
      return getPopularMaterials();
    }
    if (selectedCategory === "all") {
      return materials;
    }
    return materials.filter(m => m.category === selectedCategory);
  }, [searchQuery, selectedCategory]);

  const categories: (MaterialCategory | "all" | "popular")[] = [
    "popular",
    "all",
    "vinyl-adhesive",
    "vinyl-htv",
    "cardstock",
    "paper",
    "fabric",
    "leather",
    "specialty",
    "infusible-ink",
    "smart-materials",
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <Link href="/" className="text-pink-500 hover:underline">← Home</Link>
        <h1 className="text-3xl font-bold text-gray-800 mt-4">📋 Material Settings Database</h1>
        <p className="text-gray-600 mt-2">Find the perfect cut settings for your material. Search or browse by category.</p>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search materials (e.g., 'glitter vinyl', 'oracal 651', 'felt')"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              if (e.target.value) setSelectedCategory("all");
            }}
            className="w-full px-4 py-3 pl-12 rounded-xl border border-gray-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-100 outline-none transition-all"
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Category Tabs */}
      <div className="mb-6 overflow-x-auto">
        <div className="flex gap-2 pb-2 min-w-max">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setSearchQuery("");
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat && !searchQuery
                  ? "bg-pink-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat === "popular" ? "⭐ Popular" : cat === "all" ? "All Materials" : categoryLabels[cat]}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-gray-500 mb-4">
        {searchQuery 
          ? `Found ${filteredMaterials.length} materials matching "${searchQuery}"`
          : `Showing ${filteredMaterials.length} materials`
        }
      </p>

      {/* Materials Grid */}
      <div className="grid gap-4">
        {filteredMaterials.map((material) => (
          <MaterialCard 
            key={material.id} 
            material={material}
            onClick={() => setSelectedMaterial(material)}
          />
        ))}
      </div>

      {filteredMaterials.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-xl">
          <p className="text-gray-500 text-lg">No materials found</p>
          <p className="text-gray-400 mt-2">Try a different search term or browse by category</p>
        </div>
      )}

      {/* Material Detail Modal */}
      {selectedMaterial && (
        <MaterialModal 
          material={selectedMaterial} 
          onClose={() => setSelectedMaterial(null)} 
        />
      )}
    </div>
  );
}

export default function MaterialsPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center p-12">Loading...</div>}>
      <MaterialsContent />
    </Suspense>
  );
}

function MaterialCard({ material, onClick }: { material: Material; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left bg-white rounded-xl border border-gray-200 hover:border-pink-300 hover:shadow-md transition-all p-4"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-gray-800">{material.name}</h3>
            {material.popular && <span className="text-xs bg-pink-100 text-pink-600 px-2 py-0.5 rounded-full">Popular</span>}
          </div>
          <p className="text-sm text-gray-500 mt-1">
            {material.brand} • {categoryLabels[material.category]}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2 sm:gap-4 text-sm">
          <div className="bg-gray-50 px-3 py-1 rounded-lg">
            <span className="text-gray-500">Blade:</span>{" "}
            <span className="font-medium text-gray-700">{bladeLabels[material.blade].replace(" Blade", "")}</span>
          </div>
          <div className="bg-gray-50 px-3 py-1 rounded-lg">
            <span className="text-gray-500">Pressure:</span>{" "}
            <span className="font-medium text-gray-700">{material.pressure}</span>
          </div>
          <div className="bg-gray-50 px-3 py-1 rounded-lg">
            <span className="text-gray-500">Passes:</span>{" "}
            <span className="font-medium text-gray-700">{material.multiCut}</span>
          </div>
        </div>
      </div>
    </button>
  );
}

function MaterialModal({ material, onClose }: { material: Material; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={onClose}>
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{material.name}</h2>
              <p className="text-gray-500">{material.brand} • {categoryLabels[material.category]}</p>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-2xl">×</button>
          </div>

          {/* Settings Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <SettingBox label="Blade" value={bladeLabels[material.blade]} icon="🔪" />
            <SettingBox label="Mat Type" value={matLabels[material.matType]} icon="📋" />
            <SettingBox label="Pressure" value={material.pressure.toString()} icon="⬇️" />
            <SettingBox label="Passes" value={material.multiCut === 1 ? "1 (single cut)" : `${material.multiCut} passes`} icon="🔄" />
          </div>

          {/* Compatible Machines */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-2">Compatible Machines</h3>
            <div className="flex flex-wrap gap-2">
              {material.machines.map((machine) => (
                <span key={machine} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                  ✓ {machineLabels[machine]}
                </span>
              ))}
              {/* Show incompatible machines */}
              {(["maker", "maker3", "explore", "explore3", "joy"] as const)
                .filter(m => !material.machines.includes(m))
                .map((machine) => (
                  <span key={machine} className="px-3 py-1 bg-gray-100 text-gray-400 rounded-full text-sm">
                    ✗ {machineLabels[machine]}
                  </span>
                ))
              }
            </div>
          </div>

          {/* Notes */}
          {material.notes && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
              <h3 className="font-semibold text-yellow-800 mb-1">💡 Tips & Notes</h3>
              <p className="text-yellow-700">{material.notes}</p>
            </div>
          )}

          {/* Quick Tips */}
          <div className="bg-pink-50 rounded-xl p-4">
            <h3 className="font-semibold text-pink-800 mb-2">Getting good cuts:</h3>
            <ul className="text-sm text-pink-700 space-y-1">
              {material.category === "vinyl-htv" && <li>• Remember to MIRROR your design!</li>}
              {material.category === "vinyl-htv" && <li>• Place shiny/carrier side DOWN on mat</li>}
              {material.matType === "strong" && <li>• Use StrongGrip (purple) mat</li>}
              {material.matType === "light" && <li>• Use LightGrip (blue) mat to prevent tearing</li>}
              {material.matType === "fabric" && <li>• Use FabricGrip (pink) mat</li>}
              {material.multiCut > 1 && <li>• Multiple passes needed - don't unload between cuts!</li>}
              <li>• If not cutting through, increase pressure by 5-10</li>
              <li>• Do a test cut before your full project</li>
            </ul>
          </div>

          {/* Close button */}
          <button 
            onClick={onClose}
            className="w-full mt-6 bg-pink-500 text-white py-3 rounded-xl font-semibold hover:bg-pink-600 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function SettingBox({ label, value, icon }: { label: string; value: string; icon: string }) {
  return (
    <div className="bg-gray-50 rounded-xl p-4">
      <div className="text-2xl mb-1">{icon}</div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-semibold text-gray-800">{value}</p>
    </div>
  );
}
