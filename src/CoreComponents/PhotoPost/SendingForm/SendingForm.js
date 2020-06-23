import React from 'react';
import s from '../photoPost.module.scss';
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
      <div className={s.sending}>
        <textarea 
        rows="4" 
        cols="70" 
        className={s.sending__window} 
        ref={newCommentsElement} 
        value={props.newCommentText}
        onChange={newComment} 
        />
        <button className={s.sending__button} onClick={publish}>Отправить</button>
      </div>
    );
}

export default SendingForm;
