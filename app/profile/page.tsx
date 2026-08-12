"use client";

import Link from "next/link";
import Image from "next/image";
import { User, Mail, Phone, MapPin, Edit3 } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-2xl w-full">
        
        {/* Header Title */}
        <div className="flex items-center justify-center gap-3 mb-8 group cursor-default">
          <User className="text-purple-400 transform group-hover:scale-110 transition duration-300" size={38} />
          <h1 className="text-3xl font-bold text-white tracking-wide group-hover:text-purple-300 transition duration-300">
            My Profile
          </h1>
        </div>

        {/* Profile Card */}
        <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl shadow-2xl border border-purple-900/50 p-8 transition-all duration-300 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]">
          
          {/* User Avatar (Real Photo) & Name Section */}
          <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-purple-900/40 text-center sm:text-left">
            
            {/* Real Profile Picture Area with Continuous Rotation */}
            <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-2xl shadow-purple-900/50 border-4 border-purple-400/30 ring-4 ring-slate-950/50 transition-all duration-300 hover:border-purple-500/50 group">
              <div className="w-full h-full animate-[spin_12s_linear_infinite] group-hover:[animation-play-state:paused]">
                <Image
                  src="/shahzadi.png"
                  alt="Shahzadi Rai"
                  fill
                  className="object-cover object-center scale-110"
                  priority
                />
              </div>
            </div>
            
            {/* Name & Info Area */}
            <div className="flex-1">
              <h2 className="text-3xl font-extrabold text-white mb-1.5 tracking-tight">Shahzadi Rai</h2>
              <p className="text-purple-200 text-sm mb-4 font-medium bg-purple-950/40 px-3 py-1 rounded-full inline-block">
                GharPlans Pakistan Member / Senior Web Developer
              </p>
              <div className="flex justify-center sm:justify-start">
                <span className="inline-flex items-center gap-1.5 bg-green-950/60 text-green-300 border border-green-800/50 px-4 py-1.5 rounded-full text-xs font-semibold shadow-inner">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  Active Account
                </span>
              </div>
            </div>
          </div>

          {/* User Details Info */}
          <div className="py-6 space-y-4">
            <div className="flex items-center gap-4 text-gray-300 bg-slate-950/50 p-4 rounded-2xl border border-purple-900/30 hover:border-purple-700/50 transition-all group">
              <Mail className="text-purple-400 group-hover:text-purple-300 transition" size={24} />
              <div>
                <p className="text-xs text-gray-400">Email Address</p>
                <p className="text-sm font-semibold text-white tracking-wide">shahzadirai55@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-gray-300 bg-slate-950/50 p-4 rounded-2xl border border-purple-900/30 hover:border-purple-700/50 transition-all group">
              <Phone className="text-purple-400 group-hover:text-purple-300 transition" size={24} />
              <div>
                <p className="text-xs text-gray-400">Phone Number</p>
                <p className="text-sm font-semibold text-white tracking-wide">+92 3---------</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-gray-300 bg-slate-950/50 p-4 rounded-2xl border border-purple-900/30 hover:border-purple-700/50 transition-all group">
              <MapPin className="text-purple-400 group-hover:text-purple-300 transition" size={24} />
              <div>
                <p className="text-xs text-gray-400">Location</p>
                <p className="text-sm font-semibold text-white tracking-wide">Pakistan</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-end gap-4 pt-6 border-t border-purple-900/40">
            <Link
              href="/"
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-gray-200 px-8 py-3.5 rounded-xl font-semibold transition border border-purple-900/50 text-sm shadow-md"
            >
              ← Back to Home
            </Link>
            
            <button
              onClick={() => alert("Profile edit feature coming soon!")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:from-purple-500 hover:to-indigo-500 transition shadow-xl shadow-purple-900/50 text-sm ring-2 ring-purple-500/30 flex cursor-pointer"
            >
              <Edit3 size={18} /> Edit Profile Details
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}