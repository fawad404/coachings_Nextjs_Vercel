'use client'
import React, { useState, useEffect } from 'react';

const DiplomasCarousel = () => {
  // Array of course data
  const courseData = [
    { title: 'UPSC', courses: 407, icon: 'pink' },
    { title: 'SSC', courses: 407, icon: 'pink' },
    { title: 'CUET', courses: 407, icon: 'pink' },
    { title: 'NEET', courses: 407, icon: 'pink' },
    { title: 'JEE', courses: 407, icon: 'pink' },
    { title: 'State PCS', courses: 407, icon: 'pink' }
  ];

  const scrollDistance = 220; // Adjust scroll distance as per your card width

  useEffect(() => {
    const carousel = document.getElementById('carousel-3');
    const leftButton = document.getElementById('leftButton-3');
    const rightButton = document.getElementById('rightButton-3');

    if (leftButton && rightButton && carousel) {
      // Hide left button initially
      leftButton.style.opacity = '0';
      leftButton.style.pointerEvents = 'none';

      const updateButtonVisibility = () => {
        const scrollLeft = carousel.scrollLeft;
        const scrollWidth = carousel.scrollWidth;
        const clientWidth = carousel.clientWidth;

        // Show or hide left button
        if (scrollLeft <= 0) {
          leftButton.style.opacity = '0';
          leftButton.style.pointerEvents = 'none';
        } else {
          leftButton.style.opacity = '1';
          leftButton.style.pointerEvents = 'auto';
        }

        // Show or hide right button
        if (scrollLeft + clientWidth >= scrollWidth) {
          rightButton.style.opacity = '0';
          rightButton.style.pointerEvents = 'none';
        } else {
          rightButton.style.opacity = '1';
          rightButton.style.pointerEvents = 'auto';
        }
      };

      // Scroll left
      leftButton.addEventListener('click', () => {
        carousel.scrollBy({ left: -scrollDistance, behavior: 'smooth' });
        setTimeout(updateButtonVisibility, 500);
      });

      // Scroll right
      rightButton.addEventListener('click', () => {
        carousel.scrollBy({ left: scrollDistance, behavior: 'smooth' });
        setTimeout(updateButtonVisibility, 500);
      });

      // Update visibility on scroll event
      carousel.addEventListener('scroll', updateButtonVisibility);

      // Initial check when the page loads
      updateButtonVisibility();
    }
  }, []);

  return (
    <div className="bg-gray-100 py-10 w-full">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Explore Free Online Courses With Certificates & Diplomas
        </h2>
        <div className="relative">
          <div id="carousel-3" className="flex overflow-x-auto space-x-6 scrollbar-hide">
            {/* Dynamic Sections */}
            {courseData.map((course, index) => (
              <div
                key={index}
                className="flex-none w-[200px] bg-white rounded-lg shadow-md p-4 flex items-center space-x-4 hover:shadow-lg transition duration-200"
              >
                <div className="bg-pink-100 p-2 rounded-full">
                  {/* Icon placeholder, replace with actual SVG */}
                  <svg
                    className="w-6 h-6 text-pink-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M...Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-700">{course.title}</h3>
                  <p className="text-gray-500 text-xs">{course.courses} Courses</p>
                </div>
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          <button
            id="leftButton-3"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-blue-700 p-2 rounded-full z-10 hover:bg-gray-200 transition duration-200"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            id="rightButton-3"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full hover:bg-gray-200 transition duration-200 z-10"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiplomasCarousel;
