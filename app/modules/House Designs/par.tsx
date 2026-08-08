"use client";

import { useState } from "react";

// ==========================================
// TYPES DEFINITION
// ==========================================
interface ParkingPlan {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
}

// ==========================================
// PARKING & GARAGE CARDS DATA
// ==========================================
const parkingPlansData: ParkingPlan[] = [
  {
    id: "park1",
    title: "Modern Single Car Covered Porch",
    subtitle: "Compact & Secure",
    description: "A sleek wooden slat canopy carport designed for standard residential plots, offering direct weather protection.",
    features: ["Weather Shield", "Wooden Slat Roof", "Compact Design"],
    image: "/cr1.jpg",
  },
  {
    id: "park2",
    title: "Double Car Luxury Garage",
    subtitle: "Spacious & Automatic",
    description: "Fully enclosed two-car garage with automated roller shutters, tiled flooring, and built-in tool storage.",
    features: ["Automatic Shutters", "Epoxy Tiled Floor", "Tool Storage"],
    image: "/cr2.jpg",
  },
  {
    id: "park3",
    title: "Open-Air Stylish Driveway Parking",
    subtitle: "Grand Entrance",
    description: "Paver-stone paved driveway layout leading up to the main porch, surrounded by neat landscape lighting.",
    features: ["Paver Stones", "Landscape Lights", "Easy Access"],
    image: "/mo4.jpg",
  },
  {
    id: "park4",
    title: "Basement Multi-Car Ramp Parking",
    subtitle: "Basement Level",
    description: "High-efficiency underground parking ramp concept optimized for multi-story homes or luxury villas.",
    features: ["Underground Ramp", "Multi-Car Capacity", "Secure Gate"],
    image: "/cr5.jpg",
  },
  {
    id: "park5",
    title: "Smart EV Charging Port Porch",
    subtitle: "Future Ready",
    description: "Contemporary garage space equipped with dedicated electric vehicle (EV) charging stations and solar canopy.",
    features: ["EV Charging Hub", "Solar Roof", "Smart Lighting"],
    image: "/kb7.jpg",
  },
  {
    id: "park6",
    title: "Pergola Style Open Carport",
    subtitle: "Architectural Blend",
    description: "Modern metallic pergola structure integrated with climbing greenery for an eco-friendly shaded car shelter.",
    features: ["Eco Pergola", "Metallic Frame", "Natural Shade"],
    image: "/cr7.jpg",
  },
  {
    id: "park7",
    title: "Sleek Glass Wall Show Garage",
    subtitle: "Exhibition Style",
    description: "Glass partition garage concept allowing you to showcase your luxury vehicles directly from the living room.",
    features: ["Glass Partition", "Showroom Vibe", "Spotlighting"],
    image: "/cr8.jpg",
  },
  {
    id: "park8",
    title: "Compact Side-Alley Parking",
    subtitle: "Space Saving",
    description: "Clever utilization of side setback areas transformed into a secure, narrow vehicle parking bay.",
    features: ["Setback Usage", "Narrow Fit", "Hidden Gate"],
    image: "/cr9.jpg",
  },
  {
    id: "park9",
    title: "Grand Estate Multi-Vehicle Courtyard",
    subtitle: "Aristocratic Layout",
    description: "Circular driveway courtyard design capable of accommodating multiple guest vehicles for high-end estates.",
    features: ["Circular Layout", "Guest Parking", "Royal Fountain Center"],
    image: "/cr.jpg",
  },
  {
    id: "park10",
    title: "Penthouse Stacking Lift Parking",
    subtitle: "High-Tech Mechanical",
    description: "Advanced hydraulic vertical parking lift system designed for maximum space efficiency in modern urban plots.",
    features: ["Hydraulic Lift", "Vertical Stacking", "Urban Solution"],
    image: "/c.jpg",
  },
];

// ==========================================
// PARKING SECTION COMPONENT
// ==========================================
export default function ParkingSection() {
  const [activeCard, setActiveCard] = useState<ParkingPlan | null>(null);

  return (
    <section className="py-12 bg-gradient-to-b from-slate-50 via-purple-50/30 to-slate-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        
        {/* SECTION HEADER */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="bg-purple-100 text-[#8C3499] text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-xs">
            🚗 Secure Vehicle Parking
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-purple-950 tracking-tight">
            Exquisite Parking & Garage Concepts
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Protect your vehicles in style. Explore our exclusive <span className="font-bold text-[#8C3499]">Car Parking & Garage Layout Concepts</span> crafted for modern architectural elegance.
          </p>
        </div>

        {/* 1. VIDEO BANNER SECTION */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm sm:text-base font-bold text-purple-950 flex items-center gap-2">
              <span>▶️</span> Watch Walkthrough: Modern Garage & Parking Concepts
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
              <source src="/2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Video Overlay Info */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 sm:p-8">
              <span className="bg-[#8C3499] text-white text-[10px] font-extrabold px-3 py-1 rounded-md w-max mb-2 uppercase">
                Featured Walkthrough
              </span>
              <h4 className="text-white text-base sm:text-xl font-bold">
                Designing Safe, Accessible & Smart Residential Parking Spaces
              </h4>
              <p className="text-gray-300 text-xs sm:text-sm mt-1 max-w-2xl">
                Discover innovative canopy designs, EV charging setups, and optimal driveway turnarounds to enhance your home's exterior security.
              </p>
            </div>
          </div>
        </div>

        {/* 2. CARDS GRID SECTION */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <h3 className="text-base sm:text-lg font-extrabold text-purple-950 flex items-center gap-2">
              <span>✨</span> Popular Parking & Garage Concepts
            </h3>
            <span className="text-xs text-slate-500">Click any card for details</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {parkingPlansData.map((plan, index) => (
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
                    🚗 Parking & Garage
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
              {activeCard.subtitle} Parking Concept
            </span>

            <h3 className="text-lg font-extrabold text-purple-950">
              {activeCard.title}
            </h3>

            <div className="h-48 rounded-xl overflow-hidden bg-slate-900">
              <img src={activeCard.image} alt={activeCard.title} className="w-full h-full object-cover" />
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {activeCard.description} This custom parking and garage design layout ensures maximum vehicle safety, weather protection, and smooth accessibility for modern residences.
            </p>

            <div className="pt-2 flex gap-3">
              <a 
                href={`https://wa.me/923000000000?text=I want complete details about the Parking concept: ${encodeURIComponent(activeCard.title)}`}
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