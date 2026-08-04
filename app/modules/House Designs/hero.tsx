"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/br.jpg",
    title: "Ultra Luxury Grand Palace & Mansion Design Modern 1 Acre House Plan with Luxury Elevation",
    beds: "10 Bed",
    baths: "12 Bath",
    sqft: "15000 sq.ft",
    link: "#",
  },
  {
    image: "/b4.jpg",
    title: "Modern 3 Kanal House Plan with Luxury Elevation",
    beds: "5 Bed",
    baths: "6 Bath",
    sqft: "4500 sq.ft",
    link: "#",
  },
  {
    image: "/b6.jpg",
    title: "Beautiful 2 kanal 10 Marla House Design Trends",
    beds: "4 Bed",
    baths: "5 Bath",
    sqft: "2700 sq.ft",
    link: "#",
  },
  {
    image: "/b9.jpg",
    title: "Beautiful 1 kanal 5 Marla House Design Trends",
    beds: "4 Bed",
    baths: "5 Bath",
    sqft: "2700 sq.ft",
    link: "#",
  },
  {
    image: "/b0.jpg",
    title: "Beautiful 1 kanal 10 Marla House Design Trends",
    beds: "4 Bed",
    baths: "5 Bath",
    sqft: "2700 sq.ft",
    link: "#",
  },
];

export default function HouseSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[580px] overflow-hidden rounded-xl sm:rounded-2xl shadow-lg bg-black">
        
        {/* Slides Wrapper */}
        <div 
          className="absolute inset-0 flex transition-transform duration-500 ease-in-out h-full"
          style={{ 
            width: `${slides.length * 100}%`,
            transform: `translateX(-${(current * 100) / slides.length}%)` 
          }}
        >
          {slides.map((slide, index) => (
            <a
              key={index}
              href={slide.link}
              className="h-full relative cursor-pointer group block overflow-hidden"
              style={{ width: `${100 / slides.length}%` }}
            >
              {/* Image ko object-fill kar diya hai taake height aur width bilkul box ke barabar aaye */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  quality={100}
                  sizes="100vw"
                  className="object-fill"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

              {/* Content Container */}
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 z-20 text-white">
                <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-3 drop-shadow-md">
                  {slide.title}
                </h2>

                {/* Specs (Beds, Baths, Sqft) */}
                <div className="flex items-center gap-4 text-sm sm:text-base text-gray-200 mb-4">
                  <span className="flex items-center gap-1.5">
                    <span className="text-yellow-400 font-bold">🛏</span> {slide.beds}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="text-yellow-400 font-bold">🛁</span> {slide.baths}
                  </span>
                  <span>{slide.sqft}</span>
                </div>

                {/* View Button */}
                <span className="inline-flex items-center gap-1 bg-purple-700 hover:bg-purple-800 text-white text-sm font-medium px-5 py-2.5 rounded-md transition shadow">
                  View &rarr;
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Dots Navigation */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.preventDefault();
                setCurrent(i);
              }}
              aria-label={`Slide ${i + 1}`}
              className={`transition-all rounded-full ${
                current === i
                  ? "w-8 h-2.5 bg-white"
                  : "w-2.5 h-2.5 bg-white/50 hover:bg-white"
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}