import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Nav.module.css';

const Nav = () =>{
  
  return (
      <div className={s.Nav}>
        <ul className={s.menulist}>
          <li className={s.item}>
            <NavLink to="/userProfile">
              <span>My profile</span>
            </NavLink>
          </li>
          <li className={s.item}>
              <NavLink to="/library">
                <span>Library</span>
              </NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="/interests">
              <span>Interests</span>
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="/music">
             <span>Music</span>
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="/dialogs">
              <span>Messages</span>
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="/photoPost">
              <span>Photo</span>
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="/subscribers">
              <span>Site user</span>
            </NavLink>
          </li>
        </ul>
      </div>
    );
}

export default Nav;
