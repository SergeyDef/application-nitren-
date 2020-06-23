import React from 'react';
import PostContainer from './PostContainer';
import s from '../photoPost.module.scss';

const Letter = (props) =>{
  
  return (
      <div className={s.letter}>
        <div className={s.letter__user + " " + s.user}>
          <div className={s.ava}>
            <img src={props.imgAva} alt="ava" className={s.ava__img}/>
          </div>
          <div className={s.name}>
            <span className={s.name__text}>{props.name + " " + props.surname}</span>
          </div>
        </div>
        <div className={s.letter__message}>
          <span className={s.letter__message__text}>{props.message}</span>
        </div>
      </div>
    );
}

const Post = (props) =>{

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
