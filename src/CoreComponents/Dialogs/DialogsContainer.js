import React from 'react';
import {connect} from 'react-redux';
import * as axios from 'axios';
import Dialogs from './Dialogs';
import {withAuthRedirect} from '../../withRedirect/withAuthRedirect';
import {aadUserMessageCreator, nawUserMessageCreator} from '../../state/dialogsReducer';


class DialogsAPI extends React.Component {

  render () {
    return <Dialogs dialogData={this.props.dialogData} 
    messageData={this.props.messageData}
    />
  }
}

let AuthLogsContainer = withAuthRedirect(DialogsAPI);

let mapStateToProps = (state) =>{
  return{
    dialogData: state.dialogs.dialogData,
    messageData: state.dialogs.messageData,
    isAuth: state.auth.isAuth
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthLogsContainer);

export default DialogsContainer;
