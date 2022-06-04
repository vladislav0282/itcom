
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { addPost } from './redax/state';
import {addMessage} from './redax/state';





export let rerenderEntireTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App state={state} addPost={addPost} addMessage={addMessage}/>
    </BrowserRouter>
  </React.StrictMode>
);
}

