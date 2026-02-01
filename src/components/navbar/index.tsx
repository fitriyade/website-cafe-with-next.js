import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-6 md:px-8 py-4 bg-white/20 backdrop-blur-md fixed top-0 left-0 z-50">
      {/* Logo */}
      <div className="font-bold text-white text-2xl mx-2 sm:text-2xl md:text-4xl">
        Happy<span className="text-yellow-400">Sip</span>
      </div>

      {/* Toggle (hidden) */}
      <input type="checkbox" id="menu-toggle" className="hidden peer" />

      {/* Hamburger */}
      <label
        htmlFor="menu-toggle"
        className="md:hidden cursor-pointer text-white text-3xl"
      >
        <i className="bx bx-menu peer-checked:hidden"></i>
      </label>

      {/* Desktop menu */}
      <div className="hidden md:flex items-center gap-4 text-white font-medium">
        <Link href="/" className="desktop-menu">
          Home
        </Link>
        <a href="#menu" className="desktop-menu">
          Menu
        </a>
        <a href="#about-us" className="desktop-menu">
          About Us
        </a>
        <a href="#contact" className="desktop-menu">
          Contact
        </a>
        <Link
          href="/login"
          className="px-4 py-2 bg-white text-black rounded-lg shadow-md hover:bg-gray-100 transition-colors"
        >
          Logout
        </Link>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden fixed top-16 left-0 w-full h-0 overflow-hidden peer-checked:h-auto transition-all duration-1000 ease-in-out bg-gray-900/95 backdrop-blur-lg">
        <div className="flex flex-col py-2 px-2">
          <a href="#home" className="mobile-menu">
            Home
          </a>
          <a href="#menu" className="mobile-menu">
            Menu
          </a>
          <a href="#about-us" className="mobile-menu">
            About Us
          </a>
          <a href="#contact" className="mobile-menu">
            Contact
          </a>
          <a
            href="#"
            className="px-6 py-4 text-center text-white hover:bg-gray-800/80 transition-colors my-4 rounded-lg font-semibold"
          >
            Logout
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
