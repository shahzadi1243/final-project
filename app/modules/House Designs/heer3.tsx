"use client";

import { useState } from "react";

// ==========================================
// TYPES DEFINITION
// ==========================================
interface BacksideSittingPlan {
  id: string;
  title: string;
  size: string;
  description: string;
  features: string[];
  image: string;
}

// ==========================================
// 10 BACKSIDE SITTING CARDS DATA
// ==========================================
const backsidePlansData: BacksideSittingPlan[] = [
  {
    id: "bs1",
    title: "1 Marla Compact Rear Service & Ventilation Deck",
    size: "1 Marla",
    description: "Smartly managed small rear cut for fresh air circulation and compact outdoor seating.",
    features: ["Mini Open Air", "Fresh Air Duct", "Exhaust Friendly"],
    image: "/-1.jpg",
  },
  {
    id: "bs2",
    title: "3 Marla Cozy Backyard Patio",
    size: "3 Marla",
    description: "A private rear corner designed for evening tea and small family gatherings.",
    features: ["Tea Lounge", "Wall Planters", "Cozy Corner"],
    image: "/--2.jpg",
  },
  {
    id: "bs3",
    title: "5 Marla Open Air Backside Sitting Deck",
    size: "5 Marla",
    description: "Most demandable modern layout featuring a vertical garden wall and seating space at the back.",
    features: ["Vertical Garden", "BBQ Space", "Glass Sliding Door"],
    image: "/---3.jpg",
  },
  {
    id: "bs4",
    title: "7 Marla Landscaped Backyard Retreat",
    size: "7 Marla",
    description: "Spacious rear lawn extension with custom outdoor seating chairs and subtle lighting.",
    features: ["Lawn Extension", "Outdoor Lighting", "Paved Walkway"],
    image: "/-4.jpg",
  },
  {
    id: "bs5",
    title: "10 Marla Luxury Backside BBQ & Tea Lounge",
    size: "10 Marla",
    description: "Executive level rear patio connected with the main kitchen for seamless outdoor dining.",
    features: ["Outdoor Dining", "BBQ Counter", "Sleek Pergola"],
    image: "/-5.jpg",
  },
  {
    id: "bs6",
    title: "1 Kanal Royal Villa Backside Gazebo",
    size: "1 Kanal",
    description: "Palatial backyard layout featuring a custom-built gazebo overlooking swimming pool deck.",
    features: ["Luxury Gazebo", "Poolside View", "Lounge Sofas"],
    image: "/-6.jpg",
  },
  {
    id: "bs7",
    title: "2 Kanal Botanical Garden Sitting Deck",
    size: "2 Kanal",
    description: "Extensive lush green backyard retreat with multi-tier seating and water fountains.",
    features: ["Water Fountain", "Multi-tier Seating", "Exotic Plants"],
    image: "/-7.jpg",
  },
  {
    id: "bs8",
    title: "4 Kanal Mega Farmhouse Open Pavilion",
    size: "4 Kanal",
    description: "Resort style open-air pavilion at the rear with panoramic landscape views.",
    features: ["Open Pavilion", "Valley View", "Fire Pit"],
    image: "/-8.jpg",
  },
  {
    id: "bs9",
    title: "Imperial Palace Royal Rear Courtyard",
    size: "10 Kanal",
    description: "Custom imperial architecture featuring traditional Mughal-inspired open rear courtyard.",
    features: ["Royal Courtyard", "Marble Deck", "Grand Pillars"],
    image: "/=1.Jpg",
  },
  {
    id: "bs10",
    title: "Penthouse Style Rooftop & Rear Open Deck",
    size: "Custom",
    description: "Modern architectural marvel with seamless indoor-outdoor rear sitting transition.",
    features: ["Seamless Flow", "Glass Railing", "Sunset View"],
    image: "/-10.jpg",
  },
];

// ==========================================
// BACKSIDE SITTING SECTION COMPONENT
// ==========================================
export default function BacksideSittingSection() {
  const [activeCard, setActiveCard] = useState<BacksideSittingPlan | null>(null);

  return (
    <section className="py-12 bg-gradient-to-r from-purple-950 via-purple-900 to-indigo-950 text-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        
        {/* SECTION HEADER */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="bg-purple-900/80 text-purple-200 border border-purple-700/60 text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-xs">
            🌳 Exclusive Concept
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Modern Backside Open Sitting Area Designs
          </h2>
          <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed">
            Experience the luxury of fresh airflow, natural sunlight, and peaceful outdoor relaxation with our specially engineered <span className="font-bold text-purple-300">Backside Open Sitting & Backyard Decks</span> across all plot sizes.
          </p>
        </div>

        {/* 1. VIDEO BANNER SECTION */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm sm:text-base font-bold text-purple-200 flex items-center gap-2">
              <span>▶️</span> Watch Walkthrough: Backside Sitting Concept
            </h3>
            <span className="text-xs font-semibold text-purple-300">High Definition Preview</span>
          </div>

          <div className="relative w-full h-[280px] sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl border-2 border-purple-700/50 bg-slate-950">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover opacity-90"
            >
              <source src="/ve1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Video Overlay Info */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 sm:p-8">
              <span className="bg-purple-600 text-white text-[10px] font-extrabold px-3 py-1 rounded-md w-max mb-2 uppercase">
                Featured Walkthrough
              </span>
              <h4 className="text-white text-base sm:text-xl font-bold">
                How We Optimize Backyard Space & Open Seating in Pakistan Homes
              </h4>
              <p className="text-purple-200 text-xs sm:text-sm mt-1 max-w-2xl">
                Discover architectural tips on ventilation, privacy walls, and cozy sitting arrangements right at the back of your house.
              </p>
            </div>
          </div>
        </div>

        {/* 2. 10 CARDS GRID SECTION */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between border-b border-purple-800/60 pb-3">
            <h3 className="text-base sm:text-lg font-extrabold text-purple-200 flex items-center gap-2">
              <span>🏡</span> 10 Backside Sitting Layout Options (1 Marla to 10 Kanal)
            </h3>
            <span className="text-xs text-purple-300/70">Click any card to explore</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {backsidePlansData.map((plan, index) => (
              <div 
                key={plan.id}
                onClick={() => setActiveCard(plan)}
                className="bg-purple-950/90 rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-700/50 border border-purple-700/40 flex flex-col transition-all duration-300 group cursor-pointer hover:border-purple-400"
              >
                {/* Card Image */}
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img 
                    src={plan.image} 
                    alt={plan.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <span className="absolute top-3 left-3 bg-purple-600 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-lg shadow">
                    #{index + 1} • {plan.size}
                  </span>
                  <span className="absolute bottom-3 left-3 text-white text-xs font-semibold bg-black/40 backdrop-blur px-2.5 py-1 rounded-md">
                    🌳 Backside Open Sitting
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-5 flex flex-col flex-1 space-y-3">
                  <h4 className="text-sm sm:text-base font-bold text-purple-100 group-hover:text-purple-300 transition leading-snug">
                    {plan.title}
                  </h4>
                  <p className="text-xs text-purple-300/70 line-clamp-2">
                    {plan.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-purple-800/60 flex-1">
                    {plan.features.map((feat, idx) => (
                      <span key={idx} className="bg-purple-900/60 text-purple-200 text-[10px] font-bold px-2 py-0.5 rounded-md border border-purple-700/50">
                        ✓ {feat}
                      </span>
                    ))}
                  </div>

                  <button className="w-full mt-2 py-2.5 bg-purple-900 hover:bg-purple-600 text-white text-xs font-bold rounded-xl transition shadow cursor-pointer">
                    View Sitting Layout Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* POPUP MODAL FOR CARD CLICK */}
      {activeCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-purple-950/80 backdrop-blur-md p-4">
          <div className="bg-purple-950 border border-purple-400/50 rounded-3xl max-w-xl w-full p-6 relative shadow-2xl space-y-4">
            <button 
              onClick={() => setActiveCard(null)}
              className="absolute top-4 right-4 bg-purple-900/80 hover:bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition cursor-pointer"
            >
              ✕
            </button>

            <span className="bg-purple-900/80 text-purple-200 border border-purple-700/60 text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase">
              {activeCard.size} Backside Sitting Concept
            </span>

            <h3 className="text-lg font-extrabold text-white">
              {activeCard.title}
            </h3>

            <div className="h-48 rounded-xl overflow-hidden bg-slate-900 border border-purple-700/50">
              <img src={activeCard.image} alt={activeCard.title} className="w-full h-full object-cover" />
            </div>

            <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed">
              {activeCard.description} This layout ensures private outdoor seating, proper sunlight penetration, and modern aesthetic value at the rear end of your house.
            </p>

            <div className="pt-2 flex gap-3">
              <a 
                href={`https://wa.me/923000000000?text=I want details about the backside sitting plan: ${encodeURIComponent(activeCard.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 rounded-xl font-bold text-xs text-center transition flex items-center justify-center gap-2 shadow"
              >
                <span>💬</span> Get Full Details on WhatsApp
              </a>
              <button 
                onClick={() => setActiveCard(null)}
                className="px-5 py-3 bg-purple-900 hover:bg-purple-800 text-purple-200 rounded-xl font-bold text-xs transition cursor-pointer"
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