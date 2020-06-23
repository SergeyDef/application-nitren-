import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './photoUser.module.scss';

const PhotoUser = (props) =>{
  return (
  	<div className={s.archive}>
  		{
  		props.userPhotos.map(i => <div className={s.archive__item}>
        <NavLink to={'/photoPost/' + i.id}>
    			<div className={s.archive__img__block}>
    				<img src={i.src} className={s.archive__img} alt="" />
    			</div>
        </ NavLink>
  			<div className={s.description}>
  				<span className={s.description__photo}>{i.descriptionPhoto}</span>
  				<span className={s.description__date}>{i.datePublication}</span>
  			</div>
  		</div>)	
  		}
	</div>
    );
}

export default PhotoUser; 