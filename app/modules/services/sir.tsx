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
  cities: string[];
  additionalCards?: { id: string; title: string; desc: string; icon: string }[];
}

interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  subServices: SubService[];
}

const serviceCategories: ServiceCategory[] = [
  {
    id: "termite",
    title: "Termite Treatment Service",
    subtitle: "PROFESSIONAL TERMITE TREATMENT",
    image: "/1221.jpg",
    description: "Choosing Ghar Plans termite treatment ensures lasting protection and peace of mind.",
    subServices: [
      {
        id: "pre-construction-termite",
        title: "Pre Construction Termite Treatment Service",
        subtitle: "Termite Treatment Service",
        description: "Comprehensive soil and foundation termite proofing before building.",
        image: "/opp.jpg",
        cities: ["Lahore", "Sialkot", "Islamabad"],
        additionalCards: [
          { id: "1", title: "Soil Poisoning", desc: "Applying safe chemical barriers to foundation earth.", icon: "🦠" },
          { id: "2", title: "Anti-Termite Piping", desc: "Installing perforated pipes for future re-injection.", icon: "🧪" },
          { id: "3", title: "Damp Proof Course", desc: "Protecting brick masonry levels from pests.", icon: "🧱" },
          { id: "4", title: "Column Base Spray", desc: "Targeted spraying around structural pillars.", icon: "🏛️" },
          { id: "5", title: "Final Clearance", desc: "Post-application inspection before casting concrete.", icon: "✅" },
        ],
      },
      {
        id: "post-construction-termite",
        title: "Post Construction Termite Treatment Service",
        subtitle: "Termite Treatment Service",
        description: "Effective liquid barrier treatment for existing homes and buildings.",
        image: "/pos.jpg",
        cities: ["Lahore and Sialkot"],
        additionalCards: [
          { id: "1", title: "Drill & Injection", desc: "Injecting termiticide along skirting boards.", icon: "💉" },
          { id: "2", title: "Wooden Frame Care", desc: "Protective coating for wooden structures.", icon: "🚪" },
          { id: "3", title: "Lawn & Garden", desc: "Checking and treating surrounding outdoor soil.", icon: "🌳" },
          { id: "4", title: "Infestation Map", desc: "Locating nests and tunnels inside rooms.", icon: "🗺️" },
          { id: "5", title: "Warranty Seal", desc: "Final verification and maintenance guarantee.", icon: "📜" },
        ],
      },
    ],
  },
  {
    id: "waterproofing",
    title: "Waterproofing Service",
    subtitle: "PROFESSIONAL WATERPROOFING SERVICE",
    image: "/last.jpg",
    description: "Gharplans waterproofing ensures lasting protection with expert solutions.",
    subServices: [
      {
        id: "roof-waterproofing",
        title: "Roof Waterproofing Service",
        subtitle: "Waterproofing Service",
        description: "Complete roof membrane and chemical coating against leakages.",
        image: "/rofff.jpg",
        cities: ["Lahore", "Karachi", "Rawalpindi"],
        additionalCards: [
          { id: "1", title: "Deep Cleaning", desc: "Removing debris and algae from roof surfaces.", icon: "🧹" },
          { id: "2", title: "Crack Sealing", desc: "Filling structural cracks with epoxy mortars.", icon: "✨" },
          { id: "3", title: "Base Primer", desc: "Applying bonding agents for membrane grip.", icon: "🎨" },
          { id: "4", title: "Membrane Layering", desc: "Laying heat-resistant waterproofing rolls.", icon: "🛡️" },
          { id: "5", title: "UV Topcoat", desc: "Final reflective coating to withstand sun.", icon: "☀️" },
        ],
      },
      {
        id: "water-tank-waterproofing",
        title: "Water Tank Waterproofing Service",
        subtitle: "Waterproofing Service",
        description: "Advanced coating solutions to prevent seepage in underground & overhead tanks.",
        image: "/opp.jpg",
        cities: ["Lahore", "Islamabad"],
        additionalCards: [
          { id: "1", title: "Tank Scrubbing", desc: "Washing internal walls thoroughly.", icon: "🧼" },
          { id: "2", title: "Leakage ID", desc: "Locating seepage zones around joints.", icon: "💧" },
          { id: "3", title: "Crystalline Coat", desc: "Applying deep-penetrating crystal formulas.", icon: "🔮" },
          { id: "4", title: "Food-Grade Epoxy", desc: "Safe, non-toxic waterproof lining.", icon: "🍽️" },
          { id: "5", title: "Water Testing", desc: "Filling tank to test integrity before handover.", icon: "⚖️" },
        ],
      },
      {
        id: "basement-waterproofing",
        title: "Basement Waterproofing Service",
        subtitle: "Waterproofing Service",
        description: "Heavy-duty leakage control and damp-proofing for basements.",
        image: "/pos.jpg",
        cities: ["Lahore", "Rawalpindi"],
        additionalCards: [
          { id: "1", title: "Pressure Check", desc: "Assessing underground water force.", icon: "📊" },
          { id: "2", title: "Drainage Setup", desc: "Installing internal channels for water.", icon: "🌊" },
          { id: "3", title: "Negative Sealing", desc: "Applying mortar to block incoming moisture.", icon: "🛑" },
          { id: "4", title: "Sump Pump", desc: "Setting up pumps for water evacuation.", icon: "⚙️" },
          { id: "5", title: "Damp Plaster", desc: "Applying salt-resistant protective layers.", icon: "🧱" },
        ],
      },
    ],
  },
  {
    id: "water-tanks",
    title: "Water Tanks Service",
    subtitle: "WATER TANKS SERVICE",
    image: "/wha.jpg",
    description: "Keep your water safe and hygienic with professional tank cleaning by Gharplans.",
    subServices: [
      {
        id: "underground-tank-cleaning",
        title: "Underground Water Tank Cleaning",
        subtitle: "Water Tanks Service",
        description: "Deep chemical washing and anti-bacterial treatment.",
        image: "/un.jpg",
        cities: ["Lahore", "Multan"],
        additionalCards: [
          { id: "1", title: "Sludge Removal", desc: "Pumping out settled mud and debris.", icon: "🚯" },
          { id: "2", title: "Jet Wash", desc: "Scouring walls with high-pressure jets.", icon: "🚿" },
          { id: "3", title: "Anti-Bacterial", desc: "Disinfecting internal surfaces.", icon: "🦠" },
          { id: "4", title: "UV Sterilize", desc: "Using ultraviolet light treatment.", icon: "🔦" },
          { id: "5", title: "Quality Audit", desc: "Sampling water to ensure safe standards.", icon: "💯" },
        ],
      },
    ],
  },
  {
    id: "tile-fixing",
    title: "Tile Fixing Service",
    subtitle: "TILE FIXING SERVICE",
    image: "/sei.jpg",
    description: "Gharplans tile fixing service provides precise alignment and durable finish.",
    subServices: [],
  },
  {
    id: "false-ceiling",
    title: "False Ceiling Service",
    subtitle: "FALSE CEILING SERVICE",
    image: "/roff.jpg",
    description: "Gharplans false ceiling solutions deliver modern designs and quality finishes.",
    subServices: [],
  },
];

// Reusable Emotional & Modern Card Wrapper
const EmotionalCard = ({ children, className = "", isCenter = false }: { children: React.ReactNode, className?: string, isCenter?: boolean }) => (
  <div className={`
    bg-[#3D2C66] 
    rounded-3xl 
    overflow-hidden 
    border border-purple-600/50 
    shadow-xl 
    transition-all 
    duration-500 
    ease-out 
    cursor-pointer 
    flex 
    flex-col 
    hover:border-purple-300/80
    hover:-translate-y-2 
    hover:shadow-[0_20px_50px_-12px_rgba(168,85,247,0.5)]
    hover:rotate-1
    ${isCenter ? "ring-2 ring-purple-300/50 shadow-2xl shadow-purple-900/50" : ""}
    ${className}
  `}>
    {children}
  </div>
);

export default function CompleteCombinedComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [categorySearch, setCategorySearch] = useState("");
  const [citySearch, setCitySearch] = useState("");
  
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | null>(null);
  const [activeSubService, setActiveSubService] = useState<SubService | null>(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % serviceCategories.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + serviceCategories.length) % serviceCategories.length);
  };

  // -------------------------------------------------------------
  // VIEW 3: Detailed Service Page (Image view + 5 Emotional Cards)
  // -------------------------------------------------------------
  if (activeSubService && activeCategory) {
    return (
      <div className="min-h-screen flex flex-col bg-[#302052] font-sans text-purple-100 selection:bg-purple-500 selection:text-white">
        <nav className="w-full bg-[#3D2C66] shadow-md px-6 py-4 flex items-center justify-between border-b border-purple-600/40">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveSubService(null)}
              className="px-4 py-2 bg-[#302052] text-purple-200 rounded-xl font-bold text-xs sm:text-sm shadow hover:bg-[#281A46] transition flex items-center gap-2 cursor-pointer border border-purple-500/60 hover:border-purple-300"
            >
              ⬅ Back to Sub-Services
            </button>
            <span className="text-xs font-semibold text-purple-300 hidden sm:inline">
              {activeCategory.title} / {activeSubService.title}
            </span>
          </div>
        </nav>

        <div className="bg-[#3D2C66] py-12 px-4 text-center text-white space-y-4 border-b border-purple-600/40">
          <span className="inline-block px-4 py-1.5 bg-purple-700/60 text-purple-200 text-xs font-semibold rounded-full border border-purple-500/60">
            {activeSubService.subtitle}
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold max-w-3xl mx-auto leading-tight text-white">
            {activeSubService.title}
          </h1>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-12 w-full flex-1 space-y-16">
          {/* Single Image Section with Emotional Effect */}
          <div className="max-w-2xl mx-auto relative">
            <div className="absolute -inset-4 bg-purple-900/20 rounded-[2rem] blur-sm transition-all duration-500"></div>
            <div className="absolute -inset-2 bg-indigo-900/30 rounded-[2.5rem] blur-md rotate-2 opacity-60"></div>
            
            <EmotionalCard className="relative aspect-[16/10] z-10 group hover:rotate-0">
              <Image
                src={activeSubService.image}
                alt={activeSubService.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3D2C66]/90 via-[#3D2C66]/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <h2 className="text-2xl font-bold text-white">{activeSubService.title}</h2>
                <p className="text-xs text-purple-200 mt-1 opacity-90">{activeSubService.description}</p>
              </div>
            </EmotionalCard>
          </div>

          {/* 5 Emotional Cards Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">Service Process & Details</h3>
              <p className="text-xs sm:text-sm text-purple-300 mt-1 max-w-lg mx-auto">We ensure total transparency and quality at every step. Here's what's included:</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {activeSubService.additionalCards?.map((card, i) => (
                <EmotionalCard key={card.id} className="p-6 group hover:-translate-y-2 hover:shadow-purple-500/30 hover:scale-[1.02]">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <span className="w-12 h-12 rounded-2xl bg-purple-900/60 text-purple-300 font-black text-lg flex items-center justify-center border border-purple-700/50 shadow-inner group-hover:bg-purple-700 group-hover:text-white transition-all">
                        {card.icon}
                      </span>
                      <span className="text-6xl font-extrabold text-purple-900/30 group-hover:text-purple-900/50 transition-colors">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white mb-2 group-hover:text-purple-100">{card.title}</h4>
                    <p className="text-xs text-purple-300/90 leading-relaxed flex-1">{card.desc}</p>
                    <div className="mt-4 h-1.5 w-10 bg-purple-700 rounded-full group-hover:w-full group-hover:bg-purple-400 transition-all duration-500"></div>
                  </div>
                </EmotionalCard>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 pt-4 justify-center">
            <span className="p-3 bg-[#3D2C66] text-purple-300 rounded-xl text-sm border border-purple-600/40 shadow-md">📍</span>
            <div className="px-6 py-3 bg-[#3D2C66] text-purple-200 font-semibold text-xs sm:text-sm rounded-xl border border-purple-600/40 shadow-md">
              Available in: {activeSubService.cities.join(", ")}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // VIEW 2: Sub-Services List Page (Cards Grid view)
  // -------------------------------------------------------------
  if (activeCategory) {
    const filteredSubServices = activeCategory.subServices.filter((sub) =>
      sub.cities.some((c) => c.toLowerCase().includes(citySearch.toLowerCase())) ||
      sub.title.toLowerCase().includes(citySearch.toLowerCase())
    );

    return (
      <div className="min-h-screen flex flex-col bg-[#302052] font-sans text-purple-100 selection:bg-purple-500 selection:text-white">
        <nav className="w-full bg-[#3D2C66] shadow-md px-6 py-4 flex items-center justify-between border-b border-purple-600/40">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveCategory(null)}
              className="px-4 py-2 bg-[#302052] text-purple-200 rounded-xl font-bold text-xs sm:text-sm shadow hover:bg-[#281A46] transition flex items-center gap-2 cursor-pointer border border-purple-500/60 hover:border-purple-300"
            >
              ⬅ Back to Categories
            </button>
            <span className="text-xs font-semibold text-purple-300 hidden sm:inline">
              {activeCategory.title}
            </span>
          </div>
        </nav>

        <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex-1 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Services</h2>
            <div className="w-16 h-1 bg-purple-400 mx-auto rounded-full"></div>
            <h3 className="text-xl font-bold text-purple-200">{activeCategory.title}</h3>
            <p className="text-purple-300 text-xs sm:text-sm max-w-xl mx-auto">{activeCategory.description}</p>

            <div className="max-w-md mx-auto pt-4">
              <div className="relative flex items-center">
                <span className="absolute left-4 text-purple-300 text-sm">📍</span>
                <input
                  type="text"
                  placeholder="Search services by city..."
                  value={citySearch}
                  onChange={(e) => setCitySearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-[#3D2C66] border border-purple-500/60 text-purple-100 placeholder-purple-300/60 rounded-2xl shadow-xl text-sm focus:outline-none focus:border-purple-300 focus:ring-1 focus:ring-purple-300 transition"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6">
            {filteredSubServices.length > 0 ? (
              filteredSubServices.map((sub) => (
                <EmotionalCard
                  key={sub.id}
                  onClick={() => setActiveSubService(sub)}
                  className="group"
                >
                  <div className="relative h-64 w-full overflow-hidden bg-[#281A46]">
                    <Image
                      src={sub.image}
                      alt={sub.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3D2C66] via-transparent to-transparent opacity-80"></div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-white group-hover:text-purple-200 transition">
                        {sub.title}
                      </h4>
                      <p className="text-xs text-purple-300/80 mt-2 line-clamp-2">{sub.description}</p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-purple-600/40 flex items-center justify-between text-xs text-purple-300 font-semibold">
                      <span className="text-purple-200 truncate max-w-[170px]">📍 {sub.cities.join(", ")}</span>
                      <span className="text-purple-300 font-bold group-hover:translate-x-1.5 transition-transform duration-300 whitespace-nowrap flex items-center gap-1">
                        View Details &rarr;
                      </span>
                    </div>
                  </div>
                </EmotionalCard>
              ))
            ) : (
              <div className="col-span-full text-center text-purple-300 py-12 bg-[#3D2C66] rounded-3xl border border-purple-600/40">
                No sub-services found matching your search.
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // VIEW 1: Main Stack Carousel Page
  // -------------------------------------------------------------
  return (
    <div className="min-h-screen flex flex-col bg-[#302052] font-sans text-purple-100 selection:bg-purple-500 selection:text-white">
      <nav className="w-full bg-[#3D2C66] shadow-md px-6 py-4 flex items-center justify-between border-b border-purple-600/40">
        <div className="flex items-center gap-3">
          <a
            href="/"
            className="px-4 py-2 bg-[#302052] text-purple-200 rounded-xl font-bold text-sm shadow hover:bg-[#281A46] transition flex items-center gap-2 border border-purple-500/60 hover:border-purple-300"
          >
            🏠 Home
          </a>
          <span className="text-xs font-semibold text-purple-300">Service Categories</span>
        </div>
      </nav>

      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex-1">
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Service Categories</h2>
            <div className="w-16 h-1 bg-purple-400 mx-auto rounded-full"></div>

            <div className="max-w-md mx-auto pt-2">
              <div className="relative flex items-center">
                <span className="absolute left-4 text-purple-300 font-bold">🔍</span>
                <input
                  type="text"
                  placeholder="Search categories by name..."
                  value={categorySearch}
                  onChange={(e) => setCategorySearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-[#3D2C66] border border-purple-500/60 text-purple-100 placeholder-purple-300/60 rounded-2xl shadow-xl text-sm focus:outline-none focus:border-purple-300 focus:ring-1 focus:ring-purple-300 transition"
                />
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center py-6 min-h-[460px]">
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-12 z-30 w-12 h-12 bg-[#3D2C66] rounded-full shadow-lg border border-purple-500/60 flex items-center justify-center text-purple-200 hover:bg-[#281A46] hover:border-purple-300 transition cursor-pointer"
            >
              ❮
            </button>

            <div className="relative w-full max-w-sm h-[420px] flex items-center justify-center">
              {serviceCategories.map((service, index) => {
                let offset = index - currentIndex;

                if (offset < -2) offset += serviceCategories.length;
                if (offset > 2) offset -= serviceCategories.length;

                const isCenter = offset === 0;

                let transformStyle = "translate-x-0 scale-100 z-20 opacity-100 rotate-0";
                if (offset === -1) {
                  transformStyle = "-translate-x-28 scale-90 z-10 opacity-70 -rotate-6";
                } else if (offset === -2) {
                  transformStyle = "-translate-x-48 scale-75 z-0 opacity-40 -rotate-12";
                } else if (offset === 1) {
                  transformStyle = "translate-x-28 scale-90 z-10 opacity-70 rotate-6";
                } else if (offset === 2) {
                  transformStyle = "translate-x-48 scale-75 z-0 opacity-40 rotate-12";
                }

                if (Math.abs(offset) > 2) return null;

                const matchesSearch = service.title.toLowerCase().includes(categorySearch.toLowerCase());

                return (
                  matchesSearch && (
                    <div
                      key={service.id}
                      onClick={() => setCurrentIndex(index)}
                      className={`absolute transition-all duration-500 ease-out cursor-pointer w-72 sm:w-80 h-[380px] rounded-3xl overflow-hidden shadow-2xl border border-purple-500/60 bg-[#3D2C66] flex flex-col justify-end p-6 transform ${transformStyle} ${
                        isCenter ? "ring-2 ring-purple-300/80 border-purple-300 shadow-2xl hover:scale-105" : "hover:opacity-90"
                      }`}
                    >
                      <div className="absolute inset-0 z-0 bg-[#281A46]">
                        <Image src={service.image} alt={service.title} fill sizes="100vw" className="object-cover opacity-85" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#302052] via-[#302052]/70 to-transparent"></div>
                      </div>

                      <div className="relative z-10 space-y-2 text-white">
                        <p className="text-[10px] font-bold tracking-wider uppercase text-purple-300">{service.subtitle}</p>
                        <h3 className="text-xl font-black">{service.title}</h3>
                        <p className="text-xs text-purple-200/80 line-clamp-2">{service.description}</p>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveCategory(service);
                          }}
                          className="mt-3 inline-block px-4.5 py-2 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-purple-900/40 transition cursor-pointer"
                        >
                          LEARN MORE
                        </button>
                      </div>
                    </div>
                  )
                );
              })}
            </div>

            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-12 z-30 w-12 h-12 bg-[#3D2C66] rounded-full shadow-lg border border-purple-500/60 flex items-center justify-center text-purple-200 hover:bg-[#281A46] hover:border-purple-300 transition cursor-pointer"
            >
              ❯
            </button>
          </div>

          <div className="flex justify-center items-center gap-2 pt-2">
            {serviceCategories.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all rounded-full cursor-pointer ${
                  currentIndex === idx
                    ? "w-8 h-2.5 bg-purple-300"
                    : "w-2.5 h-2.5 bg-purple-900 hover:bg-purple-500"
                }`}
              ></button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}