import React from 'react';
import NewsUserContainer from './NewsUser/NewsUserContainer';
import UserFriendContainer from './UserFriend/UserFriendContainer';
import UserInformation from './UserInformation/UserInformation';
import s from './userProfile.module.scss';
import UserProfileContainer from './UserProfileContainer';


const UserAvatar = (props) =>{
  return (
    <div className={s.avatar} id={props.id}>
      <img src={props.avatarSrc} alt="avatar" className={s.avatar__img}/>
    </div>
    );
}

const UserNama = (props) =>{
  
  return (
    <div className={s.name} id={props.id} >
        <span className={s.name__text}>{props.nameName}</span>
        <span className={s.name__text}>{props.nameSurname}</span>
    </div>
    );
}

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
  <div className={s.user}>
    <div className={s.info}>
      <div className={s.info__detailed}>
        <UserFriendContainer />
        {userData}
      </div>
      <div className={s.info__name}>
      	{nameDete}
      	{avatarDete}
      </div>
    </div>
    <NewsUserContainer />
  </div>
    );
}

export default UserProfile;

