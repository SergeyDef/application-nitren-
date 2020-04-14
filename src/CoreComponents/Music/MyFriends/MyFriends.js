import React from 'react';

import s from './myFriends.module.css';


const MyFriends = (props) =>{
  
  return (
      <div id={props.id} className={s.myFriend}>
	      <div className={s.myFriend_ava}>
	      	<img src={props.avaFriend} alt="avaFriend" className={s.myFriend_ava_img} />
	      </div>
	      <div className={s.myFriend_info}>
	      	<span className={s.myFriend_info_indicator}>{props.onWebsite}</span>
	      	<span className={s.myFriend_info_name}>{props.nameFriend + " " + props.surnameFriend}</span>
	      </div>
      </div>
    );
}

export default MyFriends;
