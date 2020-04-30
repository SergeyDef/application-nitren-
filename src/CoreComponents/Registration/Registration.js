import React from 'react';
import {NavLink} from 'react-router-dom';
import RegistrationContainer from './RegistrationContainer';
import s from './Registration.module.css';
import {Field, reduxForm} from 'redux-form';
import {required, maxLenghCreator} from '../../utils/validator/required';

const maxLength30 = maxLenghCreator(30);
 
const RegistrationForm = (props) =>{
  return (
    <div className={s.form_block}>
      <form onSubmit={props.handleSubmit} className={s.form} >

          <label for="name" className={s.tips}>Name</label>
            <Field placeholder={"Robert Schneider"} 
            component={"input"} name={"login"} 
            className={s.input_field} 
            validate={[required, maxLength30]} /><br />

            <label for="name" className={s.tips}>Surname</label>
            <Field placeholder={"Robert Schneider"} 
            component={"input"} name={"login"} 
            className={s.input_field} 
            validate={[required, maxLength30]} /> <br />

            <div className={s.sex}>
              <div className={s.sex_block}>
                <label for="" className={s.tips}>man</label>
                <Field component={"input"} type={"radio"} />
              </div>
              <div className={s.sex_block}>
                <label for="" className={s.tips}>woman</label>
                <Field component={"input"} type={"radio"} />
              </div>
              <div className={s.sex_block}>
                <label for="" className={s.tips}>not select</label>
                <Field component={"input"} type={"radio"} />
              </div>
            </div>

            <label for="name" className={s.tips}>Country</label>
            <select className={s.input_field}>
              <option>Russia</option>
              <option>America</option>
              <option>Britain</option>
              <option>Belarus</option>
              <option>Ukraine</option>
              <option>Japan</option>
            </select> <br />

            <label for="name" className={s.tips}>Password</label>
            <Field placeholder={"XXXXXXXXX"} component={"input"} name={"password"} className={s.input_field} /><br />

            <label for="name" className={s.tips}>Repeat password</label>
            <Field placeholder={"XXXXXXXXX"} component={"input"} name={"password"} className={s.input_field} /><br />

            <Field component={"input"} type={"checkbox"} name={"dataProcessing"} />
            <label for="" className={s.tips}>Consent to the privacy policy</label>
            <br />

            <div className={s.form_block_buttons} >
              <button className={s.form_buttons}>enter</button>
            </div>
      </form>
    </div>
    )
}

const RegistrationReduxForm = reduxForm({
  form: 'registration'
}) (RegistrationForm)

const Registration = (props) =>{
  
  const onSubmit = (formData) =>{
    console.log(formData);
  }
  
  return (
      <div className={s.login}>
      <div className={s.header_h1}>
        <h1>Create your profile</h1>
      </div>
      <RegistrationReduxForm onSubmit={onSubmit} />
      </div>
    );
}

export default Registration;
