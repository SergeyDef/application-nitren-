import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialog.module.css';


const Dialog = (props) =>{

	return(
		<div className={s.dialog}>
	        <NavLink to={"dialog/" + props.id}>
		        <div className={s.dialog__all_img}>
		        	<img src={props.photoImg} alt="" title="" />
		        </div>
		        <div className={s.dialog__all_name}>
		        	<span>{props.name + " " + props.surname}</span>	
		        </div>
		    </NavLink>
	    </div>
	   );
}

export default Dialog;
