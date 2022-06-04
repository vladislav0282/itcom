import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";




const Dialogs = (props) => {
  
  let dialogsElements = props.dialogs.map( d => <DialogItem name={d.name} id={d.id}/>)
  let messagesElements = props.messages.map( m => <Message message={m.message}/>)
  
  let newMessagesElements = React.createRef();
  
  let addMessage = () => {
    let text = newMessagesElements.current.value;
    alert(text);
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        { dialogsElements }
      </div>
      <div className={classes.messages}>
        { messagesElements }
      </div>
      <div>
        <textarea ref={newMessagesElements}></textarea>
      </div>
      <div>
        <button onClick={ addMessage }>addMessage</button>
      </div>
    </div>
  )
};

export {Dialogs};
