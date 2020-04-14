import React from 'react';



const Nav = () =>{
  
  return (
      <div className="Nav">
        <ul className="menu-list">
          <li className="item">
            <a href="#">
              <span>Мой профель</span>
            </a>
          </li>
          <li className="item">
            <a href="#">
              <span>Библиотека</span>
            </a>
          </li>
          <li className="item">
            <a href="#">
              <span>Интересы</span>
            </a>
          </li>
          <li className="item">
            <a href="#">
             <span>Музыка</span>
            </a>
          </li>
        </ul>
      </div>
    );
}

export default Nav;
