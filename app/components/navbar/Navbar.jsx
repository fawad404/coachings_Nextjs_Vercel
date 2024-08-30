"use client"
import React, { useState } from 'react';
import './navbar.css';
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="relative z-40 md:hidden lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true"></div>
          <div className="fixed inset-0 z-40 flex">
            <div className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
              <div className="flex px-4 pb-2 pt-5">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Links */}
              <div className="mt-2">
                <div className="border-b border-gray-200">
                  <div className="-mb-px flex space-x-8 px-4" aria-orientation="horizontal" role="tablist">
                    <button
                      className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900"
                    >
                      Menu
                    </button>
                  </div>
                </div>

                <div className="relative p-2">
                  <button
                    onClick={() => setCoursesDropdownOpen(!coursesDropdownOpen)}
                    className="flex items-center space-x-2 py-2 px-3 bg-transparent text-gray-900 focus:outline-none"
                  >
                    <span className="font-medium text-gray-900">Courses</span>
                    <svg
                      className="w-2.5 h-2.5 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  {coursesDropdownOpen && (
                    <div className="mt-2 w-48 ring-1 ring-black ring-opacity-5">
                      <div className="p-4">
                        <ul role="list" className="space-y-2">
                          <li><a href="#" className="block py-2 px-3 text-gray-500">UPSC</a></li>
                          <li><a href="#" className="block py-2 px-3 text-gray-500">Comprehensive Course</a></li>
                          <li><a href="#" className="block py-2 px-3 text-gray-500">CSAT Course</a></li>
                          <li><a href="#" className="block py-2 px-3 text-gray-500">Prelims Courses</a></li>
                          <li><a href="#" className="block py-2 px-3 text-gray-500">Bridge Courses</a></li>
                          <li><a href="#" className="block py-2 px-3 text-gray-500">Main Courses</a></li>
                          <li><a href="#" className="block py-2 px-3 text-gray-500">Optional Courses</a></li>
                          <li><a href="#" className="block py-2 px-3 text-gray-500">Essay Courses</a></li>
                          <li><a href="#" className="block py-2 px-3 text-gray-500">Free Courses</a></li>
                          <li><a href="#" className="block py-2 px-3 text-gray-500">Test Series</a></li>
                          <li><a href="#" className="block py-2 px-3 text-gray-500">IGP</a></li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                <div className="flow-root"><a href="#" className="-m-2 block p-2 font-medium text-gray-900">Notes</a></div>
                <div className="flow-root"><a href="#" className="-m-2 block p-2 font-medium text-gray-900">Past Papers</a></div>
              </div>

              <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                <div className="flow-root"><a href="#" className="-m-2 block p-2 font-medium text-gray-900">Test</a></div>
                <div className="flow-root"><a href="#" className="-m-2 block p-2 font-medium text-gray-900">Subjects</a></div>
                <div className="flow-root"><a href="#" className="-m-2 block p-2 font-medium text-gray-900">Tutor</a></div>
                <div className="flow-root"><a href="#" className="-m-2 block p-2 font-medium text-gray-900">Cart</a></div>
              </div>
            </div>
          </div>
        </div>
      )}

      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-6">
          Get free delivery on orders over $100
        </p>

        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center justify-between">
              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="relative rounded-md bg-white p-2 text-gray-400 md:hidden lg:hidden"
              >
                <span className="sr-only">Open menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>

              {/* Left side: Logo and Links */}
              <div className="flex items-center space-x-8">
                <a href="#">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                  />
                </a>
                <ul className="hidden md:flex space-x-8">
                  <li className="p-2 text-sm">
                    <a
                      href="#"
                      className="block py-2 px-3 text-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                      aria-current="page"
                    >
                      Home
                    </a>
                  </li>
                  <li className="p-2 relative group">
                    <button
                      onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                      className="flex items-center justify-between w-full py-2 px-3 text-sm font-medium text-gray-900 md:w-auto md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                    >
                      Courses
                      <svg
                        className="w-2.5 h-2.5 ml-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                      </svg>
                    </button>
                  </li>
                  <li className="p-2 text-sm">
                    <a
                      href="#"
                      className="block py-2 px-3 text-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                    >
                      About
                    </a>
                  </li>
                  <li className="p-2 text-sm">
                    <a
                      href="#"
                      className="block py-2 px-3 text-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Right side: Search, Cart, User */}
              <div className="flex items-center space-x-4">
                <button className="relative p-2 text-gray-400">
                  <span className="sr-only">Search</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17.5 10a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0z" />
                  </svg>
                </button>
                <button className="relative p-2 text-gray-400">
                  <span className="sr-only">Cart</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l1 4h12l1-4h2m-2 13a2 2 0 1 1-4 0h-4a2 2 0 1 1-4 0H3m18 0H3" />
                  </svg>
                </button>
                <button className="relative p-2 text-gray-400">
                  <span className="sr-only">User</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 12a8 8 0 0 1-8-8h2a6 6 0 0 0 12 0h2a8 8 0 0 1-8 8z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Mega menu */}
      {megaMenuOpen && (
        <div className="absolute inset-x-0 top-16 z-50">
          <div className="absolute inset-x-0 top-full text-sm bg-white shadow-xl">
            <div className="px-4 py-6 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-12">
                <div>
                  <p className="font-medium text-gray-900">Courses</p>
                  <ul className="mt-6 space-y-6">
                    <li><a href="#" className="block py-2 text-gray-500">UPSC</a></li>
                    <li><a href="#" className="block py-2 text-gray-500">Comprehensive Course</a></li>
                    <li><a href="#" className="block py-2 text-gray-500">CSAT Course</a></li>
                    <li><a href="#" className="block py-2 text-gray-500">Prelims Courses</a></li>
                    <li><a href="#" className="block py-2 text-gray-500">Bridge Courses</a></li>
                    <li><a href="#" className="block py-2 text-gray-500">Main Courses</a></li>
                    <li><a href="#" className="block py-2 text-gray-500">Optional Courses</a></li>
                    <li><a href="#" className="block py-2 text-gray-500">Essay Courses</a></li>
                    <li><a href="#" className="block py-2 text-gray-500">Free Courses</a></li>
                    <li><a href="#" className="block py-2 text-gray-500">Test Series</a></li>
                    <li><a href="#" className="block py-2 text-gray-500">IGP</a></li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Support</p>
                  <ul className="mt-6 space-y-6">
                    <li><a href="#" className="block py-2 text-gray-500">Notes</a></li>
                    <li><a href="#" className="block py-2 text-gray-500">Past Papers</a></li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Test</p>
                  <ul className="mt-6 space-y-6">
                    <li><a href="#" className="block py-2 text-gray-500">Test</a></li>
                    <li><a href="#" className="block py-2 text-gray-500">Subjects</a></li>
                    <li><a href="#" className="block py-2 text-gray-500">Tutor</a></li>
                    <li><a href="#" className="block py-2 text-gray-500">Cart</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
