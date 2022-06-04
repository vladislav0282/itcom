
import React, {Component} from 'react';
import "./App.css";
import { Route, Routes } from 'react-router-dom';
import {Header}  from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import { addPost, addPost2 } from './redax/state';





const App = (props) => {


  return (
      
          <div className='app-wrapper'>
              <Header/>
              <Navbar/>
              <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/dialogs" element = {<Dialogs 
                    dialogs={props.state.messagesPage.dialogs} 
                    messages={props.state.messagesPage.messages}
                    addMessage={props.addMessage}/>}/>
                    
                    <Route path="/profile" element={<Profile 
                    posts={props.state.profilePage.posts} 
                    addPost={props.addPost}/>}/>
                    <Route path="/news" element={<News/>}/>
                </Routes> 
              </div>
          </div>
    
  )
}

export default App;
