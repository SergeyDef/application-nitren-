import React from 'react';
import {NavLink} from 'react-router-dom';
import SearchInterests from './SearchInterests/SearchInterests';
import s from './interests.module.css';
import InterestsContainer from './InterestsContainer';



const Interests = (props) =>{
  let object = {
  	name: 'Aleks',
  	properties: {
  		sex: 'man',
  		age: 18,
  		onWebsite: 'onlan'
  	}
  }

  let object1 = {...object};

  object1.name = 'Sveta';

  object1.properties = {...object.properties};

  object1.properties.sex = 'wuman';

  let show = () =>{
  	for (let key in object){
  		alert(key);
  		if (typeof(key === "object")) {
  			for (let key1 in key) {
  				alert(key1);
  			}
  		}
  		alert(key);
  	}
  }
  let a = 5;

  a =8;


  return (
      <div className={s.interests}>
        <SearchInterests />
        <div>
        	{console.log(a)}
        </div>
        
      </div>
    );
}
  

export default Interests;