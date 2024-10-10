'use client'
import React, { useState } from 'react';
import MegaMenu from '../megaMenu/MegaMenu';
import { useRouter } from 'next/navigation';
import { FaSearch } from 'react-icons/fa'

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCoursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const [isMegaMenuOpen, setMegaMenuOpen] = useState(false);

 
  // Array of dropdown items
  const dropdownItems = [
    'UPSC', 
    'Comprehensive Exam', 
    'CSAT Exam', 
    'Prelims Exam', 
    'Bridge Exam', 
    'Main Exam', 
    'Optional Exam', 
    'Essay Exam', 
    'Free Exam', 
    'Test Series', 
    'IGP'
  ];
  const router = useRouter();

  const handleItemClick = (itemName) => {
    
    console.log("Navigating to:", `/exam/${slugData}`);
   
  };
  return (
    <div className="bg-white">
      {/* Mobile menu */}
      {isMobileMenuOpen && (
         <div className="relative z-40 md:hidden lg:hidden" role="dialog" aria-modal="true" id="mobileMenu">
           <div className="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true"></div>
           <div className="fixed inset-0 z-40 flex">
             <div className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
               <div className="flex px-4 pb-2 pt-5">
                 <button
                   id="closeMobileMenu"
                   onClick={() => setMobileMenuOpen(false)} // Close mobile menu
                   className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                 >
                   <span className="sr-only">Close menu</span>
                   <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                   </svg>
                 </button>
               </div>
        
               {/* Links */}
               <div className="mt-2">
                 <div className="border-b border-gray-200">
                   <div className="-mb-px flex space-x-8 px-4" aria-orientation="horizontal" role="tablist">
                     <button className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900">
                       Menu
                     </button>
                   </div>
                 </div>
          
                 <div className="relative p-2">
                   <button
                     id="coursesDropdownToggle"
                     className="flex items-center space-x-2 py-2 px-3 bg-transparent text-gray-900 focus:outline-none"
                     onClick={() => setCoursesDropdownOpen(!isCoursesDropdownOpen)}
                   >
                     <span className="font-medium text-gray-900">Exams</span>
                     <svg className="w-2.5 h-2.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                     </svg>
                   </button>
   
                   {/* Dropdown Menu */} 
                   {isCoursesDropdownOpen && (
                     <div id="coursesDropdownMenu" className="mt-2 w-48 ring-1 ring-black ring-opacity-5">
                       <div className="p-4">
                       <ul role="list" className="space-y-2">
                        {dropdownItems.map((item, index) => (
                          <li key={index}>
                            <button
                              onClick={() => handleItemClick(item)}
                              className="block py-2 px-3 text-gray-500 text-left w-full"
                            >
                              {item}
                            </button>
                          </li>
                        ))}
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
 <div className="flex items-center ml-36 justify-center transform translate-y-12 ">
  <input 
    type="text" 
    placeholder="Search..." 
    className="ml-5 p-1 text-base h-8 w-52 border border-black rounded-l-md transform " 
  />
  <div className="h-8 w-12 bg-gray-600 flex justify-center items-center text-white  rounded-r-md">
    <FaSearch className=" text-center " />
  </div>
</div>

      <header className="relative border-b border-gray-400 z-50">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 text-gray-400"
            >
              <span className="sr-only">Open menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>

            {/* Logo and Links (Desktop) */}
            <div className="flex items-center">
              <a href="#">
                <img className="h-8 w-auto" src="https://softnix.co/wp-content/themes/softnix/tmpl/assets/lp01/images/softnix-co-light.png" alt="Your Company" />
              </a>
              <ul className="hidden md:flex space-x-8 ml-10 text-gray-400">
                <li><a href="#" className="hover:text-blue-700">Home</a></li>
                <li className="relative">
                  <button
                    onClick={() => setMegaMenuOpen(!isMegaMenuOpen)}
                    className="flex items-center space-x-2 hover:text-blue-700"
                  >
                    <span>Exams</span>
                    <svg className="w-2.5 h-2.5 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg>
                  </button>
                </li>
                <li><a href="#" className="hover:text-blue-700">Notes</a></li>
                <li><a href="#" className="hover:text-blue-700">Past Papers</a></li>
              </ul>
            </div>

            {/* Right Side (Desktop) */}
            <div className="hidden md:flex space-x-8">
              <ul className="flex space-x-8 text-gray-400">
                <li><a href="#" className="hover:text-blue-700">Subjects</a></li>
                <li><a href="#" className="hover:text-blue-700">Tutor</a></li>
                <li><a href="#" className="hover:text-blue-700">Cart</a></li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Mega Menu */}
        {isMegaMenuOpen && <MegaMenu />}
      </header>
   
    </div>
  );
};

export default Navbar;
