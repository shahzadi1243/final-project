"use client";

import { useState } from "react";
import Image from "next/image";

// GharPlans Exclusive Blog Data
const blogPosts = [
  {
    id: 1,
    title: "Total Cost Of Constructing 1 Kanal House in Pakistan (2026 Update)",
    category: "Cost of Construction",
    date: "August 2026",
    readTime: "6 min read",
    author: "GharPlans Expert",
    image: "/bi.jpg",
    snippet: "Living in a spacious home is what a 1 kanal / 20 marla house promises, but how can that dream be realised? Let's break down the exact estimates...",
    content: `Constructing a 1 Kanal (20 Marla) house in Pakistan requires careful financial planning. The total cost is generally divided into two major phases: Grey Structure and Finishing.\n\n1. Grey Structure Cost:\nThis includes excavation, foundation, damp-proof course, RCC framework, brick masonry, plastering, roof slab casting, and underground water tanks. For a 1 Kanal house having a covered area of around 4,500 to 5,000 sq ft, the grey structure typically consumes 45% to 50% of the total budget.\n\n2. Finishing Cost:\nFinishing includes flooring (tiles/wood), electrical wiring and fixtures, plumbing, kitchen cabinets, wardrobes, paint, doors, windows, and bathroom fittings. Quality of materials drastically dictates this portion.\n\nPro Tip: Always keep a 10% contingency buffer in your total construction budget for unexpected price fluctuations of steel and cement.`
  },
  {
    id: 2,
    title: "6 Modern Pond Designs: A Guide for Outdoor Designs for Pakistani Homes",
    category: "Environment/ Landscaping",
    date: "July 2026",
    readTime: "4 min read",
    author: "Landscape Architect",
    image: "/pond.jpg",
    snippet: "Transform your lawn or courtyard into a serene paradise with these 6 modern garden pond and water fountain ideas tailored for Pakistani climates...",
    content: `Water features add a tranquil, cooling effect to Pakistani homes, which often face scorching summer months. Incorporating a pond requires proper planning regarding waterproofing, filtration systems, and water recirculation.\n\n1. Formal Geometric Ponds: Perfect for modern minimalist villas.\n2. Naturalistic Koi Ponds: Surrounded by rocks and aquatic plants.\n3. Wall-Mounted Water Cascades: Great for small backyards or terraces.\n\nMake sure to include a mechanical biological filter to prevent algae buildup in Lahore or Karachi's humid/hot environments.`
  },
  {
    id: 3,
    title: "Grey Industrial Interior Design in Pakistan: Tropical Home Decor Ideas",
    category: "Architecture/ House Design",
    date: "July 2026",
    readTime: "5 min read",
    author: "Interior Designer",
    image: "/dicor.jpg",
    snippet: "Exposed concrete finishes, metallic accents, and raw industrial aesthetics are taking over urban Pakistani home interiors. Here is how to style it...",
    content: `Industrial design isn't just for warehouses anymore. In cities like Islamabad and Lahore, homeowners are embracing raw, unfinished looks combined with lush tropical greenery.\n\nKey Elements:\n- Exposed brick or concrete textured walls.\n- Black matte iron staircase railings and light fixtures.\n- Warm yellow lighting to balance the cold grey tones.\n- Indoor tropical palms like Monstera and Areca to soften the robust look.`
  },
  {
    id: 4,
    title: "Latest Modern Bed Designs for Pakistani Bedrooms 2026",
    category: "Interior Designing",
    date: "June 2026",
    readTime: "4 min read",
    author: "Furniture Specialist",
    image: "/bedrom.jpg",
    snippet: "Discover trending hydraulic storage bed frames, upholstered velvet headboards, and custom wooden platform designs for modern bedrooms...",
    content: `Your bedroom is your sanctuary. In 2026, functionality meets luxury in Pakistani interior trends.\n\n- Hydraulic Storage Beds: Essential for maximizing space in urban apartments and smaller houses.\n- Fluted Wooden Panels: Wall paneling behind the bed headboard is currently dominating master bedroom aesthetics.\n- Neutral & Earthy Tones: Off-whites, muted greys, and warm walnut wood finishes are replacing high-gloss laminates.`
  },
  {
    id: 5,
    title: "Cost of Construction of 36 Marla House in Pakistan",
    category: "Cost of Construction",
    date: "June 2026",
    readTime: "7 min read",
    author: "Cost Estimator",
    image: "/5.jpg",
    snippet: "A deep dive into building large-scale estate homes, covering material estimations, labor rates, and architectural considerations...",
    content: `Building a 36 Marla mega-mansion requires precise logistical execution. From heavy machinery rental to specialized landscaping, every square foot multiplies the cost exponentially.\n\nKey expense drivers include boundary wall construction, extensive electrical automation, multi-car basement parking, and high-end imported marble or tile flooring.`
  },
  {
    id: 6,
    title: "3 Unique Curtain Styles for Modern Pakistani Home Decor",
    category: "House Furnishing",
    date: "May 2026",
    readTime: "3 min read",
    author: "Styling Expert",
    image: "/6.jpg",
    snippet: "Elevate your living room aesthetics with layered sheer curtains, motorized blinds, and elegant ceiling-to-floor drapery panels...",
    content: `Curtains frame your windows and dictate how natural light enters your living areas. \n\n1. Double-Layered Sheers & Blackouts: Practical for privacy and blocking intense sunlight.\n2. Ceiling-Mounted Tracks: Creates an optical illusion of higher ceilings.\n3. Minimalist Grommet Drapers: Best suited for contemporary drawing rooms.`
  },
];

const categories = [
  "All Categories",
  "Cost of Construction",
  "Architecture/ House Design",
  "Interior Designing",
  "House Furnishing",
  "Environment/ Landscaping",
];

export default function GharPlansBlogsNew() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeBlog, setActiveBlog] = useState<any>(null);

  const filteredBlogs = blogPosts.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.snippet.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "All Categories" || blog.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#070B14] text-slate-100 selection:bg-amber-500 selection:text-slate-950 font-sans">
      
      {/* GharPlans Official Navigation Bar */}
      <Navbar />

      <div className="flex-1 py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase px-4 py-1.5 rounded-full mb-4 shadow-sm">
            <span>🏗️</span> GharPlans Official Knowledge Base
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Explore Our Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">Articles</span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
            Your ultimate resource for construction cost estimates, architectural design ideas, and high-end home furnishing trends across Pakistan.
          </p>
        </div>

        {/* Search Bar Wrapper */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="relative group">
            <span className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none text-amber-400 text-lg">
              🔍
            </span>
            <input
              type="text"
              placeholder="Search by article title or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-13 pr-6 py-4 bg-[#10172A] border border-slate-800 rounded-2xl shadow-xl focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-sm sm:text-base text-slate-200 placeholder-slate-500 transition-all duration-300"
            />
          </div>
        </div>

        {/* Categories Pills */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-14">
          {categories.map((cat, idx) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 shadow-lg shadow-amber-500/25 scale-105"
                    : "bg-[#10172A] text-slate-300 border border-slate-800 hover:border-amber-500/40 hover:text-white"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Featured Post Card */}
        {selectedCategory === "All Categories" && searchQuery === "" && blogPosts.length > 0 && (
          <div 
            onClick={() => setActiveBlog(blogPosts[0])}
            className="mb-16 bg-[#10172A] border border-slate-800/80 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 group cursor-pointer hover:border-amber-500/60 transition-all duration-500"
          >
            <div className="lg:col-span-6 relative h-72 lg:h-auto min-h-[360px] bg-slate-950 overflow-hidden">
              <Image 
                src={blogPosts[0].image} 
                alt={blogPosts[0].title} 
                fill 
                className="object-cover group-hover:scale-110 transition duration-700 ease-out"
              />
              <div className="absolute top-4 left-4 bg-amber-500 text-slate-950 text-xs font-black uppercase px-3.5 py-1.5 rounded-lg shadow-md">
                Featured Post
              </div>
            </div>
            <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-xs font-bold text-amber-400 mb-3">
                  <span>{blogPosts[0].category}</span>
                  <span>•</span>
                  <span>{blogPosts[0].date}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-amber-400 transition-colors duration-300 mb-4 leading-snug">
                  {blogPosts[0].title}
                </h2>
                <p className="text-slate-400 text-sm sm:text-base line-clamp-3 mb-6 leading-relaxed">
                  {blogPosts[0].snippet}
                </p>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-400 pt-6 border-t border-slate-800/80">
                <span className="font-semibold text-slate-300">By {blogPosts[0].author}</span>
                <span className="text-amber-400 font-bold flex items-center gap-1.5 group-hover:translate-x-2 transition-transform duration-300">
                  Read Article &rarr;
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              onClick={() => setActiveBlog(blog)}
              className="bg-[#10172A] border border-slate-800/80 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between cursor-pointer hover:border-amber-500/60 hover:-translate-y-1.5"
            >
              <div>
                <div className="relative h-56 w-full bg-slate-950 overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3 bg-[#070B14]/80 backdrop-blur-md text-amber-300 text-xs font-semibold px-3 py-1 rounded-full border border-slate-700/50">
                    {blog.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2.5">
                    <span>{blog.date}</span>
                    <span className="text-slate-400">{blog.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors duration-300 line-clamp-2 mb-3 leading-snug">
                    {blog.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                    {blog.snippet}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-slate-300">{blog.author}</span>
                  <span className="text-amber-400 font-bold group-hover:translate-x-1.5 transition-transform duration-300 flex items-center gap-1">
                    Read More &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredBlogs.length === 0 && (
          <div className="text-center py-20 bg-[#10172A] rounded-3xl border border-slate-800">
            <p className="text-base text-slate-400 font-medium">No articles found matching your search.</p>
          </div>
        )}

        {/* Detailed Modal Popup */}
        {activeBlog && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4">
            <div className="bg-[#10172A] border border-amber-500/40 rounded-3xl max-w-3xl w-full p-6 sm:p-10 relative shadow-2xl max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-300">
              
              <button
                onClick={() => setActiveBlog(null)}
                className="absolute top-5 right-5 bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-white w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg cursor-pointer"
              >
                ✕
              </button>

              <div className="flex flex-wrap items-center gap-3 text-xs text-amber-400 font-bold mb-3">
                <span className="bg-amber-500/10 px-3.5 py-1 rounded-full border border-amber-500/20">{activeBlog.category}</span>
                <span>•</span>
                <span>{activeBlog.date}</span>
                <span>•</span>
                <span>{activeBlog.readTime}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 leading-snug">
                {activeBlog.title}
              </h2>

              <p className="text-xs text-slate-400 mb-6">Article authored by <strong className="text-slate-200">{activeBlog.author}</strong></p>

              <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden bg-slate-950 mb-6 border border-slate-800">
                <Image 
                  src={activeBlog.image} 
                  alt={activeBlog.title} 
                  fill 
                  className="object-cover"
                />
              </div>

              <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line mb-8">
                {activeBlog.content}
              </div>

              <div className="flex justify-end pt-4 border-t border-slate-800">
                <button
                  onClick={() => setActiveBlog(null)}
                  className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-sm transition-all duration-300 shadow-lg shadow-amber-500/20 cursor-pointer"
                >
                  Close Reading
                </button>
              </div>

            </div>
          </div>
        )}

      </div>

      {/* Footer & Floating WhatsApp */}
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

// GharPlans Official Navbar Component
function Navbar() {
  return (
    <nav className="bg-[#10172A]/90 backdrop-blur-md sticky top-0 z-50 border-b border-slate-800 px-4 sm:px-8 py-3.5 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2.5">
          <span className="text-2xl">🏗️</span>
          <span className="text-xl font-extrabold tracking-tight text-white">
            Ghar<span className="text-amber-400">Plans</span>
          </span>
        </div>

        {/* Navigation Links / Icons */}
        <div className="flex items-center gap-4 text-slate-300 text-sm">
          <button className="hidden sm:block hover:text-amber-400 transition font-medium">Home</button>
          <button className="hidden sm:block hover:text-amber-400 transition font-medium">Plans</button>
          <button className="hidden sm:block hover:text-amber-400 transition font-medium text-amber-400">Blogs</button>
          <div className="flex items-center gap-3 pl-2 border-l border-slate-700">
            <span className="cursor-pointer hover:text-amber-400 transition" title="Notifications">🔔</span>
            <span className="cursor-pointer hover:text-amber-400 transition" title="Wishlist">❤️</span>
            <span className="cursor-pointer hover:text-amber-400 transition" title="User Profile">👤</span>
          </div>
        </div>

      </div>
    </nav>
  );
}

// Professional Footer Component with Social Links
function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-950 via-purple-950 to-gray-950 text-gray-200 py-6 px-6 mt-auto border-t border-purple-500/30 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        
        <div>
          <h3 className="text-sm font-bold text-amber-300">Gharplans Services</h3>
          <p className="text-xs text-gray-300 mt-1">📞 +92 3--------- | ✉️ shahzadirai55@gmail.com</p>
          <p className="text-[10px] text-gray-400 mt-1">&copy; {new Date().getFullYear()} Gharplans. All rights reserved.</p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-1.5">
          <span className="text-xs font-semibold text-amber-300">Connect With Us:</span>
          <div className="flex items-center gap-2">
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="w-7 h-7 bg-purple-900/40 hover:bg-purple-600/60 border border-purple-500/30 rounded-full flex items-center justify-center transition text-xs shadow-md" title="WhatsApp">🟢</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-7 h-7 bg-purple-900/40 hover:bg-purple-600/60 border border-purple-500/30 rounded-full flex items-center justify-center transition text-xs shadow-md" title="Facebook">📘</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-7 h-7 bg-purple-900/40 hover:bg-purple-600/60 border border-purple-500/30 rounded-full flex items-center justify-center transition text-xs shadow-md" title="Instagram">📸</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-7 h-7 bg-purple-900/40 hover:bg-purple-600/60 border border-purple-500/30 rounded-full flex items-center justify-center transition text-xs shadow-md" title="YouTube">▶️</a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="w-7 h-7 bg-purple-900/40 hover:bg-purple-600/60 border border-purple-500/30 rounded-full flex items-center justify-center transition text-xs shadow-md" title="TikTok">🎵</a>
            <a href="https://imo.im" target="_blank" rel="noopener noreferrer" className="w-7 h-7 bg-purple-900/40 hover:bg-purple-600/60 border border-purple-500/30 rounded-full flex items-center justify-center transition text-xs shadow-md" title="IMO">💬</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

// Floating WhatsApp Button Component
function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a 
        href="https://whatsapp.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-xl transition transform hover:scale-110 text-3xl"
        title="Chat on WhatsApp"
      >
        💬
      </a>
    </div>
  );
}