import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = ["About", "Skills", "Experience", "Work", "Education", "Contact"];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="fixed h-18 w-full top-0 z-50 bg-[#0d081f] shadow-md text-white">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
         Portfolio
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              activeClass="text-purple-400 border-b-2 border-purple-400"
              className="cursor-pointer hover:text-purple-400 transition-all duration-200 font-medium"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <FaTimes className="text-2xl cursor-pointer" />
          ) : (
            <FaBars className="text-2xl cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#1a112f] py-4 px-6 flex flex-col gap-4 shadow-lg transition-all duration-300">
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
              className="text-lg cursor-pointer hover:text-purple-400 transition"
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
