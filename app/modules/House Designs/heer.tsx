"use client";

import { useState } from "react";
import Image from "next/image";

// 3x Expanded Comprehensive House Data List (All unique titles, dimensions & specs)
const houses = [
  // --- Group 1 ---
  {
    title: "1 Kanal House Map Drawing",
    beds: "5",
    baths: "5",
    floors: "3",
    sqft: "5855 sqft",
    dimension: "50'-6\"x110'-2\"",
    category: "1 Kanal",
    image: "/1.jpg",
  },
  {
    title: "New Massive 10 Marla House Plan 35ft x 65ft",
    beds: "3",
    baths: "4",
    floors: "2",
    sqft: "4550 sqft",
    dimension: "35'X65'",
    category: "10 Marla",
    image: "/2.jpg",
  },
  {
    title: "New Beautiful 12 Marla House Plan With Map",
    beds: "4",
    baths: "5",
    floors: "2",
    sqft: "2882 sqft",
    dimension: "37'-5\"x70'-0\"",
    category: "Other",
    image: "/3.jpg",
  },
  {
    title: "New 10 Marla House Map With 7 Bedrooms",
    beds: "7",
    baths: "8",
    floors: "3",
    sqft: "6030 sqft",
    dimension: "38x70",
    category: "10 Marla",
    image: "/4.jpg",
  },
  {
    title: "Free And Beautiful 3 Marla House Design with Double Story",
    beds: "3",
    baths: "3",
    floors: "2",
    sqft: "1314 sqft",
    dimension: "18X38'",
    category: "3 Marla",
    image: "/5.jpg",
  },
  {
    title: "Sensational 10 Marla, 8 Bedroom House Plan",
    beds: "8",
    baths: "7",
    floors: "3",
    sqft: "2275 sqft",
    dimension: "35'x65'",
    category: "10 Marla",
    image: "/6.jpg",
  },
  {
    title: "Modern 5 Marla House Plan with 3D Design in Pakistan (Latest 2026)",
    beds: "3",
    baths: "4",
    floors: "4",
    sqft: "2455 sqft",
    dimension: "26'-0\"x45'-0\"",
    category: "5 Marla",
    image: "/7.jpg",
  },
  {
    title: "New 25×40 House Plan | 4 Marla House Plan & Elevation",
    beds: "3",
    baths: "3",
    floors: "2",
    sqft: "1816 sqft",
    dimension: "25'x40'",
    category: "Other",
    image: "/8.jpg",
  },
  {
    title: "Awesome House Map in Pakistan for Large House",
    beds: "6",
    baths: "6",
    floors: "3",
    sqft: "7902 sqft",
    dimension: "74'X82'",
    category: "Other",
    image: "/91.jpg",
  },
  {
    title: "Useful Modern 1 Kanal House Design and layout plan",
    beds: "6",
    baths: "8",
    floors: "3",
    sqft: "5490 sqft",
    dimension: "50'x90'",
    category: "1 Kanal",
    image: "/10.jpg",
  },
  {
    title: "Latest Modern 1 Kanal House Map Designs 2026 in Pakistan",
    beds: "7",
    baths: "9",
    floors: "4",
    sqft: "8982 sqft",
    dimension: "47'-0\"x87'-6\"",
    category: "1 Kanal",
    image: "/11.jpg",
  },
  {
    title: "New Luxurious 4500 Square Feet House Plan 50ft x 90ft",
    beds: "8",
    baths: "10",
    floors: "3",
    sqft: "8119 sqft",
    dimension: "50'x90'",
    category: "1 Kanal",
    image: "/12.jpg",
  },
  {
    title: "New 6 Marla House Design Or 30 X 45 House Plan",
    beds: "3",
    baths: "3",
    floors: "2",
    sqft: "2346 sqft",
    dimension: "30'X45'",
    category: "Other",
    image: "/13.jpg",
  },
  {
    title: "New Chic 10 Marla House Design with Elevation",
    beds: "5",
    baths: "5",
    floors: "3",
    sqft: "3463 sqft",
    dimension: "35'X65'",
    category: "10 Marla",
    image: "/14.jpg",
  },
  {
    title: "Gutka finish 1 kanal home design idea - 50x90 feet house",
    beds: "7",
    baths: "8",
    floors: "3",
    sqft: "7967 sqft",
    dimension: "50'x90'",
    category: "1 Kanal",
    image: "/15.jpg",
  },
  {
    title: "Surprising 3 Marla House Design Plan",
    beds: "3",
    baths: "3",
    floors: "2",
    sqft: "1400 sqft",
    dimension: "18'X38'",
    category: "3 Marla",
    image: "/16.jpg",
  },
  {
    title: "New Luxurious 1 Kanal house plan with 6 bedrooms",
    beds: "6",
    baths: "6",
    floors: "2",
    sqft: "5434 sqft",
    dimension: "45'X100'",
    category: "1 Kanal",
    image: "/17.jpg",
  },
  {
    title: "Magnificent 1 Kanal House Design & 4500 Square Feet",
    beds: "5",
    baths: "5",
    floors: "2",
    sqft: "4500 sqft",
    dimension: "50'x90'",
    category: "1 Kanal",
    image: "/18.jpg",
  },

  // --- Group 2 ---
  {
    title: "Modern 1 Kanal House Plan with Open Plan Interiors",
    beds: "5",
    baths: "7",
    floors: "2",
    sqft: "6219 sqft",
    dimension: "44'-9\"x106'-0\"",
    category: "1 Kanal",
    image: "/19.jpg",
  },
  {
    title: "Luxurious 10 Marla House Plan with Swimming Pool",
    beds: "5",
    baths: "5",
    floors: "3",
    sqft: "4651 sqft",
    dimension: "35'X65'",
    category: "10 Marla",
    image: "/20.jpg",
  },
  {
    title: "2 Kanal House Planning with Modern Elevations",
    beds: "5",
    baths: "5",
    floors: "3",
    sqft: "9728 sqft",
    dimension: "95'6\"x100'6\"",
    category: "2 Kanal",
    image: "/21.jpg",
  },
  {
    title: "6 Marla House Plan & Map details Pakistan",
    beds: "4",
    baths: "4",
    floors: "2",
    sqft: "2243 sqft",
    dimension: "30'x40'",
    category: "Other",
    image: "/22.jpg",
  },
  {
    title: "Huge One Kanal Home Designs with Beautiful Elevation",
    beds: "10",
    baths: "10",
    floors: "4",
    sqft: "9522 sqft",
    dimension: "50'X90'",
    category: "1 Kanal",
    image: "/23.jpg",
  },
  {
    title: "35 x 70 House Plan with Free Elevation",
    beds: "6",
    baths: "7",
    floors: "3",
    sqft: "5009 sqft",
    dimension: "35' X 70'",
    category: "Other",
    image: "/24.jpg",
  },
  {
    title: "10 Marla House Plan and Elevation – Modern & Elegant 3D",
    beds: "6",
    baths: "6",
    floors: "3",
    sqft: "3507 sqft",
    dimension: "37'6\"x60'0\"",
    category: "10 Marla",
    image: "/25.jpg",
  },
  {
    title: "Spacious Split Level 1 Kanal House Layout In Pakistan",
    beds: "5",
    baths: "5",
    floors: "3",
    sqft: "6000 sqft",
    dimension: "50'0\" x 90'0\"",
    category: "1 Kanal",
    image: "/26.jpg",
  },
  {
    title: "1 Kanal Classical House Design In Karachi",
    beds: "9",
    baths: "10",
    floors: "3",
    sqft: "7463 sqft",
    dimension: "45'x90'",
    category: "1 Kanal",
    image: "/27.jpg",
  },
  {
    title: "DHA 5 Marla House Map With 4 Bedrooms",
    beds: "4",
    baths: "4",
    floors: "2",
    sqft: "1245 sqft",
    dimension: "25'x45'",
    category: "5 Marla",
    image: "/28.jpg",
  },
  {
    title: "Luxury 1 kanal House Design for Modern Pakistani Homes",
    beds: "6",
    baths: "7",
    floors: "2",
    sqft: "5568 sqft",
    dimension: "50'x90'",
    category: "1 Kanal",
    image: "/29.jpg",
  },
  {
    title: "Modern Triple Storey Five Marla House Plan",
    beds: "4",
    baths: "4",
    floors: "3",
    sqft: "2457 sqft",
    dimension: "25'X45'",
    category: "5 Marla",
    image: "/30.jpg",
  },
  {
    title: "Beautiful Basement House Design (72'X90')",
    beds: "6",
    baths: "8",
    floors: "4",
    sqft: "9465 sqft",
    dimension: "72'X90'",
    category: "Other",
    image: "/31.jpg",
  },
  {
    title: "Modern 10 Marla Regular House Floor Plan",
    beds: "4",
    baths: "5",
    floors: "3",
    sqft: "3099 sqft",
    dimension: "30'x75'",
    category: "10 Marla",
    image: "/32.avif",
  },
  {
    title: "7 Marla House Design with Beautiful Modern Façade",
    beds: "4",
    baths: "6",
    floors: "2",
    sqft: "3037 sqft",
    dimension: "30'X55'",
    category: "Other",
    image: "/33.jpg",
  },
  {
    title: "New 5 Marla House Design / 125 sq. yards House Plan",
    beds: "5",
    baths: "5",
    floors: "3",
    sqft: "1982 sqft",
    dimension: "22'6\"x50'0\"",
    category: "5 Marla",
    image: "/34.avif",
  },
  {
    title: "Unique 20 Marla House Plan with Modern 3D Elevation",
    beds: "5",
    baths: "6",
    floors: "2",
    sqft: "4998 sqft",
    dimension: "50'x90'",
    category: "2 Kanal",
    image: "/35.avif",
  },
  {
    title: "Beautiful 10 Marla Modern House Plans",
    beds: "7",
    baths: "7",
    floors: "3",
    sqft: "4338 sqft",
    dimension: "35'x65'",
    category: "10 Marla",
    image: "/yqrd.jpg",
  },

  // --- Group 3 ---
  {
    title: "Modern And Sleek House Design Layout",
    beds: "5",
    baths: "5",
    floors: "2",
    sqft: "4406 sqft",
    dimension: "38' x 74'",
    category: "Other",
    image: "/37.avif",
  },
  {
    title: "Classical Premium quality 1 Kanal House Design with basement",
    beds: "5",
    baths: "6",
    floors: "3",
    sqft: "5918 sqft",
    dimension: "50'x90'",
    category: "1 Kanal",
    image: "/38.avif",
  },
  {
    title: "New 3.5 Marla House Design in Pakistan & India",
    beds: "3",
    baths: "3",
    floors: "2",
    sqft: "1446 sqft",
    dimension: "20'x38'",
    category: "3 Marla",
    image: "/39.avif",
  },
  {
    title: "Beautiful 500 Square Yard House Design 50 x 90",
    beds: "7",
    baths: "10",
    floors: "3",
    sqft: "7709 sqft",
    dimension: "50'x90'",
    category: "1 Kanal",
    image: "/40.jpg",
  },
  {
    title: "Village House Design (Ghar Ka Naqsha) Pakistan",
    beds: "6",
    baths: "6",
    floors: "2",
    sqft: "8974 sqft",
    dimension: "125'X60'",
    category: "Other",
    image: "/41.jpg",
  },
  {
    title: "Beautiful 2 Kanal Ghar Design with Layouts and Elevation",
    beds: "5",
    baths: "5",
    floors: "3",
    sqft: "9120 sqft",
    dimension: "118'X83'",
    category: "2 Kanal",
    image: "/42.jpg",
  },
  {
    title: "Luxurious 3 Bedroom 3 Marla House Design",
    beds: "3",
    baths: "4",
    floors: "3",
    sqft: "1103 sqft",
    dimension: "18'x38'",
    category: "3 Marla",
    image: "/43.avif",
  },
  {
    title: "5 Marla House Beautiful Design & 125 Sq Yards",
    beds: "5",
    baths: "5",
    floors: "2",
    sqft: "2477 sqft",
    dimension: "27'x44'",
    category: "5 Marla",
    image: "/44.avif",
  },
  {
    title: "Modern House on Irregular Plot Elevation Design",
    beds: "4",
    baths: "4",
    floors: "2",
    sqft: "3548 sqft",
    dimension: "52'x54'",
    category: "Other",
    image: "/45.avif",
  },
  {
    title: "Single Story 6 Marla House Design & 30×45 House Plan",
    beds: "2",
    baths: "2",
    floors: "1",
    sqft: "1245 sqft",
    dimension: "30'x45'",
    category: "Other",
    image: "/46.avif",
  },
  {
    title: "2 Kanal Modern House Design in Pakistan – 3D Plan",
    beds: "6",
    baths: "9",
    floors: "4",
    sqft: "13704 sqft",
    dimension: "76'0\"x120'0\"",
    category: "2 Kanal",
    image: "/47.avif",
  },
  {
    title: "New Wonderful 20 Marla Bungalow House Design 50ft x 90ft",
    beds: "6",
    baths: "7",
    floors: "2",
    sqft: "6429 sqft",
    dimension: "50'x90'",
    category: "1 Kanal",
    image: "/48.avif",
  },
  {
    title: "New 3 Marla House Map with Double Floor",
    beds: "2",
    baths: "2",
    floors: "2",
    sqft: "1183 sqft",
    dimension: "18'X38'",
    category: "3 Marla",
    image: "/49.avif",
  },
  {
    title: "10 Marla Home Design in Mediterranean Style free of cost",
    beds: "5",
    baths: "5",
    floors: "3",
    sqft: "4279 sqft",
    dimension: "37'X65'",
    category: "10 Marla",
    image: "/50.avif",
  },
  {
    title: "Best 125 square yards house design with 4 bedrooms",
    beds: "4",
    baths: "4",
    floors: "3",
    sqft: "2031 sqft",
    dimension: "25'x45'",
    category: "5 Marla",
    image: "/51.avif",
  },
  {
    title: "Beautiful 15 Marla Corner House Design (50 x 60)",
    beds: "5",
    baths: "6",
    floors: "2",
    sqft: "4077 sqft",
    dimension: "50'x60'",
    category: "10 Marla",
    image: "/52.avif",
  },
];

const categories = [
  "All House Designs",
  "3 Marla / 75 Sq. Yd.",
  "5 Marla / 125 Sq. Yd.",
  "8 Marla / 200 Sq. Yd.",
  "10 Marla / 250 Sq. Yd.",
  "1 Kanal / 500 Sq. Yd.",
  "2 Kanal / 1000 Sq. Yd.",
  "Other House Designs",
];

export default function HouseCatalog() {
  const [selectedCategory, setSelectedCategory] = useState("All House Designs");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedHouse, setSelectedHouse] = useState<any>(null); // State for Pop-up Modal

  const filteredHouses = houses.filter((house) => {
    const matchesSearch =
      house.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      house.sqft.toLowerCase().includes(searchQuery.toLowerCase()) ||
      house.dimension.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "All House Designs" ||
      house.category.toLowerCase().includes(selectedCategory.split(" ")[0].toLowerCase());

    return matchesSearch && matchesCategory;
  });

  const chunkedHouses = [];
  const doubleList = [...filteredHouses, ...filteredHouses]; 
  for (let i = 0; i < doubleList.length; i += 2) {
    chunkedHouses.push(doubleList.slice(i, i + 2));
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 via-purple-950 to-slate-900 text-gray-100 flex flex-col justify-between overflow-x-hidden">
      
      {/* Custom CSS for Vertical Marquee */}
      <style jsx global>{`
        @keyframes verticalMarquee {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        .animate-vertical-marquee {
          display: flex;
          flex-direction: column;
          animation: verticalMarquee 45s linear infinite;
        }
        .animate-vertical-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        
        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-6">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400">
              🔍
            </span>
            <input
              type="text"
              placeholder="Search houses by title, area, bedrooms, bathrooms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-slate-900/80 border border-purple-900/60 rounded-full shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm text-gray-200 placeholder-gray-400"
            />
          </div>
        </div>

        {/* Results Count Details */}
        <div className="text-center mb-8">
          <p className="text-gray-200 font-semibold">{filteredHouses.length} houses found</p>
          <p className="text-gray-400 text-sm">Showing {filteredHouses.length} of {houses.length}</p>
        </div>

        {/* Filter Category Buttons */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {categories.map((category, index) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition shadow-sm ${
                  isActive
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-900/50"
                    : "bg-slate-900/80 text-gray-300 border border-purple-950 hover:bg-purple-950/40 hover:text-white"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Vertical Marquee Scroll Box */}
        <div className="relative w-full h-[650px] overflow-hidden border border-purple-900/30 rounded-2xl bg-slate-950/40 p-4">
          <div className="animate-vertical-marquee flex flex-col gap-6">
            
            {chunkedHouses.map((rowPair, rowIndex) => (
              <div 
                key={rowIndex} 
                className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mx-auto"
              >
                {rowPair.map((house, cardIndex) => (
                  <div
                    key={cardIndex}
                    onClick={() => setSelectedHouse(house)}
                    className="bg-slate-900/90 rounded-xl overflow-hidden border border-purple-900/40 shadow-xl hover:shadow-purple-900/50 transition group flex flex-col sm:flex-row justify-between w-full cursor-pointer hover:border-purple-500"
                  >
                    {/* Card Image */}
                    <div className="relative w-full sm:w-48 h-48 bg-slate-950 overflow-hidden flex-shrink-0">
                      <Image
                        src={house.image}
                        alt={house.title}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-500 opacity-90 group-hover:opacity-100"
                      />
                    </div>

                    {/* Card Content */}
                    <div className="p-4 flex flex-col flex-grow justify-between">
                      <h3 className="text-gray-200 font-semibold text-sm sm:text-base line-clamp-2 group-hover:text-purple-400 transition mb-3">
                        {house.title}
                      </h3>

                      {/* House Specs */}
                      <div className="border-t border-purple-900/40 pt-3 mt-auto">
                        <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                          <span className="flex items-center gap-1">🛏 {house.beds} Beds</span>
                          <span className="flex items-center gap-1">🛁 {house.baths} Baths</span>
                          <span className="flex items-center gap-1">🏠 {house.floors} Floors</span>
                        </div>
                        <div className="flex items-center justify-between text-xs font-medium text-gray-200">
                          <span className="text-purple-400 font-bold">{house.sqft}</span>
                          <span className="text-gray-400">{house.dimension}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}

          </div>
        </div>

        {filteredHouses.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            No houses found matching your criteria.
          </div>
        )}

      </div>

      {/* POPUP MODAL FOR HOUSE DETAILS & MAP VIEW */}
      {selectedHouse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
          <div className="bg-slate-900 border border-purple-500/50 rounded-2xl max-w-2xl w-full p-6 relative shadow-2xl animate-in fade-in zoom-in duration-200 max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedHouse(null)}
              className="absolute top-4 right-4 bg-purple-950/80 hover:bg-purple-700 text-white w-8 h-8 rounded-full flex items-center justify-center transition"
            >
              ✕
            </button>

            {/* Modal Title */}
            <h2 className="text-xl sm:text-2xl font-bold text-purple-300 mb-4 pr-10">
              {selectedHouse.title}
            </h2>

            {/* Big Map / Image */}
            <div className="relative w-full h-72 sm:h-96 rounded-xl overflow-hidden bg-slate-950 mb-6 border border-purple-900/50">
              <Image 
                src={selectedHouse.image} 
                alt={selectedHouse.title} 
                fill 
                className="object-contain"
              />
            </div>

            {/* Complete Specifications Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 bg-slate-950/60 p-4 rounded-xl border border-purple-950 mb-6">
              <div>
                <p className="text-xs text-gray-400">Bedrooms</p>
                <p className="text-sm font-semibold text-gray-200">🛏 {selectedHouse.beds} Beds</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Bathrooms</p>
                <p className="text-sm font-semibold text-gray-200">🛁 {selectedHouse.baths} Baths</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Floors</p>
                <p className="text-sm font-semibold text-gray-200">🏠 {selectedHouse.floors} Floors</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Total Area</p>
                <p className="text-sm font-semibold text-purple-400">{selectedHouse.sqft}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Dimensions</p>
                <p className="text-sm font-semibold text-gray-200">{selectedHouse.dimension}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Category</p>
                <p className="text-sm font-semibold text-indigo-300">{selectedHouse.category}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <a 
                href={`https://wa.me/923000000000?text=I am interested in this house map: ${encodeURIComponent(selectedHouse.title)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-medium text-center transition shadow-lg"
              >
                🟢 Contact on WhatsApp
              </a>
              <button 
                onClick={() => setSelectedHouse(null)}
                className="px-6 bg-slate-800 hover:bg-slate-700 text-gray-300 rounded-xl font-medium transition"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}