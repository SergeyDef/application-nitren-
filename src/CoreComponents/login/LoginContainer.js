import React from 'react';
import {connect} from 'react-redux';
import * as axios from 'axios';
import Login from './Login';
import {aadUserMessageCreator, nawUserMessageCreator} from '../../state/dialogsReducer';

class LoginAPI extends React.Component {
  render () {
    return <Login />
  }
}

let mapStateToProps = (state) =>{
  return{}
}
let mapDispatchToProps = (dispatch) =>{
  return {}
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginAPI);

export default LoginContainer;
