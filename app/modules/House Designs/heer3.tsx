"use client";

import { useState } from "react";

// ==========================================
// TYPES DEFINITION
// ==========================================

interface HousePlan {
  id: string;
  title: string;
  size: string;
  category: "Marla" | "Kanal";
  description: string;
  price: string;
  image: string;
  features: string[];
  beds: string;
  baths: string;
  floors: string;
  sqft: string;
  dimension: string;
  backsideSitting: string; // Added modern feature detail
}

// ==========================================
// 1 MARLA TO 10 KANAL HOUSE PLANS DATA
// ==========================================

const housePlansData: HousePlan[] = [
  {
    id: "p1",
    title: "1 Marla Compact Modern Home Plan",
    size: "1 Marla",
    category: "Marla",
    description: "Ideal for small plots, optimized space utilization with smart ventilation, open kitchen, and compact back utility space.",
    price: "PKR 15,000",
    image: "/cn.jpg",
    features: ["1 Bed", "1 Bath", "Open Kitchen", "Compact Backspace"],
    beds: "1",
    baths: "1",
    floors: "2",
    sqft: "225 sqft",
    dimension: "10'x20'",
    backsideSitting: "Mini Ventilation Cut / Service Duct",
  },
  {
    id: "p2",
    title: "3 Marla Urban Residential Plan",
    size: "3 Marla",
    category: "Marla",
    description: "Perfect for nuclear families, featuring double storey layout, modern elevation, and a cozy rear open sitting space.",
    price: "PKR 25,000",
    image: "/3marla.jpg",
    features: ["2 Beds", "2 Baths", "Drawing Room", "Rear Open Area"],
    beds: "2",
    baths: "2",
    floors: "2",
    sqft: "675 sqft",
    dimension: "18'x38'",
    backsideSitting: "Compact Backyard Sitting & Laundry Zone",
  },
  {
    id: "p3",
    title: "5 Marla Contemporary House Map",
    size: "5 Marla",
    category: "Marla",
    description: "Most popular size in Pakistan. Includes 3 bedrooms, spacious lounge, car porch, and a dedicated open backside sitting terrace.",
    price: "PKR 35,000",
    image: "/5m.jpg",
    features: ["3 Beds", "3 Baths", "Car Porch", "Backside Open Sitting"],
    beds: "3",
    baths: "3",
    floors: "2",
    sqft: "1,125 sqft",
    dimension: "25'x45'",
    backsideSitting: "Open Air Backside Sitting Deck with Planters",
  },
  {
    id: "p4",
    title: "7 Marla Luxury Family House Plan",
    size: "7 Marla",
    category: "Marla",
    description: "Wide plot layout with airy rooms, lawn space, stylish balconies, and a panoramic open backyard retreat.",
    price: "PKR 45,000",
    image: "/7m.jpg",
    features: ["4 Beds", "4 Baths", "Lawn Area", "Backyard Patio"],
    beds: "4",
    baths: "4",
    floors: "2",
    sqft: "1,575 sqft",
    dimension: "30'x55'",
    backsideSitting: "Modern Landscaped Backyard Sitting Lounge",
  },
  {
    id: "p5",
    title: "10 Marla Executive House Design",
    size: "10 Marla",
    category: "Marla",
    description: "Luxurious double storey plan with open-to-sky cut, modern kitchen, servant quarter, and grand rear outdoor seating.",
    price: "PKR 60,000",
    image: "/10.jpg",
    features: ["5 Beds", "6 Baths", "2 Kitchens", "Rear Open Terrace"],
    beds: "5",
    baths: "6",
    floors: "2",
    sqft: "2,250 sqft",
    dimension: "35'x65'",
    backsideSitting: "Luxury Backside BBQ & Tea Lounge Patio",
  },
  {
    id: "p6",
    title: "1 Kanal Royal Villa Architecture",
    size: "1 Kanal",
    category: "Kanal",
    description: "Grand mansion style plan featuring swimming pool space, massive landscaped lawn, and a luxurious open backside gazebo sitting area.",
    price: "PKR 100,000",
    image: "/PN.jpg",
    features: ["6 Beds", "7 Baths", "Private Pool", "Backside Gazebo"],
    beds: "6",
    baths: "7",
    floors: "2",
    sqft: "4,500 sqft",
    dimension: "50'x90'",
    backsideSitting: "Grand Backside Gazebo & Poolside Open Sitting",
  },
  {
    id: "p7",
    title: "2 Kanal Elite Estate House Map",
    size: "2 Kanal",
    category: "Kanal",
    description: "Palatial estate design with grand driveway, multiple lounges, massive lawns, and extensive open backyard garden seating.",
    price: "PKR 180,000",
    image: "/one.jpg",
    features: ["8+ Beds", "9 Baths", "Multiple Lawns", "Rear Garden Deck"],
    beds: "8+",
    baths: "9",
    floors: "2",
    sqft: "9,000 sqft",
    dimension: "75'x120'",
    backsideSitting: "Extensive Backside Botanical Garden Sitting Deck",
  },
  {
    id: "p8",
    title: "4 Kanal Mega Luxury Farmhouse Plan",
    size: "4 Kanal",
    category: "Kanal",
    description: "Resort-style farmhouse design with sprawling lawns, sports court area, and ultra-luxury outdoor open backside pavilion.",
    price: "PKR 250,000",
    image: "/4km.jpg",
    features: ["10+ Beds", "12 Baths", "Farmhouse Style", "Open Rear Pavilion"],
    beds: "10+",
    baths: "12",
    floors: "2",
    sqft: "18,000 sqft",
    dimension: "100'x180'",
    backsideSitting: "Panoramic Open Backside Valley-View Pavilion",
  },
  {
    id: "p9",
    title: "10 Kanal Grand Imperial Palace Design",
    size: "10 Kanal",
    category: "Kanal",
    description: "The ultimate pinnacle of luxury living. Custom architectural masterpiece featuring royal rear courtyards and open sky sitting decks.",
    price: "Contact for Quote",
    image: "/10KANAL.Jpg",
    features: ["Customized", "Imperial Style", "Helipad Option", "Royal Rear Court"],
    beds: "Custom",
    baths: "Custom",
    floors: "3",
    sqft: "45,000 sqft",
    dimension: "Custom Plot",
    backsideSitting: "Imperial Royal Open Backside Courtyard & Fountain Deck",
  },
];

// ==========================================
// SAFE IMAGE COMPONENT
// ==========================================
function SafeImage({ src, alt, className }: { src: string; alt: string; className: string }) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div className={`${className} bg-gradient-to-br from-purple-900 to-indigo-950 flex flex-col items-center justify-center text-white p-4 text-center`}>
        <span className="text-3xl mb-1">📐</span>
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-200">GharPlans Pakistan</span>
      </div>
    );
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      className={className} 
      loading="lazy"
      onError={() => setHasError(true)} 
    />
  );
}

// ==========================================
// MAIN APP COMPONENT
// ==========================================

export default function HousePlansPortal() {
  const [selectedTab, setSelectedTab] = useState<"All" | "Marla" | "Kanal">("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedHouse, setSelectedHouse] = useState<HousePlan | null>(null);

  // Filtering Logic
  const filteredPlans = housePlansData.filter((plan) => {
    const matchesTab = selectedTab === "All" || plan.category === selectedTab;
    const matchesSearch = plan.title.toLowerCase().includes(searchQuery.toLowerCase()) || plan.size.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900 relative">

      {/* TOP HEADER / NAVBAR */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-[#8C3499] text-white flex items-center justify-center font-bold text-lg shadow-md">🏠</span>
            <span className="text-base sm:text-lg font-extrabold text-purple-950 tracking-tight">GharPlans <span className="text-[#8C3499]">Pakistan</span></span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-xs font-semibold text-slate-600">
            <span>✨ Modern Elevation</span>
            <span>•</span>
            <span>🌳 Open Backside Sitting</span>
            <span>•</span>
            <span>🏛️ Approved Maps</span>
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 py-8 w-full space-y-8 flex-1">
        
        {/* HERO TITLE SECTION */}
        <div className="text-center space-y-3 max-w-3xl mx-auto bg-gradient-to-b from-purple-50/50 to-transparent p-6 rounded-3xl border border-purple-100/60">
          <span className="bg-purple-100 text-[#8C3499] text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
            Architectural Mastery with Open Backside Sitting Areas
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-purple-950 leading-tight">
            Complete House Maps from 1 Marla to 10 Kanal
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Discover professionally engineered house maps featuring optimized ventilation, modern interior styling, and dedicated <span className="font-bold text-[#8C3499]">Open Backside Sitting & Backyard Decks</span>.
          </p>
        </div>

        {/* SEARCH & FILTER CONTROLS */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0">
            {(["All", "Marla", "Kanal"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer whitespace-nowrap shadow-xs ${
                  selectedTab === tab 
                    ? "bg-[#8C3499] text-white shadow-md" 
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
                }`}
              >
                {tab === "All" ? "All Sizes (1 Marla - 10 Kanal)" : tab + " Categories"}
              </button>
            ))}
          </div>

          <div className="w-full sm:w-72 relative">
            <span className="absolute inset-y-0 left-3.5 flex items-center text-slate-400 text-sm">
              🔍
            </span>
            <input 
              type="text" 
              placeholder="Search e.g. 5 Marla, 1 Kanal..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#8C3499] transition text-slate-800 shadow-inner"
            />
          </div>
        </div>

        {/* HOUSE PLANS GRID CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlans.map((plan) => (
            <div 
              key={plan.id} 
              onClick={() => setSelectedHouse(plan)}
              className="bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl border border-slate-200 flex flex-col transition-all duration-300 group cursor-pointer"
            >
              
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden bg-slate-900">
                <SafeImage src={plan.image} alt={plan.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
                <span className="absolute top-3 left-3 bg-[#8C3499] text-white text-[11px] font-extrabold px-3 py-1 rounded-lg shadow-md">
                  {plan.size}
                </span>
                <span className="absolute top-3 right-3 bg-white/95 backdrop-blur-md text-purple-950 text-[11px] font-bold px-3 py-1 rounded-lg shadow-md">
                  {plan.price}
                </span>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-semibold">
                  <span className="bg-black/40 backdrop-blur px-2 py-0.5 rounded-md">📐 {plan.dimension}</span>
                  <span className="bg-emerald-600/90 px-2 py-0.5 rounded-md">🌳 Open Back Sitting</span>
                </div>
              </div>

              {/* Content Details */}
              <div className="p-5 flex flex-col flex-1 space-y-4">
                <div className="space-y-1.5 flex-1">
                  <h3 className="text-base font-bold text-purple-950 group-hover:text-[#8C3499] transition leading-snug">
                    {plan.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    {plan.description}
                  </p>
                </div>

                {/* Features Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                  {plan.features.map((feat, idx) => (
                    <span key={idx} className="bg-purple-50 text-purple-900 text-[10px] font-bold px-2.5 py-1 rounded-md border border-purple-100">
                      ✓ {feat}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedHouse(plan);
                  }}
                  className="w-full mt-2 py-3 bg-purple-950 hover:bg-[#8C3499] text-white text-xs font-bold rounded-xl transition shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>👁️</span> View Complete Details & Map
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* POPUP MODAL FOR HOUSE DETAILS & MAP VIEW */}
      {selectedHouse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4 animate-fade-in">
          <div className="bg-white border border-purple-200 rounded-3xl max-w-3xl w-full p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto space-y-6">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedHouse(null)}
              className="absolute top-4 right-4 bg-slate-100 hover:bg-[#8C3499] hover:text-white text-slate-700 w-9 h-9 rounded-full flex items-center justify-center transition font-bold text-sm cursor-pointer shadow-xs"
            >
              ✕
            </button>

            {/* Modal Title */}
            <div className="space-y-1 pr-10">
              <span className="bg-purple-100 text-[#8C3499] text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase">
                {selectedHouse.size} Architectural Layout Plan
              </span>
              <h2 className="text-lg sm:text-2xl font-extrabold text-purple-950">
                {selectedHouse.title}
              </h2>
            </div>

            {/* Big Map / Image Container */}
            <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-inner">
              <SafeImage 
                src={selectedHouse.image} 
                alt={selectedHouse.title} 
                className="w-full h-full object-contain" 
              />
              <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-xl border border-white/10">
                🌟 Highlights: <span className="font-bold text-emerald-400">{selectedHouse.backsideSitting}</span>
              </div>
            </div>

            {/* Specifications Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <div>
                <p className="text-[10px] text-slate-400 font-semibold uppercase">Bedrooms</p>
                <p className="text-xs sm:text-sm font-bold text-purple-950">🛏 {selectedHouse.beds} Bedrooms</p>
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-semibold uppercase">Bathrooms</p>
                <p className="text-xs sm:text-sm font-bold text-purple-950">🛁 {selectedHouse.baths} Bathrooms</p>
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-semibold uppercase">Floors</p>
                <p className="text-xs sm:text-sm font-bold text-purple-950">🏠 {selectedHouse.floors} Storey</p>
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-semibold uppercase">Total Area</p>
                <p className="text-xs sm:text-sm font-bold text-[#8C3499]">{selectedHouse.sqft}</p>
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-semibold uppercase">Dimensions</p>
                <p className="text-xs sm:text-sm font-bold text-purple-950">{selectedHouse.dimension}</p>
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-semibold uppercase">Estimated Price</p>
                <p className="text-xs sm:text-sm font-bold text-emerald-600">{selectedHouse.price}</p>
              </div>
            </div>

            {/* Description & Backside Sitting Info */}
            <div className="space-y-2 bg-purple-50/60 p-4 rounded-2xl border border-purple-100">
              <h4 className="text-xs font-bold text-purple-950 uppercase tracking-wide">🌳 Modern Backside Sitting & Ventilation Highlight:</h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {selectedHouse.description} This layout includes a specialized <span className="font-bold text-[#8C3499]">{selectedHouse.backsideSitting}</span> designed to ensure abundant sunlight, cross-ventilation, and a peaceful outdoor sitting experience at the rear of the house.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a 
                href={`https://wa.me/923000000000?text=I am interested in getting the complete map and architectural layout details with backside sitting for: ${encodeURIComponent(selectedHouse.title)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 bg-[#25D366] hover:bg-[#20ba5a] text-white py-3.5 rounded-xl font-bold text-xs sm:text-sm text-center transition shadow-lg flex items-center justify-center gap-2"
              >
                <span>💬</span> Contact on WhatsApp for Full Map & PDF
              </a>
              <button 
                onClick={() => setSelectedHouse(null)}
                className="px-6 py-3.5 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-xl font-bold text-xs sm:text-sm transition cursor-pointer"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

      {/* PROFESSIONAL FOOTER */}
      <footer className="bg-gradient-to-r from-gray-950 via-indigo-950 to-gray-950 text-gray-200 py-6 px-4 mt-auto border-t border-indigo-500/30 shadow-2xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          
          <div>
            <h3 className="text-sm font-bold text-indigo-400">GharPlans Pakistan</h3>
            <p className="text-xs text-gray-300">📞 +92 3--------- | ✉️ shahzadirai55@gmail.com</p>
            <p className="text-[10px] text-gray-400">© 2026 GharPlans Pakistan. All rights reserved.</p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-1.5">
            <span className="text-xs font-semibold text-indigo-300">Connect With Us:</span>
            <div className="flex items-center gap-2">
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-indigo-900/40 hover:bg-indigo-600/60 border border-indigo-500/30 rounded-full flex items-center justify-center transition text-xs shadow-md" title="WhatsApp">🟢</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-indigo-900/40 hover:bg-indigo-600/60 border border-indigo-500/30 rounded-full flex items-center justify-center transition text-xs shadow-md" title="Facebook">📘</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-indigo-900/40 hover:bg-indigo-600/60 border border-indigo-500/30 rounded-full flex items-center justify-center transition text-xs shadow-md" title="Instagram">📸</a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-indigo-900/40 hover:bg-indigo-600/60 border border-indigo-500/30 rounded-full flex items-center justify-center transition text-xs shadow-md" title="YouTube">▶️</a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-indigo-900/40 hover:bg-indigo-600/60 border border-indigo-500/30 rounded-full flex items-center justify-center transition text-xs shadow-md" title="TikTok">🎵</a>
              <a href="https://imo.im" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-indigo-900/40 hover:bg-indigo-600/60 border border-indigo-500/30 rounded-full flex items-center justify-center transition text-xs shadow-md" title="IMO">💬</a>
            </div>
          </div>

        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <a 
          href="https://whatsapp.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-2xl transition transform hover:scale-110 text-3xl"
          title="Chat on WhatsApp"
        >
          💬
        </a>
      </div>

    </div>
  );
}