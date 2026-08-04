"use client";

import React from "react";

export default function ContactUsPage() {
  // Sample data for falling/floating houses effect
  const fallingHouses = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 6 + Math.random() * 6,
    size: 16 + Math.random() * 14,
    rotation: Math.random() * 360,
  }));

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans flex flex-col justify-between relative overflow-hidden">
      
      {/* Background Falling Houses Animation Elements */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {fallingHouses.map((p) => (
          <span
            key={p.id}
            className="absolute animate-fall-leaf select-none filter drop-shadow-[0_2px_4px_rgba(107,33,168,0.4)]"
            style={{
              left: `${p.left}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              fontSize: `${p.size}px`,
              transform: `rotate(${p.rotation}deg)`,
            }}
          >
            🏠
          </span>
        ))}
      </div>

      {/* Main Container */}
      <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-6 relative z-10">
        
        {/* Page Title */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Get in Touch
          </h1>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Box: Contact Information */}
          <div className="lg:col-span-4 bg-gradient-to-b from-[#8C3499] to-[#6A2076] rounded-3xl p-6 sm:p-8 text-white shadow-xl space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold border-b border-purple-500/40 pb-3">
              Contact Information
            </h2>
            
            <div className="space-y-6">
              {/* Phone Section */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-white/10 rounded-xl text-xl mt-1">📞</div>
                <div className="space-y-1">
                  <p className="text-xs text-purple-200 uppercase tracking-widest font-semibold">Phone</p>
                  <p className="text-sm font-bold">+92 ----------</p>
                  <p className="text-sm font-bold">+92 -----------</p>
                </div>
              </div>

              {/* Head Office Address Section */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-white/10 rounded-xl text-xl mt-1">📍</div>
                <div className="space-y-1">
                  <p className="text-xs text-purple-200 uppercase tracking-widest font-semibold">Head Office Address</p>
                  <p className="text-sm leading-relaxed">
                    469, G-1,<br />
                    Okara, Bungalow Gugara,<br />
                    Lahore, Punjab, Pakistan - 54600
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Box: Store Pickup / Maps Section */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex flex-col">
            
            {/* Header Banner */}
            <div className="bg-[#8C3499] px-6 py-4 text-white flex items-center gap-3">
              <span className="text-xl">📍</span>
              <h2 className="text-lg sm:text-xl font-bold">Our Store Pickup</h2>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Location 1 & Location 2 Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Location 1: Lahore */}
                <div className="border border-slate-200 rounded-2xl p-4 space-y-3 shadow-sm bg-slate-50/50">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-slate-900 flex items-center gap-1.5 text-sm">
                      <span className="text-purple-700">📍</span> Location 1: Lahore
                    </h3>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-xs text-purple-700 font-semibold hover:underline flex items-center gap-1"
                    >
                      Open in Google Maps ↗
                    </a>
                  </div>
                  
                  {/* Google Map Embed Frame */}
                  <div className="relative h-44 w-full rounded-xl overflow-hidden border border-slate-200">
                    <iframe 
                      title="Lahore Map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.0!2d74.28!3d31.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDI4JzEyLjAiTiA3NMKwMTYnNDguMCJF!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      loading="lazy">
                    </iframe>
                  </div>

                  <div className="text-xs space-y-1 pt-1 text-slate-600">
                    <p className="font-medium text-slate-800">12 B/1, Okara, Lahore</p>
                    <p className="font-semibold text-purple-900">Phone No: 03---------</p>
                  </div>
                </div>

                {/* Location 2: Okara */}
                <div className="border border-slate-200 rounded-2xl p-4 space-y-3 shadow-sm bg-slate-50/50">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-slate-900 flex items-center gap-1.5 text-sm">
                      <span className="text-purple-700">📍</span> Location 2: Okara
                    </h3>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-xs text-purple-700 font-semibold hover:underline flex items-center gap-1"
                    >
                      Open in Google Maps ↗
                    </a>
                  </div>
                  
                  {/* Google Map Embed Frame */}
                  <div className="relative h-44 w-full rounded-xl overflow-hidden border border-slate-200">
                    <iframe 
                      title="Okara Map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.0!2d74.53!3d32.50!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDMwJzAwLjAiTiA3NMKwMzInMDAuMCJF!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      loading="lazy">
                    </iframe>
                  </div>

                  <div className="text-xs space-y-1 pt-1 text-slate-600">
                    <p className="font-medium text-slate-800">Lahore, Okara, Bungalow Gugayra, Punjab</p>
                    <p className="font-semibold text-purple-900">Phone No: 03---------</p>
                  </div>
                </div>

              </div>

              {/* Location 3: Gujrat / Hub */}
              <div className="border border-slate-200 rounded-2xl p-4 space-y-2 shadow-sm bg-slate-50/50">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-900 flex items-center gap-1.5 text-sm">
                    <span className="text-purple-700">📍</span> Location 3: Okara Hub
                  </h3>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-xs text-purple-700 font-semibold hover:underline flex items-center gap-1"
                  >
                    Open in Google Maps ↗
                  </a>
                </div>
                <div className="text-xs text-slate-600 space-y-1">
                  <p className="font-medium text-slate-800">Store Pickup Hub, Main GT Road, Okara</p>
                  <p className="font-semibold text-purple-900">Phone No: 03----------</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Floating WhatsApp Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="https://whatsapp.com" 
          target="_blank" 
          rel="noreferrer" 
          className="w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center text-white text-3xl shadow-2xl hover:scale-110 transition duration-300"
        >
          💬
        </a>
      </div>

    </div>
  );
}