import React from 'react';
import {connect} from 'react-redux';
import * as axios from 'axios';
import Dialogs from './Dialogs';
import {aadUserMessageCreator, nawUserMessageCreator} from '../../state/dialogsReducer';

class DialogsAPI extends React.Component {
  render () {
    return <Dialogs dialogData={this.props.dialogData} 
    messageData={this.props.messageData} 
    />
  }
}

let mapStateToProps = (state) =>{
  return{
    dialogData: state.dialogs.dialogData,
    messageData: state.dialogs.messageData
  }
}
let mapDispatchToProps = (dispatch) =>{
  return {
    aadUserMessage: () => {
     dispatch(aadUserMessageCreator());
   },
   nawUserMessage: (text) => {
     dispatch(nawUserMessageCreator(text));
   }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsAPI);

export default DialogsContainer;
