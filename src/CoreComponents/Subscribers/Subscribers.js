import React from 'react';
// import SearchFriendsContainer from './SearchFriends/SearchFriendsContainer';
import s from './subscribers.module.css';
import SubscribersContainer from './SubscribersContainer';
import ava2 from '../../assec/img/ava2.jpg';
import {NavLink} from 'react-router-dom';
import * as axios from 'axios';


let Subscribers = (props) => {
		let pagesCount = Math.ceil(props.totalUsersCounts / props.pageSize);
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
		      	<img src={F.photos.smal === null ? F.photos.smal : ava2} alt="ava" className={s.myFriend_ava_img} />
		      </ NavLink>
		      </div>
		     
		      <div className={s.myFriend_info}>
		      	<span className={s.myFriend_info_indicator}>{F.onWebsite}</span>
		      	<span className={s.myFriend_info_indicator}>{F.status}</span>
		      	<span className={s.myFriend_info_name}>{F.name}</span>
		      	{F.folloved 
		      		? <button onClick={ () =>

		      			axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${F.id}`, {
		      				withCredentials: true,
		      				heders: {
		      					"API-KEY": "5ce86993-892d-464d-ab4b-391cce741372"
		      				}
		      			})
		      				.then(response =>{
		      					if(response.data.resultCode == 0){
		      						props.notFriend(F.id);
		      					}
					})

		      			} className={s.buttons}>add to friend</button> 

		      		: <button onClick={ () => 

		      			axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${F.id}`, {}, {
		      				withCredentials: true,
		      				heders: {
		      					"API-KEY": "5ce86993-892d-464d-ab4b-391cce741372"
		      				}
		      			})
		      				.then(response =>{
		      					if(response.data.resultCode == 0){
		      						props.inFriend(F.id);
		      					}
					})

		      			} className={s.buttons}>remove friend</button>}
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
