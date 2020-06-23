import React from 'react';
import {NavLink} from 'react-router-dom';
import FeedbackContainer from './FeedbackContainer';
import s from './Feedback.module.scss';
import {Field, reduxForm} from 'redux-form';
import {required, maxLenghCreator} from '../../utils/validator/required';

const maxLength30 = maxLenghCreator(30);
 
const FeedbackForm = (props) =>{
  return (
    <div className={s.feedback__form}>
      <form onSubmit={props.handleSubmit} 
      className={s.form} 
      action="/telegram" 
      method="post" id="telegramForm" 
      enctype="application/x-www-form-urlencoded">

          <label for="name" className={s.form__name__item}>Name</label>
            <Field placeholder={"Robert Schneider"} 
            component={"input"} name={"login"} 
            className={s.form__item} 
            validate={[required, maxLength30]} /><br />

            <label for="name" className={s.form__name__item}>Email</label>
            <Field placeholder={"xxxxxxxxx@xxxx.xxx"} 
            component={"input"} name={"login"} 
            className={s.form__item} 
            validate={[required, maxLength30]} /> <br />

            <label for="name" className={s.form__name__item}>Message</label>
            <Field placeholder={"Your message"} 
            component={"textarea"} name={"login"} 
            className={s.form__textarea} 
            validate={[required, maxLength30]} /> <br />

            <Field component={"input"} type={"checkbox"} name={"dataProcessing"} />
            <label for="" className={s.form__name__item}>Consent to the privacy policy</label>
            <br />

            <div className={s.form__block__buttons} >
              <button className={s.buttons}>enter</button>
              <button className={s.buttons}>clear</button>
            </div>
      </form>
    </div>
    )
}

const FeedbackReduxForm = reduxForm({
  form: 'registration'
}) (FeedbackForm)

const Feedback = (props) =>{
  
  const onSubmit = (formData) =>{
    console.log(formData);
  }
  
  return (
      <div className={s.login}>
      <div className={s.login__header}>
        <h1>Create your profile</h1>
      </div>
      <FeedbackReduxForm onSubmit={onSubmit} />
      </div>
    );
}

export default Feedback;
