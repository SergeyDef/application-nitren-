import React from 'react';
import SendingFormContainer from './SendingForm/SendingFormContainer';
import PostContainer from './Posts/PostContainer';
import Pic from './Pic/Pic';
import s from './PhotoPost.module.css';

const PhotoPost = (props) =>{

  return (
      <div className={s.photoPost}>
      	<Pic />
        <PostContainer />
        <SendingFormContainer />
      </div>
    );
}

export default PhotoPost;
