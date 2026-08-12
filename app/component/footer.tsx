import React from "react";

export default function Footer() {
  // Social links with proper URLs and icons/names
  const socialLinks = [
    { icon: "🟢", name: "WhatsApp", href: "https://wa.me/923000000000" }, // Apna WhatsApp number yahan dalein
    { icon: "📘", name: "Facebook", href: "https://facebook.com" },
    { icon: "📸", name: "Instagram", href: "https://instagram.com" },
    { icon: "▶️", name: "YouTube", href: "https://youtube.com" },
    { icon: "🎵", name: "TikTok", href: "https://tiktok.com" },
    { icon: "💬", name: "Messenger", href: "https://messenger.com" },
  ];

  return (
    <footer className="w-full bg-gradient-to-r from-gray-950 via-indigo-950 to-gray-950 text-gray-200 py-6 px-4 mt-auto border-t border-indigo-500/30 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div>
          <h3 className="text-sm font-bold text-indigo-400">House Designing Pakistan</h3>
          <p className="text-xs text-gray-300">📞 +92 3... | ✉️ shahzadirai55@gmail.com</p>
          <p className="text-[10px] text-gray-400">© 2026 GharPlans Pakistan. All rights reserved.</p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-1.5">
          <span className="text-xs font-semibold text-indigo-300">Connect With Us:</span>
          <div className="flex items-center gap-2">
            {socialLinks.map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                title={item.name}
                className="w-7 h-7 bg-indigo-900/40 hover:bg-indigo-600/60 border border-indigo-500/30 rounded-full flex items-center justify-center transition text-xs shadow-md"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}