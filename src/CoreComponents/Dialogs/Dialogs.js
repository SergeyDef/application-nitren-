import React from 'react';
import {NavLink} from 'react-router-dom';
import Message from './Message/Message';
import Dialog from './Dialog/Dialog';
import DialogsContainer from './DialogsContainer';
import FormInformationContainer from './FormInformation/FormInformationContainer';
import s from './Dialogs.module.css';

const Dialogs = (props) =>{
	
	let newDialogData = props.dialogData.map(user => (<Dialog id={user.id} name={user.name} surname={user.surname}  photoImg={user.photoImg} />))

	let newMessageData = props.messageData.map(el => (<Message id={el.id} name={el.name} message={el.message} photo={el.photo} />));
  
  return (
      <div className={s.dialogs}>
        <div className={s.dialogs__all}>
        	{newDialogData}
      	</div>
	      	<div className={s.dialogs__window}>
            <div className={s.dialogs__window_field}>
              {newMessageData}
            </div>
            <FormInformationContainer 
            dispatch={props.dispatch}
            newMessagText={props.newMessagText} 
            newUserMessage={props.newUserMessage} 
            className={s.dialogs__window_form} />
	      	</div>
      </div>
    );
}

export default Dialogs;
