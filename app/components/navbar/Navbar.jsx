'use client';
import React, { useState } from 'react';
import MegaMenu from '../megaMenu/MegaMenu';
import { FaSearch } from 'react-icons/fa';
import { More } from '@mui/icons-material';
import Moredropdown from '../MoreDropDown/Moredropdown';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isExamsMegaMenuOpen, setExamsMegaMenuOpen] = useState(false);
  const [isMoreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [isMegaMenuOpen, setMegaMenuOpen] = useState(false);
  const closeMobileMenu = () => setMobileMenuOpen(false);
  const moreDropdownItems = [
    {
      name: 'Subjet'
    },
    {
      name: 'Tutor'
    },
    {
      name: 'Cart'
    },
  ];

  const handleItemClick = (itemName) => {
    console.log("Navigating to:", `/exam/${itemName}`);
    // Navigation logic can be added here if needed
  };

  return (
    <div className="bg-white">
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true" id="mobileMenu">
          <div className="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true" onClick={closeMobileMenu}></div>
          <div className="fixed inset-0 z-50 flex">

            <div className="relative flex mt-18 w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
              <div className="flex items-center justify-between px-4 pt-5">
                <a href="#">
                  <img className="h-8 w-auto" src="https://softnix.co/wp-content/themes/softnix/tmpl/assets/lp01/images/softnix-co-light.png" alt="Your Company" />
                </a>
                <button
                  onClick={closeMobileMenu}
                  className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 z-50"
                >
                  <span className="sr-only">Close menu</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>



              {/* Mobile Menu Links */}
              <div className="mt-6 space-y-6 px-4">
                <a href="#" onClick={closeMobileMenu} className="block text-gray-900 font-medium">Home</a>
                <a href="#" onClick={closeMobileMenu} className="block text-gray-900 font-medium">Notes</a>
                <a href="#" onClick={closeMobileMenu} className="block text-gray-900 font-medium">Past Papers</a>

                <div className="space-y-1">
                  <button
                    onClick={() => setMoreDropdownOpen(!isMoreDropdownOpen)}
                    className="w-full flex items-center justify-between text-gray-900 font-medium"
                  >
                    More
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isMoreDropdownOpen && (
                    <div className="pl-4 mt-2 space-y-2">
                      {moreDropdownItems.map((item, index) => (
                        <a
                          key={index}
                          href="#"
                          onClick={() => handleItemClick(item.name)}
                          className="block text-gray-700 hover:text-blue-700"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    
      {/* Main Navbar */}
      <header className="relative border-b border-gray-200 z-10 w-auto  lg:mx-8">
        <nav className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Mobile menu button */}
            <button onClick={() => setMobileMenuOpen(true)} className="md:hidden p-2 text-gray-400">
              <span className="sr-only">Open menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
            <div className='flex flex-row gap-8 justify-center items-center space-x-6'>
              {/* Logo */}
              <div className="w-auto min-w-[150px]">
                <a href="#">
                  <img className="h-8 w-full max-w-full object-contain" src="https://softnix.co/wp-content/themes/softnix/tmpl/assets/lp01/images/softnix-co-light.png" alt="Your Company" />
                </a>
              </div>

              {/* Search Icon */}
              <div className="hidden lg:flex md:ml-8 px-2 py-2 w-[50%] min-w-20">
                <div className="flex items-center w-full">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="flex-1 p-1 border border-gray-300 rounded-l-md w-full"
                  />
                  <button className="p-2 bg-gray-600 text-white rounded-r-md">
                    <FaSearch />
                  </button>
                </div>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex md:ml-20 md:items-center md:space-x-6 w-auto">
                <a href="#" className="text-gray-700 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium">Home</a>

                {/* Exams MegaMenu */}
                <div>
                  <button
                    onMouseEnter={() => setExamsMegaMenuOpen(true)}
                    onMouseExit={() => setExamsMegaMenuOpen(false)}
                    onClick={() => setExamsMegaMenuOpen((prev) => !prev)} // Toggle the menu on button click
                    className="flex items-center text-gray-700 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
                  >
                    Exams
                    <svg className="ml-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {isExamsMegaMenuOpen && (
                    <div className="absolute mt-2 left-[35%] w-full shadow-lg z-50">
                      <MegaMenu />
                    </div>
                  )}
                </div>

                <a href="#" className="text-gray-700 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium">Notes</a>
                <a href="#" className="text-gray-700 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium text-nowrap">Past Papers</a>

                {/* More Dropdown */}
                <div>
                  <button
                    onMouseEnter={() => setMoreDropdownOpen(true)}
                    onClick={() => setMoreDropdownOpen(!isMoreDropdownOpen)}
                    className="flex items-center text-gray-700 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
                  >
                    More
                    <svg className="ml-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {isMoreDropdownOpen && (
                    <Moredropdown dropdownitems={moreDropdownItems}/>
                  )}
                </div>



              </div>
            </div>
            
            {/* Log In, Sign Up, Language Selector */}
            <div className="flex items-center space-x-6 border-l-2 border-gray-200 ml-6 max-md:hidden"> {/* Adjusted space */}
              <a href="#" className="text-green-600 font-semibold text-sm ml-5 text-nowrap">Log In</a>
              <a href="#" className="bg-green-600 text-white font-semibold text-sm py-2 px-4 rounded-lg hover:bg-green-700 text-nowrap">Sign Up</a>
              <button className="border border-gray-300 rounded-lg p-2 flex items-center justify-center hover:border-gray-400">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c5.384 0 9.75 4.366 9.75 9.75s-4.366 9.75-9.75 9.75S2.25 17.384 2.25 12 6.616 2.25 12 2.25zM3.5 9.5h17m-9.5 5a9.39 9.39 0 004.75-5m-9.5 0a9.39 9.39 0 00-4.75 5m7.75 5.5v-5.25" />
                </svg>
                <span className="ml-1 text-xs bg-black text-white rounded-full px-1.5 py-0.5">en</span>
              </button>
            </div>
          </div>
        </nav>
      </header>

    </div>
  );
};

export default Navbar;
