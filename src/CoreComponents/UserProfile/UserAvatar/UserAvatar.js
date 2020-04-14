import React from 'react';
import s from './UserAvatar.module.css';


const UserAvatar = (props) =>{
	return (
		<div className={s.user_avatar} id={props.id}>
			<img src={props.avatarSrc} alt="avatar" className={s.avatar}/>
		</div>
		);
}

export default UserAvatar;
