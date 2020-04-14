import React from 'react';
import s from './formInformation.module.css';
 
const FormInformation = (props) =>{

let newMessageElement = React.createRef();

let onSendMessage = () =>{
	props.sendMessage();
    // props.dispatch(aadUserMessageCreator());
}

let onMessagChenge = () =>{
	let text = newMessageElement.current.value;
	props.messagChenge(text);
	// props.dispatch(nawUserMessageCreator(text));
}

  return(
    <div className={s.publication}>
      <button className={s.buttons} onClick={onSendMessage} >Отправить</button>
      <textarea 
	      rows="2" 
	      cols="70" 
	      ref={newMessageElement} 
	      className={s.publication_form} 
	      onChange={onMessagChenge} 
	      value={props.newMessagText}
      />
    </div>
    );
}


export default FormInformation;
