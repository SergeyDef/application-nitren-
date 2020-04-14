import React from 'react';
import FormInformation from './FormInformation';
import {aadUserMessageCreator, nawUserMessageCreator} from '../../../state/dialogsReducer';
import {connect} from "react-redux";
 
let mapStateToProps = (state) =>{
	return {
		newMessagText: state.newMessagText,
		newUserMessage: state.newUserMessage
	}
}
let mapDispatchToProps = (dispatch) =>{
	return {
		sendMessage: () => {
			dispatch(aadUserMessageCreator());
		},
		messagChenge: (text) => {
			let action = dispatch(nawUserMessageCreator(text));
		}
	}
}
const FormInformationContainer = connect(mapStateToProps, mapDispatchToProps)(FormInformation);

export default FormInformationContainer;
