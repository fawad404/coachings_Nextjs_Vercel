'use client'; 

import React, { useEffect } from "react";
import * as mammoth from "mammoth";
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setQuestions,
  selectOption,
  nextQuestion,
  previousQuestion,
  jumpToQuestion,
  resetQuiz,
} from '../../store/quizSlice'; 

const QuizFromWord = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const dispatch = useDispatch();

  const {
    questions,
    currentQuestionIndex,
    answers,
  } = useSelector((state) => state.quiz);



  useEffect(() => {
    if (status === 'loading') return; 
    if (!session) {
      router.push('/test'); 
    }
  }, [session, status, router]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const fileUrl = "/Uquestions.docx";  
        const response = await fetch(fileUrl);
        const arrayBuffer = await response.arrayBuffer();
        const result = await mammoth.extractRawText({ arrayBuffer });
        const rawText = result.value;
        const parsedQuestions = parseQuestionsFromText(rawText);
        dispatch(setQuestions(parsedQuestions));
        //console.log(parsedQuestions[0]); 
      } catch (error) {
        console.error("Error fetching or parsing the .docx file:", error);
      }
    };

    fetchQuestions();
  }, [dispatch]);

  useEffect(() => {
    // console.log('Current Question Index:', currentQuestionIndex, answers);
    console.log('Current Answers:', answers);
  }, [currentQuestionIndex, answers]);

  const parseQuestionsFromText = (text) => {
    const lines = text.split("\n");
    const parsedQuestions = [];
    let currentQuestion = null;

    lines.forEach((line) => {
      const trimmedLine = line.trim();
      if (trimmedLine.startsWith("Q:")) {
        if (currentQuestion) parsedQuestions.push(currentQuestion);
        currentQuestion = {
          question: trimmedLine.slice(2).trim(),
          options: []
        };
      } else if (trimmedLine.match(/^[A-D]:/)) {
        currentQuestion?.options.push({
          label: trimmedLine.charAt(0),
          text: trimmedLine.slice(2).trim()
        });
      }
    });
    if (currentQuestion) parsedQuestions.push(currentQuestion);
    return parsedQuestions;
  };

    
const handleOptionSelect = (option) => {
    const key = 'A'; 
    dispatch(selectOption({ questionId: currentQuestionIndex, selectedOptionValue: option, key }));
  };
  

  const handleNextQuestion = () => {
    dispatch(nextQuestion());
   
  };

  const handlePreviousQuestion = () => {
    dispatch(previousQuestion());
  };

  const handleQuestionNavigation = (index) => {
    dispatch(jumpToQuestion(index));
  };

  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSubmit = async () => {
   
    const answersToSubmit = answers.map(answer => ({
      id: answer.id,
      selectedOptionValue: answer.selectedOptionValue,
      key: answer.key, 
    }));

    try {
      const response = await fetch('/api/submit-answers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ answers: answersToSubmit }),
      });

      const result = await response.json();
      console.log(result); 
    //   router.push("/Quiz/Result");
    } catch (error) {
      console.error("Error submitting answers:", error);
    }
  };

  if (status === 'loading') {
    return <h1>Loading...</h1>;
  } else if (!session) {
    return <h1>Page Not Found. Redirecting...</h1>;
  } else {
    return (
      <div className="flex h-screen w-screen">
        {/* Main Content */}
        <div className="w-screen bg-white flex-1">
          {/* Header */}
          <div className="flex items-center max-md:items-start max-md:px-2 justify-between bg-gray-100 p-4 border-b border-gray-300 max-md:flex-col">
            {/* Question Number */}
            <div className="text-lg font-semibold max-md:pb-8">
              Question No.{currentQuestionIndex + 1}
            </div>
            <div className="flex flex-row space-x-4 gap-4 max-md:gap-1 justify-center items-center">
              {/* Marks */}
              <div className="flex items-center flex-col">
                <div className="font-bold mb-2 text-sm">
                  <p>Marks</p>
                </div>
                <div className="flex flex-row">
                  <div className="flex items-center text-sm justify-center bg-green-200 text-green-800 font-bold px-2 py-1 rounded-full mr-2">
                    +1
                  </div>
                  <div className="flex items-center text-sm justify-center bg-red-200 text-red-800 font-bold px-2 py-1 rounded-full">
                    -0.25
                  </div>
                </div>
              </div>
              {/* Time */}
              <div className="text-sm text-gray-600 flex flex-col">
                <p>Time:</p>
                <p>00.28</p>
              </div>

              {/* Language Selection */}
              <div className="ml-4 flex flex-row justify-center items-center gap-2">
                <p className="text-gray-600">View in:</p>
                <select className="border border-gray-300 rounded-md p-1">
                  <option>English</option>
                  <option>Hindi</option>
                </select>
              </div>

              {/* Report */}
              <div className="ml-4 text-sm text-black cursor-pointer flex justify-center items-center gap-1">
                <svg className="w-4 h-4" viewBox="0 0 54.264 54.264" fill="#9a9393" stroke="#9a9393">
                  {/* SVG Path */}
                </svg>
                <p>Report</p>
              </div>
            </div>
          </div>

          {/* Quiz Content */}
          {questions.length > 0 && (
            <div className="px-20 py-20">
              <div className="flex p-4 gap-4 flex-col">
                {/* Left Column for the Question */}
                <div className="w-1/2 max-md:w-full pr-4 md:border-r max-md:border-b">
                  <h2 className="text-lg font-semibold mb-4">
                    {questions[currentQuestionIndex]?.question}
                  </h2>
                </div>

                {/* Right Column for the Options */}
                <div className="w-1/2 pl-4 max-md:mt-8">
  <ul className="mb-4">
    {questions[currentQuestionIndex]?.options.map((option) => {
      // Find the answer for the current question
      const selectedAnswer = answers.find(answer => answer.id === currentQuestionIndex);
      const isChecked = selectedAnswer && selectedAnswer.selectedOptionValue === option.label;

      return (
        <li key={option.label} className="mb-2">
          <label className="flex items-center">
            <input
              type="radio"
              name={`option-${currentQuestionIndex}`}
              value={option.label}
              checked={isChecked}
              onChange={() => handleOptionSelect(option.label)}
              className="mr-2"
            />
            {option.text}
          </label>
        </li>
      );
    })}
  </ul>
</div>

              </div>

              {/* Navigation Buttons */}
              <div className="flex absolute bottom-0 justify-between w-[60%] py-4">
                <button
                  onClick={handlePreviousQuestion}
                  disabled={currentQuestionIndex === 0}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded disabled:opacity-50"
                >
                  Back
                </button>
                <button
                  onClick={handleNextQuestion}
                  disabled={!answers[currentQuestionIndex]}
                  className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
                >
                  Next Question
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div
          className={`max-md:fixed top-0 right-0 h-screen transition-transform duration-300 ease-in-out bg-blue-100 p-4 border-l border-gray-300 w-[25%] max-md:w-[75%] 
          ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full fixed'}`}
        >
          {/* Toggle Button */}
          <button
            className="absolute -left-6 top-1/2 transform -translate-y-1/2 py-4 bg-gray-800 text-white hover:bg-gray-700"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? (
              // "Close" Icon
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" viewBox="0 0 24 24">
                {/* SVG Path */}
              </svg>
            ) : (
              // "Open" Icon
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" viewBox="0 0 24 24">
                {/* SVG Path */}
              </svg>
            )}
          </button>

          <div>
            {/* User Section */}
            <div className="flex items-center mb-4 border border-b-gray-300 pb-4">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">A</div>
              <span className="font-bold">Aditya</span>
            </div>

            {/* Legend and Status Counters */}
            {/* ... (Keep your existing legend and status counters here) */}

            {/* Question Navigation */}
            <div className="text-left mb-2">
              <div className="py-2 flex justify-center bg-blue-100 items-center border border-y-2 border-y-gray-300">
                <h3 className="font-bold mb-2 text-gray-500">SECTION: Reasoning Ability</h3>
              </div>
              <div className="grid grid-cols-5 gap-2 mt-4">
                {questions.map((_, index) => (
                  <button
                    key={index}
                    className={`p-2 border ${index === currentQuestionIndex ? 'bg-red-500 text-white' : 'bg-white text-black border-gray-400'}`}
                    onClick={() => handleQuestionNavigation(index)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Footer Section */}
            <div className="absolute bottom-0 left-0 w-full p-4 border-t border-gray-300 flex flex-col items-center space-y-2">
              <div className="flex space-x-4 max-md:flex-col space-y-4">
                <button className="bg-blue-200 text-blue-700 py-2 px-4 rounded-md shadow max-lg:py-0 max-lg:px-0 max-lg:text-sm">
                  Question Paper
                </button>
                <button className="bg-blue-200 text-blue-700 py-2 px-4 rounded-md shadow max-lg:py-0 max-lg:px-0 max-lg:text-sm">
                  Instructions
                </button>
              </div>
              {/* Show Submit button only on the last question */}
              {currentQuestionIndex === questions.length - 1 && (
                <button onClick={handleSubmit} className="bg-blue-500 w-[60%] text-white py-2 px-8 rounded-md shadow max-lg:py-0 max-lg:px-0 max-lg:text-sm">
                  Submit Test
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default QuizFromWord;
