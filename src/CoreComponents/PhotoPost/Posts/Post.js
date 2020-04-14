import React from 'react';
import Letter from './Letter/Letter';
import PostContainer from './PostContainer';

import s from './posts.module.css';

const Post = (props) =>{
	debugger;
	let messageData = props.comment.map(el => (<Letter 
		id={el.id} 
		message={el.message} 
		imgAva={el.imgAva} 
		name={el.name} 
		surname={el.surname}
		/>));

  return (
      <div className={s.Post}>
        {messageData}
      </div>
    );
}

export default Post;
