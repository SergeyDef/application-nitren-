import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './nav.module.scss';

const Nav = () =>{
  
  return (
      <div className={s.menu}>
        <ul className={s.menu__list}>
          <li className={s.menu__item}>
            <NavLink to="/userProfile">
              <span>My profile</span>
            </NavLink>
          </li>
          <li className={s.menu__item}>
              <NavLink to="/library">
                <span>Library</span>
              </NavLink>
          </li>
          <li className={s.menu__item}>
            <NavLink to="/interests">
              <span>Interests</span>
            </NavLink>
          </li>
          <li className={s.menu__item}>
            <NavLink to="/music">
             <span>Music</span>
            </NavLink>
          </li>
          <li className={s.menu__item}>
            <NavLink to="/dialogs">
              <span>Messages</span>
            </NavLink>
          </li>
          <li className={s.menu__item}>
            <NavLink to="/photoUser">
              <span>Photo</span>
            </NavLink>
          </li>
          <li className={s.menu__item}>
            <NavLink to="/subscribers">
              <span>Site user</span>
            </NavLink>
          </li>
        </ul>
      </div>
    );
}

export default Nav;
