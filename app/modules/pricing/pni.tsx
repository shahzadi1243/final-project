"use client";

import { useState, useEffect } from "react";

// --- Pricing Data for Tables ---
const premiumWithoutBasement = [
  { plotSize: "Upto 7 marlas", col1: "Rs. 165,000", col2: "Rs. 99,000", col3: "Rs. 330,000", col4: "Rs. 33,000" },
  { plotSize: "8 Marlas to 12 marlas", col1: "Rs. 209,000", col2: "Rs. 143,000", col3: "Rs. 440,000", col4: "Rs. 44,000" },
  { plotSize: "13 Marlas to 19 Marlas", col1: "Rs. 253,000", col2: "Rs. 165,000", col3: "Rs. 550,000", col4: "Rs. 55,000" },
  { plotSize: "1 Kanal to 30 Marlas", col1: "Rs. 352,000", col2: "Rs. 209,000", col3: "Rs. 660,000", col4: "Rs. 66,000" },
  { plotSize: "31 Marlas to 2 Kanals", col1: "Rs. 495,000", col2: "Rs. 253,000", col3: "Rs. 880,000", col4: "Rs. 88,000" },
  { plotSize: "41 Marlas to 4 Kanals", col1: "Rs. 770,000", col2: "Rs. 330,000", col3: "Rs. 1,100,000", col4: "Rs. 110,000" },
  { plotSize: "More than 4 Kanals", col1: "Rs. 1,100,000", col2: "Rs. 495,000", col3: "Rs. 1,430,000", col4: "Rs. 165,000" },
];

const premiumWithBasement = [
  { plotSize: "Upto 7 marlas", col1: "Rs. 198,000", col2: "Rs. 118,800", col3: "Rs. 396,000", col4: "Rs. 39,600" },
  { plotSize: "8 Marlas to 12 marlas", col1: "Rs. 250,800", col2: "Rs. 171,600", col3: "Rs. 528,000", col4: "Rs. 52,800" },
  { plotSize: "13 Marlas to 19 Marlas", col1: "Rs. 303,600", col2: "Rs. 198,000", col3: "Rs. 660,000", col4: "Rs. 66,000" },
  { plotSize: "1 Kanal to 30 Marlas", col1: "Rs. 422,400", col2: "Rs. 250,800", col3: "Rs. 792,000", col4: "Rs. 79,200" },
  { plotSize: "31 Marlas to 2 Kanals", col1: "Rs. 594,000", col2: "Rs. 303,600", col3: "Rs. 1,056,000", col4: "Rs. 105,600" },
  { plotSize: "41 Marlas to 4 Kanals", col1: "Rs. 924,000", col2: "Rs. 396,000", col3: "Rs. 1,320,000", col4: "Rs. 132,000" },
  { plotSize: "More than 4 Kanals", col1: "Rs. 1,320,000", col2: "Rs. 594,000", col3: "Rs. 1,716,000", col4: "Rs. 198,000" },
];

const budgetWithoutBasement = [
  { plotSize: "Upto 7 marlas", col1: "Rs. 110,000", col2: "Rs. 66,000", col3: "Rs. 220,000", col4: "Rs. 22,000" },
  { plotSize: "8 Marlas to 12 marlas", col1: "Rs. 139,000", col2: "Rs. 95,000", col3: "Rs. 293,000", col4: "Rs. 29,000" },
  { plotSize: "13 Marlas to 19 Marlas", col1: "Rs. 168,000", col2: "Rs. 110,000", col3: "Rs. 366,000", col4: "Rs. 36,000" },
  { plotSize: "1 Kanal to 30 Marlas", col1: "Rs. 234,000", col2: "Rs. 139,000", col3: "Rs. 439,000", col4: "Rs. 43,000" },
  { plotSize: "31 Marlas to 2 Kanals", col1: "Rs. 330,000", col2: "Rs. 168,000", col3: "Rs. 586,000", col4: "Rs. 58,000" },
  { plotSize: "41 Marlas to 4 Kanals", col1: "Rs. 513,000", col2: "Rs. 220,000", col3: "Rs. 733,000", col4: "Rs. 73,000" },
  { plotSize: "More than 4 Kanals", col1: "Rs. 733,000", col2: "Rs. 330,000", col3: "Rs. 953,000", col4: "Rs. 110,000" },
];

const budgetWithBasement = [
  { plotSize: "Upto 7 marlas", col1: "Rs. 132,000", col2: "Rs. 79,200", col3: "Rs. 264,000", col4: "Rs. 26,400" },
  { plotSize: "8 Marlas to 12 marlas", col1: "Rs. 166,800", col2: "Rs. 114,000", col3: "Rs. 351,600", col4: "Rs. 34,800" },
  { plotSize: "13 Marlas to 19 Marlas", col1: "Rs. 201,600", col2: "Rs. 132,000", col3: "Rs. 439,200", col4: "Rs. 43,200" },
  { plotSize: "1 Kanal to 30 Marlas", col1: "Rs. 280,800", col2: "Rs. 166,800", col3: "Rs. 526,800", col4: "Rs. 51,600" },
  { plotSize: "31 Marlas to 2 Kanals", col1: "Rs. 396,000", col2: "Rs. 201,600", col3: "Rs. 703,200", col4: "Rs. 69,600" },
  { plotSize: "41 Marlas to 4 Kanals", col1: "Rs. 615,600", col2: "Rs. 264,000", col3: "Rs. 879,600", col4: "Rs. 87,600" },
  { plotSize: "More than 4 Kanals", col1: "Rs. 879,600", col2: "Rs. 396,000", col3: "Rs. 1,143,600", col4: "Rs. 132,000" },
];

export default function DesigningPricesPage() {
  const [loading, setLoading] = useState(true);
  const [pricingType, setPricingType] = useState<"premium" | "budget">("premium");
  const [basementType, setBasementType] = useState<"without" | "with">("without");

  // Splash/Welcome screen timer (2 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const getCurrentTableData = () => {
    if (pricingType === "premium") {
      return basementType === "without" ? premiumWithoutBasement : premiumWithBasement;
    } else {
      return basementType === "without" ? budgetWithoutBasement : budgetWithBasement;
    }
  };

  const tableData = getCurrentTableData();

  // Welcome Screen with your selected logo image
  if (loading) {
    return (
      <div className="fixed inset-0 bg-purple-950 flex flex-col items-center justify-center text-white z-50 space-y-4">
        <div className="bg-white p-4 rounded-2xl shadow-2xl animate-bounce">
          <img src="/pg4.png" alt="Logo" className="h-20 w-auto object-contain" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-black tracking-wider text-purple-200 animate-pulse">
          Welcome to Designing Prices
        </h1>
        <p className="text-xs text-purple-300 font-medium">Please wait while we load your dashboard...</p>
      </div>
    );
  }

  // Main Page Content
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      
      {/* Navbar Section */}
      <nav className="w-full bg-white shadow-sm px-6 py-4 flex items-center justify-between border-b border-slate-200">
        <div className="flex items-center gap-3">
          <img src="/pg4.png" alt="Logo" className="h-9 w-auto object-contain" />
          <a
            href="/"
            className="px-4 py-2 bg-purple-900 text-white rounded-xl font-bold text-sm shadow hover:bg-purple-800 transition flex items-center gap-2"
          >
            🏠 Home
          </a>
          <span className="text-xs font-semibold text-slate-500">Designing Prices Page</span>
        </div>
      </nav>

      {/* Main Container */}
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-12">
        
        {/* Header Title & Subtitle */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl sm:text-4xl font-black text-purple-950 tracking-tight">Designing Prices</h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Select your plot size and see the pricing for Layout, Structure, Interior, and BoQs.
          </p>

          {/* Pricing Tier Switcher */}
          <div className="flex justify-center pt-4">
            <div className="inline-flex bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm gap-2">
              <button
                onClick={() => setPricingType("premium")}
                className={`px-6 py-2.5 rounded-xl font-bold text-sm transition cursor-pointer ${
                  pricingType === "premium"
                    ? "bg-purple-900 text-white shadow"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                Premium Pricing
              </button>
              <button
                onClick={() => setPricingType("budget")}
                className={`px-6 py-2.5 rounded-xl font-bold text-sm transition cursor-pointer ${
                  pricingType === "budget"
                    ? "bg-purple-900 text-white shadow"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                Budget Pricing
              </button>
            </div>
          </div>

          {/* Basement Switcher */}
          <div className="flex justify-center pt-2">
            <div className="inline-flex bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm gap-2">
              <button
                onClick={() => setBasementType("without")}
                className={`px-5 py-2 rounded-xl font-bold text-xs sm:text-sm transition cursor-pointer ${
                  basementType === "without"
                    ? "bg-purple-900 text-white shadow"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                Without Basement
              </button>
              <button
                onClick={() => setBasementType("with")}
                className={`px-5 py-2 rounded-xl font-bold text-xs sm:text-sm transition cursor-pointer ${
                  basementType === "with"
                    ? "bg-purple-900 text-white shadow"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                With Basement (+20%)
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Data Table Section */}
        <div className="bg-white rounded-3xl shadow-md border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-purple-900 text-white text-xs sm:text-sm uppercase tracking-wider">
                  <th className="py-4 px-6 font-bold">PLOT SIZE</th>
                  <th className="py-4 px-6 font-bold">Layout, 2D & 3D Front Elevation & Working Drawings</th>
                  <th className="py-4 px-6 font-bold">Structure, Plumbing & Electrical Drawings</th>
                  <th className="py-4 px-6 font-bold">Interior Design</th>
                  <th className="py-4 px-6 font-bold">BoQs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm text-slate-700">
                {tableData.map((row, index) => (
                  <tr key={index} className="hover:bg-purple-50/40 transition">
                    <td className="py-4 px-6 font-semibold text-slate-900">{row.plotSize}</td>
                    <td className="py-4 px-6">{row.col1}</td>
                    <td className="py-4 px-6">{row.col2}</td>
                    <td className="py-4 px-6">{row.col3}</td>
                    <td className="py-4 px-6">{row.col4}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-6 bg-slate-50 border-t border-slate-200 flex justify-center">
            <button className="px-8 py-3 bg-white border border-purple-900 text-purple-900 hover:bg-purple-900 hover:text-white font-bold rounded-xl shadow-sm transition cursor-pointer">
              Get Started
            </button>
          </div>
        </div>

        {/* Construction Quote Banner */}
        <div className="bg-purple-900 rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-xl sm:text-2xl font-black">Need your house to be constructed and need a quote</h2>
            <p className="text-xs sm:text-sm text-purple-200 max-w-2xl">
              We understand that every project is unique. Contact us for a tailored quotation of the house according to your budget, specific requirements and material selection
            </p>
          </div>
          <button className="px-6 py-3 bg-white text-purple-950 font-bold text-sm rounded-xl shadow-md hover:bg-purple-50 transition whitespace-nowrap cursor-pointer">
            Contact Us
          </button>
        </div>

        {/* Supervision Services Section */}
        <div className="bg-purple-900 rounded-3xl p-8 sm:p-10 text-white space-y-6 shadow-lg">
          <h2 className="text-xl sm:text-2xl font-bold border-b border-purple-800 pb-4">Supervision Services Prices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white text-slate-900 p-6 rounded-2xl shadow-sm space-y-2">
              <h3 className="font-bold text-lg text-purple-950">Lahore</h3>
              <p className="text-sm text-slate-600">Rs. 20,000 per visit</p>
            </div>
            <div className="bg-white text-slate-900 p-6 rounded-2xl shadow-sm space-y-2">
              <h3 className="font-bold text-lg text-purple-950">Other Cities</h3>
              <p className="text-sm text-slate-600">Contact for details</p>
              <p className="text-xs font-semibold text-slate-500">
                Please contact <span className="text-purple-700 font-bold">0315-5111119</span> for more details.
              </p>
            </div>
          </div>
        </div>

        {/* Ready to Start Footer Callout */}
        <div className="text-center space-y-4 py-6">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Ready to Start Your Project?</h2>
          <p className="text-sm text-slate-600 max-w-md mx-auto">
            Contact us today for a free consultation and let us help you bring your dream project to life.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <button className="px-6 py-3 bg-white border border-purple-900 text-purple-900 hover:bg-purple-50 font-bold text-sm rounded-xl shadow-sm transition cursor-pointer">
              Get Cost Estimation
            </button>
            <button className="px-6 py-3 bg-purple-900 text-white hover:bg-purple-800 font-bold text-sm rounded-xl shadow-md transition cursor-pointer">
              Contact Us
            </button>
          </div>
        </div>

      </main>

      {/* Styled Cohesive Footer */}
      <footer className="bg-purple-950 text-white border-t border-purple-900 pt-12 pb-8 mt-auto shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <img src="/pg4.png" alt="Logo" className="h-9 w-auto object-contain bg-white p-1 rounded-lg" />
              <h3 className="text-white font-black text-lg tracking-wide">Designing Prices</h3>
            </div>
            <p className="text-xs leading-relaxed text-purple-200">
              Your trusted partner for professional architectural layouts, structure drawings, and complete interior cost estimations.
            </p>
          </div>

          <div>
            <h4 className="text-purple-300 font-bold text-xs uppercase tracking-wider mb-3">Quick Links</h4>
            <ul className="space-y-2 text-xs text-purple-200">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="#" className="hover:text-white transition">Pricing Tables</a></li>
              <li><a href="#" className="hover:text-white transition">Supervision Services</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-purple-300 font-bold text-xs uppercase tracking-wider mb-3">Services</h4>
            <ul className="space-y-2 text-xs text-purple-200">
              <li><span className="hover:text-white transition">2D & 3D Elevations</span></li>
              <li><span className="hover:text-white transition">Interior & Structural</span></li>
              <li><span className="hover:text-white transition">BoQs & Estimation</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-purple-300 font-bold text-xs uppercase tracking-wider mb-3">Contact Info</h4>
            <p className="text-xs text-purple-200 mb-1">Helpline: 0315-5111119</p>
            <p className="text-xs text-purple-200">Lahore & Other Cities, Pakistan</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-purple-900/60 pt-6 text-center text-xs text-purple-300/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Designing Prices Section. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}