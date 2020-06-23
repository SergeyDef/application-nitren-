import React from 'react';
import s from './Header.module.scss';
import {NavLink} from 'react-router-dom';
import logo from '../../assec/header/logo.png';
import UserStatus from './userStatus/UserStatus';

const MobilMenue = (props) =>{
  return (
    <div className={s.menue}>
      <span className={s.menue__item}></span>
      <span className={s.menue__item}></span>
      <span className={s.menue__item}></span>
    </div>
    );
}

const Header = (props) =>{
  return (
      <div className={s.header}>
        <div className={s.header__logotype}>
          <a href="index.php" className="{s.logotype}">
            <div className={s.logotype__block}>
              <img src={logo} className={s.logotype__img} alt="logotype" />
            </div>
          </a>
        </div>

        <div className={s.header__status}>
          <UserStatus status={"Hello my friends"} />
        </div>

        <div className={s.header__login}>
          <span className={s.button + " " + s.exit}>{ props.isAuth ? props.login : 
            <NavLink to={'/login'} >Login</NavLink>}</span>
          { props.isAuth && <button className={s.button} onClick={props.logout}>exit</button> }
        </div>
        <MobilMenue />
      </div>
    );
}

export default Header;
