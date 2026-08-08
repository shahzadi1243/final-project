"use client";

import { useState } from "react";

// ==========================================
// TYPES DEFINITION
// ==========================================
interface SwimmingPoolPlan {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
}

// ==========================================
// SWIMMING POOL CARDS DATA (General & Modern Concepts)
// ==========================================
const swimmingPoolPlansData: SwimmingPoolPlan[] = [
  {
    id: "pool1",
    title: "Modern Infinity Edge Pool",
    subtitle: "Breathtaking Horizon",
    description: "Designed with a vanishing edge that creates a stunning visual illusion of water stretching out into the horizon.",
    features: ["Infinity Edge", "Glass Tile Finish", "Overflow Channel"],
    image: "/ege1.jpg",
  },
  {
    id: "pool2",
    title: "Luxury Backyard Oasis Pool",
    subtitle: "Resort Style",
    description: "Surrounded by lush green vertical gardens, stone pathways, and comfortable lounge beds for daily relaxation.",
    features: ["Lush Landscaping", "Sunken Loungers", "Natural Stones"],
    image: "/ege2.jpg",
  },
  {
    id: "pool3",
    title: "Indoor Heated Swimming Pool",
    subtitle: "All-Season Luxury",
    description: "Fully climate-controlled indoor aquatic space featuring humidity control systems and mood lighting.",
    features: ["Climate Control", "Year-Round Use", "Acoustic Ceilings"],
    image: "/ege3.jpg",
  },
  {
    id: "pool4",
    title: "Rooftop Panoramic View Pool",
    subtitle: "Skyline Elegance",
    description: "Engineered specifically for upper levels and penthouses with structural glass walls and sunset views.",
    features: ["Rooftop Engineering", "Structural Glass", "Sunset Deck"],
    image: "/ege4.jpg",
  },
  {
    id: "pool5",
    title: "Custom Lagoon Style Freeform Pool",
    subtitle: "Natural Organic Curves",
    description: "Curved, organic shapes mimicking natural ponds complete with rock waterfalls and tropical plantation.",
    features: ["Rock Waterfall", "Freeform Shape", "Tropical Vibe"],
    image: "/ege5.jpg",
  },
  {
    id: "pool6",
    title: "Lap Pool for Fitness & Training",
    subtitle: "Active Lifestyle",
    description: "Long, narrow rectangular design optimized for fitness swimming, water aerobics, and daily exercise routines.",
    features: ["Optimized Length", "Anti-Swim Jets", "Non-Slip Tiles"],
    image: "/royal.jpg",
  },
  {
    id: "pool7",
    title: "LED Lit Night Glow Party Pool",
    subtitle: "Vibrant Ambiance",
    description: "Equipped with multi-color underwater fiber-optic lighting and synchronized pool fountain jets.",
    features: ["Fiber-Optic Lights", "Fountain Jets", "Party Deck"],
    image: "/ege7.jpg",
  },
  {
    id: "pool8",
    title: "Minimalist Lap & Spa Combo Pool",
    subtitle: "Relax & Rejuvenate",
    description: "A sleek geometric swimming pool paired with an attached built-in bubbling hydrotherapy spa hot tub.",
    features: ["Attached Spa", "Hydrotherapy Jets", "Geometric Lines"],
    image: "/ege8.jpg",
  },
  {
    id: "pool9",
    title: "Royal Villa Courtyard Pool",
    subtitle: "Aristocratic Charm",
    description: "Positioned centrally within a grand courtyard surrounded by classical arches, marble columns, and patio seating.",
    features: ["Courtyard Center", "Marble Columns", "Classical Arches"],
    image: "/ege9.Jpg",
  },
  {
    id: "pool10",
    title: "Glass Wall Modern Basement Pool",
    subtitle: "Architectural Marvel",
    description: "Ultra-modern submerged or lower-ground pool featuring transparent underwater acrylic viewing panels.",
    features: ["Acrylic Windows", "Underground View", "Designer Lighting"],
    image: "/ege10.jpg",
  },
];

// ==========================================
// SWIMMING POOL SECTION COMPONENT
// ==========================================
export default function SwimmingPoolSection() {
  const [activeCard, setActiveCard] = useState<SwimmingPoolPlan | null>(null);

  return (
    <section className="py-12 bg-gradient-to-b from-slate-50 via-purple-50/30 to-slate-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        
        {/* SECTION HEADER */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="bg-purple-100 text-[#8C3499] text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-xs">
            🏊‍♂️ Ultimate Luxury Experience
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-purple-950 tracking-tight">
            Exquisite Swimming Pool & Aquatic Designs
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Bring resort-style living right to your doorstep. Explore our exclusive <span className="font-bold text-[#8C3499]">Swimming Pool & Backyard Water Feature Concepts</span> crafted for modern architectural elegance.
          </p>
        </div>

        {/* 1. VIDEO BANNER SECTION */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm sm:text-base font-bold text-purple-950 flex items-center gap-2">
              <span>▶️</span> Watch Walkthrough: Modern Swimming Pool Concepts
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
              <source src="/7.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Video Overlay Info */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 sm:p-8">
              <span className="bg-[#8C3499] text-white text-[10px] font-extrabold px-3 py-1 rounded-md w-max mb-2 uppercase">
                Featured Walkthrough
              </span>
              <h4 className="text-white text-base sm:text-xl font-bold">
                Designing the Ultimate Backyard Swimming Pool & Oasis
              </h4>
              <p className="text-gray-300 text-xs sm:text-sm mt-1 max-w-2xl">
                Discover innovative waterproofing techniques, filtration systems, deck lighting, and landscape layouts to elevate your outdoor lifestyle.
              </p>
            </div>
          </div>
        </div>

        {/* 2. CARDS GRID SECTION */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <h3 className="text-base sm:text-lg font-extrabold text-purple-950 flex items-center gap-2">
              <span>✨</span> Popular Swimming Pool Concepts
            </h3>
            <span className="text-xs text-slate-500">Click any card for details</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {swimmingPoolPlansData.map((plan, index) => (
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
                    🏊‍♂️ Swimming Pool
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
              {activeCard.subtitle} Pool Concept
            </span>

            <h3 className="text-lg font-extrabold text-purple-950">
              {activeCard.title}
            </h3>

            <div className="h-48 rounded-xl overflow-hidden bg-slate-900">
              <img src={activeCard.image} alt={activeCard.title} className="w-full h-full object-cover" />
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {activeCard.description} This custom pool design concept ensures advanced structural integrity, high-efficiency filtration, and breathtaking resort aesthetics.
            </p>

            <div className="pt-2 flex gap-3">
              <a 
                href={`https://wa.me/923000000000?text=I want complete details about the Swimming Pool concept: ${encodeURIComponent(activeCard.title)}`}
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