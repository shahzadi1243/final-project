"use client";

import { useState } from "react";
import Image from "next/image";

// Types definition
interface SubService {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  videoUrl?: string;
  cities: string[];
}

interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  subServices: SubService[];
}

// Data matching your screenshots
const serviceCategories: ServiceCategory[] = [
  {
    id: "termite",
    title: "Termite Treatment Service",
    subtitle: "PROFESSIONAL TERMITE TREATMENT",
    image: "/1.jpg",
    description: "Choosing Ghar Plans termite treatment ensures lasting protection and peace of mind.",
    subServices: [
      {
        id: "pre-construction-termite",
        title: "Pre Construction Termite Treatment Service",
        subtitle: "Termite Treatment Service",
        description: "Comprehensive soil and foundation termite proofing before building.",
        image: "/1.jpg",
        cities: ["Lahore", "Sialkot", "Islamabad"],
      },
      {
        id: "post-construction-termite",
        title: "Post Construction Termite Treatment Service",
        subtitle: "Termite Treatment Service",
        description: "Effective liquid barrier treatment for existing homes and buildings.",
        image: "/3.jpg",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        cities: ["Lahore and Sialkot"],
      },
    ],
  },
  {
    id: "waterproofing",
    title: "Waterproofing Service",
    subtitle: "PROFESSIONAL WATERPROOFING SERVICE",
    image: "/3.jpg",
    description: "Gharplans waterproofing ensures lasting protection with expert solutions.",
    subServices: [
      {
        id: "roof-waterproofing",
        title: "Roof Waterproofing Service",
        subtitle: "Waterproofing Service",
        description: "Complete roof membrane and chemical coating against leakages.",
        image: "/3.jpg",
        cities: ["Lahore", "Karachi", "Rawalpindi"],
      },
    ],
  },
  {
    id: "water-tanks",
    title: "Water Tanks Service",
    subtitle: "WATER TANKS SERVICE",
    image: "/2.jpg",
    description: "Keep your water safe and hygienic with professional tank cleaning by Gharplans.",
    subServices: [
      {
        id: "underground-tank-cleaning",
        title: "Underground Water Tank Cleaning",
        subtitle: "Water Tanks Service",
        description: "Deep chemical washing and anti-bacterial treatment.",
        image: "/2.jpg",
        cities: ["Lahore", "Multan"],
      },
    ],
  },
  {
    id: "tile-fixing",
    title: "Tile Fixing Service",
    subtitle: "TILE FIXING SERVICE",
    image: "/1.jpg",
    description: "Gharplans tile fixing service provides precise alignment and durable finish.",
    subServices: [],
  },
  {
    id: "false-ceiling",
    title: "False Ceiling Service",
    subtitle: "FALSE CEILING SERVICE",
    image: "/2.jpg",
    description: "Gharplans false ceiling solutions deliver modern designs and quality finishes.",
    subServices: [],
  },
];

export default function CompleteCombinedComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [categorySearch, setCategorySearch] = useState("");
  const [citySearch, setCitySearch] = useState("");
  
  // Navigation states
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | null>(null);
  const [activeSubService, setActiveSubService] = useState<SubService | null>(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % serviceCategories.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + serviceCategories.length) % serviceCategories.length);
  };

  // -------------------------------------------------------------
  // VIEW 3: Detailed Service Page (3rd Screenshot - Video/Image view)
  // -------------------------------------------------------------
  if (activeSubService && activeCategory) {
    return (
      <div className="min-h-screen flex flex-col bg-white font-sans">
        {/* Navigation Top Bar */}
        <nav className="w-full bg-white shadow-sm px-6 py-4 flex items-center justify-between border-b border-slate-200">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveSubService(null)}
              className="px-4 py-2 bg-purple-900 text-white rounded-xl font-bold text-xs sm:text-sm shadow hover:bg-purple-800 transition flex items-center gap-2 cursor-pointer"
            >
              ⬅ Back to Sub-Services
            </button>
            <span className="text-xs font-semibold text-slate-500 hidden sm:inline">
              {activeCategory.title} / {activeSubService.title}
            </span>
          </div>
        </nav>

        {/* Hero Section Banner */}
        <div className="bg-purple-900 py-12 px-4 text-center text-white space-y-4">
          <span className="inline-block px-4 py-1.5 bg-purple-800 text-purple-200 text-xs font-semibold rounded-full border border-purple-700">
            {activeSubService.subtitle}
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold max-w-3xl mx-auto leading-tight">
            {activeSubService.title}
          </h1>
        </div>

        {/* Media Layout Section */}
        <div className="max-w-6xl mx-auto px-4 py-12 w-full flex-1 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Image Box */}
            <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-md border border-slate-200">
              <Image
                src={activeSubService.image}
                alt={activeSubService.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Right Video / Media Box */}
            <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-md bg-black flex items-center justify-center">
              {activeSubService.videoUrl ? (
                <video
                  controls
                  className="w-full h-full object-cover"
                  src={activeSubService.videoUrl}
                />
              ) : (
                <div className="text-slate-400 text-sm">No video available for this service.</div>
              )}
            </div>
          </div>

          {/* City Badge Display */}
          <div className="flex items-center gap-2 pt-4">
            <span className="p-2 bg-purple-100 text-purple-900 rounded-full text-sm">📍</span>
            <div className="px-4 py-2 bg-purple-50 text-purple-900 font-semibold text-xs sm:text-sm rounded-full border border-purple-200">
              {activeSubService.cities.join(", ")}
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    );
  }

  // -------------------------------------------------------------
  // VIEW 2: Sub-Services List Page (2nd Screenshot - Cards grid)
  // -------------------------------------------------------------
  if (activeCategory) {
    const filteredSubServices = activeCategory.subServices.filter((sub) =>
      sub.cities.some((c) => c.toLowerCase().includes(citySearch.toLowerCase())) ||
      sub.title.toLowerCase().includes(citySearch.toLowerCase())
    );

    return (
      <div className="min-h-screen flex flex-col bg-white font-sans">
        {/* Navigation Top Bar */}
        <nav className="w-full bg-white shadow-sm px-6 py-4 flex items-center justify-between border-b border-slate-200">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveCategory(null)}
              className="px-4 py-2 bg-purple-900 text-white rounded-xl font-bold text-xs sm:text-sm shadow hover:bg-purple-800 transition flex items-center gap-2 cursor-pointer"
            >
              ⬅ Back to Categories
            </button>
            <span className="text-xs font-semibold text-slate-500 hidden sm:inline">
              {activeCategory.title}
            </span>
          </div>
        </nav>

        {/* Content Container */}
        <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full bg-white flex-1 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-purple-950 tracking-tight">Services</h2>
            <div className="w-16 h-1 bg-purple-600 mx-auto rounded-full"></div>
            <h3 className="text-xl font-bold text-purple-900">{activeCategory.title}</h3>
            <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">{activeCategory.description}</p>

            {/* City Search Input */}
            <div className="max-w-md mx-auto pt-4">
              <div className="relative flex items-center">
                <span className="absolute left-4 text-purple-600 text-sm">📍</span>
                <input
                  type="text"
                  placeholder="Search services by city..."
                  value={citySearch}
                  onChange={(e) => setCitySearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-purple-200 rounded-full shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
                />
              </div>
            </div>
          </div>

          {/* Sub-Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            {filteredSubServices.length > 0 ? (
              filteredSubServices.map((sub) => (
                <div
                  key={sub.id}
                  onClick={() => setActiveSubService(sub)}
                  className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={sub.image}
                      alt={sub.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 bg-white flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-purple-950 group-hover:text-purple-600 transition">
                        {sub.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-2 line-clamp-2">{sub.description}</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-purple-700 font-semibold">
                      <span>Available in: {sub.cities.join(", ")}</span>
                      <span>View Details ➔</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-slate-400 py-12">
                No services found for your search query.
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    );
  }

  // -------------------------------------------------------------
  // VIEW 1: Main Stack Carousel Page (1st Screenshot)
  // -------------------------------------------------------------
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      {/* Navbar */}
      <nav className="w-full bg-white shadow-sm px-6 py-4 flex items-center justify-between border-b border-slate-200">
        <div className="flex items-center gap-3">
          <a
            href="/"
            className="px-4 py-2 bg-purple-900 text-white rounded-xl font-bold text-sm shadow hover:bg-purple-800 transition flex items-center gap-2"
          >
            🏠 Home
          </a>
          <span className="text-xs font-semibold text-slate-500">Service Categories</span>
        </div>
      </nav>

      {/* Main Content */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full bg-white flex-1">
        <section className="space-y-8">
          {/* Title and Search Bar */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-black text-purple-950 tracking-tight">Service Categories</h2>
            <div className="w-16 h-1 bg-purple-600 mx-auto rounded-full"></div>

            <div className="max-w-md mx-auto pt-2">
              <div className="relative flex items-center">
                <span className="absolute left-4 text-purple-600 font-bold">🔍</span>
                <input
                  type="text"
                  placeholder="Search categories by name..."
                  value={categorySearch}
                  onChange={(e) => setCategorySearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white border border-purple-200 rounded-full shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
                />
              </div>
            </div>
          </div>

          {/* Carousel Section */}
          <div className="relative flex items-center justify-center py-6 min-h-[460px]">
            {/* Left Arrow Button */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-12 z-30 w-12 h-12 bg-white rounded-full shadow-md border border-slate-200 flex items-center justify-center text-purple-900 hover:bg-purple-50 transition cursor-pointer"
            >
              ❮
            </button>

            {/* Carousel Stack */}
            <div className="relative w-full max-w-sm h-[420px] flex items-center justify-center">
              {serviceCategories.map((service, index) => {
                let offset = index - currentIndex;

                if (offset < -2) offset += serviceCategories.length;
                if (offset > 2) offset -= serviceCategories.length;

                const isCenter = offset === 0;

                let transformStyle = "translate-x-0 scale-100 z-20 opacity-100 rotate-0";
                if (offset === -1) {
                  transformStyle = "-translate-x-28 scale-90 z-10 opacity-80 -rotate-6";
                } else if (offset === -2) {
                  transformStyle = "-translate-x-48 scale-75 z-0 opacity-50 -rotate-12";
                } else if (offset === 1) {
                  transformStyle = "translate-x-28 scale-90 z-10 opacity-80 rotate-6";
                } else if (offset === 2) {
                  transformStyle = "translate-x-48 scale-75 z-0 opacity-50 rotate-12";
                }

                if (Math.abs(offset) > 2) return null;

                const matchesSearch = service.title.toLowerCase().includes(categorySearch.toLowerCase());

                return (
                  matchesSearch && (
                    <div
                      key={service.id}
                      onClick={() => setCurrentIndex(index)}
                      className={`absolute transition-all duration-500 ease-out cursor-pointer w-72 sm:w-80 h-[380px] rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 flex flex-col justify-end p-6 transform ${transformStyle} ${
                        isCenter ? "ring-4 ring-purple-900/10 shadow-2xl" : ""
                      }`}
                    >
                      <div className="absolute inset-0 z-0">
                        <Image src={service.image} alt={service.title} fill sizes="100vw" className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent"></div>
                      </div>

                      <div className="relative z-10 space-y-2 text-white">
                        <p className="text-[10px] font-bold tracking-wider uppercase text-purple-300">{service.subtitle}</p>
                        <h3 className="text-xl font-black">{service.title}</h3>
                        <p className="text-xs text-slate-300 line-clamp-2">{service.description}</p>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveCategory(service);
                          }}
                          className="mt-3 inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow transition cursor-pointer"
                        >
                          LEARN MORE
                        </button>
                      </div>
                    </div>
                  )
                );
              })}
            </div>

            {/* Right Arrow Button */}
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-12 z-30 w-12 h-12 bg-white rounded-full shadow-md border border-slate-200 flex items-center justify-center text-purple-900 hover:bg-purple-50 transition cursor-pointer"
            >
              ❯
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-2 pt-2">
            {serviceCategories.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all rounded-full cursor-pointer ${
                  currentIndex === idx
                    ? "w-8 h-2.5 bg-purple-600"
                    : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
              ></button>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

// Reusable Footer Component
function Footer() {
  return (
    <footer className="w-full bg-purple-950 text-white py-8 px-6 border-t border-purple-900 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div>
          <h3 className="text-lg font-bold text-purple-200">Gharplans Services</h3>
          <p className="text-xs text-purple-300 mt-1">Providing professional home and construction solutions you can trust.</p>
        </div>
        <div className="text-xs text-purple-400">
          &copy; {new Date().getFullYear()} Gharplans. All rights reserved.
        </div>
      </div>
    </footer>
  );
}