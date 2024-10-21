'use client'; 

import React, { useEffect, useState } from "react";
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

  const [correct, setCorrect] = useState('');
  const [incorrect, setIncorrect] = useState('');



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
      setCorrect(result.correctCount);
      setIncorrect(result.incorrectCount);
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

            <div className="bg-blue-100 rounded-lg w-full max-w-lg mx-auto">
  {/* Status Counters */}
  <div className="grid grid-cols-3 gap-4 mb-4">
    <div className="flex items-center space-x-1">
      <div className="border bg-green-500 text-white w-6 h-6 text-xs flex justify-center items-center">{correct && correct}</div>
      <span className="text-sm">Correct</span>
    </div>
    <div className="flex items-center space-x-1">
      <div className="border border-gray-500 text-gray-700 w-6 h-6 text-xs flex justify-center items-center">33</div>
      <span className="text-sm">Unattempted</span>
    </div>
    <div className="flex items-center space-x-1">
      <div className="border bg-red-500 text-white w-6 h-6 text-xs flex justify-center items-center">{incorrect && incorrect}</div>
      <span className="text-sm">Incorrect</span>
    </div>
    <div className="flex items-center space-x-1">
      <div className="border bg-yellow-500 text-white w-6 h-6 text-xs flex justify-center items-center">33</div>
      <span className="text-sm">Not Visited</span>
    </div>
  </div>

  {/* Speed Indicators */}
  <div className="py-2 text-gray-600 font-semibold border border-y-gray-300 mb-2">
    <p>Speed Indicators</p>
  </div>
  <div className="grid grid-cols-4 gap-3 mt-2">
    {/* Superfast */}
    <div className="flex flex-col items-center rounded-lg">
      <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 98.92 122.88" xmlSpace="preserve">
        <path d="M78.77,0c-3.29,39.36-48.34,13.5-65.45,46.28c-2.42,5.34-4.03,10.29-4.8,14.84c-1.26,1.55-2.42,3.22-3.45,5
        c-5.22,9.05-6.28,19.35-3.78,28.71c2.51,9.35,8.58,17.75,17.63,22.97c9.05,5.22,19.35,6.28,28.71,3.78
        c9.35-2.51,17.75-8.58,22.97-17.63c2.31-4,3.8-8.24,4.54-12.54c5.32-3.1,10.02-7.48,13.62-13.28c6.08-14.12-5.01-25.38,10.17-35.32
        c-9.38-4.72-15.1,0.16-20.58,9.7c-5.93,12.88-28.14-2.37-7.32-10.29C88.92,35.42,87.29,14.45,78.77,0L78.77,0L78.77,0z 
        M37.02,84.91c0.11,0,0.23,0,0.34,0.01l13.03-9.76c1.51-1.13,3.66-0.83,4.79,0.68c1.13,1.51,0.83,3.66-0.68,4.79L41.6,90.3
        c-0.36,2.21-2.27,3.9-4.58,3.9c-2.56,0-4.64-2.08-4.64-4.64c0-0.49,0.08-0.96,0.22-1.41L19.33,77.89c-0.84-0.65-0.99-1.85-0.35-2.69
        c0.65-0.84,1.85-0.99,2.69-0.35l13.5,10.44C35.74,85.05,36.36,84.91,37.02,84.91L37.02,84.91z"/>
      </svg>
      <span className="text-xs mt-2 text-center">Superfast</span>
    </div>

    {/* On Time */}
    <div className="flex flex-col items-center rounded-lg">
      <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 122.88 99.56" xmlSpace="preserve">
        <path className="st0" d="M73.1,0c6.73,0,13.16,1.34,19.03,3.78c6.09,2.52,11.57,6.22,16.16,10.81
        c4.59,4.58,8.28,10.06,10.81,16.17c2.43,5.87,3.78,12.3,3.78,19.03c0,6.73-1.34,13.16-3.78,19.03c-2.52,6.09-6.22,11.58-10.81,16.16
        c-4.58,4.59-10.06,8.28-16.17,10.81c-5.87,2.43-12.3,3.78-19.03,3.78c-6.73,0-13.16-1.34-19.03-3.77c-6.09-2.52-11.57-6.22-16.16-10.81
        l-0.01-0.01c-4.59-4.59-8.29-10.07-10.81-16.16c-0.78-1.89-1.45-3.83-2-5.82c1.04,0.1,2.1,0.15,3.17,0.15
        c2.03,0,4.01-0.18,5.94-0.53c0.32,0.96,0.67,1.91,1.05,2.84c2.07,5,5.11,9.51,8.9,13.29c3.78,3.78,8.29,6.82,13.29,8.9
        c4.81,1.99,10.11,3.1,15.66,3.1c5.56,0,10.85-1.1,15.66-3.1c5-2.07,9.51-5.11,13.29-8.9c3.78-3.78,6.82-8.29,8.9-13.29
        c1.99-4.81,3.1-10.11,3.1-15.66c0-5.56-1.1-10.85-3.1-15.66c-2.07-5-5.11-9.51-8.9-13.29c-3.78-3.78-8.29-6.82-13.29-8.9
        c-4.81-1.99-10.11-3.1-15.66-3.1c-5.56,0-10.85,1.1-15.66,3.1c-0.43,0.18-0.86,0.37-1.28,0.56c-1.64-2.58-3.62-4.92-5.89-6.95
        c1.24-0.64,2.51-1.23,3.8-1.77C59.94,1.34,66.37,0,73.1,0L73.1,0z"/>
      </svg>
      <span className="text-xs mt-2 text-center">On Time</span>
    </div>

    {/* Fast */}
    <div className="flex flex-col items-center rounded-lg">
      <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 99.93 122.88" xmlSpace="preserve">
        <path className="st0" d="M37.96,0h48.72c3.43,1.63,9.52,8.65,11.28,11.86c2.57,4.66,2.56,9.69,2.56,15.03
        c0,17.78-14.4,31.45-32.18,31.45c-2.69,0-6.28-0.47-9.56-0.97l-16.77,32.16h48.77v33.36H7.82v-33.36l31.33-62.54
        c-1.61-0.76-2.99-1.64-4.12-2.6C27.34,22.69,25.96,18.67,25.96,15.03C25.96,7.08,33.18,0.71,37.96,0L37.96,0L37.96,0z"/>
      </svg>
      <span className="text-xs mt-2 text-center">Fast</span>
    </div>

    {/* Slow */}
    <div className="flex flex-col items-center rounded-lg">
      <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 122.88 99.56" xmlSpace="preserve">
        <path className="st0" d="M73.1,0c6.73,0,13.16,1.34,19.03,3.78c6.09,2.52,11.57,6.22,16.16,10.81
        c4.59,4.58,8.28,10.06,10.81,16.17c2.43,5.87,3.78,12.3,3.78,19.03c0,6.73-1.34,13.16-3.78,19.03c-2.52,6.09-6.22,11.58-10.81,16.16
        c-4.58,4.59-10.06,8.28-16.17,10.81c-5.87,2.43-12.3,3.78-19.03,3.78c-6.73,0-13.16-1.34-19.03-3.77c-6.09-2.52-11.57-6.22-16.16-10.81
        l-0.01-0.01c-4.59-4.59-8.29-10.07-10.81-16.16c-0.78-1.89-1.45-3.83-2-5.82c1.04,0.1,2.1,0.15,3.17,0.15
        c2.03,0,4.01-0.18,5.94-0.53c0.32,0.96,0.67,1.91,1.05,2.84c2.07,5,5.11,9.51,8.9,13.29c3.78,3.78,8.29,6.82,13.29,8.9
        c4.81,1.99,10.11,3.1,15.66,3.1c5.56,0,10.85-1.1,15.66-3.1c5-2.07,9.51-5.11,13.29-8.9c3.78-3.78,6.82-8.29,8.9-13.29
        c1.99-4.81,3.1-10.11,3.1-15.66c0-5.56-1.1-10.85-3.1-15.66c-2.07-5-5.11-9.51-8.9-13.29c-3.78-3.78-8.29-6.82-13.29-8.9
        c-4.81-1.99-10.11-3.1-15.66-3.1c-5.56,0-10.85,1.1-15.66,3.1c-0.43,0.18-0.86,0.37-1.28,0.56c-1.64-2.58-3.62-4.92-5.89-6.95
        c1.24-0.64,2.51-1.23,3.8-1.77C59.94,1.34,66.37,0,73.1,0L73.1,0z"/>
      </svg>
      <span className="text-xs mt-2 text-center">Slow</span>
    </div>
  </div>
</div>

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
