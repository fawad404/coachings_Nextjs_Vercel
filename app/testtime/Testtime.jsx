'use client'
import Popupphone from '@/app/popupPhone/Popupphone';
import { useRouter } from "next/navigation";
import { useState } from 'react';
const Testtime = ({ isOpen, onClose}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
      setIsPopupOpen(true);
  };

  const closePopup = () => {
      setIsPopupOpen(false);
  };
  // if (!isOpen) return null;
  const router = useRouter();
  const gotoprevoius = ()=>{
    router.push("../testbook");
  }
  return (
    <div className="flex h-screen">
    {/* Left Section - 80% width */}
    <div className="w-4/5 overflow-y-scroll p-8">
      <h1 className="text-2xl font-bold mb-4 flex justify-center">IBPS PO 2024 PRELIMS || 2034</h1>
      <h3 className="text-xl font-bold mb-4 ">Duration : 60mins</h3>
      <ul className="list-disc ml-6 space-y-4">
        <li>1. The clock will be set at the server. The countdown timer at the top right corner of the screen will display the remaining time available for you to complete the examination. When the timer reaches zero, the examination will end by itself. You need not terminate the examination or submit your paper.</li>
        <li>2. The Question Palette displayed on the right side of the screen will show the status of each question using one of the following symbols:</li>
         You have not visited the question yet.
        <li> You have not answered the question.</li>
        <li> You have answered the question.</li>
        <li> You have NOT answered the question, but have marked the question for review.</li>
        <li> You have answered the question, but marked it for review</li>
        <li>The Mark for Review status for a question simply indicates that you would like to look at that question again. If a question is answered, but marked for review, then the answer will be considered for evaluation unless the status is modified by the candidate.</li>
        <li>Navigate to a question directly...</li>
      </ul>
    
      {/* <div className="flex flex-col h-screen items-center justify-center p-4"> */}
{/* Default Language Selection */}
<hr />
<div className="flex mt-24 ">
  <label htmlFor="language" className="text-lg font-medium">
    Choose your default language:
  </label>
  <select
    id="language"
    className="border border-gray-400 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    <option value="">-- Select --</option>
    <option value="english">English</option>
    <option value="spanish">Spanish</option>
    <option value="french">French</option>
  </select>
</div>
<p className = "mt-2 text-red-500">Note that your answer for the current question will not be saved if you navigate to another question..</p>
<hr /><hr />
{/* Declaration Section */}
<div className="flex items-start mt-3">
  <input
    type="checkbox"
    id="declaration"
    className="mr-2 w-5 h-5 text-blue-500 focus:ring-blue-400 mt-3"
  />
  <label htmlFor="declaration" className="text-md">
    I have read all the instructions carefully and agree not to use unfair means in this examination.Note that your answer for the current question will not be saved if you navigate to another question.
  </label>
</div>
</div>
    {/* </div> */}

    {/* Vertical carousel (example, use a library or custom carousel logic) */}
    <div className="w-1 bg-gray-300"></div>

    {/* Right Section - 20% width, Fixed position */}
    <div className="w-1/5 right-0 top-0 h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <img
        src="/1.png" // Replace with your profile image URL
        alt="Profile"
        className="w-24 h-24 rounded-full "
      />
      <p className="text-lg font-semibold">Aditya</p>
    </div>

    {/* Button Section */}
    <div className="fixed bottom-0 left-0 w-full flex">
      <button className="w-full py-4 border-t border-r border-gray-400 bg-gray-200 hover:bg-gray-300 text-lg font-semibold" onClick = {gotoprevoius}> 
    Previous
      </button>
     
      <button className="w-full py-4 border-t border-gray-400 bg-gray-200 hover:bg-gray-300 text-lg font-semibold" onClick = {openPopup} >
      I am ready to login
      </button>
    </div>
    {isPopupOpen && (
                <Popupphone isOpen={isPopupOpen} onClose={closePopup} />
            )}
  </div>
  );
};

export default Testtime;





