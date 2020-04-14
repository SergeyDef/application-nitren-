import React from 'react';
import s from './userPost.module.css';

const UserPost = (props) =>{
	return (
		<div id={props.id} className={s.user_post}>
			<span className={s.user_post_date}>{props.datePublication}</span>
			<p className={s.user_post_text}>{props.text}</p>
		</div>
		);
}

export default UserPost;
