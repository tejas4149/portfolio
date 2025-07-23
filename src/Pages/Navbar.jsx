import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = ["About", "Skills", "Experience", "Projects", "Education", "Contact"];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const scrollToTop = () => {
    scroll.scrollToTop();
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed w-full z-50 bg-[#0d081f] text-white shadow-lg transition-all duration-500 ease-in-out">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1
          className="text-2xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform duration-300"
          onClick={scrollToTop}
        >
          Portfolio
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              activeClass="text-purple-400 border-b-2 border-purple-400"
              className="cursor-pointer hover:text-purple-400 hover:scale-105 transition-all duration-300 font-medium"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <FaTimes className="text-2xl cursor-pointer transition-transform duration-300 hover:scale-110" />
          ) : (
            <FaBars className="text-2xl cursor-pointer transition-transform duration-300 hover:scale-110" />
          )}
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#1a112f] py-6 px-8 flex flex-col gap-4 shadow-lg transition-all duration-300 animate-fadeInDown">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              onClick={toggleMobileMenu}
              activeClass="text-purple-400"
              className="text-lg cursor-pointer hover:text-purple-400 transition-all duration-300"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
