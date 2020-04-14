import React from 'react';
import s from './Pic.module.css';

const Pic = (props) =>{
  
  return (
      <div className={s.pic}>
        <img src="https://i.pinimg.com/736x/b3/5a/e5/b35ae54dc58f7fe18d883b7021742cfb--necronomicon-cthulu.jpg" alt="" />
      </div>
    );
}

export default Pic;
