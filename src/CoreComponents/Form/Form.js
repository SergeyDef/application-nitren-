import React from 'react';
import s from './Form.module.css';

const Form = () =>{
  
  return (
      <div className={s.Form}>
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

export default Form;
