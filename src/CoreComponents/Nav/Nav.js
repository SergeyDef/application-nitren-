import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Nav.module.css';

const Nav = () =>{
  
  return (
      <div className={s.Nav}>
        <ul className={s.menulist}>
          <li className={s.item}>
            <NavLink to="/userProfile">
              <span>Мой профель</span>
            </NavLink>
          </li>
          <li className={s.item}>
              <NavLink to="/library">
                <span>Библиотека</span>
              </NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="/interests">
              <span>Интересы</span>
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="/music">
             <span>Музыка</span>
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="/dialogs">
              <span>Сообщения</span>
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="/photoPost">
              <span>Фото</span>
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="/subscribers">
              <span>Подписчики</span>
            </NavLink>
          </li>
        </ul>
      </div>
    );
}

export default Nav;
