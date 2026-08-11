"use client";

import { useState } from "react";
import Image from "next/image";

export default function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Main content data
  const sections = [
    {
      title: "House Design",
      subtitle: "Modern Architecture",
      description: "Explore exceptional modern house layouts, stunning elevations, and high-quality construction plans tailored specifically to your lifestyle and needs.",
      image: "/vi.jpg",
    },
    {
      title: "Construction Calculators",
      subtitle: "Smart Estimation",
      description: "Calculate your material requirements efficiently—from concrete and bricks to steel estimates—saving both your precious time and budget.",
      image: "/vi1.jpg",
    },
    {
      title: "Shop",
      subtitle: "Trusted Products",
      description: "Get access to Pakistan's finest termite control solutions, waterproofing sprays, and construction essentials delivered right to your doorstep.",
      image: "/vi2.jpg",
    },
    {
      title: "Our Projects",
      subtitle: "Portfolio",
      description: "Take a look at our expert engineering, solid grey structures, and high-end interior and exterior execution across various prime locations.",
      image: "/vi3.jpg",
    },
    {
      title: "Interior Design",
      subtitle: "Aesthetics & Living",
      description: "Bring elegance into every room with custom ceiling layouts, modern kitchen woodwork, and ambient lighting designs tailored for your home.",
      image: "/vi4.jpg",
    },
    {
      title: "Grey Structure",
      subtitle: "Structural Integrity",
      description: "Built to last using top-tier steel, branded cement, and professional supervision to guarantee lifetime foundation safety for your family.",
      image: "/vi5.jpg",
    },
    {
      title: "Protection Services",
      subtitle: "Preventive Care",
      description: "Safeguard your property from seepage, dampness, and termites using professional chemical treatments backed by reliable service warranties.",
      image: "/vi6.jpg",
    },
    {
      title: "Turnkey Contracts",
      subtitle: "End-to-End Solutions",
      description: "Leave everything to us from map approvals down to final handover keys. Enjoy a totally stress-free building process managed by expert contractors.",
      image: "/vi7.jpg",
    },
    {
      title: "Maps & Approvals",
      subtitle: "Legal & Planning",
      description: "Get precise 2D/3D architectural designs, structural drawings, and hassle-free NOC documentation approved smoothly from housing authorities.",
      image: "/vi8.jpg",
    },
  ];

  return (
    <div style={{ backgroundColor: "#1a0b2e", minHeight: "100vh", color: "#f3e8ff", width: "100%" }} className="flex flex-col font-sans">
      
      {/* Normal Top Navbar */}
      <div style={{ backgroundColor: "#1a0b2e" }} className="w-full shadow-lg border-b border-purple-900 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
          <div className="flex items-center gap-3">
            <a
              href="/"
              style={{ backgroundColor: "#2e1065" }}
              className="px-4 py-2 text-white rounded-xl font-bold text-sm shadow-md hover:opacity-95 transition flex items-center gap-2 border border-purple-700/50"
            >
              🏠 Gharplans
            </a>
            <span className="text-xs font-semibold text-purple-300 uppercase tracking-wider">Dashboard</span>
          </div>

          {/* Dropdown Menu */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              style={{ backgroundColor: "#2e1065" }}
              className="px-4 py-2 text-purple-200 rounded-xl font-bold text-sm hover:bg-purple-900 transition flex items-center gap-2 cursor-pointer border border-purple-700/50"
            >
              Menu ▾
            </button>

            {isDropdownOpen && (
              <div style={{ backgroundColor: "#2e1065" }} className="absolute right-0 mt-2 w-56 rounded-2xl shadow-2xl border border-purple-700 py-2 z-50 animate-fadeIn">
                <a href="#calculator" className="block px-4 py-2.5 text-sm text-purple-200 hover:bg-purple-800 hover:text-white font-medium transition">
                  Construction Calculator
                </a>
                <a href="#projects" className="block px-4 py-2.5 text-sm text-purple-200 hover:bg-purple-800 hover:text-white font-medium transition">
                  Our Projects
                </a>
                <a href="#contracts" className="block px-4 py-2.5 text-sm text-purple-200 hover:bg-purple-800 hover:text-white font-medium transition">
                  Contracts
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 py-12">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 space-y-16">
          
          {sections.map((section, index) => {
            const isEven = index % 2 === 0;
            
            // Image component to be reused
            const ServiceImage = () => (
              <div className="relative h-64 sm:h-72 rounded-3xl overflow-hidden shadow-inner bg-purple-950 border-4 border-purple-950 group-hover:border-amber-400/60 transition-colors duration-500">
                <Image 
                  src={section.image} 
                  alt={section.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );

            // Content component to be reused
            const ServiceContent = () => (
              <div className="space-y-4 px-2 sm:px-4 text-center md:text-left">
                <span style={{ backgroundColor: "#2e1065" }} className="text-amber-300 font-black uppercase tracking-widest text-xs px-3.5 py-1.5 rounded-full inline-block border border-purple-700/50 shadow-sm transition-all group-hover:scale-110 group-hover:bg-amber-900/40">
                  {section.subtitle}
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight group-hover:text-amber-300 transition-colors duration-300">
                  {section.title}
                </h2>
                <p className="text-purple-100 text-sm sm:text-base leading-relaxed">
                  {section.description}
                </p>
                <button 
                  className="mt-4 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-purple-950 font-black rounded-full text-sm shadow-lg shadow-amber-500/20 transition transform group-hover:translate-x-2 cursor-pointer"
                >
                  Explore Now →
                </button>
              </div>
            );

            return (
              <div 
                key={index} 
                className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#2e1065]/60 backdrop-blur-sm rounded-[40px] p-6 sm:p-8 border border-purple-800/80 shadow-2xl hover:border-amber-500/60 hover:-translate-y-2 hover:shadow-[0_25px_50px_-12px_rgba(251,191,36,0.3)] transition-all duration-500 group cursor-pointer"
              >
                {/* Image Container */}
                <div className={`md:col-span-5 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                  <ServiceImage />
                </div>

                {/* Text Content Container */}
                <div className={`md:col-span-7 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                  <ServiceContent />
                </div>
                
                {/* Glowing Border Line (Middle Seperator) */}
                <div className="absolute left-0 right-0 bottom-0 h-0.5 bg-purple-800/60 group-hover:bg-amber-500/30 transition-colors duration-500 rounded-full"></div>
              </div>
            );
          })}

        </div>
      </main>

     
    </div>
  );
}