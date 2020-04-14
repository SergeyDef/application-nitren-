import React from 'react';
import SearchMusic from './SearchMusic/SearchMusic';
import s from './music.module.css';

const Music = (props) =>{ 
	

  return (
      <div className={s.subscribers}>
      	<SearchMusic />
      </div>
    );
}

export default Music;
