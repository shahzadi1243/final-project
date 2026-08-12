"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Bell,
  User,
  Heart,
  ShoppingCart,
  LogOut,
  Settings,
  Package,
} from "lucide-react";

interface HeartItem {
  id: number;
  left: number;
  top: number;
  size: number;
  rotation: number;
}

interface Particle {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
}

export default function Navbar() {
  const router = useRouter();
  const [liked, setLiked] = useState(false);
  const [hearts, setHearts] = useState<HeartItem[]>([]);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generatedParticles: Particle[] = Array.from({ length: 22 }).map((_, index) => ({
      id: index,
      left: Math.random() * 80 + 20,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 3,
      size: Math.random() * 10 + 14,
      rotation: Math.random() * 360,
    }));
    setParticles(generatedParticles);
  }, []);

  const playBellSound = async () => {
    try {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;

      const audioCtx = new AudioContextClass();
      if (audioCtx.state === "suspended") {
        await audioCtx.resume();
      }

      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(880, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.8);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.8);

      setTimeout(() => {
        audioCtx.close();
      }, 1000);
    } catch (e) {
      console.error("Audio error:", e);
    }
  };

  const playHeartSound = async () => {
    try {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;

      const audioCtx = new AudioContextClass();
      if (audioCtx.state === "suspended") {
        await audioCtx.resume();
      }

      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(523.25, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1046.5, audioCtx.currentTime + 0.25);

      gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.3);

      setTimeout(() => {
        audioCtx.close();
      }, 500);
    } catch (e) {
      console.error("Audio error:", e);
    }
  };

  const handleHeartClick = () => {
    setLiked((prev) => !prev);
    playHeartSound();

    const newHearts: HeartItem[] = Array.from({ length: 12 }).map(() => ({
      id: Date.now() + Math.random(),
      left: (Math.random() - 0.5) * 80,
      top: (Math.random() - 0.5) * 30,
      size: Math.random() * 0.8 + 0.8,
      rotation: (Math.random() - 0.5) * 60,
    }));

    setHearts((prev) => [...prev, ...newHearts]);

    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => !newHearts.some((nh) => nh.id === h.id)));
    }, 1000);

    setTimeout(() => {
      router.push("/login");
    }, 400);
  };

  return (
    <>
      <style jsx global>{`
        @keyframes float-heart-burst {
          0% {
            opacity: 1;
            transform: translate(0, 0) scale(0.5) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: translateY(-50px) scale(1.3) rotate(var(--rot));
          }
          100% {
            opacity: 0;
            transform: translate(var(--end-x), -90px) scale(1) rotate(var(--rot));
          }
        }
        .animate-float-heart-burst {
          animation: float-heart-burst 1s cubic-bezier(0.15, 0.85, 0.35, 1.2) forwards;
        }

        @keyframes fall-leaf {
          0% {
            transform: translateY(-20px) rotate(0deg) translateX(0px);
            opacity: 1;
          }
          50% {
            transform: translateY(45px) rotate(180deg) translateX(12px);
            opacity: 0.85;
          }
          100% {
            transform: translateY(110px) rotate(360deg) translateX(-12px);
            opacity: 0.1;
          }
        }
        .animate-fall-leaf {
          animation: fall-leaf linear infinite;
        }
      `}</style>

      <header className="w-full bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-gray-100 border-b border-purple-900/50 shadow-xl sticky top-0 z-50 backdrop-blur-md">
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {particles.map((p) => (
            <span
              key={p.id}
              className="absolute animate-fall-leaf select-none filter drop-shadow-[0_2px_4px_rgba(139,69,19,0.4)]"
              style={{
                left: `${p.left}%`,
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.duration}s`,
                fontSize: `${p.size}px`,
                transform: `rotate(${p.rotation}deg)`,
              }}
            >
              🍂
            </span>
          ))}
        </div>

        <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-4 sm:px-6 relative z-10">
          {/* Logo & Brand Name */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image
              src="/sdd.png"
              alt="Logo"
              width={45}
              height={45}
              priority
              className="object-contain"
            />
            <span className="text-xl font-bold text-white tracking-wide">House Designing</span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 text-sm font-medium">
            <Link
              href="/"
              className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-500 transition shadow-md shadow-purple-900/50"
            >
              House Designs
            </Link>
            <Link href="/shop" className="px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition">
              Shop
            </Link>
            <Link href="/interior" className="px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition">
              Interior Designs
            </Link>
            <Link href="/blog" className="px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition">
              Blog
            </Link>
            <Link href="/pricing" className="px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition">
              Pricing
            </Link>
            <Link href="/services" className="px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition">
              Services
            </Link>
            {/* Cone Page Link */}
            <Link href="/cone" className="flex items-center gap-1 px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition">
              Cone
            </Link>
            <Link href="/contact" className="px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition">
              Contact Us
            </Link>
          </nav>

          {/* Right Icons Section */}
          <div className="flex items-center gap-3 sm:gap-4 text-gray-300 shrink-0">
            <button
              onClick={playBellSound}
              className="hover:text-amber-400 transition active:scale-95 cursor-pointer p-2 hover:bg-white/5 rounded-full"
              title="Notification"
            >
              <Bell size={20} />
            </button>

            <div className="relative">
              <button
                onClick={() => setIsUserOpen(!isUserOpen)}
                className="hover:text-blue-400 transition flex items-center cursor-pointer p-2 hover:bg-white/5 rounded-full"
                title="User Account"
              >
                <User size={20} />
              </button>

              {isUserOpen && (
                <div className="absolute right-0 mt-3 w-48 bg-slate-900 border border-purple-900/60 rounded-xl shadow-2xl py-2 z-50">
                  <Link
                    href="/profile"
                    className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-200 hover:bg-purple-950 hover:text-white transition"
                    onClick={() => setIsUserOpen(false)}
                  >
                    <User size={16} />
                    My Profile
                  </Link>
                  <Link
                    href="/orders"
                    className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-200 hover:bg-purple-950 hover:text-white transition"
                    onClick={() => setIsUserOpen(false)}
                  >
                    <Package size={16} />
                    My Orders
                  </Link>
                  <Link
                    href="/settings"
                    className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-200 hover:bg-purple-950 hover:text-white transition"
                    onClick={() => setIsUserOpen(false)}
                  >
                    <Settings size={16} />
                    Settings
                  </Link>
                  <hr className="my-1 border-purple-900/40" />
                  <button
                    className="flex items-center gap-2 w-full text-left px-4 py-2.5 text-sm text-red-400 hover:bg-red-950/50 transition cursor-pointer"
                    onClick={() => setIsUserOpen(false)}
                  >
                    <LogOut size={16} />
                    Login
                  </button>
                </div>
              )}
            </div>

            {/* Heart Icon */}
            <div className="relative">
              <button
                onClick={handleHeartClick}
                className="transition active:scale-125 duration-150 cursor-pointer p-2 hover:bg-white/5 rounded-full"
                title="Sign In / Favorite"
              >
                <Heart
                  size={20}
                  className={
                    liked
                      ? "fill-red-500 text-red-500"
                      : "text-gray-300 hover:text-red-400"
                  }
                />
              </button>

              {hearts.map((h) => (
                <span
                  key={h.id}
                  style={
                    {
                      left: `${h.left}px`,
                      top: `${h.top}px`,
                      "--end-x": `${h.left * 1.5}px`,
                      "--rot": `${h.rotation}deg`,
                      transform: `scale(${h.size})`,
                    } as React.CSSProperties
                  }
                  className="absolute pointer-events-none text-red-500 animate-float-heart-burst select-none"
                >
                  ❤️
                </span>
              ))}
            </div>

            <Link href="/cart" className="hover:text-emerald-400 transition cursor-pointer p-2 hover:bg-white/5 rounded-full">
              <ShoppingCart size={20} />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}