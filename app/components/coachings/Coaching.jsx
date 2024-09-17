import React from 'react';

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
          <div className='flex flex-col md:flex-row'>

          
          <div className="w-full md:w-3/4 mb-10 xl:mb-24 shadow-lg">
            {products.map((product, index) => (
              <div className="w-full mb-4" key={index}>
                <div className="xl:flex xl:items-center p-10 xl:pb-12 xl:px-14 xl:pt-16 bg-white rounded-3xl">
                  <div className="mb-8 xl:mb-0 xl:w-4/12 xl:pr-6">
                    <a href={product.url}>
                      <img className="mx-auto object-cover" src={product.image} alt={product.name} />
                    </a>
                  </div>
                  <div className="xl:w-8/12 md:ml-8">
                    <div className="xl:flex xl:justify-between xl:items-start mb-4 xl:mb-12">
                      <div className="xl:pr-3 mb-6 xl:mb-0 xl:w-8/12">
                        <a href={product.url}>
                          <p className="mb-4 text-xl leading-8 font-heading font-medium hover:underline">{product.name}</p>
                          <p className="text-darkBlueGray-400">{product.description}</p>
                        </a>
                      </div>
                      <div>
                      <p className="flex items-center xl:justify-end xl:pl-3 xl:w-4/12 text-xl text-blue-500 font-heading font-medium tracking-tighter">
                        <span className="mr-2 text-xs">Reviews</span>
                        <span>{product.price}</span>
                      </p>
                      <p className="flex mt-8 items-center xl:justify-end xl:pl-3 xl:w-4/12 text-xl text-blue-500 font-heading font-medium tracking-tighter">
                        <span className="mr-2 text-xs">Rating</span>
                        <span>4.5</span>
                      </p>

                      </div>
                    </div>
                    <div className="flex flex-wrap items-center">
                      <div className="w-1/2 xl:w-6/12">
                        <div className="flex items-center">
                          <h3 className="mr-4 font-heading font-medium tracking-tighter">Coachings:</h3>
                          {product.colors.map((color, i) => (
                            <div key={i} className="mr-2  border border-gray-300 p-2 rounded-md">
                              <a className="block bg-white" href="#">{color}</a>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="w-1/2 xl:w-2/12">
                        <svg className="xl:mx-auto 2xl:mr-0 ml-auto text-gray-400 hover:text-gray-500 cursor-pointer" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                          {/* Add SVG path here */}
                        </svg>
                      </div>
                      <div className="mt-6 xl:mt-0 w-full xl:w-4/12 md:-ml-4">
                  <div className="lg:mx-auto xl:mr-0 lg:max-w-max"><a class="block py-4 px-10 w-full text-lg leading-5 text-white font-medium tracking-tighter font-heading text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl" href="#">
                    Contact
                    </a></div>
                </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='w-full md:w-1/4'>
            Adds Section
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coaching;
