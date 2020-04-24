import React from 'react';
import {NavLink} from 'react-router-dom';
import LoginContainer from './LoginContainer';
import s from './Login.module.css';
import {Field, reduxForm} from 'redux-form';
import {required, maxLenghCreator} from '../../utils/validator/required';

const maxLength30 = maxLenghCreator(30);
 
const LoginForm = (props) =>{
  return (
    <div className={s.form_block}>
      <form onSubmit={props.handleSubmit} className={s.form} >
        <fieldset>
          <legend className={s.input_list}>Данные профеля</legend>
          <label for="name" className={s.tips}>Name</label>
            <Field placeholder={"Robert Schneider"} 
            component={"input"} name={"login"} 
            className={s.input_field} 
            validate={[required, maxLength30]} /><br />
              <label for="name" className="tips">Password</label>
            <Field placeholder={"XXXXXXXXX"} component={"input"} name={"password"} className={s.input_field} /><br />
            <Field component={"input"} type={"checkbox"} name={"dataProcessing"} /><br />
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
    // let text = "Вы верите в бога?";
    // let result = prompt(text);

    // let continueDialogue = () =>{
    //   let dialogue = window.confirm("Продолжить общение?");
    // }

    // let dialogueGod = (ancver) =>{
    //   let dialogue = window.confirm("Почему в " + ancver + "?");
    //   return dialogue
    // }

    // if (result == null) {
    //   alert("Почему не отвечаешь??");
    // } else {
    //   let ancver = prompt("В какого?");
    //   debugger;
    //   (ancver === null) ? continueDialogue() s: dialogueGod();
    //   return ancver
    // }
    // let showResult = (ancver) =>{
    //   alert(ancver);
    // }
    // let question = prompt("Введите число");
    // if (+question > 0) {
    //   alert("Положительное");
    // } else if (+question == 0){
    //   alert("Ноль");
    // } else if(+question < 0){
    //   alert("Отрицательное");
    // } else if (question == NaN) {
    //   alert("Нажата отмена");
    // } else {
    //   alert("введина строка" - question)
    // }
    let login = prompt("Who`s there?");

    if (login === null) {
      alert("Отменено");
    } else if (login != "Админ") {
      alert("I don`t know you");
    } else if (login == "Админ") {
      
      let password = prompt("Пароль?");
      
      if (password === null) {
        alert("Отменено");
      } else if (password == "Я Главный") {
        alert("Здравствуйте!");
      } else {
        alert("Неверный пароль");
      }
      
    }
  }
  const onSubmit = (formData) =>{
    console.log(formData);
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

export default Login;
