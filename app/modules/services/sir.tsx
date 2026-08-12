"use client";

import { useState, useRef, MouseEvent } from "react";
import Image from "next/image";

interface SubService {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  cities: string[];
  additionalCards?: { id: string; title: string; desc: string }[];
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
          { id: "1", title: "Soil Poisoning Phase", desc: "Applying safe chemical barriers to foundation earth." },
          { id: "2", title: "Anti-Termite Piping", desc: "Installing perforated pipes for future chemical re-injection." },
          { id: "3", title: "Damp Proof Course Spray", desc: "Protecting brick masonry levels from subterranean pests." },
          { id: "4", title: "Column Base Shielding", desc: "Targeted spraying around structural pillar trenches." },
          { id: "5", title: "Final Site Clearance", desc: "Post-application inspection before casting floor concrete." },
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
          { id: "1", title: "Wall Drilling & Injection", desc: "Drilling small holes along skirting boards to inject termiticide." },
          { id: "2", title: "Wooden Door Frame Treatment", desc: "Special oil-based protective coating for wooden structures." },
          { id: "3", title: "Lawn & Garden Check", desc: "Checking and treating surrounding outdoor soil patches." },
          { id: "4", title: "Infestation Mapping", desc: "Locating termite nests and mud tunnels inside rooms." },
          { id: "5", title: "Warranty Seal Inspection", desc: "Final verification and issuing maintenance guarantee." },
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
          { id: "1", title: "Surface Deep Cleaning", desc: "Removing dust, loose debris, and algae from roof surfaces." },
          { id: "2", title: "Crack Sealing & Patching", desc: "Filling structural cracks with heavy-duty epoxy mortars." },
          { id: "3", title: "Base Primer Coating", desc: "Applying bonding agents for superior membrane grip." },
          { id: "4", title: "Membrane Sheet Layering", desc: "Laying heat-resistant multi-layered waterproofing rolls." },
          { id: "5", title: "UV Protective Topcoat", desc: "Final reflective coating to withstand intense sunlight." },
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
          { id: "1", title: "Tank Draining & Scrubbing", desc: "Emptying and thoroughly washing internal walls." },
          { id: "2", title: "Leakage Point Identification", desc: "Locating seepage zones around pipe joints and corners." },
          { id: "3", title: "Crystalline Coating", desc: "Applying deep-penetrating crystal formulas to block pores." },
          { id: "4", title: "Food-Grade Epoxy Finish", desc: "Safe, non-toxic waterproof lining for drinking water." },
          { id: "5", title: "Curing & Water Testing", desc: "Filling tank to test integrity before handing over." },
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
          { id: "1", title: "Hydrostatic Pressure Check", desc: "Assessing underground water force against basement walls." },
          { id: "2", title: "Drainage Channel Setup", desc: "Installing internal channels to redirect accumulated water." },
          { id: "3", title: "Negative-Side Sealing", desc: "Applying specialized mortar to block incoming moisture." },
          { id: "4", title: "Sump Pump Integration", desc: "Setting up automated pumps for excess water evacuation." },
          { id: "5", title: "Damp-Proof Plastering", desc: "Applying salt-resistant protective plaster layers." },
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
          { id: "1", title: "Sludge Removal", desc: "Pumping out settled mud, silt, and debris from the bottom." },
          { id: "2", title: "High-Pressure Jet Wash", desc: "Scouring walls and ceiling with professional water jets." },
          { id: "3", title: "Anti-Bacterial Spray", desc: "Disinfecting internal surfaces to kill harmful germs." },
          { id: "4", title: "UV Sterilization Process", desc: "Using ultraviolet light treatment for absolute purity." },
          { id: "5", title: "Water Quality Audit", desc: "Sampling water to ensure safe consumption standards." },
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

export default function CompleteCombinedComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [categorySearch, setCategorySearch] = useState("");
  const [citySearch, setCitySearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | null>(null);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 40;
    const y = (clientY / innerHeight - 0.5) * 40;
    setMousePos({ x, y });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % serviceCategories.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + serviceCategories.length) % serviceCategories.length);
  };

  if (activeCategory) {
    const filteredSubServices = activeCategory.subServices.filter((sub) =>
      sub.cities.some((c) => c.toLowerCase().includes(citySearch.toLowerCase())) ||
      sub.title.toLowerCase().includes(citySearch.toLowerCase())
    );

    return (
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="min-h-screen flex flex-col bg-[#0B0614] font-sans text-purple-100 selection:bg-purple-500 selection:text-white relative overflow-hidden"
      >
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-700/15 rounded-full blur-[120px] pointer-events-none transition-transform duration-300 ease-out"
          style={{ transform: `translate(${mousePos.x * 1.5}px, ${mousePos.y * 1.5}px)` }}
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-indigo-800/15 rounded-full blur-[140px] pointer-events-none transition-transform duration-300 ease-out"
          style={{ transform: `translate(${-mousePos.x * 1.5}px, ${-mousePos.y * 1.5}px)` }}
        ></div>

        <nav className="w-full bg-[#130A24]/90 backdrop-blur-md shadow-lg px-6 py-4 flex items-center justify-between border-b border-purple-900/50 z-20">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveCategory(null)}
              className="px-4 py-2 bg-[#1A102F] text-purple-200 rounded-xl font-bold text-xs sm:text-sm shadow hover:bg-[#23153C] transition flex items-center gap-2 cursor-pointer border border-purple-800/60"
            >
              ⬅ Back to Categories
            </button>
            <span className="text-xs font-semibold text-purple-400 hidden sm:inline">
              {activeCategory.title}
            </span>
          </div>
        </nav>

        <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex-1 space-y-8 z-10">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Services</h2>
            <div className="w-16 h-1 bg-purple-500 mx-auto rounded-full shadow-[0_0_15px_rgba(168,85,247,0.9)]"></div>
            <h3 className="text-xl font-bold text-purple-200">{activeCategory.title}</h3>
            <p className="text-purple-300/80 text-xs sm:text-sm max-w-xl mx-auto">{activeCategory.description}</p>

            <div className="max-w-md mx-auto pt-4">
              <div className="relative flex items-center">
                <span className="absolute left-4 text-purple-400 text-sm">📍</span>
                <input
                  type="text"
                  placeholder="Search services by city..."
                  value={citySearch}
                  onChange={(e) => setCitySearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-[#160D2A] border border-purple-900/60 text-purple-100 placeholder-purple-400/50 rounded-2xl shadow-xl text-sm focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/40 transition"
                />
              </div>
            </div>
          </div>

          <div className="space-y-12 pt-6">
            {filteredSubServices.length > 0 ? (
              filteredSubServices.map((sub) => (
                <div
                  key={sub.id}
                  className="bg-[#150C25]/80 backdrop-blur-md rounded-3xl overflow-hidden border border-purple-900/50 shadow-2xl p-6 sm:p-8 space-y-6"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                    <div className="relative h-56 sm:h-64 w-full overflow-hidden rounded-2xl bg-[#0F081C]">
                      <Image
                        src={sub.image}
                        alt={sub.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="lg:col-span-2 space-y-3">
                      <span className="inline-block px-3 py-1 bg-purple-950/80 text-purple-300 text-xs font-semibold rounded-full border border-purple-800/50">
                        {sub.subtitle}
                      </span>
                      <h4 className="text-xl sm:text-2xl font-black text-white">
                        {sub.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-purple-300/70 leading-relaxed">{sub.description}</p>
                      <div className="flex items-center gap-2 pt-2">
                        <span className="text-xs">📍</span>
                        <span className="text-xs font-semibold text-purple-300">
                          Available in: {sub.cities.join(", ")}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Single Continuous Horizontal Marquee Container for Cards */}
                  {sub.additionalCards && sub.additionalCards.length > 0 && (
                    <div className="pt-4 border-t border-purple-900/50 space-y-4">
                      <div className="flex items-center justify-between">
                        <h5 className="text-sm font-bold text-white uppercase tracking-wider">Service Process & Details</h5>
                        <span className="text-[10px] text-purple-400 bg-purple-950/60 px-2.5 py-1 rounded-full border border-purple-800/50">✨ Live Scrolling Sequence</span>
                      </div>
                      
                      <div className="relative w-full overflow-hidden py-3 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
                        {/* 
                          Using inline flex with standard CSS marquee keyframes 
                          multiplying items x4 for seamless infinite track scrolling 
                        */}
                        <div className="flex gap-4 w-max animate-[card-marquee_25s_linear_infinite] hover:[animation-play-state:paused]">
                          {[...sub.additionalCards, ...sub.additionalCards, ...sub.additionalCards, ...sub.additionalCards].map((card, i) => {
                            const originalIndex = i % sub.additionalCards!.length;
                            return (
                              <div 
                                key={`${card.id}-${i}`} 
                                className="bg-[#1A102F]/90 border border-purple-900/60 p-4 rounded-2xl shadow-lg flex flex-col justify-between hover:border-purple-500 hover:scale-[1.02] transition-all duration-300 relative group w-72 shrink-0 overflow-hidden"
                              >
                                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-indigo-700 text-white font-black text-xs flex items-center justify-center shadow-md border border-purple-400/40 group-hover:rotate-12 transition z-10">
                                  0{originalIndex + 1}
                                </div>
                                
                                <div className="mb-3">
                                  <h6 className="text-xs font-bold text-white mb-1 pr-4">{card.title}</h6>
                                  <p className="text-[11px] text-purple-300/70 leading-snug">{card.desc}</p>
                                </div>

                                <div className="mt-2 pt-2 border-t border-purple-900/40 overflow-hidden whitespace-nowrap relative">
                                  <div className="inline-block animate-[marquee-text_8s_linear_infinite] text-[10px] text-purple-400 font-semibold uppercase tracking-wider">
                                    ⚡ Verified Process &bull; Expert Execution &bull; 100% Quality Guaranteed &bull; Professional Service &bull;&nbsp;
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center text-purple-400 py-12 bg-[#150C25] rounded-3xl border border-purple-900/50 shadow-xl">
                No sub-services found matching your search.
              </div>
            )}
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen flex flex-col bg-[#0B0614] font-sans text-purple-100 selection:bg-purple-500 selection:text-white relative overflow-hidden"
    >
      <div 
        className="absolute top-20 left-1/4 w-[28rem] h-[28rem] bg-purple-700/15 rounded-full blur-[130px] pointer-events-none transition-transform duration-300 ease-out"
        style={{ transform: `translate(${mousePos.x * 2}px, ${mousePos.y * 2}px)` }}
      ></div>
      <div 
        className="absolute bottom-10 right-1/4 w-[32rem] h-[32rem] bg-indigo-800/15 rounded-full blur-[150px] pointer-events-none transition-transform duration-300 ease-out"
        style={{ transform: `translate(${-mousePos.x * 2}px, ${-mousePos.y * 2}px)` }}
      ></div>

      <nav className="w-full bg-[#130A24]/90 backdrop-blur-md shadow-lg px-6 py-4 flex items-center justify-between border-b border-purple-900/50 z-20">
        <div className="flex items-center gap-3">
          <a
            href="/"
            className="px-4 py-2 bg-[#1A102F] text-purple-200 rounded-xl font-bold text-sm shadow hover:bg-[#23153C] transition flex items-center gap-2 border border-purple-800/60"
          >
            🏠 Home
          </a>
          <span className="text-xs font-semibold text-purple-400">Service Categories</span>
        </div>
      </nav>

      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex-1 z-10">
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Service Categories</h2>
            <div className="w-16 h-1 bg-purple-500 mx-auto rounded-full shadow-[0_0_15px_rgba(168,85,247,0.9)]"></div>

            <div className="max-w-md mx-auto pt-2">
              <div className="relative flex items-center">
                <span className="absolute left-4 text-purple-400 font-bold">🔍</span>
                <input
                  type="text"
                  placeholder="Search categories by name..."
                  value={categorySearch}
                  onChange={(e) => setCategorySearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-[#160D2A] border border-purple-900/60 text-purple-100 placeholder-purple-400/50 rounded-2xl shadow-xl text-sm focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/40 transition"
                />
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center py-6 min-h-[460px]">
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-12 z-30 w-12 h-12 bg-[#1A102F] rounded-full shadow-lg border border-purple-900/60 flex items-center justify-center text-purple-200 hover:bg-[#23153C] hover:border-purple-500 transition cursor-pointer"
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
                  transformStyle = "-translate-x-28 scale-90 z-10 opacity-60 -rotate-6";
                } else if (offset === -2) {
                  transformStyle = "-translate-x-48 scale-75 z-0 opacity-30 -rotate-12";
                } else if (offset === 1) {
                  transformStyle = "translate-x-28 scale-90 z-10 opacity-60 rotate-6";
                } else if (offset === 2) {
                  transformStyle = "translate-x-48 scale-75 z-0 opacity-30 rotate-12";
                }

                if (Math.abs(offset) > 2) return null;

                const matchesSearch = service.title.toLowerCase().includes(categorySearch.toLowerCase());

                return (
                  matchesSearch && (
                    <div
                      key={service.id}
                      onClick={() => setCurrentIndex(index)}
                      className={`absolute transition-all duration-500 ease-out cursor-pointer w-72 sm:w-80 h-[380px] rounded-3xl overflow-hidden shadow-2xl border border-purple-900/60 bg-[#160D2A] flex flex-col justify-end p-6 transform ${transformStyle} ${
                        isCenter ? "ring-2 ring-purple-500 border-purple-400 shadow-[0_0_30px_rgba(168,85,247,0.35)]" : ""
                      }`}
                    >
                      <div className="absolute inset-0 z-0 bg-[#0F081C]">
                        <Image src={service.image} alt={service.title} fill sizes="100vw" className="object-cover opacity-75" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0614] via-[#0B0614]/70 to-transparent"></div>
                      </div>

                      <div className="relative z-10 space-y-2 text-white">
                        <p className="text-[10px] font-bold tracking-wider uppercase text-purple-400">{service.subtitle}</p>
                        <h3 className="text-xl font-black">{service.title}</h3>
                        <p className="text-xs text-purple-300/80 line-clamp-2">{service.description}</p>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveCategory(service);
                          }}
                          className="mt-3 inline-block px-4.5 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs rounded-xl shadow-lg transition cursor-pointer"
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
              className="absolute right-2 sm:right-12 z-30 w-12 h-12 bg-[#1A102F] rounded-full shadow-lg border border-purple-900/60 flex items-center justify-center text-purple-200 hover:bg-[#23153C] hover:border-purple-500 transition cursor-pointer"
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
                    ? "w-8 h-2.5 bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.9)]"
                    : "w-2.5 h-2.5 bg-purple-950 hover:bg-purple-700"
                }`}
              ></button>
            ))}
          </div>
        </section>
      </div>

      <Footer />

      {/* Global CSS for Continuous Marquee Animations */}
      <style jsx global>{`
        @keyframes card-marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-text {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-[#130A24]/90 backdrop-blur-md text-purple-300/80 py-8 px-6 border-t border-purple-900/50 mt-auto shadow-2xl z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div>
          <h3 className="text-lg font-bold text-white">Gharplans Services</h3>
          <p className="text-xs text-purple-400/60 mt-1">Providing professional home and construction solutions you can trust.</p>
        </div>
        <div className="text-xs text-purple-400/50">
          &copy; {new Date().getFullYear()} Gharplans. All rights reserved.
        </div>
      </div>
    </footer>
  );
}