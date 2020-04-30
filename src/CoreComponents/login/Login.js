import React from 'react';
import {NavLink, Redirect} from 'react-router-dom';
import LoginContainer from './LoginContainer';
import s from './Login.module.css';
import {Field, reduxForm} from 'redux-form';
import {Input, InputPassword} from '../FormsControls/FormsControls';
import {connect} from 'react-redux';
import {logInSite} from '../../state/authReducer';
import {required, maxLenghCreator} from '../../utils/validator/required';

const maxLength30 = maxLenghCreator(30);
 
const LoginForm = (props) =>{
  return (
    <div className={s.form_block}>
      <form onSubmit={props.handleSubmit} className={s.form} >
        <fieldset>
          <legend className={s.input_list}>Данные профеля</legend>

          <label for="name" className={s.tips}>Name</label>
            <Field component={Input} name={"email"} validate={[required, maxLength30]} /><br />

              <label for="name" className="tips">Password</label>
            <Field 
              component={InputPassword}
              name={"password"} 
              className={s.input_field} 
              validate={[required, maxLength30]} /><br />

            <Field component={"input"} type={"checkbox"} name={"rememberMy"} /><br />

            <div className={s.form_block_buttons} >
            <button className={s.form_buttons}>enter</button>
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

  let practice = () =>{
    
    // for (var i = 0; i <= n; i++) {
    //   if (n > 1 && !(n % i)) {
    //     alert(i);
    //   } 
    // }
  }

  const onSubmit = (formData) =>{
    props.logInSite(formData.email, formData.password, formData.rememberMy);
  }

  if (props.isAuth) {
    return <Redirect to={"/userProfile"} />
  }

  return (
      <div className={s.login}>
      <button onClick={practice} >Практика</button>
      <button onClick={practice} >Показать результат</button>
      <h1>Log in to your profile</h1>
      <LoginReduxForm onSubmit={onSubmit} />
      <NavLink to={'/registration'}>
        <input type="button" id="" value="register" className={s.form_buttons} />
      </NavLink>
      </div>
    );
}

const mapStateToProps =(state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {logInSite})(Login);
