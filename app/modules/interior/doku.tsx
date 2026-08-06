"use client";

import { useState } from "react";

// --- Categories and Homes Data with Unique Images ---
const categoriesData = [
  {
    id: "back-side",
    name: "Back Side Open Sitting Areas",
    designsCount: 1,
    image: "/c1.jpg",
    description: "Open backside sitting areas offer a perfect blend of comfort and nature.",
    designs: [
      {
        id: 1,
        title: "Modern Back Side Lawn with Red Bricks Feature Wall",
        image: "/c2.jpg",
        thumbnails: ["/c3.jpg", "/c4.jpg", "/c5.jpg"],
        frontView: "/c6.jpg",
        backView: "/c7.jpg",
        sideLoanView: "/c8.jpg",
        designType: "Modern Outdoor",
        roomSize: "30x40 Lawn",
        descriptionText: "Yeh backside open sitting area ka mukammal design hai jisme front view, back view aur side lawn ka khubsurat setup diya gaya hai.",
      }
    ],
  },
  {
    id: "tv-lounges",
    name: "Tv Lounges",
    designsCount: 10,
    image: "/t1.jpg",
    description: "Elegant and comfortable TV lounge designs crafted for family bonding.",
    designs: Array.from({ length: 10 }, (_, i) => {
      const num = (i % 8) + 1;
      return {
        id: i + 1,
        title: `Modern Luxury TV Lounge House Setup #${i + 1}`,
        image: `/t${num}.jpg`,
        thumbnails: [`/t${((num)%8)+1}.jpg`, `/t${((num+1)%8)+1}.jpg`],
        frontView: `/t${num}.jpg`,
        backView: `/t${((num+2)%8)+1}.jpg`,
        sideLoanView: `/t${((num+3)%8)+1}.jpg`,
        designType: "Contemporary Living",
        roomSize: "18x24 Area",
        descriptionText: `House #${i + 1} ka TV lounge aur interior layout jismein front aur back perspectives shamil hain.`,
      };
    }),
  },
  {
    id: "walk-in-closets",
    name: "Walk in Closets",
    designsCount: 2,
    image: "/k1.jpg",
    description: "Spacious and stylish walk-in closets designed with premium wood finishes.",
    designs: Array.from({ length: 2 }, (_, i) => ({
      id: i + 1,
      title: `Luxury Wardrobe & House Closet Design #${i + 1}`,
      image: `/k${i + 2}.jpg`,
      thumbnails: [`/k3.jpg`, `/k4.jpg`],
      frontView: `/k${i + 2}.jpg`,
      backView: `/k5.jpg`,
      sideLoanView: `/k6.jpg`,
      designType: "Custom Woodwork",
      roomSize: "12x15 Room",
      descriptionText: "Custom wooden cabinetry with intelligent glass wardrobes and side storage views.",
    })),
  },
  {
    id: "study-rooms",
    name: "Study Rooms",
    designsCount: 1,
    image: "/s1.jpg",
    description: "Quiet and productive study room environments.",
    designs: [{ id: 1, title: "Modern Home Study Room Design", image: "/s2.jpg", thumbnails: ["/s3.jpg", "/s4.jpg"], frontView: "/s5.jpg", backView: "/s6.jpg", sideLoanView: "/s7.jpg", designType: "Minimalist", roomSize: "10x12", descriptionText: "Peaceful environment optimized for work and reading with complete room angles." }],
  },
  {
    id: "powder-washrooms",
    name: "Powder Washrooms",
    designsCount: 2,
    image: "/w1.jpg",
    description: "Compact and luxurious powder washrooms.",
    designs: Array.from({ length: 2 }, (_, i) => ({
      id: i + 1,
      title: `Luxury Powder Washroom Concept #${i + 1}`,
      image: `/w${i + 2}.jpg`,
      thumbnails: ["/w3.jpg", "/w4.jpg"],
      frontView: `/w${i + 2}.jpg`,
      backView: `/w5.jpg`,
      sideLoanView: `/w6.jpg`,
      designType: "Classic",
      roomSize: "6x8",
      descriptionText: "Exquisite tile work and modern sanitary fittings."
    })),
  },
  {
    id: "patios",
    name: "Patios",
    designsCount: 1,
    image: "/p1.jpg",
    description: "Beautiful outdoor patio setups.",
    designs: [{ id: 1, title: "Cozy Outdoor Patio Design", image: "/p2.jpg", thumbnails: ["/p3.jpg", "/p4.jpg"], frontView: "/p5.jpg", backView: "/p6.jpg", sideLoanView: "/p7.jpg", designType: "Outdoor", roomSize: "14x14", descriptionText: "Relaxing outdoor seating surrounded by greenery." }],
  },
  {
    id: "bathrooms",
    name: "Bathrooms",
    designsCount: 18,
    image: "/z2.jpg",
    description: "Spa-like bathroom interiors.",
    designs: Array.from({ length: 18 }, (_, i) => {
      const num = (i % 9) + 1;
      return {
        id: i + 1,
        title: `Modern Luxury Bathroom Suite #${i + 1}`,
        image: `/d${num}.jpg`,
        thumbnails: ["/d1.jpg", "/d2.jpg", "/d3.jpg"],
        frontView: `/z5.jpg`,
        backView: `/z4.jpg`,
        sideLoanView: `/z4.jpg`,
        designType: "Modern",
        roomSize: "8x10",
        descriptionText: `Bathroom Suite Unit #${i + 1} with high-end marble finishes and glass partitions.`
      };
    }),
  },
  {
    id: "dining-rooms",
    name: "Dining Rooms",
    designsCount: 2,
    image: "/z.jpg",
    description: "Elegant dining room setups.",
    designs: Array.from({ length: 2 }, (_, i) => ({
      id: i + 1,
      title: `Sophisticated Dining Room Interior #${i + 1}`,
      image: `/z.jpg`,
      thumbnails: ["/f3.jpg", "/f4.jpg"],
      frontView: `/z1.jpg`,
      backView: `/f3.jpg`,
      sideLoanView: `/f5.jpg`,
      designType: "Royal",
      roomSize: "14x18",
      descriptionText: "Perfect space for grand dinner gatherings."
    })),
  },
  {
    id: "drawing-rooms",
    name: "Drawing Rooms",
    designsCount: 5,
    image: "/g1.jpg",
    description: "Sophisticated drawing rooms.",
    designs: Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      title: `Formal Guest Drawing Room Setup #${i + 1}`,
      image: `/g${(i % 5) + 1}.jpg`,
      thumbnails: ["/g3.jpg", "/g4.jpg"],
      frontView: `/g${(i % 5) + 1}.jpg`,
      backView: `/g5.jpg`,
      sideLoanView: `/g6.jpg`,
      designType: "Traditional",
      roomSize: "16x22",
      descriptionText: "Designed to impress guests with royal seating arrangements."
    })),
  },
  {
    id: "open-kitchen-sitting",
    name: "Open Kitchen & Sitting Areas",
    designsCount: 4,
    image: "/j1.jpg",
    description: "Seamless open-plan kitchen and sitting layouts.",
    designs: Array.from({ length: 4 }, (_, i) => ({
      id: i + 1,
      title: `Open Kitchen & Living Integration #${i + 1}`,
      image: `/j${(i % 4) + 1}.jpg`,
      thumbnails: ["/j3.jpg", "/j2.jpg"],
      frontView: `/j${(i % 4) + 1}.jpg`,
      backView: `/j4.jpg`,
      sideLoanView: `/j5.jpg`,
      designType: "Open Plan",
      roomSize: "20x25",
      descriptionText: "Spacious integrated living and cooking area."
    })),
  },
  {
    id: "sitting-dining-rooms",
    name: "Sitting and Dining Rooms",
    designsCount: 2,
    image: "/h1.jpg",
    description: "Combined sitting and dining spaces.",
    designs: Array.from({ length: 2 }, (_, i) => ({
      id: i + 1,
      title: `Combined Sitting and Dining Space #${i + 1}`,
      image: `/h${i + 1}.jpg`,
      thumbnails: ["/h3.jpg", "/h4.jpg"],
      frontView: `/h${i + 1}.jpg`,
      backView: `/h5.jpg`,
      sideLoanView: `/h6.jpg`,
      designType: "Modern",
      roomSize: "18x24",
      descriptionText: "Harmonious flow between relaxation and dining zones."
    })),
  },
  {
    id: "bedrooms",
    name: "Bedrooms",
    designsCount: 53,
    image: "/z2.jpg",
    description: "Luxurious master and guest bedrooms.",
    designs: Array.from({ length: 53 }, (_, i) => {
      const num = (i % 6) + 1;
      return {
        id: i + 1,
        title: `Luxury Modern Bedroom House Concept #${i + 1}`,
        image: `/l${num}.jpg`,
        thumbnails: ["/l3.jpg", "/l4.jpg"],
        frontView: `/l${num}.jpg`,
        backView: `/l5.jpg`,
        sideLoanView: `/l6.jpg`,
        designType: "Contemporary",
        roomSize: "14x16",
        descriptionText: `Bedroom House Unit #${i + 1} with complete front, back and side lawn layout options.`
      };
    }),
  },
  {
    id: "kitchens",
    name: "Kitchens",
    designsCount: 7,
    image: "/m1.jpg",
    description: "State-of-the-art modular kitchen designs.",
    designs: Array.from({ length: 7 }, (_, i) => {
      const num = (i % 5) + 1;
      return {
        id: i + 1,
        title: `Contemporary Modular Kitchen Design #${i + 1}`,
        image: `/m${num}.jpg`,
        thumbnails: ["/m2.jpg", "/m3.jpg"],
        frontView: `/m${num}.jpg`,
        backView: `/m4.jpg`,
        sideLoanView: `/m5.jpg`,
        designType: "Modular",
        roomSize: "12x14",
        descriptionText: "High-utility cabinets and sleek island counters."
      };
    }),
  },
  {
    id: "offices",
    name: "Offices",
    designsCount: 2,
    image: "/n1.jpg",
    description: "Professional home office environments.",
    designs: Array.from({ length: 2 }, (_, i) => ({
      id: i + 1,
      title: `Executive Home Office Setup #${i + 1}`,
      image: `/n${i + 1}.jpg`,
      thumbnails: ["/n3.jpg", "/n4.jpg"],
      frontView: `/n${i + 1}.jpg`,
      backView: `/n5.jpg`,
      sideLoanView: `/n6.jpg`,
      designType: "Executive",
      roomSize: "12x12",
      descriptionText: "Built-in desks and professional workspace styling."
    })),
  },
  {
    id: "false-ceilings",
    name: "False Ceilings",
    designsCount: 18,
    image: "/r1.jpg",
    description: "Modern false ceiling designs with elegant lighting.",
    designs: Array.from({ length: 18 }, (_, i) => {
      const num = (i % 4) + 1;
      return {
        id: i + 1,
        title: `Modern False Ceiling Lighting Design #${i + 1}`,
        image: `/r${num}.jpg`,
        thumbnails: ["/r1.jpg", "/r2.jpg"],
        frontView: `/r${num}.jpg`,
        backView: `/r3.jpg`,
        sideLoanView: `/r4.jpg`,
        designType: "Gypsum",
        roomSize: "Standard",
        descriptionText: `False Ceiling Unit #${i + 1} with creative cove lighting and elegant panel accents.`
      };
    }),
  },
  {
    id: "lobbies",
    name: "Lobbies",
    designsCount: 7,
    image: "/o1.jpg",
    description: "Grand and welcoming lobby interiors.",
    designs: Array.from({ length: 7 }, (_, i) => {
      const num = (i % 5) + 1;
      return {
        id: i + 1,
        title: `Grand Entrance & Lobby Interior #${i + 1}`,
        image: `/o${num}.jpg`,
        thumbnails: ["/o2.jpg", "/o3.jpg"],
        frontView: `/o${num}.jpg`,
        backView: `/o4.jpg`,
        sideLoanView: `/o5.jpg`,
        designType: "Grand",
        roomSize: "10x10",
        descriptionText: "Exquisite console tables and stunning entry aesthetics."
      };
    }),
  },
  {
    id: "theater",
    name: "Theater",
    designsCount: 1,
    image: "/q1.jpg",
    description: "Private home cinema room layouts.",
    designs: [{ id: 1, title: "Private Home Cinema & Theater Room", image: "/q1.jpg", thumbnails: ["/q7.jpg", "/q4.jpg"], frontView: "/q5.jpg", backView: "/q6.jpg", sideLoanView: "/q9.jpg", designType: "Acoustic", roomSize: "16x20", descriptionText: "Professional acoustic paneling and luxury recliners." }],
  },
];

export default function InteriorApp() {
  const [selectedCategory, setSelectedCategory] = useState<any | null>(null);
  const [selectedDesign, setSelectedDesign] = useState<any | null>(null);
  const [activeImage, setActiveImage] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = categoriesData.filter((cat) =>
    cat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleOpenDesign = (design: any) => {
    setSelectedDesign(design);
    setActiveImage(design.frontView || design.image);
  };

  const handleGoHome = () => {
    setSelectedCategory(null);
    setSelectedDesign(null);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col justify-between selection:bg-pink-500 selection:text-white">
      
      {/* Main App Content Container */}
      <div className="max-w-7xl mx-auto w-full p-6 sm:p-10 flex-grow">

        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <button
              onClick={handleGoHome}
              className="px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-xl font-bold text-sm shadow-lg hover:from-pink-500 hover:to-purple-500 transition cursor-pointer flex items-center gap-2"
            >
              🏠 Home
            </button>
            <span className="text-xs text-slate-400 font-medium">
              {selectedDesign ? "House Details View" : selectedCategory ? selectedCategory.name : "All Home Categories"}
            </span>
          </div>

          {(selectedCategory || selectedDesign) && (
            <button
              onClick={() => {
                if (selectedDesign) setSelectedDesign(null);
                else setSelectedCategory(null);
              }}
              className="text-xs font-bold text-pink-300 bg-pink-500/10 hover:bg-pink-500/20 px-4 py-2 rounded-xl transition border border-pink-500/30 cursor-pointer"
            >
              ⬅ Back
            </button>
          )}
        </div>

        {/* VIEW 1: Categories Grid */}
        {!selectedCategory && !selectedDesign && (
          <div>
            <div className="mb-8">
              <div className="relative max-w-xl">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-pink-400">🔍</span>
                <input
                  type="text"
                  placeholder="Search home categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 bg-slate-900 border border-white/15 rounded-2xl shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm text-white placeholder-slate-400"
                />
              </div>
              <p className="text-xs font-semibold text-pink-400 mt-4">{filteredCategories.length} categories found</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCategories.map((cat) => (
                <div
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat)}
                  className="group relative h-72 rounded-3xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/10 bg-slate-900"
                >
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-pink-600 text-white flex items-center justify-center font-bold text-xs shadow-md">
                    {cat.designsCount}
                  </div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <h3 className="text-white font-extrabold text-xl tracking-tight leading-snug group-hover:text-pink-300 transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-slate-300 mt-1 font-medium">👁️ {cat.designsCount} Homes Available</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 2: Category Homes Limit List */}
        {selectedCategory && !selectedDesign && (
          <div>
            <div className="mb-6">
              <p className="text-xs font-bold text-pink-400">{selectedCategory.designs.length} Homes found in this category</p>
              <h1 className="text-2xl sm:text-3xl font-black text-white mt-1">{selectedCategory.name}</h1>
              <p className="text-sm text-slate-300 mt-3 max-w-4xl leading-relaxed">{selectedCategory.description}</p>
            </div>

            <div className="border-t border-white/10 pt-8 mb-6">
              <h2 className="text-xl font-bold text-white">Select a Home to View Details (Front, Back & Loan Views)</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedCategory.designs.map((design: any) => (
                <div
                  key={design.id}
                  onClick={() => handleOpenDesign(design)}
                  className="bg-slate-900/80 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 shadow-xl hover:shadow-2xl transition p-4 flex flex-col justify-between cursor-pointer group"
                >
                  <div className="relative w-full h-56 bg-slate-950 rounded-2xl overflow-hidden mb-4">
                    <img src={design.image} alt={design.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                    <button className="absolute top-3 right-3 w-9 h-9 bg-slate-900/90 rounded-full flex items-center justify-center text-white shadow-md hover:text-pink-400 transition">
                      ❤️
                    </button>
                  </div>
                  <h3 className="text-white font-bold text-sm sm:text-base mb-2 group-hover:text-pink-400 transition">
                    {design.title}
                  </h3>
                  <p className="text-xs text-pink-400 font-semibold">Click to check Front, Back & Side Loan views ➡</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 3: Single Home Detail Page */}
        {selectedDesign && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {/* Big Main Image */}
              <div className="relative w-full h-[380px] sm:h-[480px] bg-slate-900 rounded-3xl overflow-hidden shadow-lg border border-white/10">
                <img src={activeImage} alt={selectedDesign.title} className="w-full h-full object-cover" />
              </div>

              {/* Angle Switcher Buttons */}
              <div className="grid grid-cols-3 gap-3 bg-slate-900 p-2 rounded-2xl border border-white/10">
                <button
                  onClick={() => setActiveImage(selectedDesign.frontView)}
                  className={`py-2.5 px-3 rounded-xl font-bold text-xs transition cursor-pointer ${
                    activeImage === selectedDesign.frontView ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow" : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  }`}
                >
                  🏡 Front View
                </button>
                <button
                  onClick={() => setActiveImage(selectedDesign.backView)}
                  className={`py-2.5 px-3 rounded-xl font-bold text-xs transition cursor-pointer ${
                    activeImage === selectedDesign.backView ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow" : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  }`}
                >
                  🔙 Back View
                </button>
                <button
                  onClick={() => setActiveImage(selectedDesign.sideLoanView)}
                  className={`py-2.5 px-3 rounded-xl font-bold text-xs transition cursor-pointer ${
                    activeImage === selectedDesign.sideLoanView ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow" : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  }`}
                >
                  📐 Side Loan View
                </button>
              </div>

              {/* Thumbnails Row */}
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {[selectedDesign.frontView, selectedDesign.backView, selectedDesign.sideLoanView].map((thumb: string, idx: number) => (
                  <div
                    key={idx}
                    onClick={() => setActiveImage(thumb)}
                    className={`relative w-24 h-16 rounded-xl overflow-hidden cursor-pointer border-2 transition ${
                      activeImage === thumb ? "border-pink-500 ring-2 ring-pink-500/30" : "border-white/10 hover:border-white/30"
                    }`}
                  >
                    <img src={thumb} alt="thumbnail" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>

              {/* Specs Box */}
              <div className="bg-slate-900 border border-white/10 rounded-2xl p-5 shadow-sm grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-pink-500/10 text-pink-400 flex items-center justify-center font-bold">🏢</div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Design Style</p>
                    <p className="text-sm font-bold text-white">{selectedDesign.designType}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 border-l border-white/10 pl-4">
                  <div className="w-10 h-10 rounded-xl bg-pink-500/10 text-pink-400 flex items-center justify-center font-bold">📏</div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Area / Size</p>
                    <p className="text-sm font-bold text-white">{selectedDesign.roomSize}</p>
                  </div>
                </div>
              </div>

              {/* Title & Description */}
              <div className="bg-slate-900 border border-white/10 rounded-2xl p-6 shadow-sm">
                <h1 className="text-xl sm:text-2xl font-black text-white mb-3">{selectedDesign.title}</h1>
                <p className="text-sm text-slate-300 leading-relaxed">{selectedDesign.descriptionText}</p>
              </div>
            </div>

            {/* Right Side: Similar Homes */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">Similar Homes</h3>

              <div className="space-y-4">
                {selectedCategory?.designs
                  .filter((d: any) => d.id !== selectedDesign.id)
                  .slice(0, 3)
                  .map((sim: any) => (
                    <div
                      key={sim.id}
                      onClick={() => handleOpenDesign(sim)}
                      className="bg-slate-900 border border-white/10 rounded-2xl p-3 shadow-sm hover:shadow-md transition cursor-pointer flex gap-4 items-center group"
                    >
                      <div className="relative w-24 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-slate-950">
                        <img src={sim.image} alt={sim.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white line-clamp-2 group-hover:text-pink-400 transition leading-snug">
                          {sim.title}
                        </h4>
                        <p className="text-[10px] text-slate-400 mt-1">Front, Back & Loan Layouts</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

          </div>
        )}

      </div>

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