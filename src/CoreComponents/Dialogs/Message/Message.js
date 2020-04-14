import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Message.module.css';

const Message = (props) => {

	return(
		<div className={s.message}>
			<div className={s.message__user}>
		      	<div className={s.message__user_img}>
		      	 	<img src={props.photo} alt = "" title = ""/>
		      	</div>
		      	<div className={s.massage__user_name}>
		      	 	<span className={s.massage__user_name_span}>{props.name}</span>
		      	</div>
	      	</div>
	      	<div>
	      	 	{props.message}
	      	</div>
	    </div>
	);
}

export default Message;
