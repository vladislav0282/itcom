
import React, {Component} from 'react';
import "./App.css";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import {Header}  from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import state from './redax/state';




const App = (props) => {


  return (
      <BrowserRouter>   
          <div className='app-wrapper'>
              <Header/>
              <Navbar/>
              <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/dialogs" element = {<Dialogs dialogs={props.state.messagesPage.dialogs} messages={props.state.messagesPage.messages}/>}/>
                    <Route path="/profile" element={<Profile posts={props.state.profilePage.posts}/>}/>
                    <Route path="/news" element={<News/>}/>
                </Routes> 
              </div>
          </div>
      </BrowserRouter>
  )
}

export default App;
