import React from 'react';
import s from './Futer.module.css';

const Futer = () =>{
  
  return (
      <div className={s.Futer}>
        <ul className="level-list network">
          <li>
            <a href="">
             <img src="img/vk.svg" alt="VK" className={s.network_img} />
            </a>        
          </li>
          <li>
           <a href="">
              <img src="" alt="facebook" className={s.network_img} />
            </a>
          </li>                    
          <li>
            <a href="">
              <img src="" alt="instagram" className={s.network_img} />
            </a>
          </li> 
          <li>
            <a href="">
              <img src="" alt="mail" className={s.network_img} />
            </a>
          </li>
        </ul>                              
      </div>
    );
}

export default Futer;
