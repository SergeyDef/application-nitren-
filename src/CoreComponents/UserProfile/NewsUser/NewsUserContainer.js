import React from 'react'; 
import {addUserPostCreator, updateNawPostTextCreator} from '../../../state/userProfileReducer';
import NewsUser from './NewsUser';
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
	return {
		userPostDate: state.userProfile.userPostDate,
		newPostText: state.userProfile.newPostText
	}
}

let mapDispatchToProps = (dispatch) =>{
	return {
		publish: () =>{
			dispatch(addUserPostCreator());
		},
		postChange: (text) =>{
			let action = dispatch(updateNawPostTextCreator(text));
		}
	}
}

const NewsUserContainer = connect(mapStateToProps, mapDispatchToProps)(NewsUser);

export default NewsUserContainer;
