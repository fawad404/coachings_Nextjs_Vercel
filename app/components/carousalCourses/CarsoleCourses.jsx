'use client'
import React, { useEffect } from 'react';

const TechCarousel = () => {
  useEffect(() => {
    const carousels = document.querySelectorAll('[id^="carousel-"]');

    carousels.forEach((carousel, index) => {
      const leftButton = document.getElementById(`leftButton-${index}`);
      const rightButton = document.getElementById(`rightButton-${index}`);

      if (leftButton && rightButton) {
        leftButton.style.opacity = '0';
        leftButton.style.pointerEvents = 'none';

        const updateButtonVisibility = () => {
          const scrollLeft = carousel.scrollLeft;
          const scrollWidth = carousel.scrollWidth;
          const clientWidth = carousel.clientWidth;

          if (scrollLeft <= 0) {
            leftButton.style.opacity = '0';
            leftButton.style.pointerEvents = 'none';
          } else {
            leftButton.style.opacity = '1';
            leftButton.style.pointerEvents = 'auto';
          }

          if (scrollLeft + clientWidth >= scrollWidth) {
            rightButton.style.opacity = '0';
            rightButton.style.pointerEvents = 'none';
          } else {
            rightButton.style.opacity = '1';
            rightButton.style.pointerEvents = 'auto';
          }
        };

        leftButton.addEventListener('click', () => {
          carousel.scrollBy({
            left: -220,
            behavior: 'smooth',
          });
          setTimeout(updateButtonVisibility, 500);
        });

        rightButton.addEventListener('click', () => {
          carousel.scrollBy({
            left: 220,
            behavior: 'smooth',
          });
          setTimeout(updateButtonVisibility, 500);
        });

        carousel.addEventListener('scroll', updateButtonVisibility);
        updateButtonVisibility();
      }
    });
  }, []);

  return (
    <div className="w-full max-w-6xl mt-10 px-4 bg-white flex justify-start items-center">
      <div className="relative w-full sm:w-[80%] lg:w-[80%]">
        {/* Left Arrow */}
        <button
          id="leftButton-0"
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-blue-700 p-2 rounded-full hover:bg-gray-200 transition duration-200 z-10"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          id="rightButton-0"
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full hover:bg-gray-200 transition duration-200 z-10"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Carousel Container */}
        <div className="overflow-hidden w-full">
          <h2 className="text-black text-3xl font-semibold">
            Top <span className="text-blue-500">Technology</span> Courses
          </h2>
          <div
            id="carousel-0 "
            className="flex scrollbar-hide mt-5 justify-start items-center space-x-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4"
          >
            {/* Card 1 */}
            <div className="cards min-w-52 overflow-hidden bg-white rounded-lg border border-gray-200 shadow-md">
              <div className="certificate relative">
                <img
                  className="object-cover h-36 w-full"
                  src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/5d/9e7ff083fa11e6923cad35a230c7ea/RoboticsSpecialization.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=204&q=50&fit=crop"
                  alt="Course Image"
                />
                <div className="absolute -mr-2 top-5 right-0">
                  <span className="bg-white text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-lg border border-gray-500 shadow-md"
                    
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="inline-block w-4 h-4 mr-1 text-green-500"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Certificate
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h5 className="text-gray-900 font-semibold text-sm sm:text-xs">
                  Basics of Manual Handling in the Workplace
                </h5>
                <p className="text-gray-700 text-sm mt-2">Education</p>
                <div className="flex items-center mt-3 text-gray-500">
                  <span className="text-xs">2 - 3 hrs</span>
                  <span className="mx-2">•</span>
                  <span className="text-xs">62,182 learners</span>
                </div>
                <div className="HoverContent text-xs mt-2 text-gray-500 hidden">
                  <p className="text-xs underline">By APX Learning</p>
                  <div className="border-b w-full mt-3"></div>
                  <p className="mt-2">What you Will Learn</p>
                  <ul className="mt-2">
                    <li><i className="fas fa-check"></i>Explain the concept of manual handling</li>
                    <li><i className="fas fa-check"></i>Other Details</li>
                    <li><i className="fas fa-check"></i>Other Details</li>
                  </ul>
                </div>
                <div className="flex justify-between mt-5 space-x-4">
                  <button className="w-[35%] text-gray-700 border border-gray-300 rounded-md text-xs hover:bg-gray-100">
                    More Info
                  </button>
                  <button className="w-[65%] text-white bg-green-600 rounded-md text-xs hover:bg-green-700">
                    Start Learning
                  </button>
                </div>
              </div>
            </div>

            {/* Additional Cards */}
            <div className="cards min-w-52 overflow-hidden bg-white rounded-lg border border-gray-200 shadow-md">
              <div className="certificate relative">
                <img
                  className="object-cover h-36 w-full"
                  src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/5d/9e7ff083fa11e6923cad35a230c7ea/RoboticsSpecialization.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=204&q=50&fit=crop"
                  alt="Course Image"
                />
                <div className="absolute -mr-2 top-5 right-0">
                  <span className="bg-white text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-lg border border-gray-500 shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="inline-block w-4 h-4 mr-1 text-green-500"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Certificate
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h5 className="text-gray-900 font-semibold text-sm sm:text-xs">
                  Basics of Manual Handling in the Workplace
                </h5>
                <p className="text-gray-700 text-sm mt-2">Education</p>
                <div className="flex items-center mt-3 text-gray-500">
                  <span className="text-xs">2 - 3 hrs</span>
                  <span className="mx-2">•</span>
                  <span className="text-xs">62,182 learners</span>
                </div>
                <div className="HoverContent text-xs mt-2 text-gray-500 hidden">
                  <p className="text-xs underline">By APX Learning</p>
                  <div className="border-b w-full mt-3"></div>
                  <p className="mt-2">What you Will Learn</p>
                  <ul className="mt-2">
                    <li><i className="fas fa-check"></i>Explain the concept of manual handling</li>
                    <li><i className="fas fa-check"></i>Other Details</li>
                    <li><i className="fas fa-check"></i>Other Details</li>
                  </ul>
                </div>
                <div className="flex justify-between mt-5 space-x-4">
                  <button className="w-[35%] text-gray-700 border border-gray-300 rounded-md text-xs hover:bg-gray-100">
                    More Info
                  </button>
                  <button className="w-[65%] text-white bg-green-600 rounded-md text-xs hover:bg-green-700">
                    Start Learning
                  </button>
                </div>
              </div>
            </div>
            <div className="cards min-w-52 overflow-hidden bg-white rounded-lg border border-gray-200 shadow-md">
              <div className="certificate relative">
                <img
                  className="object-cover h-36 w-full"
                  src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/5d/9e7ff083fa11e6923cad35a230c7ea/RoboticsSpecialization.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=204&q=50&fit=crop"
                  alt="Course Image"
                />
                <div className="absolute -mr-2 top-5 right-0">
                  <span className="bg-white text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-lg border border-gray-500 shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="inline-block w-4 h-4 mr-1 text-green-500"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Certificate
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h5 className="text-gray-900 font-semibold text-sm sm:text-xs">
                  Basics of Manual Handling in the Workplace
                </h5>
                <p className="text-gray-700 text-sm mt-2">Education</p>
                <div className="flex items-center mt-3 text-gray-500">
                  <span className="text-xs">2 - 3 hrs</span>
                  <span className="mx-2">•</span>
                  <span className="text-xs">62,182 learners</span>
                </div>
                <div className="HoverContent text-xs mt-2 text-gray-500 hidden">
                  <p className="text-xs underline">By APX Learning</p>
                  <div className="border-b w-full mt-3"></div>
                  <p className="mt-2">What you Will Learn</p>
                  <ul className="mt-2">
                    <li><i className="fas fa-check"></i>Explain the concept of manual handling</li>
                    <li><i className="fas fa-check"></i>Other Details</li>
                    <li><i className="fas fa-check"></i>Other Details</li>
                  </ul>
                </div>
                <div className="flex justify-between mt-5 space-x-4">
                  <button className="w-[35%] text-gray-700 border border-gray-300 rounded-md text-xs hover:bg-gray-100">
                    More Info
                  </button>
                  <button className="w-[65%] text-white bg-green-600 rounded-md text-xs hover:bg-green-700">
                    Start Learning
                  </button>
                </div>
              </div>
            </div>
            <div className="cards min-w-52 overflow-hidden bg-white rounded-lg border border-gray-200 shadow-md">
              <div className="certificate relative">
                <img
                  className="object-cover h-36 w-full"
                  src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/5d/9e7ff083fa11e6923cad35a230c7ea/RoboticsSpecialization.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=204&q=50&fit=crop"
                  alt="Course Image"
                />
                <div className="absolute -mr-2 top-5 right-0">
                  <span className="bg-white text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-lg border border-gray-500 shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="inline-block w-4 h-4 mr-1 text-green-500"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Certificate
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h5 className="text-gray-900 font-semibold text-sm sm:text-xs">
                  Basics of Manual Handling in the Workplace
                </h5>
                <p className="text-gray-700 text-sm mt-2">Education</p>
                <div className="flex items-center mt-3 text-gray-500">
                  <span className="text-xs">2 - 3 hrs</span>
                  <span className="mx-2">•</span>
                  <span className="text-xs">62,182 learners</span>
                </div>
                <div className="HoverContent text-xs mt-2 text-gray-500 hidden">
                  <p className="text-xs underline">By APX Learning</p>
                  <div className="border-b w-full mt-3"></div>
                  <p className="mt-2">What you Will Learn</p>
                  <ul className="mt-2">
                    <li><i className="fas fa-check"></i>Explain the concept of manual handling</li>
                    <li><i className="fas fa-check"></i>Other Details</li>
                    <li><i className="fas fa-check"></i>Other Details</li>
                  </ul>
                </div>
                <div className="flex justify-between mt-5 space-x-4">
                  <button className="w-[35%] text-gray-700 border border-gray-300 rounded-md text-xs hover:bg-gray-100">
                    More Info
                  </button>
                  <button className="w-[65%] text-white bg-green-600 rounded-md text-xs hover:bg-green-700">
                    Start Learning
                  </button>
                </div>
              </div>
            </div>

            <div className="cards min-w-52 overflow-hidden bg-white rounded-lg border border-gray-200 shadow-md">
              <div className="certificate relative">
                <img
                  className="object-cover h-36 w-full"
                  src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/5d/9e7ff083fa11e6923cad35a230c7ea/RoboticsSpecialization.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=204&q=50&fit=crop"
                  alt="Course Image"
                />
                <div className="absolute -mr-2 top-5 right-0">
                  <span className="bg-white text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-lg border border-gray-500 shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="inline-block w-4 h-4 mr-1 text-green-500"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Certificate
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h5 className="text-gray-900 font-semibold text-sm sm:text-xs">
                  Basics of Manual Handling in the Workplace
                </h5>
                <p className="text-gray-700 text-sm mt-2">Education</p>
                <div className="flex items-center mt-3 text-gray-500">
                  <span className="text-xs">2 - 3 hrs</span>
                  <span className="mx-2">•</span>
                  <span className="text-xs">62,182 learners</span>
                </div>
                <div className="HoverContent text-xs mt-2 text-gray-500 hidden">
                  <p className="text-xs underline">By APX Learning</p>
                  <div className="border-b w-full mt-3"></div>
                  <p className="mt-2">What you Will Learn</p>
                  <ul className="mt-2">
                    <li><i className="fas fa-check"></i>Explain the concept of manual handling</li>
                    <li><i className="fas fa-check"></i>Other Details</li>
                    <li><i className="fas fa-check"></i>Other Details</li>
                  </ul>
                </div>
                <div className="flex justify-between mt-5 space-x-4">
                  <button className="w-[35%] text-gray-700 border border-gray-300 rounded-md text-xs hover:bg-gray-100">
                    More Info
                  </button>
                  <button className="w-[65%] text-white bg-green-600 rounded-md text-xs hover:bg-green-700">
                    Start Learning
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </div> 
  );
};

const StemCarousel =()=>{
  useEffect(() => {
    const carousels = document.querySelectorAll('[id^="carousel-"]');

    carousels.forEach((carousel, index) => {
      const leftButton = document.getElementById(`leftButton-${index}`);
      const rightButton = document.getElementById(`rightButton-${index}`);

      if (leftButton && rightButton) {
        leftButton.style.opacity = '0';
        leftButton.style.pointerEvents = 'none';

        const updateButtonVisibility = () => {
          const scrollLeft = carousel.scrollLeft;
          const scrollWidth = carousel.scrollWidth;
          const clientWidth = carousel.clientWidth;

          if (scrollLeft <= 0) {
            leftButton.style.opacity = '0';
            leftButton.style.pointerEvents = 'none';
          } else {
            leftButton.style.opacity = '1';
            leftButton.style.pointerEvents = 'auto';
          }

          if (scrollLeft + clientWidth >= scrollWidth) {
            rightButton.style.opacity = '0';
            rightButton.style.pointerEvents = 'none';
          } else {
            rightButton.style.opacity = '1';
            rightButton.style.pointerEvents = 'auto';
          }
        };

        leftButton.addEventListener('click', () => {
          carousel.scrollBy({
            left: -220,
            behavior: 'smooth',
          });
          setTimeout(updateButtonVisibility, 500);
        });

        rightButton.addEventListener('click', () => {
          carousel.scrollBy({
            left: 220,
            behavior: 'smooth',
          });
          setTimeout(updateButtonVisibility, 500);
        });

        carousel.addEventListener('scroll', updateButtonVisibility);
        updateButtonVisibility();
      }
    });
  }, []);
  return (
    <div className="w-full max-w-6xl mt-10 px-4 bg-white flex justify-start items-center">
      <div className="relative w-full sm:w-[80%] lg:w-[80%]">
        {/* Left Arrow */}
        <button
          id="leftButton-1"
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-blue-700 p-2 rounded-full hover:bg-gray-200 transition duration-200 z-10"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          id="rightButton-1"
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full hover:bg-gray-200 transition duration-200 z-10"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Carousel Container */}
        <div className="overflow-hidden w-full">
          <h2 className="text-black text-3xl font-semibold">
            Top <span className="text-blue-500">Stem</span> Courses
          </h2>
          <div
            id="carousel-1 "
            className="flex scrollbar-hide mt-5 justify-start items-center space-x-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4"
          >
            {/* Card 1 */}
            <div className="cards min-w-52 overflow-hidden bg-white rounded-lg border border-gray-200 shadow-md">
              <div className="certificate relative">
                <img
                  className="object-cover h-36 w-full"
                  src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/5d/9e7ff083fa11e6923cad35a230c7ea/RoboticsSpecialization.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=204&q=50&fit=crop"
                  alt="Course Image"
                />
                <div className="absolute -mr-2 top-5 right-0">
                  <span className="bg-white text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-lg border border-gray-500 shadow-md"
                    
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="inline-block w-4 h-4 mr-1 text-green-500"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Certificate
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h5 className="text-gray-900 font-semibold text-sm sm:text-xs">
                  Basics of Manual Handling in the Workplace
                </h5>
                <p className="text-gray-700 text-sm mt-2">Education</p>
                <div className="flex items-center mt-3 text-gray-500">
                  <span className="text-xs">2 - 3 hrs</span>
                  <span className="mx-2">•</span>
                  <span className="text-xs">62,182 learners</span>
                </div>
                <div className="HoverContent text-xs mt-2 text-gray-500 hidden">
                  <p className="text-xs underline">By APX Learning</p>
                  <div className="border-b w-full mt-3"></div>
                  <p className="mt-2">What you Will Learn</p>
                  <ul className="mt-2">
                    <li><i className="fas fa-check"></i>Explain the concept of manual handling</li>
                    <li><i className="fas fa-check"></i>Other Details</li>
                    <li><i className="fas fa-check"></i>Other Details</li>
                  </ul>
                </div>
                <div className="flex justify-between mt-5 space-x-4">
                  <button className="w-[35%] text-gray-700 border border-gray-300 rounded-md text-xs hover:bg-gray-100">
                    More Info
                  </button>
                  <button className="w-[65%] text-white bg-green-600 rounded-md text-xs hover:bg-green-700">
                    Start Learning
                  </button>
                </div>
              </div>
            </div>

            {/* Additional Cards */}
            <div className="cards min-w-52 overflow-hidden bg-white rounded-lg border border-gray-200 shadow-md">
              <div className="certificate relative">
                <img
                  className="object-cover h-36 w-full"
                  src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/5d/9e7ff083fa11e6923cad35a230c7ea/RoboticsSpecialization.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=204&q=50&fit=crop"
                  alt="Course Image"
                />
                <div className="absolute -mr-2 top-5 right-0">
                  <span className="bg-white text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-lg border border-gray-500 shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="inline-block w-4 h-4 mr-1 text-green-500"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Certificate
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h5 className="text-gray-900 font-semibold text-sm sm:text-xs">
                  Basics of Manual Handling in the Workplace
                </h5>
                <p className="text-gray-700 text-sm mt-2">Education</p>
                <div className="flex items-center mt-3 text-gray-500">
                  <span className="text-xs">2 - 3 hrs</span>
                  <span className="mx-2">•</span>
                  <span className="text-xs">62,182 learners</span>
                </div>
                <div className="HoverContent text-xs mt-2 text-gray-500 hidden">
                  <p className="text-xs underline">By APX Learning</p>
                  <div className="border-b w-full mt-3"></div>
                  <p className="mt-2">What you Will Learn</p>
                  <ul className="mt-2">
                    <li><i className="fas fa-check"></i>Explain the concept of manual handling</li>
                    <li><i className="fas fa-check"></i>Other Details</li>
                    <li><i className="fas fa-check"></i>Other Details</li>
                  </ul>
                </div>
                <div className="flex justify-between mt-5 space-x-4">
                  <button className="w-[35%] text-gray-700 border border-gray-300 rounded-md text-xs hover:bg-gray-100">
                    More Info
                  </button>
                  <button className="w-[65%] text-white bg-green-600 rounded-md text-xs hover:bg-green-700">
                    Start Learning
                  </button>
                </div>
              </div>
            </div>
            <div className="cards min-w-52 overflow-hidden bg-white rounded-lg border border-gray-200 shadow-md">
              <div className="certificate relative">
                <img
                  className="object-cover h-36 w-full"
                  src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/5d/9e7ff083fa11e6923cad35a230c7ea/RoboticsSpecialization.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=204&q=50&fit=crop"
                  alt="Course Image"
                />
                <div className="absolute -mr-2 top-5 right-0">
                  <span className="bg-white text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-lg border border-gray-500 shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="inline-block w-4 h-4 mr-1 text-green-500"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Certificate
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h5 className="text-gray-900 font-semibold text-sm sm:text-xs">
                  Basics of Manual Handling in the Workplace
                </h5>
                <p className="text-gray-700 text-sm mt-2">Education</p>
                <div className="flex items-center mt-3 text-gray-500">
                  <span className="text-xs">2 - 3 hrs</span>
                  <span className="mx-2">•</span>
                  <span className="text-xs">62,182 learners</span>
                </div>
                <div className="HoverContent text-xs mt-2 text-gray-500 hidden">
                  <p className="text-xs underline">By APX Learning</p>
                  <div className="border-b w-full mt-3"></div>
                  <p className="mt-2">What you Will Learn</p>
                  <ul className="mt-2">
                    <li><i className="fas fa-check"></i>Explain the concept of manual handling</li>
                    <li><i className="fas fa-check"></i>Other Details</li>
                    <li><i className="fas fa-check"></i>Other Details</li>
                  </ul>
                </div>
                <div className="flex justify-between mt-5 space-x-4">
                  <button className="w-[35%] text-gray-700 border border-gray-300 rounded-md text-xs hover:bg-gray-100">
                    More Info
                  </button>
                  <button className="w-[65%] text-white bg-green-600 rounded-md text-xs hover:bg-green-700">
                    Start Learning
                  </button>
                </div>
              </div>
            </div>
            <div className="cards min-w-52 overflow-hidden bg-white rounded-lg border border-gray-200 shadow-md">
              <div className="certificate relative">
                <img
                  className="object-cover h-36 w-full"
                  src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/5d/9e7ff083fa11e6923cad35a230c7ea/RoboticsSpecialization.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=204&q=50&fit=crop"
                  alt="Course Image"
                />
                <div className="absolute -mr-2 top-5 right-0">
                  <span className="bg-white text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-lg border border-gray-500 shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="inline-block w-4 h-4 mr-1 text-green-500"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Certificate
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h5 className="text-gray-900 font-semibold text-sm sm:text-xs">
                  Basics of Manual Handling in the Workplace
                </h5>
                <p className="text-gray-700 text-sm mt-2">Education</p>
                <div className="flex items-center mt-3 text-gray-500">
                  <span className="text-xs">2 - 3 hrs</span>
                  <span className="mx-2">•</span>
                  <span className="text-xs">62,182 learners</span>
                </div>
                <div className="HoverContent text-xs mt-2 text-gray-500 hidden">
                  <p className="text-xs underline">By APX Learning</p>
                  <div className="border-b w-full mt-3"></div>
                  <p className="mt-2">What you Will Learn</p>
                  <ul className="mt-2">
                    <li><i className="fas fa-check"></i>Explain the concept of manual handling</li>
                    <li><i className="fas fa-check"></i>Other Details</li>
                    <li><i className="fas fa-check"></i>Other Details</li>
                  </ul>
                </div>
                <div className="flex justify-between mt-5 space-x-4">
                  <button className="w-[35%] text-gray-700 border border-gray-300 rounded-md text-xs hover:bg-gray-100">
                    More Info
                  </button>
                  <button className="w-[65%] text-white bg-green-600 rounded-md text-xs hover:bg-green-700">
                    Start Learning
                  </button>
                </div>
              </div>
            </div>

            <div className="cards min-w-52 overflow-hidden bg-white rounded-lg border border-gray-200 shadow-md">
              <div className="certificate relative">
                <img
                  className="object-cover h-36 w-full"
                  src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/5d/9e7ff083fa11e6923cad35a230c7ea/RoboticsSpecialization.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=204&q=50&fit=crop"
                  alt="Course Image"
                />
                <div className="absolute -mr-2 top-5 right-0">
                  <span className="bg-white text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-lg border border-gray-500 shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="inline-block w-4 h-4 mr-1 text-green-500"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Certificate
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h5 className="text-gray-900 font-semibold text-sm sm:text-xs">
                  Basics of Manual Handling in the Workplace
                </h5>
                <p className="text-gray-700 text-sm mt-2">Education</p>
                <div className="flex items-center mt-3 text-gray-500">
                  <span className="text-xs">2 - 3 hrs</span>
                  <span className="mx-2">•</span>
                  <span className="text-xs">62,182 learners</span>
                </div>
                <div className="HoverContent text-xs mt-2 text-gray-500 hidden">
                  <p className="text-xs underline">By APX Learning</p>
                  <div className="border-b w-full mt-3"></div>
                  <p className="mt-2">What you Will Learn</p>
                  <ul className="mt-2">
                    <li><i className="fas fa-check"></i>Explain the concept of manual handling</li>
                    <li><i className="fas fa-check"></i>Other Details</li>
                    <li><i className="fas fa-check"></i>Other Details</li>
                  </ul>
                </div>
                <div className="flex justify-between mt-5 space-x-4">
                  <button className="w-[35%] text-gray-700 border border-gray-300 rounded-md text-xs hover:bg-gray-100">
                    More Info
                  </button>
                  <button className="w-[65%] text-white bg-green-600 rounded-md text-xs hover:bg-green-700">
                    Start Learning
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
  );
};

const Carousel =()=>{
  return(
  <div>
    <TechCarousel />
    <StemCarousel />
  </div>
  );
};
export default Carousel;
