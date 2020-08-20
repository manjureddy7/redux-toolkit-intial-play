import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// Store
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './store/rootReducer';


// Create store variable
const store = configureStore({
  // Reducer here is the combineReducer of our app
  reducer: rootReducer
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
