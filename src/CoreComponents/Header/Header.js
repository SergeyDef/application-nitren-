import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';
import logo from '../../assec/img/logo.png';

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
          <li className={s.a_item}>        
            <a href="">О нас</a>        
          </li>
          <li className={s.a_item}>        
            <a href="">О нас</a>        
          </li>
          <li className={s.a_item}>        
            <a href="">О нас</a>        
          </li>        
        </ul>
        <div className={s.loginBlock}>
        <span>{ props.isAuth ? "User login: " + props.login : <NavLink to={'/login'}>Login</NavLink>}</span>
        </div>
      </div>
    );
}

export default Header;
