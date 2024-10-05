// pages/index.js
'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
// import Testtime from '../testtime/Testtime';
// import { FaArrowLeft } from "react-icons/fa";
const Testbook = () => {
  const router = useRouter();

  const goToNextPage = () => {
    router.push('../testtime'); // Navigate to Page 2
  };
  return (
   
    <div className="flex h-screen">
      {/* Left Section - 80% width */}
      <div className="w-4/5 overflow-y-scroll p-8">
        <h1 className="text-2xl font-bold mb-4">General Instructions:</h1>
        <ul className="list-disc ml-6 space-y-4">
          <li>1. The clock will be set at the server. The countdown timer at the top right corner of the screen will display the remaining time available for you to complete the examination. When the timer reaches zero, the examination will end by itself. You need not terminate the examination or submit your paper.</li>
          <li>2. The Question Palette displayed on the right side of the screen will show the status of each question using one of the following symbols:</li>
          ☐ You have not visited the question yet.
          <li>🟥 You have not answered the question.</li>
          <li>🟩 You have answered the question.</li>
          <li>🟪 You have NOT answered the question, but have marked the question for review.</li>
          <li>🟦 You have answered the question, but marked it for review</li>
          <li>The Mark for Review status for a question simply indicates that you would like to look at that question again. If a question is answered, but marked for review, then the answer will be considered for evaluation unless the status is modified by the candidate.</li>
          <li>Navigate to a question directly...</li>
        </ul>
        <h1 className="text-2xl font-bold mb-4">Navigating to a Question:</h1>
        <h3 className='text-xl font-bold'>3. To answer a question, do the following:</h3>
        <ul className='ml-5 mt-3 gap-y-3'>
          <li>1. Click on the question number in the Question Palette at the right of your screen to go to that numbered question directly. Note that using this option does NOT save your answer to the current question.</li>
          <li>2. Click on Save & Next to save your answer for the current question and then go to the next question.</li>
          <li>3. Click on Mark for Review & Next to save your answer for the current question and also mark it for review, and then go to the next question.</li>
        </ul>
        <p>Note that your answer for the current question will not be saved if you navigate to another question directly by clicking on a question number without saving the answer to the previous question.</p>
        <p>You can view all the questions by clicking on the Question Paper button. This feature is provided, so that if you want you can just see the entire question paper at a glance.</p>
      </div>

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
        <button className="w-full py-4 border-t border-r border-gray-400 bg-gray-200 hover:bg-gray-300 text-lg font-semibold"> 
        Go to test
        </button>
       
        <button className="w-full py-4 border-t border-gray-400 bg-gray-200 hover:bg-gray-300 text-lg font-semibold" onClick = {goToNextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Testbook;
