import React from 'react';
import s from './UserInformation.module.css';

	const UserInformation = (props) =>{
    return(
        <div className={s.information}>
          <div className={s.information_block}>
           <div className={s.information_block_record}>
            <span>Статус: </span>
            <span>{props.status}</span>
           </div>
           <div className={s.information_block_record}>
            <span>Возраст: </span>
            <span>props.age</span>
           </div>
           <div className={s.information_block_record}>
            <span>Деятельность: </span>
            <span>props.activity</span>
           </div>
          </div>

          <div className={s.information_block}>
            <div className={s.information_block_record}>
              <span>Подписки: </span>
              <span>props.subscriptions</span>
            </div>
            <div className={s.information_block_record}>
              <span>Фото: </span>
              <span>props.photo</span>
            </div>
            <div className={s.information_block_record}>
             <span>Город: </span>
              <span>{props.town}</span>
            </div>
          </div>
        </div>
      );
  }

export default UserInformation;
