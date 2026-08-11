"use client";

import Link from "next/link";
import { ShoppingCart, ArrowRight } from "lucide-react";

export default function CartPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-xl w-full">
        {/* Header with floating effect */}
        <div className="flex items-center justify-center gap-3 mb-8 group cursor-default">
          <ShoppingCart className="text-purple-400 transform group-hover:scale-110 group-hover:rotate-12 transition duration-300" size={38} />
          <h1 className="text-3xl font-bold text-white tracking-wide group-hover:text-purple-300 transition duration-300">
            Your Shopping Cart
          </h1>
        </div>

        {/* Cart Container with Glow & Hover Effects */}
        <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl shadow-2xl border border-purple-900/50 p-8 text-center transition-all duration-300 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:-translate-y-1">
          
          {/* Animated Icon Box */}
          <div className="w-20 h-20 bg-purple-950/60 text-purple-400 border border-purple-800/50 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl shadow-inner transform transition duration-500 hover:scale-110 hover:rotate-6">
            🛒
          </div>

          <h2 className="text-xl font-semibold text-white mb-2">Your cart is empty</h2>
          <p className="text-gray-300 mb-6 max-w-sm mx-auto text-sm leading-relaxed">
            Aapne abhi tak koi house design ya item cart mein add nahi kiya hai.
          </p>

          {/* Fancy Hover Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-7 py-3.5 rounded-xl font-medium hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 shadow-lg shadow-purple-900/50 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Explore House Designs 
            <ArrowRight size={18} className="transform transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}