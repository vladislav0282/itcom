
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redax/state';
import { addPost } from './redax/state';

// addPost('samuraiJS.com')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App state={state} addPost={addPost}/>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
