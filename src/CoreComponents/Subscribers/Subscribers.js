import React from 'react';
// import SearchFriendsContainer from './SearchFriends/SearchFriendsContainer';
import s from './subscribers.module.css';
import SubscribersContainer from './SubscribersContainer';
import ava2 from '../../assec/img/ava2.jpg';
import {NavLink} from 'react-router-dom';


let Subscribers = (props) => {
		let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
		let pages = [];
		for (let i=1; i <= pagesCount; i++){
			pages.push(i);
		}

	return (
		<div className={s.subscribers}>
      	{
      	props.myFriendsData.map(F =>
			<div id={F.id} className={s.myFriend}>
		      <div className={s.myFriend_ava}>
		      <NavLink to={'/userProfile/' + F.id}>
		      	<img src={F.avaFriend =! null ? F.avaFriend : ava2} alt="avaFriend" className={s.myFriend_ava_img} />
		      </ NavLink>
		      </div>
		     
		      <div className={s.myFriend_info}>
		      	<span className={s.myFriend_info_indicator}>{F.onWebsite}</span>
		      	<span className={s.myFriend_info_name}>{F.nameFriend + " " + F.surnameFriend}</span>
		      	{F.folloved 
		      		? <button onClick={ () => props.notFriend(F.id)} className={s.buttons}>add to friend</button> 
		      		: <button onClick={ () => props.inFriend(F.id)} className={s.buttons}>remove friend</button>}
		     </div>
	      </div>)
      	}
      	<div>
	      	{
	      		pages.map( p =>{
	      			return <span className={props.currentPage === p ? s.this_switch : s.switchs}
	      			onClick={ (e) => { props.onPageChanged(p); }} >{p}</span>
	      		})
	      	}
      	</div>
      </div>)
}

export default Subscribers;
