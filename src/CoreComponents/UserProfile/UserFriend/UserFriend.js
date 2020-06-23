import React from 'react';
import UserFriendContainer from './UserFriendContainer';
import s from '../userProfile.module.scss';
import left from '../../../assec/arrow/left__arrow.png';
import right from '../../../assec/arrow/right__arrow.png';

const UserFriendAwa = (props) =>{
	return (
		<div id={props.id} className={s.friend__user}>
			<img src={props.avatarSrcFriend} alt="avatar" className={s.avatar_user_friend_awa} />
			<span>{props.friendName}</span>
		</div>
		);
}

const UserFriend = (props) =>{
	let userFriendAwa = props.userFriendAwa.map(F => (<UserFriendAwa id={F.id} avatarSrcFriend={F.avatarSrcFriend} friendName={F.friendName} />));

	return (
		<div className={s.friend} id={props.id}>
			<div className={s.friend__arrow}>
				<img src={left} alt="arrow" />
			</div>
			{userFriendAwa}
			<div className={s.friend__arrow}>
				<img src={right} alt="arrow" />
			</div>
		</div>
		);
}

export default UserFriend;
