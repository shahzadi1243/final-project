import Link from 'next/link';

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      
      {/* Left Side: Image Section */}
      <div className="relative w-full md:w-1/2 h-64 md:h-screen bg-gray-900">
        <div className="w-full h-full flex items-center justify-center text-white text-xl font-semibold">
          [Image Container / Construction Image]
        </div>
      </div>

      {/* Right Side: Form Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="max-w-md w-full">
          
          {/* Heading */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Create your account</h2>

          {/* Form */}
          <form className="space-y-4">
            
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="fullname">
                Full Name
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Enter your full name"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="You@example.com"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Create a password"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 pt-2">
              <button
                type="submit"
                className="flex-1 bg-[#7e16db] text-white py-2.5 rounded-lg font-medium hover:bg-[#6c12be] transition duration-200 shadow-md"
              >
                Sign Up
              </button>
              
              <Link
                href="/signin"
                className="flex-1 text-center border border-gray-300 text-gray-700 py-2.5 rounded-lg font-medium hover:bg-gray-50 transition duration-200 flex items-center justify-center"
              >
                Sign In
              </Link>
            </div>

          </form>

        </div>
      </div>

    </div>
  );
}