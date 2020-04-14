import React from 'react';
import {connect} from 'react-redux';
import UserProfile from './UserProfile';
import * as axios from 'axios';
import {setUserProfileData} from '../../state/userProfileReducer';

class UserProfileAPI extends React.Component {

	componentDidMount(){
		axios.get("https://raw.githubusercontent.com/SergeyDef/nitrenJSON-/master/user.json").then(response =>{
			this.props.setUserProfileData(response.data);
		});
	}
	render (){
		return <UserProfile {...this.props}
		names={this.props.names}
		avatars={this.props.avatars}
		userData={this.props.userData}
		/>
	}
}

let mapStateToProps = (state) =>({
  	profile: state.userProfile.profile,
    names: state.userProfile.name,
    avatars: state.userProfile.avatar,
    userData: state.userProfile.userData
});

const UserProfileContainer = connect(mapStateToProps, {setUserProfileData})(UserProfileAPI);

export default UserProfileContainer;

