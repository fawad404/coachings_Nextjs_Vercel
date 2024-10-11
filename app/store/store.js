// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import quizReducer from './quizSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Defaults to localStorage for web
import { combineReducers } from 'redux';

// Combine your reducers (if you have more in the future)
const rootReducer = combineReducers({
  quiz: quizReducer,
  // Add other reducers here if needed
});

// Configure persist settings
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['quiz'], // Only persist the 'quiz' slice
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
const store = configureStore({
  reducer: persistedReducer,
  // Optional: Add middleware or other store enhancers here
});

// Create a persistor
const persistor = persistStore(store);

// Export both store and persistor
export { store, persistor };
