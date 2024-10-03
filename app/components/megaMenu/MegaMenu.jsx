'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image'; // Import Next.js Image component

// Function to convert subcategory names into URL-friendly slugs
const slugify = (text) => {
  return text.toLowerCase().replace(/\s+/g, '-');
};

const MegaMenu = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const router = useRouter();

  const handleItemClick = (itemName) => {
    const slugData = slugify(itemName);
    console.log('Navigating to:', `/exam/${slugData}`);
    router.push(`/exam/${slugData}`);
  };

  const categories = [
    {
      name: 'UPSC',
      courses: '1,132 Courses',
      image: '/1.png', 
      subcategories: ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5', 'Data 6']
    },
    {
      name: 'SSC',
      courses: '1,132 Courses',
      image: '/2.png', // Add image URL here
      subcategories: ['SSC 1', 'SSC 2', 'SSC 3', 'SSC 4', 'SSC 5', 'SSC 6']
    },
    {
      name: 'CUET',
      courses: '1,132 Courses',
      image: '/4.png', // Add image URL here
      subcategories: ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5', 'Data 6']
    },
    {
      name: 'NEET',
      courses: '1,132 Courses',
      image: '/1.png', // Add image URL here
      subcategories: ['NEET 1', 'NEET 2', 'NEET 3', 'NEET 4', 'NEET 5', 'NEET 6']
    },
    {
      name: 'JEE',
      courses: '1,132 Courses',
      image: '/backgroundhero.png', // Add image URL here
      subcategories: ['JEE 1', 'JEE 2', 'JEE 3', 'JEE 4', 'JEE 5', 'JEE 6']
    }
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
                  {/* Category Image */}
                  <div className="mt-2 mr-3">
                    <img
                      src={category.image}
                      alt={`${category.name} Image`}
                      width={24}
                      height={34}
                      className="rounded" 
                    />
                  </div>
                  <div className="items-start justify-start flex-col inline-flex">
                    <span className="text-sm" onClick={() => handleItemClick(category.name)}>
                      {category.name}
                    </span>
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
                            <a href={`/exam/${slugify(category.name)}/${slugify(subcat)}`}>{subcat}</a>
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
