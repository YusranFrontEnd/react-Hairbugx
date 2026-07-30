import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav
      aria-label="Navigasi utama HairBugx"
      className="border-b border-gray-200 bg-white"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-2xl font-bold text-gray-900 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gray-300"
          onClick={closeMenu}
        >
          HairBugx
        </Link>

        <button
          type="button"
          onClick={toggleMenu}
          aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          aria-expanded={isOpen}
          aria-controls="main-navigation"
          className="rounded-lg p-2 text-2xl text-gray-700 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gray-300 md:hidden"
        >
          <span aria-hidden="true">☰</span>
        </button>

        <ul
          id="main-navigation"
          className={`absolute left-0 top-16 w-full bg-white px-6 py-6 shadow-md md:static md:flex md:w-auto md:items-center md:gap-8 md:p-0 md:shadow-none ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <Link
              to="/"
              onClick={closeMenu}
              className="block py-3 text-gray-700 transition hover:text-gray-900 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gray-300 md:py-0"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              onClick={closeMenu}
              className="block py-3 text-gray-700 transition hover:text-gray-900 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gray-300 md:py-0"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/service"
              onClick={closeMenu}
              className="block py-3 text-gray-700 transition hover:text-gray-900 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gray-300 md:py-0"
            >
              Service
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
