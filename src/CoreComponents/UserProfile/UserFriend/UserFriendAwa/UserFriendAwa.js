import React from 'react';
import s from './userFriendAwa.module.css';

const UserFriendAwa = (props) =>{
	return (
		<div id={props.id} className={s.user_friend_awa}>
			<img src={props.avatarSrcFriend} alt="avatar" className={s.avatar_user_friend_awa} />
			<span className={s.avatar_user_friend_name}>{props.friendName}</span>
		</div>
		);
}

export default UserFriendAwa;
