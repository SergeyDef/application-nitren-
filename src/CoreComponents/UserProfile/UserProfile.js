import React from 'react';
import NewsUserContainer from './NewsUser/NewsUserContainer';
import UserNama from './UserNama/UserNama';
import UserFriendContainer from './UserFriend/UserFriendContainer';
import UserAvatar from './UserAvatar/UserAvatar';
import UserInformation from './UserInformation/UserInformation';
import s from './UserProfile.module.css';
import UserProfileContainer from './UserProfileContainer';

const UserProfile = (props) =>{

	let nameDete = props.names.map(elNeme => (<UserNama 
    id={elNeme.id} 
    nameName={elNeme.nameName} 
    nameSurname={elNeme.nameSurname} />));
	
	let avatarDete = props.avatars.map(av => (<UserAvatar 
  id={av.id} 
  avatarSrc={av.avatarSrc} />));

  let userData = props.userData.map(d => (<UserInformation 
  status={d.status} 
  age={d.age} 
  activity={d.activity} 
  subscriptions={d.subscriptions} 
  photo={d.photo} 
  town={d.town} />));

  return (
  <div className={s.user_Profile}>
    <div className={s.user_page}>
      <div>
        <UserFriendContainer />
        {userData}
      </div>
      <div className={s.user}>
      	{nameDete}
      	{avatarDete}
      </div>
    </div>
    <NewsUserContainer />
  </div>
    );
}

export default UserProfile;

