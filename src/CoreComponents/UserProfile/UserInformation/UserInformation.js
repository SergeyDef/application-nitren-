import React from 'react';
import s from '../userProfile.module.scss';

	const UserInformation = (props) =>{
    return(
        <div className={s.information}>
          <div className={s.information__block}>
           <div className={s.information__block__record}>
            <span className={s.information__title}>Статус: </span>
            <span className={s.information__user}>{props.status}</span>
           </div>
           <div className={s.information__block__record}>
            <span className={s.information__title}>Возраст: </span>
            <span className={s.information__user}>props.age</span>
           </div>
           <div className={s.information__block__record}>
            <span className={s.information__title}>Деятельность: </span>
            <span className={s.information__user}>props.activity</span>
           </div>
          </div>

          <div className={s.information__block}>
            <div className={s.information__block__record}>
              <span className={s.information__title}>Подписки: </span>
              <span className={s.information__user}>props.subscriptions</span>
            </div>
            <div className={s.information__block__record}>
              <span className={s.information__title}>Фото: </span>
              <span className={s.information__user}>props.photo</span>
            </div>
            <div className={s.information__block__record}>
             <span className={s.information__title}>Город: </span>
              <span className={s.information__user}>{props.town}</span>
            </div>
          </div>
        </div>
      );
  }

export default UserInformation;
