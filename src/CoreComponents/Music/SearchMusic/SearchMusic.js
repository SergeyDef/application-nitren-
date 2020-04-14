import React from 'react';
import s from './searchMusic.module.css';

const SearchMusic = (props) =>{ 
  return (
      <div className={s.subscribers}>
	      <input type='text' className={s.subscribers_form}></input>
	      <button className={s.buttons}>Найти</button>
      </div>
    );
}

export default SearchMusic;
