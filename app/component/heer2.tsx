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
    description: "Ideal for small plots, optimized space utilization with 1 bedroom, kitchen, and bathroom.",
    price: "PKR 15,000",
    image: "/cn.jpg",
    features: ["1 Bed", "1 Bath", "Open Kitchen", "Compact Living"],
    beds: "1",
    baths: "1",
    floors: "2",
    sqft: "225 sqft",
    dimension: "10'x20'",
  },
  {
    id: "p2",
    title: "3 Marla Urban Residential Plan",
    size: "3 Marla",
    category: "Marla",
    description: "Perfect for small nuclear families, featuring double storey layout with modern elevation.",
    price: "PKR 25,000",
    image: "/3marla.jpg",
    features: ["2 Beds", "2 Baths", "Drawing Room", "Kitchen"],
    beds: "2",
    baths: "2",
    floors: "2",
    sqft: "675 sqft",
    dimension: "18'x38'",
  },
  {
    id: "p3",
    title: "5 Marla Contemporary House Map",
    size: "5 Marla",
    category: "Marla",
    description: "Most popular size in Pakistan. Includes 3 bedrooms, spacious lounge, and car porch.",
    price: "PKR 35,000",
    image: "/5m.jpg",
    features: ["3 Beds", "3 Baths", "Car Porch", "Terrace"],
    beds: "3",
    baths: "3",
    floors: "2",
    sqft: "1,125 sqft",
    dimension: "25'x45'",
  },
  {
    id: "p4",
    title: "7 Marla Luxury Family House Plan",
    size: "7 Marla",
    category: "Marla",
    description: "Slightly wider plot layout with airy rooms, lawn space, and stylish interior balconies.",
    price: "PKR 45,000",
    image: "/7m.jpg",
    features: ["4 Beds", "4 Baths", "Lawn Area", "TV Lounge"],
    beds: "4",
    baths: "4",
    floors: "2",
    sqft: "1,575 sqft",
    dimension: "30'x55'",
  },
  {
    id: "p5",
    title: "10 Marla Executive House Design",
    size: "10 Marla",
    category: "Marla",
    description: "Luxurious double storey plan with open-to-sky cut, modern kitchen, and servant quarter.",
    price: "PKR 60,000",
    image: "/10.jpg",
    features: ["5 Beds", "6 Baths", "2 Kitchens", "Servant Room"],
    beds: "5",
    baths: "6",
    floors: "2",
    sqft: "2,250 sqft",
    dimension: "35'x65'",
  },
  {
    id: "p6",
    title: "1 Kanal Royal Villa Architecture",
    size: "1 Kanal",
    category: "Kanal",
    description: "Grand mansion style plan featuring swimming pool space, massive landscaped lawn, and 6 bedrooms.",
    price: "PKR 100,000",
    image: "/PN.jpg",
    features: ["6 Beds", "7 Baths", "Private Pool", "Double Height Lobby"],
    beds: "6",
    baths: "7",
    floors: "2",
    sqft: "4,500 sqft",
    dimension: "50'x90'",
  },
  {
    id: "p7",
    title: "2 Kanal Elite Estate House Map",
    size: "2 Kanal",
    category: "Kanal",
    description: "Palatial estate design with grand driveway, multiple lounges, massive lawns, and luxury suites.",
    price: "PKR 180,000",
    image: "/one.jpg",
    features: ["8+ Beds", "9 Baths", "Multiple Lawns", "Multiple Garages"],
    beds: "8+",
    baths: "9",
    floors: "2",
    sqft: "9,000 sqft",
    dimension: "75'x120'",
  },
  {
    id: "p8",
    title: "4 Kanal Mega Luxury Farmhouse Plan",
    size: "4 Kanal",
    category: "Kanal",
    description: "Resort-style farmhouse design with sprawling lawns, sports court area, and ultra-luxury interiors.",
    price: "PKR 250,000",
    image: "/4km.jpg",
    features: ["10+ Beds", "12 Baths", "Farmhouse Style", "Extensive Grounds"],
    beds: "10+",
    baths: "12",
    floors: "2",
    sqft: "18,000 sqft",
    dimension: "100'x180'",
  },
  {
    id: "p9",
    title: "10 Kanal Grand Imperial Palace Design",
    size: "10 Kanal",
    category: "Kanal",
    description: "The ultimate pinnacle of luxury living. Custom architectural masterpiece with complete landscaping.",
    price: "Contact for Quote",
    image: "/10KANAL.Jpg",
    features: ["Customized", "Imperial Style", "Helipad Option", "Private Security Box"],
    beds: "Custom",
    baths: "Custom",
    floors: "3",
    sqft: "45,000 sqft",
    dimension: "Custom Plot",
  },
];

// ==========================================
// SAFE IMAGE COMPONENT
// ==========================================
function SafeImage({ src, alt, className }: { src: string; alt: string; className: string }) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div className={`${className} bg-purple-900 flex flex-col items-center justify-center text-white p-4 text-center`}>
        <span className="text-3xl mb-1">📐</span>
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-200">GharPlans</span>
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
    <div className="min-h-screen flex flex-col bg-white font-sans text-slate-900 relative">

      {/* MAIN CONTAINER */}
      <div className="max-w-6xl mx-auto px-4 py-8 w-full space-y-8 flex-1">
        
        {/* HERO TITLE SECTION */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="bg-purple-100 text-[#8C3499] text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
            Professional Architectural Drawings
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-purple-950 leading-tight">
            Complete House Maps from 1 Marla to 10 Kanal
          </h1>
          <p className="text-xs sm:text-sm text-slate-600">
            Choose the finest, approved house maps designed according to standard bylaws to build your dream home.
          </p>
        </div>

        {/* SEARCH & FILTER CONTROLS */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200">
          <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0">
            {(["All", "Marla", "Kanal"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold transition cursor-pointer whitespace-nowrap shadow-sm ${
                  selectedTab === tab 
                    ? "bg-[#8C3499] text-white shadow" 
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
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
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-full text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#8C3499] transition text-slate-800 shadow-sm"
            />
          </div>
        </div>

        {/* HOUSE PLANS GRID CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlans.map((plan) => (
            <div 
              key={plan.id} 
              onClick={() => setSelectedHouse(plan)}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 flex flex-col transition-all duration-300 group cursor-pointer"
            >
              
              {/* Image Container */}
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <SafeImage src={plan.image} alt={plan.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <span className="absolute top-3 left-3 bg-[#8C3499] text-white text-[11px] font-extrabold px-3 py-1 rounded-lg shadow">
                  {plan.size}
                </span>
                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur text-purple-950 text-[11px] font-bold px-3 py-1 rounded-lg shadow">
                  {plan.price}
                </span>
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
                    <span key={idx} className="bg-purple-50 text-purple-900 text-[10px] font-bold px-2.5 py-1 rounded-md">
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
                  className="w-full mt-2 py-2.5 bg-purple-950 hover:bg-[#8C3499] text-white text-xs font-bold rounded-xl transition shadow cursor-pointer"
                >
                  View Complete Details & Map
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* POPUP MODAL FOR HOUSE DETAILS & MAP VIEW */}
      {selectedHouse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-white border border-purple-200 rounded-3xl max-w-2xl w-full p-6 relative shadow-2xl max-h-[90vh] overflow-y-auto space-y-6">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedHouse(null)}
              className="absolute top-4 right-4 bg-slate-100 hover:bg-[#8C3499] hover:text-white text-slate-700 w-9 h-9 rounded-full flex items-center justify-center transition font-bold text-sm cursor-pointer shadow-sm"
            >
              ✕
            </button>

            {/* Modal Title */}
            <div className="space-y-1 pr-10">
              <span className="bg-purple-100 text-[#8C3499] text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase">
                {selectedHouse.size} Category
              </span>
              <h2 className="text-lg sm:text-xl font-extrabold text-purple-950">
                {selectedHouse.title}
              </h2>
            </div>

            {/* Big Map / Image Container */}
            <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-inner">
              <SafeImage 
                src={selectedHouse.image} 
                alt={selectedHouse.title} 
                className="w-full h-full object-contain" 
              />
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

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {selectedHouse.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a 
                href={`https://wa.me/923000000000?text=I am interested in getting the map and details for: ${encodeURIComponent(selectedHouse.title)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 rounded-xl font-bold text-xs sm:text-sm text-center transition shadow-lg flex items-center justify-center gap-2"
              >
                <span>💬</span> Contact on WhatsApp for Full Map
              </a>
              <button 
                onClick={() => setSelectedHouse(null)}
                className="px-6 py-3 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-xl font-bold text-xs sm:text-sm transition cursor-pointer"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

     

    </div>
  );
}