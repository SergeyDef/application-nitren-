import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';
import logo from '../../assec/img/logo.png';
import UserStatus from './userStatus/UserStatus';

const Header = (props) =>{
  return (
      <div className={s.Header}>
        <div className="">
          <a href="index.php" className="{s.link_site}">
            <div className={s.logotype}>
              <img src={logo} className={s.logotype_img} alt="logotype" />
            </div>
          </a>
        </div>
        <ul className= {s.menu_item}>
          <UserStatus status={"Hello my friends"} />
        </ul>
        <div className={s.loginBlock}>
        <span className={s.button + " " + s.exit}>{ props.isAuth ? props.login : 
          <NavLink to={'/login'} >Login</NavLink>}</span>
        { props.isAuth && <button className={s.button} onClick={props.logout}>exit</button> }
        </div>
      </div>
    );
}

export default Header;
