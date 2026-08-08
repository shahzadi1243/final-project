"use client";

import { useState } from "react";

// ==========================================
// TYPES DEFINITION
// ==========================================
interface TvLoungePlan {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
}

// ==========================================
// TV LOUNGE CARDS DATA (General & Modern Concepts)
// ==========================================
const tvLoungePlansData: TvLoungePlan[] = [
  {
    id: "tv1",
    title: "Minimalist Floating Media Wall",
    subtitle: "Modern & Sleek",
    description: "Clean lines with a floating TV console, concealed wiring, and subtle warm backlighting for a clutter-free look.",
    features: ["Concealed Wiring", "Floating Console", "Warm Backlighting"],
    image: "/im1.jpg",
  },
  {
    id: "tv2",
    title: "Luxury Wooden Fluted Panel Lounge",
    subtitle: "Warm & Cozy",
    description: "Rich wooden textures paired with vertical fluted panels to give your family seating area a high-end royal feel.",
    features: ["Fluted Panels", "Acoustic Friendly", "Rich Wood Texture"],
    image: "/im2.jpg",
  },
  {
    id: "tv3",
    title: "Grand Marble Texture Feature Wall",
    subtitle: "Contemporary Masterpiece",
    description: "Sleek marble-finish porcelain slabs surrounding the main screen with built-in display niches.",
    features: ["Marble Finish", "Display Niches", "Premium Look"],
    image: "/im4.jpg",
  },
  {
    id: "tv4",
    title: "Double-Height Ceiling Open Media Hub",
    subtitle: "Spacious & Grand",
    description: "Designed for open-to-above layouts featuring a massive media wall and statement hanging chandelier.",
    features: ["Double Height", "Statement Chandelier", "Grand Aesthetic"],
    image: "/im44.jpg",
  },
  {
    id: "tv5",
    title: "Cinematic Surround Sound Entertainment Lounge",
    subtitle: "Home Theater Vibe",
    description: "Acoustically optimized walls and plush recliner seating arrangement for the ultimate movie-watching experience.",
    features: ["Acoustic Treatment", "Recliner Seating", "Home Cinema Setup"],
    image: "/im5.jpg",
  },
  {
    id: "tv6",
    title: "Classic Contemporary Fusion Lounge",
    subtitle: "Timeless Elegance",
    description: "A perfect blend of traditional carved details with modern minimalist furniture and soft ambient lighting.",
    features: ["Classic Fusion", "Soft Ambiance", "Designer Sofas"],
    image: "/im6.jpg",
  },
  {
    id: "tv7",
    title: "Smart Integrated Living Room Lounge",
    subtitle: "High-Tech Comfort",
    description: "Equipped with automated blinds, smart RGB accent lighting, and motorized pop-up TV cabinetry.",
    features: ["Smart RGB Lights", "Automated Setup", "Motorized Unit"],
    image: "/im7.jpg",
  },
  {
    id: "tv8",
    title: "Rustic Stone Fireplace & TV Combination",
    subtitle: "Warmth & Style",
    description: "Featuring a stone-clad feature wall combining a modern electric fireplace right beneath the screen.",
    features: ["Stone Cladding", "Electric Fireplace", "Cozy Vibe"],
    image: "/im8.jpg",
  },
  {
    id: "tv9",
    title: "Royal Velvet & Gold Trim Luxury Lounge",
    subtitle: "Palatial Design",
    description: "Exquisite interior styling with gold metallic trims, plush velvet seating, and aristocratic wall moldings.",
    features: ["Gold Trims", "Velvet Textures", "Wall Moldings"],
    image: "/im9.jpg",
  },
  {
    id: "tv10",
    title: "Open-Plan Glass Partition Media Lounge",
    subtitle: "Seamless Transition",
    description: "Connected fluidly with the dining and kitchen areas through sleek glass dividers and modern ceiling drops.",
    features: ["Glass Partitions", "Open Flow", "Drop Ceiling"],
    image: "/im10.jpg",
  },
];

// ==========================================
// TV LOUNGE SECTION COMPONENT
// ==========================================
export default function TvLoungeSection() {
  const [activeCard, setActiveCard] = useState<TvLoungePlan | null>(null);

  return (
    <section className="py-12 bg-gradient-to-b from-slate-50 via-purple-50/30 to-slate-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        
        {/* SECTION HEADER */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="bg-purple-100 text-[#8C3499] text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-xs">
            🛋️ Ultimate Living Experience
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-purple-950 tracking-tight">
            Exquisite TV Lounge & Media Wall Designs
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Transform the core of your home into a breathtaking masterpiece. Explore our exclusive <span className="font-bold text-[#8C3499]">TV Lounge & Entertainment Interior Concepts</span> crafted for modern lifestyles.
          </p>
        </div>

        {/* 1. VIDEO BANNER SECTION */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm sm:text-base font-bold text-purple-950 flex items-center gap-2">
              <span>▶️</span> Watch Walkthrough: Modern TV Lounge Concepts
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
              <source src="/4.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Video Overlay Info */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 sm:p-8">
              <span className="bg-[#8C3499] text-white text-[10px] font-extrabold px-3 py-1 rounded-md w-max mb-2 uppercase">
                Featured Walkthrough
              </span>
              <h4 className="text-white text-base sm:text-xl font-bold">
                Designing the Perfect Family Entertainment Core
              </h4>
              <p className="text-gray-300 text-xs sm:text-sm mt-1 max-w-2xl">
                Discover innovative media wall paneling, lighting setups, and comfortable seating arrangements designed to elevate your daily living.
              </p>
            </div>
          </div>
        </div>

        {/* 2. CARDS GRID SECTION */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <h3 className="text-base sm:text-lg font-extrabold text-purple-950 flex items-center gap-2">
              <span>✨</span> Popular TV Lounge Interior Concepts
            </h3>
            <span className="text-xs text-slate-500">Click any card for details</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tvLoungePlansData.map((plan, index) => (
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
                    🛋️ TV Lounge Design
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
              {activeCard.subtitle} Lounge Concept
            </span>

            <h3 className="text-lg font-extrabold text-purple-950">
              {activeCard.title}
            </h3>

            <div className="h-48 rounded-xl overflow-hidden bg-slate-900">
              <img src={activeCard.image} alt={activeCard.title} className="w-full h-full object-cover" />
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {activeCard.description} This custom styling concept ensures maximum elegance, optical space enhancement, and a cozy atmosphere for your family.
            </p>

            <div className="pt-2 flex gap-3">
              <a 
                href={`https://wa.me/923000000000?text=I want complete details about the TV Lounge concept: ${encodeURIComponent(activeCard.title)}`}
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