export default function Login() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-gray-100 font-['Poppins'] bg-gradient-to-br from-purple-500 to-pink-400">
      {/* navbar logo */}
      <nav className="w-full flex items-center justify-between px-6 md:px-8 py-4 bg-white/20 backdrop-blur-md fixed top-0 left-0 z-50">
        <div className="font-bold text-white text-2xl sm:text-2xl md:text-4xl">
          Happy<span className="text-yellow-400">Sip</span>
        </div>

        {/* Checkbox untuk toggle (hidden) */}
        <input type="checkbox" id="menu-toggle" className="hidden peer" />

        {/* Label untuk toggle hamburger */}
        <label
          htmlFor="menu-toggle"
          className="md:hidden cursor-pointer text-white text-3xl"
        >
          <i className="bx bx-menu peer-checked:hidden"></i>
        </label>

        {/* Desktop */}
        <div className="hidden md:flex items-center space-x-4 text-white font-medium">
          <a href="/" className="dekstop-menu">
            Home
          </a>
          <a href="#" className="desktop-menu">
            Menu
          </a>
          <a href="#" className="desktop-menu">
            About Us
          </a>
          <a href="#" className="desktop-menu">
            Contact
          </a>
          <a
            href="#"
            className="px-4 py-2 bg-white text-black rounded-lg shadow-md hover:bg-gray-100 transition-colors"
          >
            Login
          </a>
        </div>

        {/* Mobile */}
        <div className="fixed top-16 left-0 md:hidden w-full h-0 overflow-hidden peer-checked:h-auto transition-all duration-1000 ease-in-out bg-gray-900/95 backdrop-blur-lg">
          <div className="flex flex-col py-2 px-2">
            <a href="home.html" className="mobile-menu">
              Home
            </a>
            <a href="#" className="mobile-menu">
              Menu
            </a>
            <a href="#" className="mobile-menu">
              About Us
            </a>
            <a href="#" className="mobile-menu">
              Contact
            </a>
            <a
              href="#"
              className="text-white px-6 py-4 text-center text-black hover:bg-gray-800/8ansition-colors mx-6 my-4 rounded-lg font-semibold"
            >
              Login
            </a>
          </div>
        </div>
      </nav>

      {/* WELCOME TEXT SECTION */}
      <div className="flex flex-col justify-center items-center min-h-screen px-4 pt-16">
        {/* Welcome Text */}
        <div className="text-center mb-8">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-2">
            Hi there, welcome back!
          </h2>
          <p className="text-white/80 text-lg">
            Sign in to your account to continue
          </p>
        </div>

        {/* Login Form */}
        <div className="w-full max-w-md bg-white/10 border-2 border-white/30 backdrop-blur-lg text-white rounded-xl px-8 md:px-10 py-8 shadow-xl">
          <form action="">
            <h1 className="text-3xl font-semibold text-center mb-8">Login</h1>

            {/* Username */}
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Username"
                required
                className="w-full h-[50px] bg-white/20 outline-none border-2 border-white/40 rounded-lg px-5 pr-12 text-white placeholder:text-white/70 focus:border-white/80 focus:bg-white/30 transition-all duration-300"
              />
              <i className="bx bxs-user absolute right-4 top-1/2 -translate-y-1/2 text-xl text-white/80"></i>
            </div>

            {/* Password */}
            <div className="relative mb-6">
              <input
                type="password"
                placeholder="Password"
                required
                className="w-full h-[50px] bg-white/20 outline-none border-2 border-white/40 rounded-lg px-5 pr-12 text-white placeholder:text-white/70 focus:border-white/80 focus:bg-white/30 transition-all duration-300"
              />
              <i className="bx bxs-lock absolute right-4 top-1/2 -translate-y-1/2 text-xl text-white/80"></i>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex justify-between items-center text-sm mb-8">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-2 accent-white/80" />
                <span className="text-white/90">Remember Me</span>
              </label>
              <a
                href="#"
                className="text-white/90 hover:text-white hover:underline transition-colors"
              >
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full h-[50px] bg-white text-purple-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 hover:scale-[1.02] transition-all duration-300 mb-6"
            >
              Login
            </button>

            {/* Register Link */}
            <div className="text-center">
              <p className="text-white/90">
                Don't have an account?
                <a
                  href="#"
                  className="font-semibold text-white hover:underline ml-1"
                >
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
