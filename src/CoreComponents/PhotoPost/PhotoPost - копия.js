import React from 'react';
import SendingFormContainer from './SendingForm/SendingFormContainer';
import PostContainer from './Posts/PostContainer';
import s from './photoPost.module.scss';

const Pic = (props) =>{
  
  return (
      <div className={s.pic}>
        <img src="https://avatars.mds.yandex.net/get-pdb/1924971/a05d7439-5109-41cd-9f5d-f4a0a418da63/s1200?webp=false" alt="" />
      </div>
    );
}

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
