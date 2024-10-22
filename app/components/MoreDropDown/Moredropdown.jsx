import React from 'react'

const Moredropdown = ({dropdownitems}) => {
//   console.log(dropdownitems);
    return (

    <div className="absolute mt-4 w-[70%] -mr-[40%] z-50">
                      <div id="moreMegaMenu" className="h-auto m-0 p-0">
                        <div className="absolute flex justify-center items-start bg-white w-[30%] border rounded-lg h-auto">
                          <div className="py-6 px-2 w-full h-full">
                            <div className="flex justify-between items-center mb-4">
                              <span className="text-gray-500 text-sm">MORE CATEGORIES</span>
                              <a href="#" className="text-green-600 text-xs">View All More Options</a>
                            </div>
                            <ul className="divide-y divide-gray-200">
                              {dropdownitems.map((category, index) => (
                                <li key={index} className="group flex justify-between items-center w-full py-3 cursor-pointer hover:bg-gray-100">
                                  <div className="flex flex-row">
                                    <div className="items-start justify-start flex-col inline-flex">
                                      <span className="text-sm" onClick={() => handleMoreItemClick(category.name)}>
                                        {category.name}
                                      </span>
                                    </div>
                                  </div>
                                  <svg className="w-6 h-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                  </svg>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
  )
}

export default Moredropdown
