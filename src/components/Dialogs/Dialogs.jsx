import React from "react";
import classes from "./Dialogs.module.css";
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id
  return <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{ props.name }</NavLink>
          </div>
}

const Messages = (props) => {
  return  <div className={classes.dialog}>{ props.message }</div>
}
  


const Dialogs = (props) => {
  
  let dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Victor'},
    {id: 6, name: 'Valera'}
  ]
  
  let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your it-camasutra'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'}
  ]
  
  let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id}/>)
  let messagesElements = messages.map( m => <Messages message={m.message}/>)

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        { dialogsElements }
      </div>
      <div className={classes.messages}>
        { messagesElements }
      </div>
    </div>
  )
};

export default Dialogs;
