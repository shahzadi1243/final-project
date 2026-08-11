"use client";

import Link from "next/link";
import { LogOut, ArrowRight } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-md w-full text-center">
        
        {/* Header Title */}
        <div className="flex items-center justify-center gap-3 mb-8 group cursor-default">
          <LogOut className="text-red-400 transform group-hover:scale-110 transition duration-300" size={38} />
          <h1 className="text-3xl font-bold text-white tracking-wide">
            Signed Out
          </h1>
        </div>

        {/* Sign Out Container */}
        <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl shadow-2xl border border-purple-900/50 p-8 transition-all duration-300 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]">
          <div className="w-20 h-20 bg-red-950/40 text-red-400 border border-red-900/50 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl shadow-inner">
            👋
          </div>

          <h2 className="text-xl font-semibold text-white mb-2">You have been signed out</h2>
          <p className="text-gray-300 mb-6 text-sm leading-relaxed">
            Aapka account successfully sign out ho chuka hai. Dobara access karne ke liye sign in karein.
          </p>

          <div className="flex flex-col gap-3">
            <Link
              href="/signin"
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-xl font-medium hover:from-purple-500 hover:to-indigo-500 transition shadow-lg shadow-purple-900/50 text-sm"
            >
              Sign In Again <ArrowRight size={18} />
            </Link>
            
            <Link
              href="/"
              className="w-full inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-gray-200 py-3 rounded-xl font-medium transition border border-purple-900/50 text-sm"
            >
              ← Back to Home Page
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}