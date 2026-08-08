"use client";

import { useState } from "react";

// ==========================================
// TYPES DEFINITION
// ==========================================
interface BuildingSection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
}

// ==========================================
// BUILDING SECTIONS CARDS DATA
// ==========================================
const buildingSectionsData: BuildingSection[] = [
  {
    id: "sec1",
    title: "Basement & Underground Parking",
    subtitle: "Sub-Level Utility",
    description: "Dedicated lower level for multi-vehicle parking, security control rooms, water reservoirs, and MEP services.",
    features: ["Vehicle Parking", "Water Storage", "MEP Plant Room"],
    image: "/,1.jpg",
  },
  {
    id: "sec2",
    title: "Ground Floor Lobby & Retail Hub",
    subtitle: "Main Entrance",
    description: "The welcoming face of the building featuring a grand reception lobby, concierge desk, high ceilings, and commercial storefronts.",
    features: ["Grand Reception", "Concierge Desk", "Retail Shops"],
    image: "/,,.jpg",
  },
  {
    id: "sec3",
    title: "Mezzanine Floor Offices",
    subtitle: "Elevated Workspace",
    description: "An intermediate floor overlooking the ground lobby, perfectly designed for executive corporate offices or management suites.",
    features: ["Open Workspace", "Glass Partition", "Mezzanine View"],
    image: "/,,,.jpg",
  },
  {
    id: "sec4",
    title: "Typical Residential Apartment Floors",
    subtitle: "Living Quarters",
    description: "Standard repeating floors housing luxurious 1, 2, and 3-bedroom apartments with balconies and modern kitchens.",
    features: ["Multi-Bed Units", "Private Balcony", "Smart Layouts"],
    image: "/,22.jpg",
  },
  {
    id: "sec5",
    title: "Commercial & Corporate Office Floors",
    subtitle: "Business Hub",
    description: "Spacious open-floor-plate office spaces equipped with advanced IT trunking, conference rooms, and workstation layouts.",
    features: ["Conference Hall", "IT Infrastructure", "Open Floor Plan"],
    image: "/,,,,,.jpg",
  },
  {
    id: "sec6",
    title: "Building Amenities & Fitness Club",
    subtitle: "Health & Leisure",
    description: "Dedicated lifestyle floor featuring an indoor gymnasium, indoor swimming pool, spa, and residents' lounge area.",
    features: ["Indoor Gym", "Swimming Pool", "Spa & Sauna"],
    image: "/,,,,,,.jpg",
  },
  {
    id: "sec7",
    title: "Rooftop Sky Garden & Lounge",
    subtitle: "Panoramic Views",
    description: "The topmost open-air recreational zone featuring landscaped green patches, seating pergolas, and stunning city views.",
    features: ["Sky Garden", "BBQ Area", "City Skyline View"],
    image: "/,,,,,,,.jpg",
  },
  {
    id: "sec8",
    title: "Penthouse Luxury Suites",
    subtitle: "Exclusive Living",
    description: "Ultra-luxury multi-level penthouse suites on top floors with private elevators, double-height ceilings, and private pools.",
    features: ["Private Elevator", "Double-Height", "Private Pool"],
    image: "/,,,,,,,,.jpg",
  },
  {
    id: "sec9",
    title: "Service Floor & Mechanical Penthouse",
    subtitle: "Building Core",
    description: "Critical engineering layer housing HVAC chillers, water booster pumps, elevator motor rooms, and electrical switchgears.",
    features: ["HVAC Chillers", "Elevator Machine Room", "Electrical Panel"],
    image: "/,11.jpg",
  },
  {
    id: "sec10",
    title: "Rooftop Helipad & Communication Mast",
    subtitle: "Aviation & Tech",
    description: "Upper roof level engineered with emergency helicopter landing pad and structural masts for telecom antennas.",
    features: ["Helipad", "Telecom Masts", "Emergency Exit"],
    image: "/,10.jpg",
  },
];

// ==========================================
// BUILDING SECTIONS COMPONENT
// ==========================================
export default function BuildingSectionsComponent() {
  const [activeCard, setActiveCard] = useState<BuildingSection | null>(null);

  return (
    <section className="py-12 bg-[#0A0314] font-sans text-white">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        
        {/* SECTION HEADER */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="bg-[#1D0932] text-purple-300 text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-xs border border-purple-900">
            🏢 Architectural Zoning
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Building Sections & Floor Layouts
          </h2>
          <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed">
            Understand the complete structural anatomy. Explore our detailed <span className="font-bold text-[#8C3499]">Building Sections & Functional Floors</span> designed for modern vertical architecture.
          </p>
        </div>

        {/* 1. VIDEO BANNER SECTION */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <span>▶️</span> Watch Walkthrough: Modern Building Architecture & Floors
            </h3>
            <span className="text-xs font-semibold text-purple-300">HD Walkthrough</span>
          </div>

          <div className="relative w-full h-[280px] sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-purple-900 bg-black">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover opacity-90"
            >
              <source src="/1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Video Overlay Info */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0314] via-transparent to-transparent flex flex-col justify-end p-6 sm:p-8">
              <span className="bg-[#8C3499] text-white text-[10px] font-extrabold px-3 py-1 rounded-md w-max mb-2 uppercase">
                Featured Walkthrough
              </span>
              <h4 className="text-white text-base sm:text-xl font-bold">
                Exploring Vertical Zoning, Core Circulation & Building Infrastructure
              </h4>
              <p className="text-purple-200/80 text-xs sm:text-sm mt-1 max-w-2xl">
                Discover how basements, commercial lobbies, residential zones, and rooftop amenities seamlessly integrate into a high-rise structure.
              </p>
            </div>
          </div>
        </div>

        {/* 2. CARDS GRID SECTION */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between border-b border-purple-950 pb-3">
            <h3 className="text-base sm:text-lg font-extrabold text-white flex items-center gap-2">
              <span>✨</span> Key Building Sections & Floors
            </h3>
            <span className="text-xs text-purple-400">Click any card for details</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {buildingSectionsData.map((section, index) => (
              <div 
                key={section.id}
                onClick={() => setActiveCard(section)}
                className="bg-[#120524] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-[#230C3F] flex flex-col transition-all duration-300 group cursor-pointer hover:border-[#8C3499]"
              >
                {/* Card Image */}
                <div className="relative h-48 overflow-hidden bg-black">
                  <img 
                    src={section.image} 
                    alt={section.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120524] via-transparent to-transparent"></div>
                  <span className="absolute top-3 left-3 bg-[#8C3499] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-lg shadow">
                    #{index + 1} • {section.subtitle}
                  </span>
                  <span className="absolute bottom-3 left-3 text-white text-xs font-semibold bg-black/60 backdrop-blur px-2.5 py-1 rounded-md">
                    🏢 Building Section
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-5 flex flex-col flex-1 space-y-3">
                  <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-purple-300 transition leading-snug">
                    {section.title}
                  </h4>
                  <p className="text-xs text-purple-200/70 line-clamp-2">
                    {section.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#1D0932] flex-1">
                    {section.features.map((feat, idx) => (
                      <span key={idx} className="bg-[#1D0932] text-purple-200 text-[10px] font-bold px-2 py-0.5 rounded-md border border-[#2D124D]">
                        ✓ {feat}
                      </span>
                    ))}
                  </div>

                  <button className="w-full mt-2 py-2.5 bg-[#1D0932] hover:bg-[#8C3499] text-white text-xs font-bold rounded-xl transition shadow cursor-pointer">
                    View Section Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* POPUP MODAL FOR CARD CLICK */}
      {activeCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
          <div className="bg-[#120524] border border-[#2D124D] rounded-3xl max-w-xl w-full p-6 relative shadow-2xl space-y-4 text-white">
            <button 
              onClick={() => setActiveCard(null)}
              className="absolute top-4 right-4 bg-[#1D0932] hover:bg-[#8C3499] text-purple-200 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition cursor-pointer"
            >
              ✕
            </button>

            <span className="bg-[#1D0932] text-purple-300 text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase border border-[#2D124D]">
              {activeCard.subtitle} Building Zone
            </span>

            <h3 className="text-lg font-extrabold text-white">
              {activeCard.title}
            </h3>

            <div className="h-48 rounded-xl overflow-hidden bg-black">
              <img src={activeCard.image} alt={activeCard.title} className="w-full h-full object-cover" />
            </div>

            <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed">
              {activeCard.description} This critical architectural section ensures proper zoning, structural safety, compliance with building codes, and optimal utility distribution throughout the development.
            </p>

            <div className="pt-2 flex gap-3">
              <a 
                href={`https://wa.me/923000000000?text=I want complete details about the Building Section: ${encodeURIComponent(activeCard.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 rounded-xl font-bold text-xs text-center transition flex items-center justify-center gap-2 shadow"
              >
                <span>💬</span> Discuss on WhatsApp
              </a>
              <button 
                onClick={() => setActiveCard(null)}
                className="px-5 py-3 bg-[#1D0932] hover:bg-purple-900 text-purple-200 rounded-xl font-bold text-xs transition cursor-pointer"
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