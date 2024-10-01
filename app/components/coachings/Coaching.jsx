import React from 'react';
import Page3 from '../cards/Cards';

const Coaching = ({ breadcrumbs, sectionTitle, productCount, categories, products }) => {
  return (
    <section>
      <div className="pt-12 pb-24 2xl:pb-44 bg-blueGray-100">
        <div className="container px-4 mx-auto">
          <ul className="flex flex-wrap items-center mb-10 xl:mb-0">
            {breadcrumbs.map((crumb, index) => (
              <li className={`mr-6 ${index === breadcrumbs.length - 1 ? 'text-indigo-500' : 'text-gray-400'}`} key={index}>
                <a className={`flex items-center text-sm font-medium hover:text-gray-500 ${index === breadcrumbs.length - 1 ? 'hover:text-indigo-600' : ''}`} href={crumb.url}>
                  <span>{crumb.name}</span>
                  {index !== breadcrumbs.length - 1 && (
                    <svg className="ml-6" width="4" height="7" viewBox="0 0 4 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.150291 0.898704C-0.0500975 0.692525 -0.0500975 0.359292 0.150291 0.154634C0.35068 -0.0507836 0.674443 -0.0523053 0.874831 0.154634L3.7386 3.12787C3.93899 3.33329 3.93899 3.66576 3.7386 3.8727L0.874832 6.84594C0.675191 7.05135 0.35068 7.05135 0.150292 6.84594C-0.0500972 6.63976 -0.0500972 6.30652 0.150292 6.10187L2.49888 3.49914L0.150291 0.898704Z" fill="currentColor"></path>
                    </svg>
                  )}
                </a>
              </li>
            ))}
          </ul>
          <div className="pb-9 text-center border-b border-black border-opacity-5">
            <div className="relative">
              {/* <h2 className="mb-5 md:mb-0 text-9xl xl:text-10xl leading-normal font-heading font-medium text-center">{sectionTitle}</h2> */}
              <span className="md:absolute md:right-0 md:bottom-3 text-sm text-gray-400 font-medium">{productCount} coachings found</span>
            </div>
          </div>
          <div className="flex flex-wrap py-5 mb-14 xl:mb-16 border-b border-black border-opacity-10">
            {categories.map((category, index) => (
              <div className="w-full sm:w-1/3 lg:w-1/5 py-2 sm:px-3" key={index}>
                <a className="flex items-center py-5 px-8 xl:px-12 font-heading font-medium border border-gray-200 hover:border-gray-300 rounded-4xl" href={category.url}>
                  <span>{category.name}</span>
                  <svg className="relative top-px ml-6" width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.97291 0.193232C7.20854 -0.0644107 7.58938 -0.0644107 7.82328 0.193232C8.05804 0.450875 8.05978 0.867141 7.82328 1.12478L4.42529 4.80677C4.19053 5.06441 3.81056 5.06441 3.57406 4.80677L0.176073 1.12478C-0.0586909 0.868102 -0.0586909 0.450875 0.176073 0.193232C0.411706 -0.0644107 0.792544 -0.0644107 1.02644 0.193232L4.00098 3.21284L6.97291 0.193232Z" fill="currentColor"></path>
                  </svg>
                </a>
              </div>
            ))}
          </div>
          {/* rendering on this */}
        <Page3/>
        <Page3/>
        <Page3/>
        </div>
      </div>
    </section>
  );
};

export default Coaching;
