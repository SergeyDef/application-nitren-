import React from 'react';
import s from './UserNama.module.css';


const UserNama = (props) =>{
	
	return (
		<div className={s.name} id={props.id} >
			<div className={s.name_name}>
				<span className={s.name_name_text}>{props.nameName}</span>
				<span className={s.name_name_text}>{props.nameSurname}</span>
			</div>
		</div>
		);
}

export default UserNama;
