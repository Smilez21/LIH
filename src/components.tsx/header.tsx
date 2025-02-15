import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleNavigation = () => {
    navigate("/"); // Navigate to the home page
  };

  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItemColor = scrolling
    ? "text-gray-600 hover:text-[#27235E]"
    : "text-black hover:text-[#27235E]";

  const buttonStyle = scrolling
    ? "border border-[#27235E] text-[#27235E] hover:bg-[#27235E] hover:text-white px-4 py-2 rounded-[1rem] font-monts font-semibold"
    : "border border-[#27235E] text-[#27235E] hover:bg-[#27235E] hover:text-white px-4 py-2 rounded-[1rem] font-monts font-semibold";

  return (
    <div
      className={`fixed w-full z-10 md:p-4 ${
        scrolling ? "bg-opacity-40 bg-white" : "bg-main"
      }`}
      style={{ backdropFilter: scrolling ? "blur(10px)" : "none" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4 font-monts">
          {/* Logo with navigation */}
          <h1 className="mb-4 cursor-pointer" onClick={handleNavigation}>
            <img
              src="logo.png"
              alt="Innovate Logo"
              className="h-12 md:h-16"
            />
          </h1>

          {/* Responsive Menu Button */}
          <div className="md:hidden">
            <button
              className={`focus:outline-none ${
                scrolling ? "text-gray-700" : "text-black"
              }`}
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-5">
            <Link
              to="/"
              className={`${navItemColor} text-[1.2rem] font-monts font-semibold`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${navItemColor} text-[1.2rem] font-monts font-semibold`}
            >
              About
            </Link>
            <Link
              to="/program"
              className={`${navItemColor} text-[1.2rem] font-monts font-semibold`}
            >
              Programs
            </Link>
            <Link
              to="/contact"
              className={`${navItemColor} text-[1.2rem] font-monts font-semibold`}
            >
              Contact Us
            </Link>
            <Link to="/signup">
              <button className={buttonStyle}>Sign Up</button>
            </Link>
          </div>
        </div>

        {/* Responsive Menu */}
        {isOpen && (
          <div
            className={`md:hidden ${
              scrolling ? "bg-white" : "bg-gradient-to-r from-purple-50 to-blue-100"
            } py-2`}
          >
            <Link
              to="/"
              className={`block px-4 py-2 font-monts font-medium ${navItemColor}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block px-4 py-2 font-monts font-medium ${navItemColor}`}
            >
              About
            </Link>
            <Link
              to="/careers"
              className={`block px-4 py-2 font-monts font-medium ${navItemColor}`}
            >
              Contact Us
            </Link>
            <Link to="/signup">
              <button
                className={`w-full sm:w-auto block px-4 py-2 font-monts font-medium rounded-lg ${
                  scrolling
                    ? "border border-[#27235E] text-[#27235E] hover:bg-[#27235E] hover:text-white"
                    : "border border-[#27235E] text-[#27235E] hover:bg-[#27235E] hover:text-white"
                }`}
              >
                Get Started
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;