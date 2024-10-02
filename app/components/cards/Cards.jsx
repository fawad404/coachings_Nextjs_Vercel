import Image from 'next/image';
import { FaStar, FaStarHalfAlt, FaArrowRight } from 'react-icons/fa';
// import bg from ''; 

const Page3 = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start lg:space-x-4 space-y-4 lg:space-y-0  pl-24 bg-[#E5E7EB]  ">
      {/* Card Section */}
      <div className="flex flex-col lg:flex-row shadow-lg rounded-lg border border-gray-300 p-4 w-full lg:w-[860px] bg-white mt-16">
        {/* Image */}
        <div className="flex-shrink-0 w-full lg:w-[250px] h-auto lg:h-[250px] overflow-hidden rounded-lg">
          <img src="/1.png" alt="Nucleus Education" className="w-full h-full object-cover" />
        </div>

        {/* Card Content */}
        <div className="flex flex-col justify-between p-4">
          {/* Title */}
          <h2 className="text-2xl font-bold">Nucleus Education</h2>

          {/* Rating */}
          <div className="flex items-center text-yellow-400">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
            <span className="ml-2 text-gray-700">4.6 (139 Reviews)</span>
          </div>

          {/* Info Section */}
          <div className="mt-2 text-gray-600 text-sm">
            <p className="flex justify-between">
              <strong>Fees Range:</strong> <span>Rs. 1.2L - Rs. 1.4L</span>
            </p>
            <p className="flex justify-between">
              <strong>Address:</strong> <span>Rajeev Gandhi Nagar, ...</span>
            </p>
          </div>

          {/* Courses */}
          <div className="mt-2">
            <span className="text-sm font-bold">Courses:</span> <span className="text-sm">NEET JEE Main, JEE</span>
          </div>

          {/* Buttons */}
          <div className="flex mt-4 space-x-2">
            <button className="bg-blue-700 text-white py-2 px-4 rounded-lg text-sm">Why Us?</button>
            <button className="bg-gray-700 text-white py-2 px-4 rounded-lg text-sm">Show Fees</button>
            <button className="bg-green-700 text-white py-2 px-4 rounded-lg text-sm">Call Now</button>
          </div>
        </div>
      </div>

      {/* JEE Blogs Section */}
      <div className="flex flex-col md:flex-row justify-end mt-20 overflow-hidden jeeblog">
  <div className="bg-white p-6 shadow-lg w-full md:w-[435px] h-auto md:h-[360px] ml-0 md:ml-8 mt-8">
    <h1 className="text-start text-3xl font-bold mb-4">JEE BLOGS</h1>
    <ul className="space-y-4 mt-4 text-sm">
      <li>
        <a href="#" className="text-blue-700 hover:text-blue-400 flex justify-between text-base">
          Top 10 IIT JEE coaching institutes in Jaipur – Fee Structure <FaArrowRight />
        </a>
      </li>
      <hr />
      <li>
        <a href="#" className="text-blue-700 hover:text-blue-400 flex justify-between text-base">
          Best 10 IIT JEE Coaching Institutes in Kota | Get Fees & discounts <FaArrowRight />
        </a>
      </li>
      <hr />
      <li>
        <a href="#" className="text-blue-700 hover:text-blue-400 flex justify-between text-base">
          Best 10 IIT JEE Coaching Institutes in Chandigarh | Get Fees & discounts <FaArrowRight />
        </a>
      </li>
    </ul>
  </div>
</div>

    </div>
  );
};

export default Page3;
