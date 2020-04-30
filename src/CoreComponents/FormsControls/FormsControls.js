import React from 'react';
import s from './FormsControls.module.css';

export const Input = ({input, meta, ...props}) =>{
  const hesErorr = meta.touched && meta.error;
  return (
      <div className={s.form_control + " " + (hesErorr ? s.error : "" )}>
        <div>
          <input {...input} {...props} className={s.input_field} placeholder={"Robert Schneider"} />
        </div>
        {  hesErorr &&
          <div className={s.message_error}>
            <span className={s.message_error_texst}>{meta.error}</span>
            <div className={s.message_error_triangle}></div>
          </div>
        }
      </div>
    );
}

export const InputPassword = ({input, meta, ...props}) =>{
  const hesErorr = meta.touched && meta.error;
  return (
      <div className={s.form_control + " " + (hesErorr ? s.error : "" )}>
        <div>
          <input {...input} {...props} type={"password"} className={s.input_field} placeholder={"XXXXXXXXX"} />
        </div>
        {  hesErorr &&
          <div className={s.message_error}>
            <span className={s.message_error_texst}>{meta.error}</span>
            <div className={s.message_error_triangle}></div>
          </div>
        }
      </div>
    );
}
