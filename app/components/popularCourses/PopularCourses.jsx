'use client'
import React from 'react';

const slugify = (text) => {
  return text.toLowerCase().replace(/\s+/g, '-');
};


const PopularCourses = ({path}) => {
  const courses = [
    {
      title: 'Basics of Manual Handling in the Workplace',
      category: 'Education',
      duration: '2 - 3 hrs',
      learners: '62,182 learners',
      image: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/f0/4d69f081f611e3b2cfdd1ba20cb291/iStock_000027139493Small.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=204&fit=crop&q=50',
    },
    {
        title: 'Basics of Manual Handling in the Workplace',
        category: 'Education',
        duration: '2 - 3 hrs',
        learners: '62,182 learners',
        image: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/f0/4d69f081f611e3b2cfdd1ba20cb291/iStock_000027139493Small.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=204&fit=crop&q=50',
      },
      {
        title: 'Basics of Manual Handling in the Workplace',
        category: 'Education',
        duration: '2 - 3 hrs',
        learners: '62,182 learners',
        image: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/f0/4d69f081f611e3b2cfdd1ba20cb291/iStock_000027139493Small.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=204&fit=crop&q=50',
      },
      {
        title: 'Basics of Manual Handling in the Workplace',
        category: 'Education',
        duration: '2 - 3 hrs',
        learners: '62,182 learners',
        image: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/f0/4d69f081f611e3b2cfdd1ba20cb291/iStock_000027139493Small.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=204&fit=crop&q=50',
      },
      {
        title: 'Basics of Manual Handling in the Workplace',
        category: 'Education',
        duration: '2 - 3 hrs',
        learners: '62,182 learners',
        image: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/f0/4d69f081f611e3b2cfdd1ba20cb291/iStock_000027139493Small.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=204&fit=crop&q=50',
      },
];

  return (
    <div className="w-full max-w-6xl mt-10 px-4 flex flex-row justify-center items-center max-sm:flex-col">
      <div className="w-full sm:w-[80%] lg:w-[80%] mt-2">
        <h2 className="text-black text-3xl font-semibold">
          Most Popular <span className="text-blue-500">Network Security Courses</span>
        </h2>

        <div className="grid md:grid-cols-3 place-items-center lg:grid-cols-4 sm:grid-cols-2">
          {courses.map((course, index) => (
            <div key={index} className="cards max-w-52 bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden mt-4 ml-5">
              <a href={`/exam/${path}/${slugify(course.title)}`}>
              {/* Image */}
              <div className="certificate relative">
                <img className="object-cover w-full h-36" src={course.image} alt="Course" />
                <div className="absolute -mr-2 top-5 right-0">
                  <span className="bg-white text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-lg border border-gray-500 shadow-md cert-badge">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="inline-block w-4 h-4 mr-1 text-green-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Certificate
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5">
                <h5 className="text-gray-900 font-semibold text-sm sm:text-xs">{course.title}</h5>
                <p className="text-gray-700 text-sm mt-2">{course.category}</p>
                <div className="flex items-center mt-3 text-gray-500">
                  <span className="text-xs">{course.duration}</span>
                  <span className="mx-2">•</span>
                  <span className="text-xs">{course.learners}</span>
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
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="add-section max-sm:w-full text-center md:w-1/5 lg:w-1/5">add section</div>
    </div>
  );
};

export default PopularCourses;
