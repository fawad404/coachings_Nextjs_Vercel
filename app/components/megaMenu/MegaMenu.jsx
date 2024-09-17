'use client';
import { useState } from 'react';

// Function to convert subcategory names into URL-friendly slugs
const slugify = (text) => {
  return text.toLowerCase().replace(/\s+/g, '-');
};

const MegaMenu = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [
    { name: 'UPSC', courses: '1,132 Courses', subcategories: ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5', 'Data 6'] },
    { name: 'SSC', courses: '1,132 Courses', subcategories: ['SSC 1', 'SSC 2', 'SSC 3', 'SSC 4', 'SSC 5', 'SSC 6'] },
    { name: 'CUET', courses: '1,132 Courses', subcategories: ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5', 'Data 6'] },
    { name: 'NEET', courses: '1,132 Courses', subcategories: ['NEET 1', 'NEET 2', 'NEET 3', 'NEET 4', 'NEET 5', 'NEET 6'] },
    { name: 'JEE', courses: '1,132 Courses', subcategories: ['JEE 1', 'JEE 2', 'JEE 3', 'JEE 4', 'JEE 5', 'JEE 6'] },
  ];

  return (
    <div id="megaMenu" className="w-screen h-auto m-0 p-0 ml-56 mt-2">
      <div className="absolute flex justify-center items-start bg-white w-[30%] border rounded-lg h-auto">
        <div className="py-6 px-2 w-full h-full">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-500 text-sm">COURSE CATEGORIES</span>
            <a href="#" className="text-green-600 text-xs">View All Free Courses</a>
          </div>
          <ul className="divide-y divide-gray-200">
            {categories.map((category, index) => (
              <li
                key={index}
                className="group flex justify-between items-center w-full py-3 cursor-pointer hover:bg-gray-100"
                onMouseEnter={() => setHoveredCategory(index)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <div className="flex flex-row">
                  <div className="mt-2 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M5 12H3v9h9v-2H5zm7-7h7v7h2V3h-9z" />
                    </svg>
                  </div>
                  <div className="items-start justify-start flex-col inline-flex">
                    <span className="text-sm">{category.name}</span>
                    <span className="text-gray-500 text-xs">({category.courses})</span>
                  </div>
                </div>
                <svg className="w-6 h-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>

                {hoveredCategory === index && (
                  <div className="absolute top-0 left-full bg-gray-100 border border-gray-200 shadow-lg rounded-lg w-full h-full p-6 z-10 overflow-y-scroll overflow-x-hidden">
                    <div className="w-full">
                      <h3 className="text-green-600 font-semibold text-base mb-4">View Top Courses</h3>
                      <ul className="text-gray-700">
                        {category.subcategories.map((subcat, subIndex) => (
                          <li key={subIndex} className="py-1 hover:bg-gray-200 rounded px-2 cursor-pointer text-sm">
                            {/* Use slugify to make the subcategory name URL friendly */}
                            <a href={`/exam/${category.name}/${slugify(subcat)}`}>
                              {subcat}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
