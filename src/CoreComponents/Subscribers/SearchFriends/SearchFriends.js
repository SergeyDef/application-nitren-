import React from 'react';
import s from './searchFriends.module.css';


const SearchFriends = (props) =>{ 
	let newTextElement = React.createRef();

	let onSearchChange = () =>{
	let text = newTextElement.current.value;
}
	
  return (
      <div className={s.subscribers}>
	      <input type='text' className={s.subscribers_form} ref={newTextElement} onChange={onSearchChange} ></input>
      </div>
    );

}
export default SearchFriends;
