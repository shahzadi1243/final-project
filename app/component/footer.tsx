"use client";

import React from "react";

export default function Page() {
  return (
   
     
       
      <div>

      {/* Floating WhatsApp Button Function */}
      <FloatingWhatsApp />
    </div>
  );
}

// Professional Footer Function Component
function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-950 via-indigo-950 to-gray-950 text-gray-200 py-4 px-4 mt-auto border-t border-indigo-500/30 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        
        <div>
          <h3 className="text-sm font-bold text-indigo-400">GharPlans Pakistan</h3>
          <p className="text-xs text-gray-300">📞 +92 3--------- | ✉️ shahzadirai55@gmail.com</p>
          <p className="text-[10px] text-gray-400">© 2026 GharPlans Pakistan. All rights reserved.</p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-1.5">
          <span className="text-xs font-semibold text-indigo-300">Connect With Us:</span>
          <div className="flex items-center gap-2">
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="w-7 h-7 bg-indigo-900/40 hover:bg-indigo-600/60 border border-indigo-500/30 rounded-full flex items-center justify-center transition text-xs shadow-md" title="WhatsApp">🟢</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-7 h-7 bg-indigo-900/40 hover:bg-indigo-600/60 border border-indigo-500/30 rounded-full flex items-center justify-center transition text-xs shadow-md" title="Facebook">📘</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-7 h-7 bg-indigo-900/40 hover:bg-indigo-600/60 border border-indigo-500/30 rounded-full flex items-center justify-center transition text-xs shadow-md" title="Instagram">📸</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-7 h-7 bg-indigo-900/40 hover:bg-indigo-600/60 border border-indigo-500/30 rounded-full flex items-center justify-center transition text-xs shadow-md" title="YouTube">▶️</a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="w-7 h-7 bg-indigo-900/40 hover:bg-indigo-600/60 border border-indigo-500/30 rounded-full flex items-center justify-center transition text-xs shadow-md" title="TikTok">🎵</a>
            <a href="https://imo.im" target="_blank" rel="noopener noreferrer" className="w-7 h-7 bg-indigo-900/40 hover:bg-indigo-600/60 border border-indigo-500/30 rounded-full flex items-center justify-center transition text-xs shadow-md" title="IMO">💬</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

// Floating WhatsApp Button Function Component
function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a 
        href="https://whatsapp.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-xl transition transform hover:scale-110 text-3xl"
        title="Chat on WhatsApp"
      >
        💬
      </a>
    </div>
  );
}