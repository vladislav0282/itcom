import React from "react";
import classes from "./Dialogs.module.css";
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id
  return <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{props.name }</NavLink>
          </div>
}

const Messages = (props) => {
  return  <div className={classes.dialog}>{props.message}</div>
}
  

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
          <DialogItem name="Dimych" id="1"/>
          <DialogItem name="Andrey" id="2"/>
          <DialogItem name="Sveta" id="3"/>
          <DialogItem name="Sasha" id="4"/>
          <DialogItem name="Victor" id="5"/>
          <DialogItem name="Valera" id="6"/>
      </div>
      <div className={classes.messages}>
        <Messages message = "Hi"/>
        <Messages message = "How is your it-camasutra"/>
        <Messages message = "Yo"/>
        <Messages message = "Yo"/>
        <Messages message = "Yo"/>
      </div>
    </div>
  )
};

export default Dialogs;
