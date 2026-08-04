"use client";

import { useState } from "react";
import Image from "next/image";

export default function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-purple-950 font-sans text-slate-100">
      
      {/* Normal Top Navbar - Bilkul saaf aur top par */}
      <div className="w-full bg-purple-950 shadow-lg border-b border-purple-900 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="px-4 py-2 bg-gradient-to-r from-purple-800 to-indigo-900 text-white rounded-xl font-bold text-sm shadow-md hover:opacity-95 transition flex items-center gap-2 border border-purple-700/50"
            >
              🏠 Gharplans
            </a>
            <span className="text-xs font-semibold text-purple-300 uppercase tracking-wider">Dashboard</span>
          </div>

          {/* Dropdown Menu */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="px-4 py-2 bg-purple-900/80 text-purple-200 rounded-xl font-bold text-sm hover:bg-purple-900 transition flex items-center gap-2 cursor-pointer border border-purple-700/50"
            >
              Menu ▾
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-purple-900 rounded-2xl shadow-2xl border border-purple-700 py-2 z-50">
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
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 space-y-20 md:space-y-28">
          
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="bg-purple-900/40 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-purple-800/60 space-y-4 hover:-translate-y-2 hover:shadow-purple-900/50 transition-all duration-300 group cursor-pointer">
              <h3 className="text-2xl font-black text-white group-hover:text-purple-300 transition-colors text-center">House Design</h3>
              <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-inner bg-slate-900">
                <Image src="/1.jpg" alt="House Design" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            </div>

            <div className="space-y-4 px-2 sm:px-4 text-center md:text-left">
              <span className="text-purple-300 font-bold uppercase tracking-widest text-xs bg-purple-900/80 px-3.5 py-1.5 rounded-full inline-block border border-purple-700/50 shadow-sm">
                Modern Architecture
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                Create Your Dream House Design With Experts
              </h2>
              <p className="text-purple-200/80 text-sm sm:text-base leading-relaxed">
                Explore exceptional modern house layouts, stunning elevations, and high-quality construction plans tailored specifically to your lifestyle and needs.
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4 px-2 sm:px-4 text-center md:text-left order-2 md:order-1">
              <span className="text-purple-300 font-bold uppercase tracking-widest text-xs bg-purple-900/80 px-3.5 py-1.5 rounded-full inline-block border border-purple-700/50 shadow-sm">
                Smart Estimation
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                Accurate Construction Calculators
              </h2>
              <p className="text-purple-200/80 text-sm sm:text-base leading-relaxed">
                Calculate your material requirements efficiently—from concrete and bricks to steel estimates—saving both your precious time and budget.
              </p>
            </div>

            <div className="bg-purple-900/40 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-purple-800/60 space-y-4 hover:-translate-y-2 hover:shadow-purple-900/50 transition-all duration-300 group cursor-pointer order-1 md:order-2">
              <h3 className="text-2xl font-black text-white group-hover:text-purple-300 transition-colors text-center">Construction Calculators</h3>
              <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-inner bg-slate-900">
                <Image src="/2.jpg" alt="Construction Calculators" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="bg-purple-900/40 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-purple-800/60 space-y-4 hover:-translate-y-2 hover:shadow-purple-900/50 transition-all duration-300 group cursor-pointer">
              <h3 className="text-2xl font-black text-white group-hover:text-purple-300 transition-colors text-center">Shop</h3>
              <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-inner bg-slate-900">
                <Image src="/3.jpg" alt="Shop" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            </div>

            <div className="space-y-4 px-2 sm:px-4 text-center md:text-left">
              <span className="text-purple-300 font-bold uppercase tracking-widest text-xs bg-purple-900/80 px-3.5 py-1.5 rounded-full inline-block border border-purple-700/50 shadow-sm">
                Trusted Products
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                Top Quality Materials & Chemicals
              </h2>
              <p className="text-purple-200/80 text-sm sm:text-base leading-relaxed">
                Get access to Pakistan's finest termite control solutions, waterproofing sprays, and construction essentials delivered right to your doorstep.
              </p>
            </div>
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4 px-2 sm:px-4 text-center md:text-left order-2 md:order-1">
              <span className="text-purple-300 font-bold uppercase tracking-widest text-xs bg-purple-900/80 px-3.5 py-1.5 rounded-full inline-block border border-purple-700/50 shadow-sm">
                Portfolio
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                Explore Our Ongoing & Finished Projects
              </h2>
              <p className="text-purple-200/80 text-sm sm:text-base leading-relaxed">
                Take a look at our expert engineering, solid grey structures, and high-end interior and exterior execution across various prime locations.
              </p>
            </div>

            <div className="bg-purple-900/40 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-purple-800/60 space-y-4 hover:-translate-y-2 hover:shadow-purple-900/50 transition-all duration-300 group cursor-pointer order-1 md:order-2">
              <h3 className="text-2xl font-black text-white group-hover:text-purple-300 transition-colors text-center">Our Projects</h3>
              <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-inner bg-slate-900">
                <Image src="/1.jpg" alt="Our Projects" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Slim Footer with Social Icons */}
      <footer className="bg-purple-950 text-purple-200 py-3 px-6 border-t border-purple-900">
        <div className="container mx-auto max-w-screen-xl flex flex-col sm:flex-row items-center justify-between text-xs gap-3">
          <p>© 2026 Gharplans.pk. All rights reserved.</p>
          
          <div className="flex items-center gap-3 text-sm">
            <a href="#facebook" title="Facebook" className="hover:text-white transition">📘</a>
            <a href="#tiktok" title="TikTok" className="hover:text-white transition">🎵</a>
            <a href="#youtube" title="YouTube" className="hover:text-white transition">▶️</a>
            <a href="#imo" title="IMO" className="hover:text-white transition">💬</a>
            <a href="#instagram" title="Instagram" className="hover:text-white transition">📸</a>
            <a href="#whatsapp" title="WhatsApp" className="hover:text-white transition">🟢</a>
          </div>

          <p className="text-purple-300 font-medium">Built with precision</p>
        </div>
      </footer>
    </div>
  );
}