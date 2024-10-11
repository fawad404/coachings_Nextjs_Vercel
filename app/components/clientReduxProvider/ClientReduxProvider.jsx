// app/components/clientReduxProvider/ClientReduxProvider.jsx
'use client'; // Ensure this is a client component

import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../../store/store'; // Adjust the path based on your directory structure

const ClientReduxProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default ClientReduxProvider;
