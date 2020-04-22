import React from 'react';
import {NavLink} from 'react-router-dom';
import LoginContainer from './LoginContainer';
import s from './Login.module.css';

const Login = (props) =>{
  let practice = () =>{
    let a = "Login.js";
    let b = " \t \n";
    let c =["a", "d", "c"];
    let e ={ nema:"a", age:"d", gender:"c"};
    let d = () =>{
      return b
    }
    let s = "165";
    let p = 165;
    let g = null;
    let x = p++;
    let result = x;

    alert(result);
  }
  return (
      <div className={s.login}>
      <span>Login</span>
      <br/>
      <br/>
      <button onClick={practice} >Практика</button>
      <form name="ProfileData">
          <fieldset>
            <legend className={s.input_list}>Данные профеля</legend>
            <label for="name" className={s.tips}>Name</label>
              <input type="text" className={s.input_field} id="name" /><br />
               <label for="name" className="tips">Name</label>
              <input type="text" className={s.input_field} id="name" /><br />
              <input type="checkbox" /><br />
              <input type="button" value="Вывести списком" className={s.buttons} />
              <input type="button" id="" value="Опубликовать" className={s.buttons} />
          </fieldset>
        </form>
      </div>
    );
}

export default Login;
