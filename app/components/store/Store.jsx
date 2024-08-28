import React from "react";

const Store = ({ breadcrumbItems, productCount, priceRange, locationOptions, products }) => {
  return (
    <section>
      <div className="pt-12 pb-24 2xl:pb-44 bg-blueGray-100">
        <div className="container px-4 mx-auto">
          <ul className="flex flex-wrap items-center mb-10 xl:mb-0">
            {breadcrumbItems.map((item, index) => (
              <li key={index} className="mr-6">
                <a
                  className="flex items-center text-sm font-medium text-gray-400 hover:text-gray-500"
                  href={item.link}
                >
                  <span>{item.label}</span>
                  {index < breadcrumbItems.length - 1 && (
                    <svg
                      className="ml-6"
                      width="4"
                      height="7"
                      viewBox="0 0 4 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.150291 0.898704C-0.0500975 0.692525 -0.0500975 0.359292 0.150291 0.154634C0.35068 -0.0507836 0.674443 -0.0523053 0.874831 0.154634L3.7386 3.12787C3.93899 3.33329 3.93899 3.66576 3.7386 3.8727L0.874832 6.84594C0.675191 7.05135 0.35068 7.05135 0.150292 6.84594C-0.0500972 6.63976 -0.0500972 6.30652 0.150292 6.10187L2.49888 3.49914L0.150291 0.898704Z"
                        fill="currentColor"
                      />
                    </svg>
                  )}
                </a>
              </li>
            ))}
          </ul>
          <div className="pb-9 text-center border-b border-black border-opacity-5">
            <div className="relative">
              <h2 className="mb-5 md:mb-0 text-9xl xl:text-10xl leading-normal font-heading font-medium text-center">
                New in
              </h2>
              <span className="md:absolute md:right-0 md:bottom-3 text-sm text-gray-400 font-medium">
                {productCount} products found
              </span>
            </div>
          </div>
          <div className="sm:flex sm:flex-wrap mb-24">
            <div className="sm:pr-7 mb-10 sm:mb-0 sm:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-10 xl:mb-16">
                <h2 className="mb-10 text-3xl leading-9 font-heading font-medium">Price</h2>
                <div className="relative mb-28 mx-auto w-52 h-1 bg-white">
                  {/* Price Range Display */}
                  <div className="relative left-0 max-w-max">
                    <a
                      className="absolute -top-2 -left-4 transform -translate-y-px w-6 h-6 bg-white rounded-full shadow-5xl"
                      href="#"
                    />
                    <div className="absolute -left-7 top-10 max-w-max">
                      <svg
                        className="absolute left-1/2 transform -translate-x-1/2 -top-2 z-10"
                        width="14"
                        height="11"
                        viewBox="0 0 14 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.41519 1.05873C6.21579 0.0187157 7.78421 0.0187151 8.58481 1.05873L13.1815 7.03001C14.1939 8.34515 13.2564 10.25 11.5967 10.25H2.40331C0.743631 10.25 -0.1939 8.34515 0.818494 7.03001L5.41519 1.05873Z"
                          fill="white"
                        />
                      </svg>
                      <div className="flex items-center justify-center px-3 py-1 font-heading font-medium bg-white rounded-lg">
                        ${priceRange.min}
                      </div>
                    </div>
                  </div>
                  <div className="relative left-20 max-w-max">
                    <a
                      className="absolute -top-2 left-0 transform -translate-y-px w-6 h-6 bg-blue-500 rounded-full shadow-5xl"
                      href="#"
                    />
                    <div className="absolute -left-6 transform translate-x-2 top-10 max-w-max">
                      <svg
                        className="absolute left-1/2 transform -translate-x-1/2 -top-2 z-10"
                        width="14"
                        height="11"
                        viewBox="0 0 14 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.41519 1.05873C6.21579 0.0187157 7.78421 0.0187151 8.58481 1.05873L13.1815 7.03001C14.1939 8.34515 13.2564 10.25 11.5967 10.25H2.40331C0.743631 10.25 -0.1939 8.34515 0.818494 7.03001L5.41519 1.05873Z"
                          fill="white"
                        />
                      </svg>
                      <div className="flex items-center justify-center px-3 py-1 font-heading font-medium bg-white rounded-lg">
                        ${priceRange.max}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    height: "2px",
                    backgroundImage: "url('uinel-assets/elements/ecommerce-product-list/dotted-line.svg')",
                  }}
                />
              </div>

              <div className="mb-10 xl:mb-11">
                <h2 className="mb-6 text-3xl leading-9 font-heading font-medium">Location</h2>
                {locationOptions.map((location, index) => (
                  <a
                    key={index}
                    className="flex items-center py-4 px-10 mb-3 leading-8 font-heading font-medium bg-white rounded-3xl"
                    href="#"
                  >
                    <span className="mr-6">
                      <svg
                        className="hidden"
                        width="27"
                        height="27"
                        viewBox="0 0 27 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="27" height="27" rx="8" fill="#28E172" />
                        <path
                          d="M11.4534 19L6 13.6758L6.72022 12.9726L11.4534 17.5937L21.2798 8L22 8.70316L11.4534 19Z"
                          fill="white"
                        />
                      </svg>
                      <svg
                        className="hidden"
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
                        />
                      </svg>
                    </span>
                    <span>{location}</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-8/12 xl:w-9/12 sm:pl-7">
              <div className="flex flex-wrap -mx-2">
                {products.map((product, index) => (
                  <div key={index} className="w-full lg:w-1/2 xl:w-1/3 px-2 mb-16 xl:mb-24">
                    <div className="xl:flex xl:items-center p-10 xl:py-32 mb-8 bg-white rounded-3xl">
                      <a className="block mx-auto max-w-max" href={product.link}>
                        <img className="h-40 object-cover" src={product.image} alt={product.name} />
                      </a>
                    </div>
                    <div className="text-center">
                      <a
                        className="block mb-6 text-xl leading-9 font-heading font-medium hover:underline"
                        href={product.link}
                      >
                        {product.name}
                      </a>
                      <span className="text-xl leading-9 font-heading font-medium">
                        ${product.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <a
              className="flex items-center text-xl font-heading font-medium text-white bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-3xl"
              href="#"
            >
              Load More
              <svg
                className="ml-4"
                width="16"
                height="11"
                viewBox="0 0 16 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.2799 0.153683C10.6685 -0.0512277 11.2716 -0.0512277 11.6602 0.153683L15.8497 2.46278C16.2383 2.66769 16.2383 3.00829 15.8497 3.2132L11.6602 5.5223C11.2716 5.72721 10.6685 5.72721 10.2799 5.5223C9.89128 5.31739 9.89128 4.97679 10.2799 4.77188L13.5806 2.8765L10.2799 0.981123C9.89128 0.776214 9.89128 0.435614 10.2799 0.230705ZM1.99952 0.924024C1.47618 0.924024 1.0366 1.3636 1.0366 1.88695V3.62542C1.0366 4.14876 1.47618 4.58834 1.99952 4.58834H8.52834C9.05168 4.58834 9.49125 4.14876 9.49125 3.62542V1.88695C9.49125 1.3636 9.05168 0.924024 8.52834 0.924024H1.99952Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Store;
