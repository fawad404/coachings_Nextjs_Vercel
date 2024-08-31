"use client"
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <section className="bg-blue-500">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center gap-3 lg:flex items-center gap-6">
          <div className="pr-6 border-r-2 border-transparent lg:border-blue-400">
  <Link className="navbar-brand" href="/">
    <img
      className="img-fluid"
      src="https://static.shuffle.dev/components/preview/ec2a723d-1d34-4a53-8c99-debae3ec118e/assets/public/solstice-assets/images/logos/solstice-logo-dark.svg"
      alt="Logo"
    />
  </Link>
</div>
<ul className="hidden md:flex items-center md:gap-2 lg:gap-8 text-sm md:text-sm lg:test-sm ">
              <li className="text-white hover:text-opacity-70 transition duration-200">
                
                <Link href="/coahing-listing">Coachings</Link></li>
  <li className="relative group">
    <Link className="flex items-center  gap-2" href="/test">
      <span className="text-white group-hover:text-opacity-70 transition duration-200">Test</span>
      <div className="text-white group-hover:text-opacity-70 transition duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M13 5.5L8 10.5L3 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      </div>
    </Link>
    <div className="absolute left-0 top-full mt-2 w-64 bg-white shadow-lg p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
      <p className="text-gray-700">Select Your Course</p>
      <ul className="mt-2">
        <li className="py-1"><Link href="#" className="text-gray-800 hover:text-purple-600">Link 1</Link></li>
        <li className="py-1"><Link href="#" className="text-gray-800 hover:text-purple-600">Link 2</Link></li>
        <li className="py-1"><Link href="#" className="text-gray-800 hover:text-purple-600">Link 3</Link></li>
      </ul>
    </div>
  </li>
              <li className="text-white hover:text-opacity-70 transition duration-200"><Link href="/e-comm-store">Store</Link></li>
              <li className="text-white hover:text-opacity-70 transition duration-200"><Link href="/past-papers">PastPapers</Link></li>
              
              <li className="text-white hover:text-opacity-70 transition duration-200"><Link href="/past-papers">Videos</Link></li>
              <li className="text-white hover:text-opacity-70 transition duration-200"><Link href="/past-papers">PastPapers</Link></li>
              <li>
                <Link className="flex items-center gap-2 group" href="#">
                  <span className="text-white group-hover:text-opacity-70 transition duration-200">Resources</span>
                  <div className="text-white group-hover:text-opacity-70 transition duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13 5.5L8 10.5L3 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          
            <Link 
          className="md:ml-6 lg:ml-0 hidden md:inline-block right-0 py-3 px-5 rounded-full bg-white border border-gray-200 shadow text-sm md:text-sm lg:test-sm font-semibold hover:bg-gray-50 focus:ring focus:ring-orange-200 transition duration-200" 
          href="#">
            login
            </Link>
          <div className="md:hidden">
            <a onClick={() => setMobileNavOpen(!mobileNavOpen)} href="#">
              <svg className="navbar-burger text-orange-500" width="51" height="51" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="56" height="56" rx="28" fill="currentColor"></rect>
                <path d="M37 32H19M37 24H19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className={`${mobileNavOpen ? 'block' : 'hidden'} navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50`}>
          <div onClick={() => setMobileNavOpen(!mobileNavOpen)} className="fixed inset-0 bg-gray-800 opacity-80"></div>
          <nav className="relative z-10 px-9 py-8 h-full overflow-y-auto bg-white flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <a href="#">
                <img src="https://static.shuffle.dev/components/preview/ec2a723d-1d34-4a53-8c99-debae3ec118e/assets/public/solstice-assets/images/logos/solstice-logo-dark.svg" alt="Logo" />
              </a>
              <a onClick={() => setMobileNavOpen(!mobileNavOpen)} href="#">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 18L18 6M6 6L18 18" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </a>
            </div>
            <ul className="flex flex-col gap-12 py-12">
              <li>
                <a className="flex items-center  gap-2 group" href="#">
                  <span className="group-hover:text-opacity-70 transition duration-200">Platform</span>
                  <div className="group-hover:text-opacity-70 transition duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13 5.5L8 10.5L3 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </div>
                </a>
              </li>
              <li className="hover:text-opacity-70 transition duration-200"><a href="#">Features</a></li>
              <li className="hover:text-opacity-70 transition duration-200"><a href="#">Community</a></li>
              <li>
                <a className="flex items-center gap-2 group" href="#">
                  <span className="group-hover:text-opacity-70 transition duration-200">Resources</span>
                  <div className="group-hover:text-opacity-70 transition duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13 5.5L8 10.5L3 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </div>
                </a>
              </li>
            </ul>
            <a className="block text-center w-full py-3 px-5 rounded-full bg-white border border-gray-200 shadow text-sm  font-semibold hover:bg-gray-50 focus:ring focus:ring-orange-200 transition duration-200" href="#">Get Started</a>
          </nav>
        </div>
      </div>
    </section>
  );
}