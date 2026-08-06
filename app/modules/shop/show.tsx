"use client";

import { useState } from "react";

// --- 1. Sidebar Categories Data ---
const shopCategories = [
  { name: "All Products", count: 20 },
  { name: "Termite Treatment", count: 3 },
  { name: "Electrical", count: 3 },
  { name: "Heat Insulation", count: 2 },
  { name: "Waterproofing", count: 2 },
  { name: "Grey Materials", count: 2 },
  { name: "PVC Foam Board", count: 2 },
  { name: "Paint", count: 2 },
  { name: "Tiles and Tiles Accessories", count: 2 },
  { name: "Structure Strength and Stability", count: 1 },
  { name: "Landscape", count: 2 },
];

// --- 2. Complete Products Data ---
const productsData = [
  // Termite Treatment
  {
    title: "Termite X anti termite spray - Long-Lasting & Fast-Acting",
    category: "Termite Treatment",
    price: "PKR 3,200",
    image: "ant.jpg",
    description: "High-efficiency anti-termite spray designed for pre- and post-construction barriers.",
    stock: "In Stock",
    sku: "TRM-001"
  },
  {
    title: "ENVU Agenda previously Bayer Agenda Anti termite Spray",
    category: "Termite Treatment",
    price: "PKR 11,900",
    image: "saprey.jpg",
    description: "Globally trusted formulation by Environmental Science (formerly Bayer).",
    stock: "In Stock",
    sku: "TRM-002"
  },
  {
    title: "Anti-Termite Wood Proofer – Interior & Exterior Wood Protection",
    category: "Termite Treatment",
    price: "PKR 500",
    image: "en.jpg",
    description: "Specialized wood preservative that protects furniture, doors, and frames.",
    stock: "In Stock",
    sku: "TRM-003"
  },
  // Electrical
  {
    title: "Pakistan Cables Pure Copper Wiring Cable - 3/0.29 (Per Coil)",
    category: "Electrical",
    price: "PKR 8,500",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
    description: "100% pure copper electrical wiring cable offering maximum conductivity.",
    stock: "In Stock",
    sku: "ELC-001"
  },
  {
    title: "Philips LED Bright Bulb 12W - Energy Saving Warm White",
    category: "Electrical",
    price: "PKR 650",
    image: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=600&q=80",
    description: "Energy-efficient LED bulb delivering high lumen output.",
    stock: "In Stock",
    sku: "ELC-002"
  },
  {
    title: "Modular Power Switch Board with USB Fast Charging Ports",
    category: "Electrical",
    price: "PKR 2,400",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=600&q=80",
    description: "Modern fire-retardant modular switch board equipped with smart USB ports.",
    stock: "In Stock",
    sku: "ELC-003"
  },
  // Heat Insulation
  {
    title: "Roof Heat Insulation Foam Sheet - Density High (Per Sheet)",
    category: "Heat Insulation",
    price: "PKR 4,500",
    image: "rof.jpg",
    description: "High-density extruded polystyrene foam sheet engineered to lower indoor temperatures.",
    stock: "In Stock",
    sku: "INS-001"
  },
  {
    title: "Aluminum Foil Heat Insulation Bubble Roll for Ceilings",
    category: "Heat Insulation",
    price: "PKR 6,800",
    image: "al.jpg",
    description: "Reflective radiant barrier bubble foil insulation designed for roofs.",
    stock: "In Stock",
    sku: "INS-002"
  },
  // Waterproofing
  {
    title: "Sika Topseal-107 Elastic Waterproofing Slurry Coating",
    category: "Waterproofing",
    price: "PKR 7,500",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80",
    description: "Two-component polymer-modified cementitious waterproof mortar.",
    stock: "In Stock",
    sku: "WTR-001"
  },
  {
    title: "Bitumen Membrane Torch Applied Waterproof Roll (1x10m)",
    category: "Waterproofing",
    price: "PKR 9,200",
    image: "rul.jpg",
    description: "Heavy-duty reinforced APP modified bitumen waterproof membrane sheet.",
    stock: "In Stock",
    sku: "WTR-002"
  },
  // Grey Materials
  {
    title: "Bestway / Fauji Ordinary Portland Cement (50kg Bag)",
    category: "Grey Materials",
    price: "PKR 1,350",
    image: "foji.jpg",
    description: "Top-tier structural grade ordinary Portland cement.",
    stock: "In Stock",
    sku: "GRY-001"
  },
  {
    title: "High Grade Chenab River Sand & Crush Aggregates (Truck Load)",
    category: "Grey Materials",
    price: "PKR 45,000",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80",
    description: "Washed river sand and machine-crushed stone aggregates.",
    stock: "In Stock",
    sku: "GRY-002"
  },
  // PVC Foam Board
  {
    title: "Waterproof PVC Foam Sheet Board for Interior Cabinets (18mm)",
    category: "PVC Foam Board",
    price: "PKR 6,500",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80",
    description: "Termite-proof, waterproof, and fire-retardant 18mm thick PVC board.",
    stock: "In Stock",
    sku: "PVC-001"
  },
  {
    title: "Decorative PVC Wall Paneling Sheet for Modern Interiors",
    category: "PVC Foam Board",
    price: "PKR 1,800",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80",
    description: "Lightweight, easy-to-install decorative wall panels.",
    stock: "In Stock",
    sku: "PVC-002"
  },
  // Paint
  {
    title: "Nippon Weatherbond Exterior Wall Paint (4 Liters)",
    category: "Paint",
    price: "PKR 4,200",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80",
    description: "Advanced formula exterior paint engineered to resist harsh UV rays.",
    stock: "In Stock",
    sku: "PNT-001"
  },
  {
    title: "Master Royal Matt Emulsion Interior Paint (16 Liters)",
    category: "Paint",
    price: "PKR 12,500",
    image: "master.jpg",
    description: "Luxurious smooth matt finish interior emulsion offering excellent scrub resistance.",
    stock: "In Stock",
    sku: "PNT-002"
  },
  // Tiles and Tiles Accessories
  {
    title: "Master Ceramic Floor Tiles Glossy Finish (2x2 Feet)",
    category: "Tiles and Tiles Accessories",
    price: "PKR 2,100",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
    description: "High-gloss vitrified ceramic tiles offering exceptional durability.",
    stock: "In Stock",
    sku: "TLS-001"
  },
  {
    title: "Tile Adhesive Bonding Mortar Bag for Strong Grip (25kg)",
    category: "Tiles and Tiles Accessories",
    price: "PKR 1,150",
    image: "til.jpg",
    description: "Polymer-enriched adhesive mortar designed to prevent tile cracking.",
    stock: "In Stock",
    sku: "TLS-002"
  },
  // Structure Strength and Stability
  {
    title: "Sika Grout High Performance Cementitious Grouting Compound",
    category: "Structure Strength and Stability",
    price: "PKR 3,800",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80",
    description: "Non-shrink, free-flowing precision grout for heavy machinery foundations.",
    stock: "In Stock",
    sku: "STR-001"
  },
  // Landscape
  {
    title: "Artificial Synthetic Grass Carpet Mat for Balcony & Garden",
    category: "Landscape",
    price: "PKR 120",
    image: "gres.jpg",
    description: "UV-stabilized lush green synthetic turf carpet.",
    stock: "In Stock",
    sku: "LND-001"
  },
  {
    title: "Heavy Duty Plastic Garden Plant Pots (Set of 3)",
    category: "Landscape",
    price: "PKR 1,500",
    image: "plan.jpg",
    description: "Weather-resistant, durable planters designed for indoor and outdoor plants.",
    stock: "In Stock",
    sku: "LND-002"
  },
];

export default function ShopSection() {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const filteredProducts = productsData.filter((product) => {
    const matchesCategory =
      activeCategory === "All Products" || product.category === activeCategory;
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 flex flex-col justify-between selection:bg-pink-500 selection:text-white text-slate-100 relative">
      
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-custom {
          display: flex;
          width: max-content;
          animation: marquee 28s linear infinite;
        }
        .animate-marquee-custom:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Main Content Wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex flex-col gap-8">
        
        {/* Top Header & Search Bar Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-pink-600/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="w-full md:w-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-semibold mb-3">
              ✨ Premium Marketplace
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Building Materials <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">Shop</span>
            </h1>
            <p className="text-sm text-slate-300 mt-2 max-w-md">
              Explore professional construction chemicals, heavy-duty electricals, and authentic architectural finishes.
            </p>
          </div>

          <div className="w-full md:w-96 relative z-10">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-pink-400">
                🔍
              </span>
              <input
                type="text"
                placeholder="Search premium products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 bg-slate-900/80 border border-white/15 rounded-2xl shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm text-white placeholder-slate-400 transition"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Left Sidebar Column */}
          <div className="w-full lg:w-72 shrink-0 flex flex-col gap-6">
            
            {/* Sidebar Category Menu */}
            <div className="w-full bg-slate-900/70 backdrop-blur-xl rounded-3xl shadow-xl border border-white/10 p-6 relative overflow-hidden">
              <div className="flex items-center justify-between mb-5 px-1">
                <h2 className="text-white font-black text-base tracking-wide flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-pink-500 animate-pulse"></span> Categories
                </h2>
                <span className="text-xs font-bold text-pink-400 bg-pink-500/10 border border-pink-500/20 px-2.5 py-1 rounded-full">
                  {shopCategories.length} Groups
                </span>
              </div>
              
              <ul className="space-y-2 max-h-[460px] overflow-y-auto pr-1">
                {shopCategories.map((cat, index) => {
                  const isActive = activeCategory === cat.name;
                  return (
                    <li key={index}>
                      <button
                        onClick={() => setActiveCategory(cat.name)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-200 ${
                          isActive
                            ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg shadow-purple-900/50 font-bold border border-pink-400/40 scale-[1.02]"
                            : "text-slate-300 hover:bg-white/5 hover:text-white border border-transparent"
                        }`}
                      >
                        <span className="text-left line-clamp-1">{cat.name}</span>
                        <span
                          className={`text-xs px-2.5 py-0.5 rounded-full font-extrabold shrink-0 ${
                            isActive
                              ? "bg-white/20 text-white"
                              : "bg-slate-800 text-slate-400 border border-white/5"
                          }`}
                        >
                          {cat.count}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Card Placed Directly Below Sidebar */}
            <div className="w-full bg-gradient-to-br from-purple-900/40 via-slate-900/80 to-pink-900/40 backdrop-blur-xl rounded-3xl shadow-xl border border-pink-500/30 p-6 relative overflow-hidden text-center">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-pink-500/20 rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center text-xl shadow-lg shadow-purple-900/50">
                🏗️
              </div>
              
              <h3 className="text-white font-black text-base mb-1">Need Expert Advice?</h3>
              <p className="text-slate-300 text-xs leading-relaxed mb-4">
                Get custom material estimates and technical support for your construction project today.
              </p>
              
              <button
                onClick={() => alert("Our structural expert will contact you shortly!")}
                className="w-full py-2.5 bg-white/10 hover:bg-pink-600 border border-white/20 hover:border-transparent text-white font-bold rounded-xl text-xs transition shadow-md"
              >
                Contact Expert
              </button>
            </div>

          </div>

          {/* Right Side Products Grid */}
          <div className="flex-1 w-full flex flex-col justify-between">
            <div>
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product, index) => (
                    <div
                      key={index}
                      className="bg-slate-900/80 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 shadow-xl hover:shadow-2xl hover:border-pink-500/50 transition-all duration-300 p-5 flex flex-col justify-between group relative"
                    >
                      <div className="relative w-full h-48 bg-slate-950 rounded-2xl overflow-hidden mb-4 border border-white/5 flex items-center justify-center shrink-0">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-95 group-hover:brightness-100"
                        />
                        <div className="absolute top-3 right-3 bg-slate-900/90 backdrop-blur-md border border-white/15 px-3 py-1 rounded-xl text-xs font-bold text-pink-300 shadow-md">
                          {product.category}
                        </div>
                      </div>
                      
                      <div className="flex flex-col flex-grow justify-between">
                        <div>
                          <h3 className="text-white font-bold text-sm sm:text-base mb-3 line-clamp-2 group-hover:text-pink-400 transition-colors leading-snug">
                            {product.title}
                          </h3>
                        </div>
                        
                        <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-2">
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 font-extrabold text-lg">
                            {product.price}
                          </span>
                          <button
                            onClick={() => setSelectedProduct(product)}
                            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-pink-600 hover:to-purple-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all duration-300 shadow-md shadow-purple-900/50 group-hover:scale-105"
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-24 bg-slate-900/60 backdrop-blur-md rounded-3xl border border-white/10 flex flex-col items-center justify-center shadow-xl">
                  <div className="w-20 h-20 mb-5 bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/30 text-pink-400 rounded-3xl flex items-center justify-center text-3xl shadow-inner animate-bounce">
                    📦
                  </div>
                  <h3 className="text-white font-extrabold text-xl mb-2">No products found</h3>
                  <p className="text-slate-400 text-sm max-w-xs">Try adjusting your search query or select another category from the sidebar.</p>
                </div>
              )}
            </div>

            <div className="text-center mt-10 text-sm font-semibold text-slate-400 bg-slate-900/40 backdrop-blur-md py-3 px-6 rounded-2xl border border-white/10 w-fit mx-auto">
              Showing <span className="text-pink-400 font-black">{filteredProducts.length}</span> of <span className="text-white font-black">{productsData.length}</span> high-end products
            </div>
          </div>

        </div>

      </div>

      {/* --- PRODUCT DETAILS MODAL --- */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-white/15 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-pink-600 text-white flex items-center justify-center transition"
            >
              ✕
            </button>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="relative w-full md:w-1/2 h-64 bg-slate-950 rounded-2xl overflow-hidden border border-white/10 flex items-center justify-center">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-between md:w-1/2">
                <div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/30">
                    {selectedProduct.category}
                  </span>
                  <h2 className="text-xl font-black text-white mt-3 mb-2">{selectedProduct.title}</h2>
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 font-extrabold text-2xl mb-4">
                    {selectedProduct.type || selectedProduct.price}
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {selectedProduct.description}
                  </p>
                  <div className="text-xs text-slate-400 space-y-1">
                    <p><strong>SKU:</strong> {selectedProduct.sku || "N/A"}</p>
                    <p><strong>Availability:</strong> <span className="text-emerald-400">{selectedProduct.stock || "In Stock"}</span></p>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => {
                      alert(`Added "${selectedProduct.title}" to cart successfully!`);
                      setSelectedProduct(null);
                    }}
                    className="w-full py-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold rounded-xl text-sm shadow-lg shadow-purple-900/40 transition"
                  >
                    Add to Cart / Inquiry
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

     {/* PROFESSIONAL FOOTER */}
      <footer className="bg-gradient-to-r from-gray-950 via-indigo-950 to-gray-950 text-gray-200 py-4 px-4 mt-auto border-t border-indigo-500/30 shadow-2xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          
          <div>
            <h3 className="text-sm font-bold text-indigo-400">GharPlans Pakistan</h3>
            <p className="text-xs text-gray-300">📞 +92 3--------- | ✉️ shahzadirai55@gmail.com</p>
            <p className="text-[10px] text-gray-400">© 2026 GharPlans Pakistan. All rights reserved.</p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-1.5">
            <span className="text-xs font-semibold text-indigo-300">Connect With Us:</span>
            <div className="flex items-center gap-2">
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="w-7 h-7 bg-indigo-900/40 hover:bg-indigo-600/60 border border-indigo-500/30 rounded-full flex items-center justify-center transition text-xs shadow-md" title="WhatsApp">🟢</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-7 h-7 bg-indigo-900/40 hover:bg-indigo-600/60 border border-indigo-500/30 rounded-full flex items-center justify-center transition text-xs shadow-md" title="Facebook">📘</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-7 h-7 bg-indigo-900/40 hover:bg-indigo-600/60 border border-indigo-500/30 rounded-full flex items-center justify-center transition text-xs shadow-md" title="Instagram">📸</a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-7 h-7 bg-indigo-900/40 hover:bg-indigo-600/60 border border-indigo-500/30 rounded-full flex items-center justify-center transition text-xs shadow-md" title="YouTube">▶️</a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="w-7 h-7 bg-indigo-900/40 hover:bg-indigo-600/60 border border-indigo-500/30 rounded-full flex items-center justify-center transition text-xs shadow-md" title="TikTok">🎵</a>
              <a href="https://imo.im" target="_blank" rel="noopener noreferrer" className="w-7 h-7 bg-indigo-900/40 hover:bg-indigo-600/60 border border-indigo-500/30 rounded-full flex items-center justify-center transition text-xs shadow-md" title="IMO">💬</a>
            </div>
          </div>

        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="https://whatsapp.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-xl transition transform hover:scale-110 text-3xl"
        >
          💬
        </a>
      </div>

    </div>
  );
}