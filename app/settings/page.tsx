"use client";

import Link from "next/link";
import { Settings, Shield, Bell, Lock, ArrowRight } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-xl w-full">
        
        {/* Header Title */}
        <div className="flex items-center justify-center gap-3 mb-8 group cursor-default">
          <Settings className="text-purple-400 transform group-hover:scale-110 group-hover:rotate-90 transition duration-500" size={38} />
          <h1 className="text-3xl font-bold text-white tracking-wide group-hover:text-purple-300 transition duration-300">
            Account Settings
          </h1>
        </div>

        {/* Settings Container */}
        <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl shadow-2xl border border-purple-900/50 p-8 transition-all duration-300 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]">
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-between bg-slate-950/40 p-4 rounded-xl border border-purple-950">
              <div className="flex items-center gap-3 text-white">
                <Bell className="text-purple-400" size={20} />
                <span className="text-sm font-medium">Push Notifications</span>
              </div>
              <input type="checkbox" defaultChecked className="accent-purple-600 w-4 h-4 cursor-pointer" />
            </div>

            <div className="flex items-center justify-between bg-slate-950/40 p-4 rounded-xl border border-purple-950">
              <div className="flex items-center gap-3 text-white">
                <Lock className="text-purple-400" size={20} />
                <span className="text-sm font-medium">Two-Factor Authentication</span>
              </div>
              <input type="checkbox" className="accent-purple-600 w-4 h-4 cursor-pointer" />
            </div>

            <div className="flex items-center justify-between bg-slate-950/40 p-4 rounded-xl border border-purple-950">
              <div className="flex items-center gap-3 text-white">
                <Shield className="text-purple-400" size={20} />
                <span className="text-sm font-medium">Privacy Mode</span>
              </div>
              <input type="checkbox" defaultChecked className="accent-purple-600 w-4 h-4 cursor-pointer" />
            </div>
          </div>

          {/* Fancy Home Button */}
          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-7 py-3.5 rounded-xl font-medium hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 shadow-lg shadow-purple-900/50 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Back to Home 
              <ArrowRight size={18} className="transform transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}