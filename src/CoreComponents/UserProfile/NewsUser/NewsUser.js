import React from 'react';
import s from  '../userProfile.module.scss';


const UserPost = (props) =>{
	return (
		<div id={props.id} className={s.post}>
			<span className={s.post__date}>{props.datePublication}</span>
			<p className={s.post__text}>{props.text}</p>
		</div>
		);
}

const NewsUser = (props) =>{
	
	let newPostElement = React.createRef();

	let onPublish = () =>{
		props.publish();
	}

	let onPostChange = () =>{
		let text = newPostElement.current.value;
		props.postChange(text);
	} 

	let postDate = props.userPostDate.map(ps => (<UserPost id={ps.id} datePublication={ps.datePublication} text={ps.text} />) )
	
	return (
	<div className={s.news}>
		<div className={s.news__block} id={props.id}>
			<button className={s.buttons} onClick={onPublish}>Опубликовать</button>
			<textarea rows="2" cols="70" onChange={onPostChange} value={props.newPostText} ref={newPostElement} className={s.news__textarea} />
		</div>
		<div className={s.news__post}>
			{postDate}
		</div>
	</div>
		
		);
}

export default NewsUser;
