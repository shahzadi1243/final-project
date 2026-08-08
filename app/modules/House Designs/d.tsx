"use client";

import { useState } from "react";

// ==========================================
// TYPES DEFINITION
// ==========================================
interface DiningRoomPlan {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
}

// ==========================================
// DINING ROOM CARDS DATA (General & Modern Concepts)
// ==========================================
const diningRoomPlansData: DiningRoomPlan[] = [
  {
    id: "din1",
    title: "Modern Minimalist Dining Suite",
    subtitle: "Clean & Elegant",
    description: "Sleek wooden dining table paired with upholstered chairs and a minimalist linear pendant light overhead.",
    features: ["Linear Pendant Light", "Upholstered Chairs", "Minimalist Vibe"],
    image: "/ewq.jpg",
  },
  {
    id: "din2",
    title: "Royal Marble Top Grand Dining",
    subtitle: "Luxurious Statement",
    description: "Exquisite Italian marble tabletop surrounded by velvet gold-trimmed chairs for high-end formal gatherings.",
    features: ["Italian Marble", "Gold Trims", "Formal Dining"],
    image: "/img1.jpg",
  },
  {
    id: "din3",
    title: "Open-Plan Kitchen Attached Dining",
    subtitle: "Seamless Flow",
    description: "Designed for modern living with direct access to the kitchen island, maximizing convenience and family interaction.",
    features: ["Kitchen Connected", "Breakfast Bar", "Spacious Layout"],
    image: "/img2.jpg",
  },
  {
    id: "din4",
    title: "Double-Height Ceiling Luxury Dining",
    subtitle: "Grand Architecture",
    description: "Featuring an open-to-above double height void, a massive designer chandelier, and tall accent walls.",
    features: ["Double Height", "Designer Chandelier", "Accent Wall"],
    image: "/img3.jpg",
  },
  {
    id: "din5",
    title: "Cozy Wooden Fluted Panel Dining",
    subtitle: "Warm & Inviting",
    description: "Rich wooden wall paneling with built-in crockery cabinets and warm ambient cove lighting.",
    features: ["Wooden Paneling", "Crockery Unit", "Ambient Lighting"],
    image: "/img4.jpg",
  },
  {
    id: "din6",
    title: "Glass Wall Garden View Dining",
    subtitle: "Nature Connected",
    description: "Surrounded by floor-to-ceiling glass windows overlooking a lush green courtyard or backyard garden.",
    features: ["Garden View", "Floor-to-Ceiling Glass", "Natural Sunlight"],
    image: "/img5.jpg",
  },
  {
    id: "din7",
    title: "Classic Contemporary Fusion Dining",
    subtitle: "Timeless Charm",
    description: "A perfect blend of traditional carved wooden details with contemporary fabrics and chic table settings.",
    features: ["Classic Fusion", "Carved Details", "Chic Setup"],
    image: "/img6.jpg",
  },
  {
    id: "din8",
    title: "Apartment Style Space-Saving Dining",
    subtitle: "Compact & Smart",
    description: "Cleverly designed compact dining table layout with built-in storage benches for space optimization.",
    features: ["Storage Benches", "Compact Design", "Space Saving"],
    image: "/img7.jpg",
  },
  {
    id: "din9",
    title: "Royal Palace Banquet Dining Hall",
    subtitle: "Aristocratic Luxury",
    description: "Extensive 12-seater dining table configuration with carved pillars, heavy drapery, and royal aesthetic.",
    features: ["12-Seater Setup", "Carved Pillars", "Royal Drapery"],
    image: "/img8.Jpg",
  },
  {
    id: "din10",
    title: "Penthouse Skyline View Dining",
    subtitle: "Urban Sophistication",
    description: "Modern upscale dining area with a smoked glass table, leather designer chairs, and city skyline views.",
    features: ["Smoked Glass", "Leather Chairs", "City Skyline View"],
    image: "/img9.jpg",
  },
];

// ==========================================
// DINING ROOM SECTION COMPONENT
// ==========================================
export default function DiningRoomSection() {
  const [activeCard, setActiveCard] = useState<DiningRoomPlan | null>(null);

  return (
    <section className="py-12 bg-gradient-to-b from-slate-50 via-purple-50/30 to-slate-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        
        {/* SECTION HEADER */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="bg-purple-100 text-[#8C3499] text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-xs">
            🍽️ Fine Dining Experience
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-purple-950 tracking-tight">
            Exquisite Dining Room & Interior Concepts
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Create memorable family meals in style. Explore our exclusive <span className="font-bold text-[#8C3499]">Dining Room & Table Layout Concepts</span> crafted for modern architectural elegance.
          </p>
        </div>

        {/* 1. VIDEO BANNER SECTION */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm sm:text-base font-bold text-purple-950 flex items-center gap-2">
              <span>▶️</span> Watch Walkthrough: Modern Dining Room Concepts
            </h3>
            <span className="text-xs font-semibold text-[#8C3499]">HD Walkthrough</span>
          </div>

          <div className="relative w-full h-[280px] sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl border-2 border-purple-100 bg-slate-950">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover opacity-90"
            >
              <source src="/3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Video Overlay Info */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 sm:p-8">
              <span className="bg-[#8C3499] text-white text-[10px] font-extrabold px-3 py-1 rounded-md w-max mb-2 uppercase">
                Featured Walkthrough
              </span>
              <h4 className="text-white text-base sm:text-xl font-bold">
                Designing the Perfect Family Dining & Gathering Space
              </h4>
              <p className="text-gray-300 text-xs sm:text-sm mt-1 max-w-2xl">
                Discover innovative lighting placement, crockery storage solutions, and optimal seating arrangements to elevate your dining experience.
              </p>
            </div>
          </div>
        </div>

        {/* 2. CARDS GRID SECTION */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <h3 className="text-base sm:text-lg font-extrabold text-purple-950 flex items-center gap-2">
              <span>✨</span> Popular Dining Room Concepts
            </h3>
            <span className="text-xs text-slate-500">Click any card for details</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diningRoomPlansData.map((plan, index) => (
              <div 
                key={plan.id}
                onClick={() => setActiveCard(plan)}
                className="bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl border border-slate-200 flex flex-col transition-all duration-300 group cursor-pointer"
              >
                {/* Card Image */}
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img 
                    src={plan.image} 
                    alt={plan.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <span className="absolute top-3 left-3 bg-[#8C3499] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-lg shadow">
                    #{index + 1} • {plan.subtitle}
                  </span>
                  <span className="absolute bottom-3 left-3 text-white text-xs font-semibold bg-black/40 backdrop-blur px-2.5 py-1 rounded-md">
                    🍽️ Dining Room
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-5 flex flex-col flex-1 space-y-3">
                  <h4 className="text-sm sm:text-base font-bold text-purple-950 group-hover:text-[#8C3499] transition leading-snug">
                    {plan.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    {plan.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 flex-1">
                    {plan.features.map((feat, idx) => (
                      <span key={idx} className="bg-purple-50 text-purple-900 text-[10px] font-bold px-2 py-0.5 rounded-md border border-purple-100">
                        ✓ {feat}
                      </span>
                    ))}
                  </div>

                  <button className="w-full mt-2 py-2.5 bg-purple-950 hover:bg-[#8C3499] text-white text-xs font-bold rounded-xl transition shadow cursor-pointer">
                    View Concept Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* POPUP MODAL FOR CARD CLICK */}
      {activeCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4">
          <div className="bg-white border border-purple-200 rounded-3xl max-w-xl w-full p-6 relative shadow-2xl space-y-4">
            <button 
              onClick={() => setActiveCard(null)}
              className="absolute top-4 right-4 bg-slate-100 hover:bg-[#8C3499] hover:text-white text-slate-700 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition cursor-pointer"
            >
              ✕
            </button>

            <span className="bg-purple-100 text-[#8C3499] text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase">
              {activeCard.subtitle} Dining Concept
            </span>

            <h3 className="text-lg font-extrabold text-purple-950">
              {activeCard.title}
            </h3>

            <div className="h-48 rounded-xl overflow-hidden bg-slate-900">
              <img src={activeCard.image} alt={activeCard.title} className="w-full h-full object-cover" />
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {activeCard.description} This custom dining room design concept ensures maximum space optimization, exceptional lighting, and a sophisticated atmosphere for family dinners.
            </p>

            <div className="pt-2 flex gap-3">
              <a 
                href={`https://wa.me/923000000000?text=I want complete details about the Dining Room concept: ${encodeURIComponent(activeCard.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 rounded-xl font-bold text-xs text-center transition flex items-center justify-center gap-2 shadow"
              >
                <span>💬</span> Discuss on WhatsApp
              </a>
              <button 
                onClick={() => setActiveCard(null)}
                className="px-5 py-3 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-xl font-bold text-xs transition cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}