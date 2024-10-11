'use client';
// store/quizSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  answers: [], // { questionIndex: selectedOption }
  currentQuestionIndex: 0,
  questions: [], // Will be populated from your .docx file
};

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
      setQuestions: (state, action) => {
        state.questions = action.payload;
      },
    //   selectOption: (state, action) => {
    //     const { questionId, selectedOptionValue } = action.payload;
  
    //     // Ensure state.answers is an array
    //     if (!Array.isArray(state.answers)) {
    //       state.answers = [];
    //     }
  
    //     const existingAnswerIndex = state.answers.findIndex(answer => answer.id === questionId);
  
    //     if (existingAnswerIndex >= 0) {
    //       // Update the existing answer
    //       state.answers[existingAnswerIndex].selectedOptionValue = selectedOptionValue;
    //     } else {
    //       // Add a new answer
    //       state.answers.push({ id: questionId, selectedOptionValue });
    //     }
    //   },
     selectOption: (state, action) => {
  const { questionId, selectedOptionValue, key } = action.payload;

  // Ensure state.answers is an array
  if (!Array.isArray(state.answers)) {
    state.answers = [];
  }

  const existingAnswerIndex = state.answers.findIndex(answer => answer.id === questionId);

  if (existingAnswerIndex >= 0) {
    // Update the existing answer
    state.answers[existingAnswerIndex].selectedOptionValue = selectedOptionValue;
    state.answers[existingAnswerIndex].key = key; // Update the key if provided
  } else {
    // Add a new answer with an optional key
    state.answers.push({ id: questionId, selectedOptionValue, key });
  }
},

    nextQuestion: (state) => {
        if (state.currentQuestionIndex < state.questions.length - 1) {
          state.currentQuestionIndex += 1;
        }
      },
      previousQuestion: (state) => {
        if (state.currentQuestionIndex > 0) {
          state.currentQuestionIndex -= 1;
        }
      },
      jumpToQuestion: (state, action) => {
        const index = action.payload;
        if (index >= 0 && index < state.questions.length) {
          state.currentQuestionIndex = index;
        }
      },
      resetQuiz: (state) => {
        state.answers = []; // Reset to an empty array
        state.currentQuestionIndex = 0;
      },
    },
  });
  

export const {
  setQuestions,
  selectOption,
  nextQuestion,
  previousQuestion,
  jumpToQuestion,
  resetQuiz,
} = quizSlice.actions;

export default quizSlice.reducer;
