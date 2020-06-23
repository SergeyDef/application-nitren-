import React from 'react';
import s from './subscribers.module.scss';
import SubscribersContainer from './SubscribersContainer';
import ava2 from '../../assec/img/ava2.jpg';
import {NavLink} from 'react-router-dom';
import PageSelectorContainer from './PageSelector/PageSelector';
import * as axios from 'axios';

let Subscribers = (props) => {
	
	return (
		<div className={s.subscribers__block}>
      	{
      	props.myFriendsData.map(F =>
			<div id={F.id} className={s.subscribers}>
		      <div className={s.subscribers__ava}>
			      <NavLink to={'/userProfile/' + F.id}>
			      	<img src={F.photos.smal === null ? F.photos.smal : ava2} alt="ava" className={s.subscribers__img} />
			      </ NavLink>
		      </div>
		     
		      <div className={s.info}>
		      	<span className={s.info__indicator}>{F.onWebsite}</span>
		      	<span className={s.info__indicator}>{F.status}</span>
		      	<span className={s.info__name}>{F.name}</span>
		      	<div className={s.subscribe}>
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

			      			} className={s.subscribe__button}>add to friend</button> 

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

			      			} className={s.subscribe__button}>remove friend</button>}
		      	</div>
		     </div>
	      </div>)
      	}
      	<PageSelectorContainer onPageChanged={props.onPageChanged} />
      </div>)
}

export default Subscribers;
