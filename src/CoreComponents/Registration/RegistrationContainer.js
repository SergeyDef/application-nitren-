import React from 'react';
import {connect} from 'react-redux';
import * as axios from 'axios';
import Registration from './Registration';
import {aadUserMessageCreator, nawUserMessageCreator} from '../../state/dialogsReducer';

class RegistrationAPI extends React.Component {
  render () {
    return <Registration />
  }
}

let mapStateToProps = (state) =>{
  return{}
}
let mapDispatchToProps = (dispatch) =>{
  return {}
}

const RegistrationContainer = connect(mapStateToProps, mapDispatchToProps)(RegistrationAPI);

export default RegistrationContainer;
