import React from 'react';
import s from './searchInterests.module.css';

const SearchInterests = (props) =>{ 
  return (
      <div className={s.subscribers}>
	      <input type='text' className={s.subscribers_form}></input>
	      <button className={s.buttons}>Найти</button>
      </div>
    );
}

export default SearchInterests;
