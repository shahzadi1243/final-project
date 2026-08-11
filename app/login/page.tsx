"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-white">
      {/* Left Side: Construction Image */}
      <div className="relative hidden lg:block h-full">
        <Image
          src="/hert.jpg"
          alt="Construction Site"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right Side: Sign In Form */}
      <div className="flex flex-col justify-center px-8 sm:px-16 py-12 relative">
        <div className="absolute top-8 left-8">
          <Link href="/" className="text-sm font-medium text-gray-600 hover:text-purple-600 transition">
            &larr; Back
          </Link>
        </div>

        <div className="max-w-md w-full mx-auto">
          <div className="flex flex-col items-center mb-8">
            <Image
              src="/sdd.png"
              alt="GharPlans Logo"
              width={60}
              height={60}
              className="mb-2 object-contain"
            />
            <h1 className="text-xl font-bold text-purple-950">GharPlans</h1>
            <h2 className="text-2xl font-bold text-gray-900 mt-4">Sign in to your account</h2>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <Mail size={18} />
                </span>
                <input
                  type="email"
                  required
                  placeholder="You@example.com"
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-sm text-gray-900"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <Lock size={18} />
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Password"
                  className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-sm text-gray-900"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
                <span className="text-gray-600">Remember me</span>
              </label>
              <Link href="/forgot-password" className="text-purple-600 hover:underline font-medium">
                Forgot password?
              </Link>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <button
                type="submit"
                className="flex-1 bg-purple-700 text-white py-2.5 rounded-lg font-medium hover:bg-purple-800 transition shadow-md"
              >
                Sign In
              </button>
              <Link
                href="/signup"
                className="flex-1 text-center border border-gray-300 text-gray-700 py-2.5 rounded-lg font-medium hover:bg-gray-50 transition"
              >
                Create Account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}