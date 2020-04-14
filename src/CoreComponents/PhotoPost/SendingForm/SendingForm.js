import React from 'react';
import s from './SendingForm.module.css';
import SendingFormContainer from './SendingFormContainer';

const SendingForm = (props) =>{
 
   let newCommentsElement = React.createRef();

  let publish = () =>{
    props.makePublish();
  }

  let newComment = () =>{
    let text = newCommentsElement.current.value;
    props.textNewComment(text);
  }
  
  return (
      <div className={s.SendingForm}>
        <textarea 
        rows="4" 
        cols="70" 
        className={s.SendWindow} 
        ref={newCommentsElement} 
        value={props.newCommentText} 
        onChange={newComment} 
        />
        <button className={s.buttons} onClick={publish}>Отправить</button>
      </div>
    );
}

export default SendingForm;
