import React from 'react';
import {NavLink, Redirect} from 'react-router-dom';
import LoginContainer from './LoginContainer';
import s from './Login.module.scss';
import {Field, reduxForm} from 'redux-form';
import {Input, InputPassword} from '../FormsControls/FormsControls';
import {connect} from 'react-redux';
import {logInSite} from '../../state/authReducer';
import about from '../../assec/login/about-us.svg';
import feedback from '../../assec/login/feedback.svg';
import terms from '../../assec/login/terms-use.svg';
import privacy from '../../assec/login/privacy-policy.svg';
import registration from '../../assec/login/registration-users.svg';
import {required, maxLenghCreator} from '../../utils/validator/required';

const maxLength30 = maxLenghCreator(30);
 
const LoginForm = (props) =>{
  return (
    <div className={s.identification__form}>
      <form onSubmit={props.handleSubmit} className={s.form} >
        <fieldset className={s.form__line}>
          <legend className={s.form__name}>Данные профеля</legend>

          <label for="name" className={s.form__name__item}>Name</label>
            <Field 
              component={Input} 
              name={"email"}
              className={s.form__item} 
              validate={[required, maxLength30]} /><br />

              <label for="name" className={s.form__name__item}>Password</label>
            <Field 
              component={InputPassword}
              name={"password"} 
              className={s.form__item} 
              validate={[required, maxLength30]} /><br />

            <Field 
              component={"input"}
              name={"rememberMy"}
              className={s.form__item__checkbox}
              type={"checkbox"} /><br />

            <div className={s.form__block__button} >
              <button className={s.buttons}>enter</button>
            </div>
        </fieldset>
      </form>
    </div>
    )
}

const LoginReduxForm = reduxForm({
  form: 'login'
}) (LoginForm)

const Login = (props) =>{
//
  const practice = () =>{
    
    let user = {
      name: 'John',
      age: 30,
      false: false
    };

    function sumSalaries(obj) {
      return Object.keys(obj).length;
    }

    console.log(sumSalaries(user));
  } 

  const onSubmit = (formData) =>{
    props.logInSite(formData.email, formData.password, formData.rememberMy);
  }

  if (props.isAuth) {
    return <Redirect to={"/userProfile"} />
  }

  return (
      <div className={s.login}>
        <div className={s.login__header}>
          <h1>Log in to your profile</h1>
        </div>
        <div className={s.login__page}>
          <LoginReduxForm onSubmit={onSubmit} />
          <div className={s.additionally}>
            <ul className={s.additionally__block}>

              <li className={s.guide}>
                <div className={s.guide__img__block}>
                  <img src={about} alt="about-us" className={s.guide__img} />
                </div>
                <NavLink to={'/registration'} className={s.guide__link}>
                  <span className={s.guide__text}>О нас</span>
                </NavLink>
              </li>

              <li className={s.guide}>
                <div className={s.guide__img__block}>
                  <img src={feedback} alt="feedback" className={s.guide__img} />
                </div>
                <NavLink to={'/feedback'} className={s.guide__link}>
                  <span className={s.guide__text}>Обратная связь</span>
                </NavLink>
              </li>

              <li className={s.guide}>
                <div className={s.guide__img__block}>
                  <img src={terms} alt="terms-use" className={s.guide__img} />
                </div>
                <NavLink to={'/registration'} className={s.guide__link}>
                  <span className={s.guide__text}>Правила пользования сайтом</span>
                </NavLink>
              </li>

              <li className={s.guide}>
                <div className={s.guide__img__block}>
                  <img src={privacy} alt="privacy-policy" className={s.guide__img} />
                </div>
                <NavLink to={'/registration'} className={s.guide__link}>
                  <span className={s.guide__text}>Политика конфиденциальности</span>
                </NavLink>
              </li>

              <li className={s.guide}>
                <div className={s.guide__img__block}>
                  <img src={registration} alt="registration-users" className={s.guide__img} />
                </div>
                <NavLink to={'/registration'}>
                  <input type="button" id="" value="register" className={s.buttons} />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}

const mapStateToProps =(state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {logInSite})(Login);

/* <br />
<br />
<button onClick={practice} className={s.buttons}>Практика</button> */