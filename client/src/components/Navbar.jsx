import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion from framer-motion
import {
  AiOutlineHome,
  AiOutlinePlayCircle,
  AiOutlineBook,
  AiOutlineLogin,
  AiOutlineUserAdd,
  AiOutlineEnvironment,
  AiOutlineSearch,
  AiOutlineCaretUp,
  AiOutlineCaretDown,
} from 'react-icons/ai';
import Logo from "../assets/images/Logo.png";

const sportsOptions = [
  { name: "Football", icon: <AiOutlineEnvironment /> },
  { name: "Basketball", icon: <AiOutlineEnvironment /> },
  { name: "Tennis", icon: <AiOutlineEnvironment /> },
];

export default function Navbar() {
  const [showSportsDropdown, setShowSportsDropdown] = useState(false);

  const toggleSportsDropdown = () => {
    setShowSportsDropdown(!showSportsDropdown);
  };

  // Define the animation variants
  const variants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  };

  // Define the animation transition
  const transition = { duration: 1.5 }; 

  return (
    <motion.header
      initial="hidden" // Initial animation variant
      animate="visible" // Animation variant to apply
      variants={variants} // Animation variants
      transition={transition} // Animation transition
    >
      <nav className="bg-gray-900 py-4 px-4 md:px-8 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-white text-4xl font-semibold hover:text-gray-300 transition duration-300">
            <img src={Logo} alt="TurfZone" className="h-10" />
          </Link>

          {/* Navigation Links */}
          <ul className="flex space-x-6 text-white text-xl">
            <li>
              <Link to="/" className="flex items-center hover:text-gray-300 hover:underline transition duration-300">
                <AiOutlineHome className="mr-2" /> Home
              </Link>
            </li>
            <li>
              <Link to="/play" className="flex items-center hover:text-gray-300 hover:underline transition duration-300">
                <AiOutlinePlayCircle className="mr-2" /> Play
              </Link>
            </li>
            <li>
              <Link to="/learn" className="flex items-center hover:text-gray-300 hover:underline transition duration-300">
                <AiOutlineBook className="mr-2" /> Learn
              </Link>
            </li>
          </ul>

          {/* Location */}
          <div className="text-white text-xl flex items-center">
            <AiOutlineEnvironment className="mr-2" /> Indore
          </div>

          {/* Login/Signup Links */}
          <div className="flex space-x-4 text-xl">
            <Link to="/login" className="flex items-center text-white hover:text-gray-300 hover:underline transition duration-300">
              <AiOutlineLogin className="mr-2" /> Login
            </Link>
            <Link to="/signup" className="flex items-center bg-white text-primary-color-500 px-4 py-2 rounded-full hover:bg-gray-200 hover:text-black transition duration-300">
              <AiOutlineUserAdd className="mr-2" /> Signup
            </Link>
          </div>
        </div>
      </nav>

      {/* Discover Turf near you */}
      <section className="bg-white py-4 px-4 md:px-8">
        <div className="container mx-auto flex items-center justify-between">
          <h2 className="text-3xl font-semibold text-gray-800">Discover and Book Turf near you</h2>
          <div className="flex items-center space-x-4">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search Turf..."
                className="bg-white px-4 py-2 rounded-full text-xl"
              />
              <AiOutlineSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
            <div className="relative">
              <button
                onClick={toggleSportsDropdown}
                className="bg-primary-color-500 text-black px-4 py-2 rounded-full hover:bg-primary-color-600 transition duration-300 flex items-center text-xl"
              >
                Other Sports
                {showSportsDropdown ? (
                  <AiOutlineCaretUp className="ml-2" />
                ) : (
                  <AiOutlineCaretDown className="ml-2" />
                )}
              </button>
              {showSportsDropdown && (
                <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg">
                  <ul className="py-1">
                    {sportsOptions.map((option, index) => (
                      <li key={index} className="px-4 py-2 hover:bg-gray-200 cursor-pointer flex items-center text-black">
                        {option.icon}
                        <span className="ml-2 text-lg">{option.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </motion.header>
  );
}