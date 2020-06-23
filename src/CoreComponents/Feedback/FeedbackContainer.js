import React from 'react';
import {connect} from 'react-redux';
import * as axios from 'axios';
import Feedback from './Feedback';
import {aadUserMessageCreator, nawUserMessageCreator} from '../../state/dialogsReducer';

class FeedbackAPI extends React.Component {
  render () {
    return <Feedback />
  }
}

let mapStateToProps = (state) =>{
  return{}
}
let mapDispatchToProps = (dispatch) =>{
  return {}
}

const FeedbackContainer = connect(mapStateToProps, mapDispatchToProps)(FeedbackAPI);

export default FeedbackContainer;
