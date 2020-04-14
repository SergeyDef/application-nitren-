import React from 'react';
import s from './letter.module.css';

 
  
const Letter = (props) =>{
  
  return (
      <div className={s.letter}>
        <div className={s.ava}>
          <div className={s.ava_commentator}>
            <img src={props.imgAva} alt="ava" className={s.ava_commentator_img}/>
          </div>
          <div className={s.ava_commentator_name}>
            <span className={s.ava_commentator_name_text}>{props.name + " " + props.surname}</span>
          </div>
        </div>
        <div className={s.message}>
          {props.message}
        </div>
      </div>
    );
}

export default Letter;
