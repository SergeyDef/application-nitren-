import React from 'react';
import {connect} from 'react-redux';
import UserFriend from './UserFriend';

let mapStateToProps = (state) =>{
	return {
		userFriendAwa: state.userProfile.userFriendAwa
	}
}
let mapDispatchToProps = () =>{
	return {
		
	}
}

const UserFriendContainer = connect(mapStateToProps, mapDispatchToProps)(UserFriend);

export default UserFriendContainer;
