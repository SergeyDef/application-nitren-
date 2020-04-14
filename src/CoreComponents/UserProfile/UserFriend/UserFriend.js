import React from 'react';
import UserFriendAwa from './UserFriendAwa/UserFriendAwa';
import UserFriendContainer from './UserFriendContainer';
import s from './userFriend.module.css';

const UserFriend = (props) =>{
		let userFriendAwa = props.userFriendAwa.map(F => (<UserFriendAwa id={F.id} avatarSrcFriend={F.avatarSrcFriend} friendName={F.friendName} />));

		return (
			<div className={s.user_friend} id={props.id}>
				{userFriendAwa}
			</div>
			);
}

export default UserFriend;
