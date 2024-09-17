'use client'
import React from "react";

// Stats Component
const StatsSection = () => {
  return (
    <div className="bg-blue-500 py-4 overflow-auto scrollbar-hide">
      <div className="container mx-auto  flex justify-center items-start flex-col md:flex-row lg:flex-row space-x-8 text-white text-center">
        <div className="flex items-center space-x-2 ml-6 mt-2">
          <i className="fas fa-users"></i>
          <div>
            <span className="font-bold">4,500+</span> free courses
          </div>
        </div>

        <div className="flex items-center space-x-2 mt-2">
          <i className="fas fa-user-graduate"></i>
          <div>
            <span className="font-bold">40 million+</span> learners
          </div>
        </div>

        <div className="flex items-center space-x-2 mt-2">
          <i className="fas fa-graduation-cap"></i>
          <div>
            <span className="font-bold">8 million+</span> graduates
          </div>
        </div>

        <div className="flex items-center space-x-2 mt-2">
          <i className="fas fa-globe"></i>
          <div>
            <span className="font-bold">195</span> countries
          </div>
        </div>
      </div>
    </div>
  );
};

// Goals Section
const GoalCard = ({ imgSrc, text }) => {
  return (
    <div className="relative bg-white border rounded-lg shadow-lg p-6 flex flex-col items-center w-50 hover:cursor-pointer hover:border-2 hover:border-black">
      <img src={imgSrc} alt="Goal" className="absolute object-cover mb-4 right-0" />
      <p className="text-sm font-semibold text-start w-[75%]">{text}</p>
    </div>
  );
};

const GoalsSection = () => {
  return (
    <div className="bg-white py-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">
          Not sure where to begin? What is your main goal on Alison?
        </h2>
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          <GoalCard imgSrc="path-to-your-image1.png"  text="I want to upskill and improve my knowledge" />
          <GoalCard imgSrc="path-to-your-image2.png" text="I want to explore my career path and hobbies" />
          <GoalCard imgSrc="path-to-your-image3.png" text="I want to explore my hobbies and interests" />
        </div>
      </div>
    </div>
  );
};

// Main Component
const StatComponent = () => {
  return (
    <div>
      <StatsSection />
      <GoalsSection />
    </div>
  );
};

export default StatComponent;
