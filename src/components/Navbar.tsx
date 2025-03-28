import React, { useState } from 'react';

interface NavbarProps {
  isDarkBackground: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkBackground }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed text-gray-50 top-0 left-0 w-full z-50 backdrop-blur-md transition-colors duration-500 ${
        isDarkBackground ? 'bg-dark-blue' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">House Of Marktech</div>

        {/* Hamburger Menu (Visible on Small Screens) */}
        <button
          className="block md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`flex flex-col md:flex-row md:space-x-8 absolute md:static top-16 left-0 w-full md:w-auto bg-dark-blue md:bg-transparent transition-all duration-300 ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          {['Home', 'Services', 'About', 'Contact'].map((item) => (
            <li key={item} className="text-center md:text-left">
              <a
                href={`#${item.toLowerCase()}`}
                className="block py-2 md:py-0 text-lg font-medium text-white hover:border-b-2 hover:border-white transition-all"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
