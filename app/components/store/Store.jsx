"use client"
import React, { useRef, useState } from 'react';

const Store = ({breadcrumbs, products }) => {
  const [showContent, setShowContent] = useState(false);
  const [location, setLocation] = useState('');
  const location1Ref = useRef(null);
  const location2Ref = useRef(null);

  const handleLocationClick = (ref) => {
    setLocation(ref.current.textContent);
  };
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
              <h2 className="mb-5 md:mb-0 text-9xl xl:text-10xl leading-normal font-heading font-medium text-center">New in</h2>
              <span className="md:absolute md:right-0 md:bottom-3 text-sm text-gray-400 font-medium">449 products found</span>
            </div>
          </div>
          <div className="sm:flex sm:flex-wrap mb-24">
            <div className="sm:pr-7 mb-10 sm:mb-0 sm:w-1/2 lg:w-4/12 xl:w-3/12">
           
              
    <div className="mb-10 xl:mb-11">
      <h2 className="mb-6 text-3xl leading-9 font-heading font-medium">Location</h2>
      <a
        onClick={(e) => {
          e.preventDefault();
          handleLocationClick(location1Ref);
        }}
        className={`flex items-center py-4 px-10 mb-3 leading-8 font-heading font-medium bg-white rounded-3xl ${location1Ref.current?.textContent !== location ? 'bg-opacity-50' : ''}`}
        href="#"
      >
        <span className="mr-6">
          <svg
            className={`${
              location1Ref.current?.textContent !== location ? 'hidden' : ''
            }`}
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="27" height="27" rx="8" fill="#28E172"></rect>
            <path
              d="M11.4534 19L6 13.6758L6.72022 12.9726L11.4534 17.5937L21.2798 8L22 8.70316L11.4534 19Z"
              fill="white"
            ></path>
          </svg>
          <svg
            className={`${
              location1Ref.current?.textContent === location ? 'hidden' : ''
            }`}
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="26"
              height="26"
              rx="5.5"
              fill="white"
              stroke="#DBDDE1"
            ></rect>
          </svg>
        </span>
        <span ref={location1Ref}>Europe</span>
      </a>
      <a
        onClick={(e) => {
          e.preventDefault();
          handleLocationClick(location2Ref);
        }}
        className={`flex items-center py-4 px-10 leading-8 font-heading font-medium bg-white rounded-3xl ${location2Ref.current?.textContent !== location ? 'bg-opacity-50' : ''}`}
        href="#"
      >
        <span className="mr-6">
          <svg
            className={`${
              location2Ref.current?.textContent !== location ? 'hidden' : ''
            }`}
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="27" height="27" rx="8" fill="#28E172"></rect>
            <path
              d="M11.4534 19L6 13.6758L6.72022 12.9726L11.4534 17.5937L21.2798 8L22 8.70316L11.4534 19Z"
              fill="white"
            ></path>
          </svg>
          <svg
            className={`${
              location2Ref.current?.textContent === location ? 'hidden' : ''
            }`}
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="26"
              height="26"
              rx="5.5"
              fill="white"
              stroke="#DBDDE1"
            ></rect>
          </svg>
        </span>
        <span ref={location2Ref}>United States</span>
      </a>
    </div>
    <div className="mb-10 xl:mb-16">
      <h2 className="mb-10 text-3xl leading-9 font-heading font-medium">Price</h2>
      <div className="relative mb-28 mx-auto w-52 h-1 bg-white">
        <div className="relative left-0 max-w-max">
          <a className="absolute -top-2 -left-4 transform -translate-y-px w-6 h-6 bg-white rounded-full shadow-5xl" href="#"></a>
          <div className="absolute -left-7 top-10 max-w-max">
            <svg className="absolute left-1/2 transform -translate-x-1/2 -top-2 z-10" width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.41519 1.05873C6.21579 0.0187157 7.78421 0.0187151 8.58481 1.05873L13.1815 7.03001C14.1939 8.34515 13.2564 10.25 11.5967 10.25H2.40331C0.743631 10.25 -0.1939 8.34515 0.818494 7.03001L5.41519 1.05873Z" fill="white"></path>
            </svg>
            <div className="flex items-center justify-center px-3 py-1 font-heading font-medium bg-white rounded-lg">$10</div>
          </div>
        </div>
        <div className="relative left-20 max-w-max">
          <a className="absolute -top-2 left-0 transform -translate-y-px w-6 h-6 bg-blue-500 rounded-full shadow-5xl" href="#">
            <img className="absolute -left-20 top-2 max-w-max" src="https://static.shuffle.dev/components/preview/4a61043c-520e-44ad-9579-e398d8dfa81e/assets/public/uinel-assets/elements/ecommerce-product-list/toggle-bg-blue.svg" alt="" />
          </a>
          <div className="absolute -left-6 transform translate-x-2 top-10 max-w-max">
            <svg className="absolute left-1/2 transform -translate-x-1/2 -top-2 z-10" width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.41519 1.05873C6.21579 0.0187157 7.78421 0.0187151 8.58481 1.05873L13.1815 7.03001C14.1939 8.34515 13.2564 10.25 11.5967 10.25H2.40331C0.743631 10.25 -0.1939 8.34515 0.818494 7.03001L5.41519 1.05873Z" fill="white"></path>
            </svg>
            <div className="flex items-center justify-center px-3 py-1 font-heading font-medium bg-white rounded-lg">$99</div>
          </div>
        </div>
      </div>
      <div style={{ height: '2px', backgroundImage: "url('https://static.shuffle.dev/components/preview/4a61043c-520e-44ad-9579-e398d8dfa81e/assets/public/uinel-assets/elements/ecommerce-product-list/dotted-line.svg')" }}></div>
    </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-8/12 xl:w-9/12 sm:pl-7">
              <div className="flex flex-wrap -mx-2">
              {products.map((product) => (
        <div key={product.id} className="w-full lg:w-1/2 xl:w-1/3 px-2 mb-16 xl:mb-24">
          <div className="xl:flex xl:items-center p-10 xl:py-32 mb-8 bg-white rounded-3xl">
            <a className="block mx-auto max-w-max" href="#">
              <img className="h-40 object-cover" src={product.imageUrl} alt={product.name} />
            </a>
          </div>
          <a href="#">
            <p className="mb-4 text-xl leading-8 font-heading font-medium hover:underline">
              {product.name}
            </p>
          </a>
          <p className="text-xl text-blue-500 font-heading font-medium tracking-tighter">
            <span className="text-base pr-2">$</span>
            <span>{product.price.toFixed(2)}</span>
          </p>
        </div>
      ))}
                
              </div>
            </div>
          </div>
          <div className="sm:mx-auto sm:w-96">
            <a className="block py-5 px-10 w-full text-xl leading-6 text-white font-medium tracking-tighter font-heading text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl" href="#">More products</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Store;
