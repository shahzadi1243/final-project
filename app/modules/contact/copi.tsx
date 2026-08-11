"use client";

import React, { useState } from "react";

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
    <div style={{ backgroundColor: "#030307", minHeight: "100vh", color: "#f3e8ff", width: "100%" }} className="font-sans flex flex-col justify-between relative overflow-hidden">
      
      {/* Background Falling Houses Animation Elements with Deep Glow */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {fallingHouses.map((p) => (
          <span
            key={p.id}
            className="absolute animate-fall-leaf select-none filter drop-shadow-[0_2px_8px_rgba(147,51,235,0.2)] opacity-30"
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
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-amber-300">Touch</span>
          </h1>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Box: Contact Information */}
          <div className="lg:col-span-4 bg-[#0a0514] rounded-3xl p-6 sm:p-8 text-white shadow-2xl border border-purple-950/80 space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold border-b border-purple-900/60 pb-3 text-purple-200">
              Contact Information
            </h2>
            
            <div className="space-y-6">
              {/* Phone Section */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-[#130826] rounded-xl text-xl mt-1 border border-purple-900/50 shadow-inner">📞</div>
                <div className="space-y-1">
                  <p className="text-xs text-purple-400 uppercase tracking-widest font-semibold">Phone</p>
                  <p className="text-sm font-bold text-slate-200">+92 ----------</p>
                  <p className="text-sm font-bold text-slate-200">+92 -----------</p>
                </div>
              </div>

              {/* Head Office Address Section */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-[#130826] rounded-xl text-xl mt-1 border border-purple-900/50 shadow-inner">📍</div>
                <div className="space-y-1">
                  <p className="text-xs text-purple-400 uppercase tracking-widest font-semibold">Head Office Address</p>
                  <p className="text-sm leading-relaxed text-slate-300">
                    469, G-1,<br />
                    Okara, Bungalow Gugara,<br />
                    Lahore, Punjab, Pakistan - 54600
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Box: Store Pickup / Maps Section */}
          <div className="lg:col-span-8 bg-[#0a0514] rounded-3xl border border-purple-950/80 shadow-2xl overflow-hidden flex flex-col text-white">
            
            {/* Header Banner */}
            <div className="bg-[#06030c] px-6 py-4 text-white flex items-center gap-3 border-b border-purple-950/80">
              <span className="text-xl">📍</span>
              <h2 className="text-lg sm:text-xl font-bold text-purple-200">Our Store Pickup</h2>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Location 1 & Location 2 Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Location 1: Lahore */}
                <div className="border border-purple-950/80 rounded-2xl p-4 space-y-3 shadow-inner bg-[#070310]">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-white flex items-center gap-1.5 text-sm">
                      <span className="text-purple-400">📍</span> Location 1: Lahore
                    </h3>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-xs text-purple-400 font-semibold hover:underline flex items-center gap-1"
                    >
                      Open in Google Maps ↗
                    </a>
                  </div>
                  
                  {/* Google Map Embed Frame */}
                  <div className="relative h-44 w-full rounded-xl overflow-hidden border border-purple-950/80 filter contrast-125 brightness-75">
                    <iframe 
                      title="Lahore Map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.0!2d74.28!3d31.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDI4JzEyLjAiTiA3NMKwMTYnNDguMCJF!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      loading="lazy">
                    </iframe>
                  </div>

                  <div className="text-xs space-y-1 pt-1 text-slate-400">
                    <p className="font-medium text-slate-200">12 B/1, Okara, Lahore</p>
                    <p className="font-semibold text-purple-400">Phone No: 03---------</p>
                  </div>
                </div>

                {/* Location 2: Okara */}
                <div className="border border-purple-950/80 rounded-2xl p-4 space-y-3 shadow-inner bg-[#070310]">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-white flex items-center gap-1.5 text-sm">
                      <span className="text-purple-400">📍</span> Location 2: Okara
                    </h3>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-xs text-purple-400 font-semibold hover:underline flex items-center gap-1"
                    >
                      Open in Google Maps ↗
                    </a>
                  </div>
                  
                  {/* Google Map Embed Frame */}
                  <div className="relative h-44 w-full rounded-xl overflow-hidden border border-purple-950/80 filter contrast-125 brightness-75">
                    <iframe 
                      title="Okara Map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.0!2d74.53!3d32.50!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDMwJzAwLjAiTiA3NMKwMzInMDAuMCJF!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      loading="lazy">
                    </iframe>
                  </div>

                  <div className="text-xs space-y-1 pt-1 text-slate-400">
                    <p className="font-medium text-slate-200">Lahore, Okara, Bungalow Gugayra, Punjab</p>
                    <p className="font-semibold text-purple-400">Phone No: 03---------</p>
                  </div>
                </div>

              </div>

              {/* Location 3: Gujrat / Hub */}
              <div className="border border-purple-950/80 rounded-2xl p-4 space-y-2 shadow-inner bg-[#070310]">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-white flex items-center gap-1.5 text-sm">
                    <span className="text-purple-400">📍</span> Location 3: Okara Hub
                  </h3>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-xs text-purple-400 font-semibold hover:underline flex items-center gap-1"
                  >
                    Open in Google Maps ↗
                  </a>
                </div>
                <div className="text-xs text-slate-400 space-y-1">
                  <p className="font-medium text-slate-200">Store Pickup Hub, Main GT Road, Okara</p>
                  <p className="font-semibold text-purple-400">Phone No: 03----------</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Floating WhatsApp Action Button */}
      

    </div>
  );
}