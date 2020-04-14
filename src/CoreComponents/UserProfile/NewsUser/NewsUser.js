import React from 'react';
import UserPost from './UserPost/UserPost';
import s from './newsUser.module.css';

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
	<div>
		<div className={s.userAvatar} id={props.id}>
			<button className={s.buttons} onClick={onPublish}>Опубликовать</button>
			<textarea rows="2" cols="70" onChange={onPostChange} value={props.newPostText} ref={newPostElement} className={s.publicationForm} />
		</div>
		<div className={s.userPost}>
			{postDate}
		</div>
	</div>
		
		);
}

export default NewsUser;
