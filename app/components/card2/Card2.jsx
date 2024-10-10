// import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
// import img1 from '../../images/1.png';

export default function Card2() {
  return (
    <div className="flex bg-gray-200">
      {/* Left Section */}
      <div className="flex-1 pl-8">
        {/* <img src={img1} alt="Descriptive text about the image" width={900} height={500} className="mt-20" /> */}
      </div>

      {/* Right Section */}
      <div className="flex-2 flex justify-end pr-20 mt-8  bg-[#FCFCFC] shadow-2xl">
        <div className="bg-white p-6 shadow-lg w-[435px] h-[360px]">
          <h1 className="text-start text-3xl font-bold mb-4">JEE BLOGS</h1>
          <ul className="list-none text-start">
            <li className="mb-4 mt-6">
              <a href="#" className="text-blue-600 hover:text-blue-400 flex items-center">
                Top 10 IIT JEE coaching institutes in Jaipur – Fee Structure <FaArrowRight className="ml-2" />
              </a>
            </li>
            <hr />
            <li className="mb-4 mt-6">
              <a href="#" className="text-blue-600 hover:text-blue-400 flex items-center">
                Best 10 IIT JEE Coaching Institutes in Kota | Get Fees & discounts <FaArrowRight className="ml-2" />
              </a>
            </li>
            <hr />
            <li className="mb-4 mt-6">
              <a href="#" className="text-blue-600 hover:text-blue-400 flex items-center">
                Best 10 IIT JEE Coaching Institutes in Chandigarh | Get Fees & discounts <FaArrowRight className="ml-2" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
